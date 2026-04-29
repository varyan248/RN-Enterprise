import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Cpu, Settings } from 'lucide-react';
import categories from '../data/categories.json';

const Products = () => {
  return (
    <div className="py-20 bg-industrial-dark min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Our Product <span className="text-brand-secondary italic">Catalog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Explore our specialized solutions. From heavy-duty Sumitomo milling to premium Prolix lubricants and CNC/VMC electric parts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, index) => {
            const isProlix = category.id === 'prolix-lubricants';
            const isCnc = category.id === 'cnc-vmc-parts';
            
            return (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="group relative h-[420px] overflow-hidden rounded-[2rem] border border-white/5 shadow-2xl block bg-industrial-gray/20"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="h-full w-full"
                >
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent group-hover:via-[#0a0a0a]/80 transition-all duration-500"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                    
                    {/* Brand / Type Badges */}
                    <div className="flex gap-2 mb-4">
                      {isProlix && (
                        <span className="flex items-center gap-1 bg-blue-500/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full w-fit">
                          <Droplet className="h-3 w-3" /> Prolix Lubricants
                        </span>
                      )}
                      {isCnc && (
                        <span className="flex items-center gap-1 bg-orange-500/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full w-fit">
                          <Cpu className="h-3 w-3" /> Electrical CNC Parts
                        </span>
                      )}
                      {(!isProlix && !isCnc) && (
                        <span className="flex items-center gap-1 bg-brand-secondary/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full w-fit">
                          <Settings className="h-3 w-3" /> Sumitomo
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{category.title}</h3>
                    <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="bg-brand-secondary w-fit p-4 rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg shadow-brand-secondary/50">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                  
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
