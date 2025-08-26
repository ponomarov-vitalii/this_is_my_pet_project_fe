import CTASection from '../CTASection/CTASection';
import FAQSection from '../FAQSection/FAQSection';
import HeroNewsletter from '../HeroNewsletter/HeroNewsletter';
import HowItWorksSection from '../HowItWorksSection/HowItWorksSection';
import NewsletterPreviewSection from '../NewsletterPreviewSection/NewsletterPreviewSection';
import PricingSection from '../PricingSection/PricingSection';
import StatsSection from '../StatsSection/StatsSection';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import WhyChooseSection from '../WhyChooseSection/WhyChooseSection';

export default function HomePage() {
  return (
    <div>
      <HeroNewsletter />
      <WhyChooseSection />
      <HowItWorksSection/>
      <NewsletterPreviewSection />
      <PricingSection />
      <TestimonialsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}