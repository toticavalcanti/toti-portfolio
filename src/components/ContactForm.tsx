'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';
import { Send, AlertCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { aboutInfo } from '@/mockData';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  whatsapp: z.string().min(10, 'WhatsApp inválido (mínimo 10 dígitos)'),
  pilar: z.string().min(1, 'Selecione o tipo de projeto'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(500, 'Mensagem muito longa (máximo 500 caracteres)'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const pilarOptions = [
  { value: '', label: 'Selecione...' },
  { value: 'ia-automacao', label: 'IA & Automação' },
  { value: 'sites-sistemas', label: 'Sites & Sistemas' },
  { value: 'audiovisual-musica', label: 'Audiovisual & Música' },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${aboutInfo.whatsapp.replace(/\D/g, '')}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        setSubmitError(result.message || 'Erro ao enviar mensagem. Tente novamente.');
        return;
      }

      setSubmitSuccess(true);
      reset();
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 10000);

    } catch {
      setSubmitError('Erro de conexão. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <TextInput
        label="Nome *"
        placeholder="Seu nome completo"
        {...register('name')}
        error={errors.name?.message}
      />

      <TextInput
        label="WhatsApp *"
        placeholder="(21) 99999-9999"
        {...register('whatsapp')}
        error={errors.whatsapp?.message}
      />

      <Select
        label="Área de Interesse *"
        options={pilarOptions}
        {...register('pilar')}
        error={errors.pilar?.message}
      />

      <TextArea
        label="Mensagem *"
        placeholder="Descreva brevemente seu projeto ou necessidade..."
        rows={4}
        {...register('message')}
        error={errors.message?.message}
      />

      {submitSuccess && (
        <div className="p-4 rounded-lg bg-success/10 border border-success text-success">
          ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      {submitError && (
        <div className="p-4 rounded-lg bg-error/10 border border-error text-error">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
            <div>
              <p>{submitError}</p>
              <Link
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center gap-2 mt-2 text-sm font-medium hover:underline"
              >
                <MessageCircle size={16} />
                Contato via WhatsApp
              </Link>
            </div>
          </div>
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            Enviar Mensagem <Send size={20} className="ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}
