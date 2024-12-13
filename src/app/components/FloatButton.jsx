import Styles from '@styles/home.module.css';

const FloatButton = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <a href="tel:+543467629181" className={`${Styles.triangleButton}`}>
        
          <img src="images/logoWhatsapp.svg" alt="contacto" className="size-10 z-20 bottom-2 fixed"/>
       
      </a>
    </div>
  );
}

export { FloatButton };


