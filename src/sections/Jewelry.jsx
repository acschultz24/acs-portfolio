import { useEffect, useState } from 'react';

const Jewelry = () => {
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
      alt: image.getAttribute('alt') || 'Jewelry image',
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

  const images = [
    { id: 1, src: '/assets/Utensils.jpg', alt: 'Utensils', objectPosition: 'center 45%', title: 'Creative Work' },
    { id: 2, src: '/assets/MixedMetalRing.jpg', alt: 'Mixed metal ring', objectPosition: 'center 54%', title: 'Traditional Jewelry' },
    { id: 3, src: '/assets/CastedRings.jpg?v=2', alt: 'Casted metal rings', objectPosition: 'center 45%', title: 'Digital Fabrication' },
    { id: 4, src: '/assets/Ashtray2.JPG', alt: 'Ashtray2', objectPosition: 'center 45%', title: 'Metalsmithing' },
  ];

  return (
    <section id="jewelry" className="w-full px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 mt-16" onClick={handleSectionImageClick}>
      {/* Title with horizontal lines */}
      <div className="section-title-row jewelry-home-title-row">
        <div className="section-title-line"></div>
        <h2 className="section-title-text">Jewelry</h2>
        <div className="section-title-line"></div>
      </div>
      <div className="w-full jewelry-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="soft-bottom-fade relative overflow-hidden rounded-3xl border border-black-300 shadow-lg w-full flex flex-col justify-end items-center"
            style={{ backgroundColor: 'var(--box-background-color)', height: '50vh' }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              style={{ objectPosition: image.objectPosition }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>{image.title}</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded jewelry image"
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
    </section>
  );
};

export default Jewelry;
