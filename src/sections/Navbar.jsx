import { useState, useEffect, useRef } from 'react';
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
  const menuPanelRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event) => {
      const target = event.target;
      if (menuPanelRef.current?.contains(target) || menuToggleRef.current?.contains(target)) {
        return;
      }
      setIsOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? 'scrolled' : 'top'} fixed top-0 left-0 right-0 z-40 bg-black/60 backdrop-blur-sm ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto flex items-center justify-center lg:justify-between gap-0 lg:gap-3 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-40">
        <div className="nav-left whitespace-nowrap flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleMenu}
            ref={menuToggleRef}
            className="text-neutral-300 hover:text-white focus:outline-none lg:hidden flex items-center justify-center w-12 h-12 rounded-full"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="Menu toggle" className="w-8 h-8" />
          </button>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-title active' : 'nav-title')}
            style={{ fontSize: 'clamp(1.3rem, 4.8vw, 1.7rem)' }}
          >
            Austin Schultz
          </NavLink>
        </div>
        <div className="nav-right flex items-center gap-3 sm:gap-4">
          <button
            onClick={toggleTheme}
            className="lg:hidden rounded-full text-white transition border border-gray-400 hover:border-gray-200 shrink-0"
            style={{
              backgroundColor: 'var(--button-background-color)',
              padding: '0.35rem 0.62rem',
              fontSize: 'clamp(0.68rem, 1.7vw, 0.78rem)',
              lineHeight: 1.1,
              whiteSpace: 'nowrap',
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

      <div className={`nav-sidebar ${isOpen ? 'open' : ''}`}>
        <nav ref={menuPanelRef} className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
