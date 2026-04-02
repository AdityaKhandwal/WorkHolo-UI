import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Layout, 
  TrendingUp, 
  ShieldCheck, 
  Database,
  Rocket,
  Stethoscope,

  ShoppingCart,
  Building2,
  Monitor
} from 'lucide-react';

// --- Types ---

interface StatCard {
  value: string;
  label: string;
}

interface CapabilityCard {
  id: string;
  title: string;
  description: string;
}

interface FrameworkStep {
  id: number;
  label: string;
}

interface IndustryCard {
  icon: React.ReactNode;
  label: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Components ---

const Hero = () => {
  return (
    <section className="pt-48 pb-32 bg-[#0B1120] text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A3FF] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B2CBF] rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-6 font-medium">
          <span>Home</span> / <span>Services</span> / <span className="text-[#F2A93B]">Content Marketing</span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
        >
          Content <span className="text-[#F2A93B]">Marketing</span> Services
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
        >
          Strategic Content That Drives Authority, Engagement & Revenue
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed italic"
        >
          WorkHolo Labs delivers structured content marketing services designed to build brand authority, improve search visibility, and generate measurable business growth. Authority is earned through value-driven communication.
        </motion.p>
      </div>
    </section>
  );
};

const WhatIsContentMarketing = () => {
  const cards = [
    { icon: <Layout className="text-[#7B2CBF]" />, title: 'Content Strategy' },
    { icon: <Search className="text-[#00A3FF]" />, title: 'SEO Alignment' },
    { icon: <ShieldCheck className="text-[#F2A93B]" />, title: 'Authority Building' },
    { icon: <TrendingUp className="text-[#00C853]" />, title: 'Lead Generation' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#0B1120] mb-8 leading-tight">
            What Are <span className="text-[#F2A93B]">Content Marketing</span> Services?
          </h2>
          <div className="space-y-6 text-lg text-[#0B1120]/70 leading-relaxed">
            <p>
              Content marketing services involve creating and distributing strategically planned content that attracts qualified audiences and guides them toward conversion — including search-aligned strategy, topic authority, multi-format creation, and funnel mapping.
            </p>
            <p>
              Our content work directly supports <span className="text-[#00A3FF] font-bold">SEO</span> rankings and <span className="text-[#00A3FF] font-bold">CRO</span> performance for comprehensive digital growth.
            </p>
            <p>
              Combined with <span className="text-[#00A3FF] font-bold">social media marketing</span> and <span className="text-[#00A3FF] font-bold">email marketing</span>, we create content ecosystems that build long-term digital equity.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-[#F8FAFC] p-8 rounded-2xl border border-black/5 flex flex-col items-center text-center gap-4 shadow-sm"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm">
                {card.icon}
              </div>
              <h3 className="font-bold text-[#0B1120] text-lg">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BusinessBenefits = () => {
  const stats: StatCard[] = [
    { value: '1000+', label: 'Content Pieces' },
    { value: '3x', label: 'Organic Growth' },
    { value: 'B2B', label: '& SaaS Focus' },
    { value: '14+', label: 'Years Experience' },
  ];

  const benefits = [
    'Increased search visibility & stronger authority',
    'Higher audience engagement & improved lead quality',
    'Sustainable organic traffic & enhanced brand trust',
    'B2B & SaaS expertise with thought leadership',
    'Integration with SEO & CRO strategies',
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-black/5 text-center shadow-sm">
              <div className="text-4xl font-bold text-[#00A3FF] mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-[#0B1120]/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl font-bold text-[#0B1120] mb-6 leading-tight">
            Business Benefits of <span className="text-[#F2A93B]">Content Marketing</span>
          </h2>
          <p className="text-lg text-[#0B1120]/70 mb-8 font-medium">Content is a long-term growth asset:</p>
          <ul className="space-y-4">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 text-lg text-[#0B1120]/80 font-medium">
                <CheckCircle2 className="text-[#F2A93B]" size={20} />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ContentCapabilities = () => {
  const capabilities: CapabilityCard[] = [
    { 
      id: '01', 
      title: 'Strategy & Planning', 
      description: 'Audience segmentation, keyword clusters, topic authority mapping, competitive gap analysis, and content calendar development.' 
    },
    { 
      id: '02', 
      title: 'SEO Content', 
      description: 'Long-form articles, service page content, landing page copy, knowledge base resources, and educational guides structured for rankings.' 
    },
    { 
      id: '03', 
      title: 'B2B & SaaS Content', 
      description: 'Thought leadership, product education, case studies, whitepaper frameworks, and industry-focused insights for credibility.' 
    },
    { 
      id: '04', 
      title: 'Conversion Copywriting', 
      description: 'Value propositions, CTA clarity, benefit-driven communication, and trust-building messaging to influence decision-making.' 
    },
    { 
      id: '05', 
      title: 'Distribution & Analytics', 
      description: 'Organic distribution, email integration, social repurposing, campaign-aligned publishing, organic traffic growth, and conversion performance tracking.' 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1120] mb-4">
            Our Content <span className="text-[#F2A93B]">Capabilities</span>
          </h2>
          <p className="text-lg text-[#0B1120]/60 font-medium">From strategy to performance optimization</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {capabilities.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="bg-[#F8FAFC] p-10 rounded-3xl border border-black/5 relative overflow-hidden group"
            >
              <div className="text-[#00A3FF] font-bold text-lg mb-6 bg-white w-10 h-10 flex items-center justify-center rounded-xl shadow-sm">
                {item.id}
              </div>
              <h3 className="text-2xl font-bold text-[#0B1120] mb-4">{item.title}</h3>
              <p className="text-[#0B1120]/70 leading-relaxed text-lg">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContentFramework = () => {
  const steps: FrameworkStep[] = [
    { id: 1, label: 'Research' },
    { id: 2, label: 'Planning' },
    { id: 3, label: 'Creation' },
    { id: 4, label: 'Optimization' },
    { id: 5, label: 'Distribution' },
    { id: 6, label: 'Monitor' },
    { id: 7, label: 'Refine' },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#0B1120] mb-4">
          Our Content <span className="text-[#F2A93B]">Framework</span>
        </h2>
        <p className="text-lg text-[#0B1120]/60 mb-20 font-medium">Structured cycle ensuring continuous improvement.</p>
        
        <div className="relative flex flex-wrap justify-center items-center gap-4 lg:gap-0">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black/5 -translate-y-1/2 hidden lg:block"></div>
          
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className={`w-32 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 shadow-lg transition-all ${step.id === 4 ? 'bg-white border-2 border-[#00A3FF] scale-110' : 'bg-white border border-black/5'}`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${step.id === 4 ? 'bg-[#00A3FF]' : 'bg-[#7B2CBF]'}`}>
                    {step.id}
                  </div>
                  <span className="font-bold text-[#0B1120] text-sm">{step.label}</span>
                </motion.div>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex items-center px-4 z-10">
                  <ArrowRight className="text-black/20" size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const tags = [
    'Search-aligned architecture',
    'B2B & SaaS expertise',
    'Data-driven optimization',
    'SEO & CRO integration',
    'Scalable planning models',
    'Long-term authority focus',
  ];

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0B1120] mb-4">
          Why Choose <span className="text-[#F2A93B]">WorkHolo Labs</span>?
        </h2>
        <p className="text-xl text-[#0B1120]/80 mb-12 font-medium">We create content ecosystems — not isolated articles.</p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tags.map((tag, idx) => (
            <div key={idx} className="bg-[#F8FAFC] px-6 py-3 rounded-full border border-black/5 flex items-center gap-2 shadow-sm">
              <div className="w-2 h-2 bg-[#F2A93B] rounded-full"></div>
              <span className="text-[#0B1120]/80 font-bold text-sm">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries: IndustryCard[] = [
    { icon: <Monitor size={32} />, label: 'Technology & SaaS' },
    { icon: <Database size={32} />, label: 'Financial Services' },
    { icon: <Stethoscope size={32} />, label: 'Healthcare' },
    { icon: <ShoppingCart size={32} />, label: 'eCommerce' },
    { icon: <Building2 size={32} />, label: 'Enterprise B2B' },
    { icon: <Rocket size={32} />, label: 'Startup Growth' },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0B1120] text-center mb-16">
          Industries We <span className="text-[#F2A93B]">Support</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl border border-black/5 flex flex-col items-center text-center gap-6 shadow-sm group"
            >
              <div className="text-[#00A3FF] transition-transform group-hover:scale-110 duration-300">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0B1120]">{industry.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const tags = [
    'SEMrush', 'Ahrefs', 'Surfer SEO', 'Clearscope', 'MarketMuse',
    'Google Analytics 4', 'Google Search Console', 'WordPress', 'Next.js',
    'HubSpot', 'Mailchimp', 'Grammarly', 'Hemingway', 'Canva', 'Notion',
    'Trello', 'BuzzSumo', 'Hootsuite'
  ];

  const stats = [
    { value: '1000+', label: 'Content Pieces' },
    { value: '3x', label: 'Organic Growth' },
    { value: 'B2B', label: 'Expertise' },
    { value: '14+', label: 'Years' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-bold text-[#0B1120] mb-6">
            Content <span className="text-[#F2A93B]">Technology Stack</span>
          </h2>
          <p className="text-lg text-[#0B1120]/60 mb-10 font-medium">Enterprise content and analytics platforms.</p>
          
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-[#F8FAFC] px-4 py-2 rounded-full border border-black/5 text-sm font-bold text-[#0B1120]/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-black/5 text-center shadow-md">
              <div className="text-5xl font-bold text-[#00A3FF] mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-[#0B1120]/60 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What are content marketing services?",
      answer: "Content marketing services encompass the full lifecycle of content creation, from strategy and research to production, distribution, and performance analysis. It's about creating value for your audience to drive business results."
    },
    {
      question: "How does content support SEO?",
      answer: "High-quality, relevant content is the backbone of SEO. It helps search engines understand your authority on specific topics, provides opportunities to rank for keywords, and attracts backlinks from other reputable sites."
    },
    {
      question: "How long does content marketing take?",
      answer: "Content marketing is a long-term strategy. While some results can be seen in 3-6 months, significant authority and organic growth typically compound over 12+ months of consistent effort."
    },
    {
      question: "Can content marketing increase leads?",
      answer: "Yes, by addressing the specific pain points and questions of your target audience at different stages of the buyer's journey, you can attract qualified prospects and guide them toward conversion."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1120] mb-4">
            Frequently Asked <span className="text-[#F2A93B]">Questions</span>
          </h2>
          <p className="text-lg text-[#0B1120]/60 font-medium">Everything about content marketing</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-[#0B1120]">{faq.question}</span>
                {openIndex === idx ? <ChevronDown className="rotate-180 transition-transform" /> : <ChevronDown className="transition-transform" />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-[#0B1120]/70 leading-relaxed"
                  >
                    {faq.answer}
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
    <section className="py-24 bg-[#0B1120] text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B2CBF] rounded-full blur-[150px]"></div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-bold text-white mb-6">
          Build Your <span className="text-[#F2A93B]">Content Strategy</span>
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how content marketing can build your authority and drive measurable growth.
        </p>
        <button className="bg-[#F2A93B] hover:bg-[#E0982A] text-white px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20">
          Start Content Marketing
        </button>
      </div>
    </section>
  );
};

const GlobalPresence = () => {
  const regions = [
    {
      name: 'INDIA',
      cities: ['Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Kochi']
    },
    {
      name: 'AMERICAS',
      cities: ['United States', 'Canada']
    },
    {
      name: 'EUROPE',
      cities: ['United Kingdom', 'Germany', 'Ireland']
    },
    {
      name: 'ASIA PACIFIC',
      cities: ['Singapore', 'Australia', 'New Zealand', 'India']
    },
    {
      name: 'MIDDLE EAST',
      cities: ['UAE', 'Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait']
    }
  ];

  return (
    <section className="py-24 bg-[#0B1120] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center gap-3 text-white mb-16">
          <Globe className="text-[#00A3FF]" size={24} />
          <h2 className="text-2xl font-bold">Global Presence</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {regions.map((region) => (
            <div key={region.name}>
              <h3 className="text-[#00A3FF] text-[11px] font-black tracking-[0.2em] mb-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#00A3FF] rounded-full"></div>
                {region.name}
              </h3>
              <ul className="space-y-4">
                {region.cities.map((city) => (
                  <li key={city} className="text-white/60 text-[15px] font-medium hover:text-white transition-colors cursor-pointer">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ContentMarketingServices() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif] selection:bg-[#00A3FF] selection:text-white">
      <main>
        <Hero />
        <WhatIsContentMarketing />
        <BusinessBenefits />
        <ContentCapabilities />
        <ContentFramework />
        <WhyChoose />
        <Industries />
        <TechStack />
        <FAQ />
        <CTA />
        <GlobalPresence />
      </main>
    </div>
  );
}
