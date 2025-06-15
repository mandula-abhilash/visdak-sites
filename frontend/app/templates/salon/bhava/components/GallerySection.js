"use client";

export default function GallerySection({ business }) {
  if (!business || !business.gallery || business.gallery.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2
            className="text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--template-font-heading)" }}
          >
            Our Work Gallery
          </h2>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--template-font-body)" }}
          >
            Take a look at some of our stunning transformations and creative
            work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {business.gallery.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span
                  className="text-white font-semibold"
                  style={{ fontFamily: "var(--template-font-body)" }}
                >
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
