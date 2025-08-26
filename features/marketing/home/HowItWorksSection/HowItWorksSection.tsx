'use client';

import React from 'react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Topics',
      description: 'Select from hundreds of topics including technology, business, science, politics, and more. Our AI learns your preferences over time.'
    },
    {
      number: '2', 
      title: 'Set Your Schedule',
      description: 'Choose how often you want to receive your digest - daily, weekly, or custom intervals that fit your reading schedule.'
    },
    {
      number: '3',
      title: 'Receive & Read',
      description: 'Get beautifully formatted newsletters with the most important stories, summaries, and links to full articles delivered to your inbox.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Get started in just three simple steps
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