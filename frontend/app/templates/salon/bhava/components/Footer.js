"use client";

import { Scissors, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer({ business }) {
  if (!business) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--template-dark)] text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              {business.logo ? (
                <img
                  src={business.logo}
                  alt={business.name}
                  className="h-8 w-8 mr-2 rounded"
                />
              ) : (
                <Scissors className="h-8 w-8 text-[var(--template-accent)] mr-2" />
              )}
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--template-font-heading)" }}
              >
                {business.name}
              </span>
            </div>
            <p
              className="text-gray-300 mb-4 max-w-md"
              style={{ fontFamily: "var(--template-font-body)" }}
            >
              {business.description}
            </p>
            {business.contact?.social && (
              <div className="flex space-x-4">
                {business.contact.social.facebook && (
                  <a
                    href={business.contact.social.facebook}
                    className="w-10 h-10 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center hover:bg-[var(--template-accent-hover)] transition-colors"
                  >
                    <Facebook className="h-5 w-5 text-[var(--template-accent)]" />
                  </a>
                )}
                {business.contact.social.instagram && (
                  <a
                    href={business.contact.social.instagram}
                    className="w-10 h-10 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center hover:bg-[var(--template-accent-hover)] transition-colors"
                  >
                    <Instagram className="h-5 w-5 text-[var(--template-accent)]" />
                  </a>
                )}
                {business.contact.social.twitter && (
                  <a
                    href={business.contact.social.twitter}
                    className="w-10 h-10 bg-[var(--template-accent-light)] rounded-lg flex items-center justify-center hover:bg-[var(--template-accent-hover)] transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-[var(--template-accent)]" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "var(--template-font-heading)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-[var(--template-accent)] transition-colors"
                  style={{ fontFamily: "var(--template-font-body)" }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[var(--template-accent)] transition-colors"
                  style={{ fontFamily: "var(--template-font-body)" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[var(--template-accent)] transition-colors"
                  style={{ fontFamily: "var(--template-font-body)" }}
                >
                  Services
                </a>
              </li>
              {business.gallery && business.gallery.length > 0 && (
                <li>
                  <a
                    href="#gallery"
                    className="text-gray-300 hover:text-[var(--template-accent)] transition-colors"
                    style={{ fontFamily: "var(--template-font-body)" }}
                  >
                    Gallery
                  </a>
                </li>
              )}
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[var(--template-accent)] transition-colors"
                  style={{ fontFamily: "var(--template-font-body)" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ fontFamily: "var(--template-font-heading)" }}
            >
              Services
            </h3>
            <ul className="space-y-2">
              {business.services?.slice(0, 5).map((service, index) => (
                <li key={index}>
                  <span
                    className="text-gray-300"
                    style={{ fontFamily: "var(--template-font-body)" }}
                  >
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p
            className="text-gray-300"
            style={{ fontFamily: "var(--template-font-body)" }}
          >
            &copy; {currentYear} {business.name}. All rights reserved.
            {business.footerLinks && (
              <>
                {" | "}
                {business.footerLinks.map((link, index) => (
                  <span key={index}>
                    <a
                      href={link.href}
                      className="text-[var(--template-accent)] hover:underline ml-1"
                    >
                      {link.text}
                    </a>
                    {index < business.footerLinks.length - 1 && " | "}
                  </span>
                ))}
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
