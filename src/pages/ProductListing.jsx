import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Download, ChevronRight, LayoutGrid, List } from 'lucide-react';
import productsData from '../data/products.json';
import categories from '../data/categories.json';

const ProductListing = () => {
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const category = categories.find(c => c.id === categoryId);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      const matchesCategory = categoryId ? product.category === categoryId : true;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = selectedType === 'All' ? true : product.type === selectedType;
      return matchesCategory && matchesSearch && matchesType;
    });
  }, [categoryId, searchQuery, selectedType]);

  const toolTypes = useMemo(() => {
    const types = productsData
      .filter(p => categoryId ? p.category === categoryId : true)
      .map(p => p.type);
    return ['All', ...new Set(types)];
  }, [categoryId]);

  return (
    <div className="py-12 bg-industrial-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-brand-secondary transition-colors">Products</Link>
          {category && (
            <>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-300 font-medium">{category.title}</span>
            </>
          )}
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{category ? category.title : 'All Products'}</h1>
            <p className="text-gray-400">{filteredProducts.length} items found</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 group-focus-within:text-brand-secondary transition-colors" />
              <input 
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-industrial-gray/50 border border-white/10 rounded-xl py-3 pl-12 pr-6 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
              />
            </div>
            
            {/* Type Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-industrial-gray/50 border border-white/10 rounded-xl py-3 pl-10 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 transition-all w-full"
              >
                {toolTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* View Mode */}
            <div className="flex bg-industrial-gray/50 rounded-xl p-1 border border-white/10">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                <LayoutGrid className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-brand-secondary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Display */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div 
              layout
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" 
                : "flex flex-col gap-6"
              }
            >
              {filteredProducts.map((product) => (
                <Link 
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="block"
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`group bg-industrial-gray/30 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-secondary/30 transition-all duration-500 shadow-xl ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
                  >
                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-72 shrink-0' : 'aspect-square'}`}>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-secondary/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                          {product.type}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-secondary transition-colors">{product.name}</h3>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">{product.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key}>
                              <span className="text-[10px] uppercase text-gray-500 block mb-1 font-bold">{key}</span>
                              <span className="text-sm text-gray-300 font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-40 bg-industrial-gray/20 rounded-3xl border border-dashed border-white/10">
              <div className="mb-6 inline-block p-6 bg-white/5 rounded-full text-gray-500">
                <Search className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold mb-2">No products found</h2>
              <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={() => {setSearchQuery(''); setSelectedType('All');}}
                className="mt-8 text-brand-secondary hover:underline font-semibold"
              >
                Clear all filters
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductListing;
