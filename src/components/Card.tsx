'use client';

import { cn } from '@/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  className?: string;
}

export default function Card({
  children,
  hover = true,
  glow = false,
  className,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        'bg-background-secondary rounded-xl p-6 border border-border transition-all duration-300',
        hover && 'hover:border-primary hover:shadow-lg',
        glow && 'glow-border',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
