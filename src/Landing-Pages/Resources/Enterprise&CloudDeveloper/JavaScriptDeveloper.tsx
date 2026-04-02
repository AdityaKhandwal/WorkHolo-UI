import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  Phone, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  MessageCircle, 
  Layout, 
  Server, 
  Cloud, 
  Cpu, 
  Users, 
  Briefcase, 
  Palette,
  Zap,
  Layers,
} from 'lucide-react';

// Custom colors based on user request and screenshots

const FAQ_DATA = [
  {
    question: "Why hire JavaScript developers in India?",
    answer: "India offers skilled JavaScript engineers with strong experience across frontend and backend technologies at competitive costs. The talent pool is vast, and developers are well-versed in modern frameworks like React, Angular, and Vue."
  },
  {
    question: "Can JavaScript handle enterprise-scale applications?",
    answer: "Yes, JavaScript (especially with Node.js and TypeScript) is widely used for enterprise-scale applications due to its non-blocking I/O, scalability, and massive ecosystem of libraries."
  },
  {
    question: "Do you build full-stack JavaScript applications?",
    answer: "Absolutely. We specialize in the entire MERN/MEAN stack, providing end-to-end development from responsive frontends to robust backend architectures."
  },
  {
    question: "Do you provide long-term support?",
    answer: "Yes, we offer various maintenance and support models to ensure your application remains up-to-date, secure, and performant long after the initial launch."
  }
];

const EXPERTISE_DATA = [
  { title: "React, Angular, and Vue", icon: <Layout className="w-6 h-6 text-purple-400" />, bg: "bg-purple-900/20" },
  { title: "Node.js backend development", icon: <Server className="w-6 h-6 text-green-400" />, bg: "bg-green-900/20" },
  { title: "Next.js and server-side rendering", icon: <Zap className="w-6 h-6 text-blue-400" />, bg: "bg-blue-900/20" },
  { title: "REST & GraphQL integrations", icon: <Layers className="w-6 h-6 text-pink-400" />, bg: "bg-pink-900/20" },
  { title: "Cloud-native deployment", icon: <Cloud className="w-6 h-6 text-cyan-400" />, bg: "bg-cyan-900/20" },
  { title: "Microservices architecture", icon: <Cpu className="w-6 h-6 text-orange-400" />, bg: "bg-orange-900/20" },
];

const HIRING_MODELS = [
  { title: "Dedicated Developers", desc: "Full-time dedicated JavaScript developers for your projects.", icon: <Users className="w-8 h-8 text-purple-500" /> },
  { title: "Project-Based", desc: "Project-based engagement for defined deliverables.", icon: <Briefcase className="w-8 h-8 text-blue-500" /> },
  { title: "Team Extension", desc: "Scale your existing team with our expert developers.", icon: <Users className="w-8 h-8 text-green-500" /> },
  { title: "Offshore Collaboration", desc: "Seamless offshore development center setup.", icon: <Globe className="w-8 h-8 text-cyan-500" /> },
];

const FRONTEND_SERVICES = [
  { title: "Interactive UIs", desc: "Interactive user interfaces that engage and convert users.", icon: <Palette className="w-8 h-8 text-pink-500" /> },
  { title: "Real-Time Apps", desc: "Real-time web applications with live data updates.", icon: <Zap className="w-8 h-8 text-orange-500" /> },
  { title: "API-Driven Backend", desc: "API-driven backend systems for scalable architectures.", icon: <Server className="w-8 h-8 text-blue-500" /> },
];

