import { Award, Users, Clock, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    { icon: Award, title: "20+ Years Experience", description: "Expert craftsmanship in window treatments" },
    { icon: Users, title: "1000+ Happy Customers", description: "Trusted by families across the region" },
    { icon: Clock, title: "Quick Installation", description: "Professional setup within 48 hours" },
    { icon: Sparkles, title: "Premium Quality", description: "Only the finest fabrics and materials" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Elegant Drapes & Blinds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over two decades, we've been transforming homes and offices with custom window treatments that combine style, functionality, and exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Beautiful custom curtains installation"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Creating Beautiful Windows Since 2003
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our passion for window treatments began with a simple belief: every window deserves to be dressed beautifully. From elegant drapes that frame your view to functional blinds that control light perfectly, we specialize in creating custom solutions that reflect your unique style.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're looking for luxury curtains for your living room, practical blinds for your office, or motorized systems for modern convenience, our expert team provides personalized service from consultation to installation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}