import { useState, useEffect } from 'react';

const ProgressiveImage = ({ src, alt, className, style, objectPosition, filter, loading = 'lazy', decoding = 'async' }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Create a small blurred placeholder version
  const placeholderSrc = src ? `${src}?w=20&q=10&blur=10` : null;

  useEffect(() => {
    let isMounted = true;

    if (!src) return;

    // Start with placeholder
    setImageSrc(placeholderSrc);

    // Create image element to preload full quality
    const img = new Image();
    img.onload = () => {
      if (isMounted) {
        setImageSrc(src);
        setIsLoaded(true);
      }
    };
    img.onerror = () => {
      if (isMounted) {
        setImageSrc(src); // Fall back to original if optimization fails
        setIsLoaded(true);
      }
    };
    img.src = src;

    return () => {
      isMounted = false;
    };
  }, [src, placeholderSrc]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      style={{
        ...style,
        objectPosition,
        filter,
        transition: isLoaded ? 'filter 0.3s ease-in-out' : 'none',
      }}
    />
  );
};

export default ProgressiveImage;
