import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  CheckCircle2,
  Plus,
  Minus,
  ArrowRight,
  Globe,
  MessageCircle,
  Settings,
  Cloud,
  Database,
  ShieldCheck,
  Cpu,
  Layout,
  Code2,
  Search,
  Layers,
  Zap,
  BarChart3,
  Smartphone
} from 'lucide-react';

// Custom components for the replica
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-black py-4'}`}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">mTouch Labs</span>
          </div>
          <div className="hidden lg:flex items-center ml-12 gap-8">
            <NavItem label="Home" hasDropdown />
            <NavItem label="Services" hasDropdown active />
            <NavItem label="Products" hasDropdown />
            <NavItem label="Resources" hasDropdown />
            <NavItem label="Portfolio" />
            <NavItem label="Careers" />
            <NavItem label="Contact Us" />
          </div>
        </div>
        <button className="bg-[#0091FF] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all">
          Request Quote <ArrowRight size={18} />
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ label, hasDropdown, active }: { label: string; hasDropdown?: boolean; active?: boolean }) => (
  <div className="flex items-center gap-1 cursor-pointer group">
    <span className={`text-[15px] font-medium transition-colors ${active ? 'text-[#0091FF]' : 'text-white hover:text-[#0091FF]'}`}>
      {label}
    </span>
    {hasDropdown && <ChevronDown size={14} className={`transition-colors ${active ? 'text-[#0091FF]' : 'text-white group-hover:text-[#0091FF]'}`} />}
  </div>
);

const TopBar = () => (
  <div className="bg-black text-white py-2 border-b border-white/10 hidden md:block">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex justify-between items-center text-[13px]">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Mail size={14} className="text-[#0091FF]" />
          <span>contact@mtouchlabs.com</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-orange-500">🇮🇳</span>
          <span>+91 9390683154</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-500">🇺🇸</span>
          <span>+1 (551) 222-0070</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-bold">NASSCOM</span>
          <span>SME Inspire Awards 2026 🏆</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <span>Hyderabad</span>
          <span>|</span>
          <span>Bangalore</span>
          <span>|</span>
          <span>USA</span>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="bg-[#7B2CBF] pt-32 pb-20 relative overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
        <span>Home</span>
        <ChevronRight size={14} />
        <span>Services</span>
        <ChevronRight size={14} />
        <span className="text-orange-500">Custom Software Development</span>
      </div>
      
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Custom <span className="text-[#F59E0B]">Software</span> Development
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-2xl md:text-3xl font-semibold mb-8"
        >
          Tailored Software Solutions Engineered for Growth
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl"
        >
          mTouch Labs is a professional custom software development company specializing in designing and building scalable, secure, and business-aligned software systems that automate operations and support long-term digital transformation.
        </motion.p>
      </div>
    </div>
    
    {/* Floating WhatsApp Icon */}
    <div className="fixed right-8 bottom-24 z-40">
      <div className="bg-[#25D366] p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
        <MessageCircle size={32} color="white" fill="white" />
      </div>
    </div>
  </section>
);

const WhatIsSection = () => (
  <section className="bg-white py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-8">
          What Is <span className="text-[#F59E0B]">Custom Software</span> Development?
        </h2>
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Custom software development involves designing and building applications tailored to an organization's unique processes, operational challenges, and growth plans.
          </p>
          <p>
            Unlike off-the-shelf tools, custom software adapts to your workflows, integrates with existing systems, scales with business growth, enhances data control, and supports automation. Our <span className="text-blue-600 font-semibold">enterprise application development</span> expertise ensures every solution is built for mission-critical reliability.
          </p>
          <p>
            It becomes a strategic asset rather than a temporary solution — engineered specifically around your requirements and performance objectives. Combined with our <span className="text-blue-600 font-semibold">UI/UX design capabilities</span>, we deliver software that is both powerful and intuitive.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <FeatureCard icon={<Settings className="text-purple-500" />} title="Process Automation" />
        <FeatureCard icon={<Cloud className="text-blue-500" />} title="Cloud-Native Apps" />
        <FeatureCard icon={<Layers className="text-orange-500" />} title="System Integration" />
        <FeatureCard icon={<ShieldCheck className="text-green-500" />} title="Security-First" />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow border border-gray-100">
    <div className="mb-4 p-3 bg-white rounded-xl shadow-sm">
      {React.cloneElement(icon as React.ReactElement, { size: 40 })}
    </div>
    <h3 className="font-bold text-[#0B1120] text-lg">{title}</h3>
  </div>
);

const SecuritySection = () => (
  <section className="bg-white py-24 border-t border-gray-100">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-2 gap-8">
        <StatCard number="1500+" label="Projects Delivered" />
        <StatCard number="14+" label="Years Experience" />
        <StatCard number="3" label="Cloud Platforms" />
        <StatCard number="GDPR" label="Compliance Ready" />
      </div>
      
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-8">
          Security-First <span className="text-[#F59E0B]">Engineering</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Security is embedded throughout the lifecycle:
        </p>
        <ul className="space-y-4">
          <SecurityItem text="Role-based access control & secure authentication" />
          <SecurityItem text="Data encryption at rest & in transit" />
          <SecurityItem text="API security standards & compliance-aware infrastructure" />
          <SecurityItem text="Microservices & auto-scaling cloud architecture" />
          <SecurityItem text="Disaster recovery readiness on AWS, Azure & GCP" />
        </ul>
      </div>
    </div>
  </section>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-blue-50 p-10 rounded-2xl text-center">
    <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);

const SecurityItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-gray-700 text-lg">
    <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
    <span>{text}</span>
  </li>
);

