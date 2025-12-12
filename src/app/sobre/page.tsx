'use client';

import { lazy, Suspense } from 'react';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/Container';
import Timeline from '@/components/Timeline';
import { aboutInfo, timeline } from '@/mockData';
import { Code2, Music, Sparkles, Zap } from 'lucide-react';

const Scene3D = lazy(() => import('@/components/Scene3D'));

const skills = [
  { icon: Code2, label: 'Full-Stack Development', items: ['React', 'Next.js', 'Node.js', 'TypeScript'] },
  { icon: Sparkles, label: 'IA Generativa', items: ['Stable Diffusion', 'Midjourney', 'ChatGPT', 'Runway'] },
  { icon: Music, label: 'Produção Musical', items: ['Ableton', 'FL Studio', 'Mixing', 'Mastering'] },
  { icon: Zap, label: 'Outras Skills', items: ['Git', 'Docker', 'AWS', 'Figma'] },
];

export default function SobrePage() {
  return (
    <>
      <PageHeader
        title="Sobre Mim"
        description="Conheça minha jornada, habilidades e paixão por criar experiências digitais únicas"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Sobre' },
        ]}
      />

      {/* Bio Section */}
      <section className="py-16 bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Avatar */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-border">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                      <span className="text-7xl font-bold text-white">TC</span>
                    </div>
                    <p className="text-foreground-secondary">Avatar placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Olá, sou <span className="gradient-text">{aboutInfo.name}</span>
              </h2>
              <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                {aboutInfo.extendedBio}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-background-secondary">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Habilidades & Ferramentas</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <skill.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold mb-3">{skill.label}</h3>
                <ul className="space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm text-foreground-secondary">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-background">
        <Container size="md">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="gradient-text">Minha Jornada</span>
          </h2>
          <Timeline items={timeline} />
        </Container>
      </section>

      {/* 3D Section */}
      <section className="py-16 bg-background-secondary">
        <Container size="md">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="gradient-text">Experimento 3D</span>
          </h2>
          <p className="text-center text-foreground-secondary mb-8">
            Uma pequena demonstração de elementos 3D interativos
          </p>
          <Suspense
            fallback={
              <div className="w-full h-[400px] rounded-xl bg-background-tertiary border border-border flex items-center justify-center">
                <p className="text-foreground-secondary">Carregando cena 3D...</p>
              </div>
            }
          >
            <Scene3D />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
