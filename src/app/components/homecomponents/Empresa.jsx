import Styles from "@styles/StyleNosotros.module.css";
const Empresa = () => {
  const data = [
    {
      imageLink:
        "/images/socios.jpeg",
    },
    {
      imageLink:
        "/images/campo1.png",
    },
        {
      imageLink:
        "/images/sanLorenzo.png",
    },
   
  ];

  return (
    <section id="empresa" className={` p-0 `}>
      <div className=" flex flex-col  font-montserrat ">
        <h2 className="text-3xl  text-primaryText font-bold p-2">Empresa</h2>
        <p className="p-2  text-primaryText text-justify">
          En Forzar Agro, nos destacamos como pioneros en innovación tecnológica para el sector agrícola. Nos especializamos en proporcionar soluciones avanzadas, como la pulverización electrostática y sistemas inteligentes para optimizar aplicaciones, siendo los distribuidores oficiales de “Spray Worker Brasil”, promoviendo así el cambio en toda Latinoamérica. Colaboramos estrechamente con los productores para transformar la agricultura en un modelo más sostenible, rentable y preciso.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export { Empresa };
