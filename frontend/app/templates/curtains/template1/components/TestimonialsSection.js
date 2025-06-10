import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Downtown Residence",
      rating: 5,
      text: "Absolutely stunning work! The team at Elegant Drapes transformed our living room with beautiful custom curtains. The fabric quality is exceptional and the installation was flawless. Highly recommend!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Chen",
      location: "Corporate Office",
      rating: 5,
      text: "Professional service from start to finish. They handled our entire office building's window treatments with efficiency and style. The motorized blinds are a game-changer for our conference rooms.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emily Rodriguez",
      location: "Suburban Home",
      rating: 5,
      text: "From consultation to installation, everything was perfect. They helped us choose the right fabrics and styles for each room. Our home feels so much more elegant now. Worth every penny!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our window treatment services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-blue-100">
                <Quote className="h-8 w-8" />
              </div>

              {/* Customer Photo and Info */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Ready to transform your space with beautiful window treatments? Get your free consultation today!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}