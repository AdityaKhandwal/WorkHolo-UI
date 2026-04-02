import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronRight, 
  ChevronDown, 
  MessageCircle, 
  Users, 
  Briefcase, 
  Settings, 
  Handshake,
  Palette,
  Box,
  ShoppingCart,
  TrendingUp,
  RefreshCw,
  Globe2,
  ArrowUp
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0A0F1C]">
      {/* Background Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold mb-8"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          WOOCOMMERCE DEVELOPMENT • INDIA
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
        >
          Hire WooCommerce <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Developers in India</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <button className="w-full sm:w-auto bg-brand-purple hover:opacity-90 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-purple/25">
            Hire Developers <ChevronRight size={20} />
          </button>
          <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all">
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Projects Delivered', value: '500+' },
    { label: 'Global Clients', value: '1050+' },
    { label: 'Years in Tech', value: '14+' },
    { label: 'Satisfaction Rate', value: '99%' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            WooCommerce combines the flexibility of WordPress with the power of a fully customizable eCommerce engine. For businesses that want control over design, functionality, and marketing integration, WooCommerce offers unmatched adaptability.
          </p>
          <p className="mt-8 text-blue-600 font-semibold italic text-lg">
            At mTouch Labs, we provide experienced WooCommerce developers in India who build secure, scalable, and performance-driven online stores designed to grow with your brand.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-[#0A0F1C] mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Palette className="text-pink-400" />, title: 'Full Design Flexibility', desc: 'Full design flexibility for unique brand experiences.' },
    { icon: <Box className="text-orange-400" />, title: 'Advanced Products', desc: 'Advanced product configurations for complex catalogs.' },
    { icon: <ShoppingCart className="text-blue-400" />, title: 'Custom Checkout', desc: 'Custom checkout experiences optimized for conversions.' },
    { icon: <TrendingUp className="text-indigo-400" />, title: 'Marketing & SEO', desc: 'Marketing and SEO integrations for organic growth.' },
    { icon: <RefreshCw className="text-blue-500" />, title: 'Subscriptions', desc: 'Subscription and membership models for recurring revenue.' },
    { icon: <Globe2 className="text-green-400" />, title: 'Multi-Currency Support', desc: 'Multi-currency and international support for global sales.' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] mb-4">
            eCommerce <span className="text-blue-600">Without Limitations</span>
          </h2>
          <p className="text-xl text-gray-600">Our developers tailor every feature to match your sales strategy.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0A0F1C] mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EngagementModels = () => {
  const models = [
    { icon: <Users className="text-purple-400" />, title: 'Dedicated Developers', desc: 'Dedicated WooCommerce developers focused on your store.' },
    { icon: <Briefcase className="text-orange-400" />, title: 'Project-Based', desc: 'Project-based store development from concept to launch.' },
    { icon: <Settings className="text-blue-400" />, title: 'Ongoing Maintenance', desc: 'Ongoing maintenance and optimization for peak performance.' },
    { icon: <Handshake className="text-green-400" />, title: 'Technical Partnership', desc: 'Long-term technical partnership with transparent processes.' },
  ];

  return (
    <section className="py-24 bg-[#0A0F1C] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Engagement Models That <span className="text-blue-400">Fit Your Needs</span>
          </h2>
          <p className="text-xl text-gray-400">Scale your commerce capabilities as your business expands.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((m, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              viewport={{ once: true }}
              className="bg-[#151B2B] p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="mb-6">{m.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{m.title}</h3>
              <p className="text-gray-400 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PerfectFor = () => {
  const items = [
    { icon: '🏪', title: 'Small to mid-sized retail businesses' },
    { icon: '📝', title: 'Content-driven commerce brands' },
    { icon: '🔄', title: 'Subscription-based businesses' },
    { icon: '🛠️', title: 'Service-based online sales' },
    { icon: '🏷️', title: 'Niche product marketplaces' },
    { icon: '🔌', title: 'Custom plugin development' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C]">
            Perfect for <span className="text-blue-600">Growing Brands</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all cursor-default"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="font-semibold text-[#0A0F1C]">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: 'Why hire WooCommerce developers in India?', a: 'India offers experienced WooCommerce professionals with flexible engagement models and strong technical expertise.' },
    { q: 'Is WooCommerce suitable for large-scale stores?', a: 'Yes, with proper optimization and scaling strategies, WooCommerce can handle thousands of products and high traffic volumes.' },
    { q: 'Can you customize WooCommerce plugins?', a: 'Absolutely. Our developers specialize in creating custom plugins and extending existing ones to meet your specific business needs.' },
    { q: 'Do you offer store maintenance services?', a: 'Yes, we provide comprehensive maintenance, security updates, and performance optimization services to keep your store running smoothly.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-all"
              >
                <span className="text-xl font-bold text-blue-600">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
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

const CTA = () => {
  return (
    <section className="py-24 bg-[#0A0F1C] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Build a Store That Converts and Scales</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          If you're looking to hire WooCommerce developers in India who understand both technology and online sales strategy, mTouch Labs is ready to collaborate. Create a flexible and scalable eCommerce store built for long-term growth.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-brand-purple hover:opacity-90 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-purple/20">
            Contact Us Today <ChevronRight size={20} />
          </button>
          <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
            WhatsApp <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const FloatingIcons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl cursor-pointer relative group"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
        <MessageCircle size={32} className="text-white" />
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
      >
        <ArrowUp size={24} className="text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </motion.div>

      <div className="relative">
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white">1</div>
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-2xl cursor-pointer">
          <MessageCircle size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default function WooCommerceDeveloper() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <Features />
      <EngagementModels />
      <PerfectFor />
      <FAQ />
      <CTA />
      <FloatingIcons />
    </div>
  );
}
