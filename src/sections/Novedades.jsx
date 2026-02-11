import React, { useState } from 'react';

const Novedades = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const linksUtiles = [
    { name: "ARCA", url: "https://www.arca.gob.ar", full: "Agencia de Recaudación y Control Aduanero" },
    { name: "ANSES", url: "https://www.anses.gob.ar", full: "Administración Nacional de la Seguridad Social" },
    { name: "AGIP", url: "https://www.agip.gob.ar", full: "Adm. Gubernamental de Ingresos Públicos" },
    { name: "ARBA", url: "https://www.arba.gov.ar", full: "Agencia de Recaudación Prov. Bs. As." },
    { name: "Comisión Arbitral", url: "https://www.comarb.gov.ar", full: "Convenio Multilateral" },
    { name: "IGJ", url: "https://www.argentina.gob.ar/justicia/igj", full: "Inspección General de Justicia" },
    { name: "SRT", url: "https://www.argentina.gob.ar/srt", full: "Superintendencia de Riesgos del Trabajo" },
    { name: "BCRA", url: "https://www.bcra.gob.ar", full: "Banco Central de la Rep. Argentina" },
    { name: "CPCECABA", url: "https://www.consejo.org.ar", full: "Consejo Profesional Cs. Económicas" },
    // Nuevo link agregado aquí:
    { name: "SSSalud", url: "https://www.argentina.gob.ar/sssalud", full: "Superintendencia de Servicios de Salud" }
  ];

  const novedadesMensuales = [
    {
      titulo: "Control de gestión: nuevo tablero de comando",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      desc: "Implementación de herramientas de control para optimizar la toma de decisiones estratégicas.",
      fecha: "Febrero 2026"
    },
    {
      titulo: "Planeamiento impositivo a 10 años",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
      desc: "Estrategias de largo plazo para la optimización de la carga tributaria corporativa.",
      fecha: "Enero 2026"
    },
    {
      titulo: "Diferimiento del pago de IVA",
      img: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=800&auto=format&fit=crop",
      desc: "Nuevos beneficios para el flujo de caja en pequeñas y medianas empresas según normativas actuales.",
      fecha: "Enero 2026"
    }
  ];

  const filteredLinks = linksUtiles.filter(link => 
    link.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    link.full.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 20px',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      {/* --- CABECERA --- */}
      <span style={{ textTransform: 'uppercase', letterSpacing: '5px', fontSize: '0.75rem', color: '#999', display: 'block', textAlign: 'center', marginBottom: '15px' }}>
        Actualidad Jurídica & Contable
      </span>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: '700', textAlign: 'center', marginBottom: '30px', letterSpacing: '-1px' }}>
        Novedades del Mes
      </h2>
      
      <div style={{ width: '100%', height: '1px', backgroundColor: '#eee', margin: '0 auto 60px auto' }}></div>

      {/* --- GRILLA DE NOVEDADES --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '100px' }}>
        {novedadesMensuales.map((nov, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff', border: '1px solid #f0f0f0', overflow: 'hidden', transition: 'all 0.4s ease' }}>
            <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
              <img src={nov.img} alt={nov.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '30px' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#bbb' }}>{nov.fecha}</span>
              <h3 style={{ fontSize: '1.2rem', margin: '10px 0', fontWeight: '600' }}>{nov.titulo}</h3>
              <p style={{ fontSize: '0.9rem', color: '#777', fontWeight: '300', lineHeight: '1.6' }}>{nov.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- SECCIÓN ENLACES ÚTILES CON LUPA --- */}
      <div style={{ backgroundColor: '#fdfdfd', padding: '80px 40px', border: '1px solid #f5f5f5' }}>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          marginBottom: '50px',
          flexWrap: 'wrap',
          gap: '30px'
        }}>
          <div>
            <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '4px', fontWeight: '700', margin: 0 }}>
              Enlaces de Interés Institucional
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '10px', letterSpacing: '0.5px' }}>
              Accesos directos a organismos oficiales.
            </p>
          </div>

          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <input 
              type="text"
              placeholder="Buscar organismo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 35px 12px 0',
                border: 'none',
                borderBottom: '1px solid #000',
                outline: 'none',
                fontSize: '0.9rem',
                backgroundColor: 'transparent',
                fontWeight: '300',
                transition: 'border-color 0.3s'
              }}
              onFocus={(e) => e.target.style.borderBottom = '2px solid #000'}
              onBlur={(e) => e.target.style.borderBottom = '1px solid #000'}
            />
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ 
                position: 'absolute', 
                right: '0', 
                bottom: '12px', 
                color: '#999',
                pointerEvents: 'none'
              }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          columnGap: '60px',
          rowGap: '2px'
        }}>
          {filteredLinks.length > 0 ? (
            filteredLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  textDecoration: 'none',
                  borderBottom: '1px solid #eee',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.paddingLeft = '10px';
                  e.currentTarget.style.borderColor = '#000';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.paddingLeft = '0';
                  e.currentTarget.style.borderColor = '#eee';
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#000', letterSpacing: '1px' }}>
                    {link.name}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#aaa', textTransform: 'uppercase', marginTop: '4px', letterSpacing: '1px' }}>
                    {link.full}
                  </span>
                </div>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </a>
            ))
          ) : (
            <div style={{ gridColumn: '1/-1', padding: '60px 0', color: '#bbb', textAlign: 'center', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Sin resultados para "{searchTerm}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Novedades;