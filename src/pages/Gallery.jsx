import { useEffect, useState } from 'react';
import ProgressiveImage from '../components/ProgressiveImage.jsx';

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleSectionImageClick = (event) => {
    const clickedElement = event.target instanceof Element ? event.target : null;
    if (!clickedElement) return;

    const card = clickedElement.closest('div[class*="overflow-hidden"][class*="relative"]');
    if (!card) return;

    const image = card.querySelector('img');
    if (!image) return;

    const src = image.getAttribute('src');
    if (!src) return;

    setLightboxImage({
      src,
      alt: image.getAttribute('alt') || 'Gallery image',
    });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  useEffect(() => {
    if (!lightboxImage) return;

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImage]);

  const images = Array.from({ length: 21 }, (_, index) => ({
    id: index + 1,
    src:
      index === 0 ? '/assets/Gallery4.jpg' :
      index === 1 ? '/assets/Gallery5.5.jpg' :
      index === 2 ? '/assets/Gallery6.jpg' :
      index === 3 ? '/assets/Gallery7.5.jpg' :
      index === 4 ? '/assets/Gallery8.jpg' :
      index === 5 ? '/assets/Gallery9.jpg' :
      index === 6 ? '/assets/Gallery2.jpg' :
      index === 7 ? '/assets/Gallery1.JPG' :
      index === 8 ? '/assets/Gallery3.jpg' :
      index === 9 ? '/assets/Gallery10.jpg' :
      index === 10 ? '/assets/Gallery11.jpg' :
      index === 11 ? '/assets/Gallery12.jpg' :
      index === 12 ? '/assets/Gallery16.jpg' :
      index === 13 ? '/assets/Gallery18.jpg' :
      index === 14 ? '/assets/Gallery17.jpg' :
      index === 15 ? '/assets/Gallery19.PNG' :
      index === 16 ? '/assets/Gallery20.jpg' :
      index === 17 ? '/assets/Gallery21.5.jpg' :
      index === 18 ? '/assets/Gallery13.jpg' :
      index === 19 ? '/assets/Gallery14.PNG' :
      index === 20 ? '/assets/Gallery15.5.jpg' :
      '',
    alt: `Gallery image ${index + 1}`,
  }));

  return (
    <main className="pt-24 pb-8">
      <section id="gallery" className="w-full pt-8 px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20" onClick={handleSectionImageClick}>
        <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative w-full ${image.id >= 13 && image.id <= 15 ? 'aspect-[7/5]' : image.id >= 19 && image.id <= 21 ? 'aspect-[7/8]' : image.id >= 4 && image.id <= 9 ? 'aspect-[16/11]' : 'aspect-[4/3]'} overflow-hidden rounded-2xl border border-black-300 shadow-lg`}
              style={{ backgroundColor: 'var(--box-background-color)', boxShadow: 'var(--box-shadow), var(--box-glow)' }}
            >
              {image.src && (
                <ProgressiveImage
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={image.id <= 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  objectPosition={image.id === 7 ? 'center 30%' : image.id === 13 ? 'center 40%' : image.id === 14 ? 'center 80%' : image.id === 15 ? 'center 50%' : image.id >= 13 && image.id <= 15 ? 'center top' : image.id === 21 ? '0% 0%' : image.id >= 19 && image.id <= 21 ? 'center top' : 'center'}
                  filter={image.id === 8 ? 'brightness(0.75) saturate(0.6)' : 'none'}
                  style={{ transform: image.id === 10 ? 'scale(1.08)' : image.id === 21 ? 'scale(1.12) translateY(-6%)' : 'none', transformOrigin: image.id === 21 ? 'left top' : 'center center' }}
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-6xl leading-none"
            onClick={closeLightbox}
            aria-label="Close expanded image"
          >
            x
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-[95vw] max-h-[90vh] object-contain rounded-xl"
            onClick={(event) => event.stopPropagation()}
            loading="eager"
            decoding="async"
          />
        </div>
      )}
    </main>
  );
};

export default Gallery;