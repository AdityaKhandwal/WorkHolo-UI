import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Users, 
  Layers, 
  Globe2, 
  MessageCircle, 
  FileText,
  ShoppingBag,
  Database,
  CreditCard,
  BarChart,
  Settings,
  Store,
  RefreshCw,
} from 'lucide-react';

// --- Components ---
const Hero = () => (
  <section className="relative pt-40 pb-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-[#001a33] to-[#000a1a] z-0" />
    <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0080ff] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#7B2CBF] rounded-full blur-[120px]" />
    </div>

    <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full mb-8"
      >
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Magento Development - India</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl text-[#EFEFEF] md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]"
      >
        Hire Magento <span className="text-[#0080ff]">Developers</span> in India
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
      >
        <button className="bg-[#0080ff] hover:bg-[#7B2CBF] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all duration-300 shadow-xl shadow-blue-500/30">
          Hire Developers <ArrowRight size={20} />
        </button>
        <button className="border border-gray-700 hover:border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
          View Our Work
        </button>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-24 bg-white text-black">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
          In the world of online commerce, performance and scalability directly impact revenue. Magento is built for businesses that require flexibility, advanced product management, and the ability to scale without limitations.
        </p>
        <p className="text-xl md:text-2xl font-semibold italic text-[#0080ff] mt-8">
          At mTouch Labs, we provide experienced Magento developers in India who create secure, high-performing, and conversion-focused eCommerce platforms tailored to your business goals.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {[
          { label: 'Projects Delivered', value: '500+' },
          { label: 'Global Clients', value: '1050+' },
          { label: 'Years in Tech', value: '14+' },
          { label: 'Satisfaction Rate', value: '99%' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col gap-2"
          >
            <span className="text-5xl md:text-6xl font-black text-[#001a33]">{stat.value}</span>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-32 bg-[#f8faff] text-black">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Build Commerce Platforms That <span className="text-[#0080ff]">Scale</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our developers design eCommerce systems that support both growth and operational efficiency.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Multi-Store Management', desc: 'Multi-store management for diverse product lines and brands.', icon: <Store className="text-pink-500" /> },
          { title: 'Advanced Catalogs', desc: 'Advanced product catalogs with complex configurations.', icon: <Database className="text-orange-500" /> },
          { title: 'Custom Checkout', desc: 'Custom checkout workflows optimized for conversions.', icon: <ShoppingBag className="text-blue-500" /> },
          { title: 'Payment Integration', desc: 'Secure payment integrations for seamless transactions.', icon: <CreditCard className="text-cyan-500" /> },
          { title: 'Scalable Infrastructure', desc: 'Scalable infrastructure designed for high-traffic stores.', icon: <BarChart className="text-blue-600" /> },
          { title: 'Enterprise Customization', desc: 'Enterprise-level customization for unique business needs.', icon: <Settings className="text-purple-500" /> },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-10 rounded-3xl shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              {React.cloneElement(
  feature.icon as React.ReactElement<{ size?: number }>,
  { size: 32 }
)}
            </div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const EngagementModels = () => (
  <section className="py-32 bg-[#000a1a] text-white">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Flexible Hiring & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0080ff] to-[#7B2CBF]">Engagement</span> Models
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Scale your commerce team as your business grows.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Dedicated Developers', desc: 'Full-time dedicated Magento developers for your store.', icon: <Users className="text-purple-500" /> },
          { title: 'Team Augmentation', desc: 'Augment your team with experienced Magento talent.', icon: <Layers className="text-purple-500" /> },
          { title: 'End-to-End Development', desc: 'Complete store development from planning to launch.', icon: <FileText className="text-orange-500" /> },
          { title: 'Offshore Support', desc: 'Offshore development support with transparent processes.', icon: <Globe2 className="text-blue-500" /> },
        ].map((model, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a192f] p-12 rounded-3xl border border-gray-800 hover:border-[#0080ff]/50 transition-all duration-300 flex flex-col gap-6"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              {React.cloneElement(
  model.icon as React.ReactElement<{ size?: number }>,
  { size: 40 }
)}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{model.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BusinessTypes = () => (
  <section className="py-32 bg-white text-black">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Designed for <span className="text-[#0080ff]">Growing Online Businesses</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Retail brands expanding online', icon: <Store className="text-pink-500" /> },
          { title: 'B2B commerce platforms', icon: <Layers className="text-blue-500" /> },
          { title: 'Multi-vendor marketplaces', icon: <ShoppingBag className="text-orange-500" /> },
          { title: 'Enterprise eCommerce systems', icon: <Database className="text-blue-600" /> },
          { title: 'International online stores', icon: <Globe2 className="text-green-500" /> },
          { title: 'Magento 1 to 2 migration', icon: <RefreshCw className="text-blue-500" /> },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="bg-[#f8faff] p-8 rounded-2xl flex items-center gap-6 border border-transparent hover:border-blue-200 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
              {React.cloneElement(
  item.icon as React.ReactElement<{ size?: number }>,
  { size: 24 }
)}
            </div>
            <span className="font-bold text-lg">{item.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'Why hire Magento developers in India?', a: 'India provides skilled Magento professionals with experience delivering scalable eCommerce platforms at competitive costs.' },
    { q: 'Is Magento suitable for enterprise eCommerce?', a: 'Yes, Magento is one of the most powerful platforms for enterprise-level stores, offering unmatched flexibility and scalability.' },
    { q: 'Can you migrate from Magento 1 to Magento 2?', a: 'Absolutely. We specialize in seamless migrations, ensuring all data, products, and customer info are safely transferred.' },
    { q: 'Do you provide post-launch support?', a: 'Yes, we offer comprehensive support and maintenance packages to keep your store running smoothly and securely.' },
  ];

  return (
    <section className="py-32 bg-[#f8faff] text-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-20">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`bg-white rounded-2xl border transition-all duration-300 ${openIdx === idx ? 'border-blue-500 shadow-xl shadow-blue-500/10' : 'border-transparent shadow-sm'}`}>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className={`text-xl font-bold ${openIdx === idx ? 'text-[#0080ff]' : 'text-gray-800'}`}>{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={24} className="text-[#0080ff]" /> : <ChevronDown size={24} className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 text-lg leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-32 bg-[#001a33] text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0080ff]/10 blur-[150px] rounded-full pointer-events-none" />
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Launch and Scale Your <br /> eCommerce Platform</h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        If you're planning to build or enhance a high-performance online store, our Magento developers are ready to collaborate. Partner with mTouch Labs and create a scalable eCommerce platform designed for growth.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="bg-[#0080ff] hover:bg-[#7B2CBF] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all duration-300 shadow-xl shadow-blue-500/30">
          Contact Us Today <ArrowRight size={20} />
        </button>
        <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all duration-300 shadow-xl shadow-green-500/30">
          WhatsApp <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </section>
);

const GlobalPresence = () => (
  <section className="py-24 bg-[#000a1a] text-white border-t border-gray-800">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="flex items-center gap-4 mb-16">
        <Globe size={32} className="text-[#0080ff]" />
        <h2 className="text-2xl font-bold tracking-tight">Global Presence</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
        {[
          { region: 'INDIA', cities: ['Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Kochi'] },
          { region: 'AMERICAS', cities: ['United States', 'Canada'] },
          { region: 'EUROPE', cities: ['United Kingdom', 'Germany', 'Ireland'] },
          { region: 'ASIA PACIFIC', cities: ['Singapore', 'Australia', 'New Zealand', 'India'] },
          { region: 'MIDDLE EAST', cities: ['UAE', 'Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait'] },
        ].map((loc, idx) => (
          <div key={idx} className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#0080ff] rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#0080ff] uppercase">{loc.region}</span>
            </div>
            <ul className="flex flex-col gap-4">
              {loc.cities.map((city, cIdx) => (
                <li key={cIdx} className="text-gray-400 hover:text-white transition-colors cursor-pointer">{city}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FloatingActions = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/50"
    >
      <MessageCircle size={28} />
    </motion.button>
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-14 h-14 bg-[#0080ff] rounded-full flex items-center justify-center text-white shadow-2xl shadow-blue-500/50"
    >
      <ChevronUp size={28} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </motion.button>
  </div>
);

export default function MagentoDeveloper() {
  return (
    <div className="min-h-screen selection:bg-[#0080ff] selection:text-white">
      <main>
        <Hero />
        <Stats />
        <Features />
        <EngagementModels />
        <BusinessTypes />
        <FAQ />
        <CTASection />
        <GlobalPresence />
      </main>
      <FloatingActions />
    </div>
  );
}
