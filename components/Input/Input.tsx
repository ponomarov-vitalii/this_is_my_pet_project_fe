import cn from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'ghost';
  inputSize?: 'sm' | 'md' | 'lg';
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  variant = 'default',
  inputSize = 'md',
  error = false,
  className,
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        'w-full rounded-md border transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          // Default variant
          'border-primary-300 bg-primary-50 text-primary-900 placeholder:text-primary-500': 
            variant === 'default' && !error,
          'focus:border-primary-500 focus:ring-primary-500': 
            variant === 'default' && !error,
          
          // Ghost variant (transparent/dark backgrounds)
          'border-primary-600 bg-primary-800 text-primary-100 placeholder:text-primary-400': 
            variant === 'ghost' && !error,
          'focus:border-primary-400 focus:ring-primary-400': 
            variant === 'ghost' && !error,
          
          // Error state
          'border-destructive-500 focus:border-destructive-500 focus:ring-destructive-500': 
            error,
        },
        {
          'px-3 py-1.5 text-sm': inputSize === 'sm',
          'px-4 py-2 text-base': inputSize === 'md',
          'px-6 py-3 text-lg': inputSize === 'lg',
        },
        className
      )}
    />
  );
});

Input.displayName = 'Input';

export default Input;