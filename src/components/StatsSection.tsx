'use client';

import Container from './Container';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';

const stats = [
  {
    number: '2.8M+',
    label: 'Total de Visualizações',
    description: 'Clipes de Zé Ramalho com IA',
  },
  {
    number: '6',
    label: 'Projetos em Destaque',
    description: 'Do código à criatividade',
  },
  {
    number: '4',
    label: 'Plataformas',
    description: 'Scarlett Finch Influencer',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden bg-background-secondary">
      <Container>
        <SectionTitle
          title="Resultados Comprovados"
          subtitle="Números que provam a eficácia da combinação entre tecnologia, IA e arte"
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mt-8 sm:mt-10 md:mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-foreground-secondary">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
