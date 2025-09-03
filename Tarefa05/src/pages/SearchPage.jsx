// src/pages/SearchPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { searchMovies } from '../services/tmdbApi';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import './SearchPage.css'; // Arquivo CSS específico

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    if (query.trim() === '') {
      setMovies([]);
      setTotalPages(1);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query, page);
      setMovies(data.results);
      // Limitar o total de páginas para evitar problemas com a API
      setTotalPages(Math.min(data.total_pages, 500));
    } catch (err) {
      console.error("Erro na busca:", err);
      setError('Falha ao buscar filmes. Verifique sua conexão ou a chave da API.');
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchMovies();
    }, 500); // Debounce de 500ms

    return () => clearTimeout(delayDebounceFn);
  }, [query, page, fetchMovies]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setPage(1); // Resetar para a primeira página ao mudar a busca
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave
  };

  const handleRetry = () => {
    fetchMovies();
  };

  return (
    <div className="search-page">
      <h1 className="search-page-title">Buscar Filmes</h1>
      <div className="search-input-container">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Digite o nome do filme..."
          className="search-input"
        />
      </div>

      {loading && <Loading />}
      {error && <Error message={error} onRetry={handleRetry} />}

      {!loading && !error && (
        <>
          {movies.length > 0 ? (
            <>
              <div className="movies-grid">
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>

              <div className="pagination">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page <= 1}
                  className="pagination-button"
                >
                  Anterior
                </button>
                <span className="pagination-info">Página {page} de {totalPages}</span>
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page >= totalPages}
                  className="pagination-button"
                >
                  Próxima
                </button>
              </div>
            </>
          ) : (
            query.trim() !== '' && (
              <div className="no-results">
                <p>Nenhum filme encontrado para "{query}". Tente outra busca.</p>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;