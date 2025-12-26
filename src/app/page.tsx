import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import StatsSection from '@/components/StatsSection';
import ServicesOverview from '@/components/ServicesOverview';
import ChannelsSection from '@/components/ChannelsSection';
import AboutPreview from '@/components/AboutPreview';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <StatsSection />
      <ServicesOverview />
      <ChannelsSection />
      <AboutPreview />
      <CTASection />
    </>
  );
}
