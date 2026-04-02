import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Cloud,
  Database,
  BarChart3,
  Globe,
  MessageCircle,
  ChevronUp,
  Plus,
  Minus,
  Zap,
  Layers,
  Cpu,
  Rocket,
  Users,
  Briefcase,
  Monitor
} from 'lucide-react';

// --- Constants & Types ---


const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '1050+', label: 'Global Clients' },
  { value: '14+', label: 'Years in Tech' },
  { value: '99%', label: 'Satisfaction Rate' },
];

const WHY_MERN = [
  {
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
    title: 'React-Driven UIs',
    description: 'Build interactive and dynamic user interfaces with React.'
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-500" />,
    title: 'API-First Backend',
    description: 'Robust backend architecture with Express.js.'
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-500" />,
    title: 'Scalable Database',
    description: 'Flexible and scalable data management with MongoDB.'
  },
  {
    icon: <Rocket className="w-6 h-6 text-red-500" />,
    title: 'Rapid MVP',
    description: 'Quick development cycles for rapid market entry.'
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: 'Real-Time Functionality',
    description: 'Seamless real-time features with WebSockets and Node.js.'
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-500" />,
    title: 'Cloud-Ready Deployment',
    description: 'Deploy anywhere with modern cloud infrastructure.'
  }
];

const HIRING_MODELS = [
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: 'Dedicated Developers',
    description: 'Full-time MERN developers committed to your product.'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: 'Team Augmentation',
    description: 'Expand your existing team with skilled MERN engineers.'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-orange-400" />,
    title: 'End-to-End Execution',
    description: 'Complete project delivery from concept to production.'
  },
  {
    icon: <Globe className="w-8 h-8 text-green-400" />,
    title: 'Offshore Partnership',
    description: 'Transparent offshore development partnership with 24/7 support.'
  }
];

const USE_CASES = [
  { icon: <Cloud className="w-5 h-5" />, title: 'SaaS platforms' },
  { icon: <Briefcase className="w-5 h-5" />, title: 'Marketplace applications' },
  { icon: <Monitor className="w-5 h-5" />, title: 'E-learning portals' },
  { icon: <Zap className="w-5 h-5" />, title: 'Real-time tools' },
  { icon: <BarChart3 className="w-5 h-5" />, title: 'Enterprise dashboards' },
  { icon: <Globe className="w-5 h-5" />, title: 'High-traffic web apps' },
];

const FAQS = [
  {
    question: 'Why hire MERN stack developers in India?',
    answer: 'India offers experienced JavaScript engineers with expertise across the MERN ecosystem at competitive rates.'
  },
  {
    question: 'Is MERN stack suitable for enterprise applications?',
    answer: 'Yes, MERN is highly scalable and used by many Fortune 500 companies for its performance and flexibility.'
  },
  {
    question: 'Can MERN handle real-time applications?',
    answer: 'Absolutely. With Node.js and Socket.io, MERN is perfect for real-time features like chat, notifications, and live updates.'
  },
  {
    question: 'Do you provide long-term maintenance?',
    answer: 'Yes, we offer comprehensive post-launch support and maintenance packages to ensure your application stays updated and secure.'
  }
];

// --- Components ---

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#050A18]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8"
        >
          ● MERN STACK DEVELOPMENT · INDIA
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
        >
          Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">MERN Stack</span> Developers in India
        </motion.h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-10 py-4 rounded-full text-white font-bold text-lg transition-all hover:shadow-[0_0_20px_rgba(123,44,191,0.4)]"
            style={{ backgroundColor: '#7B2CBF' }}
          >
            Get Started
          </motion.button>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-10 py-4 rounded-full text-white font-bold text-lg border-2 border-white/20 hover:bg-white/5 transition-all"
          >
            View Portfolio
          </motion.button>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        >
          <MessageCircle size={32} color="white" />
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        >
          <ChevronUp size={24} color="white" />
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            If your goal is to build a modern web product that is fast, flexible, and ready to scale, the MERN stack offers a powerful foundation.
          </p>
          <p className="mt-6 text-blue-600 font-semibold italic text-lg">
            At mTouch Labs, we provide experienced MERN stack developers in India who create high-performance web applications built for real-world growth.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyMERNSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why MERN for <span className="text-blue-600">Modern Digital Products</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_MERN.map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HiringEngagementSection = () => {
  return (
    <section className="py-24 bg-[#050A18] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Flexible <span className="text-blue-400">Hiring Engagement</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {HIRING_MODELS.map((model, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="mb-6">{model.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for Startups and <span className="text-blue-600">Scaling Enterprises</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-8 bg-gray-50 rounded-2xl border border-gray-100"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                {item.icon}
              </div>
              <span className="text-xl font-semibold text-gray-800">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`text-lg font-bold ${activeIndex === idx ? 'text-blue-600' : 'text-gray-800'}`}>
                  {faq.question}
                </span>
                {activeIndex === idx ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
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
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-[#050A18] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
          Build Modern Web Applications with MERN
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          If you're looking to hire MERN stack developers in India who understand modern product engineering and scalable architecture, mTouch Labs is ready to collaborate. Create dynamic, future-ready web applications with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            className="px-10 py-4 rounded-full text-white font-bold text-lg transition-all hover:scale-105"
            style={{ backgroundColor: '#7B2CBF' }}
          >
            Start Your Project
          </button>
          <button 
            className="px-10 py-4 rounded-full text-white font-bold text-lg border-2 border-green-500 bg-green-500/10 hover:bg-green-500/20 transition-all flex items-center justify-center gap-2"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default function MERNStackDeveloper() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-500/30">
      <Hero />
      <StatsSection />
      <WhyMERNSection />
      <HiringEngagementSection />
      <UseCasesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
