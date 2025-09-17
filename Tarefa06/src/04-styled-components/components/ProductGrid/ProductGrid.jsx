// src/04-styled-components/components/ProductGrid/ProductGrid.jsx
import { StyledProductGrid } from './ProductGrid.styles';
import ProductCard from '../ProductCard/ProductCard'; // Ajuste o caminho
import Skeleton from '../Skeleton/Skeleton'; // Ajuste o caminho

const ProductGrid = ({ products, onAddToCart, isLoading }) => {
  if (isLoading) {
    return (
      <StyledProductGrid>
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={`skeleton-${index}`} />
        ))}
      </StyledProductGrid>
    );
  }

  return (
    <StyledProductGrid>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </StyledProductGrid>
  );
};

export default ProductGrid;