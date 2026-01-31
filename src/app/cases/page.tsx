'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import PageHeader from '@/components/PageHeader';
import { ExternalLink, ArrowDown, Target, Wrench, Layers, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutInfo } from '@/mockData';

// Case studies data
const cases = [
  {
    slug: 'neurozen',
    name: 'NeuroZen',
    description: 'Landing de livro + chat IA para tirar dúvidas e aumentar conversão.',
    tags: ['Landing', 'Chat IA', 'Groq'],
    liveUrl: 'https://neurozen-book.netlify.app/',
    objective: 'Criar landing de livro com chat IA integrado para responder dúvidas em tempo real.',
    whatWasDone: 'Landing page responsiva + chat IA usando Groq para respostas rápidas e contextuais.',
    stack: 'HTML/CSS + Groq API + UI de Chat customizado',
    ctaText: 'Quero um chat desse no meu site',
  },
  {
    slug: 'magic-prompts',
    name: 'Magic Prompts',
    description: 'Landing de infoproduto + galeria para provar qualidade visual.',
    tags: ['Landing', 'Galeria', 'Conversão'],
    liveUrl: 'https://magic-prompts.netlify.app/',
    objective: 'Vender pacote de prompts de IA com demonstração visual da qualidade.',
    whatWasDone: 'Landing com galeria de exemplos + estrutura de vendas otimizada para conversão.',
    stack: 'Landing Page + Galeria Lightbox + CTAs estratégicos',
    ctaText: 'Quero uma landing que converte',
  },
  {
    slug: 'emagrecer-depois-dos-40',
    name: 'Emagrecer Depois dos 40',
    description: 'Landing com estrutura clássica de venda e navegação por seções.',
    tags: ['Landing', 'Copy', 'Estrutura'],
    liveUrl: 'https://emagrecerdepoisdos40.netlify.app/',
    objective: 'Criar página de vendas com estrutura persuasiva e navegação intuitiva.',
    whatWasDone: 'Landing page com seções organizadas, copy de vendas e CTAs distribuídos.',
    stack: 'Landing Page + Seções + Múltiplos CTAs',
    ctaText: 'Quero vender meu produto',
  },
];

export default function CasesPage() {
  const whatsappBase = `https://wa.me/${aboutInfo.whatsapp.replace(/\D/g, '')}`;

  return (
    <>
      <PageHeader
        title="Cases"
        description="Projetos reais entregues para clientes — resultados que você pode conferir ao vivo"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cases' },
        ]}
      />

      {/* Cases Grid */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-background-secondary border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Cover Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/assets/cases/${caseItem.slug}/cover.jpg`}
                    alt={caseItem.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{caseItem.name}</h3>
                  <p className="text-foreground-secondary text-sm mb-4">{caseItem.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {caseItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-2">
                    <Button asChild size="sm">
                      <Link href={caseItem.liveUrl} target="_blank">
                        <ExternalLink size={16} className="mr-2" />
                        Ver ao vivo
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={`#${caseItem.slug}`}>
                        <ArrowDown size={16} className="mr-2" />
                        Ver detalhes
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Details Sections */}
      {cases.map((caseItem, index) => {
        const whatsappUrl = `${whatsappBase}?text=${encodeURIComponent(`Olá! ${caseItem.ctaText}`)}`;

        return (
          <section
            key={caseItem.slug}
            id={caseItem.slug}
            className={`py-16 sm:py-20 scroll-mt-24 ${index % 2 === 0 ? 'bg-background-secondary' : ''}`}
          >
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold">{caseItem.name}</h2>
                    <p className="text-foreground-secondary">{caseItem.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Preview Images */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                      <Image
                        src={`/assets/cases/${caseItem.slug}/preview-1.jpg`}
                        alt={`${caseItem.name} - Preview 1`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                      <Image
                        src={`/assets/cases/${caseItem.slug}/preview-2.jpg`}
                        alt={`${caseItem.name} - Preview 2`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Target size={20} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">Objetivo</h4>
                          <p className="text-sm text-foreground-secondary">{caseItem.objective}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Wrench size={20} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">O que foi feito</h4>
                          <p className="text-sm text-foreground-secondary">{caseItem.whatWasDone}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Layers size={20} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-1">Stack</h4>
                          <p className="text-sm text-foreground-secondary">{caseItem.stack}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button asChild>
                        <Link href={caseItem.liveUrl} target="_blank">
                          <ExternalLink size={18} className="mr-2" />
                          Abrir site
                        </Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link href={whatsappUrl} target="_blank">
                          <MessageCircle size={18} className="mr-2" />
                          {caseItem.ctaText}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Container>
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="py-16 sm:py-20 border-t border-border">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Quer um projeto como esses?
            </h2>
            <p className="text-foreground-secondary mb-8">
              Conte sua ideia e receba uma proposta personalizada em até 24h.
            </p>
            <Button asChild size="lg">
              <Link href={`${whatsappBase}?text=${encodeURIComponent('Olá! Vi os cases do site e quero um projeto assim.')}`} target="_blank">
                <MessageCircle size={20} className="mr-2" />
                Falar no WhatsApp
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
