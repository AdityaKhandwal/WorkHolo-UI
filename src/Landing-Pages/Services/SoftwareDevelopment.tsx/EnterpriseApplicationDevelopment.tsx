import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ChevronRight, 
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  HeartPulse,
  Banknote,
  Factory,
  GraduationCap,
  Building2,
  Cloud,
  ShieldCheck,
  Cpu,
  Layers,
  Code2,
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-purple-main">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <nav className="flex justify-center items-center gap-2 text-white/70 text-sm mb-8">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <ChevronRight size={14} />
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <ChevronRight size={14} />
          <span className="text-accent font-medium">Enterprise Application Development</span>
        </nav>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
        >
          Enterprise <span className="text-accent">Application</span><br />Development
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 font-medium mb-8 max-w-4xl mx-auto"
        >
          Scalable, Secure & Cloud-Native Enterprise Software Solutions
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
        >
          mTouch Labs is a leading Enterprise Application Development Company delivering secure, scalable, and high-performance enterprise software solutions. We architect systems that streamline operations, unify data, automate workflows, and support long-term digital transformation.
        </motion.p>
      </div>
    </section>
  );
};

const WhatIs = () => {
  const cards = [
    { title: 'ERP & CRM Systems', icon: <Building2 className="text-blue-500" /> },
    { title: 'Cloud-Native Apps', icon: <Cloud className="text-purple-500" /> },
    { title: 'Security & Compliance', icon: <ShieldCheck className="text-orange-500" /> },
    { title: 'System Integration', icon: <Layers className="text-indigo-500" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              What Is <span className="text-accent">Enterprise Application</span> Development?
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Enterprise application development involves designing and deploying large-scale software systems that manage mission-critical business processes across departments, regions, and global teams.
              </p>
              <p>
                Unlike standard applications, enterprise systems must support high user concurrency, complex integrations, advanced data governance, regulatory compliance, and long-term scalability. Our <a href="#" className="text-blue-600 font-semibold hover:underline">custom software development</a> expertise ensures every enterprise solution is tailored to your unique business requirements.
              </p>
              <p>
                Enterprise software must function as strategic infrastructure — not just a digital tool. From large-scale ERP platforms to <a href="#" className="text-blue-600 font-semibold hover:underline">cloud-native web applications</a>, we design systems built for resilience and performance at scale.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-3xl">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-slate-800 text-lg">{card.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const stats = [
    { value: '14+', label: 'Years Experience' },
    { value: '1000+', label: 'Enterprise Projects' },
    { value: '3', label: 'Cloud Platforms' },
    { value: 'GDPR', label: 'Compliance Ready' },
  ];

  const points = [
    'Custom ERP, CRM, HR & supply chain management systems',
    'Enterprise web apps — React, Next.js, Node.js, microservices',
    'Cloud deployment — AWS, Azure, Google Cloud with auto-scaling',
    'System integration — ERP, CRM, payments, analytics & legacy',
    'Security — RBAC, MFA, encryption, secure APIs, GDPR compliance',
  ];

  return (
    <section className="py-24 bg-purple-main text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
                <div className="text-4xl md:text-5xl font-display font-extrabold text-accent mb-2">{stat.value}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Our Enterprise <span className="text-accent">Capabilities</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              We build enterprise-grade systems across the full stack:
            </p>
            <ul className="space-y-4">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span className="text-lg text-white/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Custom Enterprise Software',
      desc: 'Tailored ERP, CRM, HR, supply chain, and business intelligence systems designed around your operational architecture and scalability goals.',
    },
    {
      id: '02',
      title: 'Enterprise Web Applications',
      desc: 'Secure, responsive web apps using React, Next.js, Node.js, and microservices with modular architecture for flexibility.',
    },
    {
      id: '03',
      title: 'Cloud Enterprise Apps',
      desc: 'AWS, Azure & GCP deployment with auto-scaling, high availability, disaster recovery, global accessibility, and secure governance.',
    },
    {
      id: '04',
      title: 'System Integration',
      desc: 'Seamless integration with ERP, CRM, payment systems, analytics, third-party APIs, and legacy systems for cross-departmental data flow.',
    },
    {
      id: '05',
      title: 'Security & Compliance',
      desc: 'RBAC, multi-factor authentication, data encryption, secure API gateways, and GDPR-aligned architecture built into every layer.',
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Our Enterprise <span className="text-accent">Development Services</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From custom software to cloud-native enterprise solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              whileHover={{ y: -5 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-display font-black text-primary">{service.id}</span>
              </div>
              <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold mb-6">
                {service.id}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    { id: 1, title: 'Discovery' },
    { id: 2, title: 'Architecture' },
    { id: 3, title: 'Risk Assessment' },
    { id: 4, title: 'Agile Dev' },
    { id: 5, title: 'Integration' },
    { id: 6, title: 'Enterprise QA' },
    { id: 7, title: 'Deploy' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Our Enterprise <span className="text-accent">Development Methodology</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            This lifecycle-based framework reduces risk, improves predictability, and ensures long-term stability.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white border-2 border-blue-100 rounded-2xl flex items-center justify-center shadow-md group-hover:border-blue-500 group-hover:bg-blue-50 transition-all duration-300">
                    <span className="font-display font-bold text-slate-800">{step.title}</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.id}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-blue-200 hidden lg:block">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
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
    'Business-aligned enterprise architecture',
    'Cloud-native scalable solutions',
    'Security-first engineering approach',
    'Cross-system integration expertise',
    'Transparent governance & reporting',
    'Long-term enterprise support model',
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Why Choose <span className="text-accent">mTouch Labs</span>?
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            We operate as a digital transformation partner — not just a software vendor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-full shadow-sm border border-slate-100">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-lg font-semibold text-slate-800">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: 'eCommerce & Retail', icon: <ShoppingCart className="text-blue-500" /> },
    { name: 'Healthcare & HealthTech', icon: <HeartPulse className="text-red-500" /> },
    { name: 'FinTech & Banking', icon: <Banknote className="text-green-500" /> },
    { name: 'Manufacturing & Supply Chain', icon: <Factory className="text-orange-500" /> },
    { name: 'Education & EdTech', icon: <GraduationCap className="text-purple-500" /> },
    { name: 'Government & Public Sector', icon: <Building2 className="text-indigo-500" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Industries We <span className="text-accent">Serve</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-6 hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm text-4xl">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-800">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const tags = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Python',
    'Microservices', 'AWS', 'Azure', 'Google Cloud', 'REST APIs', 'GraphQL',
    'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'Terraform',
    'CI/CD', 'Kafka'
  ];

  const cards = [
    { title: '3', label: 'Cloud Platforms', icon: <Cloud className="text-blue-500" /> },
    { title: 'MSA', label: 'Microservices', icon: <Layers className="text-purple-500" /> },
    { title: 'API', label: 'REST & GraphQL', icon: <Code2 className="text-indigo-500" /> },
    { title: 'CI/CD', label: 'DevOps Pipeline', icon: <Cpu className="text-orange-500" /> },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Enterprise Software <span className="text-accent">Development Stack</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Modern frameworks and cloud platforms for enterprise-grade solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="bg-white px-4 py-2 rounded-full border border-slate-200 text-slate-700 font-semibold text-sm shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 text-center shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl font-display font-black text-blue-600 mb-2">{card.title}</div>
                <div className="text-slate-800 font-bold mb-1">{card.label}</div>
                <div className="text-slate-500 text-sm">{card.title === '3' ? 'Cloud Platforms' : card.title === 'MSA' ? 'Microservices' : card.title === 'API' ? 'REST & GraphQL' : 'DevOps Pipeline'}</div>
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
    {
      q: 'What does an enterprise application development company do?',
      a: 'An enterprise application development company designs, builds, and deploys large-scale software systems that manage mission-critical business processes across departments, regions, and global teams. This includes ERP, CRM, HR, and supply chain management systems.',
    },
    {
      q: 'How is enterprise software different from traditional applications?',
      a: 'Enterprise software is built for scale, security, and integration. It handles high user concurrency, complex data governance, regulatory compliance (like GDPR), and must integrate seamlessly with existing legacy systems and third-party APIs.',
    },
    {
      q: 'Do you provide cloud-based enterprise development?',
      a: 'Yes, we specialize in cloud-native enterprise solutions using AWS, Azure, and Google Cloud. We ensure high availability, auto-scaling, disaster recovery, and global accessibility for all our enterprise applications.',
    },
    {
      q: 'How long does enterprise application development take?',
      a: 'The timeline varies based on complexity, but a typical enterprise project can range from 4 to 12 months. We use an agile development methodology to provide predictable milestones and ensure long-term stability.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Frequently Asked <span className="text-accent">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg">Everything about enterprise application development</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-lg font-bold text-slate-800">{faq.q}</span>
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
                    <div className="p-6 pt-0 text-slate-600 text-lg leading-relaxed border-t border-slate-100">
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

const CTA = () => {
  return (
    <section className="py-24 bg-purple-main text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-white rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight">
          Build Your <span className="text-accent">Enterprise Solution</span>
        </h2>
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Let's discuss how we can architect enterprise software that scales with your business.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-accent hover:bg-orange-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-2xl transition-all"
        >
          Start Your Enterprise Project
        </motion.button>
      </div>
    </section>
  );
};

// --- Main App ---

export default function EnterpriseApplicationDevelopment() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIs />
      <Capabilities />
      <Services />
      <Methodology />
      <WhyChoose />
      <Industries />
      <TechStack />
      <FAQ />
      <CTA />
    </div>
  );
}
