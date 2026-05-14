const About = () => {
  return (
  <section className="c-space my-8 sm:my-0 md:-my-2 lg:my-16 2xl:my-20 pb-16 max-sm:pb-8 sm:mt-8 sm:py-8 mb-8 max-sm:mb-0 lg:mb-12" id="about"> {/* Reduced bottom margin for moderate spacing */}
      <div id="about-top" style={{ position: 'relative', top: '-240px' }}></div> {/* Adjusted top offset to scroll 160px less */}
      <div className="grid lg:grid-cols-[44%_1fr] grid-cols-1 gap-4 h-auto sm:p-0 lg:p-2 sm:max-w-2xl lg:max-w-none sm:mx-auto lg:mx-0">
        <div className="relative flex justify-center items-center sm:justify-center sm:items-center sm:mt-[-30px] lg:translate-x-12 xl:translate-x-16"> {/* Moved up on small screens */}
          <div className="w-64 h-64 lg:w-80 lg:h-80 xl:w-[28rem] xl:h-[28rem] 2xl:w-[32rem] 2xl:h-[32rem] rounded-full overflow-hidden flex justify-center items-center bg-black-200 shadow-lg shadow-green-300/20 shadow-md about-box" style={{ boxShadow: '0 -1px 3px 2px rgba(128, 221, 128, 0.17)' }}> {/* Smaller profile pic on lg, larger on xl+ to balance text+bubbles */}
            <img src="assets/profile-pic-2.jpg" alt="Profile" className="w-full h-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start sm:items-center lg:items-start sm:mx-auto lg:mx-0 p-0 sm:pr-0 lg:pl-6 lg:pr-8 xl:pl-10 xl:pr-10 sm:max-w-screen-md md:max-w-[92%] lg:max-w-[88%] xl:max-w-[84%] mt-4 sm:mt-4 lg:mt-0"> {/* Reduced margin-top for small and medium screens, added left padding on lg/xl to push right */}
          <p
            className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center lg:text-left leading-relaxed lg:leading-[1.8] xl:leading-loose 2xl:leading-loose"
            style={{
              color: 'var(--text-color)',
              fontWeight: document.documentElement.classList.contains('light') ? 500 : 400
            }}
          >
            Experienced Art & Technology graduate with skills in Graphic Design, Digital Fabrication, and Product Design. 
            Proficient in a wide range of modern fabrication techniques, including 3D printing, CNC machining, laser cutting, 
            casting, injection molding, metalsmithing, and composite material construction. Passionate about design, 
            precision craftsmanship, attention to detail, and solving complex problems with creative solutions.
          </p>
          {/* Bubbles for large+ screens only, nested inside text container */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-4 lg:gap-4 xl:gap-5 w-full mt-8 lg:mt-10">
            <div className="p-6 rounded-full text-center flex items-center justify-center h-20 lg:h-20 xl:h-24 2xl:h-28 shadow-lg flex items-center justify-center overflow-hidden border border-black-300" style={{ backgroundColor: 'var(--box-background-color)', boxShadow: '0 -1px 3px 2px rgba(144, 238, 144, 0.1)', color: 'var(--text-color)', fontWeight: document.documentElement.classList.contains('light') ? 450 : 400 }}>
              <div className="mr-6 lg:mr-8 xl:mr-10 2xl:mr-12">
                <img src="/assets/UOLogo.png" alt="UO Logo" className="about-bubble-icon" loading="lazy" decoding="async" />
              </div>
              <div>
                <h3 className="text-base lg:text-base xl:text-lg 2xl:text-xl font-bold" style={{ color: 'var(--text-color)', fontWeight: document.documentElement.classList.contains('light') ? 600 : 550 }}>University of Oregon</h3>
                <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: 'var(--text-color)', fontWeight: document.documentElement.classList.contains('light') ? 500 : 400 }}>Class of 2024</p>
              </div>
            </div>
            <div className="p-6 rounded-full text-center flex items-center justify-center h-20 lg:h-20 xl:h-24 2xl:h-28 shadow-lg flex items-center justify-center overflow-hidden border border-black-300" style={{ backgroundColor: 'var(--box-background-color)', boxShadow: '0 -1px 3px 2px rgba(144, 238, 144, 0.1)', color: 'var(--text-color)', fontWeight: document.documentElement.classList.contains('light') ? 450 : 400 }}>
              <div className="mr-6 lg:mr-8 xl:mr-10 2xl:mr-12">
                <img src="/assets/Grad.png" alt="Graduation Cap" className="about-bubble-icon" loading="lazy" decoding="async" style={{ transform: 'translateX(-10px)' }} />
              </div>
              <div>
                <h3 className="text-base lg:text-base xl:text-lg 2xl:text-xl font-bold" style={{ color: 'var(--text-color)', fontWeight: document.documentElement.classList.contains('light') ? 600 : 550 }}>Art & Technology</h3>
                <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl" style={{ color: 'var(--text-color)', fontWeight: document.documentElement.classList.contains('light') ? 500 : 400 }}>Bachelor of Arts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden grid grid-cols-1 w-full px-6 sm:px-8 md:px-8 gap-4 2xl:mt-20 mt-12 mx-auto"> {/* Full-width bubbles for small/medium screens only */}
  <div className="p-10 pl-6 rounded-full text-center flex items-center justify-center h-20 lg:h-32 shadow-lg flex items-center justify-center overflow-hidden border border-black-300" style={{ backgroundColor: 'var(--box-background-color)', boxShadow: '0 -1px 3px 2px rgba(144, 238, 144, 0.1)', color: 'var(--text-color)', fontWeight: document.documentElement.classList.contains('light') ? 450 : 400 }}> {/* Fully rounded for half-circle look */}
          <div className="mr-8 lg:mr-16"> {/* Exaggerated margin-right for icon on large screens */}
            <img src="/assets/UOLogo.png" alt="UO Logo" className="about-bubble-icon" loading="lazy" decoding="async" />
          </div>
          <div>
            <h3
              className="text-base lg:text-base xl:text-lg 2xl:text-xl font-bold"
              style={{
                color: 'var(--text-color)',
                fontWeight: document.documentElement.classList.contains('light') ? 600 : 550
              }}
            >University of Oregon</h3>
            <p
              className="text-sm lg:text-base xl:text-lg 2xl:text-xl"
              style={{
                color: 'var(--text-color)',
                fontWeight: document.documentElement.classList.contains('light') ? 500 : 400
              }}
            >Class of 2024</p>
          </div>
        </div>
  <div className="p-10 pl-6 rounded-full text-center flex items-center justify-center h-20 lg:h-32 shadow-lg flex items-center justify-center overflow-hidden border border-black-300" style={{ backgroundColor: 'var(--box-background-color)', boxShadow: '0 -1px 3px 2px rgba(144, 238, 144, 0.1)', color: 'var(--text-color)', fontWeight: document.documentElement.classList.contains('light') ? 450 : 400 }}> {/* Border matches Jewelry section */}
          <div className="mr-6 lg:mr-8"> {/* Exaggerated margin-right for icon on large screens */}
            <img src="/assets/Grad.png" alt="Graduation Cap" className="about-bubble-icon" loading="lazy" decoding="async" />
          </div>
          <div>
            <h3
              className="text-base lg:text-base xl:text-lg 2xl:text-xl font-bold"
              style={{
                color: 'var(--text-color)',
                fontWeight: document.documentElement.classList.contains('light') ? 600 : 550
              }}
            >Art & Technology</h3>
            <p
              className="text-sm lg:text-base xl:text-lg 2xl:text-xl"
              style={{
                color: 'var(--text-color)',
                fontWeight: document.documentElement.classList.contains('light') ? 500 : 400
              }}
            >Bachelor of Arts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
