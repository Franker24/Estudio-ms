import React from 'react';

const Footer = () => {
  const footerContainerStyle = {
    backgroundColor: '#DCF8C6', // Tu verde característico
    color: '#000000',
    width: '100%',
    padding: '80px 0 40px 0',
    boxSizing: 'border-box',
    borderTop: '1px solid rgba(0,0,0,0.05)',
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
    fontSize: '2rem', // Aumentado para que luzca la caligrafía
    fontWeight: 'normal',
    margin: '0 0 5px 0',
    color: '#000000',
    lineHeight: '1',
  };

  const subtitleStyle = {
    fontSize: '0.65rem',
    letterSpacing: '3px',
    color: '#333',
    textTransform: 'uppercase',
    fontWeight: '700',
    opacity: 0.8
  };

  const labelStyle = {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#444',
    marginBottom: '15px',
    display: 'block'
  };

  const linkStyle = {
    display: 'block',
    fontSize: '0.95rem',
    color: '#000',
    textDecoration: 'none',
    marginBottom: '8px',
    fontWeight: '500',
    transition: 'opacity 0.3s'
  };

  const copyrightSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '30px',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    flexWrap: 'wrap',
    gap: '20px'
  };

  return (
    <footer style={footerContainerStyle} id="contacto">
      <div style={contentWrapper}>
        
        <div style={topSectionStyle}>
          {/* Lado Izquierdo: Branding con Caligrafía */}
          <div>
            <h3 style={titleStyle}>ℳ𝒮 & 𝒜𝓈ℴ𝒸.</h3>
            <div style={subtitleStyle}>Consultoría Integral & Auditoría</div>
          </div>

          {/* Lado Derecho: Contacto Adaptado */}
          <div className="footer-contact" style={{ minWidth: '250px' }}>
            <span style={labelStyle}>Contacto Directo</span>
            
            <a href="tel:+5491153221764" style={linkStyle}>
              <span style={{opacity: 0.5, marginRight: '8px'}}>Tel:</span>
              +54 9 11 5322-1764
            </a>
            
            <a href="mailto:contacto@msestudiocontable.com" style={linkStyle}>
              <span style={{opacity: 0.5, marginRight: '8px'}}>Email:</span>
              contacto@msestudiocontable.com
            </a>

            <div style={{ ...linkStyle, marginTop: '15px', fontSize: '0.85rem' }}>
              <span style={{opacity: 0.5, marginRight: '8px'}}>Horarios:</span>
              Lun a Vie — 10 a 18 hs
            </div>
          </div>
        </div>
        
        {/* Sección Inferior: Legal */}
        <div style={copyrightSectionStyle}>
          <div style={{
            fontSize: '0.65rem',
            color: '#000',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            opacity: 0.7
          }}>
            © {new Date().getFullYear()} ℳ𝒮 & 𝒜𝓈ℴ𝒸. — Profesionales en Ciencias Económicas
          </div>

          <div style={{
            fontSize: '0.6rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#000',
            fontWeight: '600',
            opacity: 0.5
          }}>
            Excelencia en Asesoramiento Corporativo
          </div>
        </div>

      </div>

      {/* Estilos responsivos rápidos */}
      <style>{`
        @media (max-width: 768px) {
          .footer-contact { text-align: left !important; }
          footer { padding: 60px 0 30px 0 !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;