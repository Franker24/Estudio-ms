import React from 'react';
import ContactForm from '../components/ContactForm';

const Contacto = () => {
  const containerStyle = {
    width: '100%',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const formSectionStyle = {
    flex: '1',
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
    padding: '60px 20px',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: '300',
    marginBottom: '50px',
    color: '#1a1a1a',
    textTransform: 'uppercase',
    letterSpacing: '3px'
  };

  // ESTE BLOQUE AHORA OCUPA TODO EL ANCHO DE LA PANTALLA
  const footerInfoStyle = {
    backgroundColor: '#DCF8C6',
    color: '#000000',
    padding: '80px 20px', 
    textAlign: 'center',
    
    // Magia para ocupar el 100% del ancho rompiendo el contenedor padre
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxSizing: 'border-box',
    borderTop: '1px solid #333',
    marginTop: 'auto' 
  };

  const whatsappInsideStyle = {
    position: 'absolute',
    bottom: '40px',
    right: 'min(40px, 5%)', // Se ajusta en pantallas muy anchas
    backgroundColor: '#25d366',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    zIndex: 10
  };

  return (
    <div style={containerStyle}>
      <div style={formSectionStyle}>
        <h2 style={titleStyle}>Formulario de Contacto</h2>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <ContactForm />
        </div>
      </div>

      <div style={footerInfoStyle}>
        {/* Contenedor interno para que el texto no se estire a los bordes */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          <h3 style={{ 
            textTransform: 'uppercase', 
            fontSize: '1.4rem', 
            marginBottom: '15px', 
            letterSpacing: '4px',
            fontWeight: '400' 
          }}>
            ¡Contactanos!
          </h3>
          
          <p style={{ 
            fontSize: '0.95rem', 
            maxWidth: '650px', 
            margin: '0 auto 35px auto', 
            opacity: '0.7',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Completá el formulario y nos pondremos en contacto con vos a la brevedad. <br/>
            También podés comunicarte vía WhatsApp o correo electrónico.
          </p>
          
          <div style={{ 
  display: 'flex', 
  justifyContent: 'center', 
  gap: '50px', 
  fontSize: '0.9rem',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  borderTop: '1px solid #222',
  paddingTop: '30px',
  flexWrap: 'wrap' 
}}>
  <p style={{ margin: '5px 0' }}>
    <strong style={{ color: '#888' }}>Tel:</strong> +54 9 011 5 322 1764
  </p>
  
  <p style={{ margin: '5px 0' }}>
    <strong style={{ color: '#888' }}>Email:</strong> contacto@msestudiocontable.com
  </p>

  {/* Solo se achicó el fontSize de este bloque */}
  <p style={{ 
      fontSize: '0.65rem', // Letras pequeñas
      maxWidth: '650px', 
      margin: '5px 0', 
      opacity: '0.7',
      lineHeight: '1.6',
      fontWeight: '300'
    }}         
  >
    Horario de atención de lunes a viernes de 10 a 18 hs
  </p>
</div>
        </div>

        <a 
          href="https://wa.me/5491153221764" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={whatsappInsideStyle}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
        >
          <svg width="32" height="32" viewBox="0 0 448 512" fill="white">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.5-11.2 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 34.9 2.1 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contacto;  