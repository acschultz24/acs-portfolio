const Jewelry = () => {
  const images = [
    { id: 1, src: '/assets/Utensils.jpg', alt: 'Utensils', objectPosition: 'center 45%', title: 'Creative Work' },
    { id: 2, src: '/assets/MixedMetalRing.jpg', alt: 'Mixed metal ring', objectPosition: 'center 54%', title: 'Traditional Jewelry' },
    { id: 3, src: '/assets/CastedRings.jpg?v=2', alt: 'Casted metal rings', objectPosition: 'center 45%', title: 'Digital Fabrication' },
    { id: 4, src: '/assets/Ashtray2.JPG', alt: 'Ashtray2', objectPosition: 'center 45%', title: 'Metalsmithing' },
  ];

  return (
    <section id="jewelry" className="w-full px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 mt-16">
      {/* Title with horizontal lines */}
      <div className="flex items-center justify-center gap-16 lg:gap-24 xl:gap-28 mb-12 px-4 sm:px-8 lg:px-12">
        <div className="flex-1 h-[2px] max-w-[220px]" style={{ backgroundColor: 'var(--text-color)', opacity: 0.65 }}></div>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wider whitespace-nowrap" style={{ color: 'var(--text-color)' }}>Jewelry</h2>
        <div className="flex-1 h-[2px] max-w-[220px]" style={{ backgroundColor: 'var(--text-color)', opacity: 0.65 }}></div>
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
    </section>
  );
};

export default Jewelry;
