// src/02-css-modules/Navbar.jsx
import styles from './App.module.css';

const Navbar = ({ isDarkMode, toggleTheme, cartItemCount }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MiniLoja</div>
      <div className={styles.navControls}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Alternar para tema claro" : "Alternar para tema escuro"}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <div className={styles.cartBadge}>
          <span>🛒</span>
          {cartItemCount > 0 && <span className={styles.badge}>{cartItemCount}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;