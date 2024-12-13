import { CardCEOS } from "../homecomponents/contacto/CardCEOS";
import { CardMaps } from "../homecomponents/contacto/CardMaps";

const Contacto = () => {
  return (
    <section id="contacto" className=" flex flex-col items-center justify-center space-y-2 pt-10 pb-24">
      <div className=" w-full flex flex-col font-montserrat movil:pl-3 tablet:pl-[15%]]">
        <h2 className="text-3xl  text-primaryText font-bold pb-2">Contacto</h2>
        <p className="pb-3">
          {" "}
          Nuestra oficina principal está ubicada en Armstrong, en la provincia de Santa Fe, una región fundamental para la agricultura, <br />
           que nos facilita conectar desde el corazón del país con cada rincón de Argentina.
        </p>
      </div>

      <CardCEOS />

      <CardMaps />
    </section>
  );
};
export { Contacto };
