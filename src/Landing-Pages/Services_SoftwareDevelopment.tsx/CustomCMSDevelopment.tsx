import React, { useState } from "react";
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
  Globe, 
  MapPin, 
  Layout, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Users, 
  Clock, 
  CheckCircle2, 
  Database, 
  Layers, 
  Smartphone, 
  Cloud, 
  Settings, 
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  ChevronUp
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#7B2CBF]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-white font-bold text-2xl tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">M</span>
              </div>
              mTouch Labs
            </span>
            <div className="ml-2 px-1.5 py-0.5 border border-yellow-500/50 rounded text-[10px] text-yellow-500 font-bold">ISO</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'Services', 'Products', 'Resources', 'Portfolio', 'Careers', 'Contact Us'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-white/90 hover:text-blue-400 text-[15px] font-medium transition-colors flex items-center gap-1"
            >
              {item}
              {['Home', 'Services', 'Products', 'Resources'].includes(item) && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        <button className="bg-[#0095FF] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-[15px] font-semibold transition-all flex items-center gap-2 group">
          Request Quote
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </nav>
  );
};

const TopBar = () => (
  <div className="bg-black text-white py-2 border-b border-white/10 hidden md:block">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between text-[13px]">
      <div className="flex items-center gap-6">
        <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <Mail size={14} /> contact@mtouchlabs.com
        </a>
        <a href="tel:+919390683154" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <span className="text-orange-500">🇮🇳</span> +91 9390683154
        </a>
        <a href="tel:+15512220070" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
          <span className="text-blue-500">🇺🇸</span> +1 (551) 222-0070
        </a>
      </div>
      <div className="flex items-center gap-6">
        <span className="text-yellow-500 font-bold uppercase tracking-wider text-[11px]">NASSCOM <span className="text-white">SME Inspire Awards 2026</span> 🏆</span>
        <div className="flex items-center gap-4 text-white/70">
          <span>Hyderabad</span> | <span>Bangalore</span> | <span>USA</span>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-[#7B2CBF] overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
    
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-white/60 text-sm mb-8"
        >
          <span>Home</span> / <span>Services</span> / <span className="text-yellow-500">Custom CMS Development</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-7xl font-bold text-white mb-6 leading-[1.1]"
        >
          Custom <span className="text-yellow-500">CMS</span> Development Company
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold text-white/90 mb-8"
        >
          Scalable, Secure & Business-Driven Content Management Solutions
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-white/70 leading-relaxed max-w-3xl mb-12"
        >
          mTouch Labs is a leading custom CMS development company in India delivering scalable and flexible content management systems tailored to business workflows. We design and build custom CMS platforms that empower organizations to manage digital content efficiently, streamline publishing processes, and maintain full control over their digital ecosystem. Content management should enable growth — not restrict it.
        </motion.p>
      </div>
    </div>
  </section>
);

const WhatIsCMS = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-8">
            What Is <span className="text-yellow-500">Custom CMS</span> Development?
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Custom CMS development involves creating a tailored content management system designed specifically around a business's content structure, operational workflow, and publishing requirements.
            </p>
            <p>
              Unlike off-the-shelf CMS platforms, a custom CMS provides personalized admin dashboards, role-based access control, workflow automation, API-ready architecture, high-performance content delivery, and scalability without plugin dependency. Our <a href="#" className="text-blue-600 font-semibold hover:underline">web development expertise</a> ensures every CMS is built on a high-performance, SEO-optimized foundation.
            </p>
            <p>
              A structured CMS improves operational efficiency and content governance, making it a strategic asset for businesses managing complex digital ecosystems. With our <a href="#" className="text-blue-600 font-semibold hover:underline">UI/UX design capabilities</a>, every admin interface is intuitive and efficient.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <Layout className="text-orange-500" />, title: "Custom Admin Dashboards" },
            { icon: <ShieldCheck className="text-blue-500" />, title: "Role-Based Access Control" },
            { icon: <Cpu className="text-red-500" />, title: "API-Ready Architecture" },
            { icon: <Layers className="text-purple-500" />, title: "Scalable Without Plugins" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-4 shadow-sm"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center mb-2">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-[#0A1128]">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseCustom = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "1500+", label: "CMS Projects Delivered" },
            { value: "14+", label: "Years Experience" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "150+", label: "Expert Engineers" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-8">
            Why Choose Custom CMS Over <span className="text-yellow-500">Generic Platforms</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Custom CMS solutions offer flexibility without structural limitations:
          </p>
          <ul className="space-y-4">
            {[
              "No unnecessary plugins — clean, lean codebase",
              "Faster load performance & better security control",
              "Custom workflow alignment to your business processes",
              "Reduced maintenance complexity & long-term scalability",
              "Enterprise-grade architecture for complex content ecosystems"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="text-yellow-500 shrink-0 mt-1" size={20} />
                <span className={idx === 4 ? "font-bold text-blue-600" : ""}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-4">
          Our Custom CMS <span className="text-yellow-500">Development Services</span>
        </h2>
        <p className="text-lg text-gray-600">From enterprise CMS to headless architecture</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {[
          {
            num: "01",
            title: "Enterprise CMS Development",
            desc: "Enterprise-grade content management systems supporting multi-user collaboration, multi-site management, role-based publishing workflows, media asset organization, and secure content control for complex ecosystems."
          },
          {
            num: "02",
            title: "Headless CMS Solutions",
            desc: "Headless CMS platforms that separate frontend and backend, support API-driven content delivery, enable omnichannel publishing, and improve performance scalability for modern digital platforms."
          },
          {
            num: "03",
            title: "CMS Migration & Modernization",
            desc: "Migrate from legacy CMS systems, replace plugin-heavy platforms, improve backend usability, optimize content performance, and enhance system security with minimal disruption."
          },
          {
            num: "04",
            title: "Custom Admin Panel Development",
            desc: "Intuitive admin interfaces for simplified content updates, structured categorization, user access management, workflow tracking, and performance monitoring."
          },
          {
            num: "05",
            title: "Scalable CMS Architecture",
            desc: "CMS platforms built with secure backend frameworks, optimized database structures, cloud-enabled infrastructure, and performance-first coding standards ensuring long-term reliability and scalability."
          }
        ].map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className={`bg-gray-50 p-10 rounded-3xl border border-gray-100 relative group ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="absolute top-8 left-8 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
              {service.num}
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#0A1128] mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section className="py-24 bg-[#F8FAFC]">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-4">
          Industries We <span className="text-yellow-500">Serve</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: "📰", title: "Media & Publishing" },
          { icon: "🛒", title: "eCommerce & Retail" },
          { icon: "🏢", title: "Corporate Enterprises" },
          { icon: "🎓", title: "Education & E-Learning" },
          { icon: "🏥", title: "Healthcare & Digital Platforms" },
          { icon: "💻", title: "SaaS & Technology Companies" }
        ].map((industry, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-6"
          >
            <div className="text-5xl">{industry.icon}</div>
            <h3 className="text-xl font-bold text-[#0A1128]">{industry.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyMtouch = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-6">
        Why Choose mTouch Labs as Your <span className="text-yellow-500">CMS Development Company</span>?
      </h2>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
        We deliver CMS platforms that support business growth and digital transformation.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "India-based development expertise",
          "Business-focused CMS architecture",
          "Secure backend engineering",
          "API-ready development models",
          "Scalable cloud deployment",
          "Ongoing support & optimization"
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 px-8 py-4 rounded-full border border-gray-200 flex items-center gap-3 shadow-sm">
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
            <span className="font-semibold text-[#0A1128]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 bg-[#F8FAFC] overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-4">
          Our CMS Development <span className="text-yellow-500">Process</span>
        </h2>
        <p className="text-lg text-gray-600">We ensure structured delivery and long-term maintainability.</p>
      </div>
      
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 hidden lg:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
          {[
            "Requirement Analysis",
            "Content Structure",
            "Architecture Design",
            "Development",
            "Testing",
            "Deployment",
            "Training & Support"
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center font-bold text-sm p-4 shadow-xl transition-all duration-300 ${idx === 2 ? 'bg-blue-600 text-white scale-110' : 'bg-white text-gray-800 border border-gray-100'}`}>
                  {step}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-[#F8FAFC]">
                  {idx + 1}
                </div>
              </div>
              {idx < 6 && <ChevronRight className="text-blue-300 lg:hidden mb-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Tech = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-8 leading-tight">
            Custom CMS <span className="text-yellow-500">Development Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            We leverage modern CMS frameworks and cloud platforms to deliver secure, scalable content management solutions.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {[
              "React", "Next.js", "Node.js", "TypeScript", "Strapi", "Sanity", 
              "Contentful", "WordPress", "GraphQL", "REST APIs", "PostgreSQL", 
              "MongoDB", "AWS", "Vercel", "Docker", "Redis", "Cloudflare", 
              "CI/CD", "Elasticsearch", "Git"
            ].map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "20+", label: "Frameworks & Tools" },
            { value: "API", label: "Headless Architecture" },
            { value: "<1s", label: "Content Delivery" },
            { value: "99.9%", label: "Uptime SLA" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-lg border border-gray-50 text-center flex flex-col items-center justify-center gap-2">
              <div className="text-5xl font-bold text-blue-500">{stat.value}</div>
              <div className="text-gray-800 font-bold text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is custom CMS development?",
      a: "Custom CMS development involves building a content management system from scratch or using frameworks to meet specific business needs, rather than relying on generic platforms like WordPress."
    },
    {
      q: "Why choose a custom CMS over WordPress?",
      a: "Custom CMS offers better security, performance, and flexibility. It eliminates unnecessary plugin bloat and allows for a perfectly tailored administrative experience."
    },
    {
      q: "Can you migrate existing CMS platforms?",
      a: "Yes, we specialize in migrating content and data from legacy systems or generic platforms to modern, custom-built CMS architectures with zero data loss."
    },
    {
      q: "Do you provide ongoing CMS support?",
      a: "Absolutely. We offer comprehensive support and maintenance packages to ensure your CMS remains secure, updated, and high-performing as your business grows."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1128] mb-4">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">Everything you need to know about custom CMS development</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-bold text-[#0A1128] group-hover:text-blue-600 transition-colors">{faq.q}</span>
                <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed text-lg">
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

const CTA = () => (
  <section className="py-24 bg-[#7B2CBF] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Ready to Build Your <span className="text-yellow-500">Custom CMS</span>?
      </h2>
      <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
        Let's discuss how a tailored content management system can streamline your publishing workflows and drive digital growth.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-[#0A1128] px-12 py-5 rounded-xl text-xl font-bold transition-all shadow-xl shadow-yellow-500/20 active:scale-95">
        Start Your CMS Project
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#7B2CBF] text-white pt-24 pb-12 border-t border-white/5">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-2xl font-bold">mTouch Labs</span>
            <div className="ml-2 px-1.5 py-0.5 border border-yellow-500/50 rounded text-[10px] text-yellow-500 font-bold">ISO</div>
          </div>
          <p className="text-white/60 leading-relaxed mb-8">
            A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
          </p>
          <div className="space-y-4">
            <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
              <Mail size={18} className="text-blue-500" /> contact@mtouchlabs.com
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-white/40">Company</h4>
          <ul className="space-y-4 text-white/60">
            {['Home', 'Services', 'About Us', 'Careers', 'Portfolio', 'Contact Us'].map(item => (
              <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-white/40">Services</h4>
          <ul className="space-y-4 text-white/60">
            {[
              'Custom Software Development',
              'Cloud & DevOps Solutions',
              'Mobile Application Development',
              'Salesforce Consulting',
              'AI & Machine Learning',
              'UI/UX Design'
            ].map(item => (
              <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <div className="rounded-2xl overflow-hidden h-64 bg-white/10 relative group">
            <img 
              src="https://picsum.photos/seed/map/400/300" 
              alt="Location Map" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <MapPin className="text-blue-500 mb-2" size={32} />
              <span className="font-bold text-white mb-2">Open in Maps</span>
              <span className="text-xs text-white/60">mTouch Labs - Software Development</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-12 mb-12">
        <div className="flex items-center gap-3 mb-10">
          <Globe className="text-blue-500" size={24} />
          <h3 className="text-2xl font-bold">Global Presence</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            { region: "India", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
            { region: "Americas", cities: ["United States", "Canada"] },
            { region: "Europe", cities: ["United Kingdom", "Germany", "Ireland"] },
            { region: "Asia Pacific", cities: ["Singapore", "Australia", "New Zealand", "India"] },
            { region: "Middle East", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] }
          ].map((loc, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <h5 className="font-bold text-blue-500 uppercase tracking-widest text-xs">{loc.region}</h5>
              </div>
              <ul className="space-y-4 text-white/50 text-sm">
                {loc.cities.map(city => <li key={city}>{city}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm">
        <p>© 2026 <span className="text-white font-semibold">mTouch Labs Pvt. Ltd.</span> All rights reserved.</p>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingActions = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
    <button className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform group relative">
      <MessageCircle className="text-white" size={32} />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </button>
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:scale-110 transition-transform"
    >
      <ChevronUp className="text-white" size={24} />
    </button>
  </div>
);

export default function App() {
  return (
    <div className="font-sans text-[#0A1128] selection:bg-blue-500 selection:text-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <WhatIsCMS />
        <WhyChooseCustom />
        <Services />
        <Industries />
        <WhyMtouch />
        <Process />
        <Tech />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
