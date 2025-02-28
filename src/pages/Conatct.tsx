import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const ministryOpportunities = [
  'Children Ministry',
  'Youth Ministry',
  'Music Ministry',
  'Community Outreach',
  'Prayer Team',
  'Hospitality Team'
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  backgroundCheck: boolean;
  availability: string; // Changed to string to store date
  skills: string;
  experience: string;
  date: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    interests: [],
    backgroundCheck: false,
    availability: new Date().toISOString().split('T')[0], // Set the current date as the default value
    skills: '',
    experience: '',
    date: new Date().toISOString().split('T')[0] // Set the current date as the default value
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      <h1>Contact Page</h1>
      {/* Contact content will be implemented in the next iteration */}
      
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
                          name="name"
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
                          name="email"
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
                          name="phone"
                          required
                          className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Date
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
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
                          name="interests"
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
                      name="backgroundCheck"
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
                    <div>
                      <label
                        htmlFor="availability"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Available Date
                      </label>
                      <div className="mt-1 relative">
                        <input
                          type="date"
                          id="availability"
                          name="availability"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                          value={formData.availability}
                          onChange={(e) =>
                            setFormData({ ...formData, availability: e.target.value })
                          }
                        />
                      </div>
                    </div>
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
                          name="skills"
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
                          name="experience"
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
  );
}