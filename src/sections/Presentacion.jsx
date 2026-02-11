import React, { useState } from 'react';

const Presentacion = () => {
  // Estados para manejar los hovers de forma independiente
  const [hoverMV, setHoverMV] = useState(null); // Misión y Visión
  const [hoverGrid, setHoverGrid] = useState(null); // Grilla de servicios

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#1a1a1a',
    padding: '80px 20px',
  };

  const overTitleStyle = {
    textTransform: 'uppercase',
    letterSpacing: '5px',
    fontSize: '0.75rem',
    color: '#999',
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
    lineHeight: '1.1'
  };

  const bioTextStyle = {
    fontSize: '1.15rem',
    lineHeight: '1.8',
    color: '#444',
    maxWidth: '850px',
    margin: '0 auto 60px auto',
    fontWeight: '300',
    textAlign: 'center'
  };

  const miniServicios = [
    { titulo: "Servicios Impositivos", icono: "％", dark: true },
    { titulo: "Contabilidad y Auditoría", icono: "📋", dark: false },
    { titulo: "Laboral y Previsional", icono: "🚜", dark: true },
    { titulo: "Societario", icono: "👥", dark: false },
    { titulo: "Control de Gestión", icono: "👓", dark: true },
    { titulo: "Formación Profesional", icono: "💰", dark: false }
  ];

  return (
    <div style={containerStyle}>
      {/* Header de Sección */}
      <span style={overTitleStyle}>Nosotros</span>
      <h2 style={mainTitleStyle}>Trayectoria, Compromiso <br/> y Excelencia Profesional</h2>

      <div style={{ marginBottom: '80px' }}>
        <p style={bioTextStyle}>
          El estudio esta dirigido por su titular Cdora Magdalena Sniegocki egresada de la UBA con más de 25 años de ejercicio profesional  y en su staff cuenta con profesionales jóvenes dinámicos capacitados para ofrecer sus servicios al cliente en forma satisfactoria y eficiente en las siguientes Areas: Contable- auditoria, impositiva, sociedades, procedimiento y control interno, judicial, laboral, previsional,marketing, redes sociales, consultoria.
        </p>

        {/* Bloques Misión / Visión con Hover */}
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
                backgroundColor: hoverMV === idx ? '#000' : '#fff',
                color: hoverMV === idx ? '#fff' : '#1a1a1a',
                border: '1px solid #eee',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                textAlign: 'left',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoverMV === idx ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoverMV === idx ? '0 20px 40px rgba(0,0,0,0.2)' : 'none',
                cursor: 'default'
              }}
            >
              <div style={{ 
                width: hoverMV === idx ? '80px' : '40px', 
                height: '2px', 
                backgroundColor: hoverMV === idx ? '#fff' : '#000',
                transition: 'all 0.5s ease'
              }}></div>
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.1rem', margin: 0 }}>
                {tipo}
              </h3>
              <p style={{ 
                fontSize: '1rem', 
                color: hoverMV === idx ? '#aaa' : '#666', 
                lineHeight: '1.6', 
                fontWeight: '300',
                transition: 'color 0.5s'
              }}>
                {tipo === 'Misión' 
                  ? "Es brindar en forma proactiva soluciones de negocios con alto valor agregado, confiables y diseñadas a la medida del Cliente; integrando personas, procesos, productos y servicios profesionales interdisciplinarios, sobre la base de una relación con el Cliente afirmada en la confianza y el compromiso, generando valor sostenible en el tiempo acompañando en el crecimiento y planeamiento de la actividad."
                  : "Es ser una organización orientada al Cliente  para la provisión de soluciones integrales y efectivas a la empresas, con capacidad competitiva , que logre con su accionar trascender en el tiempo."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE SERVICIOS ESTILO GRILLA DINÁMICA */}
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h3 style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '1rem', marginBottom: '40px', fontWeight: '600' }}>
            Áreas de Especialización
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          border: '1px solid #eee',
          marginTop: '40px' 
        }}>
          {miniServicios.map((s, i) => {
            const isHovered = hoverGrid === i;
            // La lógica de "dark" original
            const effectivelyDark = isHovered ? !s.dark : s.dark;

            return (
              <div 
                key={i} 
                onMouseEnter={() => setHoverGrid(i)}
                onMouseLeave={() => setHoverGrid(null)}
                style={{
                  backgroundColor: effectivelyDark ? '#000' : '#fff',
                  color: effectivelyDark ? '#fff' : '#000',
                  padding: '60px 30px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '220px',
                  border: '1px solid #eee',
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
                  opacity: effectivelyDark ? '1' : '0.7' 
                }}>
                  {s.icono}
                </div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '3px',
                  fontWeight: '600'
                }}>
                  {s.titulo}
                </div>
                {/* Indicador sutil de hover */}
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  backgroundColor: effectivelyDark ? '#444' : '#eee',
                  transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.4s ease'
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
