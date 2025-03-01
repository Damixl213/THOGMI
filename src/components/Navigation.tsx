import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Donate', href: '/donate' },
  { name: 'Gallary', href: '/marketplace' },
  { name: 'Market', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Newsletters', href: '/donate' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">The House of God Ministry</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">THOGMI</span>
          </Link>
        </div>
        <div className="flex lg:hidden rounded-md p-2.5 text-gray-700 dark:text-gray-200">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-900 dark:text-white dark:hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>
      <div className={`lg:hidden fixed inset-0 z-50 transition-transform transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="fixed  bg-blackopacity-10" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed right-0 z-50 w-full max-w-xs bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between ">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">The House of God Ministry</span>
              <span className="text-2xl font-bold">THOGMI</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 bg-white rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 bg-white">
              <div className="space-y-2 py-6 bg-white">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 ">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}