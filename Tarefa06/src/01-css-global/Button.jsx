// src/01-css-global/Button.jsx
import './index.css';

const Button = ({ children, variant = 'solid', onClick, disabled = false, ...props }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const className = `${baseClass} ${variantClass}`;

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;