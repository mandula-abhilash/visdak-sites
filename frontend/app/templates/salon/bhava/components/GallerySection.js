"use client";

export default function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Professional hair coloring transformation",
      category: "Hair Coloring",
    },
    {
      src: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZ12I-iSdSc9f3ooNnmXXLhNTtbHwj1Dhh-oP4oetiB0C4HmoiZ8tGfjyqRQsyL6XI3EOXeSpD27lBKzkWkEaKRdP1-MUW4cJ8Ie7uDTof-bbUFrM6hs4XbqC1WFJJxDfAVasj=s1360-w1360-h1020",
      alt: "Modern men's haircut and styling",
      category: "Men's Styling",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipOuVMTuM3Odn7it9ByFZh7WEOqU7EzFv6VvKPXE=w143-h179-n-k-no-nu",
      alt: "Elegant women's hair styling and treatment",
      category: "Women's Styling",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipOoMLl6tiX3y21xW4TaM3Mdw3kjK4kMiqv6u0wG=s1360-w1360-h1020",
      alt: "Professional salon workspace and equipment",
      category: "Modern Equipment",
    },
    {
      src: "https://lh3.googleusercontent.com/p/AF1QipPRAW_nkMME2ee5rNl-sUQ-OBq198O_CuUpddQU=s1360-w1360-h1020",
      alt: "Luxurious salon interior design",
      category: "Luxury Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600",
      alt: "Creative hair styling and artistic work",
      category: "Creative Styling",
    },
  ];

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
          {galleryImages.map((image, index) => (
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
