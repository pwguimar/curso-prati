// src/04-styled-components/components/Navbar/Navbar.jsx
import { StyledNavbar, Logo, NavControls, ThemeToggle, CartBadge, Badge } from './Navbar.styles';

const Navbar = ({ isDarkMode, toggleTheme, cartItemCount }) => {
  return (
    <StyledNavbar>
      <Logo>MiniLoja</Logo>
      <NavControls>
        <ThemeToggle
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Alternar para tema claro" : "Alternar para tema escuro"}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </ThemeToggle>
        <CartBadge>
          <span>🛒</span>
          {cartItemCount > 0 && <Badge>{cartItemCount}</Badge>}
        </CartBadge>
      </NavControls>
    </StyledNavbar>
  );
};

export default Navbar;