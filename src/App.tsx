import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import Contact from './pages/Conatct';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import CustomCursor from './components/CustomCursor';
import Loader from '../src/components/LoadingScreen';
import UpcomingEvent from './pages/event';
import Footer from './components/Footer';
import Donation from './pages/Donation';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navigation />
          <CustomCursor />
          <AnimatePresence mode="wait">
            {loading ? (
              <Loader />
            ) : (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/marketplace" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/events" element={<UpcomingEvent />} />
                <Route path="/donate" element={<Donation />} />
                {/* Other routes will be added as we implement them */}
              </Routes>
          
            )}
              <Footer/>

          </AnimatePresence>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;