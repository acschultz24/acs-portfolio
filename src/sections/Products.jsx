import { useEffect, useState } from 'react';

const Products = () => {
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
      alt: image.getAttribute('alt') || 'Product image',
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

  return (
    <section id="products" className="w-full px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20" style={{ color: 'var(--text-color)' }} onClick={handleSectionImageClick}>
      {/* Title with horizontal lines */}
      <div className="section-title-row">
        <div className="section-title-line"></div>
        <h2 className="section-title-text">Products</h2>
        <div className="section-title-line"></div>
      </div>
      {/* 2x2 grid for md and up, with split-image box in row 2 */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 w-full">
        {/* Row 1: Two vertical images */}
        <div className="soft-bottom-fade bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '52vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
          <img
            src="/assets/CastingMachine.jpg"
            alt="Vacuum Casting Machine"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            loading="lazy"
            decoding="async"
            style={{ borderRadius: '2rem' }}
          />
          <div className="relative z-10 w-full flex justify-center items-end h-full">
            <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Vacuum Casting Machine</span>
          </div>
        </div>
        <div className="soft-bottom-fade bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '52vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
          <img
            src="/assets/4kcoilwindertop.webp"
            alt="4k coil winder top"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            loading="lazy"
            decoding="async"
            style={{ borderRadius: '2rem' }}
          />
          <div className="relative z-10 w-full flex justify-center items-end h-full">
            <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>CNC Coil Winder</span>
          </div>
        </div>
        {/* Row 2: Two separate boxes */}
        <div className="soft-bottom-fade bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '48vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
          <img
            src="/assets/4kplanttowerside2.webp"
            alt="4k plant tower side"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            loading="lazy"
            decoding="async"
            style={{ borderRadius: '2rem', objectPosition: 'center 58%' }}
          />
          <div className="relative z-10 w-full flex justify-center items-end h-full">
            <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Hydroponic Garden</span>
          </div>
        </div>
        <div className="soft-bottom-fade bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '48vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
          <img
            src="/assets/4kgrillopen2.webp"
            alt="4k grill open 2"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            loading="lazy"
            decoding="async"
            style={{ borderRadius: '2rem' }}
          />
          <div className="relative z-10 w-full flex justify-center items-end h-full">
            <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>HBCHI MK1</span>
          </div>
        </div>
      </div>

      {/* Single column layout for small screens */}
      <div className="md:hidden space-y-6 w-full">
        <div className="soft-bottom-fade bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
          <img
            src="/assets/4kgrillopen.webp"
            alt="4k grill open"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            loading="lazy"
            decoding="async"
            style={{ borderRadius: '2rem' }}
          />
          <div className="relative z-10 w-full flex justify-center items-end h-full">
            <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>HBCHI MK1</span>
          </div>
        </div>
        <div className="soft-bottom-fade bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
          <img
            src="/assets/4kcoilwindertop.webp"
            alt="4k coil winder top"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            loading="lazy"
            decoding="async"
            style={{ borderRadius: '2rem' }}
          />
          <div className="relative z-10 w-full flex justify-center items-end h-full">
            <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>CNC Coil Winder</span>
          </div>
        </div>
        <div className="soft-bottom-fade bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
          <img
            src="/assets/4kplanttowerside.webp"
            alt="4k plant tower side"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            loading="lazy"
            decoding="async"
            style={{ borderRadius: '2rem' }}
          />
          <div className="relative z-10 w-full flex justify-center items-end h-full">
            <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Hydroponic Garden</span>
          </div>
        </div>
        <div className="soft-bottom-fade bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
          <img
            src="/assets/4kplanttowertop.webp"
            alt="4k plant tower top"
            className="w-full h-full object-cover absolute top-0 left-0 z-0"
            loading="lazy"
            decoding="async"
            style={{ borderRadius: '2rem' }}
          />
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded product image"
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

export default Products;
