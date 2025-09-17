// src/02-css-modules/ProductCard.jsx
import styles from './App.module.css';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className={styles.productRating}>
        {'★'.repeat(fullStars)}
        {hasHalfStar ? '½' : ''}
        {'☆'.repeat(emptyStars)}
        ({rating.toFixed(1)})
      </div>
    );
  };

  const getTagClass = () => {
    if (product.tag.toLowerCase() === 'novo') {
      return styles.tagNew;
    } else if (product.tag.toLowerCase() === 'promo') {
      return styles.tagPromo;
    }
    return '';
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
          loading="lazy"
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.productPrice}>R$ {product.price.toFixed(2)}</p>
        {renderRating(product.rating)}
        <span className={`${styles.productTag} ${getTagClass()}`}>
          {product.tag}
        </span>
        <div className={styles.buttonGroup}>
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