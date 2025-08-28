// utils/metadata.ts
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

interface MetadataProps {
  locale: string;
  namespace: string;
  path?: string;
}

export async function generatePageMetadata({
  locale,
  namespace,
  path = ''
}: MetadataProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });

  // todo: set your actual base URL here
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://';
  const canonicalUrl = `${baseUrl}/${locale}${path}`;
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('openGraph.title'),
      description: t('openGraph.description'),
      type: 'website',
      locale: locale,
      alternateLocale: locale === 'en' ? ['es'] : ['en'],
      siteName: t('siteName'),
      url: canonicalUrl,
      images: [
        {
          url: `${baseUrl}/og-image-${locale}.jpg`,
          width: 1200,
          height: 630,
          alt: t('openGraph.imageAlt'),
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: [`${baseUrl}/og-image-${locale}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en${path}`,
        'es': `${baseUrl}/es${path}`,
      },
    },
    authors: [{ name: 'NewsFlow Team' }],
    creator: 'NewsFlow',
    publisher: 'NewsFlow',
    category: 'News & Information',
  };
}