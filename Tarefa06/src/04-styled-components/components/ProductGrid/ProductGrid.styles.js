// src/04-styled-components/components/ProductGrid/ProductGrid.styles.js
import styled from 'styled-components';

export const StyledProductGrid = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};

  /* Breakpoints */
  grid-template-columns: 1fr; /* 1 coluna em telas pequenas */

  @media (min-width: 481px) {
     grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  }

  @media (min-width: 769px) {
     grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  }

  @media (min-width: 1025px) {
     grid-template-columns: repeat(4, 1fr); /* 4 colunas */
  }
`;