import { Palette, Ruler, Settings, Home, Sun, Shield } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "Custom Curtain Design",
      description: "Bespoke curtains tailored to your style, from fabric selection to final installation.",
      features: ["Premium fabric selection", "Custom measurements", "Professional design consultation"]
    },
    {
      icon: Sun,
      title: "Blinds & Shades",
      description: "Modern blinds and shades for perfect light control and privacy in any room.",
      features: ["Vertical & horizontal blinds", "Roller shades", "Blackout options"]
    },
    {
      icon: Ruler,
      title: "Measurement & Consultation",
      description: "Expert measurement service ensuring perfect fit for all your window treatments.",
      features: ["Free home consultation", "Precise measurements", "Style recommendations"]
    },
    {
      icon: Settings,
      title: "Motorized Systems",
      description: "Smart home integration with automated curtains and blinds for modern living.",
      features: ["Remote control operation", "Smart home integration", "Timer programming"]
    },
    {
      icon: Home,
      title: "Commercial Solutions",
      description: "Professional window treatments for offices, hotels, and commercial spaces.",
      features: ["Bulk installations", "Fire-retardant options", "Maintenance packages"]
    },
    {
      icon: Shield,
      title: "Repair & Maintenance",
      description: "Keep your window treatments looking perfect with our repair and cleaning services.",
      features: ["Professional cleaning", "Hardware replacement", "Fabric restoration"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From custom design to professional installation, we offer comprehensive window treatment solutions for every need and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-blue-50 transition-colors duration-300 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 group-hover:bg-blue-200 rounded-lg mb-6 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}