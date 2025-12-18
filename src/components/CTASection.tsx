'use client';

import Container from './Container';
import Button from './Button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos conversar sobre{' '}
            <span className="gradient-text">seu projeto</span>?
          </h2>
          <p className="text-xl text-foreground-secondary mb-8">
            Conte o que você precisa. Eu respondo rápido e com proposta clara.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Button size="lg" asChild>
              <Link href="https://wa.me/5511999999999" target="_blank">
                <MessageCircle size={20} className="mr-2" />
                Falar no WhatsApp
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contato">
                Enviar e-mail <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />
    </section>
  );
}
