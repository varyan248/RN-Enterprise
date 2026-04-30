import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Settings, Wrench, Zap, Cpu, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import categories from '../data/categories.json';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero.png" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark via-industrial-dark/90 to-transparent"></div>
          {/* Subtle glowing orb */}
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/20 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-secondary/20 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-bold mb-6 border border-brand-secondary/30 backdrop-blur-md">
              <Zap className="h-4 w-4" /> Next-Gen Industrial Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              Precision <span className="text-brand-secondary italic">Tools</span>, Parts & <span className="text-blue-400 italic">Lubricants</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Experience machining excellence with our high-performance industrial tools, premium CNC/VMC electric parts, and top-tier lubricants designed for maximum efficiency.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link 
                to="/products" 
                className="group bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-blue-600 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,160,233,0.3)]"
              >
                Explore Catalog <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/catalog" 
                className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/10 backdrop-blur-md hover:border-white/30"
              >
                Download Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners/Brands Section */}
      <section className="py-12 bg-black/40 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted Brands & Partners</p>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-70">
            <h3 className="text-2xl font-bold text-white tracking-widest">SUMITOMO</h3>
            <h3 className="text-2xl font-bold text-blue-400 tracking-widest flex items-center gap-2">
              <Droplet className="h-6 w-6" /> PROLIX LUBRICANTS
            </h3>
            <h3 className="text-2xl font-bold text-gray-300 tracking-widest">ELECTRICAL CNC & VMC PARTS</h3>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-industrial-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose RN Enterprise?</h2>
            <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Settings className="h-10 w-10" />, title: "Custom Engineering", desc: "Tailored Sumitomo tooling solutions for your specific machining requirements." },
              { icon: <Droplet className="h-10 w-10" />, title: "Premium Lubrication", desc: "Prolix industrial lubricants ensuring smooth operations and reduced friction." },
              { icon: <Cpu className="h-10 w-10" />, title: "Reliable CNC Parts", desc: "High-quality electric and mechanical parts to keep your VMC/CNC running." }
            ].map((feature, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-brand-secondary/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-brand-secondary/20"></div>
                <div className="text-brand-secondary mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-industrial-gray/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Categories</h2>
              <p className="text-gray-400 max-w-xl text-lg">Browse our extensive range of precision tools, lubricants, and machinery parts.</p>
            </div>
            <Link to="/products" className="group inline-flex items-center gap-2 text-brand-secondary font-bold hover:text-white transition-colors bg-brand-secondary/10 px-6 py-3 rounded-full border border-brand-secondary/20 hover:bg-brand-secondary">
              View Entire Catalog <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 6).map((category, index) => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl block"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full w-full"
                >
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/70 transition-all duration-500"></div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                    {category.id === 'prolix-lubricants' && (
                      <span className="bg-blue-500/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full w-fit mb-3">
                        New Brand
                      </span>
                    )}
                    {category.id === 'cnc-vmc-parts' && (
                      <span className="bg-orange-500/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full w-fit mb-3">
                        New Category
                      </span>
                    )}
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="bg-brand-secondary w-fit p-3 rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-lg shadow-brand-secondary/50">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+CgkJPHBhdGggZD0iTTAgMGw0MCA0ME00MCAwbC00MCA0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KCTwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Ready to Optimize Your Production?</h2>
            <p className="text-xl text-gray-300 mb-10 font-light">Our technical experts are ready to help you select the best tools, parts, and lubricants for your machining needs.</p>
            <Link 
              to="/contact" 
              className="bg-white text-industrial-dark hover:bg-brand-secondary hover:text-white px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,160,233,0.4)] transform hover:-translate-y-1"
            >
              Get Expert Consultation <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/10 blur-[150px] rounded-full pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Home;
