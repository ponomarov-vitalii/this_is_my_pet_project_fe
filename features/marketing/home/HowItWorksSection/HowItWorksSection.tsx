import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function HowItWorksSection() {
  const t = await getTranslations('homepage.howItWorks');

  const steps = [
    {
      number: '1',
      title: t('steps.chooseTopics.title'),
      description: t('steps.chooseTopics.description')
    },
    {
      number: '2', 
      title: t('steps.setSchedule.title'),
      description: t('steps.setSchedule.description')
    },
    {
      number: '3',
      title: t('steps.receiveRead.title'),
      description: t('steps.receiveRead.description')
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number Circle */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-700 text-primary-50 rounded-full mb-8 text-xl font-bold">
                {step.number}
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                {step.title}
              </h3>
              
              {/* Step Description */}
              <p className="text-primary-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}