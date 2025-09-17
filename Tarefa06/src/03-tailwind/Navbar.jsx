// src/03-tailwind/Navbar.jsx
const Navbar = ({ isDarkMode, toggleTheme, cartItemCount }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-background-light px-4 py-3 shadow-sm dark:bg-background-dark dark:shadow-gray-800">
      <div className="text-xl font-bold">MiniLoja</div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          aria-label={isDarkMode ? "Alternar para tema claro" : "Alternar para tema escuro"}
          className="rounded-full p-2 text-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:hover:bg-gray-700 dark:focus:ring-primary-400"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <div className="relative">
          <span className="text-xl">🛒</span>
          {cartItemCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-badge-500 text-xs font-bold text-black dark:bg-badge-400">
              {cartItemCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;