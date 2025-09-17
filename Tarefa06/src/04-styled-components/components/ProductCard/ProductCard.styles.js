// src/04-styled-components/components/ProductCard/ProductCard.styles.js
import styled from 'styled-components';

export const StyledProductCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.boxShadow.DEFAULT};
  transition: ${(props) => props.theme.transition};
  background-color: ${(props) => props.theme.colors.background};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.boxShadow.lg};
  }
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* Aspect Ratio 1:1 */
`;

export const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: ${(props) => props.theme.spacing.sm};
`;

export const ProductTitle = styled.h3`
  margin: 0 0 ${(props) => props.theme.spacing.xs};
  font-size: 1rem;
  line-height: 1.2em;
  height: 2.4em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin: ${(props) => props.theme.spacing.xs} 0;
`;

export const ProductRating = styled.div`
  color: ${(props) => props.theme.colors.accent};
  margin: ${(props) => props.theme.spacing.xs} 0;
`;

export const ProductTag = styled.span`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: ${(props) => props.theme.spacing.sm};

  ${props => props.tagType === 'novo' && css`
    background-color: ${props.theme.colors.primary};
    color: white;
  `}

  ${props => props.tagType === 'promo' && css`
    background-color: ${props.theme.colors.accent};
    color: white;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.xs};
`;