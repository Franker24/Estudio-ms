import React, { useState, useEffect } from 'react';

const Navbar = ({ activeTab, onTabChange }) => {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 850) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 850;

  const headerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: isMobile ? '15px 20px' : (isScrolled ? '12px 10%' : '22px 10%'),
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    borderBottom: isScrolled ? '1px solid #eee' : 'none',
    width: '100%',
    boxSizing: 'border-box'
  };

  const burgerButtonStyle = {
    display: isMobile ? 'flex' : 'none',
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    color: '#000',
    padding: 0,
    zIndex: 1001
  };

  const navListStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    position: isMobile ? 'absolute' : 'static',
    top: 0,
    left: 0,
    width: '100%',
    height: isMobile ? '100vh' : 'auto',
    backgroundColor: '#fff',
    listStyle: 'none',
    margin: 0,
    padding: isMobile ? '120px 0' : 0,
    gap: isMobile ? '30px' : '10px',
    transition: 'all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)',
    transform: isMobile && !isOpen ? 'translateX(100%)' : 'translateX(0)',
    opacity: isMobile && !isOpen ? 0 : 1,
    visibility: isMobile && !isOpen ? 'hidden' : 'visible'
  };

  const tabs = [
    { id: 'presentacion', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header style={headerContainerStyle}>
      {/* LOGO CON CARACTERES DE CALIGRAFÍA ESPECIALES */}
      <div 
        style={{ cursor: 'pointer', zIndex: 1001 }} 
        onClick={() => { onTabChange('presentacion'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
      >
        <h1 style={{ margin: 0, textAlign: 'left' }}>
          <span style={{ 
            fontSize: isMobile ? '1.7rem' : '2.1rem', 
            fontWeight: 'normal', 
            color: '#000',
            display: 'block',
            lineHeight: '1',
            marginBottom: '2px'
          }}>
            ℳ𝒮 & 𝒜𝓈ℴ𝒸
          </span>
          <p style={{ 
            fontSize: '0.6rem', 
            margin: 0, 
            letterSpacing: '3px', 
            fontWeight: '400',
            textTransform: 'uppercase',
            opacity: 0.7,
            color: '#000',
            fontFamily: '"Helvetica Neue", sans-serif'
          }}>
            Estudio Impositivo Contable
          </p>
        </h1>
      </div>

      <button style={burgerButtonStyle} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      <nav style={!isMobile ? { display: 'block' } : { position: 'static' }}>
        <ul style={navListStyle}>
          {tabs.map((tab) => (
            <li key={tab.id} style={{ position: 'relative', textAlign: isMobile ? 'center' : 'left' }}>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#000',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '1.4rem' : '0.85rem',
                  fontWeight: activeTab === tab.id ? '700' : '300',
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                  position: 'relative',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  opacity: !isMobile && hoveredTab && hoveredTab !== tab.id ? 0.5 : 1
                }} 
                onClick={() => { onTabChange(tab.id); setIsOpen(false); }}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                {tab.label}
                {!isMobile && (
                  <span style={{
                    position: 'absolute',
                    bottom: '2px',
                    left: '20px',
                    right: '20px',
                    height: '2px',
                    backgroundColor: '#000',
                    transition: 'all 0.3s ease',
                    transform: (activeTab === tab.id || hoveredTab === tab.id) ? 'scaleX(1)' : 'scaleX(0)',
                  }}></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;