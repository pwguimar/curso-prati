// src/04-styled-components/components/Button/Button.jsx
import { StyledButton } from './Button.styles';

const Button = ({ children, variant = 'solid', onClick, disabled = false, ...props }) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;