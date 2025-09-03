// src/pages/FavoritesPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFavorites, removeFromFavorites } from '../services/favoritesService';
import MovieCard from '../components/MovieCard';
import './FavoritesPage.css'; // Arquivo CSS específico

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemoveFavorite = (movieId) => {
    removeFromFavorites(movieId);
    setFavorites(getFavorites()); // Atualizar a lista local
  };

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        <h1 className="favorites-title">Meus Favoritos</h1>
        <Link to="/" className="favorites-back-link">← Voltar para a Busca</Link>
        {favorites.length === 0 ? (
          <div className="favorites-empty">
            <p>Você ainda não tem filmes favoritos.</p>
            <Link to="/" className="favorites-go-search">Ir para a Busca</Link>
          </div>
        ) : (
          <div className="movies-grid">
            {favorites.map((movie) => (
              <div key={movie.id} className="favorite-item">
                <MovieCard movie={movie} />
                <button
                  onClick={() => handleRemoveFavorite(movie.id)}
                  className="remove-favorite-button"
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;