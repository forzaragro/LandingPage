
import { Beneficios, Empresa, Contacto, ProductCard, Hero, } from "@components/homecomponents/index";

import Styles from '@styles/home.module.css'


export default function Home() {
  return (
    /*{ Padings de sections tablet:p-20}*/
    <>
    <header>
    <Hero />
    </header>
    <section >

    <ProductCard />
    </section>
      {/*  BENEFICIOS SECTION*/}
      <Beneficios />

      {/*  EMPRESA  SECTION*/}
      <Empresa />
    

      {/*  CONTACTO SECTION*/}
      <Contacto />
    </>
  );
}
