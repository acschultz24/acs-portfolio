const Gallery = () => {
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
      <section className="w-full pt-8 px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative w-full ${image.id >= 13 && image.id <= 15 ? 'aspect-[7/5]' : image.id >= 19 && image.id <= 21 ? 'aspect-[7/8]' : image.id >= 4 && image.id <= 9 ? 'aspect-[16/11]' : 'aspect-[4/3]'} overflow-hidden rounded-2xl border border-black-300 shadow-lg`}
              style={{ backgroundColor: 'var(--box-background-color)', boxShadow: 'var(--box-shadow), var(--box-glow)' }}
            >
              {image.src && (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading={image.id <= 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  style={{ transform: image.id === 10 ? 'scale(1.08)' : image.id === 21 ? 'scale(1.12) translateY(-6%)' : 'none', transformOrigin: image.id === 21 ? 'left top' : 'center center', objectPosition: image.id === 7 ? 'center 30%' : image.id === 13 ? 'center 40%' : image.id === 14 ? 'center 80%' : image.id === 15 ? 'center 50%' : image.id >= 13 && image.id <= 15 ? 'center top' : image.id === 21 ? '0% 0%' : image.id >= 19 && image.id <= 21 ? 'center top' : 'center', filter: image.id === 8 ? 'brightness(0.75) saturate(0.6)' : 'none' }}
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;