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
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
          <Icon size={28} className="text-white sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-foreground-secondary mb-4 sm:mb-5 md:mb-6 leading-relaxed">{service.description}</p>

        {/* What's Included */}
        <div className="mt-auto">
          <h4 className="text-xs sm:text-sm font-semibold text-primary mb-3 sm:mb-4">O que está incluído:</h4>
          <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
            {service.whatsIncluded.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-foreground-secondary">
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