export default function JavaScriptDeveloper() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E14] text-white font-sans selection:bg-purple-500/30">
      {/* Top Bar */}
      <div className="bg-black border-b border-gray-800 py-2 px-4 hidden md:block">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center text-[13px] text-gray-400">
          <div className="flex items-center gap-6">
            <a href="mailto:contact@WorkHololabs.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} /> contact@WorkHololabs.com
            </a>
            <a href="tel:+919390683154" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +91 9390683154
            </a>
            <a href="tel:+15512220070" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} /> +1 (551) 222-0070
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-yellow-500 font-medium">NASSCOM SME Inspire Awards 2026 🏆</span>
            <div className="flex items-center gap-4">
              <span>Hyderabad</span>
              <span className="text-gray-600">|</span>
              <span>Bangalore</span>
              <span className="text-gray-600">|</span>
              <span>USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-black py-5'} border-b border-gray-800/50`}>
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">WorkHolo Labs</h1>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-[8px] text-black font-bold">ISO</div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">Company</span>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium">
            {['Home', 'Services', 'Products', 'Resources', 'Portfolio', 'Careers', 'Contact Us'].map((item) => (
              <a key={item} href="#" className="hover:text-purple-500 transition-colors flex items-center gap-1">
                {item} {['Home', 'Services', 'Products', 'Resources'].includes(item) && <ChevronDown size={14} />}
              </a>
            ))}
          </nav>

          <button className="bg-[#3B82F6] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
            Request Quote <ArrowRight size={16} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-blue-900/20 to-transparent">
        <div className="max-w-[1920px] mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
          >
            JAVASCRIPT DEVELOPMENT • INDIA
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            Hire <span className="text-yellow-500">JavaScript Developers</span> in India
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <button className="bg-[#7B2CBF] hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all shadow-xl shadow-purple-500/20">
              Hire Developers <ArrowRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-gray-700 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
              View Our Work
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-4xl mx-auto text-xl text-gray-400 leading-relaxed"
          >
            JavaScript powers today's most interactive digital experiences. From responsive web interfaces to scalable backend systems and cross-platform mobile apps, it remains one of the most versatile technologies in modern development.
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full -z-10"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-gray-800/50 bg-black/20">
        <div className="max-w-[1920px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Delivered", value: "500+" },
              { label: "Global Clients", value: "1050+" },
              { label: "Years in Tech", value: "14+" },
              { label: "Satisfaction Rate", value: "99%" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Build with Power Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1920px] mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Build with the Power of JavaScript
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed"
          >
            If you're looking to hire JavaScript developers in India who combine technical expertise with strategic thinking, WorkHolo Labs is ready to collaborate. Create scalable, dynamic applications built for performance and growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-[#3B82F6] hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all shadow-xl shadow-blue-500/20">
              Contact Us Today <ArrowRight size={20} />
            </button>
            <button className="bg-[#22C55E] hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all shadow-xl shadow-green-500/20">
              WhatsApp <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* More Than Just Frontend Section */}
      <section className="py-24 bg-[#0A0E14]">
        <div className="max-w-[1920px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">More Than Just <span className="text-blue-500">Frontend Development</span></h2>
            <p className="text-xl text-gray-400">We align development strategy with long-term scalability.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FRONTEND_SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-[#111827] p-10 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="mb-6 p-4 bg-gray-800/50 rounded-2xl inline-block group-hover:bg-blue-500/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Hiring Models Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1920px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Flexible <span className="text-blue-500">Hiring</span> Models</h2>
            <p className="text-xl text-gray-400">Our approach is transparent, agile, and aligned with your roadmap.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIRING_MODELS.map((model, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-3xl border ${idx === 1 ? 'border-blue-500 bg-blue-900/10' : 'border-gray-800 bg-[#111827]'} transition-all`}
              >
                <div className="mb-6">{model.icon}</div>
                <h3 className="text-xl font-bold mb-3">{model.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-[#0A0E14]">
        <div className="max-w-[1920px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Expertise Across the <span className="text-blue-500">JavaScript Ecosystem</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_DATA.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 bg-[#111827] rounded-2xl border border-gray-800 hover:border-gray-700 transition-all"
              >
                <div className={`p-4 rounded-xl ${item.bg}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <div key={idx} className="border border-gray-800 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className={`w-full flex justify-between items-center p-6 text-left transition-colors ${activeFaq === idx ? 'bg-blue-500/10 text-blue-400' : 'hover:bg-gray-800'}`}
                >
                  <span className="text-lg font-bold">{faq.question}</span>
                  {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-gray-900/50"
                    >
                      <div className="p-6 text-gray-400 leading-relaxed border-t border-gray-800">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-[#0A0E14] border-t border-gray-800">
        <div className="max-w-[1920px] mx-auto px-4">
          <div className="flex items-center gap-3 mb-16">
            <Globe className="text-blue-500 w-8 h-8" />
            <h2 className="text-3xl font-bold">Global Presence</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {[
              { title: "INDIA", items: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"], color: "text-blue-500" },
              { title: "AMERICAS", items: ["United States", "Canada"], color: "text-blue-500" },
              { title: "EUROPE", items: ["United Kingdom", "Germany", "Ireland"], color: "text-blue-500" },
              { title: "ASIA PACIFIC", items: ["Singapore", "Australia", "New Zealand", "India"], color: "text-blue-500" },
              { title: "MIDDLE EAST", items: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"], color: "text-blue-500" },
            ].map((region, idx) => (
              <div key={idx}>
                <h3 className={`text-sm font-bold mb-8 flex items-center gap-2 ${region.color}`}>
                  <div className="w-2 h-2 rounded-full bg-current"></div> {region.title}
                </h3>
                <ul className="space-y-4">
                  {region.items.map((city) => (
                    <li key={city} className="text-gray-400 hover:text-white transition-colors cursor-pointer">{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 relative group"
        >
          <MessageCircle className="text-white w-8 h-8" />
          <div className="absolute -left-2 top-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Chat with us
          </span>
        </motion.button>
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-xl"
        >
          <ChevronUp className="text-white" />
        </motion.button>
      </div>
    </div>
  );
}
