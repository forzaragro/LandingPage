const Hero = () => {
  return (
    <section
      id="/home"
      className="relative mx-auto px-4 py-16 text-center bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)), url('/images/banner.png')",
      }}
    >
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-white">
          Innovación en Pulverización Agrícola
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          Optimiza tus aplicaciones con tecnología de vanguardia. Descubre nuestros sistemas de pulverización electrostática y Plant to Plant.
        </p>
        <a
          target="_blank"
          href="https://linktr.ee/forzaragro"
          className="inline-flex items-center px-4 py-2 bg-acentColor text-white rounded-lg hover:bg-white hover:text-acentColor transition-colors duration-300"
        >
          Contactanos
        </a>
      </div>
    </section>
  );
};

export { Hero };
