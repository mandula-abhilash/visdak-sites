"use client";

export default function HeroSection({ business }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white mt-16"
    >
      {/* Background Image */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1200"
          alt="Professional salon interior with modern styling chairs"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-r lg:from-black/60 lg:via-black/30 lg:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center lg:text-left max-w-7xl mx-auto px-4 w-full">
        <div className="lg:w-1/2 animate-fadeIn">
          {/* Background overlay for mobile/tablet */}
          <div className="lg:hidden absolute inset-0 bg-black/50 rounded-lg -m-8"></div>

          <div className="relative z-10 lg:bg-white/95 lg:backdrop-blur-sm lg:p-8 lg:rounded-xl lg:shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white lg:text-gray-900 mb-6 leading-tight">
              Redefine Your
              <span className="text-yellow-400 lg:text-yellow-600 block">
                Beauty
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 lg:text-gray-600 mb-8 max-w-2xl lg:max-w-none leading-relaxed">
              Experience premium unisex salon services where style meets
              sophistication. Professional treatments for both men and women.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <a
                href="#services"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Services
              </a>
              <a
                href={`https://wa.me/${business.contact.phone.replace(
                  /\D/g,
                  ""
                )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment`}
                className="border-2 border-yellow-400 lg:border-yellow-600 text-yellow-400 lg:text-yellow-600 hover:bg-yellow-400 lg:hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
