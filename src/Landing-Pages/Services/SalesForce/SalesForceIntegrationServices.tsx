import { clsx, type ClassValue } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  Mail, 
  Globe, 
  MessageCircle, 
  ArrowUp, 
  CheckCircle2, 
  Search, 
  Layout, 
  Database, 
  Code, 
  TestTube, 
  Rocket, 
  Activity,
  ShoppingCart,
  Stethoscope,
  Home,
  Factory,
  Wallet,
  Zap,
  RefreshCw,
} from 'lucide-react';

/** Utility for Tailwind class merging */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Hero = () => {
  return (
    <section className="relative bg-[#05070A] pt-24 pb-32 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="flex justify-center gap-2 text-[13px] text-white/60 mb-6 font-medium">
          <a href="#" className="hover:text-white">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-white">Services</a>
          <span>/</span>
          <span className="text-[#FFB800]">Salesforce Integration</span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]"
        >
          Salesforce <span className="text-[#FFB800] italic">Integration</span> Services
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 font-medium"
        >
          Enterprise Salesforce Integration for Unified Business Systems
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[15px] text-white/60 max-w-4xl mx-auto leading-relaxed"
        >
          Salesforce delivers its true power when it operates as the central intelligence layer of your organization — connected, automated, and synchronized with every critical business system. We eliminate data silos and create secure, real-time data ecosystems.
        </motion.p>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0095FF]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#7B2CBF]/10 to-transparent pointer-events-none" />
    </section>
  );
};

