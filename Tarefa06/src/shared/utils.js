// src/shared/utils.js
// Função para obter o tema do localStorage
export const getStoredTheme = () => {
  return localStorage.getItem('vite-ui-theme') === 'dark';
};

// Função para salvar o tema no localStorage
export const setStoredTheme = (isDark) => {
  localStorage.setItem('vite-ui-theme', isDark ? 'dark' : 'light');
};