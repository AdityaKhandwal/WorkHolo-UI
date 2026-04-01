import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  Check, 
  Globe, 
  MessageCircle,
  ChevronUp,
  Smartphone,
  Shield,
  Zap,
  ShoppingCart,
  Activity,
  CreditCard,
  Home as HomeIcon,
  Rocket,
  GraduationCap
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(123,44,191,0.1),transparent_70%)] pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8"
      >
        <span>Home</span>
        <span className="text-amber-500">/</span>
        <span>Services</span>
        <span className="text-amber-500">/</span>
        <span className="text-white">Web Development</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight"
      >
        Web <span className="text-amber-500">Development</span> Company
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl font-semibold text-gray-300 mb-8 max-w-4xl mx-auto"
      >
        Engineering High-Performance Websites That Drive Business Growth
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
      >
        mTouch Labs is a results-driven Web Development Company delivering fast, secure, and scalable websites built to convert visitors into customers. We design and develop performance-optimized digital platforms that combine modern architecture, search-friendly structure, and user-focused design. Your website should work as a growth engine — not just an online brochure.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <button className="bg-amber-500 hover:bg-amber-600 text-black px-10 py-4 rounded-lg font-bold text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all transform hover:scale-105 active:scale-95">
          Start Your Project
        </button>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    { icon: <Globe className="w-8 h-8 text-sky-500" />, title: "SEO-Ready Architecture", desc: "Built with search engine crawlability in mind." },
    { icon: <Zap className="w-8 h-8 text-amber-500" />, title: "Core Web Vitals Optimized", desc: "Lightning-fast load times and smooth interactions." },
    { icon: <Smartphone className="w-8 h-8 text-purple-500" />, title: "Mobile-First Responsive", desc: "Flawless experience across all device sizes." },
    { icon: <Shield className="w-8 h-8 text-green-500" />, title: "Secure Infrastructure", desc: "Enterprise-grade security protocols and SSL." },
  ];

  return (
    <section className="py-24 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            What Defines a Professional <span className="text-amber-500">Web Development Company</span>?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            A modern business website must deliver speed optimized for Core Web Vitals, SEO-ready architecture, mobile-first responsiveness, secure backend infrastructure, seamless integrations, and scalable performance.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            At mTouch Labs, we approach web development as a strategic investment — aligning design, engineering, and performance metrics from day one. Our <span className="text-sky-500 cursor-pointer hover:underline">UI/UX design expertise</span> ensures every website delivers intuitive, engaging user experiences that drive conversions.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Combined with our <span className="text-sky-500 cursor-pointer hover:underline">enterprise application capabilities</span>, we build web platforms that scale seamlessly as your business grows.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all text-center flex flex-col items-center"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const stats = [
    { value: "2000+", label: "Websites Delivered" },
    { value: "14+", label: "Years Experience" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "150+", label: "Expert Engineers" },
  ];

  const services = [
    "Custom Website Development — corporate, service & marketing sites",
    "Web Application Development — SaaS, dashboards & portals",
    "E-Commerce Development — secure stores with payment & inventory systems",
    "CMS-Powered Platforms — flexible content management solutions",
    "Performance & SEO Optimization — structured data, crawlability & speed",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#111827] p-10 rounded-2xl border border-white/5 text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-sky-500 mb-2">{s.value}</div>
              <div className="text-gray-400 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Our Web <span className="text-amber-500">Development Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            We deliver end-to-end web solutions from corporate sites to complex web applications:
          </p>
          <ul className="space-y-6">
            {services.map((s, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-amber-500/20 p-1 rounded-full">
                  <Check className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-gray-300 font-medium">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      num: "01",
      title: "Custom Website Development",
      desc: "Tailored websites built around your brand positioning and conversion goals — corporate websites, service-driven business sites, CMS-powered platforms, marketing landing pages, and multi-location business websites with SEO-structured code."
    },
    {
      num: "02",
      title: "Web Application Development",
      desc: "Performance-focused SaaS platforms, admin dashboards, customer portals, marketplace systems, and subscription-based platforms using modern frameworks like React, Next.js, and Node.js for scalability and speed."
    },
    {
      num: "03",
      title: "E-Commerce Web Development",
      desc: "Secure and scalable online stores with payment gateway integration, inventory management, order automation, secure checkout flows, and performance-optimized product architecture built for conversion and growth."
    },
    {
      num: "04",
      title: "Performance & SEO Development",
      desc: "Clean semantic HTML, search engine crawlability optimization, fast server response times, structured data integration, and secure hosting standards ensuring long-term visibility and scalability."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Web <span className="text-amber-500">Development Services</span>
          </h2>
          <p className="text-gray-400 text-lg">From corporate websites to complex web applications</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-[#111827] p-10 rounded-3xl border border-white/5 relative overflow-hidden group"
            >
              <div className="text-sky-500 font-bold text-xl mb-6 bg-sky-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                {s.num}
              </div>
              <h3 className="text-2xl font-bold mb-6 group-hover:text-amber-500 transition-colors">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    "Strategy", "Information Architecture", "UI/UX Design", "Development", "Performance Tuning", "Deployment", "Ongoing Enhancement"
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Development <span className="text-amber-500">Methodology</span>
          </h2>
          <p className="text-gray-400 text-lg">A structured process that reduces risk and ensures predictable outcomes.</p>
        </div>
        
        <div className="relative flex flex-wrap justify-center gap-4 md:gap-0">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-sky-500/20 -translate-y-1/2 hidden md:block" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center w-full md:w-[14%] px-2">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 transition-all duration-500 ${i === 2 ? 'bg-sky-500 text-white scale-125 shadow-[0_0_20px_rgba(14,165,233,0.5)]' : 'bg-[#111827] text-sky-500 border border-sky-500/30'}`}>
                {i + 1}
              </div>
              <span className={`text-center text-xs font-bold uppercase tracking-tighter ${i === 2 ? 'text-white' : 'text-gray-500'}`}>
                {step}
              </span>
              {i === 2 && <div className="absolute -inset-4 bg-sky-500/10 blur-2xl rounded-full -z-10" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    "Business-aligned development strategy",
    "SEO-ready code structure",
    "Cloud-scalable infrastructure",
    "API & third-party integration expertise",
    "Long-term maintenance support",
    "Transparent project execution"
  ];

  return (
    <section className="py-24 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Why Choose mTouch Labs as Your <span className="text-amber-500">Web Development Company</span>?
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
          We build websites that support digital marketing, automation, analytics, and long-term growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {reasons.map((r, i) => (
            <div key={i} className="bg-[#111827] border border-white/10 px-8 py-4 rounded-full flex items-center gap-3 hover:border-amber-500/50 transition-colors cursor-default">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-gray-200 font-semibold text-sm">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { icon: <ShoppingCart className="w-8 h-8" />, name: "eCommerce & Retail" },
    { icon: <Activity className="w-8 h-8" />, name: "Healthcare & HealthTech" },
    { icon: <CreditCard className="w-8 h-8" />, name: "FinTech & Financial Services" },
    { icon: <HomeIcon className="w-8 h-8" />, name: "Real Estate & Construction" },
    { icon: <Rocket className="w-8 h-8" />, name: "SaaS & Technology Startups" },
    { icon: <GraduationCap className="w-8 h-8" />, name: "Education & EdTech" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Industries We <span className="text-amber-500">Serve</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-[#111827] p-12 rounded-3xl border border-white/5 flex flex-col items-center text-center group"
            >
              <div className="mb-8 text-sky-500 group-hover:text-amber-500 transition-colors transform group-hover:scale-110 duration-300">
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolsSection = () => {
  const tools = [
    "React", "Next.js", "Node.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "WordPress", "Shopify", "PostgreSQL", "MongoDB", "AWS", "Vercel", "GraphQL", "REST APIs", "Docker", "Cloudflare", "Google Analytics", "CI/CD", "Git"
  ];

  const stats = [
    { value: "20+", label: "Frameworks & Tools" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "<1s", label: "Avg Load Time" },
    { value: "90+", label: "Lighthouse Score" },
  ];

  return (
    <section className="py-24 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Web Development <span className="text-amber-500">Tools & Frameworks</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            We leverage modern web technologies and frameworks to deliver high-performance, scalable websites and web applications.
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((t, i) => (
              <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-xs font-bold text-gray-300 hover:bg-white/10 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#111827] p-10 rounded-2xl border border-white/5 text-center">
              <div className="text-4xl font-extrabold text-sky-500 mb-2">{s.value}</div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "What does a web development company do?", a: "A web development company designs, builds, and maintains websites and web applications. This includes everything from front-end design to back-end engineering, database management, and SEO optimization." },
    { q: "How long does website development take?", a: "The timeline varies based on complexity. A simple site might take 4-6 weeks, while a complex enterprise application can take 3-6 months or more." },
    { q: "Do you build SEO-friendly websites?", a: "Yes, all our websites are built with SEO best practices, including semantic HTML, fast load times, and structured data." },
    { q: "Do you provide ongoing website support?", a: "Absolutely. We offer various maintenance and support packages to ensure your website stays secure and up-to-date." }
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-amber-500">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know about our web development services</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#111827] rounded-2xl border border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-lg font-bold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-400 leading-relaxed">
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

const CTASection = () => (
  <section className="py-24 bg-[#0a0c10] relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.05),transparent_70%)]" />
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
        Ready to Build Your <span className="text-amber-500">Website</span>?
      </h2>
      <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
        Let's discuss how we can engineer a web platform that drives real business growth and converts visitors into customers.
      </p>
      <button className="bg-amber-500 hover:bg-amber-600 text-black px-12 py-5 rounded-xl font-bold text-xl shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all transform hover:scale-105">
        Start Your Project
      </button>
    </div>
  </section>
);

// --- Main App ---

export default function WebAppDevelopment() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070a] selection:bg-amber-500/30">
      
      <main>
        <Hero />
        <FeaturesSection />
        <ExpertiseSection />
        <ServicesGrid />
        <Methodology />
        <WhyChooseUs />
        <Industries />
        <ToolsSection />
        <FAQ />
        <CTASection />
      </main>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform relative group"
        >
          <MessageCircle className="w-8 h-8 text-white" />
          <div className="absolute right-full mr-4 bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us
          </div>
          <div className="absolute -inset-2 bg-[#25D366]/20 blur-xl rounded-full animate-pulse" />
        </motion.div>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-sky-600 transition-colors"
            >
              <ChevronUp className="w-6 h-6 text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Let's Chat Badge */}
      <div className="fixed bottom-8 left-8 z-50 hidden md:block">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-black" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-[8px] font-bold">1</div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Let's Chat!</div>
            <div className="text-sm font-bold text-white">WE ARE <span className="text-amber-500">HERE!</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
