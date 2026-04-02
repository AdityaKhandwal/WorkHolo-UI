import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ChevronRight, 
  Globe, 
  CheckCircle2,
  Zap,
  Layout,
  Smartphone,
  BarChart3,
  Users,
  Clock,
  Target,
  Code2,
  ShieldCheck,
  Settings,
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-dark text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="https://picsum.photos/seed/salesforce/1920/1080" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <span>Home</span>
          <ChevronRight size={12} />
          <span>Services</span>
          <ChevronRight size={12} />
          <span className="text-accent">Salesforce Lightning</span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Salesforce <span className="text-accent italic">Lightning</span> Migration <br /> & Development
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10"
        >
          Modernizing Salesforce for Performance, Productivity & Scalability.
          Salesforce Lightning is more than a visual upgrade — it is a productivity platform designed for speed, 
          automation, and enhanced user experience. We help organizations seamlessly transition from Classic to 
          Lightning while optimizing workflows and scalability.
        </motion.p>
      </div>
    </section>
  );
};

const WhyMigrate = () => {
  const cards = [
    { icon: <Zap className="text-orange-500" />, title: "Faster Workflows", desc: "Streamline operations with automated processes." },
    { icon: <BarChart3 className="text-blue-500" />, title: "Dynamic Dashboards", desc: "Real-time insights with interactive visualizations." },
    { icon: <Code2 className="text-green-500" />, title: "Component-Based UI", desc: "Modular architecture for flexible development." },
    { icon: <Smartphone className="text-purple-500" />, title: "Mobile Responsive", desc: "Access your CRM anywhere, on any device." },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Migrate to <span className="text-accent">Salesforce Lightning</span>?</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Many organizations continue operating on Salesforce Classic, limiting their ability to leverage advanced automation tools, 
              Lightning-ready integrations, dynamic dashboards, and enhanced UI productivity features.
            </p>
            <p>
              Migrating to Lightning unlocks faster workflows, improved reporting visibility, component-based customization, and stronger CRM 
              adoption. Our <span className="text-blue-600 font-semibold">Salesforce consulting</span> team guides the entire transformation.
            </p>
            <p>
              Our Lightning Migration & Development Services ensure your CRM environment is future-ready, user-friendly, and aligned with modern 
              business demands — including seamless <span className="text-blue-600 font-semibold">integration</span> with existing systems.
            </p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm"
            >
              <div className="mb-4 p-3 bg-white rounded-xl shadow-sm">{card.icon}</div>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReadinessAssessment = () => {
  const stats = [
    { value: "100+", label: "Migrations Completed" },
    { value: "2-6", label: "Weeks Timeline" },
    { value: "0%", label: "Downtime Target" },
    { value: "LWC", label: "Expert Development" },
  ];

  const checklist = [
    "Existing customizations & Apex/Visualforce components",
    "Third-party integrations & workflow dependencies",
    "User adoption patterns & training needs",
    "Feature compatibility & gap analysis",
    "Performance optimization opportunities"
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl border border-gray-200 text-center shadow-sm">
              <div className="text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Lightning Readiness <span className="text-accent">Assessment</span></h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Before migration, we evaluate your entire Salesforce environment:
          </p>
          <ul className="space-y-4">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { id: "01", title: "Lightning Migration", desc: "Structured Classic to Lightning transition with gap analysis, component refactoring, data validation, user testing, and post-migration optimization." },
    { id: "02", title: "LWC Development", desc: "Custom Lightning Web Components, dynamic pages, advanced reporting, and UI personalization tailored to your operational goals." },
    { id: "03", title: "Automation Enhancement", desc: "Workflow automation upgrades, dynamic dashboards, approval processes, and Einstein Analytics integration for smarter decision making." },
    { id: "04", title: "Performance Optimization", desc: "Page load optimization, component rendering, role-based visibility, and security hardening for a high-performance CRM." },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Lightning <span className="text-accent">Services</span></h2>
        <p className="text-gray-600">From migration to advanced Lightning development</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="p-10 bg-gray-50 rounded-3xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="text-blue-600 font-bold text-sm mb-6 bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">{service.id}</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Framework = () => {
  const steps = [
    { id: 1, title: "Discovery" },
    { id: 2, title: "Compatibility Audit" },
    { id: 3, title: "Architecture Redesign" },
    { id: 4, title: "Component Dev" },
    { id: 5, title: "Testing" },
    { id: 6, title: "Deployment" },
    { id: 7, title: "Optimization" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Lightning <span className="text-accent">Development Framework</span></h2>
        <p className="text-gray-600">This ensures both technical stability and business continuity.</p>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-4 shadow-lg shadow-blue-200">
                {step.id}
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-center w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-800">{step.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    "Improved UI & usability",
    "Faster navigation & automation",
    "Enhanced reporting & analytics",
    "Better mobile responsiveness",
    "Improved team productivity",
    "Scalable future-ready architecture"
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Benefits of <span className="text-accent">Lightning Migration</span></h2>
        <p className="text-gray-600">We modernize Salesforce environments without disrupting business operations.</p>
      </div>
      
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="bg-gray-50 px-8 py-4 rounded-full border border-gray-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span className="font-semibold text-gray-800">{benefit}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const features = [
    { title: "Structured Migration", icon: <Globe size={14} /> },
    { title: "LWC Expertise", icon: <Code2 size={14} /> },
    { title: "Secure Deployment", icon: <ShieldCheck size={14} /> },
    { title: "Minimal Downtime", icon: <Clock size={14} /> },
    { title: "User Training", icon: <Users size={14} /> },
    { title: "Long-Term CRM Optimization", icon: <Target size={14} /> },
    { title: "Lightning Flow", icon: <Zap size={14} /> },
    { title: "Apex Refactoring", icon: <Code2 size={14} /> },
    { title: "Visualforce Conversion", icon: <Layout size={14} /> },
    { title: "Dynamic Pages", icon: <Layout size={14} /> },
    { title: "Lightning App Builder", icon: <Settings size={14} /> },
    { title: "Einstein Analytics", icon: <BarChart3 size={14} /> },
  ];

  const stats = [
    { label: "LWC", sub: "Component Experts" },
    { label: "0", sub: "Downtime Target" },
    { label: "100+", sub: "Migrations Done" },
    { label: "24/7", sub: "Post-Migration Support" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-accent">WorkHolo Labs</span>?</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            We modernize Salesforce environments without disrupting business operations.
          </p>
          <div className="flex flex-wrap gap-3">
            {features.map((f, idx) => (
              <div key={idx} className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-xs font-bold text-gray-700 flex items-center gap-2 shadow-sm">
                {f.title}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className={`p-10 rounded-2xl border text-center shadow-sm ${idx === 1 ? 'border-accent border-2' : 'bg-white border-gray-200'}`}>
              <div className="text-4xl font-extrabold text-blue-600 mb-2">{s.label}</div>
              <div className="text-sm font-semibold text-gray-600">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "What is Salesforce Lightning migration?", a: "Salesforce Lightning migration is the process of moving your Salesforce instance from the Classic interface to the modern Lightning Experience. This involves auditing your current setup, refactoring components, and optimizing workflows for the new platform." },
    { q: "Is Lightning migration complex?", a: "Complexity depends on your current customizations. While standard features migrate easily, custom Apex, Visualforce pages, and complex integrations require expert refactoring to function optimally in Lightning." },
    { q: "Do you provide LWC development?", a: "Yes, we specialize in Lightning Web Components (LWC) development, creating custom, high-performance components that leverage the modern web standards of the Lightning platform." },
    { q: "How long does Lightning migration take?", a: "A typical migration timeline ranges from 2 to 6 weeks, depending on the volume of data, complexity of customizations, and the extent of user training required." },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-accent">Questions</span></h2>
        <p className="text-gray-600">Everything about Lightning migration and development</p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-200">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full py-6 flex items-center justify-between text-left font-bold text-lg hover:text-primary transition-colors"
            >
              {faq.q}
              <ChevronDown className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-gray-600 leading-relaxed">
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
    <section className="py-24 px-6 md:px-12 bg-dark text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://picsum.photos/seed/upgrade/1920/1080" alt="CTA BG" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Upgrade to <span className="text-accent italic">Lightning</span>?</h2>
        <p className="text-xl text-gray-400 mb-10">
          Let's discuss how we can modernize your Salesforce environment for maximum productivity.
        </p>
        <button className="bg-accent hover:bg-opacity-90 text-white px-10 py-4 rounded-lg text-lg font-bold transition-all shadow-xl shadow-accent/20">
          Start Your Migration
        </button>
      </div>
    </section>
  );
};

export default function LightnigMigrationDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <WhyMigrate />
        <ReadinessAssessment />
        <Services />
        <Framework />
        <Benefits />
        <WhyChoose />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
