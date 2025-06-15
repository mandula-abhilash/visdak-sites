"use client";

import { Award } from "lucide-react";

export default function AboutSection({ business }) {
  if (!business) return null;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--template-font-heading)" }}
            >
              About {business.name}
            </h2>
            <p
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              style={{ fontFamily: "var(--template-font-body)" }}
            >
              {business.description}
            </p>
            {business.about?.story && (
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                style={{ fontFamily: "var(--template-font-body)" }}
              >
                {business.about.story}
              </p>
            )}
            {business.stats && (
              <div className="grid grid-cols-2 gap-6">
                {business.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="text-3xl font-bold text-[var(--template-accent)]"
                      style={{ fontFamily: "var(--template-font-heading)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-gray-600"
                      style={{ fontFamily: "var(--template-font-body)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            {business.aboutImage && (
              <>
                <img
                  src={business.aboutImage}
                  alt={`About ${business.name}`}
                  className="w-full rounded-lg shadow-2xl"
                />
                {business.award && (
                  <div className="absolute -bottom-6 -right-6 bg-[var(--template-accent)] text-white p-6 rounded-lg shadow-lg">
                    <Award className="h-8 w-8 mb-2" />
                    <div
                      className="font-bold"
                      style={{ fontFamily: "var(--template-font-heading)" }}
                    >
                      {business.award.title}
                    </div>
                    <div
                      className="text-sm"
                      style={{ fontFamily: "var(--template-font-body)" }}
                    >
                      {business.award.subtitle}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
