// src/services/tmdbApi.js
import axios from 'axios';

// Acessa a variável de ambiente VITE_TMDB_API_KEY
// Vite automaticamente substitui process.env.VITE_XYZ pelo valor real em tempo de compilação
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Criar uma instância do axios com configurações base
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Função para buscar filmes por termo de busca
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        query: query,
        page: page,
      },
    });
    return response.data; // Retorna os dados da resposta
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    throw error; // Rejeita a promise para tratamento posterior
  }
};

// Função para buscar detalhes de um filme pelo ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'credits', // Adiciona diretor e elenco
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar detalhes do filme:', error);
    throw error;
  }
};

export default api;