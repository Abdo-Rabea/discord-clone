export interface FeatureProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Feature({
  id,
  icon,
  title,
  description,
}: FeatureProps) {
  return (
    <div
      key={id}
      className="rounded-lg border border-border bg-background p-6 backdrop-blur-sm hover:border-border hover:bg-surface-tertiary transition-all duration-300"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-tertiary">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}
