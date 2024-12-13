import Styles from "@styles/footerStyle.module.css";
import Style from "@styles/components.module.css";
import Link from "next/link";

const FooterPage = () => {
  return (
    <footer className={`${Styles.principalFooter} flex flex-col font-montserrat py-10`}>
      <div className={` ${Styles.content} flex flex-col tablet:flex-row justify-between self-start px-4 sm:px-6 lg:px-8`}>
        <div>
          <a href="/" className="text-acentColor font-montserrat text-3xl cursor-pointer">Forzar Agro</a>
          <br />
          <a
            target="_blank"
            href="https://linktr.ee/forzaragro"
            className="inline-flex items-center px-4 py-2 bg-acentColor text-white rounded-lg hover:bg-white hover:text-acentColor transition-colors duration-300"
          >
            Contactanos
          </a>

          <ul className="flex flex-col list-none p-3 text-dividerColor gap-3">
            <li>Armstrong - Sta Fe</li>
            <li>Dirección: ??????</li>
            <li>Número telefónico</li>
            <li>info@forzaragro.com</li>
          </ul>
          
        </div>
        
      </div>
      <div className={`${Styles.sectionTwoFooter} mx-auto px-4 py-4 sm:px-6 lg:px-8 text-dividerColor`}>
        <p className="text-center text-xs">
          Copyright © 2024 <span className="text-acentColor">Forzar Agro</span> - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export { FooterPage };
