'use client';

import React from 'react';

export default function NewsletterPreviewSection() {
  const articles = [
    {
      title: 'AI Breakthrough in Medical Diagnosis',
      description: 'Researchers at Stanford University have developed an AI system that can diagnose rare diseases with 95% accuracy...',
      source: 'Stanford Medical News',
      readTime: '5 min read'
    },
    {
      title: 'Quantum Computing Milestone Reached',
      description: 'IBM announces a new quantum processor that maintains coherence for record-breaking durations...',
      source: 'TechCrunch',
      readTime: '3 min read'
    },
    {
      title: 'Sustainable Energy Investment Surge',
      description: 'Global investment in renewable energy technologies reaches all-time high in Q1 2025...',
      source: 'Bloomberg Energy',
      readTime: '4 min read'
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            See NewsFlow in Action
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Preview what your personalized newsletter looks like
          </p>
        </div>

        {/* Newsletter Preview Card */}
        <div className="bg-primary-50 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          {/* Newsletter Header */}
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl font-bold text-primary-900">
              Your Weekly Tech Digest
            </h3>
            <span className="text-sm text-primary-500">
              March 15, 2025
            </span>
          </div>

          {/* Articles List */}
          <div className="space-y-6">
            {articles.map((article, index) => (
              <div key={index} className="border-l-4 border-primary-600 pl-6 hover:border-primary-700 transition-colors duration-200">
                <h4 className="text-lg font-semibold text-primary-900 mb-2 hover:text-primary-700 cursor-pointer transition-colors duration-200">
                  {article.title}
                </h4>
                <p className="text-primary-600 mb-3 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center text-sm text-primary-500 space-x-4">
                  <span>{article.source}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}