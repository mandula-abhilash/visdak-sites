"use client";

export default function WithBackgroundImageHero({
  title,
  subtitle,
  image,
  cta,
}) {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20 px-6">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-background/80 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={cta.primary.href}
              className="px-6 py-3 rounded-md font-medium bg-primary text-primary-foreground transition-transform hover:scale-105 text-center"
            >
              {cta.primary.text}
            </a>
            <a
              href={cta.secondary.href}
              className="px-6 py-3 rounded-md font-medium border-2 border-primary text-primary transition-colors hover:bg-primary/10 text-center"
            >
              {cta.secondary.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
