import { clsx, type ClassValue } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown, 
  ArrowRight, 
  MessageCircle, 
  ChevronUp, 
  Layout,
  Zap,
  ShieldCheck,
  Code2,
  Link as LinkIcon,
  Database,
  Cloud,
  Settings,
  ShoppingCart,
  Users,
  Plus,
} from 'lucide-react';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Hero = () => (
  <section className="relative bg-[#0a0a0a] pt-20 pb-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
    <div className="container-custom relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-sm font-medium mb-8">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          LARAVEL DEVELOPMENT • INDIA
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
          Hire Laravel Developers in <span className="text-blue-500">India</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <button className="bg-[#7B2CBF] hover:bg-[#6a24a3] text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center gap-2 transition-all shadow-lg shadow-purple-500/20">
            Hire Developers <ArrowRight size={20} />
          </button>
          <button className="bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all">
            View Our Work
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-white py-24">
    <div className="container-custom">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <p className="text-gray-600 text-xl leading-relaxed">
          When building scalable web applications or SaaS platforms, the backend architecture plays a critical role in performance, maintainability, and security. Laravel has become one of the most trusted PHP frameworks for developing structured and future-ready applications.
        </p>
        <p className="text-blue-600 font-semibold mt-8 text-lg italic">
          At WorkHolo Labs, we offer experienced Laravel developers in India who specialize in building secure, API-driven, and enterprise-grade web systems tailored to your business needs.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: 'Projects Delivered', value: '500+' },
          { label: 'Global Clients', value: '1050+' },
          { label: 'Years in Tech', value: '14+' },
          { label: 'Satisfaction Rate', value: '99%' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="text-5xl font-black text-[#1a2b4b] mb-2">{stat.value}</div>
            <div className="text-gray-500 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyLaravel = () => (
  <section className="bg-gray-50 py-24">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why Laravel for <span className="text-blue-600">Modern Web Applications</span>?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Our developers leverage Laravel's ecosystem to create reliable and performance-driven platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'MVC Architecture', desc: 'Structured MVC architecture for clean development.', icon: <Layout className="text-orange-400" /> },
          { title: 'Rapid Development', desc: 'Rapid application development with elegant syntax.', icon: <Zap className="text-yellow-500" /> },
          { title: 'Secure Auth', desc: 'Secure authentication systems built into the framework.', icon: <ShieldCheck className="text-orange-500" /> },
          { title: 'Clean Code', desc: 'Maintainable and readable code for long-term success.', icon: <Code2 className="text-red-400" /> },
          { title: 'API Integration', desc: 'Seamless third-party and RESTful API integrations.', icon: <LinkIcon className="text-gray-400" /> },
          { title: 'SaaS Infrastructure', desc: 'Perfect for multi-tenant and scalable SaaS products.', icon: <Cloud className="text-blue-400" /> },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HiringModels = () => (
  <section className="bg-[#0a1128] py-24">
    <div className="container-custom">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Flexible <span className="text-blue-500">Hiring</span> <span className="text-yellow-500">Models</span>
        </h2>
        <p className="text-gray-400 text-lg">Scale your backend team according to project demands.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Dedicated Developers', desc: 'Full-time dedicated Laravel developers.', icon: <Users className="text-purple-500" /> },
          { title: 'Team Augmentation', desc: 'Augment your team with Laravel professionals.', icon: <Plus className="text-purple-400" /> },
          { title: 'End-to-End Delivery', desc: 'Complete project management and delivery.', icon: <ArrowRight className="text-orange-400" /> },
          { title: 'Offshore Collaboration', desc: 'Cost-effective offshore development solutions.', icon: <Globe className="text-blue-400" /> },
        ].map((item, idx) => (
          <div key={idx} className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Deliverables = () => (
  <section className="bg-white py-24">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What Our Laravel Developers <span className="text-blue-500">Deliver</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Custom web applications', icon: <Globe className="text-blue-500" /> },
          { title: 'SaaS platforms with multi-tenant architecture', icon: <Cloud className="text-purple-500" /> },
          { title: 'RESTful APIs', icon: <LinkIcon className="text-gray-400" /> },
          { title: 'CRM & ERP systems', icon: <Database className="text-gray-600" /> },
          { title: 'E-commerce backends', icon: <ShoppingCart className="text-gray-400" /> },
          { title: 'Cloud-integrated web solutions', icon: <Settings className="text-gray-400" /> },
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6 border border-gray-100 hover:border-blue-200 transition-all">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why hire Laravel developers in India?",
      a: "India offers skilled Laravel developers with global experience and cost-effective engagement models."
    },
    {
      q: "Is Laravel suitable for SaaS development?",
      a: "Yes, Laravel's robust ecosystem and built-in features like multi-tenancy support make it ideal for SaaS."
    },
    {
      q: "Can Laravel handle enterprise-level applications?",
      a: "Absolutely. Laravel is designed for scalability and performance, powering many large-scale enterprise systems."
    },
    {
      q: "Do you provide maintenance and upgrades?",
      a: "Yes, we offer comprehensive post-launch support, maintenance, and version upgrade services."
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className={cn("text-lg font-bold", openIndex === idx ? "text-blue-600" : "text-gray-800")}>
                  {faq.q}
                </span>
                {openIndex === idx ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed">
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

const CTA = () => (
  <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 opacity-50" />
    <div className="container-custom relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
        Build Scalable Web Applications <br /> with Laravel
      </h2>
      <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
        If you're looking to hire Laravel developers in India who understand backend architecture, security, and SaaS scalability, WorkHolo Labs is ready to collaborate. Create structured, high-performance web platforms designed for long-term success.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <button className="bg-[#7B2CBF] hover:bg-[#6a24a3] text-white px-10 py-4 rounded-lg text-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-purple-500/20">
          Start Your Project <ArrowRight size={24} />
        </button>
        <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-4 rounded-lg text-xl font-bold flex items-center gap-2 transition-all">
          Chat on WhatsApp <ArrowRight size={24} />
        </button>
      </div>
    </div>
  </section>
);

const FloatingActions = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <button className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group">
      <MessageCircle size={30} />
      <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        Chat with us
      </div>
    </button>
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transition-colors"
    >
      <ChevronUp size={24} />
    </button>
  </div>
);

export default function LaravelDeveloper() {
  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      <Hero />
      <Stats />
      <WhyLaravel />
      <HiringModels />
      <Deliverables />
      <FAQ />
      <CTA />
      <FloatingActions />
    </div>
  );
}
