import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Globe,
  Smartphone,
  MousePointer2,
  Target,
  TestTube2,
  Check,
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Zap,
  ShoppingBag,
  CreditCard,
  HeartPulse,
  Truck,
  Cloud,
  Car,
  Layers,
  Users,
  GitBranch,
  PenTool,
  Monitor,
  Eye,
  ShieldCheck,
  FileCode,
  Menu,
  X,
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Products", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-bg-dark/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <span className="text-bg-dark font-bold text-xl">m</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white">mTouch Labs</span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">ISO Certified Company</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all">
            Request Quote <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg-dark border-t border-gray-800"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2">
                Request Quote <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-400 mb-6">
            <a href="#" className="hover:text-white">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-white">Services</a>
            <span>/</span>
            <span className="text-accent">Mobile App Design</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1]">
            Mobile App <span className="text-accent italic">Design</span> Company
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-200 mb-8 max-w-4xl mx-auto">
            Crafting High-Impact Mobile Experiences That Drive Engagement
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            mTouch Labs is a specialized mobile app design company delivering intuitive, high-performance app interfaces tailored for iOS and Android platforms. Mobile app success begins with intelligent design.
          </p>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

const WhatIsSection = () => {
  const cards = [
    { icon: <Smartphone className="text-blue-400" />, title: "iOS & Android", desc: "Platform-specific design standards." },
    { icon: <MousePointer2 className="text-purple-400" />, title: "Gesture Navigation", desc: "Intuitive touch interactions." },
    { icon: <Target className="text-red-400" />, title: "Conversion Focus", desc: "Optimized for user actions." },
    { icon: <TestTube2 className="text-green-400" />, title: "Prototype Testing", desc: "Validated user journeys." },
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">
            What Is <span className="text-accent">Mobile App Design</span>?
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Mobile app design involves creating the visual interface, interaction flow, and user journey for applications built specifically for smartphones and tablets — ensuring platform-specific usability, gesture-based navigation, optimized screen hierarchy, and App Store compliance.
            </p>
            <p>
              Our <span className="text-blue-400 font-semibold underline decoration-blue-400/30">UI/UX expertise</span> combined with <span className="text-purple-400 font-semibold underline decoration-purple-400/30">UX research</span> ensures every mobile design decision is data-driven and user-validated.
            </p>
            <p>
              We focus exclusively on designing mobile-first experiences that increase user retention, reduce friction, and enhance in-app conversions for <span className="text-accent font-semibold underline decoration-accent/30">mobile app development</span> projects.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bg-dark border border-gray-800 p-8 rounded-2xl hover:border-accent/50 transition-all group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-500 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const stats = [
    { value: "1500+", label: "Apps Designed", color: "text-blue-400" },
    { value: "iOS", label: "HIG Compliant", color: "text-purple-400" },
    { value: "MD3", label: "Material Design", color: "text-blue-400" },
    { value: "14+", label: "Years Experience", color: "text-blue-400" },
  ];

  const points = [
    "Mobile-first UX expertise & platform-specific design standards",
    "Conversion-focused interface strategy & scalable design systems",
    "Research-backed interaction models & gesture validation",
    "Apple HIG & Android Material Design compliance",
    "Continuous optimization & design system support",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-gray-800 p-10 rounded-3xl text-center"
            >
              <div className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl font-bold mb-8">
            Why Choose mTouch Labs for <span className="text-accent">Mobile Design</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We design mobile apps that users want to engage with — not uninstall:
          </p>
          <ul className="space-y-5">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-4 group">
                <div className="mt-1 text-accent group-hover:scale-125 transition-transform">
                  <Check size={20} />
                </div>
                <span className="text-gray-400 leading-relaxed">
                  {point.includes("design system") ? (
                    <>
                      {point.split("design system")[0]}
                      <span className="text-blue-400 font-semibold">design system</span>
                      {point.split("design system")[1]}
                    </>
                  ) : point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { id: "01", title: "Mobile UX Strategy", desc: "Core user journeys, interaction mapping, in-app navigation structure, drop-off risk points, and conversion pathway planning." },
    { id: "02", title: "iOS & Android Design", desc: "Platform-native interfaces following Apple Human Interface Guidelines and Android Material Design principles for natural, intuitive experiences." },
    { id: "03", title: "Wireframing & Prototypes", desc: "Mobile wireframes, clickable prototypes, interaction simulations, and gesture validation models to validate UX before development." },
    { id: "04", title: "Conversion-Focused UI", desc: "Interfaces designed to increase sign-ups, improve in-app purchases, boost feature adoption, enhance onboarding, and reduce churn rates." },
    { id: "05", title: "Design System for Apps", desc: "Scalable mobile design systems including typography frameworks, color strategy, component libraries, and UI consistency models for scaling apps." },
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Our Mobile <span className="text-accent">Design Services</span>
        </h2>
        <p className="text-gray-400 text-lg">From strategy to developer handoff</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-bg-dark border border-gray-800 p-10 rounded-3xl hover:border-accent/30 transition-all group ${idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 font-bold mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all">
              {service.id}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WorkflowSection = () => {
  const steps = [
    { id: 1, name: "User Research", icon: <Users size={20} /> },
    { id: 2, name: "App Flow", icon: <GitBranch size={20} /> },
    { id: 3, name: "Wireframing", icon: <PenTool size={20} /> },
    { id: 4, name: "Prototype", icon: <Monitor size={20} /> },
    { id: 5, name: "Visual Design", icon: <Eye size={20} /> },
    { id: 6, name: "Validation", icon: <ShieldCheck size={20} /> },
    { id: 7, name: "Dev Handoff", icon: <FileCode size={20} /> },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">
          Our Mobile <span className="text-accent">Design Workflow</span>
        </h2>
        <p className="text-gray-400 text-lg">Seamless collaboration between design and development teams.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 -translate-y-1/2 hidden lg:block" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white border border-gray-200 rounded-3xl flex items-center justify-center text-gray-800 shadow-xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2 transition-all duration-300">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-bg-dark">
                  {step.id}
                </div>
              </div>
              <span className="text-sm font-bold text-gray-300">{step.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  const pills = [
    "Minimal cognitive load",
    "Clear call-to-action placement",
    "Fast interaction response",
    "Clean visual hierarchy",
    "Accessibility compliance",
    "Platform-native patterns",
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Performance-Driven <span className="text-accent">Design Philosophy</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Mobile interfaces must be efficient, intuitive, and responsive.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {pills.map((pill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-accent hover:text-white hover:border-accent transition-all cursor-default"
            >
              <div className="w-2 h-2 bg-accent rounded-full group-hover:bg-white" />
              {pill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { icon: <Car className="text-red-400" />, name: "On-Demand Services" },
    { icon: <ShoppingBag className="text-blue-400" />, name: "eCommerce Mobile" },
    { icon: <CreditCard className="text-cyan-400" />, name: "FinTech Apps" },
    { icon: <HeartPulse className="text-red-500" />, name: "Health & Wellness" },
    { icon: <Truck className="text-green-400" />, name: "Logistics & Delivery" },
    { icon: <Cloud className="text-blue-500" />, name: "SaaS Mobile Products" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Industries We <span className="text-accent">Design For</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white/5 border border-gray-800 p-12 rounded-3xl flex flex-col items-center text-center group hover:border-accent/30 transition-all"
          >
            <div className="mb-8 group-hover:scale-125 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-200">{item.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ToolsSection = () => {
  const tools = [
    "Figma", "Sketch", "Adobe XD", "InVision", "Framer", "Principle",
    "Zeplin", "Lottie", "Apple HIG", "Material Design 3", "Storybook", "Hotjar",
    "Maze", "Google Analytics", "WCAG 2.1", "Responsive Grids", "Design Tokens", "Tailwind CSS"
  ];

  const stats = [
    { value: "1500+", label: "Apps Designed", color: "text-blue-400" },
    { value: "iOS", label: "& Android", color: "text-blue-400" },
    { value: "Ally", label: "Accessible", color: "text-blue-400" },
    { value: "14+", label: "Years Experience", color: "text-blue-400" },
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">
            Design Tools <span className="text-accent">We Use</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Industry-leading mobile design and prototyping tools.
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, idx) => (
              <span key={idx} className="bg-white border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-bg-dark hover:text-white transition-all cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-bg-dark border border-gray-800 p-10 rounded-3xl text-center"
            >
              <div className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExecutivesSection = () => {
  const executives = [
    { name: "Srinivas K.", role: "Founder & CEO", image: "https://picsum.photos/seed/exec1/300/300" },
    { name: "Anjali R.", role: "Chief Design Officer", image: "https://picsum.photos/seed/exec2/300/300" },
    { name: "Vikram S.", role: "Head of Engineering", image: "https://picsum.photos/seed/exec3/300/300" },
    { name: "Priya M.", role: "VP of Operations", image: "https://picsum.photos/seed/exec4/300/300" },
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-accent">Leadership Team</span>
        </h2>
        <p className="text-gray-400 text-lg">The visionaries behind our mobile design excellence.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {executives.map((exec, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative mb-6 overflow-hidden rounded-3xl aspect-square">
              <img
                src={exec.image}
                alt={exec.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold">{exec.name}</p>
                  <p className="text-xs text-gray-300">{exec.role}</p>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-1">{exec.name}</h3>
              <p className="text-accent text-sm font-medium">{exec.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CareersSection = () => {
  const jobs = [
    { title: "Senior UI/UX Designer", location: "Hyderabad, India", type: "Full-Time" },
    { title: "Mobile App Developer (React Native)", location: "Remote", type: "Full-Time" },
    { title: "Product Manager", location: "Bangalore, India", type: "Full-Time" },
    { title: "QA Engineer", location: "Hyderabad, India", type: "Contract" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">
            Join Our <span className="text-accent">Talent Network</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We are always looking for passionate designers, developers, and visionaries to join our global team.
          </p>
          <p className="text-gray-400 mb-12 leading-relaxed">
            At mTouch Labs, we foster a culture of innovation, collaboration, and continuous learning. Build the future of mobile experiences with us.
          </p>
          <button className="bg-white text-bg-dark px-8 py-3 rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all">
            View All Openings
          </button>
        </motion.div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-accent" size={20} />
            Latest Job Openings
          </h3>
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-gray-800 p-6 rounded-2xl flex items-center justify-between group hover:border-accent/30 transition-all cursor-pointer"
            >
              <div>
                <h4 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">{job.title}</h4>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                  <span className="flex items-center gap-1"><Layers size={12} /> {job.type}</span>
                </div>
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-accent group-hover:text-white transition-all">
                <ArrowRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "What does a mobile app design company do?", a: "A mobile app design company handles the entire visual and interactive experience of an application. This includes user research, wireframing, UI design, prototyping, and preparing assets for developers." },
    { q: "Why is mobile UX important?", a: "Mobile UX is critical because it directly impacts user retention and conversion rates. A well-designed app feels intuitive, reduces friction, and keeps users coming back." },
    { q: "Do you design for both iOS and Android?", a: "Yes, we specialize in both platforms, adhering to Apple's Human Interface Guidelines (HIG) and Google's Material Design standards to ensure a native feel on every device." },
    { q: "Do you provide prototypes before development?", a: "Absolutely. We create high-fidelity clickable prototypes that allow you to test the flow and experience of the app before a single line of code is written." },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>
        <p className="text-gray-400 text-lg">Everything about mobile app design</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-800">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full py-6 flex items-center justify-between text-left group"
            >
              <span className="text-lg font-bold text-gray-200 group-hover:text-accent transition-colors">{faq.q}</span>
              <ChevronDown
                className={`text-gray-500 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`}
                size={20}
              />
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-gray-400 leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-8">
          Design Your <span className="text-accent">Mobile App</span> Today
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss how our mobile design expertise can create engaging app experiences.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-accent/20"
        >
          Start Your App Design
        </motion.button>
      </div>

      {/* WhatsApp Floating */}
      <div className="fixed bottom-32 right-8 z-40">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl cursor-pointer"
        >
          <MessageCircle size={32} />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const regions = [
    { name: "INDIA", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
    { name: "AMERICAS", cities: ["United States", "Canada"] },
    { name: "EUROPE", cities: ["United Kingdom", "Germany", "Ireland"] },
    { name: "ASIA PACIFIC", cities: ["Singapore", "Australia", "New Zealand", "India"] },
    { name: "MIDDLE EAST", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] },
  ];

  return (
    <footer className="bg-bg-dark pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Globe className="text-blue-500" size={24} />
          <h3 className="text-xl font-bold">Global Presence</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          {regions.map((region, idx) => (
            <div key={idx}>
              <h4 className="text-blue-500 text-xs font-bold tracking-widest mb-8 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                {region.name}
              </h4>
              <ul className="space-y-4">
                {region.cities.map((city, cIdx) => (
                  <li key={cIdx} className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-bg-dark font-bold text-xl">m</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">mTouch Labs</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400">ISO Certified Company</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
            </p>
            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <Mail size={16} />
              <span className="text-sm">contact@mtouchlabs.com</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4">
              {["Home", "Services", "About Us", "Careers"].map((item) => (
                <li key={item} className="text-gray-500 text-sm hover:text-white transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-4">
              {[
                "Custom Software Development",
                "Cloud & DevOps Solutions",
                "Mobile Application Development",
                "Salesforce Consulting",
              ].map((item) => (
                <li key={item} className="text-gray-500 text-sm hover:text-white transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-48 bg-gray-900 rounded-2xl overflow-hidden group">
            <img
              src="https://picsum.photos/seed/map/400/300?grayscale"
              alt="Map"
              className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <MapPin className="text-accent mb-2" size={24} />
              <span className="text-xs font-bold text-white mb-1">mTouch Labs</span>
              <span className="text-[10px] text-gray-400">Software Development</span>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-600 text-xs">
            © 2026 <span className="text-gray-400 font-bold">mTouch Labs Pvt. Ltd.</span> All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <a key={item} href="#" className="text-gray-600 text-xs hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function MobileAppDesign() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatIsSection />
        <WhyChooseSection />
        <ServicesSection />
        <WorkflowSection />
        <PhilosophySection />
        <IndustriesSection />
        <ToolsSection />
        <ExecutivesSection />
        <CareersSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        <div className="bg-white px-4 py-2 rounded-lg shadow-xl text-xs font-bold text-bg-dark flex items-center gap-2 animate-bounce">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          WE ARE CHATTING!
        </div>
        <button className="w-16 h-16 bg-bg-dark border-2 border-white rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
          <MessageCircle size={28} />
        </button>
      </div>
    </div>
  );
}
