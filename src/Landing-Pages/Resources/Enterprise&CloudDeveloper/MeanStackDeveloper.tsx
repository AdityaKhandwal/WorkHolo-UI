import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  Database, 
  Server, 
  Layout, 
  Code, 
  Globe, 
  Cloud, 
  Users, 
  UserCheck, 
  FileText, 
  ShoppingCart,
  BarChart3,
  Layers,
  Zap,
} from 'lucide-react';

// --- Constants & Types ---

const PRIMARY_PURPLE = '#7B2CBF';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Why hire MEAN stack developers in India?",
    answer: "India offers experienced JavaScript engineers with expertise across the full MEAN ecosystem at competitive pricing. Our developers are proficient in MongoDB, Express.js, Angular, and Node.js, ensuring seamless full-stack development."
  },
  {
    question: "Is MEAN stack suitable for enterprise applications?",
    answer: "Yes, the MEAN stack is highly scalable and robust, making it ideal for large-scale enterprise applications that require high performance and real-time capabilities."
  },
  {
    question: "Can MEAN handle real-time applications?",
    answer: "Absolutely. With Node.js at its core, the MEAN stack is perfect for real-time applications like chat systems, collaboration tools, and live dashboards."
  },
  {
    question: "Do you provide long-term maintenance?",
    answer: "Yes, we offer comprehensive post-development support and maintenance services to ensure your application remains up-to-date and performs optimally."
  }
];

const STATS = [
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Global Clients', value: '1050+' },
  { label: 'Years in Tech', value: '14+' },
  { label: 'Satisfaction Rate', value: '99%' },
];

const WHY_CHOOSE = [
  { title: 'MongoDB', desc: 'Flexible database management', icon: Database },
  { title: 'Express.js', desc: 'Backend framework support', icon: Server },
  { title: 'Angular', desc: 'Structured frontend development', icon: Layout },
  { title: 'Node.js', desc: 'Scalable server-side execution', icon: Zap },
  { title: 'RESTful & GraphQL APIs', desc: 'API-first architecture', icon: Code },
  { title: 'Cloud-Native Deployment', desc: 'Scalable cloud infrastructure', icon: Cloud },
];

const HIRING_MODELS = [
  { title: 'Dedicated Developer', desc: 'Full-time MEAN stack developer for your project.', icon: UserCheck },
  { title: 'Team Augmentation', desc: 'Augment your team with skilled MEAN engineers.', icon: Users },
  { title: 'End-to-End Project', desc: 'Complete project lifecycle management from start to finish.', icon: FileText },
  { title: 'Offshore Support', desc: 'Reliable offshore development and support services.', icon: Globe },
];

const APPLICATIONS = [
  { title: 'SaaS platforms', icon: Cloud },
  { title: 'Real-time collaboration tools', icon: Users },
  { title: 'Enterprise dashboards', icon: BarChart3 },
  { title: 'E-commerce systems', icon: ShoppingCart },
  { title: 'Data-intensive applications', icon: Layers },
  { title: 'API-first web platforms', icon: Code },
];

// --- Components ---


const Hero = ({ title, subtitle, buttons }: { title: string, subtitle: string, buttons: React.ReactNode }) => (
  <section className="relative bg-gradient-to-b from-[#0A192F] to-[#050A15] py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block bg-blue-900/30 border border-blue-500/30 rounded-full px-4 py-1 mb-8"
      >
        <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{subtitle}</span>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
      >
        {title.split('MEAN').map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && <span className="text-blue-500">MEAN Stack</span>}
          </React.Fragment>
        ))}
      </motion.h1>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
        {buttons}
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="bg-[#050A15] py-20 border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
          When speed, scalability, and real-time functionality matter, the MEAN stack offers a powerful and streamlined development approach. Built entirely on JavaScript technologies, MEAN enables seamless communication between frontend and backend layers.
        </p>
        <p className="text-blue-400 font-medium italic text-lg">
          At mTouch Labs, we provide skilled MEAN stack developers in India who build dynamic, high-performance web applications engineered for modern digital products.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-gray-400 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SectionTitle = ({ title, highlight, subtitle }: { title: string, highlight?: string, subtitle?: string }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
      {title} <span className="text-blue-500">{highlight}</span>
    </h2>
    {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
  </div>
);

const WhyChooseSection = () => (
  <section className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-4">
      <SectionTitle 
        title="Why Choose the" 
        highlight="MEAN Stack?" 
        subtitle="A unified JavaScript ecosystem that simplifies development."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WHY_CHOOSE.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm transition-all"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
              <item.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HiringModelsSection = () => (
  <section className="bg-[#050A15] py-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Flexible <span className="text-blue-500">Hiring</span> <span className="text-yellow-500">Models</span>
        </h2>
        <p className="text-gray-400 text-lg">We align our workflow with your project roadmap.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {HIRING_MODELS.map((model, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-10 rounded-2xl border ${i === 1 ? 'border-blue-500 bg-blue-900/10' : 'border-gray-800 bg-gray-900/40'} transition-all`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${i === 1 ? 'text-blue-400' : 'text-purple-400'}`}>
              <model.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{model.title}</h3>
            <p className="text-gray-400 text-lg">{model.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ApplicationsSection = () => (
  <section className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-16">
        Built for Real-Time & <span className="text-blue-500">Data-Driven Applications</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {APPLICATIONS.map((app, i) => (
          <div key={i} className="flex items-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mr-4 text-blue-500 group-hover:scale-110 transition-transform">
              <app.icon size={24} />
            </div>
            <span className="text-lg font-semibold text-gray-800">{app.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`text-lg font-bold ${openIndex === i ? 'text-blue-600' : 'text-gray-900'}`}>{faq.question}</span>
                {openIndex === i ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
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

const FloatingActions = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all"
    >
      <MessageCircle size={30} fill="white" />
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all"
    >
      <ChevronUp size={24} />
    </motion.button>
  </div>
);

// --- Main App ---

export default function MeanStackDeveloper() {
  return (
    <div className="min-h-screen bg-[#050A15] font-sans selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <Hero 
        title="Hire MEAN Stack Developers in India"
        subtitle="MEAN STACK DEVELOPMENT - INDIA"
        buttons={
          <>
            <button 
              style={{ backgroundColor: PRIMARY_PURPLE }}
              className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold text-lg shadow-xl shadow-purple-900/20 hover:opacity-90 transition-all active:scale-95"
            >
              Get Started
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold text-lg border border-gray-700 hover:bg-white/5 transition-all active:scale-95">
              View Portfolio
            </button>
          </>
        }
      />

      <StatsSection />
      
      <WhyChooseSection />
      
      <HiringModelsSection />

      <ApplicationsSection />

      {/* Second Hero Section */}
      <Hero 
        title="Build Scalable Web Platforms with MEAN"
        subtitle="Unified Architecture"
        buttons={
          <>
            <button 
              style={{ backgroundColor: PRIMARY_PURPLE }}
              className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold text-lg shadow-xl shadow-purple-900/20 hover:opacity-90 transition-all active:scale-95"
            >
              Start Your Project
            </button>
            <button className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold text-lg bg-[#22C55E] hover:bg-[#1ea34d] transition-all active:scale-95 flex items-center justify-center">
              <MessageCircle size={20} className="mr-2" /> Chat on WhatsApp
            </button>
          </>
        }
      />
      <FAQSection />
      <FloatingActions />
    </div>
  );
}
