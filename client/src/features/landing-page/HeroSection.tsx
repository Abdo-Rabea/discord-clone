import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-background px-4 sm:px-6 lg:px-8">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-primary opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-secondary opacity-20 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-border bg-surface-tertiary px-4 py-2 text-sm text-text-secondary">
          <span className="mr-2">👋</span>
          Welcome to Discord Clone - Connect. Collaborate. Create.
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Your Community Awaits
        </h1>

        {/* Subheadline */}
        <p className="mb-8 text-lg text-text-secondary sm:text-xl">
          Connect with friends and communities. Voice, video, text—all in one
          place. Build, grow, and thrive together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/signup">
            <Button size="lg" variant="primary">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline">
              Sign In
            </Button>
          </Link>
        </div>

        {/* Subtext */}
        <p className="mt-6 text-sm text-text-tertiary">
          No credit card required. Free forever.
        </p>
      </div>
    </section>
  );
}
