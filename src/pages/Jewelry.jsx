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
    { id: 1, src: '/assets/Utensils.jpg', alt: 'Utensils', objectPosition: 'center 50%', title: '' },
    { id: 2, src: '/assets/Utensils2.jpg', alt: 'Utensils 2', objectPosition: 'center 65%', title: '' },
    { id: 3, src: '/assets/AshTray3.JPG', alt: 'Ash Tray 3', objectPosition: 'center 50%', title: '' },
    { id: 4, src: '/assets/AshTray4.JPG', alt: 'Ash Tray 4', objectPosition: 'center 95%', title: '' },
    { id: 5, src: '/assets/AshTray5.JPG', alt: 'Ash Tray 5', objectPosition: 'center 05%', title: '' },
    { id: 6, src: '/assets/Pendants.jpg?v=2', alt: 'Pendants', objectPosition: 'center 50%', title: '' },
    { id: 7, src: '/assets/Bracelet.jpg?v=2', alt: 'Bracelet', objectPosition: 'center 70%', title: '' },
    { id: 8, src: '/assets/CopperRing.jpg', alt: 'Copper Ring', objectPosition: 'center 50%', title: '' },
    { id: 9, src: '/assets/MixedMetalRing.jpg', alt: 'Mixed Metal Ring', objectPosition: 'center 50%', title: '' },
    { id: 10, src: '/assets/RedRing.jpg', alt: 'Red Ring', objectPosition: 'center 50%', title: '' },
    { id: 11, src: '/assets/PlasticTree.jpg', alt: 'Plastic Tree', objectPosition: 'center 50%', title: '' },
    { id: 12, src: '/assets/MetalTree.jpg', alt: 'Metal Tree', objectPosition: 'center 45%', title: '' },
    { id: 13, src: '/assets/CastedRings.jpg', alt: 'Casted Rings', objectPosition: 'center 50%', title: '' },
    { id: 14, src: '/assets/Moto1.jpg', alt: 'Moto 1', objectPosition: '45% 50%', title: '' },
    { id: 15, src: '/assets/Moto2.jpg', alt: 'Moto 2', objectPosition: 'center 50%', title: '' },
    { id: 16, src: '/assets/Moto3.jpg', alt: 'Moto 3', objectPosition: 'center 58%', title: '' },
  ];

  return (
    <main className="pt-24 pb-8">
      <section id="jewelry" className="w-full pt-8 px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20" onClick={handleSectionImageClick}>
        <div className="w-full space-y-4">
          {/* xl and up: keep custom row pattern */}
          <div className="hidden xl:block space-y-4">
            <div className="w-full gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
              {images.slice(0, 2).map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-3xl border border-black-300 shadow-lg w-full flex flex-col justify-end items-center"
                  style={{ backgroundColor: 'var(--box-background-color)', height: '50vh' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                    style={{ objectPosition: image.objectPosition, filter: image.id === 10 ? 'contrast(1.18)' : 'none' }}
                  />
                </div>
              ))}
            </div>

            <div className="w-full gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
              {images.slice(2, 5).map((image, row2Index) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-3xl border border-black-300 shadow-lg w-full flex flex-col justify-end items-center"
                  style={{ backgroundColor: 'var(--box-background-color)', height: '62vh' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                    style={{ objectPosition: image.objectPosition, transform: row2Index === 2 ? 'scaleX(-1)' : 'none' }}
                  />
                </div>
              ))}
            </div>

            <div className="w-full gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
              {images.slice(5, 7).map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-3xl border border-black-300 shadow-lg w-full flex flex-col justify-end items-center"
                  style={{ backgroundColor: 'var(--box-background-color)', height: '50vh' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                    style={{ objectPosition: image.objectPosition, objectFit: 'cover', transform: image.id === 7 ? 'scale(1.38)' : 'none' }}
                  />
                </div>
              ))}
            </div>

            <div className="w-full gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
              {images.slice(7, 10).map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-3xl border border-black-300 shadow-lg w-full flex flex-col justify-end items-center"
                  style={{ backgroundColor: 'var(--box-background-color)', height: '50vh' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                    style={{ objectPosition: image.objectPosition }}
                  />
                </div>
              ))}
            </div>

            <div className="w-full gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
              {images.slice(10, 13).map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-3xl border border-black-300 shadow-lg w-full flex flex-col justify-end items-center"
                  style={{ backgroundColor: 'var(--box-background-color)', height: '46vh' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                    style={{ objectPosition: image.objectPosition }}
                  />
                </div>
              ))}
            </div>

            <div className="w-full gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
              {images.slice(13, 16).map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-3xl border border-black-300 shadow-lg w-full flex flex-col justify-end items-center"
                  style={{ backgroundColor: 'var(--box-background-color)', height: '34vh' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover absolute top-0 left-0 z-0"
                    style={{ objectPosition: image.objectPosition, transform: 'none' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* below xl: single flowing grid (2 cols md/lg, 1 col sm and down) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:hidden">
            {images.map((image) => (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-3xl border border-black-300 shadow-lg w-full flex flex-col justify-end items-center h-[36vh] ${image.id <= 2 || image.id >= 13 ? 'md:h-[32vh] lg:h-[32vh]' : 'md:h-[40vh] lg:h-[40vh]'}`}
                style={{ backgroundColor: 'var(--box-background-color)' }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover absolute top-0 left-0 z-0"
                  style={{
                    objectPosition: image.objectPosition,
                    filter: image.id === 10 ? 'contrast(1.18)' : 'none',
                    transform: image.id === 5 ? 'scaleX(-1)' : image.id === 7 ? 'scale(1.38)' : 'none',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </main>
  );
};

export default Jewelry;