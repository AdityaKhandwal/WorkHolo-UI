import React, { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Menu, X, ChevronDown, ChevronRight, Mail, Phone, Globe, 
  Smartphone, Code, Cpu, Zap, Layers, Database, Shield, 
  Users, Briefcase, Award, CheckCircle2, MessageSquare, 
  ArrowRight, Facebook, Twitter, Linkedin, Instagram, 
  Search, MapPin, ExternalLink, Plus, Minus
} from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', hasDropdown: true },
    { name: 'Services', href: '#', hasDropdown: true, active: true },
    { name: 'Products', href: '#', hasDropdown: true },
    { name: 'Resources', href: '#', hasDropdown: true },
    { name: 'Portfolio', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-black text-white/80 py-2 px-4 md:px-12 flex flex-wrap justify-between items-center text-[13px] font-medium border-b border-white/10">
        <div className="flex items-center gap-6">
          <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} /> contact@mtouchlabs.com
          </a>
          <a href="tel:+919390683154" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} /> +91 9390683154
          </a>
          <a href="tel:+15512220070" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} /> +1 (551) 222-0070
          </a>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="text-[#f27d26] font-bold">NASSCOM</span> SME Inspire Awards 2026 🏆
          </span>
          <div className="flex items-center gap-4 border-l border-white/20 pl-4">
            <span>Hyderabad</span>
            <span>|</span>
            <span>Bangalore</span>
            <span>|</span>
            <span>USA</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={cn(
        "py-4 px-4 md:px-12 flex justify-between items-center transition-all duration-300",
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-black"
      )}>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-black text-xl italic">m</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">mTouch Labs</span>
          </div>
          <div className="ml-2 px-2 py-0.5 border border-white/20 rounded text-[10px] text-white/60 font-bold uppercase tracking-widest">
            ISO Certified
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-[15px] font-semibold flex items-center gap-1 transition-colors",
                link.active ? "text-[#00a8ff]" : "text-white hover:text-[#00a8ff]"
              )}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
          <button className="bg-[#00a8ff] hover:bg-[#0096e6] text-white px-6 py-2.5 rounded-full font-bold text-[15px] flex items-center gap-2 transition-all transform hover:scale-105">
            Request Quote <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={cn(
                    "text-lg font-semibold flex justify-between items-center",
                    link.active ? "text-[#00a8ff]" : "text-white"
                  )}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={18} />}
                </a>
              ))}
              <button className="bg-[#00a8ff] text-white px-6 py-3 rounded-full font-bold text-lg mt-4">
                Request Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-4 md:px-12 bg-[#0a0a0a] overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7B2CBF]/20 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00a8ff]/10 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-white/60 text-sm font-bold uppercase tracking-[0.2em]">Home</span>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-white/60 text-sm font-bold uppercase tracking-[0.2em]">Services</span>
            <ChevronRight size={14} className="text-white/40" />
            <span className="text-[#f27d26] text-sm font-bold uppercase tracking-[0.2em]">React Native App Development</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black font-display text-white mb-8 leading-[1.1] tracking-tight">
            React Native <span className="text-[#f27d26]">App Development</span> <br /> Company
          </h1>

          <p className="text-xl md:text-2xl text-white/80 font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
            High-Performance Cross-Platform Apps with Native Precision
          </p>

          <p className="text-lg text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            mTouch Labs is a results-oriented React Native app development company delivering scalable, high-performance mobile applications for businesses seeking efficient cross-platform deployment. We build hybrid mobile apps using React Native's component-based architecture, enabling rapid development while maintaining near-native performance.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-[#f27d26] hover:bg-[#e67622] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-[#f27d26]/20 transition-all transform hover:scale-105">
              Start Your Project
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg transition-all">
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="#" className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

const WhatIsSection = () => {
  const features = [
    { title: 'Component-Based Architecture', icon: <Layers className="text-[#00a8ff]" />, desc: 'Modular UI structures for faster iteration and easier maintenance.' },
    { title: 'Cross-Platform Codebase', icon: <Globe className="text-[#00a8ff]" />, desc: 'Single codebase for iOS and Android, reducing development time by 40%.' },
    { title: 'Near-Native Performance', icon: <Zap className="text-[#00a8ff]" />, desc: 'Optimized runtime performance that bridges the gap with native apps.' },
    { title: 'Rapid Deployment', icon: <Smartphone className="text-[#00a8ff]" />, desc: 'Faster time-to-market with hot reloading and efficient workflows.' },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-8 leading-tight">
            What Is React Native <span className="text-[#f27d26]">App Development?</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            React Native app development involves building mobile applications using a shared JavaScript codebase that runs on both iOS and Android platforms while utilizing native device capabilities. It bridges flexibility with native device functionality.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            A professional React Native development company ensures cross-platform compatibility, native module integration, reusable UI components, and optimized runtime performance. Our <span className="text-[#00a8ff] font-bold">mobile app development expertise</span> ensures every React Native solution is built for real-world scalability.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Combined with our <span className="text-[#00a8ff] font-bold underline">UI/UX design capabilities</span>, we deliver apps that are not only performant but also intuitive and user-friendly across both platforms.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const stats = [
    { value: '800+', label: 'Apps Delivered' },
    { value: '14+', label: 'Years Experience' },
    { value: '95%', label: 'Code Reusability' },
    { value: '2x', label: 'Faster Time-to-Market' },
  ];

  const points = [
    'Custom React Native App Development — startups to enterprise',
    'Hybrid Architecture Engineering — native API access & smooth animations',
    'UI Component Optimization — modular, platform-adaptive layouts',
    'Backend & API Integration — REST, GraphQL, cloud & payment systems',
    'Code Reusability & Maintenance — long-term cost reduction strategy',
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 text-center border border-gray-100">
              <div className="text-5xl font-black text-[#00a8ff] mb-2">{s.value}</div>
              <div className="text-gray-500 font-bold uppercase tracking-wider text-xs">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-8 leading-tight">
            Our React Native <br /> <span className="text-[#f27d26]">Development Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We deliver end-to-end cross-platform solutions with native-level quality:
          </p>
          <div className="space-y-6">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="text-[#f27d26] mt-1 shrink-0" size={20} />
                <p className="text-gray-700 font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { id: '01', title: 'Custom React Native Apps', desc: 'Tailored applications including startup MVPs, customer-facing platforms, internal enterprise mobility apps, subscription-based applications, and marketplace solutions — each engineered with modular architecture for scalability.' },
    { id: '02', title: 'Hybrid Architecture Engineering', desc: 'Unlike purely web-based hybrid apps, our React Native solutions enable native API access, smooth animations, real-time interactions, and hardware feature integration with stable performance under user growth.' },
    { id: '03', title: 'UI Component Optimization', desc: 'Modular UI structures, platform-adaptive layouts, performance-optimized navigation systems, and clean responsive visual elements enabling faster iteration and easier maintenance.' },
    { id: '04', title: 'Backend & API Integration', desc: 'Seamless connection with RESTful APIs, GraphQL endpoints, cloud services, payment systems, and authentication frameworks ensuring secure and scalable data handling.' },
    { id: '05', title: 'Code Reusability & Maintenance Strategy', desc: 'We structure projects to maximize shared code, minimize duplication, simplify future updates, improve testing workflows, and reduce long-term maintenance cost. Sustainable development is part of our architecture planning from day one.' },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-display text-[#0a0a0a] mb-6">
            Our React Native <span className="text-[#f27d26]">Development Services</span>
          </h2>
          <p className="text-xl text-gray-500">Efficiency in development — precision in execution</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className={cn(
              "p-12 rounded-3xl bg-gray-50 border border-gray-100 transition-all hover:shadow-2xl hover:shadow-gray-200/50",
              i === 4 ? "md:col-span-2" : ""
            )}>
              <div className="w-12 h-12 bg-[#00a8ff] text-white rounded-xl flex items-center justify-center font-black text-lg mb-8">
                {s.id}
              </div>
              <h3 className="text-2xl font-black text-[#0a0a0a] mb-6">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FrameworkSection = () => {
  const steps = [
    { id: 1, title: 'Product Discovery' },
    { id: 2, title: 'Technical Planning' },
    { id: 3, title: 'Component Design' },
    { id: 4, title: 'Hybrid Development' },
    { id: 5, title: 'Device Testing' },
    { id: 6, title: 'App Store Deploy' },
    { id: 7, title: 'Continuous Enhancement' },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black font-display text-[#0a0a0a] mb-6">
          Our Development <span className="text-[#f27d26]">Framework</span>
        </h2>
        <p className="text-xl text-gray-500 mb-20 max-w-3xl mx-auto">
          Structured delivery and scalable code architecture from discovery to deployment.
        </p>

        <div className="relative flex flex-wrap justify-center gap-4 lg:gap-0">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center w-40">
              <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-2xl shadow-lg flex items-center justify-center mb-6 group hover:border-[#00a8ff] transition-all">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#00a8ff] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>
                <span className="text-center px-4 font-bold text-sm text-gray-700 leading-tight">
                  {step.title}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="lg:hidden mb-4">
                  <ChevronDown className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const reasons = [
    'Hybrid-native engineering expertise',
    'Modular & reusable architecture',
    'Secure API integrations',
    'Cross-platform deployment strategy',
    'Agile development methodology',
    'Long-term application support',
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black font-display text-[#0a0a0a] mb-8">
          Why Choose mTouch Labs as Your <br /> <span className="text-[#f27d26]">React Native Development Company?</span>
        </h2>
        <p className="text-xl text-gray-500 mb-16 max-w-3xl mx-auto">
          We help businesses launch reliable cross-platform apps without compromising quality.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {reasons.map((r, i) => (
            <div key={i} className="px-8 py-4 bg-gray-50 border border-gray-100 rounded-full font-bold text-gray-700 shadow-sm hover:bg-white hover:border-[#f27d26] hover:text-[#f27d26] transition-all cursor-default">
              <span className="mr-2 text-[#f27d26]">•</span> {r}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { title: 'SaaS & Digital Products', icon: <Globe className="text-[#00a8ff]" /> },
    { title: 'On-Demand Service Platforms', icon: <Zap className="text-[#00a8ff]" /> },
    { title: 'eCommerce & Retail', icon: <Briefcase className="text-[#00a8ff]" /> },
    { title: 'FinTech Applications', icon: <Shield className="text-[#00a8ff]" /> },
    { title: 'Health & Wellness Apps', icon: <Zap className="text-[#00a8ff]" /> },
    { title: 'Enterprise Internal Systems', icon: <Layers className="text-[#00a8ff]" /> },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black font-display text-[#0a0a0a] mb-6">
            Industries We <span className="text-[#f27d26]">Serve</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#00a8ff]/10 transition-colors">
                {React.cloneElement(ind.icon as React.ReactElement, { size: 40 })}
              </div>
              <h3 className="text-xl font-black text-[#0a0a0a]">{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StackSection = () => {
  const stack = [
    'React Native', 'JavaScript', 'TypeScript', 'Expo', 'Redux', 'MobX',
    'React Navigation', 'Native Modules', 'REST APIs', 'GraphQL', 'Firebase',
    'AWS', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'Jest', 'Detox',
    'CI/CD', 'CodePush'
  ];

  const stats = [
    { value: '20+', label: 'Frameworks & Tools' },
    { value: '95%', label: 'Shared Codebase' },
    { value: '50+', label: 'API Integrations' },
    { value: '2x', label: 'Faster Releases' },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-[#0a0a0a] mb-8 leading-tight">
            React Native <span className="text-[#f27d26]">Development Stack</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We leverage the React Native ecosystem and modern tooling to deliver high-performance cross-platform applications with secure, scalable backends.
          </p>
          <div className="flex flex-wrap gap-3">
            {stack.map((item, i) => (
              <span key={i} className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-600 border border-gray-200">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 text-center border border-gray-100">
              <div className="text-5xl font-black text-[#00a8ff] mb-2">{s.value}</div>
              <div className="text-gray-500 font-bold uppercase tracking-wider text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: 'What is React Native app development?', a: 'React Native is a framework developed by Meta that allows developers to build mobile apps using JavaScript and React. It enables a single codebase to run on both iOS and Android with native-like performance.' },
    { q: 'Is React Native suitable for enterprise applications?', a: 'Yes, React Native is highly suitable for enterprise apps due to its scalability, modular architecture, and strong community support. Many Fortune 500 companies use it for their core mobile products.' },
    { q: 'How does React Native differ from Flutter?', a: 'React Native uses JavaScript and bridges to native components, while Flutter uses Dart and its own rendering engine. React Native often feels more "native" in terms of UI components, while Flutter offers more consistent visual control.' },
    { q: 'Do you provide post-launch support?', a: 'Absolutely. We offer comprehensive maintenance and support packages to ensure your app stays up-to-date with the latest OS versions and continues to perform optimally.' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black font-display text-[#0a0a0a] mb-6">
            Frequently Asked <span className="text-[#f27d26]">Questions</span>
          </h2>
          <p className="text-xl text-gray-500">Everything you need to know about our React Native development services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-bold text-[#0a0a0a]">{faq.q}</span>
                {openIndex === i ? <ChevronDown className="text-[#f27d26]" /> : <ChevronRight className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
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

const ContactSection = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-black font-display text-[#0a0a0a] mb-8 leading-tight">
            Get in <span className="text-[#f27d26]">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Have a project in mind? Let's discuss how we can help you build something extraordinary.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                <Mail className="text-[#00a8ff]" size={28} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</h4>
                <p className="text-xl font-bold text-[#0a0a0a]">contact@mtouchlabs.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                <Phone className="text-[#00a8ff]" size={28} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</h4>
                <p className="text-xl font-bold text-[#0a0a0a]">+91 9390683154</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 border border-gray-100">
                <MapPin className="text-[#00a8ff]" size={28} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Our Location</h4>
                <p className="text-xl font-bold text-[#0a0a0a]">Hyderabad, Bangalore, USA</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 shadow-xl shadow-gray-200/50">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-[#00a8ff] focus:ring-4 focus:ring-[#00a8ff]/10 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-[#00a8ff] focus:ring-4 focus:ring-[#00a8ff]/10 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
              <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-[#00a8ff] focus:ring-4 focus:ring-[#00a8ff]/10 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
              <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-[#00a8ff] focus:ring-4 focus:ring-[#00a8ff]/10 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full bg-[#0a0a0a] hover:bg-black text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-black/10">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f27d26]/10 blur-[150px] rounded-full -mr-80 -mt-80" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00a8ff]/10 blur-[150px] rounded-full -ml-80 -mb-80" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black font-display text-white mb-8 leading-tight">
          Ready to Build Your <span className="text-[#f27d26]">React Native App?</span>
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let's discuss how we can engineer a cross-platform solution that accelerates your time-to-market and scales with your business.
        </p>
        <button className="bg-[#f27d26] hover:bg-[#e67622] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-[#f27d26]/30 transition-all transform hover:scale-105">
          Start Your Project
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-4 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-black text-2xl italic">m</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">mTouch Labs</span>
          </div>
          <p className="text-white/50 leading-relaxed mb-8">
            A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00a8ff] transition-colors"><Facebook size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00a8ff] transition-colors"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00a8ff] transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00a8ff] transition-colors"><Instagram size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-[#f27d26]">Company</h4>
          <ul className="space-y-4 text-white/60 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-[#f27d26]">Services</h4>
          <ul className="space-y-4 text-white/60 font-medium">
            <li><a href="#" className="hover:text-white transition-colors">Custom Software Development</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cloud & DevOps Solutions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mobile Application Development</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Salesforce Consulting</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AI & Machine Learning</a></li>
            <li><a href="#" className="hover:text-white transition-colors">UI/UX Design Services</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-[#f27d26]">Contact</h4>
          <ul className="space-y-4 text-white/60 font-medium">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-[#00a8ff] shrink-0" />
              <span>Hyderabad, Bangalore, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-[#00a8ff] shrink-0" />
              <a href="mailto:contact@mtouchlabs.com" className="hover:text-white transition-colors">contact@mtouchlabs.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-[#00a8ff] shrink-0" />
              <a href="tel:+919390683154" className="hover:text-white transition-colors">+91 9390683154</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-wrap justify-between items-center gap-6">
        <p className="text-white/40 text-sm">
          © 2026 <span className="text-white font-bold">mTouch Labs Pvt. Ltd.</span> All rights reserved.
        </p>
        <div className="flex gap-8 text-white/40 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

const GlobalPresence = () => {
  const regions = [
    { name: 'INDIA', cities: ['Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Kochi'] },
    { name: 'AMERICAS', cities: ['United States', 'Canada'] },
    { name: 'EUROPE', cities: ['United Kingdom', 'Germany', 'Ireland'] },
    { name: 'ASIA PACIFIC', cities: ['Singapore', 'Australia', 'New Zealand', 'India'] },
    { name: 'MIDDLE EAST', cities: ['UAE', 'Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait'] },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Globe className="text-[#00a8ff]" size={24} />
          <h2 className="text-2xl font-black font-display text-white uppercase tracking-widest">Global Presence</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {regions.map((region, i) => (
            <div key={i}>
              <h4 className="text-[#00a8ff] font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00a8ff] rounded-full" /> {region.name}
              </h4>
              <ul className="space-y-4 text-white/50 font-medium text-sm">
                {region.cities.map((city, j) => (
                  <li key={j} className="hover:text-white transition-colors cursor-default">{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-[#7B2CBF] font-sans selection:bg-[#00a8ff] selection:text-white">
      <div className="bg-[#0a0a0a] text-white font-sans">
        <Navbar />
        <main>
          <Hero />
          <WhatIsSection />
          <ExpertiseSection />
          <ServicesSection />
          <FrameworkSection />
          <WhyChooseSection />
          <IndustriesSection />
          <StackSection />
          <FAQSection />
          <ContactSection />
          <CTASection />
          <GlobalPresence />
        </main>
        <Footer />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-28 right-8 z-50 flex flex-col gap-4">
        <button className="w-12 h-12 bg-[#00a8ff] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
          <Search size={20} />
        </button>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
        >
          <ChevronDown className="rotate-180" size={20} />
        </button>
      </div>
    </div>
  );
}
