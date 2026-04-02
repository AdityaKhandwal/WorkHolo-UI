import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronRight, 
  Plus, 
  Minus,
  Globe,
  Smartphone,
  Zap,
  DollarSign,
  Layout,
  RefreshCw,
  Users,
  MessageCircle,
  FileText
} from 'lucide-react';

// Custom components

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm">
    <button 
      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <span className={`font-semibold text-lg ${isOpen ? 'text-blue-600' : 'text-gray-800'}`}>{question}</span>
      {isOpen ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-gray-400" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-8 pb-6 text-gray-600 leading-relaxed">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function HybridAppDeveloper() {
  const [openFaq, setOpenFaq] = useState(0);

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '1050+', label: 'Global Clients' },
    { value: '14+', label: 'Years in Tech' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  const codebaseFeatures = [
    { icon: <Zap className="text-blue-500" />, title: 'Reduce Time-to-Market', desc: 'Ship your product faster with a single shared codebase.' },
    { icon: <DollarSign className="text-yellow-500" />, title: 'Lower Development Costs', desc: 'Save 40-60% compared to building separate native apps.' },
    { icon: <Layout className="text-pink-500" />, title: 'Unified UX', desc: 'Consistent look and feel across iOS and Android.' },
    { icon: <RefreshCw className="text-blue-400" />, title: 'Simplified Updates', desc: 'Push updates once and deploy to all platforms simultaneously.' },
    { icon: <Globe className="text-green-500" />, title: 'Wider Audiences', desc: 'Reach both Android and iOS users from day one.' },
    { icon: <Smartphone className="text-purple-500" />, title: 'Native-Feel Performance', desc: 'Deliver app experiences that rival native performance.' },
  ];

  const collaborationModels = [
    { icon: <Users className="text-purple-500" />, title: 'Dedicated Developer', desc: 'A full-time developer exclusively focused on your cross-platform project.' },
    { icon: <Users className="text-blue-500" />, title: 'Team Extension', desc: 'Augment your internal team with skilled hybrid app engineers.' },
    { icon: <FileText className="text-orange-500" />, title: 'Full Lifecycle', desc: 'Outsource the entire app development lifecycle from concept to launch.' },
    { icon: <Globe className="text-blue-400" />, title: 'Scale as Needed', desc: 'Scale your development team as your product roadmap evolves.' },
  ];

  const technologies = [
    { name: 'Flutter', icon: '🦋' },
    { name: 'React Native', icon: '⚛️' },
    { name: 'Ionic', icon: '⚡' },
    { name: 'PWA', icon: '📱' },
    { name: 'REST & Cloud APIs', icon: '🔗' },
    { name: 'E-commerce Apps', icon: '🛒' },
  ];

  const faqs = [
    { 
      question: "What is hybrid app development?", 
      answer: "Hybrid app development allows a single codebase to run on both Android and iOS platforms, reducing development time and cost while maintaining performance and user experience." 
    },
    { 
      question: "Are hybrid apps as good as native apps?", 
      answer: "Modern hybrid frameworks like Flutter and React Native provide near-native performance and access to device features, making them excellent choices for most business applications." 
    },
    { 
      question: "How long does hybrid app development take?", 
      answer: "The timeline depends on the complexity of the app, but hybrid development typically takes 30-50% less time than developing two separate native apps." 
    },
    { 
      question: "Can I switch from hybrid to native later?", 
      answer: "While possible, it usually involves a complete rewrite. However, hybrid apps are highly scalable and can handle millions of users, so switching is rarely necessary." 
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#050A1F] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Hybrid App Development • India
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Hire Hybrid App <span className="text-[#0091FF]">Developers in India</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
              <button className="w-full md:w-auto bg-[#7B2CBF] hover:bg-[#6a25a3] text-white px-10 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20">
                Hire Developers <ChevronRight size={20} />
              </button>
              <button className="w-full md:w-auto bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full text-lg font-bold transition-all">
                View Our Work
              </button>
            </div>
          </motion.div>

          <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 cursor-pointer animate-bounce">
              <MessageCircle size={32} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#050A1F] mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Launching a mobile app today means reaching users on both Android and iOS — without doubling development time or cost. That's where hybrid app development becomes a smart business decision.
            </p>
            <p className="text-lg md:text-xl text-blue-600 font-semibold italic leading-relaxed">
              At WorkHolo Labs, we help startups and enterprises hire hybrid app developers in India who create powerful cross-platform applications using a single codebase — without compromising performance or user experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* One Codebase Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#050A1F] mb-6">
              One Codebase. Multiple Platforms. <span className="text-[#0091FF]">Faster Results.</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our developers build apps that feel native while keeping development efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {codebaseFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#050A1F] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Models Section */}
      <section className="py-24 bg-[#050A1F] text-white overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Flexible <span className="text-[#0091FF]">Collaboration</span> <span className="text-yellow-500">Models</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              We adapt to your workflow — Agile, Scrum, or custom models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collaborationModels.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-colors group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform inline-block">
                  {model.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#050A1F] mb-16 text-center">
            Technologies We <span className="text-[#0091FF]">Work With</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-6 p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-blue-100 cursor-default"
              >
                <span className="text-4xl">{tech.icon}</span>
                <span className="text-xl font-bold text-gray-800">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#050A1F] mb-16 text-center">
            Frequently Asked Questions
          </h2>

          <div>
            {faqs.map((faq, idx) => (
              <FAQItem 
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#050A1F] to-[#0A1635] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Build Smarter, Not Harder</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              If you're looking for a cost-effective way to launch across platforms without sacrificing quality, our hybrid app developers are ready to collaborate. Partner with WorkHolo Labs and bring your cross-platform app idea to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-[#7B2CBF] hover:bg-[#6a25a3] text-white px-12 py-5 rounded-full text-xl font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-purple-500/20">
                Contact Us Today <ChevronRight size={24} />
              </button>
              <button className="w-full sm:w-auto bg-[#25D366] hover:bg-green-600 text-white px-12 py-5 rounded-full text-xl font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-green-500/20">
                WhatsApp <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 cursor-pointer hover:scale-110 transition-transform">
          <MessageCircle size={28} className="text-white" />
        </div>
        <div className="w-14 h-14 bg-[#7B2CBF] rounded-full flex items-center justify-center shadow-lg shadow-purple-500/40 cursor-pointer hover:scale-110 transition-transform">
          <ChevronRight size={28} className="text-white -rotate-90" />
        </div>
      </div>
    </div>
  );
}
