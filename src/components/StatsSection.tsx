'use client';

import Container from './Container';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Globe, User, Code } from 'lucide-react';

const projects = [
  {
    id: '1',
    icon: Globe,
    title: 'Site Oficial Zé Ramalho',
    description: 'Frontend + Backend + Next.js + MongoDB',
    tech: 'Produção',
    url: 'https://www.zeramalho.com.br',
    external: true,
  },
  {
    id: '2',
    icon: User,
    title: 'Scarlett Finch',
    description: 'Personagem Virtual + IA',
    tech: 'Cantora Britânica + Influencer Digital+ IA Generativa',
    url: 'https://www.youtube.com/@scarlettfinchofficial',
    external: true,
  },
  {
    id: '3',
    icon: Code,
    title: 'Código Fluente',
    description: 'Plataforma Educacional',
    tech: 'Tutoriais Gratuitos + Programação + DevOps + IA',
    url: 'https://www.codigofluente.com.br',
    external: true,
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden bg-background-secondary">
      <Container>
        <SectionTitle
          title="Sistemas em Produção"
          subtitle="Sites, aplicações web e projetos audiovisuais operando em produção"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const Component = project.external ? 'a' : Link;
            const linkProps = project.external
              ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
              : { href: project.url };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Component
                  {...linkProps}
                  className="block p-6 rounded-xl border border-border bg-background hover:border-primary transition-all duration-300 group h-full"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-primary" />
                    </div>
                    
                    <h3 className="text-base font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-foreground-secondary mb-1 line-clamp-1">
                      {project.description}
                    </p>
                    
                    <p className="text-xs text-foreground-muted line-clamp-1 flex-1">
                      {project.tech}
                    </p>
                    
                    <div className="flex items-center gap-1 text-xs text-primary mt-4 group-hover:gap-2 transition-all">
                      {project.external ? 'Ver projeto' : 'Ver mais'}
                      <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Component>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
