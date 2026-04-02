import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown,  
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Settings, 
  Cpu, 
  Link, 
  Zap, 
  Database, 
  BarChart3, 
  MessageCircle, 
  Plus, 
  Minus,
} from 'lucide-react';

// --- Constants & Data ---

const PRIMARY_PURPLE = '#7B2CBF'; // As requested in prompt

const stats = [
  { label: 'Projects Delivered', value: '500+', icon: CheckCircle2 },
  { label: 'Global Clients', value: '1050+', icon: Globe },
  { label: 'Years in Tech', value: '14+', icon: Zap },
  { label: 'Satisfaction Rate', value: '99%', icon: Users },
];

const growthEngineCards = [
  { title: 'Custom Workflows', description: 'Customize Salesforce to match your business workflows.', icon: Settings },
  { title: 'Process Automation', description: 'Automate sales and marketing processes for efficiency.', icon: Cpu },
  { title: 'API Integrations', description: 'Integrate third-party systems and APIs seamlessly.', icon: Link },
  { title: 'Lightning Components', description: 'Build custom Lightning components for enhanced UX.', icon: Zap },
  { title: 'Scalable Data Models', description: 'Implement scalable data models for growing organizations.', icon: Database },
  { title: 'Reporting & Dashboards', description: 'Optimize reporting and dashboards for actionable insights.', icon: BarChart3 },
];

const engagementModels = [
  { title: 'Dedicated Salesforce Dev', description: 'Full-time Salesforce developer focused on your CRM.', icon: Users },
  { title: 'CRM Implementation', description: 'Complete CRM implementation projects from start to finish.', icon: Database },
  { title: 'Ongoing Optimization', description: 'Ongoing support and optimization for your Salesforce platform.', icon: Settings },
  { title: 'Offshore Development', description: 'Offshore Salesforce development with transparent communication.', icon: Globe },
];

const enterpriseCards = [
  { title: 'CRM implementation', icon: Database },
  { title: 'Sales process automation', icon: Cpu },
  { title: 'Customer support optimization', icon: Users },
  { title: 'Enterprise system integration', icon: Link },
  { title: 'Revenue forecasting systems', icon: BarChart3 },
  { title: 'Business outcome alignment', icon: CheckCircle2 },
];

const faqs = [
  { 
    question: 'Why hire Salesforce developers in India?', 
    answer: 'India offers experienced Salesforce professionals with strong CRM expertise and flexible hiring models.' 
  },
  { 
    question: 'Can you customize Salesforce for my business?', 
    answer: 'Yes, we specialize in tailoring Salesforce to meet unique business requirements and workflows.' 
  },
  { 
    question: 'Do you provide Salesforce integration services?', 
    answer: 'Absolutely. We integrate Salesforce with various third-party systems and APIs for a unified data experience.' 
  },
  { 
    question: 'Do you offer long-term CRM support?', 
    answer: 'Yes, we provide ongoing support and maintenance to ensure your CRM continues to perform optimally.' 
  },
];

const globalPresence = [
  { region: 'INDIA', cities: ['Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Kochi'] },
  { region: 'AMERICAS', cities: ['United States', 'Canada'] },
  { region: 'EUROPE', cities: ['United Kingdom', 'Germany', 'Ireland'] },
  { region: 'ASIA PACIFIC', cities: ['Singapore', 'Australia', 'New Zealand', 'India'] },
  { region: 'MIDDLE EAST', cities: ['UAE', 'Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait'] },
];

// --- Components ---

