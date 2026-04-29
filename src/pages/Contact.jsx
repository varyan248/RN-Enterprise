import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, User, Send, MessageSquare, Clock, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ company: '', name: '', email: '', type: 'Turning', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct WhatsApp message
    const message = `
*Technical Inquiry - RN Enterprise*
--------------------------------
*Company:* ${formState.company}
*Name:* ${formState.name}
*Email:* ${formState.email}
*Application:* ${formState.type}

*Requirements:*
${formState.message}
`.trim();

    const whatsappUrl = `https://wa.me/919898894485?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Show success screen
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const contactCards = [
    { 
      icon: <Phone className="w-6 h-6" />, 
      title: "Call Expertise", 
      detail: "+91 98988 94485",
      sub: "Mon-Sat: 9AM - 7PM IST",
      color: "from-blue-500 to-cyan-500",
      link: "tel:+919898894485"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      title: "Technical Desk", 
      detail: "rn15enterprise@gmail.com",
      sub: "Response within 24hrs",
      color: "from-purple-500 to-indigo-500",
      link: "mailto:rn15enterprise@gmail.com"
    },
    { 
      icon: <MessageSquare className="w-6 h-6" />, 
      title: "Direct WhatsApp", 
      detail: "Message Us Now",
      sub: "Real-time Support",
      color: "from-green-500 to-emerald-500",
      link: "https://wa.me/919898894485"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-secondary rounded-full blur-[120px]"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Vision & Cards */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                <Clock className="w-4 h-4 text-brand-secondary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">Available: 9:00 AM - 7:00 PM IST</span>
              </div>
              <h1 className="text-6xl font-black tracking-tighter leading-[0.9] mb-8">
                Connect with the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-blue-400 italic">Future of Tooling.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                As an authorized Sumitomo partner, we don't just sell tools; we provide the engineering backbone for your industrial success.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {contactCards.map((card, i) => (
                <motion.a
                  key={i}
                  href={card.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden block"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${card.color} transition-opacity duration-500`}></div>
                  <div className="flex items-center gap-6 relative z-10">
                    <div className="p-4 rounded-2xl bg-white/5 text-white group-hover:scale-110 transition-transform duration-500">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{card.title}</h3>
                      <p className="text-xl font-bold text-white tracking-tight">{card.detail}</p>
                      <p className="text-xs text-gray-400 mt-1">{card.sub}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="p-8 rounded-3xl border border-dashed border-white/10 bg-white/[0.01]"
            >
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="text-brand-secondary" />
                <h4 className="font-bold uppercase tracking-widest text-sm text-white">Registered HQ</h4>
              </div>
              <p className="text-gray-400 leading-relaxed italic text-sm">
                B/131, Sumel Business Park-7, Nr. Soni ni Chali, N.H.No.-8, Rakhial, Ahmedabad - 380023, Gujarat, India.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Inquiry Form / Success State */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-10 lg:p-16 relative shadow-2xl h-full flex flex-col justify-center"
                >
                  <div className="absolute top-0 right-0 p-8">
                    <ShieldCheck className="w-12 h-12 text-white/5" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
                    Technical <span className="text-brand-secondary">Inquiry</span>
                  </h2>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 ml-1">Company Name</label>
                        <input 
                          required
                          type="text" 
                          value={formState.company}
                          onChange={(e) => setFormState({...formState, company: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-secondary transition-colors"
                          placeholder="Enter company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 ml-1">Your Name</label>
                        <input 
                          required
                          type="text" 
                          value={formState.name}
                          onChange={(e) => setFormState({...formState, name: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-secondary transition-colors"
                          placeholder="Enter full name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 ml-1">Work Email</label>
                        <input 
                          required
                          type="email" 
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-secondary transition-colors"
                          placeholder="email@company.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 ml-1">Application Type</label>
                        <select 
                          value={formState.type}
                          onChange={(e) => setFormState({...formState, type: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-brand-secondary transition-colors appearance-none"
                        >
                          <option className="bg-[#030303]" value="Turning">Turning</option>
                          <option className="bg-[#030303]" value="Milling">Milling</option>
                          <option className="bg-[#030303]" value="Drilling">Drilling</option>
                          <option className="bg-[#030303]" value="Special Purpose">Special Purpose</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-500 ml-1">Describe Requirements</label>
                      <textarea 
                        required
                        rows="4" 
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:outline-none focus:border-brand-secondary transition-colors resize-none"
                        placeholder="Tell us about your machining challenges..."
                      ></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full group relative overflow-hidden bg-brand-secondary text-white p-6 rounded-2xl font-black uppercase tracking-tighter transition-all disabled:opacity-50"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 group-hover:gap-5 transition-all">
                        {isSubmitting ? "Processing..." : "Submit Requirement"}
                        {!isSubmitting && <Send className="w-5 h-5" />}
                      </span>
                      <div className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                  </form>

                  <div className="mt-12 flex items-center justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500">Authorized Partner: Sumitomo Electric</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-10 lg:p-16 relative shadow-2xl h-full flex flex-col items-center justify-center text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                    className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </motion.div>
                  
                  <h2 className="text-4xl font-bold mb-4 tracking-tight">Requirement Received</h2>
                  <p className="text-gray-400 text-lg max-w-md mb-12 leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formState.name}</span>. Our technical desk has received your {formState.type} inquiry for <span className="text-white font-bold">{formState.company}</span>.
                  </p>

                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ company: '', name: '', email: '', type: 'Turning', message: '' });
                    }}
                    className="flex items-center gap-3 text-brand-secondary font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" /> Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;