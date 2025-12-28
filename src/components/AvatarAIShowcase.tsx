'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from './Container';
import SectionTitle from './SectionTitle';
import Button from './Button';
import Link from 'next/link';
import { Play, DollarSign, Clock, TrendingUp, Zap, ArrowRight } from 'lucide-react';

export default function AvatarAIShowcase() {
  const [activeVideo, setActiveVideo] = useState(0);

  // URLs dos vídeos do Instagram do Código Fluente
  // Total de 8 vídeos: 4 com avatares + 4 logo reveals
  const videos = [
    {
      url: 'https://www.instagram.com/p/DMoNmEou1pw/',
      embed: 'https://www.instagram.com/p/DMoNmEou1pw/embed',
      title: 'Avatar apresentando conceitos de programação',
      description: 'Modelo virtual realista explicando desenvolvimento web'
    },
    {
      url: 'https://www.instagram.com/p/DMT5SwcPH88/',
      embed: 'https://www.instagram.com/p/DMT5SwcPH88/embed',
      title: 'Divulgação de curso online',
      description: 'Porta-voz virtual para educação e cursos'
    },
    {
      url: 'https://www.instagram.com/p/DL6GvGCtkyT/',
      embed: 'https://www.instagram.com/p/DL6GvGCtkyT/embed',
      title: 'Anúncio de produto tech',
      description: 'Avatar profissional para marketing de produtos'
    },
    {
      url: 'https://www.instagram.com/p/DMOoJTnPuAR/',
      embed: 'https://www.instagram.com/p/DMOoJTnPuAR/embed',
      title: 'Conteúdo educacional',
      description: 'Apresentador virtual para plataformas de ensino'
    },
    {
      url: 'https://www.instagram.com/p/Cl59qxOrx85/',
      embed: 'https://www.instagram.com/p/Cl59qxOrx85/embed',
      title: 'Logo Reveal Código Fluente #1',
      description: 'Animação profissional de logo com IA'
    },
    {
      url: 'https://www.instagram.com/p/CoEFWZ8sop_/',
      embed: 'https://www.instagram.com/p/CoEFWZ8sop_/embed',
      title: 'Logo Reveal Código Fluente #2',
      description: 'Design de marca animado com elementos visuais'
    },
    {
      url: 'https://www.instagram.com/p/Cq88Q5eMpCP/',
      embed: 'https://www.instagram.com/p/Cq88Q5eMpCP/embed',
      title: 'Logo Reveal Código Fluente #3',
      description: 'Apresentação visual da identidade da marca'
    },
    {
      url: 'https://www.instagram.com/p/Cvlbd7-PC7u/',
      embed: 'https://www.instagram.com/p/Cvlbd7-PC7u/embed',
      title: 'Logo Reveal Código Fluente #4',
      description: 'Motion graphics e animação de logo'
    }
  ];

  // Auto-rotate vídeos a cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <Container>
        <SectionTitle
          title="Vídeos Publicitários com Avatares IA"
          subtitle="Porta-vozes virtuais realistas para suas campanhas em redes sociais"
          centered
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8 sm:mt-10 md:mt-12">
          {/* Lado Esquerdo - Texto e Benefícios */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base sm:text-lg text-foreground-secondary mb-8">
              Criação de vídeos publicitários profissionais usando avatares IA realistas 
              como apresentadores. Ideal para divulgação de produtos, serviços, cursos e 
              conteúdo educacional. <strong className="text-foreground">Custo 80-90% menor 
              que contratação de atores reais.</strong>
            </p>

            {/* Benefícios em Grid - usando mesmo estilo do StatsSection */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="p-4 sm:p-6 rounded-xl border border-border bg-background hover:border-primary transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign size={20} className="sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-sm sm:text-base font-bold mb-1">80-90% Mais Barato</div>
                <div className="text-xs sm:text-sm text-foreground-secondary">
                  Que produção com atores reais
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="p-4 sm:p-6 rounded-xl border border-border bg-background hover:border-primary transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Clock size={20} className="sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-sm sm:text-base font-bold mb-1">Entrega Rápida</div>
                <div className="text-xs sm:text-sm text-foreground-secondary">
                  3-5 dias vs semanas
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-4 sm:p-6 rounded-xl border border-border bg-background hover:border-primary transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp size={20} className="sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-sm sm:text-base font-bold mb-1">Escalável</div>
                <div className="text-xs sm:text-sm text-foreground-secondary">
                  Dezenas de vídeos rapidamente
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="p-4 sm:p-6 rounded-xl border border-border bg-background hover:border-primary transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Zap size={20} className="sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-sm sm:text-base font-bold mb-1">Fotorrealista</div>
                <div className="text-xs sm:text-sm text-foreground-secondary">
                  Qualidade indistinguível
                </div>
              </motion.div>
            </div>

            {/* Pricing Card - usando mesmo estilo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-background-secondary mb-8"
            >
              <div className="text-sm text-foreground-secondary mb-2">Precificação por segundo:</div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-2xl sm:text-3xl font-bold text-foreground">R$ 15-50</span>
                <span className="text-foreground-secondary">/segundo de vídeo</span>
              </div>
              <div className="text-sm text-foreground-secondary">
                Vídeo típico de 30s para Instagram: <strong className="text-foreground">R$ 900</strong>
              </div>
            </motion.div>

            {/* CTAs - usando componente Button padrão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild>
                <Link href="/servicos#6">
                  Ver Detalhes e Preços
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contato">
                  Solicitar Orçamento
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Lado Direito - Vídeos do Instagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Vídeo Principal */}
            <div className="relative rounded-xl overflow-hidden border border-border bg-background-secondary mb-6 shadow-lg">
              <div className="aspect-[9/16] max-h-[600px]">
                <iframe
                  src={videos[activeVideo].embed}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="encrypted-media"
                />
              </div>

              {/* Info do Vídeo - overlay sutil */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                  {videos[activeVideo].title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">
                  {videos[activeVideo].description}
                </p>
              </div>
            </div>

            {/* Thumbnails / Seletor - Grid de 4 colunas (8 vídeos = 2 linhas) */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVideo(index)}
                  className={`
                    relative aspect-[9/16] rounded-lg overflow-hidden
                    transition-all duration-300 border-2
                    ${activeVideo === index 
                      ? 'border-primary scale-105 shadow-lg' 
                      : 'border-border hover:border-primary/50 opacity-60 hover:opacity-100'
                    }
                  `}
                >
                  {/* Placeholder com gradiente - padrão do site */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Play size={20} className="sm:w-6 sm:h-6 text-primary drop-shadow" />
                  </div>
                  
                  {/* Número do vídeo */}
                  <div className="absolute top-1.5 right-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-background/80 backdrop-blur text-foreground text-xs flex items-center justify-center font-medium">
                    {index + 1}
                  </div>
                </button>
              ))}
            </div>

            {/* Link para Instagram - estilo padrão de links */}
            <div className="text-center">
              <a
                href="https://www.instagram.com/codigofluente/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary hover:gap-3 transition-all"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Ver mais exemplos no @codigofluente
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
