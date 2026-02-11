import React from 'react';

const Footer = () => {
  const footerContainerStyle = {
    backgroundColor: '#050505', // Un negro con más profundidad
    color: '#ffffff',
    width: '100%',
    padding: '100px 0 40px 0', // Más aire superior para mayor elegancia
    boxSizing: 'border-box',
    borderTop: '1px solid #1a1a1a',
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
  };

  const subtitleStyle = {
    fontSize: '0.7rem',
    letterSpacing: '3px',
    color: '#555', // Gris más oscuro para jerarquía visual
    textTransform: 'uppercase',
    fontWeight: '700'
  };

  const labelStyle = {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#444',
    marginBottom: '15px',
    display: 'block'
  };

  const infoStyle = {
    fontSize: '0.9rem',
    letterSpacing: '0.5px',
    color: '#aaa', // Texto suave para no saturar
    lineHeight: '1.8',
    fontWeight: '300'
  };

  const copyrightSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    borderTop: '1px solid #111',
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
            color: '#333',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            © {new Date().getFullYear()} MS & ASOC. — Profesionales en Ciencias Económicas
          </div>

          <div style={{
            fontSize: '0.6rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#444',
            fontStyle: 'italic'
          }}>
            Excelencia en Asesoramiento Corporativo
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;