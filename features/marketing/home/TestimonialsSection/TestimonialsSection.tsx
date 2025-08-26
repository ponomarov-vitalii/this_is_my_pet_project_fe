'use client';

import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Product Manager, TechCorp',
      avatar: '👩‍💼',
      testimonial: 'NewsFlow has transformed how I stay updated with industry trends. The AI curation is incredibly accurate, and I save hours each week.',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      title: 'Research Director, DataLab',
      avatar: '👨‍🔬',
      testimonial: 'The quality of sources and the relevance of articles is outstanding. It\'s like having a personal research assistant.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'Investment Analyst, FinanceHub',
      avatar: '👩‍💻',
      testimonial: 'NewsFlow helps me stay ahead of market trends. The customization options are perfect for my specific research needs.',
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-warning-400' : 'text-primary-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Trusted by Professionals Worldwide
          </h2>
          <p className="text-lg text-primary-600">
            See what our users have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-primary-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Avatar and User Info */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary-600">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-primary-700 mb-6 leading-relaxed">
                &quot;{testimonial.testimonial}&quot;
              </blockquote>

              {/* Star Rating */}
              <div className="flex">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}