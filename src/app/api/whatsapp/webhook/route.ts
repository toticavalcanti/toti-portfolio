import { NextRequest, NextResponse } from 'next/server';
import type { ZAPIWebhookPayload } from '@/types/whatsapp';
import { processMessage } from '@/lib/agent-processor';
import { sendMessage } from '@/lib/zapi';
import { getLeadByPhone, upsertLead } from '@/lib/leads';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TIMEOUT_MS = 9000; // 9 seconds (safe for Vercel 10s limit)
const TIMEOUT_FALLBACK_MESSAGE = 'Recebi sua mensagem 🙂 Já já te respondo por aqui.';

/**
 * Z-API Webhook Handler (SYNCHRONOUS for Vercel reliability)
 * Receives incoming WhatsApp messages and processes them
 */
export async function POST(request: NextRequest) {
    try {
        const payload = await request.json() as ZAPIWebhookPayload;

        console.log('[Webhook] Received:', {
            phone: payload.phone,
            type: payload.type,
            fromMe: payload.fromMe,
            messageId: payload.messageId,
        });

        // Ignore messages sent by us
        if (payload.fromMe) {
            return NextResponse.json({ status: 'ignored', reason: 'from_me' });
        }

        // Only process text messages for now
        if (payload.type !== 'text' || !payload.text?.message) {
            return NextResponse.json({ status: 'ignored', reason: 'not_text' });
        }

        // Ignore group messages
        if (payload.isGroup) {
            return NextResponse.json({ status: 'ignored', reason: 'group_message' });
        }

        const phone = payload.phone;
        const message = payload.text.message;
        const messageId = payload.messageId;

        if (!phone || !message) {
            return NextResponse.json(
                { error: 'Missing phone or message' },
                { status: 400 }
            );
        }

        // ============================================
        // IDEMPOTENCY CHECK - Prevent duplicate processing
        // ============================================
        if (messageId) {
            const lead = await getLeadByPhone(phone);
            if (lead && lead.last_message_id === messageId) {
                console.log('[Webhook] Duplicate messageId detected - ignoring');
                return NextResponse.json({
                    status: 'ignored',
                    reason: 'duplicate_messageId',
                });
            }
        }

        // ============================================
        // SYNCHRONOUS PROCESSING with timeout protection
        // ============================================
        try {
            const reply = await Promise.race([
                // Main processing
                (async () => {
                    const result = await processMessage(phone, message);
                    await sendMessage(phone, result);
                    return result;
                })(),
                // Timeout fallback
                new Promise<string>((_, reject) => {
                    setTimeout(() => reject(new Error('TIMEOUT')), TIMEOUT_MS);
                }),
            ]);

            // Update last_message_id after successful processing
            if (messageId) {
                await upsertLead(phone, { last_message_id: messageId });
            }

            console.log('[Webhook] Processed successfully:', { phone, messageId });

            return NextResponse.json({
                status: 'success',
                reply: reply.substring(0, 100), // Log preview only
            });
        } catch (error) {
            // Timeout or processing error
            if (error instanceof Error && error.message === 'TIMEOUT') {
                console.warn('[Webhook] Timeout - sending fallback message');

                // Send fallback message
                await sendMessage(phone, TIMEOUT_FALLBACK_MESSAGE);

                // Still update messageId to prevent reprocessing
                if (messageId) {
                    await upsertLead(phone, { last_message_id: messageId });
                }

                return NextResponse.json({
                    status: 'timeout',
                    message: 'Processed with fallback',
                });
            }

            // Other errors
            throw error;
        }
    } catch (error) {
        console.error('[Webhook] Error:', error);
        return NextResponse.json(
            {
                error: 'Internal server error',
                details: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}

/**
 * Health check endpoint
 */
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        service: 'whatsapp-webhook',
        timestamp: new Date().toISOString(),
        mode: 'synchronous', // Updated
    });
}
