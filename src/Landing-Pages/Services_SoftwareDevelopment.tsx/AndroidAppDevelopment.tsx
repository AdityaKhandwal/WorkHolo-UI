import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Code2, 
  ShieldCheck, 
  Rocket,
  ShoppingCart,
  CreditCard,
  Stethoscope,
  Truck,
  GraduationCap,
  Layout,
  ChevronUp,
  MessageCircle
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', hasDropdown: true },
    { name: 'Services', hasDropdown: true },
    { name: 'Products', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'Portfolio', hasDropdown: false },
    { name: 'Careers', hasDropdown: false },
    { name: 'Contact Us', hasDropdown: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      {/* Top Bar */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-4 mb-4">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[13px] text-white/70">
            <div className="flex items-center space-x-6">
              <a href="mailto:contact@mtouchlabs.com" className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" /> contact@mtouchlabs.com
              </a>
              <div className="flex items-center">
                <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-4 h-3 mr-2" />
                <span>+91 9390683154</span>
              </div>
              <div className="flex items-center">
                <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-4 h-3 mr-2" />
                <span>+1 (551) 222-0070</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-[#F19E38] font-semibold">NASSCOM SME Inspire Awards 2026 🏆</span>
              <div className="flex items-center space-x-4">
                <span>Hyderabad</span>
                <span>|</span>
                <span>Bangalore</span>
                <span>|</span>
                <span>USA</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
              <span className="text-black font-bold text-xl">M</span>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight">mTouch Labs</span>
          </div>
          <div className="hidden sm:block">
            <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-white/50 leading-none text-center">ISO<br/>CERTIFIED</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href="#" 
              className="text-white hover:text-[#0091FF] transition-colors text-[15px] font-medium flex items-center group"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />}
            </a>
          ))}
          <button className="bg-[#0091FF] hover:bg-[#007ACC] text-white px-6 py-2.5 rounded-full font-semibold text-[15px] flex items-center transition-all">
            Request Quote <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a key={link.name} href="#" className="text-white text-lg font-medium border-b border-white/5 pb-2">
                {link.name}
              </a>
            ))}
            <button className="bg-[#0091FF] text-white px-6 py-3 rounded-full font-semibold text-center">
              Request Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#05070A] flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0091FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-white/60 text-sm uppercase tracking-[0.2em]">Home</span>
            <span className="text-white/30">/</span>
            <span className="text-white/60 text-sm uppercase tracking-[0.2em]">Services</span>
            <span className="text-white/30">/</span>
            <span className="text-[#F19E38] text-sm uppercase tracking-[0.2em] font-semibold">Android App Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
            Native <span className="text-[#F19E38]">Android App</span><br/>
            Development Company
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Secure, Scalable & Performance-Optimized Android Applications. mTouch Labs is a trusted Android app development company delivering secure, scalable, and performance-optimized mobile applications tailored for the Android ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto bg-[#F19E38] hover:bg-[#D98A2C] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg shadow-orange-500/20">
              Get a Free Consultation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Icons/Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 hidden lg:block"
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer">
          <MessageCircle className="text-white w-8 h-8" />
        </div>
      </motion.div>
    </section>
  );
};

