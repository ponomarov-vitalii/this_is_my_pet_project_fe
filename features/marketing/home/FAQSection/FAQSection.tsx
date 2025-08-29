'use client';

import { useTranslations } from 'next-intl';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/Accordion/Accordion';

export default function FAQSection() {
  const t = useTranslations('homepage.faq');

  const faqs = [
    { id: 'ai-curation', q: t('aiCuration.question'), a: t('aiCuration.answer') },
    { id: 'newsletter-frequency', q: t('newsletterFrequency.question'), a: t('newsletterFrequency.answer') },
    { id: 'news-sources', q: t('newsSources.question'), a: t('newsSources.answer') },
    { id: 'free-trial', q: t('freeTrial.question'), a: t('freeTrial.answer') },
    { id: 'team-sharing', q: t('teamSharing.question'), a: t('teamSharing.answer') },
    { id: 'cancel-subscription', q: t('cancelSubscription.question'), a: t('cancelSubscription.answer') }
  ];

  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
          {t('title')}
        </h2>
        <p className="text-lg text-primary-600 mb-12">{t('subtitle')}</p>

        <Accordion allowMultiple={false} className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="bg-primary-50 border-primary-200 hover:border-primary-300 transition-colors"
            >
              <AccordionTrigger className="hover:bg-primary-100">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
