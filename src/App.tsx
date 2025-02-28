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
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navigation />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/marketplace" element={<Gallery />} />
              <Route path='/Contact' element= {<Contact/>}/>
              {/* Other routes will be added as we implement them */}
            </Routes>
          </AnimatePresence>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;