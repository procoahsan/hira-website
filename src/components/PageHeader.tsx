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
    <section className="bg-hero border-b border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 text-center animate-in-up">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-5 ornament">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl text-balance leading-[1.05]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
