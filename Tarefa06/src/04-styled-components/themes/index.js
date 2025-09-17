// src/04-styled-components/themes/index.js
export const lightTheme = {
  colors: {
    background: '#ffffff',
    text: '#333333',
    primary: '#007bff',
    accent: '#28a745',
    danger: '#dc3545',
    border: '#dddddd',
    shadow: 'rgba(0, 0, 0, 0.1)',
    badge: '#ffc107',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  borderRadius: '4px',
  boxShadow: {
    DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  transition: 'all 150ms ease-in-out',
};

export const darkTheme = {
  colors: {
    background: '#1a1a1a',
    text: '#f0f0f0',
    primary: '#4d9eff',
    accent: '#3ad65a',
    danger: '#ff6b6b',
    border: '#444444',
    shadow: 'rgba(0, 0, 0, 0.3)',
    badge: '#ffd43b',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
  },
  borderRadius: '4px',
  boxShadow: {
    DEFAULT: '0 2px 4px rgba(0, 0, 0, 0.3)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  transition: 'all 150ms ease-in-out',
};