import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, Download, X } from 'lucide-react';

const pastors = [
  {
    name: "Rev. John Smith",
    role: "Senior Pastor",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Leading our congregation for over 15 years with wisdom and grace."
  },
  {
    name: "Rev. Sarah Johnson",
    role: "Associate Pastor",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    bio: "Specializing in youth ministry and community outreach programs."
  }
];

const sermons = [
  {
    title: "Walking in Faith",
    date: "2024-02-25",
    duration: "45:00",
    audioUrl: "https://www.example.com/audio/walking-in-faith.mp3" // Replace with a valid URL
  },
  {
    title: "The Power of Prayer",
    date: "2024-02-18",
    duration: "38:00",
    audioUrl: "https://www.example.com/audio/the-power-of-prayer.mp3" // Replace with a valid URL
  },
  {
    title: "The Power of Prayer",
    date: "2024-02-18",
    duration: "38:00",
    audioUrl: "https://www.example.com/audio/the-power-of-prayer.mp3" // Replace with a valid URL
  }
];

const testimonials = [
  {
    name: "Michael Brown",
    testimony: "This church has transformed my life in ways I never thought possible.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Emily Davis",
    testimony: "Finding this community has been a true blessing for my family.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

export default function Blog() {
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  const playAudio = (audioUrl: string) => {
    setCurrentAudio(audioUrl);
  };

  const closeAudio = () => {
    setCurrentAudio(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Pastors Section */}
      <section className="py-16 bg-gray-50 dark:text-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 dark:text-white ">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white ">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastors.map((pastor) => (
              <motion.div
                key={pastor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hiddendark:text-white dark: text-gray-900"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={pastor.image}
                    alt={pastor.name}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{pastor.name}</h3>
                  <p className="text-indigo-600">{pastor.role}</p>
                  <p className="mt-4 text-gray-600">{pastor.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 dark:text-white ">
          <h2 className="text-3xl font-bold text-center mb-12 ">Latest Sermons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sermons.map((sermon) => (
              <motion.div
                key={sermon.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow p-6 dark:text-gray-900 "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{sermon.title}</h3>
                    <p className="text-gray-600">{sermon.date}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                      onClick={() => playAudio(sermon.audioUrl)}
                    >
                      <Play className="h-6 w-6" />
                    </button>
                    <a
                      href={sermon.audioUrl}
                      download
                      className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                    >
                      <Download className="h-6 w-6" />
                    </a>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-gray-600">
                  <Volume2 className="h-5 w-5 mr-2" />
                  <span>{sermon.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audio Player */}
      {currentAudio && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex items-center justify-between">
          <audio controls autoPlay src={currentAudio} className="w-full">
            Your browser does not support the audio element.
          </audio>
          <button
            className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 ml-4"
            onClick={closeAudio}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Newsletter Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">Stay updated with our latest sermons and events</p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">Member</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimony}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}