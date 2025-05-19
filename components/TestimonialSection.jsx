export default function TestimonialSection({ business }) {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: `${business.theme.primary}15` }} // Using hex opacity
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {business.testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex flex-col h-full">
                <p className="mb-4 italic text-gray-600">
                  "{testimonial.text}"
                </p>
                <div className="mt-auto">
                  <p
                    className="font-semibold"
                    style={{ color: business.theme.primary }}
                  >
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
