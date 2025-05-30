"use client";

export default function SplitWithImageHero({ title, subtitle, image, cta }) {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeIn">
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
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={image}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
