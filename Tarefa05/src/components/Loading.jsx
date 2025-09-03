// src/components/Loading.jsx
import React from 'react';
import './Loading.css'; // Arquivo CSS específico para o Loading

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Buscando filmes...</p>
    </div>
  );
};

export default Loading;