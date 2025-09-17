// src/01-css-global/ProductGrid.jsx
import './index.css';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';

const ProductGrid = ({ products, onAddToCart, isLoading }) => {
  if (isLoading) {
    return (
      <div className="product-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={`skeleton-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="product-grid">
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