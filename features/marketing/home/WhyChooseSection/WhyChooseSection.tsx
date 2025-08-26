'use client';

import React from 'react';

export default function WhyChooseSection() {
  const features = [
    {
      emoji: '🧠',
      title: 'AI-Powered Curation',
      description: 'Advanced machine learning algorithms analyze thousands of articles to surface the most relevant and important news for your interests.'
    },
    {
      emoji: '🛡️',
      title: 'Trusted Sources',
      description: 'We partner with reputable news organizations and verified journalists to ensure you receive accurate, reliable information.'
    },
    {
      emoji: '⚙️',
      title: 'Customizable Experience',
      description: 'Tailor your news digest with custom topics, delivery frequency, and format preferences to match your reading habits.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose NewsFlow?
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Our intelligent platform combines the best of human curation and AI 
            technology to deliver news that matters to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-primary-50 rounded-xl mb-6">
                <span className="text-2xl">{feature.emoji}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-primary-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}