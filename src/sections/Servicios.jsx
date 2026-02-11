import React, { useState } from 'react';

const Servicios = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [aguilarHoveredIdx, setAguilarHoveredIdx] = useState(null);
  const [selectedArea, setSelectedArea] = useState(null);

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 20px',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#000',
    scrollMarginTop: '100px' 
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '35px',
  };

  const getBoxStyle = (index) => ({
    backgroundColor: hoveredIndex === index ? '#DCF8C6' : '#fff',
    padding: '50px 40px',
    borderRadius: '16px', 
    border: hoveredIndex === index ? '1px solid #DCF8C6' : '1px solid #f0f0f0',
    boxShadow: hoveredIndex === index 
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.1)' 
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
    { 
      titulo: "Auditoría y Contabilidad", 
      desc: "Gestión rigurosa de estados contables y procesos de control.", 
      items: ["Balances", "Certificaciones", "Inventarios"],
      introduccion: "Brindamos soluciones integrales en materia contable y de auditoría. Nuestro equipo especializado garantiza la organización y el análisis de la información financiera de tu empresa.",
      detalle: [
        "Contabilidad de empresas.", "Auditoría de balances.", "Análisis y auditoría de estados contables.",
        "Toma de inventario y controles de stocks.", "Certificaciones contables.", "Asesoramiento en procedimientos administrativos."
      ]
    },
    { 
      titulo: "Área Impositiva", 
      desc: "Optimización de la carga tributaria y cumplimiento normativo.", 
      items: ["IVA / Ganancias", "Monotributo", "Planificación"],
      introduccion: "Nos encargamos de gestionar y optimizar el cumplimiento de tus obligaciones fiscales minimizando riesgos dentro del marco legal.",
      detalle: [
        "Confección de DDJJ.", "Liquidación de Impuestos Nacionales y Provinciales.", "Atención de inspecciones ARCA-DGI.",
        "Planificación e Ingeniería tributaria.", "Moratorias y Planes de pago."
      ]
    },
    { 
      titulo: "Área Societaria", 
      desc: "Asesoramiento integral en la vida jurídica de las organizaciones.", 
      items: ["Constitución", "Actas", "Rúbrica de Libros"],
      introduccion: "Ofrecemos asesoramiento integral para la constitución y administración de sociedades en cada etapa de su ciclo.",
      detalle: [
        "Constitución y disolución de sociedades.", "Trámites ante IGJ y DPPJ.", 
        "Elaboración de actas de directorio.", "Rúbrica de libros contables."
      ]
    },
    { 
      titulo: "Administrativo Contable", 
      desc: "Estructuración de flujos eficientes para la toma de decisiones.", 
      items: ["Cashflow", "Informes", "Circuitos IT"],
      introduccion: "Facilitamos la gestión diaria de las operaciones contables y administrativas con un enfoque práctico y profesional.",
      detalle: [
        "Reorganización administrativa.", "Implementación de controles internos.", 
        "Conciliaciones bancarias y de proveedores.", "Informes de rentabilidad y cash flow."
      ]
    },
    { 
      titulo: "Laboral - Previsional", 
      desc: "Gestión experta de nóminas y relaciones laborales.", 
      items: ["Sueldos", "Cargas Sociales", "Libro Digital"],
      introduccion: "Asistimos a empresas en todos los aspectos relacionados con la legislación laboral y previsional vigente.",
      detalle: [
        "Liquidación de sueldos y jornales.", "Libro de sueldos digital.", 
        "Declaraciones juradas de aportes.", "Atención de inspecciones del Ministerio de Trabajo."
      ]
    },
    { 
      titulo: "Área Consultoría", 
      desc: "Visión estratégica para el crecimiento y maduración del negocio.", 
      items: ["Finanzas", "Estrategia", "RRHH"],
      introduccion: "Te ayudamos a planificar estrategias que impulsen el crecimiento de tu negocio mediante análisis personalizado.",
      detalle: [
        "Finanzas corporativas.", "Marketing estratégico.", "Gestión de calidad.", 
        "Seguridad informática.", "Sustentabilidad empresarial."
      ]
    }
  ];

  return (
    <div id="nuestros-servicios" style={containerStyle}>
      {/* MODAL DETALLE ACTUALIZADO: SIN FONDO VERDE EN TEXTOS */}
      {selectedArea && (
        <div 
          onClick={() => setSelectedArea(null)}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', 
            backdropFilter: 'blur(10px)',
            zIndex: 20000, display: 'flex', justifyContent: 'center', alignItems: 'center',
            padding: '20px'
          }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#fff', padding: '50px', borderRadius: '24px',
              maxWidth: '750px', width: '100%', maxHeight: '85vh', overflowY: 'auto',
              position: 'relative', boxShadow: '0 40px 100px rgba(0,0,0,0.3)',
              animation: 'modalSlideUp 0.4s ease-out'
            }}
          >
            <button 
              onClick={() => setSelectedArea(null)}
              style={{ position: 'absolute', top: '25px', right: '25px', background: '#f5f5f5', border: 'none', width: '35px', height: '35px', borderRadius: '50%', cursor: 'pointer', fontWeight: 'bold' }}
            >✕</button>
            
            <span style={{ textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.65rem', color: '#999', fontWeight: '700' }}>Detalle de Área</span>
            <h2 style={{ fontSize: '2.4rem', margin: '10px 0 25px 0', fontWeight: '700', letterSpacing: '-1px' }}>{selectedArea.titulo}</h2>
            
            <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem', marginBottom: '35px', borderLeft: '4px solid #DCF8C6', paddingLeft: '20px' }}>
              {selectedArea.introduccion}
            </p>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {selectedArea.detalle.map((punto, i) => (
                <li key={i} style={{ padding: '15px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', fontSize: '1rem', color: '#1a1a1a' }}>
                  <span style={{ color: '#DCF8C6', marginRight: '15px', fontWeight: 'bold', fontSize: '1.2rem' }}>•</span>{punto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* CABECERA */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span style={{ textTransform: 'uppercase', letterSpacing: '6px', fontSize: '0.7rem', color: '#666', fontWeight: '600' }}>Especialidades</span>
        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 2.8rem)', fontWeight: '700', letterSpacing: '-1.5px', marginTop: '10px' }}>Servicios Profesionales</h2>
      </div>

      {/* GRID DE SERVICIOS */}
      <div style={gridStyle}>
        {areas.map((area, index) => (
          <div 
            key={index} 
            style={getBoxStyle(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedArea(area)}
          >
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: hoveredIndex === index ? '#000' : '#ccc', marginBottom: '20px', transition: 'color 0.5s' }}>
                [ 0{index + 1} ]
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {area.titulo}
              </h3>
              <p style={{ color: '#000', opacity: hoveredIndex === index ? 1 : 0.6, fontSize: '0.95rem', lineHeight: '1.7', transition: 'all 0.5s' }}>
                {area.desc}
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {area.items.map((item, idx) => (
                <span key={idx} style={{ fontSize: '0.65rem', backgroundColor: hoveredIndex === index ? 'rgba(255,255,255,0.5)' : '#DCF8C6', padding: '6px 14px', borderRadius: '10px', textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.5s' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* --- BLOQUE SERVICIO COMPLEMENTARIO (TEXTO ORIGINAL) --- */}
        <div style={{
          gridColumn: '1 / -1',
          marginTop: '80px',
          padding: '120px 60px',
          backgroundColor: '#DCF8C6',
          borderRadius: '24px',
          color: '#000',
          textAlign: 'center',
          clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.4rem)', marginBottom: '30px', fontWeight: '200', textTransform: 'uppercase', letterSpacing: '6px' }}>
            Servicio Complementario
          </h3>
          <p style={{ maxWidth: '850px', opacity: '0.9', fontWeight: '400', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '50px' }}>
            Partiendo de un relevamiento de la situación real de cada empresa, su estado de maduración y sus perspectivas de crecimiento, armamos un plan de gestión contable administrativa destinado a colaborar y complementar a su actual profesional de confianza, con estas herramientas y acciones:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', width: '100%', maxWidth: '1100px', textAlign: 'left' }}>
            {[
              { t: "Definición del software de gestión o adecuación del existente." },
              { t: "Diseño de circuitos operativos y de la estructura administrativa óptima." },
              { t: "Capacitación permanente al personal administrativo y línea abierta de consultas."},
              { t: "Asesoramiento en la presentación de documentación a distintos organismos." }
            ].map((item, i) => (
              <div 
                key={i} 
                onMouseEnter={() => setAguilarHoveredIdx(i)}
                onMouseLeave={() => setAguilarHoveredIdx(null)}
                style={{ 
                  padding: '30px', 
                  borderRadius: '12px', 
                  backgroundColor: aguilarHoveredIdx === i ? '#ffffff' : 'rgba(255, 255, 255, 0.4)', 
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transform: aguilarHoveredIdx === i ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: aguilarHoveredIdx === i ? '0 15px 30px rgba(0, 0, 0, 0.08)' : 'none',
                  transition: 'all 0.4s ease'
                }}
              >
                <div style={{ color: '#000', fontSize: '0.9rem', lineHeight: '1.5', fontWeight: '600' }}>
                  {item.t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes modalSlideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Servicios;