import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChevronDown,
  ChevronRight,
  MessageCircle,
  ArrowUp,
  Monitor,
  CreditCard,
  HeartPulse,
  ShoppingCart,
  Briefcase,
  Zap,
  Target,
  Rocket,
  Layers,
  Search,
  PenTool,
  Cpu,
  CheckCircle2,
} from "lucide-react";

// --- Components ---
const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 px-4 md:px-12 bg-[#0B1120] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -ml-40 -mb-40"></div>

      <div className="max-w-[1440px] mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-8">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <ChevronRight size={14} />
          <a href="#" className="hover:text-blue-400">
            Services
          </a>
          <ChevronRight size={14} />
          <span className="text-yellow-500">Product Design</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Product <span className="text-yellow-500">Design</span> Services
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-bold text-white mb-8"
        >
          Designing Digital Products That Solve Real Business Problems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12"
        >
          WorkHolo Labs provides strategic product design services that transform
          ideas into scalable, user-centered digital products. Design is not
          decoration — it's product strategy in action.
        </motion.p>
      </div>
    </section>
  );
};

const WhatIsProductDesign = () => {
  const cards = [
    { title: "Product Strategy", icon: <Target className="text-pink-500" /> },
    { title: "MVP Design", icon: <Rocket className="text-blue-500" /> },
    { title: "SaaS Product UX", icon: <Layers className="text-purple-500" /> },
    { title: "Design Systems", icon: <PenTool className="text-green-500" /> },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            What Are <span className="text-yellow-500">Product Design</span>{" "}
            Services?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Product design services involve the structured process of defining,
            designing, validating, and refining digital products to ensure
            usability, performance, and market fit — including problem
            validation, user behavior analysis, feature prioritization,
            experience architecture, and iterative refinement.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">
            Our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              UI/UX design
            </a>{" "}
            expertise combined with{" "}
            <a href="#" className="text-blue-500 hover:underline">
              UX research
            </a>{" "}
            ensures products are intuitive, scalable, and commercially viable.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We create products with{" "}
            <a href="#" className="text-blue-500 hover:underline">
              scalable design systems
            </a>{" "}
            that support long-term growth and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              custom software development
            </a>{" "}
            alignment.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center border border-slate-100"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyProductDesignMatters = () => {
  const stats = [
    { value: "1500+", label: "Products Designed" },
    { value: "MVP", label: "Rapid Validation" },
    { value: "SaaS", label: "Enterprise Focus" },
    { value: "14+", label: "Years Experience" },
  ];

  const benefits = [
    "Reduces product-market mismatch & improves user adoption",
    "Increases retention rates & simplifies onboarding",
    "Enhances usability & supports long-term scalability",
    "Strategy-driven methodology with data-informed decisions",
    "Cross-functional collaboration with development teams",
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-slate-50">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-2xl shadow-lg text-center border border-slate-100"
            >
              <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Why Product Design <span className="text-yellow-500">Matters</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Strong product design directly influences revenue and growth:
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-yellow-500 shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const DesignCapabilities = () => {
  const capabilities = [
    {
      id: "01",
      title: "Product Discovery & Strategy",
      desc: "Business objectives clarification, target audience analysis, core value proposition, competitive positioning, and product roadmap alignment.",
      icon: <Search className="text-white" />,
    },
    {
      id: "02",
      title: "MVP Design & Validation",
      desc: "Minimum viable product interfaces, lean feature sets, rapid validation prototypes, user feedback loops, and market-ready design systems.",
      icon: <Rocket className="text-white" />,
    },
    {
      id: "03",
      title: "SaaS Product Design",
      desc: "Dashboard systems, data-heavy interfaces, role-based environments, subscription workflow experiences, and modular component libraries.",
      icon: <Layers className="text-white" />,
    },
    {
      id: "04",
      title: "Experience Architecture",
      desc: "Information hierarchy planning, user journey mapping, interaction flow optimization, and multi-device experience consistency.",
      icon: <Cpu className="text-white" />,
    },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Our Product{" "}
          <span className="text-yellow-500">Design Capabilities</span>
        </h2>
        <p className="text-gray-600 text-lg">
          From discovery to scalable design systems
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-8">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                {cap.icon}
              </div>
              <span className="text-blue-500/20 text-5xl font-black">
                {cap.id}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              {cap.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const DesignProcess = () => {
  const steps = [
    { name: "Discovery", id: 1 },
    { name: "User Research", id: 2 },
    { name: "Mapping", id: 3 },
    { name: "Wireframing", id: 4 },
    { name: "Prototyping", id: 5 },
    { name: "UI Design", id: 6 },
    { name: "Refinement", id: 7 },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Our Product <span className="text-yellow-500">Design Process</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Iterative approach ensuring alignment between users and business
          goals.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto relative">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 hidden lg:block"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-all transform hover:scale-110 ${step.id === 4 ? "bg-blue-500 text-white ring-4 ring-blue-100" : "bg-white text-blue-500 border border-slate-100"}`}
              >
                <span className="font-bold text-xl">{step.id}</span>
              </div>
              <span className="text-slate-800 font-bold text-sm text-center">
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-24 p-10 bg-slate-50 rounded-3xl border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Scalable Design Systems
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          Reusable UI components, standardized design tokens, brand-aligned
          interface frameworks, and cross-platform design consistency for
          long-term growth.
        </p>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    "Strategy-driven design methodology",
    "Cross-functional dev collaboration",
    "SaaS & enterprise experience",
    "Structured design systems",
    "Data-informed decision-making",
    "Long-term product optimization",
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-slate-50">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Why Choose <span className="text-yellow-500">WorkHolo Labs</span>?
        </h2>
        <p className="text-gray-600 text-lg">
          We design products that perform — not just look good.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-4">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="bg-white px-8 py-4 rounded-full shadow-sm border border-slate-100 flex items-center gap-2"
          >
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-slate-700 font-semibold">{reason}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const IndustriesWeServe = () => {
  const industries = [
    { name: "SaaS & Technology", icon: <Monitor className="text-blue-500" /> },
    {
      name: "FinTech Applications",
      icon: <CreditCard className="text-blue-500" />,
    },
    {
      name: "Healthcare & Digital Health",
      icon: <HeartPulse className="text-blue-500" />,
    },
    {
      name: "eCommerce Platforms",
      icon: <ShoppingCart className="text-blue-500" />,
    },
    {
      name: "Enterprise Workflows",
      icon: <Briefcase className="text-blue-500" />,
    },
    { name: "On-Demand Products", icon: <Zap className="text-blue-500" /> },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Industries We <span className="text-yellow-500">Serve</span>
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((ind, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-100/50 border border-slate-100 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
              {React.cloneElement(
                ind.icon as React.ReactElement<{ className?: string }>,
                {
                  className: "group-hover:text-white transition-colors",
                },
              )}
            </div>
            <h3 className="text-xl font-bold text-slate-800">{ind.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ToolsAndFrameworks = () => {
  const tools = [
    "Figma",
    "Sketch",
    "Adobe XD",
    "InVision",
    "Framer",
    "Miro",
    "FigJam",
    "Storybook",
    "Zeplin",
    "Design Tokens",
    "Tailwind CSS",
    "Material Design",
    "Apple HIG",
    "WCAG 2.1",
    "Hotjar",
    "Maze",
    "Google Analytics",
    "Lottie",
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Tools & Frameworks <span className="text-yellow-500">We Use</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Enterprise product design and prototyping platforms.
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="bg-slate-50 px-4 py-2 rounded-full text-slate-600 text-sm font-medium border border-slate-100"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-blue-100 border border-slate-100 text-center">
            <div className="text-5xl font-black text-blue-500 mb-2">1500+</div>
            <div className="text-slate-600 font-bold">Products</div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-blue-100 border border-slate-100 text-center">
            <div className="text-5xl font-black text-blue-500 mb-2">MVP</div>
            <div className="text-slate-600 font-bold">Rapid Design</div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-blue-100 border border-slate-100 text-center">
            <div className="text-5xl font-black text-blue-500 mb-2">SaaS</div>
            <div className="text-slate-600 font-bold">Expertise</div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-blue-100 border border-slate-100 text-center">
            <div className="text-5xl font-black text-blue-500 mb-2">14+</div>
            <div className="text-slate-600 font-bold">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are product design services?",
      a: "Product design services encompass the entire process of creating a digital product, from initial strategy and research to UI/UX design, prototyping, and iterative refinement based on user feedback.",
    },
    {
      q: "How is product design different from UI/UX design?",
      a: "While UI/UX design focuses on the interface and user experience, product design is broader, incorporating business strategy, market fit, and long-term product growth alongside design execution.",
    },
    {
      q: "Do you provide MVP design services?",
      a: "Yes, we specialize in rapid MVP design and validation, helping startups and enterprises launch lean versions of their products to test core concepts and gather user data quickly.",
    },
    {
      q: "Can product design support enterprise platforms?",
      a: "Absolutely. We have extensive experience in designing complex SaaS and enterprise workflows, focusing on scalability, role-based access, and data-heavy dashboard systems.",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </h2>
        <p className="text-gray-600 text-lg">
          Everything about product design services
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-slate-200">
            <button
              className="w-full py-6 flex justify-between items-center text-left hover:text-blue-500 transition-colors"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-xl font-bold text-slate-800">{faq.q}</span>
              {openIndex === idx ? (
                <ChevronDown size={24} />
              ) : (
                <ChevronRight size={24} />
              )}
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
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
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#0B1120] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]"></div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
          Design Your <span className="text-yellow-500">Digital Product</span>{" "}
          Today
        </h2>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
          Let's discuss how product design can transform your idea into a
          scalable digital solution.
        </p>
        <button className="bg-[#7B2CBF] hover:bg-[#6a25a3] text-white px-12 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/20">
          Start Product Design
        </button>
      </div>
    </section>
  );
};

const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919390683154"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <div className="absolute -left-28 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
          Chat with us!
        </div>
        <MessageCircle className="text-white" size={32} fill="white" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      </a>

      {/* Chat Bubble */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-bounce">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <MessageCircle className="text-white" size={20} />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Let's Chat!
            </p>
            <p className="text-sm font-black text-slate-800">WE ARE HERE!</p>
          </div>
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold absolute -top-1 -right-1">
            1
          </div>
        </div>
      </div>

      {/* Scroll Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-40 right-8 z-50 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-600 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Main App ---

export default function ProductDesignServices() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <WhatIsProductDesign />
        <WhyProductDesignMatters />
        <DesignCapabilities />
        <DesignProcess />
        <WhyChooseUs />
        <IndustriesWeServe />
        <ToolsAndFrameworks />
        <FAQ />
        <CTA />
      </main>
      <FloatingWidgets />
    </div>
  );
}
