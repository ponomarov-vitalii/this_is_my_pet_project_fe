'use client';

import React, { useState, createContext, useContext } from 'react';
import cn from 'classnames';

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

interface AccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultValue?: string | string[];
  className?: string;
}

export function Accordion({ 
  children, 
  allowMultiple = false, 
  defaultValue = [],
  className 
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  );

  const toggleItem = (value: string) => {
    setOpenItems(prev => {
      if (allowMultiple) {
        return prev.includes(value) 
          ? prev.filter(item => item !== value)
          : [...prev, value];
      } else {
        return prev.includes(value) ? [] : [value];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={cn('space-y-2', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
  return (
    <div className={cn('border border-primary-200 rounded-lg overflow-hidden', className)}>
      {React.Children.map(children, child => 
        React.isValidElement(child) 
          ? React.cloneElement(child as React.ReactElement<{ value?: string }>, { value })
          : child
      )}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  value?: string;
  className?: string;
}

export function AccordionTrigger({ children, value, className }: AccordionTriggerProps) {
  const context = useContext(AccordionContext);
  if (!context || !value) return null;

  const { openItems, toggleItem } = context;
  const isOpen = openItems.includes(value);

  return (
    <button
      onClick={() => toggleItem(value)}
      className={cn(
        'flex w-full items-center justify-between px-6 py-4 text-left',
        'text-primary-900 font-medium hover:bg-primary-50 transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset',
        className
      )}
    >
      <span>{children}</span>
      <svg
        className={cn(
          'h-5 w-5 text-primary-500 transition-transform duration-200',
          isOpen && 'transform rotate-180'
        )}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  value?: string;
  className?: string;
}

export function AccordionContent({ children, value, className }: AccordionContentProps) {
  const context = useContext(AccordionContext);
  if (!context || !value) return null;

  const { openItems } = context;
  const isOpen = openItems.includes(value);

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      <div className={cn('px-6 pb-4 text-primary-600 leading-relaxed', className)}>
        {children}
      </div>
    </div>
  );
}

const AccordionComponents = {
  Root: Accordion,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
};

export default AccordionComponents;