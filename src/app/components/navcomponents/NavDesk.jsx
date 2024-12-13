"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "@styles/navigator.css";

const desktopSections = [
  { name: "Beneficios", id: "beneficios" },
  { name: "Empresa", id: "empresa" },
  { name: "Contacto", id: "contacto" },
];

export const NavDesk = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + 200; // offset for better UX

      for (const section of desktopSections) {
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

  return (
    <nav className="sticky top-0 w-full z-50 max-tablet:hidden bg-nav  border-b-2 border-neutral-900/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-acentColor font-extrabold text-2xl md:text-4xl whitespace-nowrap">
              Forzar Agro
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 font-montserrat">
              <Link
                href="/product"
                className="text-gray-300  text-3xl hover-underline px-3 py-2 rounded-md md:text-lg "
                onClick={() => {
                  setActiveSection("");
                }}
              >
                Producto
              </Link>
              <span className="text-primaryColor text-2xl">|</span>

              {desktopSections.map(section => (
                <Link
                  className={`text-gray-300 hover-underline px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === section.id ? "text-white active" : "text-white hover:text-white"
                  } `}
                  href={`/#${section.id}`}
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
