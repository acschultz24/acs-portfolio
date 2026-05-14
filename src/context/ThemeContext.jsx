import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => (localStorage.getItem('theme') === 'light' ? 'light' : 'dark'));

  useEffect(() => {
    const root = document.documentElement;
    root.className = theme; // Apply the theme class to the root element
    root.style.transition = 'all 2s ease'; // Ensure smooth transition for all properties
    root.style.removeProperty('background-color');
    root.style.removeProperty('color');
    localStorage.setItem('theme', theme); // Save the theme to localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
