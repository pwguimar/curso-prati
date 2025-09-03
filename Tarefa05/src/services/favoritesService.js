// src/services/favoritesService.js

const FAVORITES_KEY = 'tmdb_favorites';

// Obter favoritos do localStorage
export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Erro ao carregar favoritos do localStorage:', error);
    return []; // Retorna um array vazio em caso de erro
  }
};

// Salvar favoritos no localStorage
const saveFavorites = (favorites) => {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Erro ao salvar favoritos no localStorage:', error);
  }
};

// Adicionar um filme aos favoritos
export const addToFavorites = (movie) => {
  const favorites = getFavorites();
  // Verificar se o filme já está nos favoritos
  if (!favorites.some(fav => fav.id === movie.id)) {
    favorites.push(movie);
    saveFavorites(favorites);
  }
};

// Remover um filme dos favoritos
export const removeFromFavorites = (movieId) => {
  let favorites = getFavorites();
  favorites = favorites.filter(fav => fav.id !== movieId);
  saveFavorites(favorites);
};

// Verificar se um filme é favorito
export const isFavorite = (movieId) => {
  const favorites = getFavorites();
  return favorites.some(fav => fav.id === movieId);
};