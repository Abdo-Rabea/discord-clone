function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-brand-primary flex items-center justify-center">
        <span className="text-white font-bold text-lg">#</span>
      </div>
      <span className="text-xl font-bold text-foreground hidden sm:inline">
        Discord Clone
      </span>
    </div>
  );
}

export default Logo;
