'use client';

import React from 'react';

export default function StatsSection() {
  const stats = [
    {
      value: '50K+',
      label: 'Active Users'
    },
    {
      value: '2M+',
      label: 'Articles Curated'
    },
    {
      value: '500+',
      label: 'Trusted Sources'
    },
    {
      value: '98%',
      label: 'Satisfaction Rate'
    }
  ];

  return (
    <section className="py-16 px-4 bg-primary-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-50 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}