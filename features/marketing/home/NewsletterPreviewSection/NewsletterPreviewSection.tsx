import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function NewsletterPreviewSection() {
  const t = await getTranslations('homepage.newsletterPreview');

  const articles = [
    {
      title: t('sampleNewsletter.articles.aiMedical.title'),
      description: t('sampleNewsletter.articles.aiMedical.description'),
      source: t('sampleNewsletter.articles.aiMedical.source'),
      readTime: t('sampleNewsletter.articles.aiMedical.readTime')
    },
    {
      title: t('sampleNewsletter.articles.quantum.title'),
      description: t('sampleNewsletter.articles.quantum.description'),
      source: t('sampleNewsletter.articles.quantum.source'),
      readTime: t('sampleNewsletter.articles.quantum.readTime')
    },
    {
      title: t('sampleNewsletter.articles.energy.title'),
      description: t('sampleNewsletter.articles.energy.description'),
      source: t('sampleNewsletter.articles.energy.source'),
      readTime: t('sampleNewsletter.articles.energy.readTime')
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Newsletter Preview Card */}
        <div className="bg-primary-50 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
          {/* Newsletter Header */}
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl font-bold text-primary-900">
              {t('sampleNewsletter.title')}
            </h3>
            <span className="text-sm text-primary-500">
              {t('sampleNewsletter.date')}
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