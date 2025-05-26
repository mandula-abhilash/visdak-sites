"use client";

import {
  CircleUser,
  Menu,
  Scissors,
  Laptop,
  Wrench,
  X,
  Moon,
  Sun,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function BusinessHeader({ business }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Map the logo string to the correct Lucide icon
  const LogoIcon = () => {
    switch (business.logo) {
      case "scissors":
        return <Scissors className="text-white" size={28} />;
      case "laptop":
        return <Laptop className="text-white" size={28} />;
      case "wrench":
        return <Wrench className="text-white" size={28} />;
      default:
        return <CircleUser className="text-white" size={28} />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Navigation Bar */}
      <div
        className="w-full px-4 md:px-6 py-4"
        style={{
          backgroundColor: business.theme.primary,
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and Business Name */}
          <div className="flex items-center space-x-3">
            <LogoIcon />
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {business.name}
            </h1>
          </div>

          {/* Desktop Navigation */}
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
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          backgroundColor: business.theme.primary,
          top: "64px", // Height of the header
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

      {/* Spacer for fixed header */}
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
