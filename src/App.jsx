import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Navbar from './sections/Navbar.jsx';
import Footer from './sections/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Products from './sections/Products.jsx';
import BentoBox from './sections/BentoBox.jsx';
import JewelrySection from './sections/Jewelry.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx'; // Import ThemeProvider

const Contact = lazy(() => import('./pages/Contact.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const JewelryPage = lazy(() => import('./pages/Jewelry.jsx'));
const ProductDesign = lazy(() => import('./pages/ProductDesign.jsx'));

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="pt-24 pb-8 px-8" style={{ color: 'var(--text-color)' }}>Loading...</div>}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Products />
                    <JewelrySection />
                    <BentoBox />
                  </>
                }
              />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/product-design" element={<ProductDesign />} />
              <Route path="/jewelry" element={<JewelryPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Analytics />
      </div>
    </ThemeProvider>
  );
};

export default App;
