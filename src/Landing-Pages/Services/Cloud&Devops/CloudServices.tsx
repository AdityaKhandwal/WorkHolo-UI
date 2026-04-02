import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Shield,
  Zap,
  Monitor,
  Database,
  Cpu,
  Layers,
  Search,
  MessageSquare,
  ChevronRight,
  Plus,
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  return (
    <section className="pt-40 pb-24 px-4 md:px-12 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm mb-6 text-gray-400"
        >
          <span>Home</span> / <span>Services</span> / <span className="text-accent-yellow">Cloud Services</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
        >
          Cloud <span className="text-accent-yellow">Services</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 font-medium"
        >
          Scalable, Secure & Enterprise-Ready Cloud Solutions for Modern Businesses
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-gray-400 max-w-4xl leading-relaxed"
        >
          WorkHolo Labs provides comprehensive cloud services designed to help organizations modernize infrastructure, improve operational agility, and scale digital operations securely. Cloud transformation requires architecture, not just migration.
        </motion.p>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
      />
    </section>
  );
};

const WhatAreCloudServices = () => {
  const cards = [
    { title: 'Multi-Cloud Architecture', icon: <Layers className="text-blue-400" /> },
    { title: 'Security Governance', icon: <Shield className="text-blue-400" /> },
    { title: 'Performance Optimization', icon: <Zap className="text-blue-400" /> },
    { title: 'Global Scalability', icon: <Globe className="text-blue-400" /> },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What Are <span className="text-accent-yellow">Cloud Services</span>?
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Cloud services involve designing, deploying, managing, and optimizing computing infrastructure through scalable cloud platforms. Professional cloud solutions include cloud consulting & strategy, infrastructure design, application migration, performance optimization, security implementation, and managed cloud operations.
            </p>
            <p>
              The objective is to create flexible, high-availability environments that support business growth. Our <span className="text-blue-600 font-semibold">enterprise application development</span> capabilities integrate seamlessly with cloud infrastructure for maximum scalability.
            </p>
            <p>
              Combined with our <span className="text-blue-600 font-semibold">DevOps services</span>, we deliver end-to-end cloud engineering that accelerates deployment and ensures operational excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-4 shadow-sm"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                {card.icon}
              </div>
              <h3 className="font-bold text-gray-800">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CloudPlatforms = () => {
  const stats = [
    { value: '1500+', label: 'Cloud Projects' },
    { value: '3', label: 'Cloud Platforms' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Monitoring' },
  ];

  const platforms = [
    { name: 'Amazon Web Services (AWS)', desc: 'compute, storage & AI services' },
    { name: 'Microsoft Azure', desc: 'enterprise integration & hybrid cloud' },
    { name: 'Google Cloud Platform (GCP)', desc: 'data analytics & ML workloads' },
    { name: 'Hybrid & private cloud environments for regulated industries' },
    { name: 'Cloud security & governance across all platforms', isBold: true },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-10 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Cloud Platforms <span className="text-accent-yellow">We Support</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">Our cloud expertise spans all major platforms:</p>
          <ul className="space-y-4">
            {platforms.map((p, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent-yellow mt-1 shrink-0" size={20} />
                <span className="text-gray-700">
                  <span className={`font-bold ${p.isBold ? 'text-blue-600' : ''}`}>{p.name}</span>
                  {p.desc && <span className="text-gray-500"> — {p.desc}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const items = [
    {
      id: '01',
      title: 'Cloud Consulting & Strategy',
      desc: 'Cloud readiness assessment, architecture blueprinting, cost optimization strategy, multi-cloud planning, and infrastructure modernization roadmaps for strategic clarity.'
    },
    {
      id: '02',
      title: 'Cloud Infrastructure Engineering',
      desc: 'VPC architecture, load balancing & auto-scaling, high-availability systems, secure network configuration, and resource provisioning for reliable performance.'
    },
    {
      id: '03',
      title: 'Cloud Migration & Modernization',
      desc: 'On-premise to cloud migration, legacy system modernization, database migration, application re-platforming, and zero-downtime migration planning.'
    },
    {
      id: '04',
      title: 'Multi-Cloud & Hybrid Solutions',
      desc: 'Hybrid cloud architectures, multi-cloud deployment models, cross-platform integration, and disaster recovery systems reducing dependency risks.'
    },
    {
      id: '05',
      title: 'Cloud Managed Services',
      desc: 'Infrastructure monitoring, performance optimization, backup & disaster recovery, incident management, and continuous improvement cycles for long-term operational stability.'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Cloud <span className="text-accent-yellow">Services Capabilities</span>
          </h2>
          <p className="text-gray-500 text-lg">End-to-end cloud engineering for modern enterprises</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={`p-10 rounded-3xl border border-gray-100 shadow-sm ${idx === 4 ? 'md:col-span-2' : ''} bg-gray-50`}
            >
              <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold mb-6 shadow-lg">
                {item.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImplementationFramework = () => {
  const steps = [
    { name: 'Assessment', id: 1 },
    { name: 'Architecture', id: 2, active: true },
    { name: 'Deployment', id: 3 },
    { name: 'Migration', id: 4 },
    { name: 'Security', id: 5 },
    { name: 'Monitoring', id: 6 },
    { name: 'Optimization', id: 7 },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Cloud <span className="text-accent-yellow">Implementation Framework</span>
          </h2>
          <p className="text-gray-500 text-lg">Structured lifecycle ensuring reliability and long-term value.</p>
        </div>

        <div className="relative flex flex-wrap justify-center gap-4 md:gap-0 items-center">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center md:flex-1">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl flex flex-col items-center justify-center gap-2 border-2 transition-all ${step.active ? 'bg-white border-blue-500 shadow-xl scale-110' : 'bg-white border-gray-100 shadow-md'}`}
              >
                <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${step.active ? 'bg-blue-600' : 'bg-blue-400'}`}>
                  {step.id}
                </div>
                <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${step.active ? 'text-blue-600' : 'text-gray-400'}`}>
                  {step.name}
                </span>
                {idx < steps.length - 1 && (
                  <ArrowRight className="md:hidden text-blue-200" size={16} />
                )}
              </motion.div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 text-blue-200">
                  <ChevronRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    'Enterprise-focused cloud engineering',
    'Multi-cloud architecture expertise',
    'AI & data platform integration',
    'Security-first infrastructure planning',
    'Scalable DevOps alignment',
    'Continuous performance monitoring'
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose WorkHolo Labs for <span className="text-accent-yellow">Cloud Services</span>?
        </h2>
        <p className="text-gray-500 text-lg mb-16">We build resilient cloud environments that support sustainable growth.</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {features.map((f, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05, backgroundColor: '#EFF6FF' }}
              className="px-8 py-4 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-3 shadow-sm cursor-default"
            >
              <div className="w-2 h-2 bg-accent-yellow rounded-full" />
              <span className="font-semibold text-gray-700">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: 'Technology & SaaS', icon: <Monitor size={32} /> },
    { name: 'Financial Services', icon: <Database size={32} /> },
    { name: 'Healthcare Organizations', icon: <Plus size={32} /> },
    { name: 'eCommerce Enterprises', icon: <Search size={32} /> },
    { name: 'Data & AI Platforms', icon: <Cpu size={32} /> },
    { name: 'Global B2B Enterprises', icon: <Globe size={32} /> },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Industries We <span className="text-accent-yellow">Serve</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-6"
            >
              <div className="text-blue-500">
                {ind.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technologies = () => {
  const tags = [
    'AWS', 'AZURE', 'GOOGLE CLOUD', 'TERRAFORM', 'DOCKER', 
    'KUBERNETES', 'ANSIBLE', 'JENKINS', 'CLOUDFORMATION', 'LAMBDA',
    'EC2', 'S3', 'RDS', 'VPC', 'IAM', 'CLOUDWATCH', 'DATADOG',
    'PROMETHEUS', 'GRAFANA', 'CI/CD'
  ];

  const stats = [
    { value: '3', label: 'Cloud Platforms' },
    { value: '20+', label: 'Cloud Tools' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: 'IaC', label: 'Infrastructure as Code' },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Cloud <span className="text-accent-yellow">Services Technologies</span>
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Enterprise-grade cloud platforms and DevOps tools for scalable infrastructure.
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100 uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-10 bg-gray-50 rounded-2xl border border-gray-100 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: 'What are cloud services?', a: 'Cloud services are infrastructure, platforms, or software that are hosted by third-party providers and made available to users through the internet.' },
    { q: 'How do cloud services support business growth?', a: 'They provide scalability, cost-efficiency, and flexibility, allowing businesses to adapt quickly to market changes without heavy upfront infrastructure investment.' },
    { q: 'Do you provide multi-cloud solutions?', a: 'Yes, we specialize in multi-cloud and hybrid cloud architectures to ensure high availability and prevent vendor lock-in.' },
    { q: 'Can cloud services support AI and data platforms?', a: 'Absolutely. We integrate advanced AI and data analytics tools directly into cloud environments for high-performance computing.' },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-accent-yellow">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">Everything about our cloud services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-blue-600 transition-colors"
              >
                <span className="text-lg font-bold text-gray-800">{faq.q}</span>
                {openIdx === idx ? <ChevronDown className="rotate-180 transition-transform" /> : <ChevronDown className="transition-transform" />}
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

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to Transform Your <span className="text-accent-yellow">Cloud Infrastructure</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let's discuss how our cloud services can modernize your infrastructure and accelerate business growth.
        </p>
        <button className="bg-accent-yellow hover:bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:scale-105">
          Start Your Cloud Project
        </button>
      </div>
    </section>
  );
};

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-primary-purple selection:bg-accent-yellow selection:text-black">
      <Hero />
      <WhatAreCloudServices />
      <CloudPlatforms />
      <Capabilities />
      <ImplementationFramework />
      <WhyChooseUs />
      <Industries />
      <Technologies />
      <FAQ />
      <CTA />

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/40 transition-all" />
          <button className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
            <MessageSquare size={32} fill="white" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">1</div>
          </button>
        </div>
      </div>
    </div>
  );
}
