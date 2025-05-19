import { Business, Service } from '@/lib/types';

interface ServiceSectionProps {
  business: Business;
}

export default function ServiceSection({ business }: ServiceSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the range of professional services we offer to meet your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {business.services.map((service) => (
            <ServiceCard key={service.id} service={service} accentColor={business.theme.accent} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  accentColor: string;
}

function ServiceCard({ service, accentColor }: ServiceCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100 h-full flex flex-col">
      <div 
        className="h-2 w-full"
        style={{ backgroundColor: accentColor }}
      ></div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
        <div className="flex justify-between items-center">
          <span 
            className="text-lg font-bold"
            style={{ color: accentColor }}
          >
            {service.price}
          </span>
          <button 
            className="px-4 py-2 rounded text-white text-sm font-medium transition-transform hover:scale-105"
            style={{ backgroundColor: accentColor }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}