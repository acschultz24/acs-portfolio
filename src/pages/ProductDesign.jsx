import { useEffect, useState } from 'react';

const ProductDesign = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const handleSectionImageClick = (event) => {
    const clickedElement = event.target instanceof Element ? event.target : null;
    if (!clickedElement) return;

    const card = clickedElement.closest('div[class*="rounded-[2rem]"][class*="overflow-hidden"][class*="relative"]');
    if (!card) return;

    const image = card.querySelector('img');
    if (!image) return;

    const src = image.getAttribute('src');
    if (!src) return;

    setLightboxImage({
      src,
      alt: image.getAttribute('alt') || 'Product design image',
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
    <main className="pt-24 pb-8">
      <section id="product-design-products" className="w-full pt-8 px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20" style={{ color: 'var(--text-color)' }} onClick={handleSectionImageClick}>
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 w-full">
          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
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

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
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

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/CastingMachine.jpg"
              alt="Casting Machine"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Vacuum Casting Machine</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/4kplanttowerside2.webp"
              alt="4k plant tower side 2"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Hydroponic Garden</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/GolfBallStencils.webp"
              alt="Golf Ball Stencils"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem', objectPosition: 'center 68%' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Golf Ball Stencils</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/4kShowRoom2.webp"
              alt="4k showroom 2"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>The Ultimate Desk</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/4kflipdotonly.webp"
              alt="4k flipdot only"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem', transform: 'scale(2.05)', filter: 'brightness(0.9)' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Flip Dot Display</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/ToolStorage.webp"
              alt="Tool Storage"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem', transform: 'scale(1.1)', objectPosition: 'center 58%' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Parametric Modeling</span>
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-6 w-full mt-8">
          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
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

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
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

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/CastingMachine.jpg"
              alt="Casting Machine"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Vacuum Casting Machine</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/4kplanttowerside2.webp"
              alt="4k plant tower side 2"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Hydroponic Garden</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/GolfBallStencils.webp"
              alt="Golf Ball Stencils"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem', objectPosition: 'center 68%' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Golf Ball Stencils</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/4kShowRoom2.webp"
              alt="4k showroom 2"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>The Ultimate Desk</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/4kflipdotonly.webp"
              alt="4k flipdot only"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem', transform: 'scale(2.55)', filter: 'brightness(0.9)' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Flip Dot Display</span>
            </div>
          </div>

          <div className="bg-[var(--box-background-color)] overflow-hidden rounded-[2rem] border border-black-300 flex flex-col justify-end items-center relative" style={{ height: '45vh', boxShadow: 'var(--box-shadow), var(--box-glow)' }}>
            <img
              src="/assets/ToolStorage.webp"
              alt="Tool Storage"
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
              loading="lazy"
              decoding="async"
              style={{ borderRadius: '2rem', transform: 'scale(1.1)', objectPosition: 'center 58%' }}
            />
            <div className="relative z-10 w-full flex justify-center items-end h-full">
              <span className="w-full text-center font-semibold text-4xl pb-4" style={{ color: '#fff', textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}>Parametric Modeling</span>
            </div>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-[120] bg-black/85 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project image"
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

export default ProductDesign;