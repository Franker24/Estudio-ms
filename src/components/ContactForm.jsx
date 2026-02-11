import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [focused, setFocused] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Tus credenciales ya configuradas
    const SERVICE_ID = 'service_zmi0d2e';
    const TEMPLATE_ID = 'template_k8bx08y';
    const PUBLIC_KEY = 'ELARCDA4l9AwDW7gH';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus('idle'), 5000); // Vuelve al estado inicial tras 5 seg
      }, (error) => {
        console.error('Error de EmailJS:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const getFieldStyle = (name) => ({
    width: '100%',
    padding: '35px 5px',
    marginBottom: '10px',
    border: 'none',
    borderBottom: focused === name ? '2px solid #000' : '1px solid #ddd',
    fontSize: '0.95rem',
    boxSizing: 'border-box',
    outline: 'none',
    backgroundColor: 'transparent',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    letterSpacing: '0.5px',
    color: '#333'
  });

  const textareaStyle = {
    ...getFieldStyle('consulta'),
    height: '100px',
    resize: 'none',
    marginTop: '10px'
  };

  const buttonStyle = {
    width: '100%',
    padding: '18px',
    backgroundColor: status === 'sending' ? '#555' : '#000',
    color: '#fff',
    border: '1px solid #000',
    textTransform: 'uppercase',
    fontWeight: '400',
    letterSpacing: '3px',
    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
    marginTop: '35px',
    transition: 'all 0.4s ease',
    fontSize: '0.9rem'
  };

  const handleFocus = (name) => setFocused(name);
  const handleBlur = () => setFocused(null);

  return (
    <form ref={form} style={formStyle} onSubmit={handleSubmit}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <input 
          type="text" 
          name="user_name" 
          placeholder="NOMBRE Y APELLIDO" 
          required
          style={getFieldStyle('nombre')} 
          onFocus={() => handleFocus('nombre')}
          onBlur={handleBlur}
        />
        <input 
          type="text" 
          name="user_phone"
          placeholder="TELÉFONO" 
          style={getFieldStyle('telefono')} 
          onFocus={() => handleFocus('telefono')}
          onBlur={handleBlur}
        />
      </div>

      <input 
        type="email" 
        name="user_email"
        placeholder="CORREO ELECTRÓNICO" 
        required
        style={getFieldStyle('email')} 
        onFocus={() => handleFocus('email')}
        onBlur={handleBlur}
      />

      <textarea 
        name="message"
        placeholder="MENSAJE / CONSULTA" 
        required
        style={textareaStyle}
        onFocus={() => handleFocus('consulta')}
        onBlur={handleBlur}
      ></textarea>
      
      <button 
        type="submit" 
        disabled={status === 'sending'}
        style={buttonStyle}
        onMouseOver={(e) => {
          if (status !== 'sending') {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = '#000';
          }
        }}
        onMouseOut={(e) => {
          if (status !== 'sending') {
            e.target.style.backgroundColor = '#000';
            e.target.style.color = '#fff';
          }
        }}
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {/* Mensajes de Feedback */}
      <div style={{ marginTop: '20px', textAlign: 'center', height: '20px' }}>
        {status === 'success' && (
          <span style={{ color: '#27ae60', fontSize: '0.85rem', letterSpacing: '1px' }}>
            ✓ MENSAJE ENVIADO CON ÉXITO
          </span>
        )}
        {status === 'error' && (
          <span style={{ color: '#e74c3c', fontSize: '0.85rem', letterSpacing: '1px' }}>
            ✕ ERROR AL ENVIAR. INTENTE NUEVAMENTE.
          </span>
        )}
      </div>
    </form>
  );
};

export default ContactForm;