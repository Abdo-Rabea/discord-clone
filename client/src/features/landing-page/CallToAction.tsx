import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-secondary border-y border-border">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
          Ready to Connect?
        </h2>
        <p className="mb-8 text-lg text-text-secondary">
          Join thousands of communities already using Discord Clone. Start your
          journey today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/signup">
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-accent w-full sm:w-auto"
            >
              Create Your Account
            </Button>
          </Link>
          <Link to="/login">
            <Button
              size="lg"
              variant="outline"
              className="border-border text-text-secondary hover:bg-surface-tertiary hover:text-foreground w-full sm:w-auto"
            >
              Already a Member? Sign In
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
