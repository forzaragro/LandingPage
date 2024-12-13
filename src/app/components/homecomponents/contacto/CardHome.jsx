import React from 'react'

const CardHome = () => {
  return (
    <article className="pt-20 flex justify-center content-around  tablet:space-x-3 space-x-10 h-[50%] font-montserrat font-bold  flex-wrap movil:invisible laptop:visible ">
      <div className="relative w-48 h-48 m-2">
        <img
          src="https://placehold.co/600x400/#FFFFFF/FFF"
          alt="Eficiencia"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <p className="text-acentColor text-center font-semibold">Eficiencia</p>
        </div>
      </div>
      <div className="relative w-48 h-48 m-2">
        <img
          src="https://placehold.co/600x400/#FFFFFF/FFF"
          alt="Ahorro"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <p className="text-acentColor text-center font-semibold">Ahorro</p>
        </div>
      </div>
      <div className="relative w-48 h-48 m-2">
        <img
          src="https://placehold.co/600x400/#FFFFFF/fff"
          alt="Calidad"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <p className="text-acentColor text-center font-semibold">Calidad</p>
        </div>
      </div>
    </article>
  );
}

export default CardHome