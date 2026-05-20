import {
  Zap,
  Users,
  Headphones,
  Shield,
  MessageSquare,
  Share2,
} from "lucide-react";

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: "1",
    icon: <Zap className="h-8 w-8 text-brand-100" />,
    title: "Instant Messaging",
    description: "Send messages in real-time with crystal-clear delivery.",
  },
  {
    id: "2",
    icon: <Headphones className="h-8 w-8 text-brand-80" />,
    title: "Crystal Voice",
    description: "High-quality voice chat with ultra-low latency.",
  },
  {
    id: "3",
    icon: <Users className="h-8 w-8 text-brand-60" />,
    title: "Community Spaces",
    description:
      "Build thriving communities with organized channels and roles.",
  },
  {
    id: "4",
    icon: <Shield className="h-8 w-8 text-brand-40" />,
    title: "Secure & Private",
    description: "Your data is yours. End-to-end encryption on all messages.",
  },
  {
    id: "5",
    icon: <MessageSquare className="h-8 w-8 text-brand-80" />,
    title: "Rich Text",
    description: "Express yourself with emojis, formatting, and more.",
  },
  {
    id: "6",
    icon: <Share2 className="h-8 w-8 text-brand-60" />,
    title: "File Sharing",
    description: "Share files, images, and media instantly with your server.",
  },
];

export function FeaturesShowcase() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-secondary"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Powerful Features
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to stay connected
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-lg border border-border bg-background p-6 backdrop-blur-sm hover:border-border hover:bg-surface-tertiary transition-all duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-tertiary">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
