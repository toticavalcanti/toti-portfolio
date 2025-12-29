'use client';

import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Container from '@/components/Container';
import ProjectFilter from '@/components/ProjectFilter';
import ProjectGrid from '@/components/ProjectGrid';
import { projects } from '@/mockData';
import { ProjectCategory } from '@/types';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('todos');

  const filteredProjects =
    activeCategory === 'todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Portfólio"
        description="Explore meus projetos em IA, música, desenvolvimento e experimentos audiovisuais"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Portfólio' },
        ]}
      />

      <section className="py-16">
        <Container>
          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          {filteredProjects.length > 0 ? (
            <ProjectGrid projects={filteredProjects} />
          ) : (
            <div className="text-center py-20">
              <p className="text-foreground-secondary text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
      </Container>
    </section>
  </>
);
}
