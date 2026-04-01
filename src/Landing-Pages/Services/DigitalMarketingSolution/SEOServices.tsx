import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ChevronRight, 

  BarChart3, 
  Link as LinkIcon, 
  MapPin, 
  Monitor, 
  ShoppingCart, 
  HeartPulse, 
  CreditCard, 
  Building2, 
  Rocket,
  CheckCircle2,
  MessageCircle,
  ArrowUp,
} from 'lucide-react';

// --- Types ---


interface StatItem {
  value: string;
  label: string;
}

interface CapabilityItem {
  id: string;
  title: string;
  description: string;
}

interface IndustryItem {
  icon: React.ReactNode;
  title: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

// --- Components ---

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 bg-[#050B18] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00A3FF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#7B2CBF]/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center space-x-2 mb-6">
            <span className="text-white/50 text-sm uppercase tracking-[0.3em]">Home</span>
            <span className="text-white/30">/</span>
            <span className="text-white/50 text-sm uppercase tracking-[0.3em]">Services</span>
            <span className="text-white/30">/</span>
            <span className="text-[#FF9D00] text-sm uppercase tracking-[0.3em] font-bold">SEO Services</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight">
            <span className="text-[#FF9D00]">SEO</span> Services
          </h1>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-white/90 mb-6 max-w-4xl mx-auto leading-tight">
            Strategic Search Engine Optimization for Sustainable Organic Growth
          </h2>
          
          <p className="text-lg lg:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            mTouch Labs provides performance-driven SEO services designed to increase search visibility, 
            strengthen domain authority, and generate high-intent organic traffic. Organic visibility is not accidental 
            — it is engineered.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-[#7B2CBF] hover:bg-[#6A24A3] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/20">
              Start Your SEO Strategy
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhatIsSeo = () => {
  const cards = [
    { icon: <Monitor className="w-8 h-8 text-[#00A3FF]" />, title: 'Technical SEO' },
    { icon: <BarChart3 className="w-8 h-8 text-[#00A3FF]" />, title: 'Content Strategy' },
    { icon: <LinkIcon className="w-8 h-8 text-[#00A3FF]" />, title: 'Authority Building' },
    { icon: <MapPin className="w-8 h-8 text-[#00A3FF]" />, title: 'Local SEO' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#1F2937] mb-8">
              What Are <span className="text-[#FF9D00]">SEO Services</span>?
            </h2>
            <p className="text-lg text-[#4B5563] mb-6 leading-relaxed">
              SEO services involve optimizing a website's technical structure, content relevance, and authority signals 
              to improve search engine rankings — including technical auditing, on-page optimization, content strategy, 
              authority development, and performance monitoring.
            </p>
            <p className="text-lg text-[#4B5563] mb-8 leading-relaxed">
              Our SEO work integrates with <span className="text-[#00A3FF] font-bold">content marketing</span> and <span className="text-[#00A3FF] font-bold">conversion optimization</span> for comprehensive digital growth.
            </p>
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Combined with <span className="text-[#00A3FF] font-bold">web development</span> expertise, we ensure technical foundations support long-term ranking stability.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-[#F8FAFC] p-8 rounded-2xl border border-[#E2E8F0] flex flex-col items-center text-center group transition-all"
              >
                <div className="mb-4 p-4 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-all">
                  {card.icon}
                </div>
                <h3 className="font-bold text-[#1F2937] text-lg">{card.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Outcomes = () => {
  const stats: StatItem[] = [
    { value: '300+', label: 'SEO Projects' },
    { value: '85%', label: 'Page 1 Rankings' },
    { value: '3-6', label: 'Months to Results' },
    { value: '14+', label: 'Years Experience' },
  ];

  const benefits = [
    'Increased organic traffic & higher search rankings',
    'Improved keyword positioning & domain authority',
    'Better user engagement & reduced paid dependency',
    'Technical development expertise integration',
    'Continuous algorithm alignment & transparent reporting',
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E2E8F0] text-center shadow-sm">
                <div className="text-4xl font-black text-[#00A3FF] mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-[#4B5563] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div>
            <h2 className="text-4xl font-black text-[#1F2937] mb-4">
              Measurable Outcomes of <span className="text-[#FF9D00]">Structured SEO</span>
            </h2>
            <p className="text-lg text-[#4B5563] mb-8">SEO builds long-term digital equity:</p>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#FF9D00] mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-[#4B5563] text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const items: CapabilityItem[] = [
    { 
      id: '01', 
      title: 'Technical SEO', 
      description: 'Site architecture, crawl structure, Core Web Vitals, mobile usability, structured data, canonical management, and indexing configuration.' 
    },
    { 
      id: '02', 
      title: 'On-Page SEO', 
      description: 'Keyword research & mapping, search intent analysis, metadata optimization, internal linking strategy, and content hierarchy refinement.' 
    },
    { 
      id: '03', 
      title: 'Enterprise SEO', 
      description: 'Multi-page frameworks, content cluster architecture, scalable URL structuring, performance dashboards, and competitive keyword benchmarking.' 
    },
    { 
      id: '04', 
      title: 'Content-Led Growth', 
      description: 'Topic authority development, semantic keyword coverage, E-E-A-T enhancement, conversion-aligned content, and search snippet optimization.' 
    },
    { 
      id: '05', 
      title: 'Authority & Local SEO', 
      description: 'Quality backlink acquisition, digital PR, brand mentions, link profile analysis, local search visibility, and geo-focused keyword targeting.' 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1F2937] mb-4">
            Our SEO <span className="text-[#FF9D00]">Capabilities</span>
          </h2>
          <p className="text-lg text-[#4B5563]">From technical foundations to authority building</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-[#F8FAFC] p-10 rounded-2xl border border-[#E2E8F0] relative group hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="absolute top-6 left-6 w-10 h-10 bg-[#00A3FF] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                {item.id}
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#1F2937] mb-4">{item.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Framework = () => {
  const steps = [
    { id: 1, label: 'Audit' },
    { id: 2, label: 'Strategy' },
    { id: 3, label: 'Technical Fix' },
    { id: 4, label: 'Content' },
    { id: 5, label: 'Authority' },
    { id: 6, label: 'Monitor' },
    { id: 7, label: 'Refine' },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1F2937] mb-4">
            Our SEO <span className="text-[#FF9D00]">Implementation Framework</span>
          </h2>
          <p className="text-lg text-[#4B5563]">SEO is an ongoing optimization cycle, not a one-time setup.</p>
        </div>
        
        <div className="relative flex flex-wrap justify-center items-center gap-4 lg:gap-0">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#E2E8F0] -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center lg:w-[14%]">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm flex items-center justify-center mb-4 relative group hover:border-[#00A3FF] transition-all">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#00A3FF] text-white rounded-full flex items-center justify-center font-bold text-xs">
                  {step.id}
                </div>
                <span className="font-bold text-[#1F2937] text-sm lg:text-base">{step.label}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="lg:hidden text-[#E2E8F0]">
                  <ChevronRight className="w-6 h-6 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const tags = [
    'Data-driven optimization',
    'Technical dev expertise',
    'Content architecture planning',
    'Transparent reporting',
    'Scalable enterprise SEO',
    'Algorithm alignment',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-[#1F2937] mb-4">
          Why Choose <span className="text-[#00A3FF]">mTouch Labs</span>?
        </h2>
        <p className="text-lg text-[#4B5563] mb-12">We combine technology, analytics, and strategy for sustainable organic growth.</p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {tags.map((tag, idx) => (
            <div key={idx} className="bg-white border border-[#E2E8F0] px-6 py-3 rounded-full flex items-center shadow-sm hover:shadow-md transition-all">
              <div className="w-2 h-2 rounded-full bg-[#FF9D00] mr-3" />
              <span className="font-semibold text-[#1F2937]">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries: IndustryItem[] = [
    { icon: <Monitor className="w-10 h-10" />, title: 'Technology & SaaS' },
    { icon: <ShoppingCart className="w-10 h-10" />, title: 'eCommerce' },
    { icon: <HeartPulse className="w-10 h-10" />, title: 'Healthcare' },
    { icon: <CreditCard className="w-10 h-10" />, title: 'Financial Services' },
    { icon: <Building2 className="w-10 h-10" />, title: 'Enterprise B2B' },
    { icon: <Rocket className="w-10 h-10" />, title: 'Startups' },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1F2937] mb-4">
            Industries We <span className="text-[#FF9D00]">Serve</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white p-12 rounded-2xl border border-[#E2E8F0] flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="mb-6 text-[#00A3FF] transform group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1F2937]">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const tools = [
    'Google Search Console', 'Google Analytics 4', 'SEMrush', 'Ahrefs',
    'Moz Pro', 'Screaming Frog', 'Surfer SEO', 'Clearscope', 'Schema Markup',
    'Core Web Vitals', 'PageSpeed Insights', 'GTmetrix', 'Majestic',
    'BrightLocal', 'Yoast SEO', 'Sitebulb', 'Looker Studio', 'Tag Manager'
  ];

  const stats = [
    { value: '18+', label: 'SEO Tools' },
    { value: '300+', label: 'Projects' },
    { value: '85%', label: 'Page 1' },
    { value: '14+', label: 'Years' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-[#1F2937] mb-4">
              SEO <span className="text-[#FF9D00]">Technology Stack</span>
            </h2>
            <p className="text-lg text-[#4B5563] mb-8">Enterprise SEO platforms and analytics tools.</p>
            
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <span key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] px-4 py-2 rounded-full text-sm font-medium text-[#4B5563]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E2E8F0] text-center shadow-sm group hover:border-[#00A3FF] transition-all">
                <div className="text-4xl font-black text-[#00A3FF] mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-[#4B5563] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    { 
      question: 'What do SEO services include?', 
      answer: 'Our SEO services include technical auditing, keyword research, on-page optimization, content strategy, authority building, and monthly performance reporting.' 
    },
    { 
      question: 'How long does SEO take to show results?', 
      answer: 'Typically, significant organic growth is observed within 3 to 6 months, depending on industry competitiveness and current domain authority.' 
    },
    { 
      question: 'Is SEO better than paid advertising?', 
      answer: 'SEO provides long-term sustainable growth and higher ROI over time, while paid advertising offers immediate visibility. A balanced strategy often works best.' 
    },
    { 
      question: 'Do you provide performance reports?', 
      answer: 'Yes, we provide comprehensive monthly reports tracking keyword rankings, organic traffic growth, conversion rates, and technical health.' 
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#1F2937] mb-4">
            Frequently Asked <span className="text-[#FF9D00]">Questions</span>
          </h2>
          <p className="text-lg text-[#4B5563]">Everything about SEO services</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-[#1F2937]">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-[#4B5563] transition-transform ${activeIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-[#4B5563] leading-relaxed">
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

const CTA = () => {
  return (
    <section className="py-24 bg-[#050B18] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/tech/1920/1080?blur=10')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          Grow Your <span className="text-[#FF9D00]">Organic Visibility</span>
        </h2>
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
          Let's discuss how SEO can drive sustainable traffic and revenue growth.
        </p>
        <button className="bg-[#7B2CBF] hover:bg-[#6A24A3] text-white px-12 py-5 rounded-lg font-bold text-xl transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/30">
          Start Your SEO Strategy
        </button>
      </div>
    </section>
  );
};

const StickyWidgets = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      <button className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8 text-white" />
      </button>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-14 h-14 bg-[#00A3FF] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <ArrowUp className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export default function SEOServices() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#00A3FF] selection:text-white">
      <main>
        <Hero />
        <WhatIsSeo />
        <Outcomes />
        <Capabilities />
        <Framework />
        <WhyChoose />
        <Industries />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
      <StickyWidgets />
    </div>
  );
}
