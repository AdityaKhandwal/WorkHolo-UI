import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  TrendingUp,
  Plus,
  Minus,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ShoppingCart,
  HeartPulse,
  Banknote,
  GraduationCap,
  Building2,
  LayoutGrid,
  MessageCircle
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 border-b border-white/10">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <span className="text-xl font-bold tracking-tight">mTouch Labs</span>
        </div>
        <div className="hidden md:flex items-center ml-2">
          <img src="https://picsum.photos/seed/iso/40/40" alt="ISO Certified" className="h-8 opacity-80" referrerPolicy="no-referrer" />
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
        <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-1">Home <ChevronDown size={14} /></a>
        <a href="#" className="text-blue-500 flex items-center gap-1">Services <ChevronDown size={14} /></a>
        <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-1">Products <ChevronDown size={14} /></a>
        <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-1">Resources <ChevronDown size={14} /></a>
        <a href="#" className="hover:text-blue-500 transition-colors">Portfolio</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Careers</a>
        <a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all transform hover:scale-105">
        Request Quote <ArrowRight size={16} />
      </button>
    </nav>
  );
};

const TopBar = () => {
  return (
    <div className="bg-black text-white py-2 px-6 md:px-12 flex flex-wrap items-center justify-between text-[11px] border-b border-white/5">
      <div className="flex items-center gap-6">
        <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-1.5 hover:text-blue-400">
          <Mail size={12} className="text-blue-500" /> contact@mtouchlabs.com
        </a>
        <a href="tel:+919390683154" className="flex items-center gap-1.5 hover:text-blue-400">
          <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-3" /> +91 9390683154
        </a>
        <a href="tel:+15512220070" className="flex items-center gap-1.5 hover:text-blue-400">
          <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-3" /> +1 (551) 222-0070
        </a>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-gray-400 uppercase tracking-widest font-bold">
          <span className="text-blue-500">NASSCOM</span> SME Inspire Awards 2026 🏆
        </span>
        <div className="hidden md:flex items-center gap-4 text-gray-400">
          <span>Hyderabad</span> | <span>Bangalore</span> | <span>USA</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="bg-[#0B1120] text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
          Reliable • Scalable • Secure
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1]">
          App Maintenance <span className="text-blue-500">&</span> <span className="text-orange-400">Support Services</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Long-Term Performance Optimization & Reliable Application Support
        </p>
        
        <p className="text-sm text-gray-500 mb-16 max-w-2xl mx-auto italic">
          mTouch Labs provides comprehensive App Maintenance and Support Services to ensure your mobile and web applications remain secure, scalable, and high-performing long after launch.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { label: "99.9%", sub: "UPTIME SLA" },
            { label: "24/7", sub: "MONITORING" },
            { label: "200+", sub: "APPS MAINTAINED" },
            { label: "4hr", sub: "AVG RESPONSE TIME" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl md:text-4xl font-black text-white mb-1">{stat.label}</span>
              <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">{stat.sub}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const CriticalSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Why It Matters</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Why App Maintenance Is <span className="text-orange-500">Critical</span> for Business Success
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Launching an app is just the beginning. Continuous maintenance ensures your application stays secure, performant, and competitive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {[
              "Bug fixes and performance optimization",
              "Security updates and vulnerability management",
              "OS and framework compatibility upgrades",
              "Feature enhancements",
              "Server and infrastructure monitoring",
              "Improved user experience"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={18} />
                <span className="text-gray-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-10 text-gray-500 italic text-sm">
            Without proper maintenance, applications risk downtime, security breaches, and performance degradation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <ShieldCheck className="text-blue-500" />, title: "Security Patching" },
            { icon: <Zap className="text-blue-500" />, title: "Performance Monitoring" },
            { icon: <RefreshCw className="text-blue-500" />, title: "Version Updates" },
            { icon: <TrendingUp className="text-blue-500" />, title: "Growth Optimization" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center gap-4 aspect-square"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                {card.icon}
              </div>
              <span className="font-bold text-gray-800 text-sm">{card.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Corrective Maintenance",
      desc: "Identify and resolve bugs, crashes, and errors to keep your application running smoothly.",
      items: ["Bug identification & resolution", "Error fixes", "Crash monitoring", "Code optimization"]
    },
    {
      id: "02",
      title: "Adaptive Maintenance",
      desc: "Keep your app compatible with the latest OS versions, frameworks, and APIs.",
      items: ["OS version updates (iOS, Android)", "Framework upgrades", "API compatibility updates", "Cloud infrastructure adjustments"]
    },
    {
      id: "03",
      title: "Preventive Maintenance",
      desc: "Proactive measures to prevent issues before they impact users.",
      items: ["Security patching", "Performance monitoring", "Code refactoring", "Database optimization"]
    },
    {
      id: "04",
      title: "Perfective Maintenance",
      desc: "Enhance features and improve UX based on user feedback and analytics.",
      items: ["Feature enhancements", "UI/UX improvements", "Scalability improvements", "User feedback implementation"]
    }
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">What We Offer</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Our App Maintenance <span className="text-orange-500">& Support Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {service.id}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlatformsSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Platforms</div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Mobile & Web <span className="text-orange-500">Application Support</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide maintenance and support for a wide range of application types and platforms.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Native iOS & Android", "Flutter", "React Native", "React / Next.js", 
            "Angular", "Node.js", "SaaS Platforms", "Enterprise Systems"
          ].map((tag, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-50 transition-colors cursor-default">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { id: "01", title: "Application Health Audit" },
    { id: "02", title: "Performance & Security Assessment" },
    { id: "03", title: "Maintenance Strategy Planning" },
    { id: "04", title: "SLA-Based Support Model" },
    { id: "05", title: "Continuous Monitoring" },
    { id: "06", title: "Monthly Performance Review" }
  ];

  return (
    <section className="bg-[#0B1120] text-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">How We Work</div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          Our <span className="text-orange-400">Maintenance Process</span>
        </h2>
        <p className="text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed">
          A structured approach that ensures long-term system stability and measurable business value.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white font-bold text-sm bg-white/5">
                {step.id}
              </div>
              <span className="text-xs font-bold text-gray-300 leading-tight px-2">{step.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Tech Stack</div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Technologies <span className="text-orange-500">We Support</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React Native", "Flutter", "iOS & Android Native", "Node.js", 
            "Next.js", "AWS", "Azure", "Google Cloud", "DevOps CI/CD"
          ].map((tech, i) => (
            <div key={i} className="px-8 py-3.5 rounded-full border border-gray-200 text-gray-800 font-bold text-sm hover:border-blue-500 transition-all cursor-default">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Our Edge</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Why Choose mTouch Labs for <span className="text-orange-500">Application Maintenance</span>?
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            We ensure your application evolves with business growth and technology advancements.
          </p>
          
          <div className="space-y-4">
            {[
              "Dedicated support teams",
              "SLA-based response times",
              "24/7 monitoring options",
              "Secure cloud infrastructure management",
              "Transparent reporting",
              "Scalable long-term support models"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                <span className="text-gray-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#0B1120] p-12 rounded-[40px] text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Enterprise-Grade Support</h3>
          <p className="text-gray-400 mb-10 leading-relaxed">
            From startups to enterprise — we provide tailored SLA-based maintenance plans that grow with your business.
          </p>
          <button className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 mx-auto transition-all transform hover:scale-105">
            Get Support Plan <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { icon: <ShoppingCart size={24} />, title: "eCommerce & Retail" },
    { icon: <HeartPulse size={24} />, title: "Healthcare & HealthTech" },
    { icon: <Banknote size={24} />, title: "FinTech & Banking" },
    { icon: <GraduationCap size={24} />, title: "EdTech Platforms" },
    { icon: <Building2 size={24} />, title: "Real Estate & SaaS" },
    { icon: <LayoutGrid size={24} />, title: "Enterprise Applications" },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Domains</div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-16">
          Industries <span className="text-orange-500">We Support</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="px-8 py-6 rounded-2xl border border-gray-100 flex items-center gap-6 text-left hover:shadow-sm transition-all"
            >
              <div className="text-blue-600 shrink-0">
                {industry.icon}
              </div>
              <span className="font-bold text-gray-800 text-sm">{industry.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are app maintenance services?",
      a: "App maintenance services involve regular updates, bug fixes, performance monitoring, and security patching to ensure your mobile or web application remains functional, secure, and compatible with new technologies."
    },
    {
      q: "How often should an app be maintained?",
      a: "We recommend continuous monitoring with monthly performance reviews and immediate patching for security vulnerabilities. Major updates are typically scheduled quarterly or alongside major OS releases."
    },
    {
      q: "Does mTouch Labs provide SLA-based support?",
      a: "Yes, we offer various SLA-based support models tailored to your business needs, including guaranteed response times and 24/7 monitoring options."
    },
    {
      q: "Can you maintain apps developed by other companies?",
      a: "Absolutely. We perform a comprehensive Application Health Audit to understand the existing codebase before taking over maintenance and support."
    }
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Got Questions?</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-bold text-gray-800 text-sm">{faq.q}</span>
                <div className="text-blue-500">
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.a}
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

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">M</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">mTouch Labs</span>
              <img src="https://picsum.photos/seed/iso/40/40" alt="ISO Certified" className="h-8 ml-2 opacity-80" referrerPolicy="no-referrer" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
            </p>
            <div className="space-y-4 mb-10">
              <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400">
                <Mail size={16} className="text-blue-500" /> contact@mtouchlabs.com
              </a>
              <a href="tel:+919390683154" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400">
                <Phone size={16} className="text-blue-500" /> +91 9390683154
              </a>
              <a href="tel:+15512220070" className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400">
                <Phone size={16} className="text-blue-500" /> +1 (551) 222-0070
              </a>
            </div>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Custom Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud & DevOps Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Application Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salesforce Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Assurance & Testing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden mb-8 grayscale opacity-60 hover:grayscale-0 transition-all">
              <img src="https://picsum.photos/seed/map/400/300" alt="Map" className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
              Download Brochure <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 mb-12">
          <div className="flex items-center gap-3 mb-10">
            <Globe size={20} className="text-blue-500" />
            <h4 className="text-sm font-bold uppercase tracking-widest">Global Presence</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {[
              { region: "India", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
              { region: "Americas", cities: ["United States", "Canada"] },
              { region: "Europe", cities: ["United Kingdom", "Germany", "Ireland"] },
              { region: "Asia Pacific", cities: ["Singapore", "Australia", "New Zealand", "India"] },
              { region: "Middle East", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] },
            ].map((loc, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{loc.region}</span>
                </div>
                <ul className="space-y-3 text-xs text-gray-500 font-medium">
                  {loc.cities.map((city, j) => (
                    <li key={j}>{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-500 font-medium">
          <p>© 2026 <span className="text-gray-300">mTouch Labs Pvt. Ltd.</span> All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>

      {/* Floating Widgets */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white relative"
        >
          <MessageCircle size={32} />
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center text-white"
        >
          <ChevronDown size={24} className="rotate-180" />
        </motion.button>
      </div>

      {/* Chat Bubble */}
      <div className="fixed bottom-8 left-8 z-[100]">
        <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-2xl">
          <div className="relative">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-[8px] font-bold">1</div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">Let's Chat!</div>
            <div className="text-xs font-bold text-white">WE ARE <span className="text-orange-400">HERE!</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#7B2CBF] font-sans selection:bg-blue-500/30">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <CriticalSection />
        <ServicesSection />
        <PlatformsSection />
        <ProcessSection />
        <TechStackSection />
        <WhyChooseSection />
        <IndustriesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
