import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ChevronRight,
  Search,
  Users,
  TestTube2,
  Map,
  Layout,
  CreditCard,
  Stethoscope,
  ShoppingCart,
  Settings,
  GraduationCap,
} from "lucide-react";

// --- Components ---

const Hero = () => (
  <section className="bg-[#0A1128] pt-20 pb-32 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#0096FF_0%,transparent_50%)]"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
      <div className="flex justify-center gap-2 text-white/60 text-xs font-medium mb-8 uppercase tracking-[0.2em]">
        <a href="#" className="hover:text-white">
          Home
        </a>
        <span>/</span>
        <a href="#" className="hover:text-white">
          Services
        </a>
        <span>/</span>
        <span className="text-yellow-500">UX Research</span>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1]"
      >
        UX <span className="text-yellow-500 italic">Research</span> Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light"
      >
        Evidence-Driven Insights That Shape Better Digital Experiences
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mt-6 leading-relaxed italic"
      >
        WorkHolo Labs delivers professional UX research services that uncover real
        user behavior, decision patterns, and usability barriers before
        development begins. Research reduces risk. Insight increases impact.
      </motion.p>
    </div>
  </section>
);

const WhatIsUX = () => {
  const cards = [
    {
      icon: <Search className="text-purple-500" />,
      title: "Behavioral Analysis",
      color: "bg-purple-50",
    },
    {
      icon: <Users className="text-blue-500" />,
      title: "User Interviews",
      color: "bg-blue-50",
      active: true,
    },
    {
      icon: <TestTube2 className="text-green-500" />,
      title: "Usability Testing",
      color: "bg-green-50",
    },
    {
      icon: <Map className="text-orange-500" />,
      title: "Journey Mapping",
      color: "bg-orange-50",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A1A1A] mb-8 leading-tight">
            What Are <span className="text-yellow-500">UX Research</span>{" "}
            Services?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            UX research services involve studying user behavior, interaction
            habits, and usability challenges to inform product strategy and
            experience design — including behavioral analysis, contextual
            inquiry, user interviews, usability testing, and experience
            validation.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our research directly powers{" "}
            <span className="text-blue-600 font-semibold">product design</span>{" "}
            decisions and{" "}
            <span className="text-blue-600 font-semibold">UI/UX design</span>{" "}
            strategies that are grounded in real-world usage.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed italic">
            Combined with{" "}
            <span className="text-blue-600 font-semibold underline decoration-blue-200 underline-offset-4">
              design system development
            </span>
            , our research ensures consistent, user-validated experiences across
            all digital touchpoints.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl border ${card.active ? "border-yellow-500 shadow-xl shadow-yellow-100" : "border-gray-100"} ${card.color} flex flex-col items-center justify-center text-center gap-4 transition-all`}
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-2">
                {React.cloneElement(
                  card.icon as React.ReactElement<{ size?: number }>,
                  { size: 32 },
                )}
              </div>
              <h3 className="font-display font-bold text-lg text-[#1A1A1A]">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BusinessBenefits = () => {
  const stats = [
    { value: "1200+", label: "Research Projects" },
    { value: "35%", label: "Avg Conversion Lift" },
    { value: "14+", label: "Years Experience" },
    { value: "Data", label: "Driven Insights" },
  ];

  const benefits = [
    "Reduced usability risk & improved conversion rates",
    "Better feature prioritization & enhanced satisfaction",
    "Data-driven product strategy & measurable engagement",
    "Evidence-based evaluation across industries",
    "Clear documentation aligned with product goals",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center border border-gray-100"
            >
              <span className="text-[#0096FF] font-display font-extrabold text-4xl mb-2">
                {stat.value}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A1A1A] mb-8 leading-tight">
            Business Benefits of{" "}
            <span className="text-yellow-500">UX Research</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Research strengthens long-term product success:
          </p>
          <ul className="space-y-5">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2
                  className="text-yellow-500 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    { id: 1, title: "Discovery" },
    { id: 2, title: "Planning" },
    { id: 3, title: "Data Collection", active: true },
    { id: 4, title: "Analysis" },
    { id: 5, title: "Validation" },
    { id: 6, title: "Recommendations" },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A1A1A] mb-4">
          Our UX Research <span className="text-yellow-500">Methodology</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Systematic approach ensuring accuracy and clarity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 hidden lg:block"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center gap-6">
              <div
                className={`w-32 h-24 rounded-2xl flex items-center justify-center text-center p-4 font-bold text-sm shadow-lg relative ${step.active ? "bg-white border-2 border-blue-500 text-blue-600" : "bg-white border border-gray-100 text-gray-800"}`}
              >
                <span
                  className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs text-white ${step.active ? "bg-blue-500" : "bg-blue-400"}`}
                >
                  {step.id}
                </span>
                {step.title}
              </div>
              {idx < steps.length - 1 && (
                <div className="lg:hidden flex justify-center">
                  <ArrowRight className="text-blue-200" />
                </div>
              )}
              <div className="hidden lg:block">
                <ArrowRight className="text-blue-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const points = [
    "Structured behavioral analysis",
    "Evidence-based evaluation methods",
    "Cross-industry research experience",
    "Clear documentation & reporting",
    "Product & business goal alignment",
    "Continuous optimization mindset",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A1A1A] mb-6">
          Why Choose <span className="text-yellow-500">WorkHolo Labs</span>?
        </h2>
        <p className="text-gray-600 text-lg mb-16">
          We help organizations design with confidence.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="bg-white py-4 px-8 rounded-full shadow-sm border border-gray-100 flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-700 font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    {
      icon: <Layout className="text-blue-400" />,
      title: "SaaS & Digital Platforms",
    },
    {
      icon: <CreditCard className="text-blue-400" />,
      title: "Financial Technology",
    },
    {
      icon: <Stethoscope className="text-purple-400" />,
      title: "Healthcare Apps",
    },
    {
      icon: <ShoppingCart className="text-gray-400" />,
      title: "eCommerce & Retail",
    },
    {
      icon: <Settings className="text-gray-500" />,
      title: "Enterprise Systems",
    },
    {
      icon: <GraduationCap className="text-pink-400" />,
      title: "Education Platforms",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A1A1A]">
          Industries We <span className="text-yellow-500">Support</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-6 hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              {React.cloneElement(
                industry.icon as React.ReactElement<{ className?: string }>,
                {
                  className: "group-hover:text-white transition-colors",
                },
              )}
            </div>
            <h3 className="font-display font-bold text-xl text-[#1A1A1A]">
              {industry.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Tools = () => {
  const tools = [
    "Hotjar",
    "Maze",
    "UserTesting",
    "Lookback",
    "Optimal Workshop",
    "Google Analytics",
    "Mixpanel",
    "Amplitude",
    "Dovetail",
    "Miro",
    "FigJam",
    "SurveyMonkey",
    "Typeform",
    "Crazy Egg",
    "FullStory",
    "Figma Prototypes",
    "InVision",
    "Loom",
  ];

  const stats = [
    { value: "18+", label: "Research Tools" },
    { value: "1200+", label: "Projects" },
    { value: "Data", label: "Driven Insights" },
    { value: "14+", label: "Years" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A1A1A] mb-6">
            Research Tools <span className="text-yellow-500">We Use</span>
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Industry-standard research and analytics platforms.
          </p>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool, idx) => (
              <span
                key={idx}
                className="bg-white px-4 py-2 rounded-full text-xs font-semibold text-gray-500 border border-gray-200 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center border border-gray-100"
            >
              <span className="text-[#0096FF] font-display font-extrabold text-4xl mb-2">
                {stat.value}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are UX research services?",
      a: "UX research services involve studying user behavior, interaction habits, and usability challenges to inform product strategy and experience design.",
    },
    {
      q: "Why is UX research important?",
      a: "UX research reduces the risk of building products that users don't need or can't use. It provides evidence-based insights that lead to higher conversion rates and better user satisfaction.",
    },
    {
      q: "When should UX research be conducted?",
      a: "UX research should ideally be conducted throughout the product lifecycle, but it's most critical during the discovery phase before any design or development begins.",
    },
    {
      q: "Can UX research improve conversion rates?",
      a: "Yes, by identifying and removing friction points in the user journey, UX research directly impacts conversion rates and overall business performance.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A1A1A] mb-4">
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </h2>
        <p className="text-gray-500 text-lg">Everything about UX research</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full py-6 flex justify-between items-center text-left hover:text-blue-500 transition-colors"
            >
              <span className="font-display font-bold text-lg text-[#1A1A1A]">
                {faq.q}
              </span>
              {openIndex === idx ? (
                <ChevronDown className="text-blue-500" />
              ) : (
                <ChevronRight className="text-gray-400" />
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
                  <p className="pb-6 text-gray-600 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="bg-[#0A1128] py-24 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#F2A93B_0%,transparent_50%)]"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
      <h2 className="text-white font-display font-bold text-4xl md:text-5xl mb-6">
        Start Your <span className="text-yellow-500">UX Research</span> Today
      </h2>
      <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto">
        Let's discuss how evidence-driven research can improve your digital
        product performance.
      </p>
      <button className="bg-[#F2A93B] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-600 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/20">
        Start UX Research
      </button>
    </div>
  </section>
);

const FloatingButtons = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer hover:bg-green-600 transition-colors group relative"
    >
      <MessageCircle size={30} />
      <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </div>
    </motion.div>

    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl cursor-pointer border border-white/10 group overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
      <span className="text-xs font-bold uppercase tracking-widest">
        Let's Chat!
      </span>
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
        <MessageCircle size={16} />
      </div>
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[8px] font-bold">
        1
      </div>
    </motion.div>
  </div>
);

const Capabilities = () => {
  const capabilities = [
    {
      id: "01",
      title: "User Behavior Analysis",
      desc: "Navigation patterns, task completion flows, drop-off points, friction areas, and decision triggers to optimize before costly development changes.",
    },
    {
      id: "02",
      title: "Qualitative Research",
      desc: "Structured user interviews, persona refinement sessions, contextual observations, and experience walkthrough discussions revealing emotional factors.",
    },
    {
      id: "03",
      title: "Usability Testing",
      desc: "Feature discoverability, interface clarity, onboarding effectiveness, task efficiency, and accessibility compliance testing before launch.",
    },
    {
      id: "04",
      title: "Journey Analysis",
      desc: "Entry touchpoints, interaction stages, decision moments, conversion pathways, and retention triggers revealing gaps between intention and execution.",
    },
    {
      id: "05",
      title: "Heuristic & Expert Evaluation",
      desc: "Usability principles assessment, cognitive load analysis, interface consistency review, and interaction efficiency benchmarking complementing user research.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1A1A1A] mb-4">
          Our UX Research <span className="text-yellow-500">Capabilities</span>
        </h2>
        <p className="text-gray-500 text-lg">
          From behavioral analysis to actionable recommendations
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8">
        {capabilities.map((cap, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className={`bg-[#F8FAFC] p-10 rounded-2xl border border-gray-100 flex flex-col gap-6 transition-all ${idx === capabilities.length - 1 ? "md:col-span-2" : ""}`}
          >
            <div className="w-10 h-10 bg-[#0096FF] rounded-lg flex items-center justify-center text-white font-bold text-xs">
              {cap.id}
            </div>
            <h3 className="font-display font-bold text-2xl text-[#1A1A1A]">
              {cap.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">{cap.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- Main App ---

export default function UXReasearchServices() {
  return (
    <div className="min-h-screen font-sans text-[#1A1A1A] selection:bg-blue-100 selection:text-blue-900">
      <main>
        <Hero />
        <WhatIsUX />
        <Capabilities />
        <BusinessBenefits />
        <Methodology />
        <WhyChoose />
        <Industries />
        <Tools />
        <FAQ />
        <CTA />
      </main>
      <FloatingButtons />
    </div>
  );
}
