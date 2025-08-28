import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';
import Button from '@/components/Button/Button';

export default async function NotFound() {
  const t = await getTranslations('errors.notFound');
  const locale = await getLocale();

  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-300 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-primary-900 mb-4">{t('title')}</h2>
          <p className="text-lg text-primary-600 mb-8">{t('description')}</p>
        </div>

        <div className="flex flex-col gap-4 justify-center">
          <Link href={`/${locale}`}>
            <Button variant="primary" size="lg" className="w-full">
              {t('goHome')}
            </Button>
          </Link>
          <Link href={`/${locale}/contact`}>
            <Button variant="secondary" size="lg" className="w-full">
              {t('contactSupport')}
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-200">
          <p className="text-sm text-primary-500">{t('errorCode')}</p>
        </div>
      </div>
    </div>
  );
}
