// src/02-css-modules/ProductGrid.jsx
import styles from './App.module.css';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';

const ProductGrid = ({ products, onAddToCart, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.productGrid}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;