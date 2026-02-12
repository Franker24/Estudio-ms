import React, { useState } from 'react';

const Servicios = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [aguilarHoveredIdx, setAguilarHoveredIdx] = useState(null);
  const [isAguilarHovered, setIsAguilarHovered] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalTop, setModalTop] = useState(0);

  const handleOpenDetail = (area) => {
    if (selectedArea && selectedArea.titulo === area.titulo && window.innerWidth <= 768) {
      setSelectedArea(null);
      return;
    }
    const scrollPosition = window.scrollY;
    setModalTop(scrollPosition);
    setSelectedArea(area);
  };

  const areas = [
    { 
      titulo: "Auditoría y Contabilidad", 
      introduccion: "Brindamos soluciones integrales en materia contable y de auditoría. Nuestro equipo especializado garantiza la organización y el análisis de la información financiera de tu empresa.",
      detalle: [
        "Contabilidad de empresas.", "Auditoría de balances.", "Análisis y auditoría de estados contables.",
        "Toma de inventario y controles de stocks.", "Certificaciones contables.", 
        "Asesoramiento sobre preparación y confección de estados contables.",
        "Asesoramiento en circuitos y procedimientos administrativos."
      ]
    },
    { 
      titulo: "Área Impositiva", 
      introduccion: "Nos encargamos de gestionar y optimizar el cumplimiento de tus obligaciones fiscales minimizando riesgos y maximizando beneficios dentro del marco legal.",
      detalle: [
        "Asesoramiento y confección de declaraciones juradas.", "Asesoramiento en inscripción, modificaciones y bajas.",
        "Liquidación de Impuestos Nacionales, Provinciales y Municipales.",
        "Liquidación de regímenes nacionales y provinciales de retenciones.", "Atención de inspecciones ARCA-DGI, DPR, DGR.",
        "Contestación de requerimientos, intimaciones y sumarios.", "Recursos administrativos por infracciones.",
        "Asesoramiento en Ley Penal Tributaria.", "Moratorias y Planes de Facilidades de Pago.", "Planificación e Ingeniería tributaria."
      ]
    },
    { 
      titulo: "Área Societaria", 
      introduccion: "Ofrecemos asesoramiento integral para la constitución, reorganización y administración de sociedades en cada etapa de su ciclo.",
      detalle: [
        "Asesoramiento en constitución, funcionamiento y disolución.", "Inscripciones en IGJ y DPPJ.",
        "Elaboración de actas de órganos de dirección y administración.", "Gestión de rúbrica de libros contables y societarios.",
        "Recursos y trámites ante IGJ y DPPJ."
      ]
    },
    { 
      titulo: "Administrativo Contable", 
      introduccion: "Facilitamos la gestión diaria de las operaciones contables y administrativas con un enfoque práctico y profesional.",
      detalle: [
        "Reorganización administrativa.", "Implementación de controles internos.", "Conciliaciones contables.",
        "Controles de stocks generales y por sectores.", "Implementación de sistemas informáticos.",
        "Informes de ventas, compras, gastos, flujo de fondos, stocks, cash flow.", "Emisión periódica de informes económicos y financieros."
      ]
    },
    { 
      titulo: "Laboral - Previsional", 
      introduccion: "Asistimos a empresas y trabajadores en todos los aspectos relacionados con la legislación laboral y previsional.",
      detalle: [
        "Liquidación de sueldos y jornales e impresión de recibos.", "Libro de sueldos digital y Art. 52 Ley 20744.", "Inscripción a organismos (ARCA, ART, Sindicatos).",
        "Declaraciones juradas de aportes y contribuciones.", "Atención de inspecciones previsionales.",
        "Recursos de impugnación de deuda.", "Asesoramiento en Ley Penal Previsional.", "Aportes autónomos y Moratorias.",
        "Liquidación de ART y seguros obligatorios."
      ]
    },
    { 
      titulo: "Área Consultoría", 
      introduccion: "Te ayudamos a planificar y ejecutar estrategias que impulsen el crecimiento de tu negocio mediante un análisis personalizado.",
      detalle: [
        "Finanzas corporativas.", "Recursos humanos y comunicación.", "Marketing estratégico y manejo de redes.",
        "Operaciones y gestión de calidad.", "Sustentabilidad.", "Seguridad informática.", "Sector financiero.", "Encuestas de remuneraciones."
      ]
    }
  ];

  return (
    <div 
      id="nuestros-servicios" 
      style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '80px 20px', 
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        position: 'relative'
      }}
    >
      
      {/* DETALLE WEB */}
      {selectedArea && (
        <div 
          onClick={() => setSelectedArea(null)}
          className="modal-desktop-only"
          style={{
            position: 'absolute', 
            top: 0, left: '-50vw', right: '-50vw',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.08)', 
            backdropFilter: 'blur(3px)', 
            zIndex: 99999, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-start',
            paddingTop: `${modalTop - 150}px` 
          }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#fff', padding: '45px', borderRadius: '28px',
              maxWidth: '650px', width: '95%',
              position: 'relative',
              marginTop: '100px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.12)',
              border: '1px solid #f0f0f0',
              animation: 'modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <button 
              onClick={() => setSelectedArea(null)}
              style={{ position: 'absolute', top: '25px', right: '25px', background: '#f5f5f5', border: 'none', width: '35px', height: '35px', borderRadius: '50%', cursor: 'pointer', fontWeight: 'bold' }}
            >✕</button>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '20px', fontWeight: '700', color: '#111' }}>{selectedArea.titulo}</h2>
            <p style={{ lineHeight: '1.7', color: '#444', fontSize: '1.1rem', marginBottom: '30px', borderLeft: '5px solid #DCF8C6', paddingLeft: '20px' }}>
              {selectedArea.introduccion}
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {selectedArea.detalle.map((punto, i) => (
                <li key={i} style={{ padding: '14px 0', borderBottom: '1px solid #f5f5f5', display: 'flex', fontSize: '1.05rem', color: '#333', alignItems: 'baseline' }}>
                  <span style={{ color: '#9ceba5', marginRight: '15px', fontSize: '1.2rem' }}>✔</span>{punto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* CABECERA */}
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <h2 className="main-title" style={{ fontSize: '2.8rem', fontWeight: '800', letterSpacing: '-1px' }}>Servicios Profesionales</h2>
      </div>

      {/* GRID DE ÁREAS */}
      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        {areas.map((area, index) => (
          <React.Fragment key={index}>
            <div 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleOpenDetail(area)}
              style={{
                backgroundColor: (selectedArea?.titulo === area.titulo || hoveredIndex === index) ? '#DCF8C6' : '#fff',
                padding: '60px 40px', borderRadius: '20px', border: '1px solid #eee',
                boxShadow: hoveredIndex === index ? '0 25px 50px rgba(0,0,0,0.06)' : '0 10px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)', 
                transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
                cursor: 'pointer', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
              }}
            >
              <h3 className="card-title" style={{ fontSize: '1.6rem', fontWeight: '750', color: '#111', margin: 0 }}>{area.titulo}</h3>
            </div>

            {selectedArea?.titulo === area.titulo && (
              <div className="detail-responsive-inline">
                <div style={{ 
                  backgroundColor: '#fff', padding: '25px 20px', borderRadius: '20px', 
                  marginTop: '-10px', marginBottom: '20px', border: '2px solid #DCF8C6',
                  animation: 'slideDown 0.4s ease-out'
                }}>
                   <p style={{ lineHeight: '1.5', color: '#444', fontSize: '0.95rem', marginBottom: '20px', borderLeft: '4px solid #9ceba5', paddingLeft: '15px' }}>
                    {area.introduccion}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {area.detalle.map((punto, i) => (
                      <li key={i} style={{ padding: '10px 0', borderBottom: '1px solid #f5f5f5', display: 'flex', fontSize: '0.85rem', color: '#333', lineHeight: '1.4' }}>
                        <span style={{ color: '#9ceba5', marginRight: '10px', flexShrink: 0 }}>✔</span>
                        <span style={{ overflowWrap: 'break-word' }}>{punto}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => setSelectedArea(null)}
                    style={{ width: '100%', marginTop: '20px', padding: '12px', background: '#f5f5f5', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                  >Cerrar detalle ↑</button>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}

        {/* --- SERVICIO COMPLEMENTARIO --- */}
        <div 
          className="complementary-card" 
          onMouseEnter={() => setIsAguilarHovered(true)}
          onMouseLeave={() => setIsAguilarHovered(false)}
          style={{ 
            gridColumn: '1 / -1', 
            marginTop: '60px', 
            padding: '60px 40px', 
            backgroundColor: isAguilarHovered ? '#DCF8C6' : '#ffffff',
            borderRadius: '25px', 
            textAlign: 'center', 
            border: '1px solid #e0f2e0',
            transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}
        >
          <h3 className="comp-title" style={{ 
            fontSize: '1.6rem', 
            marginBottom: '20px', 
            fontWeight: '750', 
            color: '#111',
            letterSpacing: '-0.5px' 
          }}>Servicio Complementario</h3>
          <p className="comp-desc" style={{ 
            maxWidth: '800px', 
            margin: '0 auto 40px', 
            fontSize: '1.05rem', 
            lineHeight: '1.6', 
            color: '#444' 
          }}>Partiendo de un relevamiento de la situación real de cada empresa, armamos un plan de gestión contable administrativa destinado a colaborar y complementar a su actual profesional de confianza.</p>
          
          <div className="comp-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '20px', 
            maxWidth: '1200px', 
            margin: '0 auto', 
            textAlign: 'left' 
          }}>
            {["Definición del software de gestión o adecuación del existente.", "Diseño de circuitos operativos y estructura administrativa óptima.", "Capacitación permanente al personal administrativo y consultas.", "Asesoramiento en la presentación de documentación a organismos."].map((text, i) => (
              <div 
                key={i} 
                onMouseEnter={() => setAguilarHoveredIdx(i)} 
                onMouseLeave={() => setAguilarHoveredIdx(null)} 
                className="comp-item"
                style={{ 
                  padding: '25px', 
                  borderRadius: '15px', 
                  // Cuando pasas el mouse sobre el item, se pone blanco puro. 
                  // Si no, y la tarjeta general está en hover, es un blanco semitransparente.
                  backgroundColor: aguilarHoveredIdx === i ? '#ffffff' : (isAguilarHovered ? 'rgba(255,255,255,0.5)' : '#f9f9f9'),
                  transition: 'all 0.3s ease', 
                  // Efecto de elevación y sombra solo en el item activo
                  transform: aguilarHoveredIdx === i ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: aguilarHoveredIdx === i ? '0 15px 30px rgba(0,0,0,0.08)' : 'none',
                  border: '1px solid',
                  borderColor: aguilarHoveredIdx === i ? '#9ceba5' : '#eee',
                  cursor: 'default'
                }}
              >
                <div style={{ 
                  fontSize: '0.95rem', 
                  fontWeight: '600', 
                  lineHeight: '1.4', 
                  color: aguilarHoveredIdx === i ? '#000' : '#444',
                  transition: 'color 0.3s ease'
                }}>
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes modalPop { 0% { transform: scale(0.95); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes slideDown { 0% { opacity: 0; transform: translateY(-10px); } 100% { opacity: 1; transform: translateY(0); } }
        .detail-responsive-inline { display: none; }
        @media (max-width: 768px) {
          #nuestros-servicios { padding: 40px 15px !important; }
          .main-title { font-size: 1.8rem !important; margin-bottom: 30px !important; }
          .modal-desktop-only { display: none !important; }
          .detail-responsive-inline { display: block; width: 100%; grid-column: 1 / -1; }
          .services-grid { grid-template-columns: 1fr !important; gap: 15px !important; }
          .services-grid > div { padding: 35px 25px !important; min-height: auto !important; }
          .card-title { font-size: 1.25rem !important; }
          .complementary-card { padding: 40px 20px !important; margin-top: 40px !important; }
          .comp-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  );
};

export default Servicios;