const Products = () => {
  return (
    <section id="products" className="w-full px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20" style={{ color: 'var(--text-color)' }}>
      {/* Title with horizontal lines */}
      <div className="flex items-center justify-center gap-16 lg:gap-24 xl:gap-28 mb-8 px-4 sm:px-8 lg:px-12">
        <div className="h-[2px] w-16 sm:w-24 lg:w-40 xl:w-56" style={{ backgroundColor: 'var(--text-color)', opacity: 0.65 }}></div>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wider whitespace-nowrap" style={{ color: 'var(--text-color)' }}>Products</h2>
        <div className="h-[2px] w-16 sm:w-24 lg:w-40 xl:w-56" style={{ backgroundColor: 'var(--text-color)', opacity: 0.65 }}></div>
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
      <div className="md:hidden space-y-6 w-full mt-8">
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
    </section>
  );
};

export default Products;
