import { getTranslations } from 'next-intl/server';

export default async function Loading() {
  const t = await getTranslations('loading');
  
  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 border-4 border-primary-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-semibold text-primary-900 mb-2">{t('title')}</h2>
        <p className="text-primary-600">{t('description')}</p>

        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}