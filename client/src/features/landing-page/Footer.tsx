import LogoMini from "@/ui/LogoMini";
import { Heart, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 mb-8">
          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-text-secondary hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-text-secondary hover:text-brand-primary transition-colors"
              >
                <Globe className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-brand-primary transition-colors"
              >
                <Heart className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-brand-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
          <LogoMini />
          <p className="text-text-tertiary text-sm">
            © 2026 Discord Clone - AbdElrahman Rabea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
