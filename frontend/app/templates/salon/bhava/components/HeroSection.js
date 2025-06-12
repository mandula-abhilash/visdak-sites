"use client";

export default function HeroSection({ business }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white pt-16"
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Redefine Your
          <span className="text-yellow-600 block">Beauty</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience premium unisex salon services where style meets
          sophistication. Professional treatments for both men and women.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Services
          </a>
          <a
            href={`https://wa.me/${business.contact.phone.replace(
              /\D/g,
              ""
            )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment`}
            className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200"
          alt="Professional salon interior with modern styling chairs"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    </section>
  );
}
