import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown,  
  MessageCircle, 
  ChevronUp,
  Palette,
  Plug,
  ShoppingCart,
  Layers,
  Link as LinkIcon,
  Zap,
  User,
  ClipboardList,
  Wrench,
  Building2,
  FileText,
  Search,
  Users,
  Layout
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#010b24] to-[#010816]">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
    </div>
    
    <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8"
      >
        • WORDPRESS DEVELOPMENT · INDIA
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
      >
        Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">WordPress Developers</span> in India
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        Build secure, scalable WordPress websites tailored to your business. 
        Our expert developers deliver high-performance solutions that drive growth.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <button className="w-full sm:w-auto bg-[#007BFF] hover:bg-[#0056b3] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-blue-500/20">
          Get Started
        </button>
        <button className="w-full sm:w-auto bg-transparent border-2 border-gray-700 hover:border-gray-500 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all">
          View Portfolio
        </button>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-24 bg-white text-dark">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="text-center mb-20">
        <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          A powerful website is more than a digital brochure — it's a business engine. 
          Whether you're launching a new brand, building a content-driven platform, 
          or scaling an e-commerce store, WordPress offers flexibility and control when built correctly.
        </p>
        <p className="mt-8 text-blue-600 font-semibold italic text-lg">
          At WorkHolo Labs, we provide experienced WordPress developers in India who craft 
          secure, custom-built websites that are easy to manage and designed for growth.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { value: '500+', label: 'Projects Delivered' },
          { value: '1050+', label: 'Global Clients' },
          { value: '14+', label: 'Years in Tech' },
          { value: '99%', label: 'Satisfaction Rate' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-black text-dark mb-2">{stat.value}</div>
            <div className="text-gray-500 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { icon: <Palette className="text-pink-500" />, title: 'Custom Themes', desc: 'Fully custom WordPress themes tailored to your brand identity and design specifications.' },
    { icon: <Plug className="text-blue-500" />, title: 'Plugin Development', desc: 'Custom plugin development and customization for unique functionality.' },
    { icon: <ShoppingCart className="text-purple-500" />, title: 'WooCommerce', desc: 'Complete WooCommerce implementation for scalable e-commerce stores.' },
    { icon: <Layers className="text-gray-400" />, title: 'Headless WordPress', desc: 'Modern headless WordPress solutions with React or Next.js frontends.' },
    { icon: <LinkIcon className="text-indigo-500" />, title: 'API Integrations', desc: 'Seamless API integrations with third-party tools and services.' },
    { icon: <Zap className="text-orange-500" />, title: 'Speed Optimization', desc: 'Performance optimization, caching, and speed tuning for fast loading.' },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-dark">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            WordPress Development That <span className="text-blue-600">Goes Beyond Templates</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            We don't rely on generic themes. Our developers build tailored WordPress solutions designed around your business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 transition-all"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                 {React.isValidElement(s.icon) 
  ? React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 24 }) 
  : null}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CollaborationModels = () => {
  const models = [
    { icon: <User className="text-purple-500" />, title: 'Dedicated', desc: 'Full-time WordPress developers for your ongoing projects.' },
    { icon: <ClipboardList className="text-orange-500" />, title: 'Project-Based', desc: 'Complete WordPress website development with defined scope.' },
    { icon: <Wrench className="text-blue-500" />, title: 'Ongoing Maintenance', desc: 'Long-term website maintenance and CMS management.' },
    { icon: <Globe className="text-green-500" />, title: 'Long-Term CMS', desc: 'Continuous WordPress support and content management services.' },
  ];

  return (
    <section className="py-24 bg-[#0B1120] text-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Collaboration Models <span className="text-blue-400">Designed</span> for <span className="text-yellow-400">Flexibility</span>
          </h2>
          <p className="text-xl text-gray-400">We adapt to your workflow and timelines.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {models.map((m, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-[#111827] p-10 rounded-2xl border border-gray-800 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                 {React.isValidElement(m.icon) 
  ? React.cloneElement(m.icon as React.ReactElement<{ size?: number }>, { size: 24 }) 
  : null}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{m.title}</h3>
                <p className="text-gray-400 leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    { icon: <Building2 />, title: 'Corporate websites' },
    { icon: <FileText />, title: 'Content-heavy platforms' },
    { icon: <ShoppingCart />, title: 'E-commerce stores' },
    { icon: <Search />, title: 'SEO-focused marketing' },
    { icon: <Users />, title: 'Membership portals' },
    { icon: <Layout />, title: 'Landing page ecosystems' },
  ];

  return (
    <section className="py-24 bg-white text-dark">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-20">
          Built for <span className="text-gray-400">Marketing, Content &</span> <span className="text-blue-600">Commerce</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="flex items-center gap-6 p-8 bg-[#F8FAFC] rounded-xl border border-gray-100 hover:shadow-md transition-all cursor-default">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600">
               {React.isValidElement(c.icon) 
  ? React.cloneElement(c.icon as React.ReactElement<{ size?: number }>, { size: 24 }) 
  : null}
              </div>
              <span className="text-xl font-bold">{c.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: 'Why hire WordPress developers in India?', a: 'India provides skilled WordPress professionals with global project experience and flexible hiring models. You get access to talented developers who understand international standards while benefiting from cost-effective collaboration.' },
    { q: 'Can you build custom WordPress themes?', a: 'Yes, we specialize in building 100% custom themes from scratch based on your design files (Figma, Adobe XD, etc.) or specific requirements, ensuring unique branding and optimized performance.' },
    { q: 'Do you offer WooCommerce development?', a: 'Absolutely. We build scalable e-commerce stores using WooCommerce, including custom product types, payment gateway integrations, and complex shipping logic.' },
    { q: 'Do you provide ongoing WordPress maintenance?', a: 'Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, regular backups, and content updates to keep your site running smoothly.' },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-dark">
      <div className="max-w-[1000px] mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`text-lg font-bold ${openIndex === i ? 'text-blue-600' : 'text-dark'}`}>{faq.q}</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-blue-600' : 'text-gray-400'}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
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

const CTA = () => (
  <section className="py-24 bg-gradient-to-r from-[#010b24] to-[#010816] text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full" />
    <div className="max-w-[1200px] mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
        Let's Build a Website That Works for You
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
        If you're looking to hire WordPress developers in India who combine technical expertise with strategic thinking, 
        WorkHolo Labs is ready to collaborate. Create a scalable, secure, and high-performing WordPress platform with us.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto bg-[#007BFF] hover:bg-[#0056b3] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all">
          Start Your Project
        </button>
        <button className="w-full sm:w-auto bg-[#00D084] hover:bg-[#00b06f] text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all">
          <MessageCircle size={24} /> Chat on WhatsApp
        </button>
      </div>
    </div>
  </section>
);

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
    <button className="w-14 h-14 bg-[#00D084] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group">
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-white text-dark px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">WhatsApp Us</span>
    </button>
    <button className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group">
      <div className="relative">
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-[10px] flex items-center justify-center rounded-full border-2 border-black">1</span>
      </div>
    </button>
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
    >
      <ChevronUp size={24} />
    </button>
  </div>
);

export default function WordPressDeveloper() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Hero />
      <Stats />
      <Services />
      <CollaborationModels />
      <UseCases />
      <FAQ />
      <CTA />
      <FloatingButtons />
    </div>
  );
}
