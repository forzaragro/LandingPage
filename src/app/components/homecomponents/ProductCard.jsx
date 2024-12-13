import Image from 'next/image';
import Styles from "@styles/components.module.css"
// const ProductCard = () => {
//   return (
//     <div
//       className="w-full max-w-3xl  text-gray-50 bg-black bg-opacity-15 tablet:bg-gray-50 
//      tablet:rounded-lg shadow-md overflow-hidden"
//     >
//       <div className="p-6  tablet:text-primaryText">
//         <h2 className="text-2xl font-bold underline decoration-primaryColor  mb-4">
//           Líderes en <br /> innovacion y tecnoloía
//         </h2>
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-2/3  md:pr-6">
//             <p className=" mb-4 text-left">
//              Optimiza tus aplicaciones con tecnología de vanguardia. Nuestro sistema de pulverización electrostática garantiza una cobertura uniforme, reduce pérdidas por deriva y minimiza el impacto ambiental, maximizando la eficiencia y el ahorro en el campo. ¡Innovación al servicio de la agricultura!
//             </p>
//             <div className="mb-4 md:mb-0">
//               <h3 className="font-semibold text-primaryText bg-primaryColor mb-2">CERTIFICACIONES:</h3>
//               <ul className="list-none">
//                 <li>Cancelación activa de ruido para una inmersión total</li>
//                 <li>30 horas de batería para un uso prolongado</li>

//                 <li>Diseño ergonómico para máxima comodidad</li>
//                 <li>Control táctil intuitivo para una fácil operación</li>
//               </ul>
//             </div>
//           </div>
//           <div className="md:w-1/3 ">
//             <h3 className="font-semibold tablet:text-gray-700 mb-2">Beneficios:</h3>
                         
//             <ul className="list-inside  list-none">


//               <li>Calidad de aplicación</li>
//               <li>Menor Perdida por Deriva</li>
//               <li>Retorno de Inversión</li>
//               <li>Eficiencia Operativa</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export { ProductCard };


export function ProductCard() {
  const products = [
    {
      title: "Sistema de Pulverización Electrostática",
      imageSrc: "/images/home1-carrousel.png",
      description: "Garantiza una cobertura uniforme, reduce pérdidas por deriva y minimiza el impacto ambiental."
    },
    {
      title: "Sistema Plant to Plant",
      imageSrc: "/images/plantToplant.webp",
      description: "Pulveriza únicamente sobre las plantas detectadas, evitando el desperdicio en espacios vacíos."
    }
  ];

  return (
    <section className={`${Styles.cardsSection} py-16 `}>
      <div className="md:container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-56">
                <Image src={product.imageSrc} alt={product.title} layout="fill" objectFit="cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl underline decoration-primaryColor font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-700 mb-4 indent-2">{product.description}</p>
              </div>
               <a href="/product" className='ml-4 font-montserrat font-bold no-underline hover:underline'>Conocé más</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
