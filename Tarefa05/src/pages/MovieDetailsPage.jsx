// src/pages/MovieDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieDetails } from '../services/tmdbApi';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { addToFavorites, removeFromFavorites, isFavorite } from '../services/favoritesService';
import './MovieDetailsPage.css'; // Arquivo CSS específico

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
        setIsFav(isFavorite(data.id));
      } catch (err) {
        console.error("Erro ao carregar detalhes:", err);
        setError('Falha ao carregar os detalhes do filme.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleFavoriteToggle = () => {
    if (movie) {
      if (isFav) {
        removeFromFavorites(movie.id);
      } else {
        addToFavorites(movie);
      }
      setIsFav(!isFav);
    }
  };

  const handleRetry = () => {
    // Forçar um novo fetch ao recarregar o efeito
    setMovie(null);
    setLoading(true);
    setError(null);
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={handleRetry} />;
  if (!movie) return <div className="movie-details-not-found">Filme não encontrado.</div>;

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=Sem+Imagem';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  const directors = movie.credits?.crew
    ?.filter(person => person.job === 'Director')
    .map(d => d.name)
    .join(', ') || 'Não disponível';

  const topCast = movie.credits?.cast?.slice(0, 8) || [];
  const genres = movie.genres?.map(g => g.name).join(', ') || 'Não disponível';
  const runtime = movie.runtime ? `${movie.runtime} min` : 'Duração não disponível';

  return (
    <div className="movie-details-page">
      {backdropUrl && (
        <div
          className="movie-details-backdrop"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        ></div>
      )}
      <div className="movie-details-container">
        <Link to="/" className="movie-details-back-link">← Voltar para a Busca</Link>
        <div className="movie-details-content">
          <div className="movie-details-poster-section">
            <img src={posterUrl} alt={movie.title} className="movie-details-poster" />
          </div>
          <div className="movie-details-info">
            <h1 className="movie-details-title">
              {movie.title} <span className="movie-details-year">({movie.release_date ? new Date(movie.release_date).getFullYear() : 'Ano N/A'})</span>
            </h1>
            <div className="movie-details-meta">
              <span className="movie-details-rating">
                <span className="star-icon">⭐</span> {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}/10
              </span>
              <span className="movie-details-runtime">{runtime}</span>
              <span className="movie-details-genres">{genres}</span>
            </div>
            <div className="movie-details-section">
              <h2 className="movie-details-section-title">Sinopse</h2>
              <p className="movie-details-overview">{movie.overview || 'Sinopse não disponível.'}</p>
            </div>
            <div className="movie-details-section">
              <h2 className="movie-details-section-title">Diretor(es)</h2>
              <p>{directors}</p>
            </div>
            {topCast.length > 0 && (
              <div className="movie-details-section">
                <h2 className="movie-details-section-title">Elenco Principal</h2>
                <div className="movie-details-cast">
                  {topCast.map((person) => (
                    <div key={person.id} className="cast-member">
                      <p className="cast-member-name">{person.name}</p>
                      <p className="cast-member-character">{person.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <button onClick={handleFavoriteToggle} className={`favorite-button ${isFav ? 'favorited' : ''}`}>
              {isFav ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;