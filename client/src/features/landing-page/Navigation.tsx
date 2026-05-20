import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-[hsl(var(--sidebar)/var(--tw-bg-opacity))]/_80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">#</span>
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:inline">
            Discord Clone
          </span>
        </div>

        {/* Center Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-text-secondary hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-text-secondary hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-text-secondary hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Link to="/login">
            <Button
              variant="outline"
              className="border-border text-text-secondary hover:bg-surface-secondary hover:text-foreground"
            >
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-brand-primary hover:bg-brand-accent">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
