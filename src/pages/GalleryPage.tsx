import { motion } from 'framer-motion';
import { Facebook, Heart, Instagram, Share2, Twitter } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/SEO';

interface Photo {
  id: string;
  src: string;
  category: string;
  title: string;
  date: string;
  likes: number;
  description: string;
}

const categories = [
  'All',
  'Worship Services',
  'Community Events',
  'Youth Activities',
  'Missions',
  'Special Celebrations',
];

const photos: Photo[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80',
    category: 'Worship Services',
    title: 'Sunday Morning Worship',
    date: '2024-03-10',
    likes: 45,
    description: 'Our congregation gathered for a powerful Sunday morning service.',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
    category: 'Community Events',
    title: 'Community Food Drive',
    date: '2024-03-05',
    likes: 32,
    description: 'Working together to serve our local community through our monthly food drive.',
  },
  {
    id: '3',
    src: 'https://fastlagos.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-08-at-8.05.46-AM1.jpeg',
    category: 'Youth Activities',
    title: 'Youth Camp 2024',
    date: '2024-02-28',
    likes: 67,
    description: 'Our youth enjoying a weekend of fellowship and spiritual growth.',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&q=80',
    category: 'Missions',
    title: 'Mission Trip',
    date: '2024-02-15',
    likes: 89,
    description: 'Making a difference in communities around the world.',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80',
    category: 'Special Celebrations',
    title: 'Easter Celebration',
    date: '2024-03-31',
    likes: 54,
    description: 'Celebrating the resurrection of our Lord Jesus Christ.',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?auto=format&fit=crop&q=80',
    category: 'Youth Activities',
    title: 'Youth Worship Night',
    date: '2024-03-15',
    likes: 41,
    description: 'A night of praise and worship led by our youth ministry.',
  },
];

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<string[]>([]);

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const handleLike = (photoId: string) => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter(id => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  const sharePhoto = (photo: Photo) => {
    // In a real implementation, this would use the Web Share API
    console.log('Sharing photo:', photo);
  };

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse through our collection of photos capturing moments of worship, community, and fellowship at The House of God Ministry."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-16"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              Photo Gallery
            </h1>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
              Capturing moments of worship, community, and fellowship
            </p>

            {/* Category Filter */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg"
                >
                  <div
                    className="aspect-w-4 aspect-h-3 cursor-pointer"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {photo.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {new Date(photo.date).toLocaleDateString()}
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {photo.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        onClick={() => handleLike(photo.id)}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            likedPhotos.includes(photo.id)
                              ? 'fill-current text-red-500'
                              : ''
                          }`}
                        />
                        <span>{photo.likes + (likedPhotos.includes(photo.id) ? 1 : 0)}</span>
                      </button>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => sharePhoto(photo)}
                          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          <Share2 className="h-5 w-5" />
                        </button>
                        <a
                          href="#"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="max-w-4xl p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[80vh] w-auto rounded-lg"
              />
              <div className="mt-4 text-white">
                <h3 className="text-xl font-semibold">{selectedPhoto.title}</h3>
                <p className="mt-2">{selectedPhoto.description}</p>
                <div className="mt-4 flex justify-between">
                  <span>{new Date(selectedPhoto.date).toLocaleDateString()}</span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="text-white hover:text-gray-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}