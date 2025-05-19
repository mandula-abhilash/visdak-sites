import { Business } from '@/lib/types';

interface HeroSectionProps {
  business: Business;
}

export default function HeroSection({ business }: HeroSectionProps) {
  return (
    <section 
      className="relative py-20 md:py-32 px-6 overflow-hidden"
      style={{
        backgroundColor: `${business.theme.secondary}`,
        color: '#FFFFFF'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 25px 25px, ${business.theme.accent} 2%, transparent 0%)`,
          backgroundSize: '50px 50px' 
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to {business.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {business.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#services" 
              className="px-6 py-3 rounded-md font-medium transition-transform hover:scale-105 text-center"
              style={{
                backgroundColor: business.theme.primary,
                color: 'var(--business-primary-text, #FFFFFF)'
              }}
            >
              View Our Services
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md font-medium border-2 transition-colors hover:bg-white/10 text-center"
              style={{
                borderColor: 'white',
                color: 'white'
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}