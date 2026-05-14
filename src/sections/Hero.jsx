import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import ArrowButton from '../components/ArrowButton.jsx';
import CanvasLoader from '../components/Loading.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 640 });
  const heroImageStyle = {
    filter: 'brightness(1)',
    objectPosition: '81% 40%',
  };

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
          className="w-full h-full relative z-10"
          gl={{
            preserveDrawingBuffer: true,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>

        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[88vw] pointer-events-none overflow-hidden z-0">
          <img
            src="/assets/4kShowRoom3.webp"
            alt="Hero visual"
            className="absolute inset-0 w-full h-full max-w-none object-cover"
            fetchpriority="high"
            decoding="async"
            style={heroImageStyle}
          />
        </div>
      </div>

      <div
        className="absolute bottom-24 right-0 w-full z-10 c-space flex flex-col items-center px-4 hero-titles"
        style={{ color: 'var(--text-color)', transition: 'color 2s ease', transform: 'translateY(-12px)' }} // Apply smooth text color transition
      >
        <p
          className="font-bold text-center font-generalsans leading-none tracking-wider"
          style={{
            WebkitTextFillColor: 'rgba(255,255,255,0.03)',
            WebkitTextStroke: isSmall ? '1px white' : '1.5px white',
            color: '#ffffff',
            transition: 'color 2s ease',
          }}
        >
          Austin <br /> Schultz
        </p>
        <p
          className="font-medium text-center mt-2"
          style={{
            fontWeight: 300,
            color: '#ffffff',
            WebkitTextStroke: isSmall ? '0.5px white' : '1px white',
            WebkitTextFillColor: '#ffffff',
            transition: 'color 2s ease',
          }}
        >
          Artist & Product Designer
        </p>
      </div>

      <div className="absolute bottom-10 right-0 w-full z-10 c-space">
        <ArrowButton containerClass="w-24 h-24" href="#about-top" /> {/* Ensure href matches the target id */}
      </div>
    </section>
  );
};

export default Hero;
