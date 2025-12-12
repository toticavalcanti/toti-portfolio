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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <span className="text-sm font-medium text-primary">
                ✨ Bem-vindo ao Código Fluente Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Criando o Futuro com{' '}
              <span className="gradient-text">IA & Código</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-foreground-secondary mb-8 max-w-2xl"
            >
              Desenvolvimento full-stack, clipes musicais com IA, personagens
              virtuais e experimentos audiovisuais. Transformando ideias em
              experiências digitais únicas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/portfolio">
                  Ver Portfólio <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contato">
                  Fale Comigo
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
                  <p className="text-foreground-secondary">
                    Assista ao showreel
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
