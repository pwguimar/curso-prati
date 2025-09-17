// src/04-styled-components/components/Skeleton/Skeleton.styles.js
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const StyledSkeletonCard = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.boxShadow.DEFAULT};
  background-color: ${(props) => props.theme.colors.background};
`;

export const SkeletonImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* Aspect Ratio 1:1 */
`;

export const SkeletonImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.border === '#dddddd' ? '#e0e0e0' : '#444444'}; /* Ajuste simples */
  border-radius: ${(props) => props.theme.borderRadius};
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const SkeletonInfo = styled.div`
  padding: ${(props) => props.theme.spacing.sm};
`;

export const SkeletonLine = styled.div`
  background-color: ${(props) => props.theme.colors.border === '#dddddd' ? '#e0e0e0' : '#444444'}; /* Ajuste simples */
  border-radius: ${(props) => props.theme.borderRadius};
  animation: ${pulse} 1.5s ease-in-out infinite;
  margin-bottom: ${(props) => props.theme.spacing.xs};

  ${props => props.type === 'title' && css`
    height: 1.2em;
    width: 80%;
  `}

  ${props => props.type === 'price' && css`
    height: 1em;
    width: 40%;
  `}

  ${props => props.type === 'rating' && css`
    height: 1em;
    width: 60%;
  `}

  ${props => props.type === 'tag' && css`
    height: 1.5em;
    width: 30%;
    margin-bottom: ${(props) => props.theme.spacing.sm};
  `}

  ${props => props.type === 'button' && css`
    height: 2em;
    width: 100%;
  `}
`;