const ExpertiseSection = () => {
  const stats = [
    { value: '14+', label: 'Years of Experience', color: 'text-[#0091FF]' },
    { value: '120+', label: 'Android Apps Delivered', color: 'text-[#0091FF]' },
    { value: '200+', label: 'Global Clients', color: 'text-[#0091FF]' },
    { value: '4.7★', label: 'Avg. Play Store Rating', color: 'text-[#0091FF]' },
  ];

  const points = [
    "Custom Android Apps — consumer, enterprise & on-demand platforms",
    "Kotlin Development — modern architecture, clean code & enhanced security",
    "Android UI/UX — Material Design, responsive layouts & accessibility",
    "Integration Services — REST, GraphQL, Firebase & payment gateways",
    "Enterprise Solutions — workforce mobility, analytics & device management",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D17] mb-8 leading-tight">
              Our <span className="text-[#F19E38]">Android Expertise</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              We deliver end-to-end native Android development with structured engineering:
            </p>
            <div className="space-y-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#F19E38] mr-4 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <span className={`text-5xl font-bold ${stat.color} mb-3`}>{stat.value}</span>
                <span className="text-gray-500 font-medium">{stat.label}</span>
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
    {
      id: '01',
      title: 'Custom Android App Development',
      desc: 'Consumer-facing mobile apps, enterprise mobility solutions, on-demand service platforms, eCommerce applications, and subscription-based products built with native best practices.'
    },
    {
      id: '02',
      title: 'Kotlin-Based Development',
      desc: 'Modern Android architecture with clean, maintainable code, improved performance, enhanced security features, and reduced development errors using Kotlin.'
    },
    {
      id: '03',
      title: 'Android UI/UX Optimization',
      desc: 'Material Design principles, responsive layouts, adaptive screen support, and gesture-friendly navigation. Our UI/UX design experts ensure seamless experiences across devices.'
    },
    {
      id: '04',
      title: 'Android App Integration',
      desc: 'REST & GraphQL APIs, cloud-based infrastructure, payment gateways, Firebase services, and third-party SDKs — ensuring backend scalability and real-time functionality.'
    },
    {
      id: '05',
      title: 'Enterprise Android Solutions',
      desc: 'Secure workforce mobility apps, internal process management, real-time analytics dashboards, device management integrations, and cloud-connected enterprise systems.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D17] mb-4">
            End-to-End <span className="text-[#F19E38]">Android Development Services</span>
          </h2>
          <p className="text-gray-600 text-lg">From concept to Play Store launch, we cover every stage of Android app delivery</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
              <span className="inline-block bg-[#0091FF] text-white px-4 py-1 rounded-md text-sm font-bold mb-6">{service.id}</span>
              <h3 className="text-2xl font-bold text-[#0B0D17] mb-4 group-hover:text-[#0091FF] transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LifecycleSection = () => {
  const steps = [
    { id: 1, name: 'Requirements' },
    { id: 2, name: 'Architecture' },
    { id: 3, name: 'UI/UX Design' },
    { id: 4, name: 'Development' },
    { id: 5, name: 'Device Testing' },
    { id: 6, name: 'Optimization' },
    { id: 7, name: 'Play Store Launch' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D17] mb-4">
            Our Android <span className="text-[#F19E38]">Development Lifecycle</span>
          </h2>
          <p className="text-gray-600 text-lg">A structured process ensures predictable results and scalable architecture.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:border-[#0091FF] transition-all shadow-sm">
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#0091FF] text-white rounded-full flex items-center justify-center text-sm font-bold">{step.id}</span>
                  <span className="text-[#0B0D17] font-bold text-sm px-2">{step.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { name: 'eCommerce & Retail', icon: <ShoppingCart className="w-8 h-8" /> },
    { name: 'FinTech & Digital Payments', icon: <CreditCard className="w-8 h-8" /> },
    { name: 'Healthcare & Telemedicine', icon: <Stethoscope className="w-8 h-8" /> },
    { name: 'Logistics & Transportation', icon: <Truck className="w-8 h-8" /> },
    { name: 'Education & EdTech', icon: <GraduationCap className="w-8 h-8" /> },
    { name: 'SaaS & Technology Startups', icon: <Layout className="w-8 h-8" /> },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D17] mb-4">
            Industries We <span className="text-[#F19E38]">Serve</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white p-12 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-[#0091FF] mb-6">{industry.icon}</div>
              <h3 className="text-xl font-bold text-[#0B0D17]">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechSection = () => {
  const techs = [
    "Kotlin", "Android SDK", "Jetpack Compose", "Firebase", "Room DB",
    "Retrofit", "Dagger/Hilt", "Coroutines", "MVVM", "CI/CD"
  ];

  const stats = [
    { value: '10K+', label: 'Android Devices Supported' },
    { value: '120+', label: 'Apps Delivered' },
    { value: '50+', label: 'Android Engineers' },
    { value: '24/7', label: 'App Monitoring' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D17] mb-8">
              Technologies <span className="text-[#F19E38]">We Work With</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Our Android apps are built on modern, scalable technology stacks. For cross-platform needs, explore our <span className="text-[#F19E38] cursor-pointer hover:underline">cross-platform development services</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech, idx) => (
                <span key={idx} className="bg-gray-50 border border-gray-200 px-5 py-2 rounded-full text-gray-700 font-medium text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <span className="text-4xl font-bold text-[#0091FF] mb-2">{stat.value}</span>
                <span className="text-gray-500 font-medium text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "What is Android app development?", a: "Android app development is the process of creating applications specifically for devices running the Android operating system using languages like Kotlin or Java." },
    { q: "Why choose native Android development?", a: "Native development offers the best performance, full access to device hardware, and a seamless user experience tailored to the platform's design language." },
    { q: "How long does Android app development take?", a: "The timeline varies based on complexity, but typically ranges from 3 to 9 months for a full-featured application." },
    { q: "Do you provide post-launch support?", a: "Yes, we offer comprehensive maintenance and support packages to ensure your app remains up-to-date and bug-free." },
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D17] mb-4">
            Frequently Asked <span className="text-[#F19E38]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">Everything you need to know about Android app development</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button 
                className="w-full py-6 flex justify-between items-center text-left hover:text-[#0091FF] transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                <span className="text-xl font-bold text-[#0B0D17]">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed">{faq.a}</p>
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

const CTASection = () => {
  return (
    <section className="py-24 bg-[#05070A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#0091FF]/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Ready to Build <span className="text-[#F19E38]">Powerful Android Apps?</span>
        </h2>
        <p className="text-white/60 text-xl max-w-3xl mx-auto mb-12">
          Let's discuss how native Android development can deliver a scalable, high-performance mobile experience for your business.
        </p>
        <button className="bg-[#F19E38] hover:bg-[#D98A2C] text-white px-12 py-5 rounded-lg font-bold text-xl transition-all">
          Get a Free Consultation
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  const regions = [
    { name: 'INDIA', cities: ['Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Kochi'] },
    { name: 'AMERICAS', cities: ['United States', 'Canada'] },
    { name: 'EUROPE', cities: ['United Kingdom', 'Germany', 'Ireland'] },
    { name: 'ASIA PACIFIC', cities: ['Singapore', 'Australia', 'New Zealand', 'India'] },
    { name: 'MIDDLE EAST', cities: ['UAE', 'Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait'] },
  ];

  return (
    <footer className="bg-[#05070A] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">mTouch Labs</span>
            </div>
            <p className="text-white/50 leading-relaxed mb-8">
              A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
            </p>
            <div className="space-y-4 text-white/70">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#0091FF]" />
                <span>contact@mtouchlabs.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#0091FF]" />
                <span>+91 9390683154</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-white/40">Company</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-white/40">Services</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">Custom Software Development</a></li>
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">Cloud & DevOps Solutions</a></li>
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">Mobile Application Development</a></li>
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">Salesforce Consulting</a></li>
              <li><a href="#" className="hover:text-[#0091FF] transition-colors">Quality Assurance & Testing</a></li>
            </ul>
          </div>

          <div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold">Open in Maps</span>
                <Globe className="w-4 h-4 text-white/40" />
              </div>
              <div className="aspect-square bg-white/10 rounded-xl overflow-hidden relative">
                <img 
                  src="https://picsum.photos/seed/map/400/400" 
                  alt="Location Map" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[#0091FF]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="border-t border-white/10 pt-16 mb-16">
          <div className="flex items-center space-x-3 mb-12">
            <Globe className="w-6 h-6 text-[#0091FF]" />
            <h3 className="text-2xl font-bold">Global Presence</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {regions.map((region) => (
              <div key={region.name}>
                <h5 className="text-[#0091FF] text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center">
                  <span className="w-2 h-2 bg-[#0091FF] rounded-full mr-2"></span>
                  {region.name}
                </h5>
                <ul className="space-y-3 text-white/40 text-sm">
                  {region.cities.map((city) => (
                    <li key={city}>{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/30 text-sm space-y-4 md:space-y-0">
          <p>© 2026 mTouch Labs Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-12 h-12 bg-[#0091FF] rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-[#007ACC] transition-all"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans selection:bg-[#0091FF]/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D17] mb-8 leading-tight">
                  What Does an <span className="text-[#F19E38]">Android App Development</span> Company Do?
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  An Android app development company designs, develops, tests, and deploys mobile applications specifically for Android devices using native technologies such as Kotlin and Android SDK.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Professional Android development ensures compatibility across diverse devices, optimized performance and memory usage, secure data handling, Google Play Store compliance, and long-term scalability.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  As a full-service <span className="text-[#F19E38] cursor-pointer hover:underline">mobile app development company</span>, we build native Android apps engineered for high performance and seamless integration within the Google ecosystem.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Native Android', icon: <Smartphone className="w-8 h-8" /> },
                  { title: 'Kotlin-Powered', icon: <Code2 className="w-8 h-8" /> },
                  { title: 'Secure Architecture', icon: <ShieldCheck className="w-8 h-8" /> },
                  { title: 'Play Store Ready', icon: <Rocket className="w-8 h-8" /> },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-10 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-all">
                    <div className="text-[#0091FF] mb-4">{item.icon}</div>
                    <span className="text-[#0B0D17] font-bold">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ExpertiseSection />

        {/* Why Choose Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0D17] mb-4">
              Why Choose <span className="text-[#F19E38]">mTouch Labs</span> for Android?
            </h2>
            <p className="text-gray-600 text-lg mb-16">We build Android applications that are reliable, scalable, and future-ready.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Native Android engineering expertise",
                "Kotlin-based architecture",
                "Device compatibility optimization",
                "Secure integration capabilities",
                "Performance-focused development",
                "Ongoing maintenance & upgrades"
              ].map((pill, idx) => (
                <div key={idx} className="bg-white border border-gray-200 px-8 py-3 rounded-full flex items-center shadow-sm">
                  <div className="w-2 h-2 bg-[#F19E38] rounded-full mr-3"></div>
                  <span className="text-gray-800 font-semibold">{pill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesSection />
        <LifecycleSection />
        <IndustriesSection />
        <TechSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
