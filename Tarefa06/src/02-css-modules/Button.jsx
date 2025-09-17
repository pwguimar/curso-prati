// src/02-css-modules/Button.jsx
import styles from './App.module.css';

const Button = ({ children, variant = 'solid', onClick, disabled = false, ...props }) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'outline': return styles.btnOutline;
      case 'ghost': return styles.btnGhost;
      case 'solid':
      default: return styles.btnSolid;
    }
  };

  const className = `${styles.btn} ${getVariantClass()}`;

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