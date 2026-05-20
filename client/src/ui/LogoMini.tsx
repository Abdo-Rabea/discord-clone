function LogoMini() {
  return (
    <div className="flex items-center gap-2 mb-4 sm:mb-0">
      <div className="h-6 w-6 rounded bg-brand-primary flex items-center justify-center">
        <span className="text-white font-bold text-xs">#</span>
      </div>
      <span className="text-foreground font-semibold">Discord Clone</span>
    </div>
  );
}

export default LogoMini;
