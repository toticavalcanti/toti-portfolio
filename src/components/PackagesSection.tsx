'use client';

import Container from './Container';
import SectionTitle from './SectionTitle';
import Button from './Button';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { aboutInfo } from '@/mockData';

const packages = [
  {
    name: 'Site Express',
    description: 'Presença digital profissional em tempo recorde',
    price: 'a partir de R$ 3.000',
    includes: [
      'Landing page responsiva',
      'WhatsApp integrado',
      'SEO básico',
      'Formulário de contato',
    ],
    highlight: false,
  },
  {
    name: 'WhatsApp IA Vendedor',
    description: 'Atendimento automatizado que qualifica leads 24h',
    price: 'a partir de R$ 5.000',
    includes: [
      'Bot humanizado',
      'Captação automática de leads',
      'Handoff para humano',
      'Tags e segmentação',
    ],
    highlight: true,
  },
  {
    name: 'Funil Completo',
    description: 'Do anúncio ao fechamento, tudo integrado',
    price: 'a partir de R$ 15.000',
    includes: [
      'Landing page otimizada',
      'WhatsApp IA integrado',
      'Automação de follow-up',
      'Dashboard de métricas',
    ],
    highlight: false,
  },
  {
    name: 'Pocket Show Premium',
    description: 'Presença digital completa para seu evento',
    price: 'a partir de R$ 2.500',
    includes: [
      'Página do show',
      'Playlist personalizada',
      'Mídia promocional',
      'Contato rápido integrado',
    ],
    highlight: false,
  },
];

export default function PackagesSection() {
  const whatsappUrl = `https://wa.me/${aboutInfo.whatsapp.replace(/\D/g, '')}?text=Olá! Tenho interesse em um pacote.`;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background-secondary">
      <Container>
        <SectionTitle
          title="Pacotes"
          subtitle="Soluções prontas para acelerar seus resultados"
          centered
          className="mx-auto"
        />

        <p className="text-center text-sm text-foreground-secondary mb-10 -mt-4">
          * Valores variam conforme escopo e necessidades específicas
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-xl border transition-all ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-primary/10 to-background border-primary shadow-lg shadow-primary/20'
                  : 'bg-background border-border hover:border-primary/50'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  Popular
                </div>
              )}

              <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
              <p className="text-sm text-foreground-secondary mb-4">{pkg.description}</p>
              
              <div className="text-xl font-bold text-primary mb-4">{pkg.price}</div>

              <ul className="space-y-2 mb-6">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={pkg.highlight ? 'primary' : 'outline'}
                size="sm"
                className="w-full"
              >
                <Link href={whatsappUrl} target="_blank">
                  Quero esse <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-foreground-secondary mb-4">
            Precisa de algo diferente? Montamos um pacote sob medida.
          </p>
          <Button asChild variant="outline">
            <Link href="/contato">
              Solicitar Orçamento Personalizado
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
