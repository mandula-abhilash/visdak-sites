"use client";

export default function HeroSection({ business }) {
  return (
    <section
      className="relative min-h-[80vh] flex items-center py-20 px-6"
      style={{ backgroundColor: business.theme.primary }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, ${business.theme.accent} 2%, transparent 0%)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Welcome to {business.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {business.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="px-6 py-3 rounded-md font-medium bg-white transition-transform hover:scale-105 text-center"
              style={{ color: business.theme.primary }}
            >
              View Our Services
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md font-medium border-2 border-white text-white transition-colors hover:bg-white/10 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
