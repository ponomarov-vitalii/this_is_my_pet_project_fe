import { getTranslations } from 'next-intl/server';

export default async function TestimonialsSection() {
  const t = await getTranslations('homepage.testimonials');

  const testimonials = [
    {
      name: 'Sarah Chen',
      title: 'Product Manager, TechCorp',
      avatar: '👩‍💼',
      testimonial: t('sarah'),
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      title: 'Research Director, DataLab',
      avatar: '👨‍🔬',
      testimonial: t('marcus'),
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'Investment Analyst, FinanceHub',
      avatar: '👩‍💻',
      testimonial: t('emily'),
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-primary-600 mb-12">{t('subtitle')}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-6 bg-primary-300 shadow rounded-2xl">
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="italic mb-4">“{testimonial.testimonial}”</p>
              <h3 className="font-bold">{testimonial.name}</h3>
              <p className="text-sm text-primary-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
