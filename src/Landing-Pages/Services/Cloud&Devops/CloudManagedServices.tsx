import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  Monitor, 
  Settings, 
  ShieldCheck, 
  TrendingUp,
  Database,
  CheckCircle2,
  Plus,
  Minus
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 bg-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 text-white/60 mb-6 text-sm font-medium uppercase tracking-[0.2em]">
            <span>Home</span> <ChevronDown size={12} className="-rotate-90" /> <span>Services</span> <ChevronDown size={12} className="-rotate-90" /> <span className="text-accent-orange">Cloud Managed Services</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
            Cloud <span className="text-accent-orange">Managed</span> Services
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed">
            Proactive Cloud Operations & Continuous Infrastructure Management. WorkHolo Labs provides comprehensive Cloud Managed Services designed to ensure continuous performance, operational stability, and long-term scalability of cloud environments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/30">
              Get Started
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-full text-lg font-bold transition-all">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const WhatIsCloud = () => {
  const cards = [
    { title: '24/7 Monitoring', icon: <Monitor className="text-accent-blue" />, desc: 'Continuous oversight of your cloud assets.' },
    { title: 'Performance Tuning', icon: <TrendingUp className="text-accent-orange" />, desc: 'Optimizing resources for peak efficiency.' },
    { title: 'Cost Optimization', icon: <Database className="text-green-400" />, desc: 'Reducing overhead and cloud spend.' },
    { title: 'Security Governance', icon: <ShieldCheck className="text-red-400" />, desc: 'Ensuring compliance and data protection.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            What Are <span className="text-accent-orange">Cloud Managed</span> Services?
          </h2>
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Cloud managed services involve the continuous monitoring, maintenance, and optimization of cloud infrastructure after deployment — including infrastructure monitoring, resource optimization, security management, backup & recovery, incident response, and cost governance.
            </p>
            <p>
              Without structured management, performance inefficiencies, cost overruns, and security gaps can arise. Our <span className="text-accent-blue font-semibold">cloud services</span> combined with managed operations ensure end-to-end infrastructure excellence.
            </p>
            <p>
              Paired with <span className="text-accent-blue font-semibold">cloud security governance</span>, we maintain resilient environments that adapt to evolving business demands.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-500 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const stats = [
    { value: '99.9%', label: 'Infrastructure Uptime' },
    { value: '24/7', label: 'Active Monitoring' },
    { value: '4hr', label: 'Response Time' },
    { value: '30%', label: 'Avg Cost Savings' },
  ];

  const features = [
    '24/7 infrastructure monitoring — server health, uptime & traffic',
    'Performance & cost optimization — scaling, forecasting & efficiency',
    'Backup & disaster recovery — automated scheduling & failover',
    'Security monitoring & governance — access control & compliance',
    'Incident management — diagnosis, root cause & resolution tracking',
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="text-4xl md:text-5xl font-black text-accent-blue mb-2">{stat.value}</div>
              <div className="text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Our Managed <span className="text-accent-orange">Capabilities</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10">Proactive cloud operations across all dimensions:</p>
          <ul className="space-y-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={16} className="text-accent-orange" />
                </div>
                <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ManagedServices = () => {
  const services = [
    {
      id: '01',
      title: '24/7 Infrastructure Monitoring',
      desc: 'Server health & uptime monitoring, network performance tracking, resource utilization analysis, application responsiveness checks, and traffic load pattern analysis.'
    },
    {
      id: '02',
      title: 'Performance & Cost Optimization',
      desc: 'Resource scaling adjustments, capacity forecasting, unused resource elimination, cost allocation analysis, and performance benchmarking balancing cost and output.'
    },
    {
      id: '03',
      title: 'Backup & Disaster Recovery',
      desc: 'Automated backup scheduling, recovery validation testing, business continuity planning, redundancy configuration, and failover management.'
    },
    {
      id: '04',
      title: 'Security & Governance',
      desc: 'Access control management, policy enforcement, threat detection, compliance validation, and security patch coordination safeguarding integrity.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Our Managed <span className="text-accent-orange">Services</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Continuous operations for cloud excellence</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-blue text-white flex items-center justify-center font-bold text-lg mb-8 group-hover:scale-110 transition-transform">
              {service.id}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Framework = () => {
  const steps = [
    { id: 1, name: 'Onboarding' },
    { id: 2, name: 'Monitoring Setup' },
    { id: 3, name: 'Governance' },
    { id: 4, name: 'Performance Tuning' },
    { id: 5, name: 'Optimization' },
    { id: 6, name: 'Strategic Review' },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Our Managed Services <span className="text-accent-orange">Framework</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Structured management ensures consistent performance.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white font-bold text-xl mb-6 shadow-xl relative ${idx % 2 === 0 ? 'bg-accent-blue' : 'bg-primary'}`}
              >
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-slate-900 rounded-full flex items-center justify-center text-sm shadow-md">
                  {step.id}
                </div>
                <Settings size={32} />
              </motion.div>
              <h4 className="text-center font-bold text-slate-800 text-sm uppercase tracking-wider">{step.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const reasons = [
    'Proactive infrastructure management',
    'Enterprise-grade monitoring systems',
    'Security-first governance models',
    'Cost optimization expertise',
    'Continuous improvement methodology',
    'Scalable global support'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
          Why Choose WorkHolo Labs for <span className="text-accent-orange">Managed Services</span>?
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
          We manage cloud environments with operational discipline and performance focus.
        </p>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {reasons.map((reason, idx) => (
            <div key={idx} className="px-8 py-4 rounded-full bg-slate-50 border border-slate-100 text-slate-700 font-semibold flex items-center gap-3 shadow-sm hover:shadow-md transition-all cursor-default">
              <div className="w-2 h-2 rounded-full bg-accent-orange" />
              {reason}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: 'SaaS & Technology', icon: <Monitor className="text-accent-blue" /> },
    { name: 'Financial Services', icon: <Database className="text-accent-blue" /> },
    { name: 'Healthcare Organizations', icon: <ShieldCheck className="text-accent-blue" /> },
    { name: 'eCommerce Businesses', icon: <TrendingUp className="text-accent-blue" /> },
    { name: 'Enterprise B2B', icon: <Settings className="text-accent-blue" /> },
    { name: 'Data & Analytics', icon: <Monitor className="text-accent-blue" /> },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Industries We <span className="text-accent-orange">Serve</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="p-12 rounded-[40px] bg-white shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all text-center flex flex-col items-center group"
          >
            <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {industry.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{industry.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Technologies = () => {
  const techs = [
    'AWS', 'Azure', 'Google Cloud', 'CloudWatch', 'Datadog', 'Prometheus',
    'Grafana', 'PagerDuty', 'Terraform', 'Ansible', 'Docker', 'Kubernetes',
    'ELK Stack', 'New Relic', 'Splunk', 'Nagios', 'Jenkins', 'CI/CD'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Cloud <span className="text-accent-orange">Managed Technologies</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Enterprise monitoring, automation, and cloud management tools.
          </p>
          <div className="flex flex-wrap gap-3">
            {techs.map((tech, idx) => (
              <span key={idx} className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-sm font-bold hover:bg-slate-100 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            { v: '18+', l: 'Management Tools' },
            { v: '24/7', l: 'Active Monitoring' },
            { v: '99.9%', l: 'Uptime SLA' },
            { v: 'SLA', l: 'Response Guarantee' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-3xl text-center border border-slate-100">
              <div className="text-4xl font-black text-accent-blue mb-2">{item.v}</div>
              <div className="text-slate-500 font-medium text-sm">{item.l}</div>
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
    { q: 'What are cloud managed services?', a: 'Cloud managed services involve the continuous monitoring, maintenance, and optimization of cloud infrastructure after deployment.' },
    { q: 'Do managed services include 24/7 monitoring?', a: 'Yes, our core offering includes round-the-clock monitoring of all infrastructure components to ensure maximum uptime.' },
    { q: 'How do managed services reduce costs?', a: 'By identifying unused resources, optimizing scaling policies, and providing capacity forecasting to prevent over-provisioning.' },
    { q: 'Are managed services suitable for enterprises?', a: 'Absolutely. We provide enterprise-grade SLAs, security governance, and scalable support models tailored for large-scale operations.' }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Frequently Asked <span className="text-accent-orange">Questions</span>
        </h2>
        <p className="text-lg text-slate-500">Everything about cloud managed services</p>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
            >
              <span className="text-lg font-bold text-slate-800">{faq.q}</span>
              {openIndex === idx ? <Minus size={20} className="text-accent-orange" /> : <Plus size={20} className="text-accent-orange" />}
            </button>
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-8 pb-6 text-slate-600 leading-relaxed"
                >
                  {faq.a}
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
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-blue rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
          Need Proactive <span className="text-accent-orange">Cloud Management</span>?
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how our managed services can ensure your cloud infrastructure runs at peak performance.
        </p>
        <button className="bg-accent-orange hover:bg-accent-orange/90 text-white px-12 py-5 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-accent-orange/20">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default function CloudManagedServices() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhatIsCloud />
        <Capabilities />
        <ManagedServices />
        <Framework />
        <WhyChoose />
        <Industries />
        <Technologies />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
