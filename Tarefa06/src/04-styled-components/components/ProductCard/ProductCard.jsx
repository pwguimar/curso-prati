// src/04-styled-components/components/ProductCard/ProductCard.jsx
import { StyledProductCard, ProductImageContainer, ProductImage, ProductInfo, ProductTitle, ProductPrice, ProductRating, ProductTag, ButtonGroup } from './ProductCard.styles';
import Button from '../Button/Button'; // Ajuste o caminho se necessário

const ProductCard = ({ product, onAddToCart }) => {
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <ProductRating>
        {'★'.repeat(fullStars)}
        {hasHalfStar ? '½' : ''}
        {'☆'.repeat(emptyStars)}
        ({rating.toFixed(1)})
      </ProductRating>
    );
  };

  const getTagType = () => {
    return product.tag.toLowerCase();
  };

  return (
    <StyledProductCard>
      <ProductImageContainer>
        <ProductImage
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
      </ProductImageContainer>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>R$ {product.price.toFixed(2)}</ProductPrice>
        {renderRating(product.rating)}
        <ProductTag tagType={getTagType()}>
          {product.tag}
        </ProductTag>
        <ButtonGroup>
          <Button variant="solid" onClick={() => onAddToCart(product)}>
            Adicionar
          </Button>
          <Button variant="outline">Detalhes</Button>
          <Button variant="ghost">Favoritar</Button>
        </ButtonGroup>
      </ProductInfo>
    </StyledProductCard>
  );
};

export default ProductCard;