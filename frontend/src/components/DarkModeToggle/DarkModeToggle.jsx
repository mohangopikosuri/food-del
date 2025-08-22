import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        margin: '16px',
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        background: darkMode ? '#333' : '#eee',
        color: darkMode ? '#fff' : '#222',
        cursor: 'pointer',
        position: 'fixed',
        top: '16px',
        right: '16px',
        zIndex: 1000
      }}
    >
      {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default DarkModeToggle;