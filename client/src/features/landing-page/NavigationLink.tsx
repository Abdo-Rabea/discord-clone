function NavigationLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={to}
      className="text-text-secondary hover:text-foreground transition-colors"
    >
      {children}
    </a>
  );
}

export default NavigationLink;
