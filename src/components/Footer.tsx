
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  ArrowRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pod-primary to-pod-accent flex items-center justify-center text-white font-medium text-sm">
                PM
              </div>
              <span className="text-lg font-medium text-pod-dark">PodMatch</span>
            </div>
            <p className="text-pod-gray mb-6">
              The AI-powered platform connecting podcast hosts with the perfect guests, and experts with their ideal podcasts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pod-gray hover:text-pod-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-pod-gray hover:text-pod-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-pod-gray hover:text-pod-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-pod-gray hover:text-pod-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-pod-dark font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#features" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-pod-dark font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Podcasting Guides
                </Link>
              </li>
              <li>
                <Link to="/examples" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-pod-gray hover:text-pod-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-pod-dark font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-pod-gray hover:text-pod-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/legal" className="text-pod-gray hover:text-pod-primary transition-colors">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-pod-gray text-sm">
                © {new Date().getFullYear()} PodMatch. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <Link to="/privacy" className="text-pod-gray hover:text-pod-primary transition-colors text-sm mb-2 sm:mb-0">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-pod-gray hover:text-pod-primary transition-colors text-sm mb-2 sm:mb-0">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-pod-gray hover:text-pod-primary transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-pod-gray text-sm mb-4 md:mb-0">
              Stay updated with our newsletter
            </p>
            
            <div className="w-full md:w-96 flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 border border-gray-200 rounded-l-lg focus:outline-none focus:border-pod-primary"
              />
              <button className="px-4 py-2 bg-pod-primary text-white rounded-r-lg hover:bg-pod-primary/90 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
