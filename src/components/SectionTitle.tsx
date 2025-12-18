'use client';

import { cn } from '@/utils';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12',
        centered ? 'text-center' : '',
        className
      )}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-foreground-secondary text-lg md:text-xl max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
    </motion.div>
  );
}
