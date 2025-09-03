// src/components/Error.jsx
import React from 'react';
import './Error.css'; // Arquivo CSS específico para o Error

const Error = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <p className="error-message">{message}</p>
      {onRetry && (
        <button className="error-retry-button" onClick={onRetry}>
          Tentar Novamente
        </button>
      )}
    </div>
  );
};

export default Error;