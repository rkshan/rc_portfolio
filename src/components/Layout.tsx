import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User,  FolderOpen, Mail } from 'lucide-react';
import logo from '../assets/logo.png'; 

<Link 
  to="/" 
  className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200"
  aria-label="Home - RUKSHAN Portfolio"
>
  <img src={logo} alt="RUKSHAN Logo" className="h-50 w-50" />
</Link>

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/', icon: User },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      {/* Navigation Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-transparent backdrop-blur-sm shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        <nav className=" px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
  to="/" 
  className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors duration-200"
  aria-label="Home - RUKSHAN Portfolio"
>
  <img src={logo} alt="RUKSHAN Logo" className="h-8 w-auto" />
</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    aria-current={location.pathname === item.href ? 'page' : undefined}
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          
          
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16 flex-1">
        {children}
      </main>

      {/* Footer */}
     <footer className="bg-slate-800 text-white py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-slate-300">
        © 2025 RUKSHAN. All rights reserved.
      </p>
    </div>
  </footer>
    </div>
  );
};

export default Layout;