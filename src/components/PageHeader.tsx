export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-hero border-b border-border/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-gold/10 rounded-full blur-[100px]" />
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center animate-in-up relative z-10">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5 ornament">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl text-balance leading-[1.05]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            {intro}
          </p>
        )}

        {/* Decorative divider */}
        <div className="mt-10 flex items-center justify-center gap-3 text-gold/40">
          <span className="w-8 h-px bg-current" />
          <span className="text-sm">✦</span>
          <span className="w-8 h-px bg-current" />
        </div>
      </div>
    </section>
  );
}
