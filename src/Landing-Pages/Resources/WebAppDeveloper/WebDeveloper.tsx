import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  Phone, 
  ChevronDown, 
  ChevronRight,
  Plus,
  Minus,
  MessageCircle,
  ArrowUpRight,
  Globe,
  MapPin,
  Download,
  Zap,
  Shield,
  Layers,
  RefreshCw,
  Code2,
  Users,
  UserPlus,
  Layout,
  Ship
} from 'lucide-react';

// --- Constants & Types ---

const PRIMARY_PURPLE = '#7B2CBF';
const DARK_BG = '#05070a';
const CARD_BG = '#0f172a';

interface Stat {
  value: string;
  label: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HiringModel {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TechExpertise {
  title: string;
  icon: string;
}

interface FAQ {
  question: string;
  answer: string;
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <span className="text-black font-bold text-xl">m</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">mTouch Labs</span>
          <div className="ml-2 px-1.5 py-0.5 border border-yellow-500/50 rounded text-[10px] text-yellow-500 font-bold uppercase">ISO</div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {['Home', 'Services', 'Products', 'Resources', 'Portfolio', 'Careers', 'Contact Us'].map((item) => (
            <div key={item} className="group relative flex items-center gap-1 cursor-pointer">
              <span className="text-white/90 group-hover:text-white font-medium transition-colors">{item}</span>
              {['Services', 'Products', 'Resources'].includes(item) && <ChevronDown size={14} className="text-white/60" />}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </div>
          ))}
        </div>

        <button 
          className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold transition-all hover:scale-105 active:scale-95"
          style={{ backgroundColor: '#0084ff' }} // Using the blue from screenshot for this specific button as it looks like a primary action
        >
          Request Quote <ArrowUpRight size={18} />
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#0a192f] to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          WEB DEVELOPMENT • INDIA
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
        >
          Hire Web Developers <span className="text-blue-500">in India</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
        >
          Build high-performance, scalable web solutions with our expert team of developers. 
          We combine technical excellence with business strategy to deliver results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button 
            className="w-full sm:w-auto px-10 py-4 rounded-full text-white font-bold text-lg flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(123,44,191,0.4)]"
            style={{ backgroundColor: PRIMARY_PURPLE }}
          >
            Hire Developers <ChevronRight size={20} />
          </button>
          <button className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all">
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats: Stat[] = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '1050+', label: 'Global Clients' },
    { value: '14+', label: 'Years in Tech' },
    { value: '99%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium">
            Your website or web application is often the foundation of your digital presence. 
            Whether you're building a customer-facing platform, an internal enterprise system, 
            or a scalable SaaS product, choosing the right web development team makes all the difference.
          </p>
          <p className="mt-8 text-blue-600 font-bold italic text-xl">
            At mTouch Labs, we provide experienced web developers in India who build robust, 
            secure, and performance-driven web solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-500 font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GrowthSection = () => {
  const features: Feature[] = [
    { title: 'Scale with Traffic', description: 'Web solutions that grow with increasing traffic and data demand.', icon: <Zap className="text-blue-500" /> },
    { title: 'Fast Loading', description: 'Performance-optimized applications for excellent user experience.', icon: <RefreshCw className="text-blue-500" /> },
    { title: 'Strong Security', description: 'Enterprise-grade security standards and best practices.', icon: <Shield className="text-blue-500" /> },
    { title: 'API & Cloud Integration', description: 'Seamless integration with APIs and cloud infrastructure.', icon: <Layers className="text-blue-500" /> },
    { title: 'Long-Term Evolution', description: 'Ongoing support, upgrades, and feature enhancements.', icon: <RefreshCw className="text-blue-500" /> },
    { title: 'Modern Web Stacks', description: 'React.js, Next.js, Angular, Node.js, Python, and more.', icon: <Code2 className="text-blue-500" /> },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Web Development <span className="text-blue-600">Built for Growth</span>
          </h2>
          <p className="text-xl text-gray-600">Our developers build web solutions engineered for scale and performance.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 28, className: "group-hover:text-white transition-colors" })}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HiringModels = () => {
  const models: HiringModel[] = [
    { title: 'Dedicated', description: 'Full-time developers working exclusively on your project.', icon: <Users size={32} /> },
    { title: 'Team Augmentation', description: 'Extend your team with skilled web engineers.', icon: <UserPlus size={32} /> },
    { title: 'Full-Cycle', description: 'End-to-end development from design to deployment.', icon: <RefreshCw size={32} /> },
    { title: 'Offshore', description: 'Build your offshore web development team.', icon: <Globe size={32} /> },
  ];

  return (
    <section className="py-24 bg-[#0a1120] text-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible <span className="text-blue-500">Hiring</span> Models
          </h2>
          <p className="text-xl text-gray-400">Scale your web development team as needed.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">{model.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-gray-400 leading-relaxed">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const expertises: TechExpertise[] = [
    { title: 'React.js, Next.js, Angular', icon: '⚛️' },
    { title: 'Node.js, Python, .NET, PHP', icon: '🟢' },
    { title: 'REST & GraphQL APIs', icon: '🔗' },
    { title: 'AWS, Azure, GCP', icon: '☁️' },
    { title: 'E-commerce & CMS', icon: '🛒' },
    { title: 'Enterprise portals', icon: '🏢' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Technologies & <span className="text-blue-600">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertises.map((item, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all"
            >
              <div className="text-3xl">{item.icon}</div>
              <span className="text-xl font-bold text-gray-800">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs: FAQ[] = [
    { question: 'Why hire web developers in India?', answer: 'Highly skilled developers, competitive pricing, and global experience delivering projects across multiple industries.' },
    { question: 'Can I hire a dedicated web developer?', answer: 'Yes, we offer flexible hiring models including dedicated developers who work exclusively on your project.' },
    { question: 'Do you support ongoing maintenance?', answer: 'Absolutely. We provide comprehensive post-launch support and maintenance to ensure your application remains up-to-date and secure.' },
    { question: 'What industries do you serve?', answer: 'We serve a wide range of industries including Healthcare, E-commerce, Finance, Education, and Real Estate.' },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className={`text-xl font-bold ${openIdx === idx ? 'text-blue-600' : 'text-gray-900'}`}>{faq.question}</span>
                {openIdx === idx ? <Minus className="text-blue-600" /> : <Plus className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-gray-600 text-lg leading-relaxed"
                  >
                    {faq.answer}
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
    <section className="py-24 bg-gradient-to-r from-[#0a192f] to-[#001e3c] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-[100px] rounded-full" />
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Build a Web Solution That <br /> Performs</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          If you're looking to hire web developers in India who combine technical depth with business understanding, 
          our team is ready to collaborate. Partner with mTouch Labs and build web solutions engineered for performance and growth.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
            Contact Us Today <ChevronRight size={20} />
          </button>
          <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-green-500 text-white font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-all">
            WhatsApp <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#05070a] text-white pt-24 pb-12">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">m</span>
              </div>
              <span className="text-white font-bold text-2xl">mTouch Labs</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8">
              A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Mail size={18} className="text-blue-500" /> contact@mtouchlabs.com
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Phone size={18} className="text-blue-500" /> +91 9390683154
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Phone size={18} className="text-blue-500" /> +1 (551) 222-0070
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'Services', 'About Us', 'Careers', 'Contact Us'].map(item => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-4 text-gray-400">
              {[
                'Custom Software Development',
                'Cloud & DevOps Solutions',
                'Mobile Application Development',
                'Salesforce Consulting',
                'Quality Assurance & Testing',
                'AI & Data Analytics'
              ].map(item => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden mb-6 h-48 bg-gray-800 relative group">
              <img 
                src="https://picsum.photos/seed/map/400/200" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10 flex items-center gap-2">
                  <MapPin size={16} className="text-red-500" />
                  <span className="text-sm font-medium">Open in Maps</span>
                </div>
              </div>
            </div>
            <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all">
              Download Brochure <Download size={18} />
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12">
          <div className="flex items-center gap-3 mb-10">
            <Globe className="text-blue-500" />
            <h3 className="text-xl font-bold">Global Presence</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
            {[
              { region: 'INDIA', cities: ['Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Kochi'] },
              { region: 'AMERICAS', cities: ['United States', 'Canada'] },
              { region: 'EUROPE', cities: ['United Kingdom', 'Germany', 'Ireland'] },
              { region: 'ASIA PACIFIC', cities: ['Singapore', 'Australia', 'New Zealand', 'India'] },
              { region: 'MIDDLE EAST', cities: ['UAE', 'Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait'] },
            ].map((loc, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-blue-500 font-bold text-xs tracking-widest">{loc.region}</span>
                </div>
                <ul className="space-y-4 text-gray-400">
                  {loc.cities.map(city => (
                    <li key={city} className="hover:text-white transition-colors cursor-pointer">{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:row items-center justify-between gap-6 pt-12 border-t border-white/5">
            <p className="text-gray-500 text-sm">© 2026 <span className="text-gray-300 font-medium">mTouch Labs Pvt. Ltd.</span> All rights reserved.</p>
            <div className="flex gap-8 text-sm text-gray-500">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Refund Policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform relative group">
          <MessageCircle size={32} className="text-white" />
          <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Chat with us
          </div>
        </div>
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform group relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ArrowUpRight size={24} className="text-white -rotate-45" />
          <div className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Back to top
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-blue-500/30 selection:text-blue-200">
      {/* Top Bar */}
      <div className="bg-black border-b border-white/5 py-2 hidden md:block">
        <div className="max-w-[1920px] mx-auto px-12 flex justify-between items-center text-[13px] text-gray-400">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={14} className="text-blue-500" /> contact@mtouchlabs.com
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Phone size={14} className="text-blue-500" /> +91 9390683154
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Phone size={14} className="text-blue-500" /> +1 (551) 222-0070
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-yellow-500 font-bold">
              <span className="uppercase">Nasscom</span> SME Inspire Awards 2026 🏆
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <span>Hyderabad</span> | <span>Bangalore</span> | <span>USA</span>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
      <Hero />
      <Stats />
      <GrowthSection />
      <HiringModels />
      <Expertise />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