const ServicesSection = () => (
  <section className="bg-gray-50 py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
        Our Custom <span className="text-[#F59E0B]">Software Services</span>
      </h2>
      <p className="text-gray-600 text-xl">From automation to enterprise platforms</p>
    </div>
    
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8">
      <ServiceCard 
        number="01" 
        title="Business Process Automation" 
        description="Automate manual workflows, reduce inefficiencies, improve cross-department collaboration, and enhance data accuracy." 
      />
      <ServiceCard 
        number="02" 
        title="SaaS Application Development" 
        description="Multi-tenant architectures, subscription systems, admin dashboards, and API-first products for reliability and monetization." 
      />
      <ServiceCard 
        number="03" 
        title="Enterprise Software Solutions" 
        description="ERP platforms, internal management systems, compliance-ready applications, and multi-user secure platforms." 
      />
      <ServiceCard 
        number="04" 
        title="System Integration" 
        description="Integrate with CRM, ERP, payment gateways, third-party APIs, and cloud services for seamless data flow." 
      />
      <div className="md:col-span-2 flex justify-center">
        <div className="max-w-xl w-full">
          <ServiceCard 
            number="05" 
            title="Cloud-Native Architecture" 
            description="AWS, Azure & GCP deployment with microservices, auto-scaling, secure API management, and disaster recovery." 
          />
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
    <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-[#0B1120] mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
  </div>
);

const ProcessSection = () => (
  <section className="bg-white py-24 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
        Our Development <span className="text-[#F59E0B]">Process</span>
      </h2>
      <p className="text-gray-600 text-xl max-w-3xl mx-auto">
        We follow a structured methodology to ensure predictable outcomes and long-term maintainability.
      </p>
    </div>
    
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative">
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
        <ProcessStep number="1" title="Business Analysis" />
        <ProcessStep number="2" title="Architecture" />
        <ProcessStep number="3" title="UI/UX Planning" />
        <ProcessStep number="4" title="Agile Dev" />
        <ProcessStep number="5" title="QA Testing" />
        <ProcessStep number="6" title="Deployment" />
        <ProcessStep number="7" title="Optimization" />
      </div>
    </div>
  </section>
);

const ProcessStep = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-white border-2 border-blue-500 rounded-2xl flex items-center justify-center relative mb-4 shadow-md">
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <div className="text-blue-500 font-bold text-center px-2 text-xs uppercase tracking-wider">
        {title.split(' ')[0]}<br/>{title.split(' ')[1] || ''}
      </div>
    </div>
    <div className="lg:hidden text-gray-400 mb-4">
      <ChevronDown size={24} />
    </div>
  </div>
);

const WhyChooseSection = () => (
  <section className="bg-gray-50 py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
        Why Choose <span className="text-[#F59E0B]">mTouch Labs</span>?
      </h2>
      <p className="text-gray-600 text-xl">We don't just develop applications — we build sustainable digital systems.</p>
    </div>
    
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <PillItem text="Business-focused engineering" />
      <PillItem text="Scalable software architecture" />
      <PillItem text="Secure development practices" />
      <PillItem text="Transparent project management" />
      <PillItem text="Long-term support partnership" />
      <PillItem text="Cloud-native deployment expertise" />
    </div>
  </section>
);

