'use client';
import { useEffect } from 'react';
import Button from '@/components/Button/Button';
import { useTranslations } from 'next-intl';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const t = useTranslations('errors.general');

  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-destructive-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-destructive-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-primary-900 mb-4">{t('title')}</h1>
          <p className="text-lg text-primary-600 mb-8">{t('description')}</p>
        </div>

        <div className="space-y-4">
          <Button variant="primary" size="lg" className="w-full" onClick={reset}>
            {t('tryAgain')}
          </Button>
          <Button variant="secondary" size="lg" className="w-full" onClick={() => window.location.href = '/'}>
            {t('goHome')}
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-primary-100 rounded-lg text-left">
            <h3 className="text-sm font-semibold text-primary-900 mb-2">{t('errorDetails')}</h3>
            <code className="text-xs text-destructive-700 break-words">{error.message}</code>
            {error.digest && <p className="text-xs text-primary-600 mt-2">Digest: {error.digest}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
