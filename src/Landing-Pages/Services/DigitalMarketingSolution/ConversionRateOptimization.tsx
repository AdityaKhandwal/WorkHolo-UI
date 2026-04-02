import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ChevronRight, 
  TrendingUp,
  Zap,
  CheckCircle2,
  PieChart,
  Activity,
  Monitor,
  CreditCard,
  ShoppingCart,
  Stethoscope,
  Building2,
  Rocket
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative pt-48 pb-32 bg-[#0B0E14] overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px]" />
    </div>
    
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="flex items-center justify-center gap-3 text-[14px] font-medium text-gray-400 mb-10">
          <span className="hover:text-white cursor-pointer">Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hover:text-white cursor-pointer">Services</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#F2A93B]">Conversion Rate Optimization</span>
        </nav>
        
        <h1 className="text-5xl md:text-[80px] font-display font-extrabold text-white mb-10 leading-[1.1] tracking-[-0.03em]">
          Conversion Rate <span className="text-[#F2A93B]">Optimization</span> <br /> Services
        </h1>
        
        <p className="text-xl md:text-[28px] text-gray-300 max-w-4xl mx-auto mb-14 font-medium leading-tight">
          Turning Website Traffic Into Measurable Revenue Growth
        </p>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-5xl mx-auto mb-16 italic leading-relaxed font-light">
          WorkHolo Labs delivers strategic CRO services designed to maximize the value of existing website traffic. Traffic without conversion is wasted potential.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#7B2CBF] hover:bg-[#6A24A3] text-white px-12 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-purple-900/20 transition-all"
        >
          Start CRO Strategy
        </motion.button>
      </motion.div>
    </div>
  </section>
);

