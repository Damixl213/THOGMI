import { ArrowRight, Calendar, Church, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function HomePage() {
  return (
    <>
      <SEO
        title="Welcome"
        description="Join us at The House of God Ministry for worship, community, and spiritual growth. Experience the love of Christ through our diverse programs and services."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-16"
      >
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src="https://scontent.flos2-1.fna.fbcdn.net/v/t39.30808-6/452916770_1007922071024657_5700112516703868349_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeF2ofpkzb2fsN88YjXjWhDSdg4TsI1vAF12DhOwjW8AXZpgnvUSgtSPj2gzoBk3GxhUA8zmtEqhzITFB2Sk7o6w&_nc_ohc=JLljLhs_DXoQ7kNvgHP5MMG&_nc_oc=AdjCe27UCiorAUrYM8yXj_GC9lGEbUy_0m40xP2pvLAs9g48DTdT3Cs2x8E5aO2ikxU&_nc_zt=23&_nc_ht=scontent.flos2-1.fna&_nc_gid=A7tvQLTPg3mavYXsl6EvVa7&oh=00_AYDrWja92PzKkjesXaHHqKGSdTtHbuOsDgrvtap1TnxzVA&oe=67C3DF37"
              alt="Church interior"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/70" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Welcome to The House of God Ministry
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Experience the love of Christ through worship, fellowship, and service
              </p>
              <div className="mt-10 flex justify-center gap-x-6">
                <Link
                  to="/about"
                  className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                >
                  Learn More
                </Link>
                <Link
                  to="/live"
                  className="rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white hover:bg-white/20"
                >
                  Watch Live <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Times */}
        <section className="bg-white dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Church className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Service Times
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
                  <img
                    src="https://thogmi.org/media/c40729008dee3fa2619fd44dc49ee02e.jpg"
                    alt="Sunday Service"
                    className="h-80 w-full object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">SUNDAY SERVICE</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">10:00 AM - 12:00 PM</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
                  <img
                    src="https://thogmi.org/media/1aad8ba60f929c7c60540567e93f88b5.jpg"
                    alt="Bible Study"
                    className="h-80 w-full object-fill rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">BREAKTHROUGH SERVICE</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Wednesday 7:00 PM - 8:30 PM</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
                  <img
                    src="https://thogmi.org/media/cc2242b7b24f7a1afc44e6e5bc4ec9e5.jpg"
                    alt="Prayer Meeting"
                    className="h-80 w-full object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">BIBLE STUDY</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Friday 6:30 PM - 8:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Upcoming Events
                </h2>
                <Link
                  to="/events"
                  className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
                >
                  View all <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'Easter Service',
                    date: 'March 31, 2024',
                    description: 'Join us for a special Easter celebration service.',
                  },
                  {
                    title: 'Youth Conference',
                    date: 'April 15-17, 2024',
                    description: 'Three days of worship, teaching, and fellowship for young adults.',
                  },
                  {
                    title: 'Community Outreach',
                    date: 'April 20, 2024',
                    description: 'Serving our local community through various initiatives.',
                  },
                ].map((event) => (
                  <div
                    key={event.title}
                    className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800"
                  >
                    <Calendar className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{event.date}</p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{event.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Latest Sermon */}
        <section className="bg-white dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="lg:grid lg:grid-cols-2 lg:gap-8"
            >
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80"
                    alt="Latest sermon preview"
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white opacity-80" />
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Latest Sermon
                </h2>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  Walking in Faith
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Join Pastor Johnson as he explores the importance of maintaining strong faith in our daily walk with Christ.
                </p>
                <div className="mt-8">
                  <Link
                    to="/sermons"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
                  >
                    Watch Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-indigo-700">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Stay Connected
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                Subscribe to our newsletter for updates, events, and spiritual insights
              </p>
              <form className="mt-8 sm:mx-auto sm:max-w-xl">
                <div className="sm:flex">
                  <input
                    type="email"
                    required
                    className="w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full rounded-md bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 sm:ml-3 sm:mt-0 sm:w-auto"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}