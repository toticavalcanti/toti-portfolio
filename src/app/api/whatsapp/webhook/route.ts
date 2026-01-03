import { NextRequest, NextResponse } from 'next/server';
import type { ZAPIWebhookPayload } from '@/types/whatsapp';
import { processMessage } from '@/lib/agent-processor';
import { sendMessage } from '@/lib/zapi';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Z-API Webhook Handler
 * Receives incoming WhatsApp messages and processes them
 */
export async function POST(request: NextRequest) {
    try {
        const payload = await request.json() as ZAPIWebhookPayload;

        console.log('[Webhook] Received:', {
            phone: payload.phone,
            type: payload.type,
            fromMe: payload.fromMe,
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

        if (!phone || !message) {
            return NextResponse.json(
                { error: 'Missing phone or message' },
                { status: 400 }
            );
        }

        // Process message asynchronously
        // We return quickly to Z-API and process in background
        const processAndRespond = async () => {
            try {
                const reply = await processMessage(phone, message);
                await sendMessage(phone, reply);
            } catch (error) {
                console.error('[Webhook] Error processing message:', error);
            }
        };

        // Don't await - process in background
        processAndRespond();

        // Return immediately to Z-API
        return NextResponse.json({ status: 'received' });
    } catch (error) {
        console.error('[Webhook] Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
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
    });
}
