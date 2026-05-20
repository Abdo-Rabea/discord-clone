import { CallToAction } from "@/features/landing-page/CallToAction";
import { FeaturesShowcase } from "@/features/landing-page/FeaturesShowcase";
import { Footer } from "@/features/landing-page/Footer";
import { HeroSection } from "@/features/landing-page/HeroSection";
import { Navigation } from "@/features/landing-page/Navigation";

export default function LandingPage() {
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
