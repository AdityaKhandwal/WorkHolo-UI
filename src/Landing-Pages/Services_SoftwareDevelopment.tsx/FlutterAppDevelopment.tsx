import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
  ChevronRight,
  Globe,
  CheckCircle2,
  Plus,
  Minus,
  MessageCircle,
  ArrowUp,
  MapPin,
} from "lucide-react";

// --- Components ---

const TopBar = () => (
  <div className="bg-[#0a0a0a] text-white py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center text-[12px] font-medium border-b border-white/10">
    <div className="flex items-center gap-6">
      <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-2 hover:text-[#00a3ff] transition-colors">
        <Mail size={14} /> contact@mtouchlabs.com
      </a>
      <a href="tel:+919390683154" className="flex items-center gap-2 hover:text-[#00a3ff] transition-colors">
        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-4 h-3" /> +91 9390683154
      </a>
      <a href="tel:+15512220070" className="flex items-center gap-2 hover:text-[#00a3ff] transition-colors">
        <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-4 h-3" /> +1 (551) 222-0070
      </a>
    </div>
    <div className="flex items-center gap-4 mt-2 md:mt-0">
      <span className="text-[#f39c12] uppercase tracking-wider font-bold">Nasscom</span>
      <span className="opacity-70">SME Inspire Awards 2026</span>
      <span className="text-yellow-500">🏆</span>
      <div className="h-4 w-[1px] bg-white/20 mx-2 hidden md:block"></div>
      <div className="flex items-center gap-3 opacity-80">
        <span>Hyderabad</span>
        <span className="text-white/30">|</span>
        <span>Bangalore</span>
        <span className="text-white/30">|</span>
        <span>USA</span>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="bg-[#050b17] text-white py-4 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-lg">
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
          <img src="https://picsum.photos/seed/mtouch/100/100" alt="Logo" className="rounded-full" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight">mTouch Labs</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-[8px] text-black font-bold">ISO</div>
            <span className="text-[8px] opacity-60 uppercase font-bold">Certified Company</span>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
      <a href="#" className="hover:text-[#00a3ff] transition-colors flex items-center gap-1">Home <ChevronDown size={14} /></a>
      <a href="#" className="text-[#00a3ff] flex items-center gap-1">Services <ChevronDown size={14} /></a>
      <a href="#" className="hover:text-[#00a3ff] transition-colors flex items-center gap-1">Products <ChevronDown size={14} /></a>
      <a href="#" className="hover:text-[#00a3ff] transition-colors flex items-center gap-1">Resources <ChevronDown size={14} /></a>
      <a href="#" className="hover:text-[#00a3ff] transition-colors">Portfolio</a>
      <a href="#" className="hover:text-[#00a3ff] transition-colors">Careers</a>
      <a href="#" className="hover:text-[#00a3ff] transition-colors">Contact Us</a>
    </div>
    <button className="bg-[#00a3ff] hover:bg-[#0082cc] text-white px-6 py-2.5 rounded-full font-bold text-[14px] flex items-center gap-2 transition-all transform hover:scale-105">
      Request Quote <ChevronRight size={16} />
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative bg-[#050b17] py-24 px-4 overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#00a3ff,transparent_70%)]"></div>
    </div>
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <div className="flex items-center justify-center gap-2 text-sm font-medium mb-8 opacity-80">
        <a href="#" className="hover:text-[#00a3ff]">Home</a>
        <span className="text-white/30">/</span>
        <a href="#" className="hover:text-[#00a3ff]">Services</a>
        <span className="text-white/30">/</span>
        <span className="text-[#f39c12]">Flutter App Development</span>
      </div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight"
      >
        Scalable <span className="text-[#f39c12]">Flutter App</span> <br /> Development Company
      </motion.h1>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl font-bold text-white/90 mb-8"
      >
        High-Quality Cross-Platform Apps Built with a Single Codebase
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-3xl mx-auto text-white/70 text-lg leading-relaxed mb-12"
      >
        mTouch Labs is a performance-driven Flutter app development company delivering high-quality cross-platform mobile applications for startups, enterprises, and digital product companies.
      </motion.p>
    </div>
  </section>
);

const WhatIsFlutter = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-display font-extrabold text-[#050b17] mb-8">
          What Is <span className="text-[#f39c12]">Flutter App</span> <br /> Development?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Flutter app development involves building mobile applications using Google's Flutter framework, allowing developers to create cross-platform apps from a unified codebase with native-like performance.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          A professional Flutter development company ensures consistent UI across devices, faster time-to-market, optimized app performance, and scalable architecture — ideal for businesses seeking rapid deployment without compromising quality.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          As a trusted <span className="text-[#f39c12] font-bold">mobile app development company</span>, we leverage Flutter to deliver visually consistent, high-performance apps across both iOS and Android platforms.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          { icon: "📱", title: "Single Codebase" },
          { icon: "⚡", title: "Native Performance" },
          { icon: "🎨", title: "Expressive UI" },
          { icon: "🚀", title: "Faster Delivery" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-all hover:shadow-xl hover:border-[#00a3ff]/20"
          >
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
            <h3 className="font-bold text-[#050b17]">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Expertise = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-2 gap-6">
        {[
          { val: "14+", label: "Years of Experience" },
          { val: "80+", label: "Flutter Apps Built" },
          { val: "200+", label: "Global Clients" },
          { val: "50%", label: "Faster Time-to-Market" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-black text-[#00a3ff] mb-2">{item.val}</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-4xl font-display font-extrabold text-[#050b17] mb-8">
          Our <span className="text-[#f39c12]">Flutter Expertise</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          We build cross-platform apps with structured engineering and scalable architecture:
        </p>
        <ul className="space-y-4">
          {[
            "Custom Flutter Apps — consumer, enterprise & on-demand platforms",
            "Cross-Platform Deployment — single codebase for iOS & Android",
            "UI-Driven Design — custom widgets, smooth animations & responsive layouts",
            "API & Backend Integration — REST, GraphQL, cloud & payment gateways",
            "Testing & Optimization — cross-device testing, performance benchmarking",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="text-[#f39c12] shrink-0 mt-1" size={20} />
              <span className="text-gray-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#050b17] mb-6">
        End-to-End <span className="text-[#f39c12]">Flutter Development Services</span>
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto">
        From MVP to enterprise scale, we cover every stage of Flutter app delivery
      </p>
    </div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { id: "01", title: "Custom Flutter App Development", desc: "Consumer mobile apps, enterprise mobility solutions, on-demand service platforms, eCommerce applications, and SaaS mobile products — each built for long-term maintainability." },
        { id: "02", title: "Cross-Platform Mobile Development", desc: "Single codebase efficiency, consistent feature implementation, unified design system, and faster updates — reducing complexity while maintaining high performance." },
        { id: "03", title: "UI-Driven Flutter App Design", desc: "Custom widget-based interfaces, smooth animations, responsive layouts, and platform-adaptive designs. Our UI/UX design team ensures intuitive mobile experiences." },
        { id: "04", title: "API & Backend Integration", desc: "REST & GraphQL APIs, cloud databases, third-party services, payment gateways, and authentication systems — structured for scalability and security." },
        { id: "05", title: "App Testing & Optimization", desc: "Cross-device testing, performance benchmarking, code optimization, security validation, and app store deployment support ensuring reliability across all environments." },
      ].map((service, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all group"
        >
          <div className="w-12 h-12 bg-[#00a3ff] text-white rounded-lg flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
            {service.id}
          </div>
          <h3 className="text-2xl font-bold text-[#050b17] mb-4">{service.title}</h3>
          <p className="text-gray-500 leading-relaxed">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Process = () => (
  <section className="py-24 px-4 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#050b17] mb-6">
        Our Flutter <span className="text-[#f39c12]">Development Process</span>
      </h2>
      <p className="text-gray-500 text-lg">We focus on predictable delivery and scalable design.</p>
    </div>
    <div className="max-w-7xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
        {[
          "Requirements", "UI/UX Planning", "Architecture", "Development", "Testing & QA", "Deployment", "Enhancement"
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center mb-4 relative group hover:border-[#00a3ff] transition-colors">
              <div className="w-6 h-6 bg-[#00a3ff] text-white text-[10px] font-bold rounded-full flex items-center justify-center absolute -top-2 -right-2">
                {i + 1}
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-lg group-hover:bg-[#00a3ff]/10 transition-colors"></div>
            </div>
            <span className="font-bold text-[#050b17] text-sm">{step}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#050b17] mb-6">
        Why Choose <span className="text-[#f39c12]">mTouch Labs</span> for Flutter?
      </h2>
      <p className="text-gray-500 text-lg max-w-3xl mx-auto">
        We combine speed with structured engineering to deliver reliable cross-platform apps.
      </p>
    </div>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
      {[
        "Experienced Flutter developers",
        "Performance-focused architecture",
        "Cross-platform deployment expertise",
        "Secure API integration",
        "Scalable mobile infrastructure",
        "Long-term support & maintenance",
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-4 bg-gray-50 p-4 rounded-full border border-gray-100 hover:border-[#00a3ff]/30 transition-colors">
          <div className="w-3 h-3 bg-[#f39c12] rounded-full"></div>
          <span className="font-bold text-[#050b17]">{item}</span>
        </div>
      ))}
    </div>
  </section>
);

const Industries = () => (
  <section className="py-24 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#050b17] mb-6">
        Industries We <span className="text-[#f39c12]">Serve</span>
      </h2>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: "💻", title: "SaaS & Technology Startups" },
        { icon: "🛒", title: "eCommerce & Retail" },
        { icon: "💳", title: "FinTech Applications", active: true },
        { icon: "💊", title: "Health & Wellness" },
        { icon: "🚚", title: "On-Demand Platforms" },
        { icon: "🏢", title: "Enterprise Internal Apps" },
      ].map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ scale: 1.02 }}
          className={`p-10 rounded-3xl flex flex-col items-center text-center transition-all ${
            item.active 
              ? "bg-white border-2 border-[#f39c12] shadow-xl" 
              : "bg-white border border-gray-100 hover:shadow-lg"
          }`}
        >
          <span className="text-5xl mb-6">{item.icon}</span>
          <h3 className="text-xl font-bold text-[#050b17]">{item.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

const Technologies = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#050b17] mb-8">
          Technologies <span className="text-[#f39c12]">We Work With</span>
        </h2>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          Our Flutter solutions integrate with modern backend and cloud infrastructure. We also offer <span className="text-[#f39c12] font-bold">cross-platform development</span> using other frameworks.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Flutter", "Dart", "Firebase", "REST APIs", "GraphQL", "AWS", "Node.js", "PostgreSQL", "Docker", "CI/CD"
          ].map((tech, i) => (
            <span key={i} className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-[#00a3ff] hover:text-white hover:border-[#00a3ff] transition-all cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          { val: "2", label: "Platforms (iOS & Android)" },
          { val: "10+", label: "Frameworks & Tools", active: true },
          { val: "50+", label: "Flutter Engineers" },
          { val: "24/7", label: "App Monitoring" },
        ].map((item, i) => (
          <div key={i} className={`p-10 rounded-3xl text-center transition-all ${
            item.active 
              ? "bg-white border-2 border-[#f39c12] shadow-xl" 
              : "bg-white border border-gray-100 shadow-sm"
          }`}>
            <div className="text-5xl font-black text-[#00a3ff] mb-3">{item.val}</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "What is Flutter app development?", a: "Flutter is Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase." },
    { q: "Is Flutter suitable for enterprise apps?", a: "Yes, Flutter is highly scalable and performant, making it an excellent choice for complex enterprise-level applications." },
    { q: "How long does Flutter app development take?", a: "Development time varies based on complexity, but Flutter typically reduces development time by 30-50% compared to native development." },
    { q: "Do you provide post-launch support?", a: "Yes, we offer comprehensive maintenance and support services to ensure your app remains updated and performant." },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#050b17] mb-6">
            Frequently Asked <span className="text-[#f39c12]">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">Everything you need to know about Flutter app development</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-[#050b17]">{faq.q}</span>
                {openIndex === i ? <Minus size={20} className="text-[#00a3ff]" /> : <Plus size={20} className="text-[#00a3ff]" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-500 leading-relaxed"
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

const CTA = () => (
  <section className="py-24 px-4 bg-[#050b17] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#f39c12,transparent_70%)]"></div>
    </div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8">
        Ready to Build <span className="text-[#f39c12]">Cross-Platform Apps</span>?
      </h2>
      <p className="text-white/70 text-xl mb-12">
        Let's discuss how Flutter can accelerate your mobile app delivery and reduce development costs.
      </p>
      <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-10 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-xl">
        Get a Free Consultation
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#050b17] text-white pt-24 pb-12 px-4 border-t border-white/5">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-16 mb-20">
      <div className="lg:col-span-1">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
            <img src="https://picsum.photos/seed/mtouch/100/100" alt="Logo" className="rounded-full" />
          </div>
          <span className="text-2xl font-bold">mTouch Labs</span>
        </div>
        <p className="text-white/50 leading-relaxed mb-8">
          A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
        </p>
        <div className="space-y-4 text-white/70 text-sm">
          <a href="#" className="flex items-center gap-3 hover:text-[#00a3ff] transition-colors"><Mail size={16} /> contact@mtouchlabs.com</a>
          <a href="#" className="flex items-center gap-3 hover:text-[#00a3ff] transition-colors"><Phone size={16} /> +91 9390683154</a>
          <a href="#" className="flex items-center gap-3 hover:text-[#00a3ff] transition-colors"><Phone size={16} /> +1 (551) 222-0070</a>
        </div>
        <div className="flex items-center gap-4 mt-8">
          {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00a3ff] transition-all">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-xl font-bold mb-8 border-l-4 border-[#00a3ff] pl-4">Company</h4>
        <ul className="space-y-4 text-white/60 font-medium">
          <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-8 border-l-4 border-[#00a3ff] pl-4">Services</h4>
        <ul className="space-y-4 text-white/60 font-medium">
          <li><a href="#" className="hover:text-white transition-colors">Custom Software Development</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Cloud & DevOps Solutions</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Mobile Application Development</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Salesforce Consulting</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Quality Assurance & Testing</a></li>
          <li><a href="#" className="hover:text-white transition-colors">AI & Data Analytics</a></li>
        </ul>
      </div>

      <div>
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6">
          <img src="https://picsum.photos/seed/map/400/300" alt="Map" className="w-full h-48 object-cover grayscale opacity-50" />
        </div>
        <button className="w-full bg-[#00a3ff] hover:bg-[#0082cc] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all">
          Download Brochure <ChevronRight size={18} />
        </button>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-12 border-t border-white/5">
      <div className="flex items-center gap-3 mb-12">
        <Globe className="text-[#00a3ff]" size={24} />
        <h4 className="text-xl font-bold">Global Presence</h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-sm">
        {[
          { region: "INDIA", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
          { region: "AMERICAS", cities: ["United States", "Canada"] },
          { region: "EUROPE", cities: ["United Kingdom", "Germany", "Ireland"] },
          { region: "ASIA PACIFIC", cities: ["Singapore", "Australia", "New Zealand", "India"] },
          { region: "MIDDLE EAST", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] },
        ].map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-[#00a3ff] rounded-full"></div>
              <h5 className="font-black tracking-widest text-[#00a3ff] text-[11px]">{item.region}</h5>
            </div>
            <ul className="space-y-4 text-white/50 font-medium">
              {item.cities.map((city, j) => (
                <li key={j} className="hover:text-white transition-colors cursor-pointer">{city}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
      <p>© 2026 <span className="text-white/60 font-bold">mTouch Labs Pvt. Ltd.</span> All rights reserved.</p>
      <div className="flex items-center gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
      </div>
    </div>
  </footer>
);

const FloatingActions = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
    <motion.button 
      whileHover={{ scale: 1.1 }}
      className="w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl relative group"
    >
      <div className="absolute inset-0 bg-[#25d366] rounded-full animate-ping opacity-20"></div>
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
        Chat with us
      </span>
    </motion.button>
    <motion.button 
      whileHover={{ scale: 1.1 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="w-12 h-12 bg-[#00a3ff] text-white rounded-full flex items-center justify-center shadow-xl"
    >
      <ArrowUp size={24} />
    </motion.button>
  </div>
);

// --- Main App ---

export default function App() {
  // Use the requested background color #7B2CBF for the main wrapper
  // but keep the sections' internal backgrounds as per screenshots for fidelity.
  return (
    <div className="font-sans bg-[#7B2CBF] min-h-screen selection:bg-[#00a3ff] selection:text-white">
      <div className="bg-[#050b17]">
        <TopBar />
        <Navbar />
        <Hero />
        <WhatIsFlutter />
        <Expertise />
        <Services />
        <Process />
        <WhyChoose />
        <Industries />
        <Technologies />
        <FAQ />
        <CTA />
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}