const WhatIsCRO = () => {
  const cards = [
    { icon: <PieChart className="w-10 h-10 text-blue-500" />, title: "Funnel Analysis" },
    { icon: <Zap className="w-10 h-10 text-green-500" />, title: "A/B Testing" },
    { icon: <Activity className="w-10 h-10 text-orange-500" />, title: "Heatmap Analysis" },
    { icon: <TrendingUp className="w-10 h-10 text-purple-500" />, title: "Revenue Growth" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-[56px] font-display font-bold text-[#141414] mb-10 leading-tight">
              What Are <span className="text-[#F2A93B]">CRO Services</span>?
            </h2>
            <div className="space-y-8 text-[19px] text-gray-600 leading-[1.6]">
              <p>
                CRO services analyze user behavior and improve digital touchpoints to increase the percentage of visitors who complete desired actions — including funnel analysis, A/B testing, landing page refinement, and performance monitoring.
              </p>
              <p>
                Our CRO integrates with <span className="text-blue-600 font-bold">SEO</span> and <span className="text-blue-600 font-bold">PPC strategies</span> to maximize campaign ROI and overall digital performance.
              </p>
              <p>
                Combined with <span className="text-blue-600 font-bold">UX design</span> expertise, we create data-driven optimization frameworks that increase conversions without increasing traffic costs.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-8">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                className="bg-[#F8F9FA] p-12 rounded-[32px] border border-gray-100 flex flex-col items-center text-center transition-all"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">{card.icon}</div>
                <h3 className="font-display font-bold text-xl text-[#141414]">{card.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessBenefits = () => {
  const stats = [
    { value: "250+", label: "CRO Projects" },
    { value: "45%", label: "Avg Conversion Lift" },
    { value: "30%", label: "Lower CPA" },
    { value: "14+", label: "Years Experience" },
  ];

  const benefits = [
    "Increased revenue from existing traffic",
    "Reduced cost per acquisition & higher ROI",
    "Improved user engagement & data-backed decisions",
    "UX-informed decision framework",
    "Structured experimentation models"
  ];

  return (
    <section className="py-32 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[32px] shadow-sm text-center border border-gray-100"
              >
                <div className="text-[52px] font-black text-blue-600 mb-3 tracking-tighter leading-none">{stat.value}</div>
                <div className="text-gray-500 font-bold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-[56px] font-display font-bold text-[#141414] mb-10 leading-tight">
              Business Benefits of <span className="text-[#F2A93B]">CRO</span>
            </h2>
            <p className="text-[20px] text-gray-600 mb-10 font-medium">
              CRO maximizes efficiency across digital channels:
            </p>
            <ul className="space-y-6">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[19px] text-gray-700 font-medium">
                  <CheckCircle2 className="w-7 h-7 text-yellow-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const items = [
    {
      id: "01",
      title: "Funnel Analysis",
      desc: "Entry sources, landing page interactions, drop-off points, checkout friction, and retention bottleneck evaluation."
    },
    {
      id: "02",
      title: "Landing Page Optimization",
      desc: "Headline clarity, messaging alignment, CTA placement, page structure, speed performance, and mobile responsiveness."
    },
    {
      id: "03",
      title: "A/B Testing",
      desc: "Variant testing, CTA experiments, layout restructuring, offer positioning comparison, and micro-conversion analysis."
    },
    {
      id: "04",
      title: "Behavior & Heatmaps",
      desc: "Click tracking, scroll depth analysis, engagement patterns, session recordings, and behavioral insight-driven optimization."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-[56px] font-display font-bold text-[#141414] mb-6">
            Our CRO <span className="text-[#F2A93B]">Capabilities</span>
          </h2>
          <p className="text-[22px] text-gray-500 font-medium">From funnel analysis to revenue optimization</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#F8F9FA] p-14 rounded-[40px] border border-gray-100 relative group transition-all"
            >
              <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg mb-8 shadow-lg shadow-blue-200">
                {item.id}
              </div>
              <h3 className="text-[28px] font-display font-bold text-[#141414] mb-6 leading-tight">{item.title}</h3>
              <p className="text-[19px] text-gray-600 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Framework = () => {
  const steps = [
    { id: 1, title: "Audit" },
    { id: 2, title: "Behavior" },
    { id: 3, title: "Hypothesis" },
    { id: 4, title: "A/B Test" },
    { id: 5, title: "Validate" },
    { id: 6, title: "Iterate" },
  ];

  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-[56px] font-display font-bold text-[#141414] mb-6">
            Our CRO <span className="text-[#F2A93B]">Framework</span>
          </h2>
          <p className="text-[22px] text-gray-500 font-medium">Optimization is continuous, not one-time.</p>
        </div>
        
        <div className="relative flex flex-wrap justify-center items-center gap-8 md:gap-0">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-100 -translate-y-1/2 hidden md:block" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex items-center md:flex-1 justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="bg-white border-[3px] border-blue-100 p-10 md:p-12 rounded-[36px] shadow-xl w-48 md:w-56 text-center group hover:border-blue-600 transition-all"
              >
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-base font-black shadow-lg">
                  {step.id}
                </div>
                <span className="font-display font-bold text-xl text-gray-800">{step.title}</span>
              </motion.div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block mx-4">
                  <ChevronRight className="w-8 h-8 text-blue-300" />
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
  const features = [
    "Data-first methodology",
    "SEO & PPC integration",
    "UX-informed decisions",
    "Structured experimentation",
    "Transparent analytics",
    "Continuous improvement"
  ];

  return (
    <section className="py-32 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-[56px] font-display font-bold text-[#141414] mb-8">
          Why Choose <span className="text-[#F2A93B]">WorkHolo Labs</span>?
        </h2>
        <p className="text-[22px] text-gray-500 mb-16 font-medium max-w-3xl mx-auto">We transform website performance into measurable business growth.</p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white px-10 py-5 rounded-full border border-gray-200 shadow-sm flex items-center gap-4"
            >
              <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
              <span className="font-bold text-[18px] text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { title: "SaaS & Subscriptions", icon: <Monitor className="w-14 h-14 text-blue-500" /> },
    { title: "eCommerce & Retail", icon: <ShoppingCart className="w-14 h-14 text-green-500" /> },
    { title: "Financial Services", icon: <CreditCard className="w-14 h-14 text-blue-400" /> },
    { title: "Healthcare", icon: <Stethoscope className="w-14 h-14 text-red-400" /> },
    { title: "Enterprise B2B", icon: <Building2 className="w-14 h-14 text-gray-600" /> },
    { title: "Startup Growth", icon: <Rocket className="w-14 h-14 text-orange-500" /> },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-[56px] font-display font-bold text-[#141414] mb-20">
          Industries We <span className="text-[#F2A93B]">Support</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}
              className="bg-[#F8F9FA] p-16 rounded-[48px] border border-gray-100 flex flex-col items-center justify-center group transition-all"
            >
              <div className="mb-8 transform group-hover:scale-110 transition-transform">{industry.icon}</div>
              <h3 className="text-2xl font-display font-bold text-[#141414]">{industry.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const tools = [
    "Optimizely", "VWO", "Google Optimize", "Hotjar", "Crazy Egg", "FullStory",
    "Google Analytics 4", "Mixpanel", "Amplitude", "Unbounce", "Instapage",
    "Mouseflow", "Lucky Orange", "Heap Analytics", "Looker Studio",
    "Tag Manager", "Figma", "UserTesting"
  ];

  const stats = [
    { value: "250+", label: "CRO Projects" },
    { value: "45%", label: "Avg Lift" },
    { value: "18+", label: "Tools" },
    { value: "14+", label: "Years" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-[56px] font-display font-bold text-[#141414] mb-8">
              CRO <span className="text-[#F2A93B]">Technology</span> Stack
            </h2>
            <p className="text-[22px] text-gray-500 mb-12 font-medium">Enterprise optimization and analytics platforms.</p>
            
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, idx) => (
                <span key={idx} className="bg-gray-50 px-6 py-3 rounded-full border border-gray-200 text-[15px] font-bold text-gray-600 hover:bg-white hover:shadow-md transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-14 rounded-[40px] border border-gray-100 shadow-sm text-center"
              >
                <div className="text-[52px] font-black text-blue-600 mb-3 tracking-tighter leading-none">{stat.value}</div>
                <div className="text-gray-500 font-bold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "What are CRO services?", a: "CRO services analyze user behavior and improve digital touchpoints to increase the percentage of visitors who complete desired actions — including funnel analysis, A/B testing, landing page refinement, and performance monitoring." },
    { q: "How does CRO increase revenue?", a: "By optimizing the conversion funnel, we ensure that more of your existing traffic converts into paying customers, effectively lowering your acquisition costs and increasing overall profitability." },
    { q: "How long does CRO take?", a: "CRO is an ongoing process. Initial audits and setup take 2-4 weeks, while significant results from A/B testing typically appear within 2-3 months of continuous experimentation." },
    { q: "Is CRO necessary with PPC?", a: "Absolutely. CRO makes your PPC campaigns more profitable by ensuring the traffic you pay for actually converts on your landing pages, maximizing your return on ad spend." },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-[56px] font-display font-bold text-[#141414] mb-6">
            Frequently Asked <span className="text-[#F2A93B]">Questions</span>
          </h2>
          <p className="text-[22px] text-gray-500 font-medium">Everything about CRO services</p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-[22px] font-display font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{faq.q}</span>
                <div className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-7 h-7 text-gray-400" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 text-[19px] text-gray-600 leading-[1.7] font-medium">{faq.a}</p>
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
  <section className="py-32 bg-[#0B0E14] text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600 rounded-full blur-[180px]" />
    </div>
    
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
      <h2 className="text-4xl md:text-[72px] font-display font-extrabold text-white mb-10 leading-tight tracking-tight">
        Maximize Your <span className="text-[#F2A93B]">Conversion Rate</span>
      </h2>
      <p className="text-[24px] text-gray-300 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
        Let's discuss how CRO can turn your existing traffic into measurable revenue.
      </p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#7B2CBF] hover:bg-[#6A24A3] text-white px-16 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-purple-900/40 transition-all"
      >
        Start CRO Strategy
      </motion.button>
    </div>
  </section>
);

// --- Main App ---

export default function ConversionRateOptimization() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#7B2CBF] selection:text-white">
      <main>
        <Hero />
        <WhatIsCRO />
        <BusinessBenefits />
        <Capabilities />
        <Framework />
        <WhyChoose />
        <Industries />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
