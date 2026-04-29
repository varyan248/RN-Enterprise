import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Founded", value: "2021" },
    { label: "Clients Served", value: "200+" },
    // { label: "Production Sites", value: "49" },
    // { label: "Countries", value: "22" }
  ];

  const divisions = [
    { title: "Hardmetal Division", items: ["Carbide Inserts", "CBN, PCD products", "Carbide Rods", "Solid Carbide Drills"] },
    { title: "Powder Metal Division", items: ["Iron-based products", "Aluminum-based products", "Heat Sinks"] },
    { title: "Allied Materials", items: ["Mo crucible", "Grinding wheel", "ZnSe lens for laser optics", "Ultra-micro Cutting Tools"] }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6"
          >
            RN <span className="text-blue-500">Enterprise</span>
          </motion.h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto italic">
            "One Stop Solution for all your Industrial needs."
          </p>
        </div>
      </section>

      {/* Overview & Founder */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-blue-500" /> Company Overview
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2021 in Ahmedabad, RN Enterprise provides innovative world-class products for diverse engineering applications. 
              As an authorized distributor for <strong>Sumitomo Electric Hardmetal India Pvt Ltd</strong>, we deliver high-efficiency 
              solutions in carbide, CBN, and diamond tools.
            </p>
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-blue-500/20">
              <h3 className="text-xl font-bold mb-2">Founder's Background</h3>
              <p className="text-sm text-gray-400">
                Founded by <strong>Bakul Kumar Parmar</strong>, who brings over a decade of expertise from 
                industry leaders like Chetan Traders (Kennametal), YG1 India, and Korutech India (Korloy).
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 bg-gray-900/30 border border-white/5 rounded-3xl text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-900/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-blue-600/5 to-transparent">
            <Eye className="w-12 h-12 text-blue-500 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-400">
              Within the next 5 years, RN Enterprise will become the leading company in World Class Innovative products to business 
              and stakeholders by consistently providing outstanding service.
            </p>
          </div>
          <div className="p-10 rounded-3xl border border-white/5 bg-gradient-to-br from-blue-600/5 to-transparent">
            <Target className="w-12 h-12 text-blue-500 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <ul className="space-y-3 text-gray-400">
              <li>• Introduce World Class Innovative products.</li>
              <li>• Offer Exceptional Customer Service.</li>
              <li>• Remain Extremely Competitive.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Product Divisions */}
      {/* <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Specialized <span className="text-blue-500">Divisions</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {divisions.map((div, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-900/50 border border-white/5 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-6 text-blue-400 border-b border-white/10 pb-4">{div.title}</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  {div.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Culture Section */}
      <section className="py-20 px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center bg-blue-600/10 p-12 rounded-3xl border border-blue-500/20">
          <Users className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Company Culture</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            "At the heart of RN Enterprise is a culture that values open and effective communication. 
            We believe in fostering an environment where ideas flow freely, and every team member's input is valued. 
            Our unified purpose drives us towards excellence in every aspect of our business."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;