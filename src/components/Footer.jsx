import React from 'react';

const Footer = () => {
  const footerContainerStyle = {
    backgroundColor: '#DCF8C6', // Verde clarito WhatsApp
    color: '#000000', // Letras en negro
    width: '100%',
    padding: '100px 0 40px 0',
    boxSizing: 'border-box',
    borderTop: '1px solid rgba(0,0,0,0.05)', // Borde sutil
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    marginTop: '100px',
  };

  const contentWrapper = {
    maxWidth: '1100px', 
    margin: '0 auto',
    padding: '0 40px',
    display: 'flex',
    flexDirection: 'column',
  };

  const topSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '40px',
    marginBottom: '60px'
  };

  const titleStyle = {
    fontSize: '1.4rem',
    fontWeight: '600',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    margin: '0 0 10px 0',
    color: '#000000',
  };

  const subtitleStyle = {
    fontSize: '0.7rem',
    letterSpacing: '3px',
    color: '#333', // Gris oscuro para contraste sobre verde
    textTransform: 'uppercase',
    fontWeight: '700'
  };

  const labelStyle = {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#444', // Gris oscuro
    marginBottom: '15px',
    display: 'block'
  };

  const infoStyle = {
    fontSize: '0.9rem',
    letterSpacing: '0.5px',
    color: '#1a1a1a', // Negro casi puro para lectura clara
    lineHeight: '1.8',
    fontWeight: '400'
  };

  const copyrightSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    borderTop: '1px solid rgba(0,0,0,0.1)', // Línea divisoria suave
    flexWrap: 'wrap',
    gap: '20px'
  };

  return (
    <footer style={footerContainerStyle}>
      <div style={contentWrapper}>
        
        <div style={topSectionStyle}>
          {/* Lado Izquierdo: Branding */}
          <div>
            <h3 style={titleStyle}>MS <span style={{fontWeight: '200'}}>&</span> ASOC.</h3>
            <div style={subtitleStyle}>Consultoría Integral & Auditoría</div>
          </div>

          {/* Lado Derecho: Info de contacto formal */}
          <div style={{ textAlign: 'right', minWidth: '250px' }}>
            <span style={labelStyle}>Disponibilidad & Horarios</span>
            <div style={infoStyle}>
              Lunes a Viernes — 10:00 a 18:00 hs.
            </div>
          </div>
        </div>
        
        {/* Sección Inferior: Legal y Signature */}
        <div style={copyrightSectionStyle}>
          <div style={{
            fontSize: '0.65rem',
            color: '#000',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            opacity: 0.8
          }}>
            © {new Date().getFullYear()} MS & ASOC. — Profesionales en Ciencias Económicas
          </div>

          <div style={{
            fontSize: '0.6rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#000',
            fontStyle: 'italic',
            opacity: 0.7
          }}>
            Excelencia en Asesoramiento Corporativo
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;