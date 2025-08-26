'use client';

import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/Accordion/Accordion';

export default function FAQSection() {
  const faqs = [
    {
      id: 'ai-curation',
      question: 'How does the AI curation work?',
      answer: 'Our AI analyzes thousands of articles daily, considering your reading history, preferences, and engagement patterns to surface the most relevant content for your interests.'
    },
    {
      id: 'newsletter-frequency',
      question: 'Can I customize my newsletter frequency?',
      answer: 'Yes! You can choose from daily, weekly, bi-weekly, or monthly delivery. Pro users can set custom frequencies and even receive breaking news alerts.'
    },
    {
      id: 'news-sources',
      question: 'What sources do you use?',
      answer: 'We partner with over 500 reputable news organizations, including major newspapers, magazines, research institutions, and verified independent journalists.'
    },
    {
      id: 'free-trial',
      question: 'Is there a free trial?',
      answer: 'Absolutely! We offer a 14-day free trial for all paid plans, and our Free tier is available indefinitely with basic features.'
    },
    {
      id: 'team-sharing',
      question: 'Can I share newsletters with my team?',
      answer: 'Team plans include collaboration features, shared newsletters, and team analytics. You can also forward individual newsletters to colleagues on any plan.'
    },
    {
      id: 'cancel-subscription',
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel anytime from your account settings. Your subscription remains active until the end of your billing period, and you can always reactivate later.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-primary-600">
            Everything you need to know about NewsFlow
          </p>
        </div>

        <Accordion allowMultiple={false} className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="bg-primary-50 border-primary-200 hover:border-primary-300 transition-colors"
            >
              <AccordionTrigger className="hover:bg-primary-100">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}