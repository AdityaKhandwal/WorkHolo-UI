import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  WifiOff,
  Bell,
  Zap,
  Smartphone,
  DollarSign,
  User,
  ClipboardList,
  Wrench,
  ShoppingCart,
  FileText,
  Cloud,
  Rocket,
  LayoutDashboard,
  Target,
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 bg-dark overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark via-[#0A1A3F] to-dark opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-accent text-sm font-semibold mb-8 tracking-widest"
        >
          ● PWA DEVELOPMENT • INDIA
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight tracking-tight"
        >
          Hire PWA Developers <span className="text-primary">in India</span>
        </motion.h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-primary/20"
          >
            Hire Developers →
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-transparent border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all"
          >
            View Our Work
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '1050+', label: 'Global Clients' },
    { value: '14+', label: 'Years in Tech' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="text-5xl font-black text-dark mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Intro = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium mb-8"
        >
          Progressive Web Applications bridge the gap between websites and mobile apps. They deliver app-like performance directly through the browser — without requiring installation from app stores.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-accent italic font-semibold"
        >
          At WorkHolo Labs, we provide experienced PWA developers in India who build fast, reliable, and engaging progressive web applications designed for reach, performance, and scalability.
        </motion.p>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const features = [
    { icon: <WifiOff className="text-orange-500" />, title: 'Offline Functionality', desc: 'Offline functionality for uninterrupted user experiences.' },
    { icon: <Bell className="text-yellow-500" />, title: 'Push Notifications', desc: 'Push notifications for real-time user engagement.' },
    { icon: <Zap className="text-orange-600" />, title: 'Fast Loading Speeds', desc: 'Fast loading speeds with optimized caching strategies.' },
    { icon: <Smartphone className="text-blue-600" />, title: 'App-Like Interfaces', desc: 'Responsive, app-like interfaces without app store dependency.' },
    { icon: <DollarSign className="text-yellow-600" />, title: 'Reduced Costs', desc: 'Reduced development and maintenance costs compared to native.' },
    { icon: <Globe className="text-blue-500" />, title: 'Cross-Platform', desc: 'Cross-platform compatibility across all modern browsers.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Why Choose <span className="text-accent">Progressive Web Applications</span>?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            PWAs combine the best of web and mobile experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-4">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HiringModels = () => {
  const models = [
    { icon: <User className="text-purple-500" />, title: 'Dedicated Full-Time', desc: 'Dedicated full-time PWA engagement focused on your product.' },
    { icon: <ClipboardList className="text-orange-500" />, title: 'Project-Based PWA', desc: 'Complete project-based PWA development from start to finish.' },
    { icon: <Wrench className="text-gray-500" />, title: 'Frontend Modernization', desc: 'Frontend modernization initiatives for existing applications.' },
    { icon: <Globe className="text-blue-500" />, title: 'Offshore Collaboration', desc: 'Offshore development collaboration with full transparency.' },
  ];

  return (
    <section className="py-24 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible <span className="text-accent">Hiring</span> Models
          </h2>
          <p className="text-gray-400 text-lg">
            Our team adapts to your timeline and product roadmap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{m.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
              <p className="text-gray-400 leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    { icon: <ShoppingCart size={20} />, title: 'E-commerce platforms' },
    { icon: <FileText size={20} />, title: 'Content-driven portals' },
    { icon: <Cloud size={20} />, title: 'SaaS web applications' },
    { icon: <Rocket size={20} />, title: 'On-demand service platforms' },
    { icon: <LayoutDashboard size={20} />, title: 'Enterprise dashboards' },
    { icon: <Target size={20} />, title: 'Customer engagement tools' },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Ideal Use Cases for <span className="text-accent">PWA Development</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                {c.icon}
              </div>
              <span className="font-semibold text-gray-700">{c.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: 'Why hire PWA developers in India?', a: 'India offers skilled web engineers with expertise in modern frontend technologies and progressive web standards.' },
    { q: 'Are PWAs better than native apps?', a: 'PWAs offer cross-platform compatibility, lower development costs, and no app store friction, though native apps may have deeper OS integration.' },
    { q: 'Can PWAs work offline?', a: 'Yes, PWAs use service workers to cache assets and data, allowing them to function even without an internet connection.' },
    { q: 'Do you provide ongoing optimization?', a: 'Absolutely. We offer maintenance and performance tuning to ensure your PWA remains fast and reliable.' },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-6 flex justify-between items-center text-left font-bold text-lg text-dark hover:bg-gray-50 transition-colors"
              >
                <span className={openIdx === idx ? 'text-accent' : ''}>{faq.q}</span>
                {openIdx === idx ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-500 leading-relaxed">
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
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Build Web Applications That Feel <br /> Like Native Apps
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          If you're looking to hire PWA developers in India who understand performance, scalability, and user engagement, WorkHolo Labs is ready to collaborate. Deliver fast, reliable, and app-like web experiences to your users.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all">
            Contact Us Today →
          </button>
          <button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all">
            <MessageCircle size={20} /> WhatsApp →
          </button>
        </div>
      </div>
    </section>
  );
};

const FloatingButtons = () => {
  return (
    <>
      <a 
        href="#" 
        className="fixed right-6 bottom-24 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageCircle size={32} />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      </a>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-6 z-50 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-xl hover:bg-accent/90 transition-all"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

export default function PWADeveloper() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Stats />
        <Intro />
        <WhyChoose />
        <HiringModels />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <FloatingButtons />
    </div>
  );
}