const WhyMatters = () => {
  const cards = [
    { icon: <RefreshCw className="text-[#7B2CBF]" />, title: "ERP Integration" },
    { icon: <Code className="text-[#7B2CBF]" />, title: "API Development" },
    { icon: <Mail className="text-[#7B2CBF]" />, title: "Marketing Sync" },
    { icon: <ShoppingCart className="text-[#7B2CBF]" />, title: "eCommerce Connect" },
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black text-[#05070A] mb-8 tracking-tight">
            Why <span className="text-[#FFB800]">Salesforce Integration</span> Matters
          </h2>
          <p className="text-[#05070A]/70 text-[15px] leading-relaxed mb-6">
            Disconnected systems create duplicate data entries, manual reporting errors, delayed order processing, fragmented customer visibility, and inconsistent forecasting.
          </p>
          <p className="text-[#05070A]/70 text-[15px] leading-relaxed mb-6">
            Our Salesforce system integration services ensure seamless data flow across departments, improving collaboration, automation, and decision-making accuracy. Combined with our <span className="text-[#0095FF] font-bold cursor-pointer">consulting expertise</span>, we design integration architectures aligned with business goals.
          </p>
          <p className="text-[#05070A]/70 text-[15px] leading-relaxed">
            As a performance-driven Salesforce Integration Company, we connect CRM platforms with ERP systems, marketing automation tools, finance software, eCommerce platforms, and <span className="text-[#0095FF] font-bold cursor-pointer">custom enterprise applications</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-8 flex flex-col items-center text-center gap-4 group transition-all"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-[#7B2CBF]/10 transition-colors">
                {card.icon}
              </div>
              <h3 className="font-bold text-[#05070A] text-[15px]">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const stats = [
    { value: "200+", label: "Integrations Built", color: "text-[#0095FF]" },
    { value: "REST", label: "& SOAP APIs", color: "text-[#0095FF]" },
    { value: "Real-Time", label: "Data Sync", color: "text-[#0095FF]" },
    { value: "OAuth", label: "Secure Auth", color: "text-[#0095FF]" },
  ];

  const points = [
    "ERP — automated orders, invoices, inventory & financial data",
    "Marketing — lead sync, campaign tracking & engagement automation",
    "eCommerce & Payments — storefronts, subscriptions & gateways",
    "Third-Party — accounting, HR, support & custom enterprise apps",
    "Real-Time & Batch — immediate sync or scheduled processing"
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-sm">
              <span className={cn("text-4xl font-black mb-2", stat.color)}>{stat.value}</span>
              <span className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="text-4xl font-black text-[#05070A] mb-8 tracking-tight">
            Our Integration <span className="text-[#FFB800]">Capabilities</span>
          </h2>
          <p className="text-[#05070A]/70 text-[15px] mb-8">
            We connect Salesforce with your entire business ecosystem:
          </p>
          <div className="space-y-4">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#FFB800] mt-1 shrink-0" />
                <span className="text-[#05070A]/80 text-[15px] font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: "01",
      title: "ERP Integration",
      desc: "Automated order sync, real-time invoice tracking, inventory updates, financial reporting, and unified customer data across sales and finance."
    },
    {
      id: "02",
      title: "API Integration",
      desc: "Secure REST & SOAP APIs, middleware platforms, custom connectors, OAuth authentication, and encrypted data transmission."
    },
    {
      id: "03",
      title: "Marketing Integration",
      desc: "Lead & campaign sync, attribution tracking, customer engagement automation, and improved marketing ROI visibility."
    },
    {
      id: "04",
      title: "eCommerce & Payments",
      desc: "Storefronts, subscription systems, payment gateways, and customer self-service portals for unified lifecycle management."
    },
    {
      id: "05",
      title: "Third-Party Integration",
      desc: "Accounting, HR, support ticketing, inventory management, and custom enterprise applications for synchronized cross-functional workflows."
    }
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#05070A] mb-4 tracking-tight">
            Our Integration <span className="text-[#FFB800]">Services</span>
          </h2>
          <p className="text-gray-500 font-medium">End-to-end Salesforce connectivity solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50/50 border border-gray-100 rounded-2xl p-10 relative overflow-hidden group"
            >
              <div className="bg-[#0095FF] text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-[14px] mb-6">
                {service.id}
              </div>
              <h3 className="text-xl font-bold text-[#05070A] mb-4">{service.title}</h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    { id: 1, title: "System Audit", icon: <Search size={20} /> },
    { id: 2, title: "Architecture Design", icon: <Layout size={20} /> },
    { id: 3, title: "API Mapping", icon: <Database size={20} /> },
    { id: 4, title: "Development", icon: <Code size={20} /> },
    { id: 5, title: "Testing", icon: <TestTube size={20} /> },
    { id: 6, title: "Deployment", icon: <Rocket size={20} /> },
    { id: 7, title: "Monitoring", icon: <Activity size={20} /> },
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black text-[#05070A] mb-4 tracking-tight">
          Our Integration <span className="text-[#FFB800]">Methodology</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-[15px] leading-relaxed">
          This structured process reduces risk, ensures data integrity, and supports long-term scalability.
        </p>
        
        <div className="relative flex flex-wrap justify-center gap-4 md:gap-0 items-center">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center gap-4 md:w-[14%]">
              <div className="w-20 h-20 bg-white border-2 border-[#0095FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#0095FF]/10 relative group hover:bg-[#0095FF] transition-all duration-300">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#0095FF] text-white rounded-full flex items-center justify-center text-[12px] font-bold border-4 border-white">
                  {step.id}
                </div>
                <div className="text-[#05070A] group-hover:text-white transition-colors">
                  {step.icon}
                </div>
              </div>
              <span className="text-[13px] font-bold text-[#05070A] max-w-[80px] leading-tight">{step.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    "Centralized business data visibility",
    "Reduced manual intervention",
    "Faster operational workflows",
    "Secure & encrypted integrations",
    "Scalable architecture design",
    "Continuous monitoring & optimization"
  ];

  return (
    <section className="bg-[#F8F9FA] py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black text-[#05070A] mb-6 tracking-tight">
          Benefits of <span className="text-[#FFB800]">Choosing WorkHolo Labs</span>
        </h2>
        <p className="text-gray-600 mb-12 text-[15px]">We transform Salesforce into a connected enterprise command center.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-4 rounded-full border border-gray-100 shadow-sm flex items-center gap-3 px-8">
              <div className="w-2 h-2 bg-[#FFB800] rounded-full" />
              <span className="text-[#05070A] font-bold text-[14px]">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { icon: <ShoppingCart size={32} />, title: "eCommerce & Retail" },
    { icon: <Wallet size={32} />, title: "FinTech & Financial Services" },
    { icon: <Stethoscope size={32} />, title: "Healthcare & HealthTech" },
    { icon: <Zap size={32} />, title: "SaaS & Technology" },
    { icon: <Home size={32} />, title: "Real Estate & PropTech" },
    { icon: <Factory size={32} />, title: "Manufacturing & Distribution" },
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-black text-[#05070A] mb-12 tracking-tight">
          Industries We <span className="text-[#FFB800]">Serve</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-2xl p-12 flex flex-col items-center gap-6 group"
            >
              <div className="text-gray-400 group-hover:text-[#7B2CBF] transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#05070A]">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technologies = () => {
  const tags = [
    "REST APIs", "SOAP APIs", "MuleSoft", "Salesforce Connect", "Apex Callouts",
    "OAuth 2.0", "JWT", "Heroku Connect", "Platform Events", "Webhooks",
    "Change Data Capture", "Salesforce Flow", "Middleware", "Data Loader",
    "ETL Pipelines", "Custom Connectors"
  ];

  const stats = [
    { value: "200+", label: "Integrations", color: "text-[#0095FF]" },
    { value: "REST", label: "& SOAP APIs", color: "text-[#0095FF]" },
    { value: "OAuth", label: "Secure Auth", color: "text-[#0095FF]" },
    { value: "24/7", label: "Monitoring", color: "text-[#0095FF]" },
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-black text-[#05070A] mb-8 tracking-tight">
            Integration <span className="text-[#FFB800]">Technologies</span>
          </h2>
          <p className="text-gray-600 mb-8 text-[15px]">Enterprise-grade integration tools for secure, scalable connectivity.</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg text-[12px] font-bold text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-sm">
              <span className={cn("text-4xl font-black mb-2", stat.color)}>{stat.value}</span>
              <span className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </div>
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
      q: "What are Salesforce integration services?",
      a: "Salesforce integration services involve connecting your Salesforce CRM with other business applications (ERP, Marketing, eCommerce, etc.) to ensure seamless data flow and process automation across your entire organization."
    },
    {
      q: "Can Salesforce integrate with ERP systems?",
      a: "Yes, Salesforce can integrate with major ERP systems like SAP, Oracle, NetSuite, and Microsoft Dynamics to synchronize orders, invoices, inventory, and financial data."
    },
    {
      q: "Is Salesforce API integration secure?",
      a: "Absolutely. We use industry-standard protocols like OAuth 2.0, JWT, and end-to-end encryption to ensure that all data transmitted between systems is secure and compliant with data privacy regulations."
    },
    {
      q: "Do you provide enterprise Salesforce integration?",
      a: "Yes, we specialize in complex enterprise-grade integrations using middleware like MuleSoft, Dell Boomi, or custom-built connectors to handle large data volumes and sophisticated business workflows."
    }
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-black text-[#05070A] mb-4 tracking-tight">
          Frequently Asked <span className="text-[#FFB800]">Questions</span>
        </h2>
        <p className="text-gray-500 mb-12 font-medium">Everything about Salesforce integration services</p>
        
        <div className="text-left space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-4">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center py-4 text-left font-bold text-[#05070A] hover:text-[#0095FF] transition-colors"
              >
                <span className="text-[15px]">{faq.q}</span>
                <ChevronDown className={cn("transition-transform", openIdx === idx ? "rotate-180" : "")} size={20} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 text-[14px] leading-relaxed pb-4">{faq.a}</p>
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
    <section className="bg-[#05070A] py-24 px-4 md:px-12 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Connect Your <span className="text-[#FFB800]">Business Systems</span> Today
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-medium">
          Let's discuss how Salesforce integration can unify your data and automate your operations.
        </p>
        <button className="bg-[#FFB800] hover:bg-[#E6A600] text-[#05070A] px-10 py-4 rounded-lg text-lg font-bold shadow-xl shadow-[#FFB800]/20 transition-all">
          Start Your Integration
        </button>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0095FF]/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

const GlobalPresence = () => {
  const regions = [
    {
      name: "INDIA",
      cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"]
    },
    {
      name: "AMERICAS",
      cities: ["United States", "Canada"]
    },
    {
      name: "EUROPE",
      cities: ["United Kingdom", "Germany", "Ireland"]
    },
    {
      name: "ASIA PACIFIC",
      cities: ["Singapore", "Australia", "New Zealand", "India"]
    },
    {
      name: "MIDDLE EAST",
      cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"]
    }
  ];

  return (
    <section className="bg-[#05070A] py-24 px-4 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Globe className="text-[#0095FF]" size={24} />
          <h2 className="text-xl font-bold text-white tracking-tight">Global Presence</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {regions.map((region, idx) => (
            <div key={idx}>
              <h3 className="text-[#0095FF] text-[11px] font-black tracking-widest mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full" />
                {region.name}
              </h3>
              <ul className="space-y-4">
                {region.cities.map((city, cIdx) => (
                  <li key={cIdx} className="text-white/60 text-[14px] hover:text-white transition-colors cursor-pointer">
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

const FloatingWidgets = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-24 right-8 z-[100]">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 cursor-pointer"
        >
          <MessageCircle className="text-white fill-white" size={32} />
        </motion.div>
      </div>

      {/* Let's Chat Widget */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-2">
        <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100 flex items-center gap-3 pr-8 relative">
          <div className="w-10 h-10 bg-[#05070A] rounded-full flex items-center justify-center">
            <MessageCircle className="text-white" size={20} />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Let's Chat!</p>
            <p className="text-[13px] font-black text-[#05070A]">WE ARE HERE!</p>
          </div>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
            1
          </div>
        </div>
        <div className="w-10 h-10 bg-[#0095FF] rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer">
          <ArrowUp size={20} />
        </div>
      </div>
    </>
  );
};

// --- Main App ---

export default function SalesForceIntegrationServices() {
  return (
    <div className="min-h-screen bg-white font-['Inter'] selection:bg-[#7B2CBF]/30 selection:text-[#7B2CBF]">
      {/* Google Font Import */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      `}} />
      <main>
        <Hero />
        <WhyMatters />
        <Capabilities />
        <Services />
        <Methodology />
        <Benefits />
        <Industries />
        <Technologies />
        <FAQ />
        <CTA />
        <GlobalPresence />
      </main>
      <FloatingWidgets />
    </div>
  );
}
