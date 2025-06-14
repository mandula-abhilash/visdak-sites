"use client";

import { Scissors, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer({ business }) {
  return (
    <footer className="bg-[var(--bhava-dark)] text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <Scissors className="h-8 w-8 text-[var(--bhava-accent)] mr-2" />
              <span className="text-2xl font-bold">{business.name}</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {business.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[var(--bhava-accent-light)] rounded-lg flex items-center justify-center hover:bg-[var(--bhava-accent-hover)] transition-colors"
              >
                <Facebook className="h-5 w-5 text-[var(--bhava-accent)]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--bhava-accent-light)] rounded-lg flex items-center justify-center hover:bg-[var(--bhava-accent-hover)] transition-colors"
              >
                <Instagram className="h-5 w-5 text-[var(--bhava-accent)]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[var(--bhava-accent-light)] rounded-lg flex items-center justify-center hover:bg-[var(--bhava-accent-hover)] transition-colors"
              >
                <Twitter className="h-5 w-5 text-[var(--bhava-accent)]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-[var(--bhava-accent)] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-[var(--bhava-accent)] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[var(--bhava-accent)] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-[var(--bhava-accent)] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[var(--bhava-accent)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Hair Cutting</span>
              </li>
              <li>
                <span className="text-gray-300">Hair Coloring</span>
              </li>
              <li>
                <span className="text-gray-300">Hair Treatments</span>
              </li>
              <li>
                <span className="text-gray-300">Men's Grooming</span>
              </li>
              <li>
                <span className="text-gray-300">Hair Styling</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 {business.name}. All rights reserved. |
            <a
              href="#"
              className="text-[var(--bhava-accent)] hover:underline ml-1"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="#"
              className="text-[var(--bhava-accent)] hover:underline ml-1"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
