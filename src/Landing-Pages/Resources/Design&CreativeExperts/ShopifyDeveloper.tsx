import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  MessageCircle, 
  Palette, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  Zap, 
  BarChart, 
  User, 
  Rocket, 
  Settings, 
  Users,
  Store,
  Globe2,
  Package,
  Award
} from 'lucide-react';

const ShopifyDeveloper = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why hire Shopify developers in India?",
      answer: "India offers experienced Shopify professionals with flexible hiring models and competitive engagement costs."
    },
    {
      question: "Can you customize Shopify themes?",
      answer: "Yes, we specialize in creating custom Shopify themes from scratch or modifying existing ones to match your brand identity perfectly."
    },
    {
      question: "Do you support Shopify Plus?",
      answer: "Absolutely. We have extensive experience working with Shopify Plus for enterprise-level businesses, handling high traffic and complex integrations."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide comprehensive post-launch support and maintenance to ensure your store continues to perform at its best."
    }
  ];

  const stats = [
    { label: "Projects Delivered", value: "500+" },
    { label: "Global Clients", value: "1050+" },
    { label: "Years in Tech", value: "14+" },
    { label: "Satisfaction Rate", value: "99%" }
  ];

  const buildStores = [
    { title: "Custom Themes", desc: "Customize themes for brand consistency and visual impact.", icon: Palette },
    { title: "Checkout Optimization", desc: "Optimize product and checkout flows for higher conversions.", icon: ShoppingCart },
    { title: "Payment Integration", desc: "Integrate secure payment gateways for seamless transactions.", icon: CreditCard },
    { title: "Shipping Configuration", desc: "Configure advanced shipping rules for global operations.", icon: Truck },
    { title: "Conversion-Focused UI", desc: "Implement conversion-focused UI for maximum sales impact.", icon: BarChart },
    { title: "Speed Optimization", desc: "Enhance store speed and performance for better user experience.", icon: Zap }
  ];

  const hiringEngagement = [
    { title: "Dedicated Shopify Devs", desc: "Full-time Shopify developers focused on your store.", icon: User },
    { title: "Store Setup & Launch", desc: "Complete store setup and launch projects from start to finish.", icon: Rocket },
    { title: "Ongoing Optimization", desc: "Ongoing optimization support for performance and conversions.", icon: Settings },
    { title: "Offshore Collaboration", desc: "Offshore development collaboration with transparent processes.", icon: Users }
  ];

  const idealFor = [
    { title: "D2C brands", icon: Package },
    { title: "Retail businesses expanding online", icon: Store },
    { title: "Subscription-based commerce", icon: Zap },
    { title: "Multi-product catalogs", icon: BarChart },
    { title: "International eCommerce operations", icon: Globe2 },
    { title: "Shopify Plus enterprise stores", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-black selection:bg-primary selection:text-white">
      {/* Top Bar */}

      {/* Navbar */}

      {/* Hero Section */}
      <section className="gradient-bg text-white py-[200px] px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
        
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight"
          >
             <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Hire Shopify Developers in India</span> 
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Shopify has become one of the most trusted platforms for launching and scaling online stores. Its flexibility, speed, and robust ecosystem make it ideal for businesses that want to focus on growth while maintaining technical reliability.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="w-full sm:w-auto bg-primary hover:bg-[#6A25A5] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all purple-glow group">
              Hire Developers
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto border-2 border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
              View Our Work
            </button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20 px-4 md:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-5xl font-black text-dark mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Stores Section */}
      <section className="bg-gray-50 py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">
              Build Stores <span className="text-primary">Designed for Sales</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every element is designed to support revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildStores.map((item, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                  <item.icon className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Engagement Section */}
      <section className="bg-darker text-white py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Flexible <span className="text-yellow-500">Hiring</span> Engagement
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Scale your store confidently as demand increases.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {hiringEngagement.map((item, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                viewport={{ once: true }}
                className="glass-card p-10 rounded-[32px] flex items-start space-x-6 hover:bg-white/5 transition-colors"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="bg-white py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">
              Ideal for <span className="text-primary">Growing Online Businesses</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {idealFor.map((item, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 p-8 rounded-2xl flex items-center space-x-6 hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <span className="text-lg font-bold text-dark">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24 px-4 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className={`text-lg font-bold ${activeFaq === idx ? 'text-secondary' : 'text-dark'}`}>
                    {faq.question}
                  </span>
                  {activeFaq === idx ? <ChevronUp className="w-5 h-5 text-secondary" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Section */}
      <section className="gradient-bg text-white py-24 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Launch and Scale with Shopify
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            If you're looking to hire Shopify developers in India who understand eCommerce strategy and technical customization, WorkHolo Labs is ready to collaborate. Build a secure, scalable, and high-converting online store with confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto bg-primary hover:bg-[#6A25A5] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all purple-glow">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Floating WhatsApp Button */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform group"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
      </a>
    </div>
  );
};

export default ShopifyDeveloper;
