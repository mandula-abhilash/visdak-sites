import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = "1234567890"; // Replace with actual business number
  const whatsappMessage = "Hi! I'd like to schedule a consultation for window treatments.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: [
        "123 Design Avenue",
        "Suite 100",
        "Your City, State 12345"
      ]
    },
    {
      icon: Phone,
      title: "Call Us Today",
      details: [
        "+1 (234) 567-8900",
        "Free consultation calls"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@elegantdrapes.com",
        "quotes@elegantdrapes.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Sat: 10:00 AM - 4:00 PM",
        "Sun: By appointment only"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your windows? Contact us today for a free consultation and quote. We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 p-3 rounded-lg mr-4">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <div className="space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-600 p-8 rounded-lg text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Quick Response via WhatsApp</h3>
              <p className="mb-6 text-green-100">
                Get instant answers to your questions and fast quotes through WhatsApp. Our team responds within minutes!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {/* Google Map Placeholder */}
            <div className="h-96 bg-gray-700 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Find Our Showroom</h3>
                <p className="text-gray-300 mb-4">
                  Visit us to see our extensive collection of fabrics and samples
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Get Directions
                </a>
              </div>
              
              {/* Actual Google Maps embed would go here */}
              {/* 
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elegant Drapes & Blinds Location"
              ></iframe>
              */}
            </div>
            
            {/* Showroom Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Visit Our Showroom</h3>
              <p className="text-gray-300 mb-4">
                See and feel our premium fabrics, browse our extensive sample collection, and get expert advice from our design consultants.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Over 500 fabric samples on display</li>
                <li>• Free design consultation</li>
                <li>• See installed examples</li>
                <li>• Complimentary parking available</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-blue-600 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Schedule your free in-home consultation today. Our experts will visit your space, take precise measurements, and provide a detailed quote at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}