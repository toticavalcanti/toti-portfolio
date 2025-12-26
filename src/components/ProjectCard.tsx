import { Project } from '@/types';
import Card from './Card';
import Tag from './Tag';
import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projetos/${project.id}`} className="block h-full">
      <Card className="group overflow-hidden p-0 h-full hover:border-primary transition-colors">
        <div className="flex flex-col h-full">
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden bg-background-tertiary rounded-lg">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Play icon overlay centralizado */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-primary/90 hover:bg-primary text-white p-4 rounded-full transition-colors">
                <Play size={24} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-7 md:p-8 space-y-3 md:space-y-4 flex-1 flex flex-col">
            {project.subtitle && (
              <p className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-wide">
                {project.subtitle}
              </p>
            )}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-foreground-secondary line-clamp-3 leading-relaxed flex-1">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 mt-auto">
              {project.tags.slice(0, 4).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
