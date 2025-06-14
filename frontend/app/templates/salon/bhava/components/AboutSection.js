"use client";

import { Award } from "lucide-react";

export default function AboutSection({ business }) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About {business.name}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of excellence in the beauty industry,{" "}
              {business.name} has been the premier destination for sophisticated
              hair styling and beauty treatments. Our unisex approach ensures
              that both men and women receive world-class services in a
              luxurious, welcoming environment.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of certified professionals specializes in cutting-edge
              techniques, from precision cuts and creative coloring to advanced
              hair treatments and styling. We believe that every client deserves
              to look and feel their absolute best.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--bhava-accent)]">
                  15+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--bhava-accent)]">
                  5000+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
              alt="Professional hair stylist working with client"
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[var(--bhava-accent)] text-white p-6 rounded-lg shadow-lg">
              <Award className="h-8 w-8 mb-2" />
              <div className="font-bold">Award Winning</div>
              <div className="text-sm">Salon Services</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
