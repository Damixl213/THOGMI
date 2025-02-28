import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Cross } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  { platform: 'Facebook', url: '#', icon: 'Facebook' },
  { platform: 'Twitter', url: '#', icon: 'Twitter' },
  { platform: 'Instagram', url: '#', icon: 'Instagram' },
  { platform: 'YouTube', url: '#', icon: 'Youtube' },
];

const iconComponents = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Cross className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">House of God</span>
            </div>
            <p className="text-gray-400">
              Bringing hope and transformation through the power of faith.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white">Events</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Sunday: 9:00 AM & 11:00 AM</li>
              <li>Wednesday: 7:00 PM</li>
              <li>Friday: 6:30 PM (Youth)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = iconComponents[link.icon as keyof typeof iconComponents];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} House of God. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}