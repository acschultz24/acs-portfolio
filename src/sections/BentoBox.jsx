import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

const BentoBox = () => {
  const navigate = useNavigate();
  const [hasCopied, setHasCopied] = useState(false);
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  const lightModeDarkenFactor = 1.6;
  const darkModeLightenFactor = 1;
  const lightModeImageOpacity = 0.74;
  const darkModeImageOpacity = 0.70;
  const textScrimStyle = {
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.32) 55%, rgba(0, 0, 0, 0) 100%)',
  };
  const titleTextStyle = {
    color: '#fff',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.95), 0 8px 18px rgba(0, 0, 0, 0.55)',
  };
  const bodyTextStyle = {
    color: '#fff',
    textShadow: '0 1px 1px rgba(0, 0, 0, 0.95), 0 6px 14px rgba(0, 0, 0, 0.5)',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('acschultz24@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const gridItems = [
    {
      title: 'My Passion for Design',
      content: `I'm driven to create innovative, functional, and satisfying products that people love to use, while always refining the details that make them beautiful.`,
      backgroundImage: '/assets/HibachiBlueprint.jpg',
      backgroundScale: 1.07,
      objectPosition: 'center 90%',
    },
    {
      title: 'Graphic Design and Visualization',
      content: 'Adobe Creative Suite • Digital Illustration • Traditional Media • Branding • Motion Graphics • Visual Communication',
      backgroundImage: '/assets/SRE.jpg?v=2',
      backgroundScale: 1,
      objectPosition: 'center',
    },
    {
      title: 'Technical Expertise',
      content: `CAD & Product Development: SolidWorks, Fusion 360, Blender • Rapid Prototyping • 3D Printing • CNC Machining • Laser Cutting • Product Visualization`,
      backgroundImage: '/assets/LABscrews4.jpg',
      backgroundScale: 1.8,
      objectPosition: '55% 28%',
      translateX: 12,
      lightBrightness: 0.16,
      darkBrightness: 0.4,
    },
    {
      title: 'My Creative Process',
      content: `I approach every project through research, rapid prototyping, and continuous iteration. I enjoy collaborating across all disciplines, exploring new tools, and bringing ideas to life.`,
      backgroundImage: '/assets/CoilWinderBlueprint.jpg',
      backgroundScale: 1,
      objectPosition: 'center 95%',
    },
    {
      title: 'Web Experience',
      content: `Web Development & Design: HTML, CSS, JavaScript • React • Three.js • UI/UX Design • Interactive 3D Experiences`,
      backgroundImage: '/assets/WebDesign.jpg',
      backgroundScale: 1.12,
      objectPosition: 'center top',
      lightBrightness: 0.22,
      darkBrightness: 0.52,
    },
    {
      title: 'Data Visualization',
      content: 'Capable of communicating data effectively through visual represa.',
      backgroundImage: '/assets/DataVis.jpg?v=2',
      backgroundScale: 1.2,
      objectPosition: 'center',
      translateX: 10,
      lightBrightness: 0.35,
      darkBrightness: 0.38,
      fullOpacity: true,
    },
    {
      title: 'Flexible Work Schedule & Location',
      content: `I'm based in Bend, Oregon and open to relocation and remote work worldwide.`,
      backgroundImage: '/assets/CityDrawing.jpg',
      backgroundScale: 1.8,
      objectPosition: '50% center',
      translateX: -15,
      translateY: 8,
      lightBrightness: 0.22,
      darkBrightness: 0.52,
    },
  ];

  return (
    <section
      className="bentobox space-y-8 px-6 sm:px-8 md:px-8 lg:px-8 xl:px-14" // Explicitly added padding classes
      id="bentobox"
    >
      <div id="bentobox-top" style={{ position: 'relative', top: '-85px' }}></div>
      <div className="flex items-center justify-center gap-16 lg:gap-24 xl:gap-28 mb-8 px-4 sm:px-8 lg:px-12">
        <div className="h-[2px] w-16 sm:w-24 lg:w-40 xl:w-56" style={{ backgroundColor: 'var(--text-color)', opacity: 0.65 }}></div>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wider whitespace-nowrap" style={{ color: 'var(--text-color)' }}>About</h2>
        <div className="h-[2px] w-16 sm:w-24 lg:w-40 xl:w-56" style={{ backgroundColor: 'var(--text-color)', opacity: 0.65 }}></div>
      </div>
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 rounded-3xl p-4"> {/* Default to large and ultra-large screen settings */} 
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-3xl ${
              index === 0 ? 'lg:col-span-7' : 
              index === 1 ? 'lg:col-span-5' : 
              index === 2 ? 'lg:col-span-5' : 
              index === 3 ? 'lg:col-span-7' : 
              'lg:col-span-3'
            } col-span-6 sm:col-span-3 md:col-span-3`} // Ensure no ultra-large screen-specific logic
          >
            <div className="grid-container h-full" style={{ backgroundColor: 'var(--box-background-color)' }}>
              {item.backgroundImage && (
                <img
                  src={item.backgroundImage}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full z-0 ${item.containImage ? 'object-contain' : 'object-cover'}`}
                  loading="lazy"
                  decoding="async"
                  style={{
                    filter: item.disableImageEffects
                      ? 'none'
                      : isLightMode
                        ? `brightness(${(item.lightBrightness ?? 0.36) * lightModeDarkenFactor})`
                        : `brightness(${(item.darkBrightness ?? 0.78) * darkModeLightenFactor})`,
                    opacity: item.fullOpacity ? 1 : item.disableImageEffects ? 1 : isLightMode ? lightModeImageOpacity : darkModeImageOpacity,
                    transform: item.disableImageEffects
                      ? 'none'
                      : `translateX(${item.translateX ?? 0}%) translateY(${item.translateY ?? 0}%) scale(${item.backgroundScale ?? 1})`,
                    objectPosition: item.objectPosition ?? 'center',
                  }}
                />
              )}
              <div className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none z-[1]" style={textScrimStyle}></div>
              <div className="relative text-center w-full z-10">
                <p className="grid-headtext xl:text-[1.4rem] 2xl:text-[1.5rem]" style={titleTextStyle}>{item.title}</p>
                <p className="grid-subtext xl:text-[1.05rem] 2xl:text-[1.1rem]" style={bodyTextStyle}>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="relative overflow-hidden rounded-3xl lg:col-span-3 col-span-6 sm:col-span-3 md:col-span-3">
          <div className="grid-container h-full contact-box" style={{ backgroundColor: 'var(--box-background-color)' }}>
            <img
              src="/assets/JewelryDrawing1.jpg"
              alt="Jewelry drawing"
              className="absolute inset-0 w-full h-full object-cover z-0"
              loading="lazy"
              decoding="async"
              style={{
                filter: isLightMode
                  ? `brightness(${0.36 * lightModeDarkenFactor})`
                  : `brightness(${0.78 * darkModeLightenFactor})`,
                opacity: isLightMode ? lightModeImageOpacity : darkModeImageOpacity,
                transform: 'scale(1.24)',
                objectPosition: 'center',
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none z-[1]" style={textScrimStyle}></div>
            <div className="relative text-center w-full z-10">
              <div className="copy-container flex flex-col sm:flex-row items-center justify-center w-full" onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt="copy"
                  className="copy-icon w-8 h-8 mb-2 sm:mb-0 sm:mr-2"
                  style={!hasCopied ? { filter: 'brightness(0) invert(1)' } : {}}
                />
                <p className="grid-headtext xl:text-[1.4rem] 2xl:text-[1.5rem] whitespace-nowrap overflow-hidden text-ellipsis w-full text-center" style={titleTextStyle}>
                  acschultz24@gmail.com
                </p>
              </div>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-0.5 h-10 sm:h-12 rounded-full" // Reduced height for small screens
                style={{ backgroundColor: isLightMode ? 'rgba(0, 0, 0, 0.31)' : 'rgba(44, 44, 46, 0.55)' }} // Keep button translucent in both themes
                onClick={handleContactClick}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoBox;
