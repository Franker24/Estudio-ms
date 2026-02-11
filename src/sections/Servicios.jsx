import React, { useState } from 'react';

const Servicios = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // Nuevo estado para controlar qué tarjeta de la Alianza tiene el hover
  const [aguilarHoveredIdx, setAguilarHoveredIdx] = useState(null);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 20px',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#1a1a1a',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '35px',
  };

  const getBoxStyle = (index) => ({
    backgroundColor: hoveredIndex === index ? '#000' : '#fff',
    padding: '50px 40px',
    borderRadius: '16px', 
    border: hoveredIndex === index ? '1px solid #000' : '1px solid #f0f0f0',
    boxShadow: hoveredIndex === index 
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
      : '0 10px 20px -5px rgba(0, 0, 0, 0.04)',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: hoveredIndex === index ? 'translateY(-12px)' : 'translateY(0)',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '280px',
    overflow: 'hidden'
  });

  const areas = [
    { titulo: "Auditoría y Contabilidad", desc: "Gestión rigurosa de estados contables y procesos de control.", items: ["Balances", "Certificaciones", "Inventarios"] },
    { titulo: "Área Impositiva", desc: "Optimización de la carga tributaria y cumplimiento normativo.", items: ["IVA / Ganancias", "Monotributo", "Planificación"] },
    { titulo: "Área Societaria", desc: "Asesoramiento integral en la vida jurídica de las organizaciones.", items: ["Constitución", "Actas", "Rúbrica de Libros"] },
    { titulo: "Administrativo Contable", desc: "Estructuración de flujos eficientes para la toma de decisiones.", items: ["Cashflow", "Informes", "Circuitos IT"] },
    { titulo: "Laboral - Previsional", desc: "Gestión experta de nóminas y relaciones laborales.", items: ["Sueldos", "Cargas Sociales", "Libro Digital"] },
    { titulo: "Área Consultoría", desc: "Visión estratégica para el crecimiento y maduración del negocio.", items: ["Finanzas", "Estrategia", "RRHH"] }
  ];

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span style={{ textTransform: 'uppercase', letterSpacing: '6px', fontSize: '0.7rem', color: '#999', fontWeight: '600' }}>Especialidades</span>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 2.8rem)', fontWeight: '700', letterSpacing: '-1.5px', marginTop: '10px' }}>Servicios Profesionales</h2>
      </div>

      <div style={gridStyle}>
        {areas.map((area, index) => (
          <div 
            key={index} 
            style={getBoxStyle(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: hoveredIndex === index ? '#555' : '#ccc', marginBottom: '20px', transition: 'color 0.5s', fontFamily: 'monospace' }}>
                [ 0{index + 1} ]
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px', color: hoveredIndex === index ? '#fff' : '#000', transition: 'color 0.5s' }}>
                {area.titulo}
              </h3>
              <p style={{ color: hoveredIndex === index ? '#aaa' : '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '30px', fontWeight: '300', transition: 'color 0.5s' }}>
                {area.desc}
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {area.items.map((item, idx) => (
                <span key={idx} style={{ fontSize: '0.65rem', backgroundColor: hoveredIndex === index ? '#1a1a1a' : '#f8f8f8', padding: '6px 14px', borderRadius: '10px', color: hoveredIndex === index ? '#fff' : '#555', textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.5s', border: hoveredIndex === index ? '1px solid #333' : '1px solid #eee' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* --- EL BLOQUE AGUILAR (Fondo estático) --- */}
        <div style={{
          gridColumn: '1 / -1',
          marginTop: '80px',
          padding: '120px 60px',
          backgroundColor: '#0a0a0b',
          borderRadius: '24px',
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
          clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
          backgroundImage: 'linear-gradient(145deg, #111113 0%, #050505 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
        }}>
          <div style={{ width: '40px', height: '2px', background: '#fff', marginBottom: '40px', opacity: '0.3' }}></div>
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)', marginBottom: '30px', fontWeight: '200', textTransform: 'uppercase', letterSpacing: '6px', lineHeight: '1.3' }}>
            Servicio Complementario<span style={{ fontWeight: '800' }}></span>
          </h3>
          <p style={{ maxWidth: '700px', opacity: '0.6', fontWeight: '300', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '50px' }}>
            Partiendo de un relevamiento de la situación real de cada empresa, su estado de maduración y sus perspectivas de crecimiento, armamos un plan de gestión contable administrativa destinado a colaborar y complementar a su actual profesional de confianza, con estas herramientas y acciones:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', width: '100%', maxWidth: '900px', textAlign: 'left' }}>
            {[
              { t: "Software de Gestión", d: "Adecuación de sistemas ERP." },
              { t: "Circuitos Operativos", d: "Optimización administrativa." },
              { t: "Capacitación IT", d: "Entrenamiento al personal." },
              { t: "Documentación", d: "Asesoramiento integral." }
            ].map((item, i) => (
              <div 
                key={i} 
                onMouseEnter={() => setAguilarHoveredIdx(i)}
                onMouseLeave={() => setAguilarHoveredIdx(null)}
                style={{ 
                  padding: '25px', 
                  borderRadius: '12px',
                  cursor: 'pointer',
                  // Efecto individual
                  backgroundColor: aguilarHoveredIdx === i ? '#fff' : 'rgba(255,255,255,0.03)',
                  border: aguilarHoveredIdx === i ? '1px solid #fff' : '1px solid rgba(255,255,255,0.08)',
                  transform: aguilarHoveredIdx === i ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: aguilarHoveredIdx === i ? '0 15px 30px rgba(0,0,0,0.4)' : 'none',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div style={{ 
                  color: aguilarHoveredIdx === i ? '#000' : '#fff', 
                  fontSize: '0.75rem', 
                  letterSpacing: '2px', 
                  fontWeight: '600', 
                  marginBottom: '8px', 
                  textTransform: 'uppercase',
                  transition: 'color 0.4s'
                }}>
                  {item.t}
                </div>
                <div style={{ 
                  fontSize: '0.85rem', 
                  color: aguilarHoveredIdx === i ? '#444' : '#666', 
                  fontWeight: '300',
                  transition: 'color 0.4s'
                }}>
                  {item.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;