import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  date: string;
}

const categories = [
  'All',
  'Sunday Service',
  'Tuesday Service',
  'Bible Studies',
  'Events',
  'Latest'
];

const images: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Sunday Service',
    title: 'Sunday Worship',
    date: '2024-03-10'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Tuesday Service',
    title: 'Tuesday Prayer Meeting',
    date: '2024-03-05'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Bible Studies',
    title: 'Bible Study Group',
    date: '2024-03-07'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Events',
    title: 'Youth Conference',
    date: '2024-03-01'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Latest',
    title: 'Worship Night',
    date: '2024-03-09'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1504052434569-70ad5c0a3ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Sunday Service',
    title: 'Morning Service',
    date: '2024-03-03'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Events',
    title: 'Community Outreach',
    date: '2024-03-02'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Bible Studies',
    title: 'Evening Bible Study',
    date: '2024-03-06'
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50 dark:text-white dark:bg-gray-900 text-center "
    >
      <div className="max-w-7xl mx-auto dark:text-white dark:bg-gray-900 text-center">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white text-center">Our Gallery</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors dark:text-white dark:bg-gray-600 text-center" ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-indigo-50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openLightbox(index)}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-w-16 aspect-h-9"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-white text-sm">{image.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={selectedImageIndex}
          slides={filteredImages.map(img => ({ src: img.src }))}
        />
      </div>
    </motion.div>
  );
}