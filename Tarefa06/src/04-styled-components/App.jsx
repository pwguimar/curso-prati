// src/04-styled-components/App.jsx
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { productsData } from '../../shared/data'; // Caminho relativo correto
import { getStoredTheme, setStoredTheme } from '../../shared/utils'; // Caminho relativo correto
import { lightTheme, darkTheme } from './themes'; // Caminho relativo correto
import Navbar from './components/Navbar/Navbar'; // Caminho relativo correto
import ProductGrid from './components/ProductGrid/ProductGrid'; // Caminho relativo correto

// Componente estilizado simples para a div principal, se necessário
import styled from 'styled-components';
const MainContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 100vh;
  padding-top: 60px; /* Compensa a navbar fixa */
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getStoredTheme);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    setStoredTheme(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simula loading
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // ... lógica do carrinho ...
    });
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    // ThemeProvider é OBRIGATÓRIO
    <ThemeProvider theme={currentTheme}>
      <>
        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          cartItemCount={cartItemCount}
        />
        {/* Use o componente estilizado ou uma div com className se preferir */}
        <MainContainer>
          <ProductGrid
            products={productsData}
            onAddToCart={addToCart}
            isLoading={isLoading}
          />
        </MainContainer>
      </>
    </ThemeProvider>
  );
}

export default App;