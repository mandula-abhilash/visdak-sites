"use client";

export default function HeroSection({ business }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white pt-20 mt-16 lg:mt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1706629504952-ab5e50f5c179?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Professional salon interior with modern styling chairs"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:w-1/2 animate-fadeIn">
          {/* Background overlay for mobile/tablet */}
          <div className="lg:hidden absolute inset-0 bg-black/50 rounded-lg -mx-4 -my-8"></div>

          <div className="relative z-10 lg:bg-white/95 lg:backdrop-blur-sm lg:p-8 lg:rounded-xl lg:shadow-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white lg:text-gray-900 mb-6 leading-tight">
              Redefine Your
              <span className="text-yellow-400 lg:text-yellow-600 block">
                Beauty
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 lg:text-gray-600 mb-8 leading-relaxed">
              Experience premium unisex salon services where style meets
              sophistication. Professional treatments for both men and women.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <a
                href="#services"
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Explore Services
              </a>
              <a
                href={`https://wa.me/${business.contact.phone.replace(
                  /\D/g,
                  ""
                )}?text=Hi!%20I'd%20like%20to%20book%20an%20appointment`}
                className="border-2 border-yellow-400 lg:border-yellow-600 text-yellow-400 lg:text-yellow-600 hover:bg-yellow-400 lg:hover:bg-yellow-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 text-center"
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
