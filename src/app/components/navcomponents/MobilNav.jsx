"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const mobileSections = [
  { name: "Beneficios", id: "beneficios" },
  { name: "Empresa", id: "empresa" },
  { name: "Contacto", id: "contacto" },
];

export function MobilNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset + 100; // offset for better UX

      for (const section of mobileSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if ("scrollBehavior" in document.documentElement.style) {
        // For modern browsers
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // For older browsers
        const targetPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start = null;

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          if (progress < duration) window.requestAnimationFrame(step);
        };

        window.requestAnimationFrame(step);
      }
    }
    setIsOpen(false);
  };

  // Easing function for smooth scroll
  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  return (
    <nav className="fixed top-2 right-2 w-full z-50">
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-acentColor hover:bg-nav focus:outline-none focus:ring-2 focus:ring-inset focus:ring-acentColor"
          aria-expanded="false"
        >
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 bg-nav backdrop-blur-lg space-y-1 sm:px-3">
            <Link
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              href="/product"
            >
              Producto
            </Link>
            <Link
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              href="/"
              id="home"
            >
              Home
            </Link>
            {mobileSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === section.id
                    ? "text-white hover:bg-gray-100"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section.id);
                }}
              >
                {section.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
