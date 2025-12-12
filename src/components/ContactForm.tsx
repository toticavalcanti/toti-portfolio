'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';
import { Send } from 'lucide-react';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  projectType: z.string().min(1, 'Selecione um tipo de projeto'),
  budgetRange: z.string().min(1, 'Selecione uma faixa de orçamento'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { value: '', label: 'Selecione...' },
  { value: 'clipe', label: 'Clipe Musical com IA' },
  { value: 'personagem', label: 'Personagem Virtual' },
  { value: 'banda', label: 'Banda Virtual' },
  { value: 'webapp', label: 'Aplicação Web' },
  { value: 'outro', label: 'Outro' },
];

const budgetRanges = [
  { value: '', label: 'Selecione...' },
  { value: '1k-5k', label: 'R$ 1.000 - R$ 5.000' },
  { value: '5k-10k', label: 'R$ 5.000 - R$ 10.000' },
  { value: '10k-20k', label: 'R$ 10.000 - R$ 20.000' },
  { value: '20k+', label: 'R$ 20.000+' },
  { value: 'nao-sei', label: 'Não tenho certeza' },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Form data:', data);
    setSubmitSuccess(true);
    reset();
    
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <TextInput
          label="Nome"
          placeholder="Seu nome completo"
          {...register('name')}
          error={errors.name?.message}
        />
        <TextInput
          label="Email"
          type="email"
          placeholder="seu@email.com"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Select
          label="Tipo de Projeto"
          options={projectTypes}
          {...register('projectType')}
          error={errors.projectType?.message}
        />
        <Select
          label="Faixa de Orçamento"
          options={budgetRanges}
          {...register('budgetRange')}
          error={errors.budgetRange?.message}
        />
      </div>

      <TextArea
        label="Mensagem"
        placeholder="Conte-me mais sobre seu projeto..."
        rows={6}
        {...register('message')}
        error={errors.message?.message}
      />

      {submitSuccess && (
        <div className="p-4 rounded-lg bg-success/10 border border-success text-success">
          Mensagem enviada com sucesso! Entrarei em contato em breve.
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
