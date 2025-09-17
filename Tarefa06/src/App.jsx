// src/03-tailwind/App.jsx
import { useState, useEffect } from 'react';
import { productsData } from '../shared/data';
import Navbar from './Navbar';
import ProductGrid from './ProductGrid';
import '../index.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Simplificado
  // const [cartItems, setCartItems] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => { // Simplificado
  //   if (isDarkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [isDarkMode]);

  // useEffect(() => { // Simplificado
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle manual no body/documentElement para teste
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // const addToCart = (product) => { /* Simplificado */ };
  // const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        // cartItemCount={cartItemCount} // Simplificado
        cartItemCount={0} // Valor fixo para teste
      />
      <main className="pt-16">
        {/* Passe isLoading se descomentar o Skeleton */}
        <ProductGrid products={productsData} /* isLoading={isLoading} */ />
      </main>
    </div>
  );
}

export default App;
