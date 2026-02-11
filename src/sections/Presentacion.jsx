import React, { useState } from 'react';

const Presentacion = () => {
  const [hoverMV, setHoverMV] = useState(null); 
  const [hoverGrid, setHoverGrid] = useState(null); 

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#000', // Texto base en negro
    padding: '80px 20px',
  };

  const overTitleStyle = {
    textTransform: 'uppercase',
    letterSpacing: '5px',
    fontSize: '0.75rem',
    color: '#666', 
    display: 'block',
    textAlign: 'center',
    marginBottom: '15px'
  };

  const mainTitleStyle = {
    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '60px',
    letterSpacing: '-1px',
    lineHeight: '1.1',
    color: '#000'
  };

  const bioTextStyle = {
    fontSize: '1.15rem',
    lineHeight: '1.8',
    color: '#1a1a1a',
    maxWidth: '850px',
    margin: '0 auto 60px auto',
    fontWeight: '300',
    textAlign: 'center'
  };

  const miniServicios = [
    { titulo: "Servicios Impositivos", icono: "％", green: true },
    { titulo: "Contabilidad y Auditoría", icono: "📋", green: false },
    { titulo: "Laboral y Previsional", icono: "🚜", green: true },
    { titulo: "Societario", icono: "👥", green: false },
    { titulo: "Control de Gestión", icono: "👓", green: true },
    { titulo: "Formación Profesional", icono: "💰", green: false }
  ];

  return (
    <div style={containerStyle}>
      {/* Header de Sección */}
      <span style={overTitleStyle}>Nosotros</span>
      <h2 style={mainTitleStyle}>Trayectoria, Compromiso <br/> y Excelencia Profesional</h2>

      <div style={{ marginBottom: '80px' }}>
        <p style={bioTextStyle}>
          El estudio esta liderado por su titular Cdora Magdalena Sniegocki egresada de la UBA con más de 25 años de ejercicio profesional y en su staff cuenta con un equipo multidisciplinario capacitados para ofrecer sus servicios al cliente en forma satisfactoria y eficiente en diferentes áreas.
        </p>

        {/* Bloques Misión / Visión con Hover Verde */}
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
          {['Misión', 'Visión'].map((tipo, idx) => (
            <div 
              key={tipo}
              onMouseEnter={() => setHoverMV(idx)}
              onMouseLeave={() => setHoverMV(null)}
              style={{
                flex: 1,
                minWidth: '320px',
                padding: '45px',
                backgroundColor: hoverMV === idx ? '#DCF8C6' : '#fff', // Fondo Verde en hover
                color: '#000', // Texto siempre negro para legibilidad
                border: '1px solid #f0f0f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                textAlign: 'left',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoverMV === idx ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoverMV === idx ? '0 25px 50px -12px rgba(0,0,0,0.1)' : 'none',
                cursor: 'default',
                borderRadius: '16px'
              }}
            >
              <div style={{ 
                width: hoverMV === idx ? '80px' : '40px', 
                height: '2px', 
                backgroundColor: '#000', // Línea negra
                transition: 'all 0.5s ease'
              }}></div>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.1rem', margin: 0, fontWeight: '700' }}>
                {tipo}
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                color: '#000', 
                opacity: hoverMV === idx ? 1 : 0.6,
                lineHeight: '1.6', 
                fontWeight: '400',
                transition: 'opacity 0.5s'
              }}>
                {tipo === 'Misión' 
                  ? "Es brindar en forma proactiva soluciones de negocios con alto valor agregado, confiables y diseñadas a la medida del Cliente; integrando personas, procesos, productos y servicios profesionales interdisciplinarios."
                  : "Es ser una organización orientada al Cliente para la provisión de soluciones integrales y efectivas a la empresas, con capacidad competitiva, que logre con su accionar trascender en el tiempo."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE SERVICIOS - GRILLA VERDE/BLANCA */}
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h3 style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1rem', marginBottom: '40px', fontWeight: '700', color: '#000' }}>
            Áreas de Especialización
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          border: '1px solid #eee',
          marginTop: '40px',
          borderRadius: '16px',
          overflow: 'hidden'
        }}>
          {miniServicios.map((s, i) => {
            const isHovered = hoverGrid === i;
            // Intercambio de colores usando el verde
            const effectivelyGreen = isHovered ? !s.green : s.green;

            return (
              <div 
                key={i} 
                onMouseEnter={() => setHoverGrid(i)}
                onMouseLeave={() => setHoverGrid(null)}
                style={{
                  backgroundColor: effectivelyGreen ? '#DCF8C6' : '#fff',
                  color: '#000',
                  padding: '60px 30px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '220px',
                  border: '1px solid #f0f0f0',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '20px', 
                  transform: isHovered ? 'scale(1.1) translateY(-5px)' : 'scale(1)',
                  transition: 'transform 0.4s ease',
                  opacity: effectivelyGreen ? '1' : '0.4' 
                }}>
                  {s.icono}
                </div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '3px',
                  fontWeight: '700'
                }}>
                  {s.titulo}
                </div>
                {/* Indicador inferior decorativo */}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  backgroundColor: isHovered ? '#000' : 'transparent',
                  transition: 'all 0.4s ease'
                }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
