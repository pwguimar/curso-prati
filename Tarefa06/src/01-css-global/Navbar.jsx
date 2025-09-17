// src/01-css-global/Navbar.jsx
import './index.css';

const Navbar = ({ isDarkMode, toggleTheme, cartItemCount }) => {
  return (
    <nav className="navbar">
      <div className="logo">MiniLoja</div>
      <div className="nav-controls">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Alternar para tema claro" : "Alternar para tema escuro"}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <div className="cart-badge">
          <span>🛒</span>
          {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;