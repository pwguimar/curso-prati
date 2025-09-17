// src/04-styled-components/App.jsx
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { productsData } from '../shared/data';
import { getStoredTheme, setStoredTheme } from '../shared/utils';
import Navbar from './components/Navbar/Navbar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import styled from 'styled-components';

// Estilo para o main content
const MainContent = styled.main`
  margin-top: 60px; /* Altura da navbar */
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
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <ThemeProvider theme={currentTheme}>
      <div>
        <Navbar
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          cartItemCount={cartItemCount}
        />
        <MainContent>
          <ProductGrid
            products={productsData}
            onAddToCart={addToCart}
            isLoading={isLoading}
          />
        </MainContent>
      </div>
    </ThemeProvider>
  );
}

export default App;