// src/01-css-global/App.jsx
import { useState, useEffect } from 'react';
import './index.css';
import { productsData } from '../shared/data';
import { getStoredTheme, setStoredTheme } from '../shared/utils';
import Navbar from './Navbar';
import ProductGrid from './ProductGrid';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getStoredTheme);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
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
    <div>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        cartItemCount={cartItemCount}
      />
      <main className="main-content">
        <ProductGrid
          products={productsData}
          onAddToCart={addToCart}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
}

export default App;