import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Validation schema for contact form
const contactSchema = z.object({
    name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    whatsapp: z.string().min(10, 'WhatsApp inválido').max(20, 'WhatsApp inválido'),
    pilar: z.enum(['ia-automacao', 'sites-sistemas', 'audiovisual-musica'], {
        errorMap: () => ({ message: 'Selecione um pilar válido' }),
    }),
    message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(500, 'Mensagem muito longa'),
});

type ContactData = z.infer<typeof contactSchema>;

/**
 * POST /api/contact - Capture lead from contact form
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validationResult = contactSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Dados inválidos. Verifique os campos e tente novamente.',
                    errors: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const data: ContactData = validationResult.data;

        // Check if DATABASE_URL is configured
        const databaseUrl = process.env.DATABASE_URL;

        if (!databaseUrl) {
            console.warn('[Contact API] DATABASE_URL not configured - lead not saved');
            return NextResponse.json(
                {
                    success: false,
                    message: 'Sistema de contato temporariamente indisponível. Por favor, entre em contato pelo WhatsApp: (21) 98226-6075',
                },
                { status: 503 }
            );
        }

        // Import db module dynamically to avoid errors when DATABASE_URL is not set
        const { query } = await import('@/lib/db');

        // Format WhatsApp number (remove non-digits)
        const formattedPhone = data.whatsapp.replace(/\D/g, '');

        // Map pilar to readable name
        const pilarNames: Record<string, string> = {
            'ia-automacao': 'IA & Automação',
            'sites-sistemas': 'Sites & Sistemas',
            'audiovisual-musica': 'Audiovisual & Música',
        };

        // Insert lead into database
        const insertSql = `
      INSERT INTO leads (
        phone, 
        name, 
        service_interest, 
        notes, 
        status,
        conversation_history,
        created_at,
        updated_at
      )
      VALUES ($1, $2, $3, $4, 'new', '[]', NOW(), NOW())
      ON CONFLICT (phone) 
      DO UPDATE SET 
        name = EXCLUDED.name,
        service_interest = EXCLUDED.service_interest,
        notes = CONCAT(leads.notes, E'\n---\n', EXCLUDED.notes),
        updated_at = NOW()
      RETURNING id
    `;

        const result = await query(insertSql, [
            formattedPhone,
            data.name,
            pilarNames[data.pilar] || data.pilar,
            `[Formulário Site] ${data.message}`,
        ]);

        if (result.rowCount === 0) {
            throw new Error('Failed to insert lead');
        }

        console.log('[Contact API] Lead saved successfully:', {
            phone: formattedPhone,
            name: data.name,
            pilar: data.pilar
        });

        return NextResponse.json({
            success: true,
            message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        });

    } catch (error) {
        console.error('[Contact API] Error:', error);

        // Return user-friendly error
        return NextResponse.json(
            {
                success: false,
                message: 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp: (21) 98226-6075',
            },
            { status: 500 }
        );
    }
}
