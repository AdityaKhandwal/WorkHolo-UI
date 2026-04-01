import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {  
  Globe, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  ShoppingCart, 
  Landmark, 
  Stethoscope, 
  Rocket, 
  Home, 
  Factory,
  MessageCircle,
  ArrowUp,
  Cpu,
  Zap,
  Code2,
  Headphones
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="bg-[#050A18] text-white py-20 px-4 md:px-12 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#7B2CBF]/10 to-transparent pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs text-white/60 mb-8 uppercase tracking-widest">
        <span>Home</span>
        <span>/</span>
        <span>Services</span>
        <span>/</span>
        <span className="text-[#F2A93B]">Sales Cloud Services</span>
      </div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
      >
        Salesforce <span className="text-[#F2A93B]">Sales Cloud</span> Services
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-white/80 max-w-3xl font-medium mb-8"
      >
        Transforming Sales Operations with Intelligent CRM Automation
      </motion.p>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg text-white/60 max-w-4xl leading-relaxed italic"
      >
        Modern sales teams need more than a CRM — they need visibility, automation, and predictive insights to close deals faster. We deliver specialized Sales Cloud Services designed to optimize pipelines, automate processes, and improve forecasting accuracy.
      </motion.p>
    </div>
  </section>
);

const PotentialSection = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Unlock the Full Potential of <br />
          <span className="text-[#F2A93B]">Sales Cloud</span>
        </h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Many businesses use Sales Cloud but fail to maximize lead management automation, pipeline transparency, conversion tracking, territory structuring, and forecast reliability.
        </p>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Our team restructures and optimizes Sales Cloud to align with your actual sales workflow and performance metrics, turning it into a revenue acceleration platform. Our <span className="text-[#00A3FF] font-medium underline cursor-pointer">consulting services</span> ensure strategic alignment.
        </p>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          We help organizations configure and enhance Sales Cloud as a strategic growth engine — with seamless <span className="text-[#00A3FF] font-medium underline cursor-pointer">system integration</span> across marketing, ERP, and customer service platforms.
        </p>
      </div>
      
      <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: <Zap className="text-[#7B2CBF]" />, title: "Pipeline Optimization", desc: "Streamline your sales funnel for maximum efficiency." },
          { icon: <Zap className="text-[#F2A93B]" />, title: "Sales Automation", desc: "Automate repetitive tasks to focus on closing deals." },
          { icon: <Zap className="text-[#00A3FF]" />, title: "Forecast Accuracy", desc: "Get reliable predictions with data-driven insights." },
          { icon: <Zap className="text-green-500" />, title: "Real-Time Analytics", desc: "Monitor performance with live dashboards and reports." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-[#F8FAFC] border border-gray-100 shadow-sm flex flex-col items-center text-center group transition-all hover:shadow-xl"
          >
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ExpertiseSection = () => (
  <section className="py-24 px-4 md:px-12 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
      <div className="lg:w-1/2 grid grid-cols-2 gap-6">
        {[
          { val: "40%", label: "Faster Deal Cycles" },
          { val: "3x", label: "Pipeline Visibility" },
          { val: "95%", label: "Forecast Accuracy" },
          { val: "60%", label: "Less Manual Entry" }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-5xl font-extrabold text-[#00A3FF] mb-2">{stat.val}</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Our Sales Cloud <span className="text-[#F2A93B]">Expertise</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          We deliver comprehensive Sales Cloud services:
        </p>
        <ul className="space-y-4">
          {[
            "Lead & opportunity configuration with sales stage mapping",
            "Territory hierarchy design & role-based visibility",
            "Automated lead routing, follow-ups & task automation",
            "Custom dashboards, KPI views & revenue tracking",
            "Lightning Web Components & advanced reporting"
          ].map((item, i) => (
            <li key={i} className="flex items-start space-x-3 text-gray-700 font-medium">
              <CheckCircle2 className="text-[#F2A93B] mt-1 shrink-0" size={20} />
              <span>{item}</span>
            </li>
          ))}
          <li className="flex items-start space-x-3 text-[#00A3FF] font-bold">
            <CheckCircle2 className="text-[#00A3FF] mt-1 shrink-0" size={20} />
            <span>Lightning Web Components & advanced reporting</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Sales Cloud <span className="text-[#F2A93B]">Services</span>
      </h2>
      <p className="text-gray-500 text-lg">From setup to optimization and integration</p>
    </div>
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { num: "01", title: "Implementation & Setup", desc: "Lead & opportunity config, sales stage mapping, territory hierarchy, role-based visibility, and approval process automation." },
        { num: "02", title: "Sales Automation", desc: "Automated lead routing, follow-up reminders, opportunity stage triggers, task automation rules, and activity tracking." },
        { num: "03", title: "Pipeline & Forecasting", desc: "Custom dashboards, real-time revenue tracking, conversion analytics, performance reporting, and executive KPI views." },
        { num: "04", title: "Customization & LWC", desc: "Custom objects & fields, Lightning Web Components, dynamic page layouts, advanced reporting, and governance rules." },
        { num: "05", title: "Sales Cloud Integration", desc: "Connect Sales Cloud with marketing automation, ERP, customer service tools, eCommerce, and payment gateways for a unified revenue ecosystem." }
      ].map((service, i) => (
        <motion.div 
          key={i}
          whileHover={{ scale: 1.02 }}
          className={`p-10 rounded-3xl bg-[#F8FAFC] border border-gray-100 shadow-sm relative overflow-hidden group ${i === 4 ? 'md:col-span-2' : ''}`}
        >
          <div className="absolute top-6 left-6 w-12 h-12 bg-[#00A3FF] text-white rounded-lg flex items-center justify-center font-bold text-lg z-10">
            {service.num}
          </div>
          <div className="pl-16">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-[#7B2CBF] transition-colors">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ApproachSection = () => (
  <section className="py-24 px-4 md:px-12 bg-[#F8FAFC] relative overflow-hidden">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Our <span className="text-[#F2A93B]">Approach</span>
      </h2>
      <p className="text-gray-600 text-xl">Sales Cloud becomes your central sales intelligence system.</p>
    </div>
    
    <div className="max-w-7xl mx-auto relative">
      {/* Connector Line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
        {[
          "Discovery", "Architecture", "Configuration", "Automation", "Testing", "Deployment", "Optimization"
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-32 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-4 relative border border-gray-100 group hover:border-[#7B2CBF] transition-all">
              <span className="text-sm font-bold text-gray-800">{step}</span>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#00A3FF] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                {i + 1}
              </div>
            </div>
            {i < 6 && <ArrowRight className="text-gray-300 lg:hidden mb-4" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OutcomesSection = () => (
  <section className="py-24 px-4 md:px-12 bg-white text-center">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Business Outcomes <span className="text-[#F2A93B]">You Can Expect</span>
      </h2>
      <p className="text-gray-600 text-lg mb-12">We focus on measurable impact — not just configuration.</p>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {[
          "Faster lead-to-opportunity conversion",
          "Improved pipeline transparency",
          "Reduced sales cycle duration",
          "Higher sales team productivity",
          "Accurate forecasting",
          "Data-driven revenue growth"
        ].map((outcome, i) => (
          <div key={i} className="px-8 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-bold flex items-center space-x-2 hover:border-[#F2A93B] transition-all cursor-default">
            <div className="w-2 h-2 rounded-full bg-[#F2A93B]" />
            <span>{outcome}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const IndustriesSection = () => (
  <section className="py-24 px-4 md:px-12 bg-[#F8FAFC]">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Industries We <span className="text-[#F2A93B]">Serve</span>
      </h2>
    </div>
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: <ShoppingCart size={32} />, title: "eCommerce & Retail" },
        { icon: <Landmark size={32} />, title: "FinTech & Banking" },
        { icon: <Stethoscope size={32} />, title: "Healthcare & HealthTech" },
        { icon: <Rocket size={32} />, title: "SaaS & Technology" },
        { icon: <Home size={32} />, title: "Real Estate & PropTech" },
        { icon: <Factory size={32} />, title: "Manufacturing & Distribution" }
      ].map((industry, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all hover:shadow-xl"
        >
          <div className="text-gray-400 group-hover:text-[#7B2CBF] transition-colors mb-6">
            {industry.icon}
          </div>
          <h3 className="text-xl font-bold">{industry.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

const EcosystemSection = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Sales Cloud <span className="text-[#F2A93B]">Ecosystem</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">Full Salesforce Sales Cloud platform and complementary tools.</p>
        
        <div className="flex flex-wrap gap-3">
          {[
            "Sales Cloud", "Lead Management", "Opportunity Tracking", "Territory Management", 
            "Lightning Web Components", "Salesforce Flow", "Einstein AI", "Apex", "SOQL", 
            "REST APIs", "Dashboards & Reports", "Approval Processes", "Email Templates", 
            "Campaign Management", "Data Loader", "AppExchange"
          ].map((tag, i) => (
            <span key={i} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="lg:w-1/2 grid grid-cols-2 gap-6">
        {[
          { val: "40%", label: "Faster Deals", icon: <Zap className="text-[#00A3FF]" /> },
          { val: "LWC", label: "Custom Components", icon: <Code2 className="text-[#00A3FF]" /> },
          { val: "AI", label: "Einstein Analytics", icon: <Cpu className="text-[#00A3FF]" /> },
          { val: "24/7", label: "Ongoing Support", icon: <Headphones className="text-[#00A3FF]" /> }
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
            <div className="text-5xl font-extrabold text-[#00A3FF] mb-2">{item.val}</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">{item.label}</div>
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What are Salesforce Sales Cloud services?", a: "Salesforce Sales Cloud services encompass implementation, customization, and optimization of the world's leading CRM to help sales teams sell smarter and faster." },
    { q: "How does Sales Cloud improve sales performance?", a: "It provides a 360-degree view of customers, automates manual tasks, streamlines the sales process, and offers predictive insights to close more deals." },
    { q: "Can Sales Cloud integrate with other systems?", a: "Yes, Sales Cloud is highly integrable with ERPs, marketing automation tools, customer service platforms, and custom legacy systems via APIs." },
    { q: "Do you provide ongoing optimization?", a: "Absolutely. We offer managed services to continuously refine your Sales Cloud instance as your business grows and evolves." }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked <span className="text-[#F2A93B]">Questions</span>
        </h2>
        <p className="text-gray-500 text-lg">Everything about Sales Cloud services</p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-8 py-6 flex justify-between items-center text-left font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-8 pb-6 text-gray-600 leading-relaxed"
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

const CTASection = () => (
  <section className="py-24 px-4 md:px-12 bg-[#050A18] text-white text-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
    <div className="max-w-4xl mx-auto relative z-10">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
        Accelerate Your <span className="text-[#F2A93B]">Sales Revenue</span>
      </h2>
      <p className="text-xl text-white/70 mb-12">Let's discuss how Sales Cloud can transform your pipeline into a revenue engine.</p>
      
      <button className="bg-[#F2A93B] hover:bg-[#d98c1d] text-white px-12 py-5 rounded-xl text-xl font-bold shadow-[0_10px_30px_rgba(242,169,59,0.3)] transition-all transform hover:scale-105">
        Optimize Your Sales Cloud
      </button>
    </div>
  </section>
);

const GlobalPresence = () => (
  <section className="py-20 px-4 md:px-12 bg-[#050A18] text-white border-t border-white/10">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center space-x-3 mb-12">
        <Globe className="text-[#00A3FF]" size={24} />
        <h2 className="text-xl font-bold uppercase tracking-widest">Global Presence</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {[
          { region: "INDIA", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
          { region: "AMERICAS", cities: ["United States", "Canada"] },
          { region: "EUROPE", cities: ["United Kingdom", "Germany", "Ireland"] },
          { region: "ASIA PACIFIC", cities: ["Singapore", "Australia", "New Zealand", "India"] },
          { region: "MIDDLE EAST", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] }
        ].map((item, i) => (
          <div key={i}>
            <div className="flex items-center space-x-2 text-[#00A3FF] text-[10px] font-black mb-6 tracking-widest">
              <div className="w-2 h-2 rounded-full bg-[#00A3FF]" />
              <span>{item.region}</span>
            </div>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              {item.cities.map((city, j) => (
                <li key={j} className="hover:text-white transition-colors cursor-pointer">{city}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FloatingButtons = () => (
  <>
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <MessageCircle size={32} />
        <div className="absolute right-20 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Chat on WhatsApp
        </div>
      </motion.button>
      
      <motion.button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-[#00A3FF] text-white rounded-full shadow-2xl flex items-center justify-center self-end"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
    
    <div className="fixed bottom-8 left-8 z-[100]">
      <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center space-x-4 border border-gray-100">
        <div className="w-12 h-12 bg-[#7B2CBF] rounded-full flex items-center justify-center text-white">
          <MessageCircle size={24} />
        </div>
        <div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Let's Chat!</div>
          <div className="text-sm font-black">WE ARE HERE!</div>
        </div>
        <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full absolute -top-2 -right-2 animate-bounce">
          1
        </div>
      </div>
    </div>
  </>
);

export default function SalesCloud() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Hero />
        <PotentialSection />
        <ExpertiseSection />
        <ServicesSection />
        <ApproachSection />
        <OutcomesSection />
        <IndustriesSection />
        <EcosystemSection />
        <FAQSection />
        <CTASection />
        <GlobalPresence />
      </main>
      <FloatingButtons />
    </div>
  );
}
