'use client';

import React, { useState } from 'react';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';

export default function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email submitted:', email);
  };

  const features = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: 'No spam, ever'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      text: 'No credit card required'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      text: 'Cancel anytime'
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-50 mb-6">
          Ready to Transform Your News Experience?
        </h2>
        <p className="text-lg text-primary-300 mb-12 max-w-2xl mx-auto">
          Join thousands of professionals who trust NewsFlow to keep them informed and ahead of the curve.
        </p>

        {/* Email Signup */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1">
              <Input
                variant="ghost"
                inputSize="lg"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button 
              onClick={handleSubmit}
              variant="primary"
              size="lg"
              className="sm:px-8 bg-primary-600 hover:bg-primary-700"
            >
              Start Free Trial
            </Button>
          </div>
        </div>

        {/* Feature List */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-400">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-success-400">
                {feature.icon}
              </span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}