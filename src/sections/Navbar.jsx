import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants/index.js';
import { useTheme } from '../context/ThemeContext.jsx';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <NavLink
          to={item.href}
          className={({ isActive }) => (isActive ? 'nav-li_a active' : 'nav-li_a')}
          onClick={onClick}
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? 'scrolled' : 'top'} fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-sm ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto flex items-center justify-center lg:justify-between gap-0 lg:gap-3 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-40">
        <div className="nav-left whitespace-nowrap">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-title active' : 'nav-title')}
            style={{ fontSize: '1.7rem' }}
          >
            Austin Schultz
          </NavLink>
        </div>
        <div className="nav-right flex items-center gap-3 sm:gap-4">
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none lg:hidden flex"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="Menu toggle" className="w-6 h-6" />
          </button>

          <button
            onClick={toggleTheme}
            className="lg:hidden rounded-full text-white transition border border-gray-400 hover:border-gray-200 shrink-0"
            style={{
              backgroundColor: 'var(--button-background-color)',
              padding: '0.5rem 0.8rem',
              fontSize: '0.85rem',
              borderWidth: '1px',
              borderColor: 'rgba(169, 169, 169, 0.7)',
            }}
            onMouseEnter={(e) => (e.target.style.borderColor = 'rgb(223, 223, 223)')}
            onMouseLeave={(e) => (e.target.style.borderColor = 'rgba(169, 169, 169, 0.7)')}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>

          <nav className="lg:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        className="hidden lg:block absolute right-14 xl:right-16 top-1/2 -translate-y-1/2 rounded-full text-white transition border border-gray-400 hover:border-gray-200 shrink-0 z-50"
        style={{
          backgroundColor: 'var(--button-background-color)',
          padding: '0.65rem 1rem',
          fontSize: '0.95rem',
          borderWidth: '1px',
          borderColor: 'rgba(169, 169, 169, 0.7)',
        }}
        onMouseEnter={(e) => (e.target.style.borderColor = 'rgb(223, 223, 223)')}
        onMouseLeave={(e) => (e.target.style.borderColor = 'rgba(169, 169, 169, 0.7)')}
      >
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
