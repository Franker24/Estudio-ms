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
    padding: isMobile ? '15px 20px' : (isScrolled ? '12px 10%' : '25px 10%'),
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
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    fontSize: '2.2rem',
    cursor: 'pointer',
    color: '#000',
    padding: 0,
    margin: 0,
    lineHeight: 1,
    outline: 'none',
    marginLeft: 'auto',
    zIndex: 1001
  };

  const navListStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    position: isMobile ? 'absolute' : 'static',
    top: isMobile ? '0' : 'auto',
    left: 0,
    width: '100%',
    height: isMobile ? '100vh' : 'auto',
    backgroundColor: '#fff',
    listStyle: 'none',
    margin: 0,
    padding: isMobile ? '100px 0' : 0,
    gap: isMobile ? '30px' : '10px',
    transition: 'all 0.5s cubic-bezier(0.77,0.2,0.05,1.0)',
    transform: isMobile && !isOpen ? 'translateX(100%)' : 'translateX(0)',
    opacity: isMobile && !isOpen ? 0 : 1,
    visibility: isMobile && !isOpen ? 'hidden' : 'visible'
  };

  const handleTabClick = (id) => {
    onTabChange(id);
    setIsOpen(false);
  };

  const tabs = [
    { id: 'presentacion', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'novedades', label: 'Novedades' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header style={headerContainerStyle}>
      <div 
        style={{ cursor: 'pointer', zIndex: 1001 }} 
        onClick={() => handleTabClick('presentacion')}
      >
        <h1 style={{ 
          fontSize: isMobile ? '1.1rem' : '1.3rem', 
          fontWeight: '300', 
          letterSpacing: '3px', 
          margin: 0, 
          textTransform: 'uppercase',
          color: '#000',
          lineHeight: '1.2'
        }}>
          <span style={{ fontWeight: '700' }}>Ms & Asoc</span>
          <p style={{ 
            fontSize: '0.65rem', 
            margin: '2px 0 0 0', 
            letterSpacing: '1px', 
            fontWeight: '400',
            opacity: 0.7 
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
            <li key={tab.id} style={{ position: 'relative' }}>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#000',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '1.2rem' : '0.85rem',
                  fontWeight: activeTab === tab.id ? '700' : '300',
                  textTransform: 'uppercase',
                  letterSpacing: '4px',
                  position: 'relative',
                  width: '100%',
                  transition: 'all 0.3s ease',
                  opacity: !isMobile && hoveredTab && hoveredTab !== tab.id ? 0.5 : 1
                }} 
                onClick={() => handleTabClick(tab.id)}
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
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: (activeTab === tab.id || hoveredTab === tab.id) ? 'scaleX(1)' : 'scaleX(0)',
                    opacity: activeTab === tab.id ? 1 : 0.4
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