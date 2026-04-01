import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Search, 
  Target, 
  BarChart3, 
  PieChart, 
  CheckCircle2, 
  Laptop, 
  ShoppingCart, 
  Stethoscope, 
  CreditCard, 
  Building2, 
  Rocket,
  Plus,
  Minus,
} from 'lucide-react';

// --- Components ---


const Hero = () => (
  <section className="bg-[#05070A] text-white py-20 px-4 md:px-12 text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#7B2CBF,transparent_70%)]"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-2 text-[12px] uppercase tracking-widest mb-6 opacity-60">
        <span>Home</span>
        <ChevronRight size={12} />
        <span>Services</span>
        <ChevronRight size={12} />
        <span className="text-yellow-500">Digital Marketing Solutions</span>
      </div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
      >
        Digital <span className="text-yellow-500">Marketing</span> Solutions
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl opacity-80 mb-10 max-w-3xl mx-auto leading-relaxed"
      >
        Integrated Growth Strategies Powered by Data, Performance & Technology
      </motion.p>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm md:text-base opacity-60 max-w-2xl mx-auto italic"
      >
        mTouch Labs delivers structured digital marketing solutions designed to help businesses attract, convert, and retain customers through measurable performance strategies. Marketing should generate predictable growth, not unpredictable spending.
      </motion.p>
    </div>
  </section>
);

