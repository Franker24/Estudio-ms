import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Iniciamos el desvanecimiento a los 1.2 segundos
    const timerFade = setTimeout(() => setFadeOut(true), 1200);
    // Desmontamos el componente a los 1.7 segundos
    const timerRemove = setTimeout(() => setShow(false), 1700);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerRemove);
    };
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundColor: '#fff', // Fondo blanco para que la transición sea limpia
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.5s ease',
      pointerEvents: 'none'
    }}>
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>

      <style>{`
        .loader {
          --dim: 3rem;
          width: var(--dim);
          height: var(--dim);
          position: relative;
          animation: spin988 2s linear infinite;
        }

        .loader .circle {
          --color: #000; /* Cambiado a negro para seguir tu estética */
          --dim: 1.2rem;
          width: var(--dim);
          height: var(--dim);
          background-color: var(--color);
          position: absolute;
          border-radius: 50%; /* Si prefieres cuadrados, quita esta línea */
        }

        .loader .circle:nth-child(1) { top: 0; left: 0; }
        .loader .circle:nth-child(2) { top: 0; right: 0; }
        .loader .circle:nth-child(3) { bottom: 0; left: 0; }
        .loader .circle:nth-child(4) { bottom: 0; right: 0; }

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

export default Loader;