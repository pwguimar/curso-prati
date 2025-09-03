// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'; // Arquivo CSS específico para o MovieCard

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Sem+Imagem';

  return (
    <div className="movie-card">
      <div className="movie-card-image-container">
        <img src={posterUrl} alt={movie.title} className="movie-card-image" />
      </div>
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-year">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'Ano N/A'}
        </p>
        <Link to={`/movie/${movie.id}`} className="movie-card-link">
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;