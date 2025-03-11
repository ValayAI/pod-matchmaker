
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg border-b',
        isScrolled 
          ? 'bg-white/80 border-gray-200' 
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pod-primary to-pod-accent flex items-center justify-center text-white font-medium">
              PM
            </div>
            <span className="text-xl font-medium text-pod-dark">PodMatch</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-pod-dark hover:text-pod-primary transition-colors">
              Home
            </Link>
            <Link to="/#features" className="text-pod-dark hover:text-pod-primary transition-colors">
              Features
            </Link>
            <Link to="/#how-it-works" className="text-pod-dark hover:text-pod-primary transition-colors">
              How It Works
            </Link>
            <Link to="/#pricing" className="text-pod-dark hover:text-pod-primary transition-colors">
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-pod-dark hover:text-pod-primary transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pod-primary to-pod-secondary text-white hover:shadow-lg transition-shadow duration-300 button-shine">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-pod-dark" />
            ) : (
              <Menu size={24} className="text-pod-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden absolute w-full bg-white border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <Link 
            to="/" 
            className="block py-2 text-pod-dark hover:text-pod-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/#features" 
            className="block py-2 text-pod-dark hover:text-pod-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/#how-it-works" 
            className="block py-2 text-pod-dark hover:text-pod-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link 
            to="/#pricing" 
            className="block py-2 text-pod-dark hover:text-pod-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <hr className="border-gray-200" />
          <div className="flex flex-col space-y-3">
            <button className="py-2 text-pod-dark hover:text-pod-primary transition-colors">
              Sign In
            </button>
            <button className="py-3 rounded-full bg-gradient-to-r from-pod-primary to-pod-secondary text-white button-shine">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
