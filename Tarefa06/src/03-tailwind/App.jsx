// src/03-tailwind/App.jsx
import { useState, useEffect } from 'react';
import { productsData } from '../shared/data';
import { getStoredTheme, setStoredTheme } from '../shared/utils';
import Navbar from './Navbar';
import ProductGrid from './ProductGrid';
import '../index.css'; // Importa o CSS do Tailwind

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getStoredTheme);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Aplica o tema ao <html>
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setStoredTheme(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    // Simula carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 segundos de delay como solicitado

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
    <div className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark min-h-screen transition-colors duration-200 ease-in-out">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        cartItemCount={cartItemCount}
      />
      <main className="pt-16"> {/* Compensa a navbar fixa (~64px) */}
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