import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, FileText, ExternalLink, ChevronRight, Settings, Mail, ArrowRight } from 'lucide-react';
import catalogs from '../data/catalogs.json';

const Catalog = () => {
  return (
    <div className="py-20 bg-industrial-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">General <span className="text-brand-secondary italic">Catalogs</span></h1>
            <p className="text-xl text-gray-400">
              Download our latest comprehensive catalogs and technical guides for in-depth specifications and application data.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-secondary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-industrial-gray/40 border border-white/10 backdrop-blur-xl p-6 rounded-2xl flex items-center gap-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-brand-secondary/20 rounded-full blur-lg animate-pulse"></div>
                <div className="relative p-4 bg-gradient-to-br from-brand-secondary to-blue-700 rounded-xl text-white shadow-xl">
                  <Settings className="h-8 w-8 animate-spin-slow" />
                </div>
              </div>
              <div>
                <p className="text-brand-secondary font-bold text-xs uppercase tracking-[0.2em] mb-1">Engineering Support</p>
                <h3 className="text-white font-bold text-lg">Custom Tooling Solutions</h3>
                <p className="text-gray-400 text-sm">Expert consultation available</p>
              </div>
              <Link 
                to="/contact" 
                className="ml-4 p-3 bg-white/5 hover:bg-white/10 rounded-xl text-white transition-all border border-white/10 group-hover:border-brand-secondary/50"
              >
                <ChevronRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {catalogs.map((catalog, index) => (
            <motion.div
              key={catalog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-industrial-gray/20 rounded-2xl border border-white/5 overflow-hidden hover:bg-industrial-gray/40 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative aspect-[3/4] overflow-hidden p-6">
                <div className="w-full h-full bg-white/5 rounded-lg shadow-2xl relative group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                  <img 
                    src={catalog.thumbnail} 
                    alt={catalog.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <span className="text-white font-bold text-lg leading-tight">{catalog.title}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <div className="flex gap-2">
                  <a 
                    href={catalog.downloadUrl}
                    className="flex-grow flex items-center justify-center gap-2 bg-brand-secondary hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95"
                  >
                    <Download className="h-4 w-4" /> PDF
                  </a>
                  <button className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl transition-all border border-white/10">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-center text-[10px] text-gray-500 mt-4 uppercase tracking-widest font-bold">
                  Size: {catalog.size || 'Unknown'} | Updated: {catalog.updated || 'March 2024'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unique Blueprint Support Section */}
        <div className="mt-32 relative group overflow-hidden rounded-[3rem]">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[#0c0c0c] border border-white/10"></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 p-12 opacity-5 select-none pointer-events-none">
            <span className="text-[12rem] font-black leading-none tracking-tighter">TECH</span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Main Content Area */}
            <div className="lg:col-span-8 p-12 lg:p-16 border-r border-white/5">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full mb-10">
                <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary">Expert Engineering Support</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tighter max-w-xl leading-[0.9]">
                Engineered for <span className="text-brand-secondary italic">Excellence.</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
                Beyond products, we provide solutions. Our technical team is ready to optimize your machining process with Sumitomo's world-class engineering data.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {[
                  { label: "On-Site Audit", value: "Available" },
                  { label: "Cycle Time", value: "-25% Avg." },
                  { label: "Tech Data", value: "24/7 Access" }
                ].map((item, i) => (
                  <div key={i} className="border-l border-brand-secondary/30 pl-4">
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Action Area */}
            <div className="lg:col-span-4 p-12 lg:p-16 bg-white/[0.02] flex flex-col justify-between">
              <div className="space-y-12">
                <div className="relative">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-brand-secondary" /> Direct Support
                  </h4>
                  <div className="group/item cursor-pointer">
                    <p className="text-3xl font-black text-white hover:text-brand-secondary transition-colors tracking-tighter">+91 98988 94485</p>
                    <div className="h-[1px] w-0 group-hover/item:w-full bg-brand-secondary transition-all duration-500"></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-brand-secondary" /> Email Desk
                  </h4>
                  <p className="text-gray-400 font-medium break-all">rn15enterprise@gmail.com</p>
                </div>
              </div>

              <a 
                href="https://wa.me/919898894485?text=Hello%20RN%20Enterprise,%20I%20would%20like%20to%20initialize%20a%20technical%20consultation%20for%20Sumitomo%20Tooling%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-16 group/btn relative inline-flex items-center justify-between bg-white text-black p-6 rounded-2xl font-black uppercase tracking-tighter hover:bg-brand-secondary hover:text-white transition-all duration-500"
              >
                <span>Initialize Consult</span>
                <ArrowRight className="h-6 w-6 transform group-hover/btn:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
