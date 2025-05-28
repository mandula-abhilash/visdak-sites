"use client";

import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function BasicHeader({ business }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="w-full px-4 md:px-6 py-4"
        style={{
          backgroundColor: business.theme.primary,
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={business.logo}
              alt={business.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {business.name}
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <button
              className="px-4 py-2 rounded-md font-medium bg-white hover:bg-white/90 transition-colors"
              style={{
                color: business.theme.primary,
              }}
            >
              Contact Us
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            {!mounted && (
              <div className="p-2 w-9 h-9 rounded-full bg-white/10">
                <div className="w-5 h-5" />
              </div>
            )}
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            {!mounted && (
              <div className="p-2 w-9 h-9 rounded-full bg-white/10">
                <div className="w-5 h-5" />
              </div>
            )}
            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          backgroundColor: business.theme.primary,
          top: "64px",
        }}
      >
        <div className="flex flex-col p-8 space-y-8 text-lg">
          <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          <button
            className="px-4 py-2 rounded-md font-medium w-full bg-white hover:bg-white/90 transition-colors"
            style={{
              color: business.theme.primary,
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="h-16"></div>
    </header>
  );
}

function NavLinks({ mobile = false, onClick = () => {} }) {
  const links = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={cn(
            "font-medium text-white hover:text-white/80 transition-opacity",
            mobile && "block py-2"
          )}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
}
