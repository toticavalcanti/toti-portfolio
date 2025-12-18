'use client';

import Container from './Container';
import { aboutInfo } from '@/mockData';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Music, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Full-Stack Dev', color: 'from-primary to-primary-light' },
  { icon: Music, label: 'Produção Musical', color: 'from-secondary to-secondary-light' },
  { icon: Sparkles, label: 'IA Generativa', color: 'from-accent to-warning' },
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-border">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-foreground-secondary">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">TC</span>
                  </div>
                  <p className="text-sm">Avatar placeholder</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Sobre <span className="gradient-text">Mim</span>
            </h2>
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              {aboutInfo.bio}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-background-secondary border border-border hover:border-primary transition-colors"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-2`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <p className="text-xs text-foreground-secondary">{item.label}</p>
                </div>
              ))}
            </div>

            <a
              href="/sobre"
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium"
            >
              Saiba mais sobre mim →
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
