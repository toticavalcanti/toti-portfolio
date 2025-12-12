import { cn } from '@/utils';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium rounded-full',
        'bg-primary/10 text-primary border border-primary/20',
        'transition-colors hover:bg-primary/20',
        className
      )}
    >
      {children}
    </span>
  );
}
