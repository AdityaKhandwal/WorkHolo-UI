import React, { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

import { 
  Mail, 
  Phone, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Stethoscope, 
  Truck, 
  GraduationCap, 
  ShoppingBag, 
  Users, 
  Layout, 
  Smartphone, 
  ShieldCheck, 
  PenTool, 
  Layers, 
  Monitor,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Plus,
  Minus,
  MessageCircle
} from 'lucide-react';

/**
 * Utility for Tailwind class merging
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants & Data ---

const COLORS = {
  bg: '#0B0E14',
  card: '#1A1F2B',
  accent: '#F9A826', // Yellow/Orange
  blue: '#0088FF',
  textGray: '#A0AEC0',
  border: 'rgba(255, 255, 255, 0.1)',
};

const NAV_LINKS = [
  { name: 'Home', hasDropdown: true },
  { name: 'Services', hasDropdown: true },
  { name: 'Products', hasDropdown: true },
  { name: 'Resources', hasDropdown: true },
  { name: 'Portfolio', hasDropdown: false },
  { name: 'Careers', hasDropdown: false },
  { name: 'Contact Us', hasDropdown: false },
];

const EXPERTISE_STATS = [
  { value: '500+', label: 'iPad Apps Delivered' },
  { value: '14+', label: 'Years Experience' },
  { value: '99%', label: 'App Store Approval' },
  { value: '60+', label: 'Enterprise Clients' },
];

const SERVICES = [
  {
    id: '01',
    title: 'Custom iPad Applications',
    description: 'Tailored iPad apps including enterprise workflow systems, field service management apps, healthcare reporting platforms, real-time data dashboards, and education & training applications — each engineered for large-screen usability.'
  },
  {
    id: '02',
    title: 'iPadOS Interface Engineering',
    description: 'Multi-column layout architecture, adaptive UI frameworks, drag-and-drop interaction models, Apple Pencil support integration, and optimized landscape & portrait performance for native iPad experiences.'
  },
  {
    id: '03',
    title: 'Enterprise iPad Solutions',
    description: 'Workforce mobility apps, sales enablement platforms, inventory & logistics control systems, executive reporting dashboards, and secure internal communication tools with role-based access control.'
  },
  {
    id: '04',
    title: 'iPad App Integration',
    description: 'Seamless integration with enterprise backend systems, CRM & ERP platforms, cloud storage services, real-time analytics tools, and API-based data systems for unified data synchronization.'
  },
  {
    id: '05',
    title: 'Performance Optimization & Testing',
    description: 'Comprehensive multi-device compatibility testing, memory optimization, performance benchmarking, security validation, and iPadOS compliance testing to ensure stability across multiple usage scenarios and multitasking environments.'
  }
];

const PROCESS_STEPS = [
  { id: 1, name: 'Business Analysis' },
  { id: 2, name: 'Interface Architecture' },
  { id: 3, name: 'iPadOS Design' },
  { id: 4, name: 'Native Development' },
  { id: 5, name: 'Device Testing' },
  { id: 6, name: 'Deployment' },
  { id: 7, name: 'Continuous Optimization' },
];

const INDUSTRIES = [
  { title: 'Healthcare & Clinical Systems', icon: Stethoscope },
  { title: 'Field Service Operations', icon: Layout },
  { title: 'Education & E-Learning', icon: GraduationCap },
  { title: 'Retail & Inventory Management', icon: ShoppingBag },
  { title: 'Logistics & Transportation', icon: Truck },
  { title: 'Enterprise Corporate Teams', icon: Users },
];

const TECH_TAGS = [
  'Swift', 'SwiftUI', 'UIKit', 'iPadOS SDK', 'Xcode', 'Core Data',
  'CloudKit', 'ARKit', 'PencilKit', 'Combine', 'REST APIs', 'GraphQL',
  'Firebase', 'AWS', 'TestFlight', 'CI/CD'
];

const TECH_STATS = [
  { value: '16+', label: 'Frameworks & Tools' },
  { value: '100%', label: 'iPadOS Native' },
  { value: '40+', label: 'Enterprise Integrations' },
  { value: '4.8★', label: 'Avg App Store Rating' },
];

const FAQS = [
  {
    question: 'What is iPad app development?',
    answer: 'iPad app development is the process of creating applications specifically optimized for Apple\'s iPad devices, leveraging the unique features of iPadOS such as larger screens, Apple Pencil support, and advanced multitasking capabilities.'
  },
  {
    question: 'How is iPad development different from iPhone development?',
    answer: 'While both use similar technologies, iPad development focuses on large-screen UI/UX, multi-column layouts, split-view controllers, and specific iPadOS features that aren\'t available or practical on smaller iPhone screens.'
  },
  {
    question: 'Are iPad apps suitable for enterprise use?',
    answer: 'Yes, iPads are widely used in enterprise environments for field work, data visualization, and productivity due to their portability combined with powerful processing and large displays.'
  },
  {
    question: 'Do you provide post-deployment support?',
    answer: 'Absolutely. We offer comprehensive post-deployment support including maintenance, performance monitoring, and regular updates to ensure compatibility with new iPadOS versions.'
  }
];

const GLOBAL_PRESENCE = {
  INDIA: ['Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Kochi'],
  AMERICAS: ['United States', 'Canada'],
  EUROPE: ['United Kingdom', 'Germany', 'Ireland'],
  'ASIA PACIFIC': ['Singapore', 'Australia', 'New Zealand', 'India'],
  'MIDDLE EAST': ['UAE', 'Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait'],
};

// --- Components ---

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean, key?: React.Key }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "text-4xl md:text-5xl font-bold mb-4 font-display",
        light ? "text-white" : "text-white"
      )}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl mx-auto text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"
    />
  </div>
);

const Card = ({ children, className }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className={cn(
      "bg-[#1A1F2B] border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10",
      className
    )}
  >
    {children}
  </motion.div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white font-['Inter',sans-serif] selection:bg-blue-500/30">
      {/* --- Top Bar --- */}
      <div className="bg-black py-2 px-4 md:px-8 border-b border-white/5 text-[11px] md:text-[13px] text-gray-400 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-3.5 h-3.5" /> contact@mtouchlabs.com
          </a>
          <a href="tel:+919390683154" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" /> +91 9390683154
          </a>
          <a href="tel:+15512220070" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5" /> +1 (551) 222-0070
          </a>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="text-yellow-500 font-bold">NASSCOM</span> SME Inspire Awards 2026 🏆
          </span>
          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-4">
            <span className="hover:text-white cursor-pointer">Hyderabad</span>
            <span className="hover:text-white cursor-pointer">Bangalore</span>
            <span className="hover:text-white cursor-pointer">USA</span>
          </div>
        </div>
      </div>

      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-[#0B0E14]/80 backdrop-blur-md border-b border-white/5">
        <nav className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">M</div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">mTouch Labs</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">ISO Certified</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href="#" 
                className="text-[15px] font-medium text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                {link.name} {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 px-6 py-2.5 rounded-full font-semibold text-[15px] flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            Request Quote <ArrowRight className="w-4 h-4" />
          </button>
        </nav>
      </header>

      {/* --- Hero Section --- */}
      <section className="relative pt-24 pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B2CBF]/5 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]"
          >
            iPad <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">App Development</span> <br /> Company
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 font-medium mb-6"
          >
            Enterprise-Ready iPad Applications Built for Productivity
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-12"
          >
            mTouch Labs is a specialized iPad app development company delivering high-performance, large-screen optimized applications designed for productivity, enterprise operations, and immersive digital experiences. Unlike standard mobile apps, iPad applications require structured layout engineering, advanced interaction models, and optimized performance for multitasking environments.
          </motion.p>
        </div>
      </section>

      {/* --- Why Specialized Expertise --- */}
      <section className="py-24 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Why iPad App Development Requires <span className="text-orange-400">Specialized Expertise</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              The iPad is not just a bigger screen — it's a productivity platform. iPad app development differs significantly from standard smartphone development and requires a dedicated approach to design, architecture, and interaction.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              At mTouch Labs, we develop iPad solutions that leverage the full potential of iPadOS to deliver seamless, large-format user experiences. Our <span className="text-blue-400 underline cursor-pointer">UI/UX design team</span> ensures every interface feels native and intuitive on iPad devices.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you need enterprise workflow systems, field service tools, or data dashboards, our <span className="text-blue-400 underline cursor-pointer">mobile app development expertise</span> ensures your iPad application is built for real-world productivity.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Large-Screen Architecture', icon: Monitor },
              { title: 'Apple Pencil Integration', icon: PenTool },
              { title: 'Multi-Window Support', icon: Layers },
              { title: 'Enterprise-Grade Security', icon: ShieldCheck },
            ].map((item, i) => (
              <Card key={i} className="flex flex-col items-center text-center justify-center py-12">
                <item.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg">{item.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Expertise Stats --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="We deliver end-to-end iPad solutions optimized for productivity and enterprise operations:">
            Our iPad App <span className="text-orange-400">Development Expertise</span>
          </SectionHeading>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {EXPERTISE_STATS.map((stat, i) => (
              <div key={i} className="text-center p-8 bg-[#1A1F2B] rounded-2xl border border-white/5">
                <div className="text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Custom iPad Application Development — tailored to your workflows",
              "iPadOS Interface Engineering — multi-column layouts & adaptive UI",
              "Enterprise iPad Solutions — workforce mobility & secure communication",
              "iPad App Integration — CRM, ERP, cloud & real-time analytics",
              "Performance Optimization & Testing — multitasking, memory & security validation"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4">
                <CheckCircle2 className="w-6 h-6 text-orange-400 shrink-0" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Services --- */}
      <section className="py-24 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Large-screen solutions engineered for productivity">
            Our iPad App <span className="text-orange-400">Development Services</span>
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Card key={service.id} className="relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-4xl font-bold text-white/5 group-hover:text-blue-500/10 transition-colors">
                  {service.id}
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold mb-6">
                  {service.id}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Process --- */}
      <section className="py-32 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="A structured lifecycle built specifically for iPad productivity environments.">
            Our iPad Development <span className="text-orange-400">Process</span>
          </SectionHeading>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-500/20 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
              {PROCESS_STEPS.map((step) => (
                <div key={step.id} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-xl font-bold mb-4 shadow-xl shadow-blue-500/20 relative">
                    {step.id}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-[10px] text-blue-600">
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider">{step.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose mTouch Labs as Your <span className="text-orange-400">iPad App Development Company</span>?</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
            We build iPad applications that enhance business efficiency and deliver measurable productivity gains.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Large-screen UI expertise',
              'iPadOS optimization knowledge',
              'Enterprise-grade security',
              'Cloud-connected architecture',
              'Productivity-focused engineering',
              'Ongoing performance enhancements'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-[#1A1F2B] border border-white/10 px-6 py-3 rounded-full hover:border-blue-500/50 transition-colors cursor-default">
                <div className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-gray-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Industries --- */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Industries We <span className="text-orange-400">Serve</span></SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, i) => (
              <Card key={i} className="flex flex-col items-center text-center py-12 group">
                <industry.icon className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-200">{industry.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Technologies --- */}
      <section className="py-24 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8">Development <span className="text-orange-400">Technologies</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              We leverage Apple's latest frameworks and enterprise-grade tools to build high-performance iPad applications optimized for productivity and scalability.
            </p>
            <div className="flex flex-wrap gap-3">
              {TECH_TAGS.map((tag, i) => (
                <span key={i} className="px-4 py-1.5 bg-[#1A1F2B] border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:border-blue-500/50 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {TECH_STATS.map((stat, i) => (
              <Card key={i} className="text-center py-10">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Everything you need to know about our iPad app development services">
            Frequently Asked <span className="text-orange-400">Questions</span>
          </SectionHeading>

          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto bg-[#7B2CBF] rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl shadow-purple-900/40">
          <div className="absolute top-0 left-0 w-full h-full bg-white/10 blur-3xl pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Build Your <span className="text-yellow-300">iPad Application</span>?</h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss how we can engineer an iPad solution that enhances your team's productivity and operational efficiency.
          </p>
          <button className="bg-white text-[#7B2CBF] hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all active:scale-95">
            Start Your Project
          </button>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-black pt-24 pb-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold">M</div>
                <span className="text-xl font-bold">mTouch Labs</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
              </p>
              <div className="flex items-center gap-4">
                {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Custom Software Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Cloud & DevOps Solutions</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Mobile Application Development</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Salesforce Consulting</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Quality Assurance & Testing</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">AI & Data Analytics</a></li>
              </ul>
            </div>

            <div>
              <div className="bg-[#1A1F2B] rounded-2xl p-6 border border-white/5">
                <h4 className="text-white font-bold mb-4">Download Brochure</h4>
                <p className="text-gray-500 text-xs mb-6">Get detailed insights into our development process and service offerings.</p>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                  Download Brochure <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 mb-12">
            <div className="flex items-center gap-2 mb-8">
              <Globe className="w-5 h-5 text-blue-400" />
              <h4 className="text-lg font-bold">Global Presence</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {Object.entries(GLOBAL_PRESENCE).map(([region, cities]) => (
                <div key={region}>
                  <h5 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {region}
                  </h5>
                  <ul className="space-y-3 text-gray-500 text-sm">
                    {cities.map((city) => (
                      <li key={city} className="hover:text-white cursor-pointer transition-colors">{city}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[13px] border-t border-white/5 pt-8">
            <p>© 2026 <span className="text-gray-400">mTouch Labs Pvt. Ltd.</span> All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer >

      {/* --- Floating Elements --- */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer relative group"
        >
          <MessageCircle className="w-8 h-8 text-white" />
          <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight className="w-6 h-6 text-white -rotate-90" />
        </motion.div>
      </div>
    </div>
  );
}
