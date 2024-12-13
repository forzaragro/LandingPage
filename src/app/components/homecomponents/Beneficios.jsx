"use client";
import { React, useState } from "react";

const Beneficios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const beneficios = [
    {
      image: "/images/home1-carrousel.png",
      name: "Autónomo",
      description: "Panel de control que permite operar el sistema con facilidad.",
    },
    {
      image: "/images/home2-carrousel.png",
      name: "Efectividad",
      description: "Menor pérdida por deriva, asegurando una aplicación precisa.",
    },
    {
      image: "/images/efectividad.jpeg",
      name: "Ahorrativo",
      description:"Optimiza el uso de insumos y ahorra dinero." ,
    },
    {
      image: "/images/home3-carrousel.png",
      name: "Seguridad",
      description: "Maximiza la productividad y la calidad de tus cultivos.",
    },
  ];
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % beneficios.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + beneficios.length) % beneficios.length);
  };

  return (
    <section id="beneficios" className="bg-white flex flex-col items-center justify-center  pb-24  ">
      <div className=" w-full flex flex-col font-montserrat movil:pl-3 tablet:pl-[15%]]">
        <h2 className="text-3xl  text-primaryText font-bold pb-2">Beneficios</h2>
        <p className="pb-3">
          {" "}
          Ensayos en laboratorio usando pulverización electrostática, <br />
           con el método de espectrofotometría, muestran más de un 50% de deposición comparado con la aplicación convencional.
        </p>
      </div>

      <div className="relative w-full max-w-xs mx-auto min-[1024px]:hidden">
        <div className="overflow-hidden  shadow-lg">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {beneficios.map((beneficio, index) => (
              <article key={index} className="w-full flex-shrink-0 relative ">
                <div className="overflow-hidden  shadow-lg">
                  <img className="w-full h-auto" src={beneficio.image} alt={beneficio.name} />
                  <div className="border-b-acentColor border-b-8">
                    <div className="font-bold text-xl mb-2 ">{beneficio.name}</div>
                    <p className="text-gray-700 text-base ">{beneficio.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  text-acentColor p-2 rounded-r-lg  transition-colors"
          aria-label="Imagen anterior"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  text-acentColor p-2 rounded-l-lg  transition-colors"
          aria-label="Siguiente imagen"
        >
          &#10095;
        </button>
      </div>
      {/* Desktop view static row */}
      <div className="hidden laptop:flex laptop:flex-row md:gap-4 pl-3 pr-3">
        {beneficios.map((beneficio, index) => (
          <article key={index} className="w-full max-w-xs ">
            <div className="overflow-hidden shadow-lg">
              <img className="w-full h-auto" src={beneficio.image} alt={beneficio.name} />
              <div className="border-b-acentColor border-b-8">
                <div className="font-bold md:text-x mb-2">{beneficio.name}</div>
                <p className="text-gray-700 text-base">{beneficio.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export { Beneficios };
