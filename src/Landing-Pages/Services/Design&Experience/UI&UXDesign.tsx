import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown, 
  ChevronRight,  
  Search, 
  Layout, 
  Palette, 
  CheckCircle2, 
  Monitor, 
  Smartphone, 
  Layers, 
  Zap, 
  ShieldCheck, 
  MessageCircle,
  ArrowUp
} from "lucide-react";

// --- Components ---

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-darker overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
    </div>

    <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-[0.3em]">Home</span>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-gray-400 text-sm font-semibold uppercase tracking-[0.3em]">Services</span>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.3em]">UI/UX Design</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] font-display">
          UI/UX <span className="text-white">Design Company</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
          Designing Intuitive Digital Experiences That Convert
        </p>

        <p className="text-gray-400 text-lg max-w-4xl mx-auto mb-12 leading-relaxed">
          WorkHolo Labs is a performance-focused UI/UX design company delivering user-centered digital experiences that improve engagement, usability, and conversion rates. Great design is not just visual — it's functional, measurable, and aligned with business outcomes.
        </p>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:block">
           <div className="relative">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)]">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const WhatWeDo = () => {
  const items = [
    { icon: <Search className="w-8 h-8 text-blue-400" />, title: "User Research", bg: "bg-blue-500/5" },
    { icon: <Layout className="w-8 h-8 text-purple-400" />, title: "Wireframing", bg: "bg-purple-500/5" },
    { icon: <Palette className="w-8 h-8 text-pink-400" />, title: "Visual Design", bg: "bg-pink-500/5" },
    { icon: <Zap className="w-8 h-8 text-green-400" />, title: "Usability Testing", bg: "bg-green-500/5" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight font-display">
              What Does a <span className="text-accent">UI/UX Design</span> Company Do?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A professional UI/UX design company focuses on understanding user behavior, mapping user journeys, and creating intuitive interfaces that enhance digital experiences — including user research, wireframing, prototyping, interaction design, visual interface design, and usability testing.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our <span className="text-primary font-bold">UX research services</span> ensure design decisions are backed by evidence, while our <span className="text-primary font-bold">design systems</span> maintain consistency across platforms.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combine strategic research with <span className="text-primary font-bold">product design</span> expertise to create seamless digital interactions across web, mobile, and enterprise platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className={`${item.bg} p-10 rounded-2xl flex flex-col items-center text-center transition-all border border-gray-100 shadow-sm`}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-dark">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessImpact = () => {
  const stats = [
    { value: "1500+", label: "Designs Delivered" },
    { value: "40%", label: "Avg Conversion Lift" },
    { value: "14+", label: "Years Experience" },
    { value: "Ally", label: "Accessibility First" },
  ];

  const benefits = [
    "Higher user engagement & improved conversion rates",
    "Reduced bounce rate & increased product adoption",
    "Better customer satisfaction & stronger brand perception",
    "Research-driven design strategy with conversion focus",
    "Cross-platform expertise with accessibility-first approach",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="text-4xl font-extrabold text-primary mb-2 font-display">{stat.value}</div>
                <div className="text-gray-500 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight font-display">
              Business Impact of <span className="text-accent">Strong UI/UX</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              User experience directly influences business performance:
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-gray-700 text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
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
      title: "UX Strategy & Research",
      desc: "Target audience behavior analysis, business objectives alignment, user pain point mapping, conversion pathway design, and competitive benchmarking."
    },
    {
      id: "02",
      title: "Wireframing & Prototyping",
      desc: "Low-fidelity wireframes, interactive prototypes, user journey maps, and information architecture structures to validate usability before development."
    },
    {
      id: "03",
      title: "UI Design",
      desc: "Clean visual hierarchy, brand-consistent design systems, responsive layouts, micro-interactions, and accessibility standards for intuitive interfaces."
    },
    {
      id: "04",
      title: "Product Design",
      desc: "SaaS dashboard interfaces, enterprise application design, mobile app UI/UX, eCommerce experience, and admin panel interfaces optimized for clarity."
    },
    {
      id: "05",
      title: "Usability Testing & Optimization",
      desc: "A/B testing, interaction flow analysis, heatmap evaluation, and performance-based UX improvements driven by real user behavior data."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-display">
            Our UI/UX <span className="text-accent">Design Services</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium">From research to refinement, every design is intentional</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`bg-gray-50 p-10 rounded-3xl border border-gray-100 flex flex-col gap-6 ${idx === 4 ? "md:col-span-2" : ""}`}
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold text-dark">{service.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = ["Research", "Architecture", "Wireframing", "Prototyping", "Visual Design", "Testing", "Handoff"];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-display">
            Our UI/UX <span className="text-accent">Design Process</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium">Structured process ensuring clarity and measurable impact.</p>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-purple-100 -translate-y-1/2 hidden lg:block" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white border-2 border-primary rounded-2xl flex items-center justify-center text-primary font-bold text-xl mb-6 shadow-lg relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">
                    {idx + 1}
                  </div>
                  <div className="w-8 h-8 bg-purple-50 rounded-lg" />
                </div>
                <span className="text-dark font-bold text-lg">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const reasons = [
    "Research-driven design strategy",
    "Conversion-focused design systems",
    "Cross-platform expertise",
    "Accessibility-first approach",
    "Dev team collaboration",
    "Continuous optimization support"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 font-display">
          Why Choose <span className="text-accent">WorkHolo Labs</span>?
        </h2>
        <p className="text-gray-600 text-xl mb-12 max-w-3xl mx-auto">
          We design experiences that connect users with your brand seamlessly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 px-8 py-4 rounded-full flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-default">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-dark font-bold">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { icon: <Monitor className="w-10 h-10 text-blue-500" />, name: "SaaS & Technology" },
    { icon: <Layers className="w-10 h-10 text-blue-500" />, name: "FinTech & Financial Services" },
    { icon: <ShieldCheck className="w-10 h-10 text-blue-500" />, name: "Healthcare & HealthTech" },
    { icon: <Smartphone className="w-10 h-10 text-blue-500" />, name: "eCommerce & Retail" },
    { icon: <Globe className="w-10 h-10 text-blue-500" />, name: "Real Estate" },
    { icon: <Zap className="w-10 h-10 text-blue-500" />, name: "Enterprise Applications" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-display">
            Industries We <span className="text-accent">Serve</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-6"
            >
              <div className="mb-2">{ind.icon}</div>
              <h3 className="text-2xl font-bold text-dark">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DesignTools = () => {
  const tools = ["Figma", "Sketch", "Adobe XD", "InVision", "Framer", "Zeplin", "Miro", "Hotjar", "Google Analytics", "Maze", "Lottie", "Storybook", "Tailwind CSS", "Material Design", "Apple HIG", "WCAG 2.1", "Responsive Design", "Design Tokens"];
  const stats = [
    { value: "18+", label: "Design Tools" },
    { value: "Ally", label: "WCAG Compliant" },
    { value: "1000+", label: "Projects Delivered" },
    { value: "Cross", label: "Platform Design" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8 leading-tight font-display">
              Design Tools <span className="text-accent">We Use</span>
            </h2>
            <p className="text-gray-500 text-xl font-medium mb-10">Industry-standard design and prototyping platforms.</p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <span key={idx} className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-600">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center min-h-[200px]">
                <div className="text-5xl font-extrabold text-primary mb-4 font-display">{stat.value}</div>
                <div className="text-gray-500 font-bold text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "What is UI/UX design?", a: "UI (User Interface) focuses on the visual elements of a product, while UX (User Experience) focuses on the overall feel and usability of the product." },
    { q: "Why is UX important for business growth?", a: "Good UX leads to higher customer satisfaction, increased retention, and better conversion rates, directly impacting the bottom line." },
    { q: "Do you provide UI/UX for mobile apps?", a: "Yes, we specialize in mobile-first design for both iOS and Android platforms, ensuring native-like experiences." },
    { q: "Do you conduct usability testing?", a: "Absolutely. We use real user feedback to iterate and improve designs, ensuring they meet actual user needs." }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-display">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium">Everything about UI/UX design</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl font-bold text-dark">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 text-lg leading-relaxed">
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

const CTA = () => (
  <section className="py-24 bg-darker relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 pointer-events-none" />
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center relative z-10">
      <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 font-display">
        Design Better <span className="text-accent">Digital Experiences</span>
      </h2>
      <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
        Let's discuss how our UI/UX design services can improve engagement and conversions.
      </p>
      <button className="bg-accent hover:bg-yellow-600 text-dark px-12 py-5 rounded-xl text-xl font-extrabold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20">
        Start Your Design Project
      </button>
    </div>
  </section>
);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-40 bg-primary text-white p-3 rounded-full shadow-2xl transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

// --- Main App ---

export default function UIUXDesign() {
  return (
    <div className="min-h-screen bg-darker font-sans selection:bg-blue-500 selection:text-white">
      <main>
        <Hero />
        <WhatWeDo />
        <BusinessImpact />
        <Services />
        <Process />
        <WhyChoose />
        <Industries />
        <DesignTools />
        <FAQ />
        <CTA />
      </main>
      <ScrollToTop />

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-24 z-40">
         <div className="relative group">
            <div className="absolute -top-12 right-0 bg-white text-dark px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
               Let's Chat! <span className="text-accent">WE ARE HERE!</span>
               <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white rotate-45" />
            </div>
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
               <MessageCircle className="w-8 h-8 text-white" />
               <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">1</div>
            </div>
         </div>
      </div>
    </div>
  );
}
