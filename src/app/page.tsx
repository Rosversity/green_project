import HeroSection from "@/components/HeroSection";
import InsightsCarousel from "@/components/InsightsCarousel";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import LocationsSection from "@/components/LocationsSection";
import NewsletterSection from "@/components/NewsletterSection";
import CareersSection from "@/components/CareersSection";
import FeaturedInsights from "@/components/FeaturedInsights";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InsightsCarousel />
      <CapabilitiesSection />
      <LocationsSection />
      <NewsletterSection />
      <CareersSection />
      <FeaturedInsights />
    </div>
  );
}
