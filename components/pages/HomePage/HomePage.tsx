import HeroNewsletter from '@/components/organisms/HeroNewsletter/HeroNewsletter';
import WhyChooseSection from '@/components/organisms/WhyChooseSection/WhyChooseSection';

export default function HomePage() {
  return (
    <div>
      <HeroNewsletter />
      <WhyChooseSection />
      {/* Other sections can be added here */}
    </div>
  );
}