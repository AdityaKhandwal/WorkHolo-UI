import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { 
  ChevronDown, ChevronRight, Globe, MessageCircle, Smartphone, 
  Layers, Database, Cloud, Lock, Briefcase, Users, UserPlus, Zap, ArrowUp 
} from 'lucide-react';

const Hero = () => (
  <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#05070A]">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 font-sans font-semibold text-xs uppercase tracking-widest mb-8">
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div> SWIFT DEVELOPMENT · INDIA
    </motion.div>
    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight max-w-5xl leading-[1.1] mb-8">
      Hire Swift Developers in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">India</span>
    </motion.h1>
    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/60 font-sans max-w-2xl leading-relaxed mb-12">
      Scale your iOS team with top-tier Swift engineers. We provide dedicated developers who specialize in building high-performance, secure, and scalable Apple ecosystem applications.
    </motion.p>
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center gap-4">
      <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-sans font-bold text-lg transition-all flex items-center justify-center gap-2 group">
        Hire Developers <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-full font-sans font-bold text-lg transition-all">View Our Work</button>
    </motion.div>
  </section>
);

const Stats = () => (
  <section className="bg-white py-24">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-blue-600 font-sans font-bold text-lg leading-relaxed">Swift has become the foundation of modern iOS application development. Designed for performance, safety, and clarity, Swift enables businesses to build refined, high-performing applications.</p>
          <p className="text-gray-500 font-sans text-xl leading-relaxed italic">"At mTouch Labs, we offer experienced Swift developers in India who craft robust iOS applications engineered for speed, stability, and seamless user experience."</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {[{ label: 'Projects Delivered', value: '500+' }, { label: 'Global Clients', value: '1050+' }, { label: 'Years in Tech', value: '14+' }, { label: 'Satisfaction Rate', value: '99%' }].map((stat) => (
            <div key={stat.label} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-5xl font-display font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 font-sans font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Capabilities = () => (
  <section className="bg-gray-50 py-24">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight mb-4">Swift Development <span className="text-blue-600">Capabilities</span></h2>
        <p className="text-gray-500 font-sans text-lg max-w-2xl mx-auto">Each application is designed with performance and future scalability in mind.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <Smartphone className="text-blue-600" />, title: 'Native iOS Development', desc: 'Native iPhone and iPad app development with Swift.' },
          { icon: <Layers className="text-pink-500" />, title: 'SwiftUI & UIKit', desc: 'SwiftUI and UIKit implementation for modern interfaces.' },
          { icon: <Database className="text-indigo-600" />, title: 'Core Data & CloudKit', desc: 'Core Data and CloudKit integration for data persistence.' },
          { icon: <Zap className="text-yellow-500" />, title: 'Performance Optimization', desc: 'Optimizing apps for speed, memory, and battery life.' },
          { icon: <Lock className="text-green-600" />, title: 'Secure App Architecture', desc: 'Implementing robust security standards and encryption.' },
          { icon: <Cloud className="text-blue-400" />, title: 'API & Backend Integration', desc: 'Seamlessly connecting iOS apps to cloud services.' },
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
            <h3 className="text-xl font-display font-bold text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-500 font-sans leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HiringEngagement = () => (
  <section className="bg-[#05070A] py-24">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">Flexible <span className="text-blue-400">Hiring</span> Engagement</h2>
        <p className="text-white/60 font-sans text-lg">We scale development resources based on your roadmap.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { icon: <Users className="text-purple-500" />, title: 'Dedicated Swift Devs', desc: 'Dedicated Swift developers focused on your iOS product.' },
          { icon: <UserPlus className="text-blue-500" />, title: 'Team Augmentation', desc: 'Augment your team with experienced iOS engineering talent.', active: true },
          { icon: <Briefcase className="text-orange-500" />, title: 'Full-Cycle iOS', desc: 'Full-cycle iOS development from concept to App Store launch.' },
          { icon: <Globe className="text-green-500" />, title: 'Offshore Partnership', desc: 'Offshore development partnership with agile processes.' },
        ].map((item, i) => (
          <div key={i} className={`p-10 rounded-[40px] border transition-all ${item.active ? 'bg-blue-600/5 border-blue-500/30' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8">{item.icon}</div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white/60 font-sans text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HighImpactApps = () => (
  <section className="bg-white py-24">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 tracking-tight mb-16">Built for <span className="text-blue-600">High-Impact Applications</span></h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['FinTech and secure payment apps', 'Healthcare mobility solutions', 'E-commerce platforms', 'SaaS mobile applications', 'Enterprise productivity tools', 'App Store optimized launches'].map((title, i) => (
          <div key={i} className="flex items-center gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all group">
            <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">🚀</div>
            <span className="text-lg font-sans font-semibold text-gray-700">{title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: 'Why hire Swift developers in India?', a: 'India offers access to skilled iOS engineers with global project experience and flexible hiring models.' },
    { q: 'Is Swift better than Objective-C?', a: 'Yes, Swift is faster, safer, and more modern than Objective-C, offering better developer productivity and performance.' },
    { q: 'Can Swift apps scale for enterprise use?', a: 'Absolutely. Swift is designed for high-performance enterprise applications with robust memory management and security features.' },
    { q: 'Do you provide ongoing maintenance?', a: 'Yes, we offer comprehensive post-launch support and maintenance to ensure your app stays updated with the latest iOS versions.' }
  ];
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-2xl border transition-all ${openIndex === i ? 'border-blue-500 ring-1 ring-blue-500/20' : 'border-gray-100'}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full px-8 py-6 flex items-center justify-between text-left">
                <span className={`text-lg font-sans font-bold ${openIndex === i ? 'text-blue-600' : 'text-gray-900'}`}>{faq.q}</span>
                <ChevronDown size={20} className={`text-blue-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>{openIndex === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <div className="px-8 pb-8 text-gray-500 font-sans leading-relaxed text-lg">{faq.a}</div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default function SwiftDeveloper() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-500 selection:text-white">
      <main>
        <Hero />
        <Stats />
        <Capabilities />
        <HiringEngagement />
        <HighImpactApps />
        <FAQ />
        <section className="relative py-32 bg-[#05070A] overflow-hidden text-center">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-8">Build a High-Performance iOS Application</h2>
            <p className="text-white/60 font-sans text-xl max-w-3xl mx-auto mb-12 leading-relaxed">If you're looking to hire Swift developers in India, mTouch Labs is ready to collaborate. Create secure and future-ready iOS applications with confidence.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-[#7B2CBF] hover:bg-[#6A25A3] text-white px-10 py-4 rounded-full font-sans font-bold text-lg transition-all flex items-center justify-center gap-2 group">Contact Us Today <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" /></button>
              <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full font-sans font-bold text-lg transition-all flex items-center justify-center gap-2">WhatsApp <MessageCircle size={20} /></button>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"><MessageCircle size={32} fill="white" /></button>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30"><ArrowUp size={24} /></button>
      </div>
    </div>
  );
}
