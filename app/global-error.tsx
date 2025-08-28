'use client';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  const t = useTranslations('errors.global');

  useEffect(() => {
    console.error('Global application error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-primary-900 mb-4">{t('title')}</h1>
              <p className="text-lg text-primary-600 mb-8">{t('description')}</p>
            </div>

            <div className="space-y-4">
              <button onClick={reset} className="w-full bg-primary-600 text-primary-50 px-6 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200">
                Try Again
              </button>
              <button onClick={() => window.location.href = '/'} className="w-full bg-primary-200 text-primary-700 px-6 py-3 rounded-lg hover:bg-primary-300 transition-all duration-200">
                Go Back Home
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-200">
              <p className="text-sm text-primary-500">{t('contact')}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
