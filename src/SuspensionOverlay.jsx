import React from 'react';

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#111111', // Dark high-contrast background
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999, // High enough to cover entire site
    fontFamily: "'Outfit', sans-serif",
  },
  messageBox: {
    backgroundColor: '#1c1c1c',
    border: '2px solid #fca311', // Construction yellow / vibrant gold
    padding: '3rem',
    borderRadius: '12px',
    maxWidth: '600px',
    textAlign: 'center',
    boxShadow: '0 0 20px rgba(252, 163, 17, 0.2)', // glow effect
    margin: '1rem',
  },
  heading: {
    color: '#fca311',
    fontSize: '2rem',
    marginBottom: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#e0e0e0',
  }
};

const SuspensionOverlay = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.messageBox}>
        <h1 style={styles.heading}>Account Inactive</h1>
        <p style={styles.text}>
          Access to this site has been temporarily suspended for administrative reasons. 
          Please contact the developer to restore service.
        </p>
      </div>
    </div>
  );
};

export default SuspensionOverlay;