const WhatAreSolutions = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-[#05070A]">
          What Are <span className="text-yellow-500">Digital Marketing Solutions?</span>
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Digital marketing solutions encompass a coordinated set of strategies designed to increase online visibility, generate qualified leads, and improve conversion outcomes — including search optimization, paid acquisition, audience targeting, conversion funnels, and analytics.
          </p>
          <p>
            Our <span className="text-blue-600 font-semibold underline">SEO services</span> build sustainable organic authority, while <span className="text-blue-600 font-semibold underline">PPC campaigns</span> drive immediate qualified traffic.
          </p>
          <p>
            Combined with <span className="text-blue-600 font-semibold underline">conversion optimization</span> and <span className="text-blue-600 font-semibold underline">content marketing</span>, we create scalable digital growth systems that deliver long-term, measurable performance.
          </p>
        </div>
      </motion.div>
      <div className="grid grid-cols-2 gap-6">
        {[
          { icon: <Search className="text-blue-500" />, title: "Search Optimization" },
          { icon: <Target className="text-[#7B2CBF]" />, title: "Paid Acquisition" },
          { icon: <BarChart3 className="text-pink-500" />, title: "Conversion Funnels" },
          { icon: <PieChart className="text-green-500" />, title: "Analytics & Reporting" },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center flex flex-col items-center gap-4"
          >
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="font-bold text-gray-800">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MarketingApproach = () => (
  <section className="py-24 px-4 md:px-12 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-2 gap-6">
        {[
          { val: "500+", label: "Campaigns Managed" },
          { val: "3x", label: "Avg ROI Improvement" },
          { val: "14+", label: "Years Experience" },
          { val: "5", label: "Marketing Channels" },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-white rounded-2xl shadow-sm text-center border border-gray-100"
          >
            <div className="text-4xl font-black text-blue-600 mb-2">{stat.val}</div>
            <div className="text-sm font-medium text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-[#05070A]">
          Technology-Integrated <span className="text-yellow-500">Marketing Approach</span>
        </h2>
        <p className="text-gray-600 mb-8">Our solutions integrate with technology infrastructure:</p>
        <ul className="space-y-4">
          {[
            "CRM platforms & marketing automation tools",
            "Analytics systems & AI-powered optimization",
            "Cloud-based data tracking environments",
            "Cross-channel performance measurement",
            "Measurable ROI tracking & attribution"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700">
              <CheckCircle2 className="text-yellow-500" size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const Capabilities = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-[#05070A]">
        Our Marketing <span className="text-yellow-500">Capabilities</span>
      </h2>
      <p className="text-gray-500">From strategy to scalable execution</p>
    </div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
      {[
        { id: "01", title: "SEO & Organic Growth", desc: "Technical website optimization, content relevance enhancement, keyword strategy, and search performance metrics for sustainable authority building." },
        { id: "02", title: "Performance Advertising", desc: "High-intent search campaigns, precision audience targeting, cost-efficient acquisition models, data-driven bidding, and continuous ROI optimization." },
        { id: "03", title: "App Growth & ASO", desc: "App store optimization, install growth campaigns, engagement-based remarketing, and conversion optimization bridging development and marketing." },
        { id: "04", title: "Conversion Optimization", desc: "Funnel analysis, user behavior tracking, landing page refinement, A/B testing, and engagement improvement turning traffic into revenue." },
        { id: "05", title: "Content & Analytics", desc: "Search-aligned content strategy, thought leadership positioning, performance dashboards, attribution tracking, and data-driven decision reporting." }
      ].map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`p-10 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-blue-200 transition-all ${idx === 4 ? 'md:col-span-2' : ''}`}
        >
          <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold mb-6">
            {item.id}
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const GrowthFramework = () => (
  <section className="py-24 px-4 md:px-12 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <h2 className="text-4xl font-bold mb-4 text-[#05070A]">
        Our Growth <span className="text-yellow-500">Framework</span>
      </h2>
      <p className="text-gray-500">Structured approach ensuring predictable performance improvements.</p>
    </div>
    <div className="max-w-7xl mx-auto relative">
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
        {[
          "Assessment", "Channel Plan", "Deployment", "Monitoring", "Optimization", "Scale"
        ].map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-white border-2 border-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative">
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <span className="font-bold text-gray-800 text-center px-2">{step}</span>
            </div>
            {idx < 5 && <ArrowRight className="lg:hidden text-blue-500 mb-4" />}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="py-24 px-4 md:px-12 bg-white text-center">
    <h2 className="text-4xl font-bold mb-6 text-[#05070A]">
      Why Choose <span className="text-yellow-500">mTouch Labs?</span>
    </h2>
    <p className="text-gray-500 mb-12">We focus on sustainable digital growth — not vanity metrics.</p>
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
      {[
        "Performance-focused strategy",
        "Data-backed decision models",
        "Dev & analytics integration",
        "Cross-channel expertise",
        "Measurable ROI tracking",
        "Continuous optimization"
      ].map((tag, idx) => (
        <motion.div 
          key={idx}
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm flex items-center gap-2"
        >
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          {tag}
        </motion.div>
      ))}
    </div>
  </section>
);

const Industries = () => (
  <section className="py-24 px-4 md:px-12 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-[#05070A]">
        Industries We <span className="text-yellow-500">Support</span>
      </h2>
    </div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: <Laptop className="text-blue-500" />, title: "Technology & SaaS" },
        { icon: <ShoppingCart className="text-purple-500" />, title: "eCommerce & Retail" },
        { icon: <Stethoscope className="text-red-500" />, title: "Healthcare Platforms" },
        { icon: <CreditCard className="text-green-500" />, title: "Financial Services" },
        { icon: <Building2 className="text-gray-700" />, title: "Enterprise Businesses" },
        { icon: <Rocket className="text-orange-500" />, title: "Startup Growth" }
      ].map((industry, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center">
            {industry.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{industry.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

const TechStack = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-6 text-[#05070A]">
          Marketing <span className="text-yellow-500">Technology Stack</span>
        </h2>
        <p className="text-gray-600 mb-10">Enterprise marketing platforms and analytics tools.</p>
        <div className="flex flex-wrap gap-3">
          {[
            "Google Ads", "Meta Ads", "LinkedIn Ads", "Google Analytics 4",
            "Google Search Console", "SEMrush", "Ahrefs", "Moz", "HubSpot",
            "Mailchimp", "Klaviyo", "Hotjar", "Optimizely", "Salesforce CRM",
            "Looker Studio", "Tag Manager", "Facebook Pixel", "Zapier"
          ].map((tool, idx) => (
            <span key={idx} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-600">
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          { val: "18+", label: "Marketing Tools" },
          { val: "5", label: "Channels" },
          { val: "500+", label: "Campaigns" },
          { val: "ROI", label: "Focused" },
        ].map((card, idx) => (
          <div key={idx} className="p-10 bg-white border border-gray-100 rounded-2xl shadow-sm text-center">
            <div className="text-4xl font-black text-blue-600 mb-2">{card.val}</div>
            <div className="text-sm font-medium text-gray-500">{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "What are digital marketing solutions?", a: "Digital marketing solutions are integrated strategies that leverage online channels to reach, engage, and convert target audiences. This includes SEO, PPC, content marketing, and more." },
    { q: "How are they different from basic marketing?", a: "Unlike traditional marketing, digital solutions offer precise targeting, real-time tracking, and data-driven optimization to ensure every dollar spent contributes to growth." },
    { q: "Can digital marketing improve ROI?", a: "Yes, by focusing on high-intent audiences and optimizing conversion funnels, digital marketing significantly lowers acquisition costs and increases lifetime value." },
    { q: "Do you provide performance tracking?", a: "Absolutely. We provide comprehensive dashboards that track key metrics like CPC, CTR, conversion rates, and overall ROI in real-time." }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-[#05070A]">
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </h2>
        <p className="text-gray-500">Everything about digital marketing solutions</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-6 flex justify-between items-center text-left font-bold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              {faq.q}
              {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-gray-600 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="bg-[#05070A] text-white py-24 px-4 md:px-12 text-center relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 blur-[100px]"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7B2CBF] opacity-20 blur-[100px]"></div>
    <div className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-5xl font-black mb-8 leading-tight">
        Accelerate Your <span className="text-yellow-500">Digital Growth</span>
      </h2>
      <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto">
        Let's discuss how our marketing solutions can drive measurable business growth.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-[#05070A] px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-yellow-500/20">
        Start Your Growth Strategy
      </button>
    </div>
  </section>
);

const GlobalPresence = () => (
  <section className="bg-[#05070A] text-white py-24 px-4 md:px-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 text-xl font-bold mb-16">
        <Globe className="text-blue-500" />
        Global Presence
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {[
          { region: "INDIA", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
          { region: "AMERICAS", cities: ["United States", "Canada"] },
          { region: "EUROPE", cities: ["United Kingdom", "Germany", "Ireland"] },
          { region: "ASIA PACIFIC", cities: ["Singapore", "Australia", "New Zealand", "India"] },
          { region: "MIDDLE EAST", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] }
        ].map((loc, idx) => (
          <div key={idx}>
            <div className="flex items-center gap-2 text-[11px] font-black tracking-widest text-blue-400 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {loc.region}
            </div>
            <ul className="space-y-4 text-sm opacity-60">
              {loc.cities.map((city, cIdx) => (
                <li key={cIdx} className="hover:text-white transition-colors cursor-pointer">{city}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Main App ---

export default function DigitalMarketing() {
  return (
    <div className="font-sans text-[#05070A] selection:bg-[#7B2CBF] selection:text-white">
      <Hero />
      <WhatAreSolutions />
      <MarketingApproach />
      <Capabilities />
      <GrowthFramework />
      <WhyChoose />
      <Industries />
      <TechStack />
      <FAQ />
      <CTA />
      <GlobalPresence />
      
      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-8 right-8 z-[100] group">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        <div className="relative bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.389l-.72 2.634 2.693-.706c.823.527 1.798.83 2.841.83 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.39 8.191c-.145.405-.72.739-1.01.768-.29.029-.652.029-1.01-.073-.358-.101-.812-.261-1.377-.507-2.391-1.043-3.942-3.478-4.058-3.637-.116-.159-.942-1.246-.942-2.376 0-1.13.58-1.681.783-1.913.203-.232.435-.29.58-.29.145 0 .29 0 .405.014.116.014.261-.058.405.29.145.348.493 1.203.536 1.29.043.087.072.188.014.304-.058.116-.087.188-.174.29-.087.101-.188.232-.261.304-.087.087-.188.188-.087.362.101.174.449.739.956 1.188.652.58 1.203.754 1.377.841.174.087.275.072.377-.043.101-.116.435-.507.551-.681.116-.174.232-.145.391-.087.159.058 1.014.478 1.188.565.174.087.29.13.333.203.043.072.043.42-.101.826z"/>
          </svg>
        </div>
      </div>

      {/* Back to Top */}
      <div className="fixed bottom-8 right-28 z-[100]">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transition-colors"
        >
          <ChevronDown className="rotate-180" />
        </button>
      </div>
    </div>
  );
}
