'use client';

import PageHeader from '@/components/PageHeader';
import Container from '@/components/Container';
import Timeline from '@/components/Timeline';
import { aboutInfo, timeline } from '@/mockData';
import { Code2, Music, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';

const techStacks = [
  { icon: Code2, label: 'Full-Stack Development', items: ['Golang', 'Python', 'Next.js', 'Node.js', 'TypeScript'] },
  { icon: Sparkles, label: 'IA Generativa', items: ['Adobe Firefly', 'ChatGPT', 'Klingai', 'Flow', 'Nano Banana'] },
  { icon: Music, label: 'Produção Musical', items: ['Edição de Audio e Midi', 'Composição', 'Trilha', 'Mixagem', 'Masterização'] },
  { icon: Code2, label: 'Outras Skills', items: ['Git', 'Docker', 'AWS', 'K8S'] },
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
                <Image
                  src={aboutInfo.avatar}
                  alt={aboutInfo.name}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio Text */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Olá, sou <span className="gradient-text">{aboutInfo.name}</span>
              </h2>
              <div className="space-y-4">
                {aboutInfo.extendedBio.map((paragraph, index) => (
                  <p key={index} className="text-lg text-foreground-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-background-secondary">
        <Container size="md">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Habilidades & Ferramentas</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {techStacks.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-background border border-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <skill.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{skill.label}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-foreground-secondary flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {item}
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
    </>
  );
}
