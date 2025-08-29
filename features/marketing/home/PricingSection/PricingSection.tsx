'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/Button/Button';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const t = useTranslations('homepage.pricing');

  const plans = [
    {
      name: t('plans.free.name'),
      price: '$0',
      period: `/${t('billing.userMonth')}`,
      features: [
        t('plans.free.features.subscriptions'),
        t('plans.free.features.delivery'),
        t('plans.free.features.curation'),
        t('plans.free.features.support')
      ],
      buttonText: t('plans.free.button'),
      buttonVariant: 'secondary' as const,
      popular: false
    },
    {
      name: t('plans.pro.name'),
      price: isAnnual ? '$7' : '$9',
      period: `/${t('billing.userMonth')}`,
      originalPrice: isAnnual ? '$9' : null,
      features: [
        t('plans.pro.features.subscriptions'),
        t('plans.pro.features.frequency'),
        t('plans.pro.features.curation'),
        t('plans.pro.features.support'),
        t('plans.pro.features.analytics')
      ],
      buttonText: t('plans.pro.button'),
      buttonVariant: 'primary' as const,
      popular: true,
      popularText: t('plans.pro.popular')
    },
    {
      name: t('plans.team.name'),
      price: isAnnual ? '$23' : '$29',
      period: `/${t('billing.userMonth')}`,
      originalPrice: isAnnual ? '$29' : null,
      features: [
        t('plans.team.features.everything'),
        t('plans.team.features.collaboration'),
        t('plans.team.features.api'),
        t('plans.team.features.integrations'),
        t('plans.team.features.support')
      ],
      buttonText: t('plans.team.button'),
      buttonVariant: 'primary' as const,
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-primary-200 rounded-lg p-1 border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                !isAnnual 
                  ? 'bg-primary-700 text-primary-50 shadow-sm' 
                  : 'text-primary-700 hover:text-primary-900'
              }`}
            >
              {t('billing.monthly')}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                isAnnual 
                  ? 'bg-primary-700 text-primary-50 shadow-sm' 
                  : 'text-primary-700 hover:text-primary-900'
              }`}
            >
              {t('billing.annual')}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-primary-50 rounded-2xl p-8 border-2 transition-all duration-200 hover:shadow-lg ${
                plan.popular 
                  ? 'border-primary-600 shadow-md' 
                  : 'border-primary-200 hover:border-primary-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-700 text-primary-50 px-4 py-1 rounded-full text-sm font-medium">
                    {plan.popularText}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl font-bold text-primary-900 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-primary-900">
                    {plan.price}
                  </span>
                  <span className="text-primary-600 ml-1">
                    {plan.period}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-sm text-primary-500 line-through ml-4">
                      {plan.originalPrice}{plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-primary-700">
                    <svg className="w-5 h-5 text-success-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.buttonVariant}
                size="lg" 
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}