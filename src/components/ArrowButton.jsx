import { useEffect, useState } from 'react';

const ArrowButton = ({ containerClass, href }) => {
  const [offsetFromBottom, setOffsetFromBottom] = useState(0);

  useEffect(() => {
    // Calculate the distance from the bottom of the screen on initial load
    const buttonElement = document.querySelector(`.${containerClass}`);
    if (buttonElement) {
      const rect = buttonElement.getBoundingClientRect();
      setOffsetFromBottom(window.innerHeight - rect.bottom);
    }
  }, [containerClass]);

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      const rect = target.getBoundingClientRect();
      const isSmallScreen = window.innerWidth <= 640; // Check if the screen is small or very small
      const scrollOffset = rect.top + window.scrollY - offsetFromBottom + (isSmallScreen ? 100 : 0); // Add 80px for small screens
      window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
    } else {
      console.error(`Target element with href "${href}" not found.`);
    }
  };

  return (
    <button onClick={handleClick} className={`arrow-btn ${containerClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="arrow-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
