import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import ArrowButton from '../components/ArrowButton.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { useTheme } from '../context/ThemeContext.jsx'; // Import the ThemeContext

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 640 });
  const isMedium = useMediaQuery({ minWidth: 641, maxWidth: 1087 });
  const isLarge = useMediaQuery({ minWidth: 1088 });

  const sizes = calculateSizes(isSmall, isMedium, isLarge);
  const { theme, toggleTheme } = useTheme(); // Access theme and toggleTheme

  const deskPosition = [
    sizes.deskPosition[0],
    sizes.deskPosition[1] + (isSmall ? 2.8 : isMedium ? 1.5 : 0),
    sizes.deskPosition[2],
  ];

  return (
    <section
      className="min-h-screen w-full flex flex-col relative"
      id="home"
      style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)', transition: 'background-color 2s ease, color 2s ease, margin 2s ease' }} // Added margin to transition
    >
      <div
        className="w-full h-full absolute inset-0 flex justify-end"
        style={{ backgroundColor: 'var(--background-color)', transition: 'background-color 2s ease' }} // Ensure smooth background transition
      >
        <Canvas
          className="w-full h-full"
          gl={{
            preserveDrawingBuffer: true,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isSmall}>
              <HackerRoom scale={sizes.deskScale} position={deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <ReactLogo position={[sizes.reactLogoPosition[0] - 2, sizes.reactLogoPosition[1], sizes.reactLogoPosition[2]]} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div
        className="absolute bottom-36 right-0 w-full z-10 c-space flex flex-col items-start pl-8 hero-titles"
        style={{ color: 'var(--text-color)', transition: 'color 2s ease' }} // Apply smooth text color transition
      >
        <p
          className="sm:text-[6rem] md:text-[8.5rem] text-[4.5rem] font-bold text-left font-generalsans leading-none tracking-wider"
          style={{
            WebkitTextFillColor: theme === 'light' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.03)',
            WebkitTextStroke: isSmall
              ? (theme === 'light' ? '2px black' : '1px white')
              : (theme === 'light' ? '3px black' : '1.5px white'),
            color: 'var(--text-color)',
            transition: 'color 2s ease',
          }}
        >
          Austin <br /> Schultz
        </p>
        <p
          className="sm:text-[2rem] md:text-[2.85rem] text-[1.5rem] font-medium text-left mt-2"
          style={{
            fontWeight: 300,
            color: 'var(--text-color)',
            WebkitTextStroke: theme === 'light'
              ? (isSmall ? '1.5px black' : '2px black')
              : (isSmall ? '0.5px white' : '1px white'),
            WebkitTextFillColor: theme === 'light' ? '#000' : 'rgba(255,255,255,0.03)',
            transition: 'color 2s ease',
          }}
        >
          Artist & Product Designer
        </p>
      </div>

      <div className="absolute bottom-16 right-0 w-full z-10 c-space">
        <ArrowButton containerClass="w-24 h-24" href="#about-top" /> {/* Ensure href matches the target id */}
      </div>

      {/* Theme Toggle Button */}
      <div
        className={`absolute ${
          isSmall ? 'bottom-20 left-4' : 'bottom-40 right-12'
        } z-20`} /* Ensure the button is clickable */
      >
        <button
          onClick={toggleTheme}
          className="rounded-full text-white transition border border-gray-400 hover:border-gray-200"
          style={{
            backgroundColor: 'var(--button-background-color)', // Use dynamic button background color
            padding: isSmall
              ? '0.5rem' // Very small and small screens
              : isMedium
              ? '0.75rem' // Medium screens
              : isLarge
              ? '1rem' // Large screens
              : '1.25rem', // Extra large and ultra large screens
            fontSize: isSmall
              ? '0.75rem' // Very small and small screens
              : isMedium
              ? '0.875rem' // Medium screens
              : isLarge
              ? '1rem' // Large screens
              : '1.125rem', // Extra large and ultra large screens
            borderWidth: '1px', // Ensure the border width is explicitly set
            borderColor: 'rgba(169, 169, 169, 0.7)', // Match the arrow button's border color
          }}
          onMouseEnter={(e) => (e.target.style.borderColor = 'rgb(223, 223, 223)')} // Brighten border on hover
          onMouseLeave={(e) => (e.target.style.borderColor = 'rgba(169, 169, 169, 0.7)')} // Reset border color on mouse leave
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </section>
  );
};

export default Hero;
