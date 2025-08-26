'use client';

import React, { useState } from 'react';

export default function HeroNewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
          Get Personalized News Digests
          <br />
          <span className="text-primary-600">Delivered Weekly</span>
        </h1>
        
        <p className="text-lg text-primary-600 mb-8 leading-relaxed max-w-xl mx-auto">
          Stay informed with AI-curated newsletters from trusted sources. Get the most 
          relevant news for your interests, delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-primary-300 bg-primary-50 text-primary-900 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-800 hover:bg-primary-900 text-primary-50 font-medium rounded-lg transition-colors duration-200"
            >
              Start Free Trial
            </button>
          </div>
        </form>

        <p className="text-sm text-primary-500 mb-8">
          Free 14-day trial. No credit card required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-600">
          <div className="flex items-center gap-2">
            <span className="text-success-600">✓</span>
            <span>AI-Powered Curation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success-600">✓</span>
            <span>Trusted Sources</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success-600">✓</span>
            <span>Custom Frequency</span>
          </div>
        </div>
      </div>
    </section>
  );
}