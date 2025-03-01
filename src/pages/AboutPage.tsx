import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, FileText, Heart, Mail, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '../components/SEO';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '1990',
    title: 'Church Foundation',
    description: 'The House of God Ministry was established with a small group of devoted believers.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80',
  },
  {
    year: '2000',
    title: 'New Building',
    description: 'Our congregation grew, leading to the construction of our current sanctuary.',
    image: 'https://images.unsplash.com/photo-1514896856000-91cb6de818e0?auto=format&fit=crop&q=80',
  },
  {
    year: '2010',
    title: 'Community Center',
    description: 'Opened our community center to serve the local neighborhood.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
  },
  {
    year: '2020',
    title: 'Digital Ministry',
    description: 'Launched online services to reach a global audience.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80',
  },
];

const leadershipTeam: LeadershipMember[] = [
  {
    name: 'Pastor Nixion',
    role: 'Senior Pastor',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80',
    bio: 'Pastor John has been leading our congregation for over 20 years with wisdom and compassion.',
  },
  {
    name: 'Pastor Mrs  ',
    role: 'Worship Director',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80',
    bio: 'Sarah brings over 15 years of experience in worship ministry and music education.',
  },
  {
    name: 'Michael Chen',
    role: 'Youth Pastor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Michael leads our youth ministry with energy and dedication to spiritual growth.',
  },
  {
    name: 'Rachel Thompson',
    role: 'Children\'s Ministry Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'Rachel has a passion for nurturing the spiritual development of our youngest members.',
  },
  {
    name: 'Rachel Thompson',
    role: 'Children\'s Ministry Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'Rachel has a passion for nurturing the spiritual development of our youngest members.',
  },
  {
    name: 'Rachel Thompson',
    role: 'Children\'s Ministry Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    bio: 'Rachel has a passion for nurturing the spiritual development of our youngest members.',
  },
];

const ministryOpportunities = [
  'Worship Team',
  'Children\'s Ministry',
  'Youth Ministry',
  'Media Team',
  'Hospitality',
  'Outreach',
  'Prayer Team',
  'Administrative Support',
];

export function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[],
    backgroundCheck: false,
    availability: {
      sunday: false,
      wednesday: false,
      friday: false,
      saturday: false,
    },
    skills: '',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about The House of God Ministry's history, leadership, and opportunities to serve in our community."
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-16"
      >
        {/* Mission and Vision */}
        <section className="bg-white dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Heart className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our Mission & Vision
              </h1>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Mission</h2>
                  <ul className="mt-4 text-gray-600 dark:text-gray-300 font-semibold text-start space-y-5 italic">
                    <li>- Encountering God's love and Power</li>
                    <li>- Growing in faith and spiritual gifts</li>
                    <li>- Connecting with The Holy Spirit through consistent fellowship with community of like-minded believers</li>
                    <li>- Impacting the world through Prophetic Power of God's word leading to Salvation, Deliverance, Breakthrough, Healing and Restoration</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Vision</h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 text-start">
                  To be a beacon of hope and light in a world needing God's touch
by raising  an influential godly impacted generation of Spirit
filled believers. empowering individuals to reach their full
potential in Christ.</p>
                </div>
                <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-700 mx-9">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Mission</h2>
                  <ul className="mt-4 text-gray-600 dark:text-gray-300 font-semibold text-start space-y-5 italic">
                    <li> Spiritual growth and development</li>
                    <li>-Love and compassion</li>
                    <li>- Integrity and accountability</li>
                    <li>- Impacting the world through Prophetic Power of Community and fellowship</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Our Journey
              </h2>
              <div className="mt-12">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className={`flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? '' : 'md:flex-row-reverse'
                    } mb-12`}
                  >
                    <motion.div
                      initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="flex-1"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </motion.div>
                    <div className="flex-1 flex items-center">
                      <motion.div
                        initial={{ x: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                      >
                        <div className="text-indigo-600 dark:text-indigo-400 text-xl font-bold">
                          {event.year}
                        </div>
                        <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                          {event.title}
                        </h3>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="bg-white dark:bg-gray-800">
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Our Leadership Team
      </h2>
      <div className="mt-12">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={false}
          useKeyboardArrows
          autoPlay={false}
          centerMode
          centerSlidePercentage={33.33}
        >
          {leadershipTeam.map((member) => (
            <motion.div
              key={member.name}
              initial={{ y: 20, opacity: 0  }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-indigo-600 dark:text-indigo-400">{member.role}</p>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </motion.div>
  </div>
</section>

        {/* Join Workforce */}
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Join Our Ministry Team
              </h2>
              <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                Use your gifts and talents to serve in our community
              </p>
              <form onSubmit={handleSubmit} className="mt-12 max-w-3xl mx-auto">
                <div className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Personal Information
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Full Name
                        </label>
                        <div className="mt-1 relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            required
                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Email
                        </label>
                        <div className="mt-1 relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            required
                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Phone
                        </label>
                        <div className="mt-1 relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            required
                            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Areas of Interest
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {ministryOpportunities.map((opportunity) => (
                        <label
                          key={opportunity}
                          className="flex items-center space-x-3"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            checked={formData.interests.includes(opportunity)}
                            onChange={(e) => {
                              const newInterests = e.target.checked
                                ? [...formData.interests, opportunity]
                                : formData.interests.filter((i) => i !== opportunity);
                              setFormData({ ...formData, interests: newInterests });
                            }}
                          />
                          <span className="text-gray-700 dark:text-gray-300">
                            {opportunity}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Background Check Consent */}
                  <div>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={formData.backgroundCheck}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            backgroundCheck: e.target.checked,
                          })
                        }
                      />
                      <span className="text-gray-700 dark:text-gray-300">
                        I consent to a background check as required for ministry service
                      </span>
                    </label>
                  </div>

                  {/* Schedule Availability */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Schedule Availability
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {Object.entries(formData.availability).map(([day, checked]) => (
                        <label key={day} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            checked={checked}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                availability: {
                                  ...formData.availability,
                                  [day]: e.target.checked,
                                },
                              })
                            }
                          />
                          <span className="text-gray-700 dark:text-gray-300">
                            {day.charAt(0).toUpperCase() + day.slice(1)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Skills and Experience */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Skills & Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="skills"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Relevant Skills
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="skills"
                            rows={3}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                            value={formData.skills}
                            onChange={(e) =>
                              setFormData({ ...formData, skills: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="experience"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Previous Ministry Experience
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="experience"
                            rows={3}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                            value={formData.experience}
                            onChange={(e) =>
                              setFormData({ ...formData, experience: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
}