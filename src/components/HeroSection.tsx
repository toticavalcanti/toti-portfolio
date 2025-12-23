'use client';

import Container from './Container';
import Button from './Button';
import ParticlesBackground from './ParticlesBackground';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/50 to-background -z-10" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-xs sm:text-sm font-medium text-primary">
                ⚡ Engenheiro × Criador × Diretor Técnico
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight"
            >
              Sistemas Inteligentes.{' '}
              <span className="gradient-text">Conteúdo Impossível.</span>
              {' '}Resultados Reais.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-foreground-secondary mb-6 sm:mb-7 md:mb-8 max-w-2xl leading-relaxed"
            >
              Desenvolvimento full-stack, automação inteligente e produção audiovisual generativa. Mais de uma década construindo, testando e entregando projetos que integram código, IA e criação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button size="md" asChild>
                <Link href="/portfolio">
                  Projetos Realizados <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button size="md" variant="outline" asChild>
                <Link href="/contato">
                  Iniciar Conversa
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden bg-background-secondary border border-border glow-border group">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-foreground font-semibold mb-1">
                    Vídeo criado com avatar digital próprio
                  </p>
                  <p className="text-foreground-secondary text-sm">
                    30s sobre método, experiência e resultados
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl opacity-20 blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-primary rounded-2xl opacity-20 blur-2xl animate-pulse-glow" />
          </motion.div>
        </div>
      </Container>


    </section>
  );
}
