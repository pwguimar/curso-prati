// src/03-tailwind/Button.jsx
const Button = ({ children, variant = 'solid', size = 'md', onClick, disabled = false, ...props }) => {
  // Classes base comuns
  let baseClasses = "inline-flex items-center justify-center rounded transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed font-medium";

  // Tamanhos
  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-4 py-2 text-sm';

  // Variantes
  let variantClasses = "";
  switch (variant) {
    case 'outline':
      variantClasses = "border border-primary-600 text-primary-600 bg-transparent hover:bg-primary-600 hover:text-white dark:border-primary-500 dark:text-primary-400 dark:hover:bg-primary-500 dark:hover:text-gray-900 focus:ring-primary-500 dark:focus:ring-primary-400";
      break;
    case 'ghost':
      variantClasses = "border-none text-primary-600 bg-transparent hover:underline dark:text-primary-400 focus:ring-primary-500 dark:focus:ring-primary-400";
      break;
    case 'solid':
    default:
      variantClasses = "bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 focus:ring-primary-500 dark:focus:ring-primary-400";
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const className = `${baseClasses} ${sizeClasses} ${variantClasses} ${disabledClasses}`;

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