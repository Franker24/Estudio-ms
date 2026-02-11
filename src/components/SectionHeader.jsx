import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    borderBottom: '2px solid #eee',
    paddingBottom: '20px'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    margin: '0',
    color: '#1a1a1a',
    textTransform: 'uppercase'
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    color: '#666',
    marginTop: '10px'
  };

  return (
    <div style={headerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;