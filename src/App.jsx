import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import About from './pages/About';
import WhatsAppButton from './components/Whatsapp';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-industrial-dark text-industrial-light">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={< About/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categoryId" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
