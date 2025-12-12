import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesOverview from '@/components/ServicesOverview';
import AboutPreview from '@/components/AboutPreview';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <ServicesOverview />
      <AboutPreview />
      <CTASection />
    </>
  );
}

