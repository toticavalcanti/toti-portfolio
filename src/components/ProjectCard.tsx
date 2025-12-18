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
    <Card className="group overflow-hidden p-0">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-background-tertiary">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.videoUrl && (
            <Link
              href={project.videoUrl}
              target="_blank"
              className="bg-primary hover:bg-primary-light text-white p-3 rounded-full transition-colors"
            >
              <Play size={20} />
            </Link>
          )}
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              className="bg-secondary hover:bg-secondary-light text-white p-3 rounded-full transition-colors"
            >
              <ExternalLink size={20} />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              className="bg-foreground hover:bg-foreground-secondary text-background p-3 rounded-full transition-colors"
            >
              <Github size={20} />
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {project.subtitle && (
          <p className="text-sm text-primary font-semibold uppercase tracking-wide">
            {project.subtitle}
          </p>
        )}
        <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground-secondary line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Card>
  );
}
