import { Service } from '@/types';
import Card from './Card';
import { LucideIcon, Music, User, Code, Sparkles } from 'lucide-react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, LucideIcon> = {
  Music,
  User,
  Code,
  Sparkles,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <Card glow className="h-full">
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
          <Icon size={32} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>

        {/* Description */}
        <p className="text-foreground-secondary mb-6 leading-relaxed">{service.description}</p>

        {/* What's Included */}
        <div className="mt-auto">
          <h4 className="text-sm font-semibold text-primary mb-4">O que está incluído:</h4>
          <ul className="space-y-3">
            {service.whatsIncluded.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-foreground-secondary">
                <Check size={16} className="text-success mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
