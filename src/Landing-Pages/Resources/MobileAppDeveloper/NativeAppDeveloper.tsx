import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ArrowRight, 
  Zap,
  Smartphone,
  ShieldCheck,
  Wrench,
  UserCheck,
  Cpu,
  Users,
  Briefcase,
  Layers,
  MessageSquare,
  Plus,
  Minus,
  DollarSign,
  HeartPulse,
  ShoppingCart,
  Rocket,
  Building2,
  AppWindow
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#020617] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 rounded-full mb-8"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">Native App Development • India</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]"
        >
          Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Native App Developers</span> in India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Native mobile applications deliver unmatched speed, reliability, and seamless integration with device hardware. If performance, responsiveness, and platform-level optimization are critical to your product, hiring native app developers is the right decision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-[#7B2CBF] hover:bg-[#6A24A3] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-xl shadow-purple-900/20">
            Hire Developers <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-gray-700 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <div className="absolute -inset-4 bg-green-500/20 blur-xl rounded-full group-hover:bg-green-500/40 transition-all" />
          <div className="relative bg-green-500 p-4 rounded-full shadow-2xl cursor-pointer transform hover:scale-110 transition-all">
            <MessageSquare className="w-8 h-8 text-white fill-current" />
          </div>
        </div>
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
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-blue-900 mb-2 tracking-tight">{stat.value}</div>
              <div className="text-gray-500 font-medium text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyNative = () => {
  const features = [
    { title: 'Faster Execution', desc: 'Native code runs directly on the device for maximum performance and speed.', icon: <Zap className="w-6 h-6 text-orange-500" /> },
    { title: 'Better UI Responsiveness', desc: 'Smooth animations and responsive interfaces built for each platform.', icon: <Smartphone className="w-6 h-6 text-blue-500" /> },
    { title: 'Enhanced Security', desc: 'Platform-specific security layers and encrypted data handling.', icon: <ShieldCheck className="w-6 h-6 text-purple-500" /> },
    { title: 'Full Hardware Integration', desc: 'Complete access to device cameras, GPS, sensors, and biometrics.', icon: <Wrench className="w-6 h-6 text-gray-500" /> },
    { title: 'Superior UX', desc: 'Native UI components and gestures deliver the best user experience.', icon: <UserCheck className="w-6 h-6 text-pink-500" /> },
    { title: 'Platform-Specific Expertise', desc: 'Swift, Kotlin, and platform best practices for iOS and Android.', icon: <Cpu className="w-6 h-6 text-yellow-600" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Why Choose <span className="text-blue-600">Native App Development</span>?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Native applications provide unmatched performance and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-gray-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HiringModels = () => {
  const models = [
    { title: 'Dedicated', desc: 'Full-time developers focused exclusively on your native app project.', icon: <Users className="w-8 h-8 text-purple-500" /> },
    { title: 'Team Extension', desc: 'Augment your team with skilled native iOS and Android engineers.', icon: <Briefcase className="w-8 h-8 text-blue-500" /> },
    { title: 'End-to-End', desc: 'Complete native app development from concept to store deployment.', icon: <Layers className="w-8 h-8 text-orange-500" /> },
    { title: 'Offshore', desc: 'Build your offshore native development team with our project leads.', icon: <Globe className="w-8 h-8 text-green-500" /> },
  ];

  return (
    <section className="py-24 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Flexible <span className="text-blue-400">Hiring Engagement</span>
          </h2>
          <p className="text-gray-400 text-lg">Choose how you want to work with us.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-8 p-4 bg-slate-800 rounded-2xl inline-block group-hover:bg-blue-500/10 transition-colors">
                {model.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{model.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the advantage of hiring native app developers?",
      a: "Native developers build apps optimized specifically for iOS or Android, ensuring better speed, security, and performance compared to cross-platform solutions."
    },
    {
      q: "Are native apps better than cross-platform apps?",
      a: "Yes, for performance-intensive applications. Native apps have direct access to hardware APIs, smoother animations, and better memory management."
    },
    {
      q: "Can I hire a dedicated native developer?",
      a: "Absolutely. We offer dedicated hiring models where developers work exclusively on your project with full transparency and control."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes, we provide comprehensive post-launch maintenance, updates, and bug fixes to ensure your app remains competitive and functional."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-16 tracking-tight">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`border rounded-2xl overflow-hidden transition-all ${openIdx === idx ? 'border-blue-500 shadow-lg shadow-blue-500/5' : 'border-gray-100'}`}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className={`text-lg font-bold ${openIdx === idx ? 'text-blue-600' : 'text-slate-900'}`}>{faq.q}</span>
                {openIdx === idx ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
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

const CTA = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
          Let's Build a <span className="text-blue-400">High-Performance</span> Native App
        </h2>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          If you're planning to create a mobile application that demands speed, reliability, and scalability, our native developers are ready to support your vision. Partner with mTouch Labs and build mobile apps engineered for excellence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1">
            Contact Us Today <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1">
            WhatsApp <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const IntroText = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed">
          Native mobile applications deliver unmatched speed, reliability, and seamless integration with device hardware. If performance, responsiveness, and platform-level optimization are critical to your product, hiring native app developers is the right decision.
        </p>
        <p className="mt-10 text-xl md:text-2xl font-bold text-blue-600 italic">
          At mTouch Labs, our native app developers in India build high-performance iOS and Android applications engineered specifically for their respective platforms.
        </p>
      </div>
    </section>
  );
};

const EnterpriseApps = () => {
  const apps = [
    { name: 'FinTech', icon: <DollarSign className="w-8 h-8 text-orange-500" /> },
    { name: 'Healthcare', icon: <HeartPulse className="w-8 h-8 text-red-500" /> },
    { name: 'E-commerce', icon: <ShoppingCart className="w-8 h-8 text-blue-500" /> },
    { name: 'On-demand', icon: <Rocket className="w-8 h-8 text-yellow-500" /> },
    { name: 'Enterprise workflow', icon: <Building2 className="w-8 h-8 text-purple-500" /> },
    { name: 'App Store optimized', icon: <AppWindow className="w-8 h-8 text-green-500" /> }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-16 tracking-tight">
          Enterprise & <span className="text-blue-600">Consumer Applications</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 flex items-center gap-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-xl font-bold text-slate-800">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function NativeAppDeveloper() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-500 selection:text-white">
      <main>
        <Hero />
        <Stats />
        <IntroText />
        <WhyNative />
        <HiringModels />
        <EnterpriseApps />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