const PillItem = ({ text }: { text: string }) => (
  <div className="bg-white px-8 py-4 rounded-full shadow-sm flex items-center gap-3 border border-gray-100 hover:shadow-md transition-all">
    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
    <span className="text-gray-800 font-semibold text-lg">{text}</span>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does a custom software development company do?",
      a: "A custom software development company designs, builds, and maintains software applications tailored to the specific needs of a business. This includes everything from initial analysis and planning to development, testing, and post-launch support."
    },
    {
      q: "How long does custom software development take?",
      a: "The timeline for custom software development varies depending on the complexity of the project. A simple application might take 3-4 months, while a complex enterprise system could take 9-12 months or more. We follow an agile methodology to deliver incremental value throughout the process."
    },
    {
      q: "Is custom software scalable?",
      a: "Yes, scalability is one of the primary benefits of custom software. We design our solutions using cloud-native architectures and microservices that can easily grow alongside your business, handling increased users and data without performance degradation."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Absolutely. We offer comprehensive post-launch support and maintenance packages to ensure your software remains secure, up-to-date, and continues to meet your evolving business needs."
    }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
            Frequently Asked <span className="text-[#F59E0B]">Questions</span>
          </h2>
          <p className="text-gray-600 text-xl">Everything about custom software development</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-bold text-[#0B1120] group-hover:text-blue-600 transition-colors">{faq.q}</span>
                {openIndex === index ? <ChevronDown className="rotate-180 transition-transform" /> : <ChevronDown className="transition-transform" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 text-lg leading-relaxed">
                      {faq.a}
                    </p>
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

const CTASection = () => (
  <section className="bg-[#7B2CBF] py-24 relative overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
        Build Your Custom <span className="text-[#F59E0B]">Software Solution</span>
      </h2>
      <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
        Let's discuss how tailored software can automate your operations and accelerate growth.
      </p>
      <button className="bg-[#F59E0B] hover:bg-orange-500 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-orange-500/20">
        Start Your Project
      </button>
    </div>
    
    {/* Background Decoration */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#7B2CBF] text-white pt-24 pb-8 border-t border-white/5">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">mTouch Labs</span>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
          </p>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <span>contact@mtouchlabs.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              <span>+91 9390683154</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              <span>+1 (551) 222-0070</span>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <SocialIcon icon={<Linkedin size={20} />} />
            <SocialIcon icon={<Twitter size={20} />} />
            <SocialIcon icon={<Facebook size={20} />} />
            <SocialIcon icon={<Instagram size={20} />} />
            <SocialIcon icon={<Youtube size={20} />} />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-8 uppercase tracking-wider">Company</h3>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-8 uppercase tracking-wider">Services</h3>
          <ul className="space-y-4 text-gray-400 text-lg">
            <li><a href="#" className="hover:text-blue-500 transition-colors">Custom Software Development</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Cloud & DevOps Solutions</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Mobile Application Development</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Salesforce Consulting</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">Quality Assurance & Testing</a></li>
            <li><a href="#" className="hover:text-blue-500 transition-colors">AI & Data Analytics</a></li>
          </ul>
        </div>
        
        <div>
          <div className="bg-gray-800/50 p-6 rounded-2xl border border-white/5">
            <div className="h-48 bg-gray-700 rounded-xl mb-6 flex items-center justify-center text-gray-500 overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/map/400/300" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin size={32} className="text-red-500" />
              </div>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              Download Brochure <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-12 pb-8">
        <div className="flex items-center gap-2 mb-12">
          <Globe size={20} className="text-blue-500" />
          <h3 className="text-xl font-bold">Global Presence</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          <PresenceColumn title="India" items={['Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Kochi']} />
          <PresenceColumn title="Americas" items={['United States', 'Canada']} />
          <PresenceColumn title="Europe" items={['United Kingdom', 'Germany', 'Ireland']} />
          <PresenceColumn title="Asia Pacific" items={['Singapore', 'Australia', 'New Zealand', 'India']} />
          <PresenceColumn title="Middle East" items={['UAE', 'Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait']} />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2026 mTouch Labs Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all cursor-pointer text-gray-400">
    {icon}
  </div>
);

const PresenceColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <div className="flex items-center gap-2 mb-6">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <h4 className="text-blue-500 font-bold uppercase text-xs tracking-widest">{title}</h4>
    </div>
    <ul className="space-y-3 text-gray-400">
      {items.map((item, i) => (
        <li key={i} className="hover:text-white transition-colors cursor-pointer">{item}</li>
      ))}
    </ul>
  </div>
);

export default function App() {
  return (
    <div className="font-['Inter',sans-serif] selection:bg-blue-500 selection:text-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <WhatIsSection />
        <SecuritySection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
