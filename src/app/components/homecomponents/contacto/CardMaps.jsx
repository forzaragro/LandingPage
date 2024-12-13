const CardMaps = () => {

  const infoCards = [
    {
      name: "Armstrong, Santa Fe",
      Direccion: "Av. 9 de Julio 123",
      Atencion: "8:00hs a 19:00hs",
      Telefono: "11-1234-5678",
      Llegar: "https://www.google.com/maps/search/?api=1&query=-32.78061,-61.60378",
    },
    {
      name: "Cruz Alta, Córdoba",
      Direccion: "Av. 9 de Julio 123",
      Atencion: "8:00hs a 19:00hs",
      Telefono: "11-1234-5678",
      Llegar: "https://www.google.com/maps/search/?api=1&query=-33.0072364,-61.8094146",
    },
  ];
  return (
    <article className="tablet:flex justify-center items-center tablet:gap-4">
      {infoCards.map((info, index) => (
        <div key={index} className="w-full max-w-sm bg-primaryColor rounded-lg shadow-xl overflow-hidden mb-4">
          <div className="p-6">
            <h3 className="font-montserrat font-bold mb-2">{info.name}</h3>
            <ul className="mb-4">
              <li>Dirección: {info.Direccion}</li>
              <li>Horarios de Atención: {info.Atencion}</li>
              <li>Teléfono: {info.Telefono}</li>
            </ul>
            <a
              target="_blank"
              href={info.Llegar}
              className="bg-darkPrymaryColor hover:bg-primaryText rounded-full text-white font-bold py-2 px-4 transition duration-300 self-start"
            >
              Como Llegar
            </a>
          </div>
          
        </div>
      ))}

      
    </article>
  );
};

export { CardMaps };