const Hero = () => (
  <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-[#050a15]">
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
      >
        <Globe className="w-3 h-3" /> Salesforce Development • India
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1] font-display"
      >
        Hire Salesforce <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Developers in India</span>
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12"
      >
        <button 
          className="w-full md:w-auto px-10 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 transition-all hover:scale-105 active:scale-95"
          style={{ background: PRIMARY_PURPLE }}
        >
          Hire Developers <ArrowRight className="w-5 h-5" />
        </button>
        <button className="w-full md:w-auto px-10 py-4 rounded-full text-white font-bold text-lg border border-gray-700 bg-gray-900/50 backdrop-blur-sm transition-all hover:bg-gray-800 hover:border-gray-600">
          View Our Work
        </button>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-[#050a15] py-20 border-y border-gray-800/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</span>
            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const IntroText = () => (
  <section className="bg-[#050a15] py-24 lg:py-32">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 leading-relaxed"
      >
        Salesforce is more than a CRM platform — it's the backbone of modern sales, marketing, and customer engagement strategies. To unlock its full potential, businesses need experienced developers who understand customization, automation, and seamless integrations.
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-blue-400 font-semibold mt-12 italic"
      >
        At mTouch Labs, we provide skilled Salesforce developers in India who help organizations streamline processes, improve visibility, and drive measurable growth.
      </motion.p>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 lg:mb-24">
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight font-display ${light ? 'text-white' : 'text-[#050a15]'}`}>
      {title.split(' ').map((word, i) => (
        <span key={i} className={['Growth', 'Engagement', 'Enterprises', 'Smarter', 'CRM'].includes(word) ? 'text-blue-500' : ''}>
          {word}{' '}
        </span>
      ))}
    </h2>
    {subtitle && <p className={`text-lg md:text-xl max-w-2xl mx-auto ${light ? 'text-gray-400' : 'text-gray-600'}`}>{subtitle}</p>}
  </div>
);

const GrowthEngine = () => (
  <section className="bg-white py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Turn Your CRM into a Growth Engine" subtitle="We ensure your CRM supports strategic decision-making." />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {growthEngineCards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <card.icon className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const EngagementModels = () => (
  <section className="bg-[#050a15] py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Flexible Engagement Models" subtitle="Our approach ensures transparency and long-term collaboration." light />
      
      <div className="grid md:grid-cols-2 gap-8">
        {engagementModels.map((model, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-12 rounded-[40px] bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-10">
              <model.icon className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6">{model.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed">{model.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Enterprises = () => (
  <section className="bg-white py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Designed for Enterprises & Growing Businesses" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enterpriseCards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 3 === 0 ? -20 : idx % 3 === 2 ? 20 : 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="flex items-center gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <card.icon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-lg font-bold text-gray-800">{card.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" />
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all hover:border-blue-200">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className={`text-lg font-bold ${openIdx === idx ? 'text-blue-600' : 'text-gray-900'}`}>{faq.question}</span>
                {openIdx === idx ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-8"
                  >
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
  <section className="bg-[#050a15] py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
    
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight font-display">Build a <span className="text-blue-500">Smarter CRM</span> Strategy</h2>
      <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        If you're looking to hire Salesforce developers in India who understand CRM strategy and enterprise workflows, mTouch Labs is ready to collaborate. Transform your Salesforce platform into a scalable growth engine.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button 
          className="w-full sm:w-auto px-12 py-5 rounded-full text-white font-bold text-xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-900/20"
          style={{ background: PRIMARY_PURPLE }}
        >
          Contact Us Today <ArrowRight className="w-6 h-6" />
        </button>
        <button className="w-full sm:w-auto px-12 py-5 rounded-full text-white font-bold text-xl bg-[#25D366] flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95">
          <MessageCircle className="w-6 h-6" /> WhatsApp
        </button>
      </div>
    </div>
  </section>
);

const GlobalPresence = () => (
  <section className="bg-[#050a15] py-24 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-16">
        <Globe className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Global Presence</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {globalPresence.map((region, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <h3 className="text-blue-400 text-xs font-black uppercase tracking-widest">{region.region}</h3>
            </div>
            <ul className="space-y-4">
              {region.cities.map((city, cIdx) => (
                <li key={cIdx} className="text-gray-400 hover:text-white transition-colors cursor-default">{city}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const FloatingWhatsApp = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-16 h-16 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center text-white relative group"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Chat with us
      </span>
    </motion.button>
    
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 rounded-full bg-blue-600 shadow-2xl flex items-center justify-center text-white"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ChevronDown className="w-6 h-6 rotate-180" />
    </motion.button>
  </div>
);

export default function SalesForceDeveloper() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500 selection:text-white">
      
      <main>
        <Hero />
        <Stats />
        <IntroText />
        <GrowthEngine />
        <EngagementModels />
        <Enterprises />
        <FAQ />
        <CTA />
        <GlobalPresence />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
