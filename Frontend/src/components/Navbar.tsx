import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Brain, LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext';

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate('/');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gradient-to-r from-blue-900 to-indigo-900 shadow-md' : 'bg-gradient-to-r from-blue-800/90 to-indigo-900/90 backdrop-blur-sm'
    } text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Brain className="h-8 w-8 mr-2 group-hover:animate-pulse-slow transition-all duration-300" />
              <span className="font-bold text-xl relative">
                NeuroDetect
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
              }`}>
                Home
              </Link>
              <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/about') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
              }`}>
                About
              </Link>
              <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive('/contact') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
              }`}>
                Contact
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive('/dashboard') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
                  }`}>
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive('/login') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
                  }`}>
                    Login
                  </Link>
                  <Link to="/signup" className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none transition-colors duration-300"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-scaleIn" />
              ) : (
                <Menu className="h-6 w-6 animate-scaleIn" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/about') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive('/contact') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive('/dashboard') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
                  }`}
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium bg-red-600 hover:bg-red-700 transition-all duration-300"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive('/login') ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700/70 hover:text-white'
                  }`}
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;