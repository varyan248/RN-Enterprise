import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Package, Shield, Settings, Info } from 'lucide-react';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { productId } = useParams();
  
  const product = useMemo(() => {
    return productsData.find(p => p.id === productId);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-industrial-dark">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Product Not Found</h2>
          <Link to="/products" className="text-brand-secondary hover:underline">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-industrial-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/" className="hover:text-brand-secondary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/products" className="hover:text-brand-secondary transition-colors">Products</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-300 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-industrial-gray/20 border border-white/5 relative shadow-2xl">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-brand-secondary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                  {product.type}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {product.name}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed italic">
                "{product.description}"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-brand-secondary/30 transition-all">
                <div className="flex items-center gap-3 mb-4 text-brand-secondary">
                  <Settings className="h-6 w-6" />
                  <h3 className="font-bold uppercase tracking-wider">Specifications</h3>
                </div>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col border-b border-white/5 pb-2 last:border-0">
                      <span className="text-[10px] uppercase text-gray-500 font-bold">{key}</span>
                      <span className="text-gray-200 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="p-3 bg-brand-secondary/10 rounded-xl text-brand-secondary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Genuine Quality</h4>
                    <p className="text-xs text-gray-400">Authentic Sumitomo parts</p>
                  </div>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center gap-4">
                  <div className="p-3 bg-brand-secondary/10 rounded-xl text-brand-secondary">
                    <Package className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">High Durability</h4>
                    <p className="text-xs text-gray-400">Engineered for precision</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <a 
                href={product.catalogLink}
                className="flex-1 bg-brand-secondary hover:bg-brand-secondary/80 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg shadow-xl shadow-brand-secondary/20 transition-all active:scale-95"
              >
                <Download className="h-6 w-6" />
                Technical Catalog
              </a>
              <Link 
                to="/contact"
                className="flex-1 bg-white/5 hover:bg-white/10 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg border border-white/10 transition-all active:scale-95"
              >
                <Info className="h-6 w-6" />
                Inquire Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Technical Guidance Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-gradient-to-br from-industrial-gray/40 to-transparent rounded-3xl border border-white/5"
        >
          <h2 className="text-3xl font-bold mb-8">Technical Guidance</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Sumitomo cutting tools are designed for maximum efficiency. For optimal performance, ensure proper coolant flow and chip evacuation. Our technical team is available for on-site consultation and process optimization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-brand-secondary mb-2">Coolant</h4>
              <p className="text-sm text-gray-500">Internal coolant recommended for deep hole applications.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-brand-secondary mb-2">Speed/Feed</h4>
              <p className="text-sm text-gray-500">Refer to catalog for specific material-grade combinations.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-brand-secondary mb-2">Safety</h4>
              <p className="text-sm text-gray-500">Always wear appropriate eye protection and machine guarding.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
