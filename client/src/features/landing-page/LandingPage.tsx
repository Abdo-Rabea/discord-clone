import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { FeaturesShowcase } from "./FeaturesShowcase";
import { CallToAction } from "./CallToAction";
import { Footer } from "./Footer";

export function LandingPageFeature() {
  return (
    <div className="w-full">
      <Navigation />
      <HeroSection />
      <FeaturesShowcase />
      <CallToAction />
      <Footer />
    </div>
  );
}
