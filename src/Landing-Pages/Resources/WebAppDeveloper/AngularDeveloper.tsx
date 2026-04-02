import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { 
  Globe, 
  ArrowRight, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  Code2, 
  Layers, 
  Users, 
  Briefcase, 
  Cloud, 
  BarChart3, 
  Plus, 
  Minus,
  Smartphone,
  Layout,
  History,
  Smile,
  ChevronUp
} from 'lucide-react';

// --- Components ---
const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 px-4 md:px-12 overflow-hidden bg-gradient-to-b from-[#2944a3] to-[#0A1128]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-brand-purple/10 border border-brand-purple/20 px-4 py-1.5 rounded-full text-brand-purple text-xs font-bold uppercase tracking-wider mb-8"
        >
          <span className="w-2 h-2 bg-brand-purple rounded-full animate-pulse" />
          Angular Development • India
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-[1.1] tracking-tight"
        >
          Hire Angular <span className="bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent">Developers</span> in India
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Modern web applications demand more than attractive interfaces. They require structured architecture, maintainable code, real-time responsiveness, and seamless integration with backend systems.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="w-full sm:w-auto bg-brand-purple hover:bg-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-purple/20">
            Hire Developers <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-gray-700 hover:border-white text-white px-10 py-4 rounded-full font-bold text-lg transition-all">
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Projects Delivered', value: '500+', icon: <Briefcase className="text-brand-blue" /> },
    { label: 'Global Clients', value: '1050+', icon: <Globe className="text-cyan-400" /> },
    { label: 'Years in Tech', value: '14+', icon: <History className="text-brand-purple" /> },
    { label: 'Satisfaction Rate', value: '99%', icon: <Smile className="text-green-400" /> },
  ];

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-50 rounded-2xl">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-display font-extrabold mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnicalExcellence = () => {
  const features = [
    { title: 'Component Architecture', desc: 'Component-driven architecture for modular and reusable code.', icon: <Layers className="text-green-500" /> },
    { title: 'TypeScript Development', desc: 'TypeScript-based development for type safety and reliability.', icon: <Code2 className="text-blue-500" /> },
    { title: 'API Integration', desc: 'REST & GraphQL API integration for dynamic data handling.', icon: <Zap className="text-purple-500" /> },
    { title: 'Secure Authentication', desc: 'Secure authentication systems for data protection.', icon: <ShieldCheck className="text-orange-500" /> },
    { title: 'Cloud Deployment', desc: 'Cloud-based deployment for scalable and reliable applications.', icon: <Cloud className="text-cyan-500" /> },
    { title: 'Performance Tuning', desc: 'Performance tuning and optimization for fast loading times.', icon: <BarChart3 className="text-red-500" /> },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            Technical Excellence <span className="text-brand-blue">at the Core</span>
          </h2>
          <p className="text-xl text-gray-600">We design frontend systems that are clean, scalable, and easy to maintain.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EngagementModels = () => {
  const models = [
    { title: 'Dedicated Full-Time', desc: 'Dedicated full-time Angular developers for your projects.', icon: <Users className="text-purple-400" /> },
    { title: 'Team Augmentation', desc: 'Augment your team with skilled Angular professionals.', icon: <Plus className="text-blue-400" /> },
    { title: 'End-to-End Projects', desc: 'Complete web development projects from concept to delivery.', icon: <Briefcase className="text-green-400" /> },
    { title: 'Offshore Partnerships', desc: 'Offshore development partnerships with full transparency.', icon: <Globe className="text-cyan-400" /> },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            Flexible Ways to <span className="text-brand-blue">Collaborate</span>
          </h2>
          <p className="text-xl text-gray-400">Our engagement models adapt to your roadmap and growth plans.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-card p-10 rounded-3xl border border-gray-800 hover:border-brand-blue/50 transition-all group"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue/20 transition-colors">
                {m.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{m.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComplexApps = () => {
  const apps = [
    { title: 'Enterprise dashboards', icon: <Layout className="text-blue-500" /> },
    { title: 'SaaS platforms', icon: <Cloud className="text-purple-500" /> },
    { title: 'Real-time web applications', icon: <Zap className="text-orange-500" /> },
    { title: 'Data-driven management systems', icon: <BarChart3 className="text-green-500" /> },
    { title: 'Progressive Web Apps (PWAs)', icon: <Smartphone className="text-cyan-500" /> },
    { title: 'Legacy system modernization', icon: <History className="text-red-500" /> },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            Built for <span className="text-brand-blue">Complex Applications</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-2xl flex items-center gap-6 border border-gray-100"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm">
                {app.icon}
              </div>
              <span className="text-lg font-bold">{app.title}</span>
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
    { q: 'Why hire Angular developers in India?', a: 'India offers experienced Angular professionals with strong frontend architecture expertise and cost-effective hiring models.' },
    { q: 'Is Angular suitable for enterprise applications?', a: 'Yes, Angular is designed for large-scale enterprise applications with its robust framework, modularity, and strong typing.' },
    { q: 'Can Angular handle real-time applications?', a: 'Absolutely. With RxJS and integration with WebSockets or Firebase, Angular excels at handling real-time data streams.' },
    { q: 'Do you provide ongoing support?', a: 'Yes, we offer comprehensive post-deployment support and maintenance to ensure your application remains future-ready.' },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50 text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-16 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`text-lg font-bold ${openIdx === idx ? 'text-brand-blue' : 'text-gray-800'}`}>{faq.q}</span>
                {openIdx === idx ? <Minus size={20} className="text-brand-blue" /> : <Plus size={20} className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
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

const SecondaryHero = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-gradient-to-r from-dark-bg to-[#0A1128] text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight">
          Build Scalable Web Applications <span className="text-brand-blue">with Angular</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
          If you're looking to hire Angular developers in India who understand enterprise architecture and scalable frontend engineering, WorkHolo Labs is ready to collaborate. Create modern, structured, and future-ready web platforms with us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-brand-purple hover:bg-purple-700 text-black px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-purple/20">
            Contact Us Today <ArrowRight size={20} />
          </button>
          <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all">
            WhatsApp <MessageCircle size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function AngularDeveloper() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-brand-purple/30 selection:text-brand-purple">
      
      <main>
        <Hero />
        <Stats />
        <TechnicalExcellence />
        <EngagementModels />
        <ComplexApps />
        <FAQ />
        <SecondaryHero />
      </main>


      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-brand-purple text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-all"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
        
        <div className="relative group">
          <div className="absolute -top-2 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-dark-bg z-10">1</div>
          <button className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all">
            <MessageCircle size={28} />
          </button>
        </div>

        <button className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
