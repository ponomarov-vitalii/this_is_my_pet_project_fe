import { getTranslations, getLocale } from 'next-intl/server';
import Button from '@/components/Button/Button';
import Link from 'next/link';

export default async function Maintenance() {
  const t = await getTranslations('maintenance');
  const locale = await getLocale();

  return (
    <div className="min-h-screen bg-primary-50 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-primary-900 mb-4">{t('title')}</h1>
      <p className="text-lg text-primary-600 mb-2">{t('description')}</p>
      <p className="text-sm text-primary-500 mb-6">{t('duration')}</p>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Link href={`/${locale}/status`}>
          <Button variant="primary">{t('checkStatus')}</Button>
        </Link>
        <Link href={`/${locale}/contact`}>
          <Button variant="secondary">{t('contactSupport')}</Button>
        </Link>
      </div>

      <p className="text-sm text-primary-500">{t('followUs')}</p>
    </div>
  );
}
