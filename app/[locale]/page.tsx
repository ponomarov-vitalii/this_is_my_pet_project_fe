import HomePage from '@/features/marketing/home/HomePage/HomePage';
import { generatePageMetadata } from '@/utils/metadata';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    namespace: 'metadata.home'
  });
}

export default function Home() {
  return (
    <HomePage />
  );
}
