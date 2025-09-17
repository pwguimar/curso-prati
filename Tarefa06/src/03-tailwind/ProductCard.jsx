// src/03-tailwind/ProductCard.jsx
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {

  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="my-1 text-accent-600 dark:text-accent-400">
        {'★'.repeat(fullStars)}
        {hasHalfStar ? '☆' : ''} {/* Simplificação: mostra meia estrela como estrela vazia */}
        {'☆'.repeat(emptyStars)}
        <span className="ml-1 text-xs">({rating.toFixed(1)})</span>
      </div>
    );
  };

  const getTagClass = () => {
    if (product.tag === 'Novo') {
      return 'bg-primary-600 text-white dark:bg-primary-500';
    } else if (product.tag === 'Promo') {
      return 'bg-accent-600 text-white dark:bg-accent-500';
    }
    return 'bg-gray-500 text-white'; // Default tag
  };

  return (
    <div className="overflow-hidden rounded border border-gray-200 bg-white shadow-sm transition-all duration-200 ease-in-out hover:shadow-md hover:-translate-y-0.5 dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900">
      {/* Container da Imagem 1:1 */}
      <div className="relative w-full pt-[100%]"> {/* pt-[100%] para manter proporção 1:1 */}
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          onError={(e) => { e.target.src = 'https://placehold.co/300x300?text=Erro'; }} // Placeholder de erro
        />
      </div>
      <div className="p-3">
        {/* Título com 2 linhas e ellipsis */}
        <h3
          className="mb-1 line-clamp-2 text-base font-normal leading-5"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {product.title}
        </h3>
        <p className="my-1 font-bold">R$ {product.price.toFixed(2)}</p>
        {renderRating(product.rating)}
        <span className={`mb-2 inline-block rounded px-2 py-1 text-xs font-bold ${getTagClass()}`}>
          {product.tag}
        </span>
        <div className="mt-2 flex flex-wrap gap-1">
          <Button variant="solid" onClick={() => onAddToCart(product)} size="sm">
            Adicionar
          </Button>
          <Button variant="outline" size="sm">Detalhes</Button>
          <Button variant="ghost" size="sm">Favoritar</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;