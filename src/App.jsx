import React, { useState, useEffect } from 'react';
import './index.css'; 

// Importación de Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Importación de Secciones
import Presentacion from './sections/Presentacion';
import Servicios from './sections/Servicios';
// import Novedades from './sections/Novedades'; // <--- SECCIÓN DESHABILITADA
import Contacto from './sections/Contacto';

// --- COMPONENTE LOADER ---
const Loader = ({ onFinish }) => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timerFade = setTimeout(() => {
        setFadeOut(true);
        if(onFinish) onFinish();
    }, 1200);
    
    const timerRemove = setTimeout(() => setShow(false), 1700);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerRemove);
    };
  }, [onFinish]);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh',
      backgroundColor: '#ffffff', display: 'flex', justifyContent: 'center',
      alignItems: 'center', zIndex: 10000, opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.5s ease', pointerEvents: 'none'
    }}>
      <div className="custom-loader">
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
      </div>

      <style>{`
        .custom-loader {
          --dim: 3rem; width: var(--dim); height: var(--dim);
          position: relative; animation: spin988 2s linear infinite;
        }
        .loader-circle {
          --color: #000; --dim: 1.2rem; width: var(--dim); height: var(--dim);
          background-color: var(--color); position: absolute; border-radius: 50%;
        }
        .loader-circle:nth-child(1) { top: 0; left: 0; }
        .loader-circle:nth-child(2) { top: 0; right: 0; }
        .loader-circle:nth-child(3) { bottom: 0; left: 0; }
        .loader-circle:nth-child(4) { bottom: 0; right: 0; }
        @keyframes spin988 {
          0% { transform: scale(1) rotate(0); }
          20%, 25% { transform: scale(1.3) rotate(90deg); }
          45%, 50% { transform: scale(1) rotate(180deg); }
          70%, 75% { transform: scale(1.3) rotate(270deg); }
          95%, 100% { transform: scale(1) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('presentacion');
  const [contentVisible, setContentVisible] = useState(false);

  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    opacity: contentVisible ? 1 : 0,
    transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const headerStyle = {
    textAlign: 'center',
    padding: '120px 20px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '550px', 
    boxSizing: 'border-box',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <Loader onFinish={() => setContentVisible(true)} />

      <div style={layoutStyle}>
        <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab !== 'contacto' && (
          <header style={headerStyle}>
            <div style={{
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '50px 40px',
                backgroundColor: 'rgba(0,0,0,0.2)',
                backdropFilter: 'blur(8px)',
                maxWidth: '900px',
                width: '90%',
                textAlign: 'center'
            }}>
              <h1 style={{ 
                margin: 0, fontSize: 'clamp(1.4rem, 4vw, 2.4rem)', 
                color: '#fff', fontWeight: '300', letterSpacing: '8px', 
                textTransform: 'uppercase', lineHeight: '1.2'
              }}>
                Estudio <span style={{ fontWeight: '700' }}>MS & Asoc.</span>
              </h1>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#fff', margin: '25px auto', opacity: '0.6' }}></div>
              <p style={{ 
                margin: 0, color: '#fff', fontWeight: '300', letterSpacing: '4px', 
                textTransform: 'uppercase', fontSize: 'clamp(0.75rem, 2vw, 0.9rem)', opacity: '0.8'
              }}>
                Consultoría Impositivo Contable de Vanguardia
              </p>
            </div>
          </header>
        )}

        <main style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
            {activeTab === 'presentacion' && <Presentacion />}
            {activeTab === 'servicios' && <Servicios />}
            {/* {activeTab === 'novedades' && <Novedades />} <--- RENDER COMENTADO */}
            {activeTab === 'contacto' && <Contacto />}
          </div>
        </main>

        {activeTab !== 'contacto' && <Footer />}
      </div>
    </>
  );
}

export default App;