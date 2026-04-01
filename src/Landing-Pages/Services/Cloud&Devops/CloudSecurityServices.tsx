import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {  
  ChevronDown, 
  CheckCircle2, 
  Lock,  
  FileCheck, 
  Activity, 
  Users,  
  CreditCard, 
  Stethoscope, 
  Layout, 
  ShoppingCart, 
  Building2, 
  Cpu,
  MessageCircle,
  ArrowUp,
  Globe
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] mb-6 opacity-80">
            <span className="w-8 h-[1px] bg-white" />
            Home / Services / <span className="text-brand-orange">Cloud Security</span>
            <span className="w-8 h-[1px] bg-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1]">
            Cloud <span className="text-brand-orange">Security</span> Services
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-8 text-white/90">
            Protecting Cloud Environments with Advanced Security & Compliance Frameworks
          </p>
          <p className="max-w-3xl mx-auto text-lg text-white/70 leading-relaxed mb-12">
            mTouch Labs provides enterprise-grade Cloud Security Services designed to safeguard cloud infrastructure, applications, and data against evolving cyber threats. Cloud performance means nothing without cloud protection.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const WhatIsSection = () => {
  const cards = [
    { icon: <Activity size={24} />, title: "Threat Monitoring", color: "text-blue-400" },
    { icon: <Users size={24} />, title: "IAM & Access Control", color: "text-orange-400" },
    { icon: <FileCheck size={24} />, title: "Compliance Governance", color: "text-purple-400" },
    { icon: <Lock size={24} />, title: "Data Encryption", color: "text-yellow-400" },
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">
            What Are <span className="text-brand-orange">Cloud Security</span> Services?
          </h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              Cloud security services involve implementing protective controls, monitoring systems, and governance frameworks to secure cloud-based infrastructure and applications — including identity management, data encryption, security audits, threat detection, and compliance monitoring.
            </p>
            <p>
              As organizations scale across <span className="text-brand-orange font-semibold">cloud platforms</span>, security risks expand in complexity. Misconfigurations, unauthorized access, and compliance gaps can expose sensitive systems.
            </p>
            <p>
              Our security approach integrates with <span className="text-brand-blue font-semibold underline decoration-2 underline-offset-4">DevOps pipelines</span> through DevSecOps, ensuring protection is embedded at every stage of development and deployment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4"
            >
              <div className={`${card.color} mb-2`}>{card.icon}</div>
              <h3 className="font-bold text-sm uppercase tracking-wider">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CapabilitiesSection = () => {
  const stats = [
    { value: "1500+", label: "Security Projects", color: "text-blue-400" },
    { value: "GDPR", label: "Compliance Ready", color: "text-blue-400" },
    { value: "24/7", label: "Threat Monitoring", color: "text-blue-400" },
    { value: "0", label: "Security Breaches", color: "text-blue-400" },
  ];

  const list = [
    "Cloud risk assessment & security audits",
    "Identity & access management (IAM) — RBAC, MFA, PAM",
    "Data protection & encryption at rest and in transit",
    "Threat monitoring & incident detection systems",
    "DevSecOps integration — automated scanning & compliance",
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-10 rounded-2xl text-center">
              <div className={`text-5xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8">
            Our Security <span className="text-brand-orange">Capabilities</span>
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Comprehensive cloud protection across all layers:
          </p>
          <ul className="space-y-6">
            {list.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-orange shrink-0 mt-1" size={20} />
                <span className="text-white/80 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Risk Assessment & Audits",
      desc: "Configuration vulnerability scanning, access control analysis, exposure risk identification, compliance gap assessment, and network security evaluation with actionable improvement plans."
    },
    {
      id: "02",
      title: "Identity & Access Management",
      desc: "Role-based access control (RBAC), multi-factor authentication (MFA), privileged access governance, and policy-based authorization models strengthening operational security."
    },
    {
      id: "03",
      title: "Data Protection & Encryption",
      desc: "Encryption at rest and in transit, secure key management, data masking strategies, and backup encryption validation protecting data integrity across workloads."
    },
    {
      id: "04",
      title: "Threat Monitoring & Detection",
      desc: "Security monitoring systems, intrusion detection mechanisms, log analysis frameworks, and real-time alerting models for early threat detection and minimized impact."
    },
    {
      id: "05",
      title: "Compliance & Governance",
      desc: "Policy documentation, compliance alignment, regulatory reporting, security governance frameworks, and continuous compliance validation ensuring audit readiness at all times."
    }
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Our Cloud Security <span className="text-brand-orange">Services</span>
          </h2>
          <p className="text-white/60 uppercase tracking-[0.2em] font-bold text-sm">
            From risk assessment to continuous governance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-3xl relative overflow-hidden group"
            >
              <div className="bg-brand-blue text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold mb-6">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FrameworkSection = () => {
  const steps = [
    { id: 1, label: "Assessment" },
    { id: 2, label: "Risk Mitigation" },
    { id: 3, label: "Controls" },
    { id: 4, label: "Monitoring" },
    { id: 5, label: "Compliance" },
    { id: 6, label: "Review" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Our Cloud Security <span className="text-brand-orange">Framework</span>
        </h2>
        <p className="text-white/60 mb-20 text-lg">Structured execution ensures long-term resilience.</p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="relative group">
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center text-[10px] font-bold z-10">
                  {step.id}
                </div>
                <div className="glass-card px-8 py-10 rounded-2xl w-36 h-36 flex items-center justify-center text-center font-bold text-sm border-2 border-transparent group-hover:border-brand-blue transition-all">
                  {step.label}
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block w-8 h-[2px] bg-brand-blue/30" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const reasons = [
    "Security-first architecture methodology",
    "Enterprise compliance expertise",
    "Multi-cloud protection capability",
    "Continuous monitoring systems",
    "Risk-based governance models",
    "DevOps & cloud integration",
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Why Choose mTouch Labs for <span className="text-brand-orange">Cloud Security</span>?
        </h2>
        <p className="text-white/60 mb-16 text-lg">We secure cloud environments with precision and discipline.</p>

        <div className="flex flex-wrap justify-center gap-4">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-white/10 px-8 py-4 rounded-full border border-white/10 flex items-center gap-3 hover:bg-white/20 transition-all cursor-default">
              <div className="w-2 h-2 bg-brand-orange rounded-full" />
              <span className="font-semibold text-sm">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { icon: <CreditCard size={32} />, title: "Financial Services" },
    { icon: <Stethoscope size={32} />, title: "Healthcare Organizations" },
    { icon: <Layout size={32} />, title: "SaaS Platforms" },
    { icon: <ShoppingCart size={32} />, title: "eCommerce Enterprises" },
    { icon: <Building2 size={32} />, title: "Enterprise B2B" },
    { icon: <Cpu size={32} />, title: "Data-Driven Organizations" },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Industries We <span className="text-brand-orange">Serve</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-12 rounded-3xl flex flex-col items-center text-center gap-6 group"
            >
              <div className="text-brand-blue group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologiesSection = () => {
  const tags = [
    "AWS IAM", "Azure AD", "GCP IAM", "AWS GuardDuty", "Azure Sentinel",
    "CloudTrail", "AWS KMS", "Vault", "SonarQube", "Trivy", "Snyk",
    "OWASP", "Terraform", "Ansible", "Prometheus", "Grafana", "Splunk", "ELK Stack"
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-8">
            Cloud <span className="text-brand-orange">Security Technologies</span>
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Enterprise security tools and cloud-native protection platforms.
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, idx) => (
              <span key={idx} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="glass-card p-10 rounded-2xl text-center">
            <div className="text-4xl font-extrabold text-brand-blue mb-2">18+</div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Security Tools</div>
          </div>
          <div className="glass-card p-10 rounded-2xl text-center">
            <div className="text-4xl font-extrabold text-brand-blue mb-2">GDPR</div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Compliance</div>
          </div>
          <div className="glass-card p-10 rounded-2xl text-center">
            <div className="text-4xl font-extrabold text-brand-blue mb-2">24/7</div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Threat Monitoring</div>
          </div>
          <div className="glass-card p-10 rounded-2xl text-center">
            <div className="text-4xl font-extrabold text-brand-blue mb-2">IAM</div>
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">Access Control</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "What are cloud security services?", a: "Cloud security services are a suite of tools and processes designed to protect cloud-based infrastructure, applications, and data from cyber threats, ensuring compliance and data integrity." },
    { q: "How do cloud security services reduce risk?", a: "They reduce risk by identifying vulnerabilities, enforcing strict access controls, encrypting sensitive data, and providing continuous monitoring to detect and respond to threats in real-time." },
    { q: "Are services necessary for multi-cloud environments?", a: "Yes, multi-cloud environments increase complexity and the attack surface. Specialized security services provide a unified security posture across different cloud providers like AWS, Azure, and GCP." },
    { q: "Can cloud security support compliance requirements?", a: "Absolutely. Most cloud security frameworks are built around major compliance standards like GDPR, HIPAA, and SOC2, helping organizations automate compliance reporting and audits." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="text-white/60">Everything about cloud security</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left font-bold"
              >
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-white/60 leading-relaxed"
                  >
                    {faq.a}
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

const CTASection = () => {
  return (
    <section className="py-24 bg-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-brand-blue/5 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-8">
          Secure Your <span className="text-brand-orange">Cloud Environment</span>
        </h2>
        <p className="text-xl text-white/70 mb-12">
          Let's discuss how our security services can protect your cloud infrastructure and ensure compliance.
        </p>
        <button className="bg-brand-orange hover:bg-orange-600 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-orange-600/20">
          Get a Security Assessment
        </button>
      </div>
    </section>
  );
};

const GlobalPresence = () => {
  const regions = [
    { name: "INDIA", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
    { name: "AMERICAS", cities: ["United States", "Canada"] },
    { name: "EUROPE", cities: ["United Kingdom", "Germany", "Ireland"] },
    { name: "ASIA PACIFIC", cities: ["Singapore", "Australia", "New Zealand", "India"] },
    { name: "MIDDLE EAST", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] },
  ];

  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Globe className="text-brand-blue" size={32} />
          <h2 className="text-2xl font-bold">Global Presence</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {regions.map((region, idx) => (
            <div key={idx}>
              <h3 className="text-brand-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-blue rounded-full" /> {region.name}
              </h3>
              <ul className="space-y-4">
                {region.cities.map((city, cIdx) => (
                  <li key={cIdx} className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FloatingButtons = () => {
  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white relative group"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp Us</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shadow-2xl text-white"
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>

      <div className="fixed bottom-8 left-8 z-50">
        <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-2xl">
          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
            <MessageCircle size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">Let's Chat!</span>
            <span className="text-sm font-bold">WE ARE HERE!</span>
          </div>
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold">1</div>
        </div>
      </div>
    </>
  );
};

export default function CloudSecurityServices() {
  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <main>
        <Hero />
        <WhatIsSection />
        <CapabilitiesSection />
        <ServicesSection />
        <FrameworkSection />
        <WhyChooseSection />
        <IndustriesSection />
        <TechnologiesSection />
        <FAQSection />
        <CTASection />
        <GlobalPresence />
      </main>
      <FloatingButtons />
    </div>
  );
}
