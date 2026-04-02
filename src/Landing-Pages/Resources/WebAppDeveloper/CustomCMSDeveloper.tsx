import React, { useState } from "react";
import { motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Users,
  Layers,
  Link as LinkIcon,
  Cloud,
  Lock,
  Box,
  MessageCircle,
} from 'lucide-react';

// --- Components ---


const Hero = () => (
  <section className="gradient-bg text-white py-20 md:py-32 px-4 md:px-12 text-center relative overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto relative z-10"
    >
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-white/20">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        CUSTOM CMS • INDIA
      </div>
      <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
        Hire Custom <span className="text-primary">CMS Developers</span> in India
      </h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
        <button className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all font-bold text-lg w-full md:w-auto justify-center shadow-lg shadow-primary/20">
          Hire Developers <ArrowRight size={20} />
        </button>
        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all font-bold text-lg w-full md:w-auto justify-center border border-white/20">
          View Our Work
        </button>
      </div>
    </motion.div>
    
    {/* Decorative elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-0"></div>
  </section>
);

const Stats = () => (
  <section className="py-20 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          As your digital presence grows, managing content across platforms becomes increasingly complex. 
          Off-the-shelf CMS solutions often limit flexibility, scalability, and integration capabilities.
        </p>
        <p className="text-primary font-bold text-lg md:text-xl mt-8 italic">
          At WorkHolo Labs, we provide experienced custom CMS developers in India who design and build fully tailored content management systems aligned with your workflows, publishing needs, and long-term digital strategy.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20">
        {[
          { value: "500+", label: "Projects Delivered" },
          { value: "1050+", label: "Global Clients" },
          { value: "14+", label: "Years in Tech" },
          { value: "99%", label: "Satisfaction Rate" }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-6xl font-extrabold text-[#0A1F44] mb-2">{stat.value}</h3>
            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl border border-gray-100 card-shadow flex flex-col gap-4"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-[#0A1F44]">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </motion.div>
);

const TailoredCMS = () => (
  <section className="py-24 px-4 md:px-12 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mb-6">
          A CMS Designed <span className="text-primary">Around Your Business</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl">
          Instead of adapting your processes to fit a generic platform, we build systems that adapt to you.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Users}
          title="Role-Based Management"
          description="Role-based content management systems with granular permissions for your team."
        />
        <FeatureCard 
          icon={Globe}
          title="Multi-Site Platforms"
          description="Multi-site and multi-language platforms for global reach and centralized control."
        />
        <FeatureCard 
          icon={LinkIcon}
          title="Headless CMS"
          description="Headless CMS architecture with API-driven content delivery for any device."
        />
        <FeatureCard 
          icon={Cloud}
          title="Cloud Infrastructure"
          description="Cloud-based CMS infrastructure for high availability and seamless scaling."
        />
        <FeatureCard 
          icon={Lock}
          title="Secure Publishing"
          description="Secure enterprise publishing systems with advanced encryption and audit logs."
        />
        <FeatureCard 
          icon={Box}
          title="Modular Architecture"
          description="Modular architecture with SEO-friendly structures and easy plugin integration."
        />
      </div>
    </div>
  </section>
);

const EngagementModels = () => (
  <section className="py-24 px-4 md:px-12 bg-[#0A0F1C] text-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Flexible <span className="text-primary">Engagement</span> Models
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          We align with your internal teams and technical roadmap.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { icon: Users, title: "Dedicated Hiring", desc: "Dedicated developer hiring focused on your CMS platform." },
          { icon: Layers, title: "Team Extension", desc: "Extend your team with skilled CMS development resources." },
          { icon: Box, title: "Full-Cycle Development", desc: "End-to-end CMS development from architecture to deployment." },
          { icon: Globe, title: "Offshore Collaboration", desc: "Offshore development collaboration with transparent processes." }
        ].map((model, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl flex flex-col gap-6"
          >
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
              <model.icon size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
              <p className="text-gray-400 leading-relaxed">{model.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DigitalEcosystems = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44]">
          Ideal for <span className="text-primary">Complex Digital Ecosystems</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: "📰", title: "Media and publishing platforms" },
          { icon: "🏢", title: "Enterprise content portals" },
          { icon: "📚", title: "E-learning systems" },
          { icon: "🔒", title: "Corporate intranets" },
          { icon: "☁️", title: "SaaS-based content platforms" },
          { icon: "🏷️", title: "Multi-brand organizations" }
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-2xl flex items-center gap-6 border border-gray-100 hover:border-primary/30 transition-all cursor-default">
            <div className="text-3xl">{item.icon}</div>
            <span className="text-lg font-semibold text-[#0A1F44]">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      q: "Why hire custom CMS developers instead of using WordPress?",
      a: "Custom CMS solutions offer greater flexibility, advanced integrations, and tailored workflows beyond generic CMS platforms. They are built specifically for your business logic, ensuring better performance and security."
    },
    {
      q: "Can you build a headless CMS?",
      a: "Yes, we specialize in headless CMS architectures using modern stacks like React, Node.js, and API-first content delivery systems."
    },
    {
      q: "Is custom CMS scalable for enterprise use?",
      a: "Absolutely. Our custom solutions are designed with scalability in mind, capable of handling millions of users and massive content libraries."
    },
    {
      q: "Do you provide maintenance and upgrades?",
      a: "Yes, we offer comprehensive post-launch support, including security updates, feature enhancements, and performance monitoring."
    }
  ];
  
  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="accordion-item bg-white shadow-sm">
              <button 
                className="accordion-header"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className={openIndex === i ? "text-primary" : ""}>{faq.q}</span>
                {openIndex === i ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} />}
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="accordion-content">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 px-4 md:px-12 bg-[#0A1F44] text-white text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
        Take Full Control of Your Digital Content
      </h2>
      <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
        If you're looking to hire custom CMS developers in India who can build a secure and scalable content management platform tailored to your business, WorkHolo Labs is ready to collaborate.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <button className="bg-primary hover:bg-opacity-90 text-white px-10 py-4 rounded-full flex items-center gap-2 transition-all font-bold text-lg w-full md:w-auto justify-center">
          Contact Us Today <ArrowRight size={20} />
        </button>
        <button className="bg-secondary hover:bg-opacity-90 text-white px-10 py-4 rounded-full flex items-center gap-2 transition-all font-bold text-lg w-full md:w-auto justify-center">
          WhatsApp <ArrowRight size={20} />
        </button>
      </div>
    </div>
    
    {/* Decorative background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
    </div>
  </section>
);

const FloatingButtons = () => (
  <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl relative group"
    >
      <MessageCircle size={28} />
      <div className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gray-100">
        Chat with us
      </div>
      <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20"></div>
    </motion.button>
    
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl"
    >
      <ChevronUp size={28} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </motion.button>
  </div>
);

export default function CMSDeveloper() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Stats />
        <TailoredCMS />
        <EngagementModels />
        <DigitalEcosystems />
        <FAQ />
        <CTA />
      </main>
      <FloatingButtons />
    </div>
  );
}
