// src/01-css-global/ProductCard.jsx
import './index.css';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="product-rating">
        {'★'.repeat(fullStars)}
        {hasHalfStar ? '½' : ''}
        {'☆'.repeat(emptyStars)}
        ({rating.toFixed(1)})
      </div>
    );
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        {renderRating(product.rating)}
        <span className={`product-tag tag-${product.tag.toLowerCase()}`}>
          {product.tag}
        </span>
        <div className="button-group">
          <Button variant="solid" onClick={() => onAddToCart(product)}>
            Adicionar
          </Button>
          <Button variant="outline">Detalhes</Button>
          <Button variant="ghost">Favoritar</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;