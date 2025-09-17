// src/04-styled-components/components/Button/Button.styles.js
import styled, { css } from 'styled-components';

const baseButtonStyles = css`
  padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.sm};
  border: 1px solid transparent;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  font-size: 0.875rem;
  &:focus {
    outline: 2px dashed ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button`
  ${baseButtonStyles}

  /* Variants */
  ${props => props.variant === 'solid' && css`
    background-color: ${props.theme.colors.primary};
    color: white;
    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.primary === '#007bff' ? '#0056b3' : '#1a7fdb'}; /* Ajuste simples para hover */
    }
  `}

  ${props => props.variant === 'outline' && css`
    background-color: transparent;
    color: ${props.theme.colors.primary};
    border: 1px solid ${props.theme.colors.primary};
    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.primary};
      color: white;
    }
  `}

  ${props => props.variant === 'ghost' && css`
    background-color: transparent;
    color: ${props.theme.colors.primary};
    border: none;
    &:hover:not(:disabled) {
      text-decoration: underline;
    }
  `}
`;