"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Taskbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* MAIN NAVBAR - Smooth responsive behavior */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out backdrop-blur-lg
        ${isScrolled 
          ? "bg-white/98 border-b border-gray-200 shadow-sm py-1" 
          : "bg-white/90 border-b border-gray-900/20 py-4 md:py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo, Responsive sizing */}
          <Link 
            href="/" 
            className={`font-serif font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors
            ${isScrolled ? "text-xl" : "text-2xl"}`}
          >
            <Image
              src="/ogo.png"
              alt="Logo"
              width={50}
              height={50}
              loading="eager"
              priority
            />
          </Link>

          {/* Desktop Nav,  Enhanced spacing and interactions */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`group relative text-sm font-medium transition-colors py-2
                  ${isActive 
                    ? "text-gray-900" 
                    : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-px bg-gray-900 transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Button, Larger touch target */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors touch-target"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU, Fluid animations */}
      <div
        className={`fixed inset-0 z-50 bg-white/98 backdrop-blur-xl transition-all duration-500 md:hidden
        ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <div className="w-full max-w-sm space-y-6">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <div
                  key={link.href}
                  className="overflow-hidden"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-center py-3 transition-all duration-300
                    ${isMenuOpen 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span className={`font-serif text-3xl sm:text-4xl transition-colors
                    ${isActive 
                      ? "text-gray-900" 
                      : "text-gray-700 hover:text-gray-900"
                    }`}>
                      {link.label}
                    </span>
                  </Link>
                  {/* Active indicator for mobile */}
                  {isActive && (
                    <div className="w-12 h-0.5 bg-gray-900 mx-auto mt-1"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Close Button, Fixed position */}
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 p-3 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
        >
          <X className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Accessibility: Prevent body scroll when menu is open */}
      <style jsx global>{`
        .touch-target {
          min-height: 44px;
          min-width: 44px;
        }
        body {
          overflow: ${isMenuOpen ? 'hidden' : 'auto'};
        }
      `}</style>
    </>
  );
}