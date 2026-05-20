import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import NavigationLink from "./NavigationLink";
import Logo from "@/ui/Logo";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-[hsl(var(--sidebar)/var(--tw-bg-opacity))]/_80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />
        {/* Center Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationLink to="#features">Features</NavigationLink>
          <NavigationLink to="#about">About</NavigationLink>
          <NavigationLink to="#contact">Contact</NavigationLink>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary">Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
