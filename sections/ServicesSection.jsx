"use client";

export default function ServicesSection({ title, description, services }) {
  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="bg-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border h-full flex flex-col">
      <div
        className="h-2 w-full"
        style={{ backgroundColor: "var(--business-accent)" }}
      ></div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          {service.description}
        </p>
        <div className="flex justify-between items-center">
          <span
            className="text-lg font-bold"
            style={{ color: "var(--business-accent)" }}
          >
            {service.price}
          </span>
          <button
            className="px-4 py-2 rounded text-white text-sm font-medium transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--business-accent)" }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
