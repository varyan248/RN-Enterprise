import React from 'react';
import { Link } from 'react-router-dom';
import { Hammer, Mail, Phone, MapPin, Globe } from 'lucide-react';
import categories from '../data/categories.json';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Hammer className="h-6 w-6 text-brand-secondary" />
              <span className="text-xl font-bold tracking-tighter text-white">
                R N <span className="text-brand-secondary">ENTERPRISE</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Authorized Distributor for SUMITOMO ELECTRIC HARDMETAL INDIA PVT LTD. Providing world-class innovative products for all your industrial needs since 2021.
            </p>
            <div className="flex space-x-4">
              <a href="http://www.rnenterprise.com" target="_blank" rel="noopener noreferrer">
                <Globe className="h-5 w-5 text-gray-500 hover:text-brand-secondary cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-brand-secondary transition-colors">Our Products</Link></li>
              <li><Link to="/contact" className="hover:text-brand-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories based on PDF Divisions */}
          <div>
            <h3 className="text-white font-semibold mb-6">Product Divisions</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/products/${category.id}`} 
                    className="hover:text-brand-secondary transition-colors"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info from PDF Profile */}
          <div>
            <h3 className="text-white font-semibold mb-6">Get In Touch</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-secondary shrink-0" />
                <span>B/131, Sumel Business Park-7, Nr. Soni ni Chali, N.H.No.-8, Rakhial, Ahmedabad-380023</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-secondary shrink-0" />
                <span>+91 98988 94485</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-secondary shrink-0" />
                <span>rn15enterprise@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 R N Enterprise. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer uppercase tracking-widest">Director: Bakul Kumar Parmar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;