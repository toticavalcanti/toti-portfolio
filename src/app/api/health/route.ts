import { NextResponse } from 'next/server';
import { getCostSavings } from '@/lib/cost-controls';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Health Check Endpoint
 * Returns system status + environment variable checks + cost savings
 */
export async function GET() {
    try {
        // Check environment variables
        const envChecks = {
            openai: !!process.env.OPENAI_API_KEY,
            zapi: !!(process.env.ZAPI_INSTANCE_ID && process.env.ZAPI_TOKEN),
            neon: !!process.env.POSTGRES_URL,
            google_calendar: !!(
                process.env.GOOGLE_CLIENT_ID &&
                process.env.GOOGLE_CLIENT_SECRET &&
                process.env.GOOGLE_REFRESH_TOKEN
            ),
        };

        // Get cost savings stats
        const costSavings = getCostSavings();

        // Overall status
        const allOk = Object.values(envChecks).every(v => v);

        return NextResponse.json({
            status: allOk ? 'ok' : 'degraded',
            timestamp: new Date().toISOString(),
            env_checks: envChecks,
            cost_savings: costSavings,
            openai_model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        });
    } catch (error) {
        console.error('[Health] Error:', error);
        return NextResponse.json(
            {
                status: 'error',
                timestamp: new Date().toISOString(),
                error: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}
