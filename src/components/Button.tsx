import { cn } from '@/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105',
      secondary:
        'bg-background-secondary text-foreground border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/30',
      outline:
        'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const Comp = asChild ? Slot : motion.button;

    return (
      <Comp
        ref={ref}
        whileHover={!asChild ? { scale: 1.05 } : undefined}
        whileTap={!asChild ? { scale: 0.95 } : undefined}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
