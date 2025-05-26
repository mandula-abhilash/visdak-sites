"use client";

export default function SimpleHero({ title, subtitle, image, cta }) {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20 px-6 bg-gradient-to-r from-primary/90 to-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, ${
              image ? "white" : "var(--business-accent)"
            } 2%, transparent 0%)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={cta.primary.href}
              className="px-6 py-3 rounded-md font-medium bg-white transition-transform hover:scale-105 text-center"
              style={{ color: "var(--business-primary)" }}
            >
              {cta.primary.text}
            </a>
            <a
              href={cta.secondary.href}
              className="px-6 py-3 rounded-md font-medium border-2 border-white text-white transition-colors hover:bg-white/10 text-center"
            >
              {cta.secondary.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
