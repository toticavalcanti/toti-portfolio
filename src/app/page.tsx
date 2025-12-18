import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import StatsSection from '@/components/StatsSection';
import ServicesOverview from '@/components/ServicesOverview';
import AboutPreview from '@/components/AboutPreview';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <StatsSection />
      <ServicesOverview />
      <AboutPreview />
      <CTASection />
    </>
  );
}

