import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {  
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Lock, 
  Cloud, 
  Search, 
  Plus, 
  Minus,
  MapPin,
  Award
} from 'lucide-react';

// --- Constants & Types ---

const PRIMARY_PURPLE = '#7B2CBF';
const ACCENT_ORANGE = '#7B2CBF';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 px-4 md:px-12 bg-[#0F172A] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-6"
        >
          Home / Services / Cyber Security
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          Enterprise <span className="text-yellow-500">Cyber Security</span> Services
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-3xl text-white/90 font-medium mb-8"
        >
          Secure Application Development & Infrastructure Protection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed mb-12"
        >
          WorkHolo Labs delivers advanced Cyber Security Services designed to protect digital assets, 
          secure enterprise infrastructure, and ensure compliance in today's evolving threat landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <button 
            style={{ backgroundColor: PRIMARY_PURPLE }}
            className="w-full md:w-auto text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Get a Free Security Assessment
          </button>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="#" className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

const CriticalSection = () => {
  const cards = [
    { icon: <Shield className="text-blue-500" />, title: "Data Protection", desc: "Ensuring your sensitive information is encrypted and secure." },
    { icon: <Lock className="text-purple-500" />, title: "Compliance & Governance", desc: "Meeting industry standards like GDPR, HIPAA, and SOC2." },
    { icon: <Cloud className="text-cyan-500" />, title: "Cloud Security", desc: "Protecting your cloud infrastructure across AWS, Azure, and GCP." },
    { icon: <Search className="text-orange-500" />, title: "Threat Detection", desc: "Real-time monitoring and rapid response to potential breaches." },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Why <span className="text-yellow-500">Cyber Security</span> Is Critical
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            With increasing digital adoption, organizations face risks such as data breaches, ransomware attacks, phishing, cloud vulnerabilities, API security risks, and insider threats.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            A proactive cyber security strategy ensures data protection, business continuity, regulatory compliance, customer trust, and risk mitigation. Our <span className="text-blue-600 font-semibold underline">cloud security services</span> provide comprehensive protection across all major cloud platforms.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We integrate security into every stage of development — from secure architecture design to <span className="text-blue-600 font-semibold underline">cloud infrastructure</span> protection and continuous threat monitoring with our <span className="text-blue-600 font-semibold underline">DevOps integration</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const stats = [
    { value: "14+", label: "Years of Experience" },
    { value: "200+", label: "Security Audits" },
    { value: "100%", label: "Compliance Rate" },
    { value: "24/7", label: "Threat Monitoring" },
  ];

  const points = [
    "Secure Application Development (DevSecOps)",
    "Cloud Security — AWS, Azure & GCP configuration & IAM",
    "Penetration Testing & Vulnerability Assessment",
    "Network & Infrastructure Security — Firewall, IDS/IPS, VPN",
    "Data Protection & Compliance — GDPR, encryption, disaster recovery",
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm text-center border border-slate-100">
              <div className="text-5xl font-black text-blue-600 mb-2">{stat.value}</div>
              <div className="text-slate-500 font-semibold text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            Our Security <span className="text-yellow-500">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            We provide comprehensive cyber security services across the full stack:
          </p>
          <ul className="space-y-5">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle2 className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={20} />
                <span className="text-lg text-slate-700 font-medium">{point}</span>
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
      title: "DevSecOps & Secure Development",
      desc: "Secure coding practices, code vulnerability analysis, dependency checks, API security, and continuous security integration."
    },
    {
      id: "02",
      title: "Cloud Security Solutions",
      desc: "AWS, Azure & GCP security configuration, identity & access management, encryption strategies, and compliance audits."
    },
    {
      id: "03",
      title: "Penetration Testing",
      desc: "Web & mobile app penetration testing, network vulnerability scanning, risk assessment, and remediation guidance."
    },
    {
      id: "04",
      title: "Network & Infrastructure Security",
      desc: "Firewall configuration, endpoint protection, intrusion detection systems (IDS/IPS), and secure VPN setup."
    },
    {
      id: "05",
      title: "Data Protection & Compliance",
      desc: "GDPR-aligned data handling, role-based access control, encryption at rest & in transit, and backup & disaster recovery planning."
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Our Cyber <span className="text-yellow-500">Security Services</span>
          </h2>
          <p className="text-xl text-slate-500">End-to-end security solutions from code to cloud</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(0, 4).map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mb-6">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mb-6">
              {services[4].id}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{services[4].title}</h3>
            <p className="text-slate-600 leading-relaxed">{services[4].desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ApproachSection = () => {
  const steps = [
    { id: 1, title: "Risk Assessment" },
    { id: 2, title: "Threat Modeling" },
    { id: 3, title: "Secure Design" },
    { id: 4, title: "Implementation" },
    { id: 5, title: "Compliance Validation" },
    { id: 6, title: "Monitoring & Response" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Our Security <span className="text-yellow-500">Development Approach</span>
        </h2>
        <p className="text-xl text-slate-500 mb-16 max-w-3xl mx-auto">
          This structured methodology ensures enterprise-grade security with measurable risk reduction.
        </p>

        <div className="relative flex flex-wrap justify-center gap-4">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-100 -translate-y-1/2 hidden lg:block z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 w-full md:w-[200px] flex flex-col items-center"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold absolute -top-4 right-4">
                {step.id}
              </div>
              <div className="text-slate-800 font-bold text-center leading-tight">
                {step.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const tags = [
    "Security-first development approach",
    "Integrated DevSecOps methodology",
    "Cloud-native security expertise",
    "Continuous monitoring & reporting",
    "Enterprise-grade compliance frameworks",
    "Risk-based security strategy"
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
          Why Choose <span className="text-yellow-500">WorkHolo Labs</span>?
        </h2>
        <p className="text-xl text-slate-500 mb-12 max-w-3xl mx-auto">
          We combine technical expertise with strategic consulting to deliver long-term cyber resilience.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((tag, idx) => (
            <div key={idx} className="px-8 py-3 bg-white border border-slate-200 rounded-full shadow-sm flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-slate-700 font-medium">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { icon: "💰", title: "FinTech & Banking" },
    { icon: "🏥", title: "Healthcare & HealthTech" },
    { icon: "🛒", title: "eCommerce Platforms" },
    { icon: "🚀", title: "SaaS & Enterprise Software" },
    { icon: "🏠", title: "Real Estate & Digital Platforms" },
    { icon: "🏭", title: "Manufacturing & Supply Chain" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-16">
          Industries We <span className="text-yellow-500">Serve</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-6">{ind.icon}</div>
              <h3 className="text-xl font-bold text-slate-800">{ind.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolsSection = () => {
  const tools = [
    "OWASP STANDARDS", "SIEM TOOLS", "AWS SECURITY HUB", "AZURE SECURITY CENTER",
    "GCP SECURITY", "SSL/TLS", "AES ENCRYPTION", "DEVSECOPS CI/CD", "IAM",
    "VAULT", "SONARQUBE", "TRIVY", "SNYK", "BURP SUITE", "NESSUS", "SPLUNK",
    "CLOUDTRAIL", "TERRAFORM"
  ];

  const stats = [
    { value: "3", label: "Cloud Platforms", color: "text-blue-600" },
    { value: "OWASP", label: "Security Standards", color: "text-blue-600" },
    { value: "E2E", label: "Encryption", color: "text-blue-600" },
    { value: "24/7", label: "Threat Monitoring", color: "text-blue-600" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            Security Tools <span className="text-yellow-500">We Work With</span>
          </h2>
          <p className="text-xl text-slate-500 mb-10">
            Enterprise-grade security tools and frameworks for comprehensive protection.
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, idx) => (
              <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest rounded-lg border border-blue-100">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center flex flex-col justify-center">
              <div className={`text-5xl font-black ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-slate-500 font-bold text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExecutivesSection = () => {
  const executives = [
    { name: "John Doe", role: "Chief Executive Officer", image: "https://picsum.photos/seed/exec1/300/300" },
    { name: "Jane Smith", role: "Chief Security Officer", image: "https://picsum.photos/seed/exec2/300/300" },
    { name: "Robert Wilson", role: "Head of Infrastructure", image: "https://picsum.photos/seed/exec3/300/300" },
    { name: "Sarah Chen", role: "VP of Engineering", image: "https://picsum.photos/seed/exec4/300/300" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-16">
          Our <span className="text-yellow-500">Executives</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((exec, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square">
                <img src={exec.image} alt={exec.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{exec.name}</h3>
              <p className="text-slate-500 font-medium">{exec.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CareersSection = () => {
  const jobs = [
    { title: "Senior Cyber Security Analyst", location: "Hyderabad, India", type: "Full Time" },
    { title: "Cloud Security Engineer (AWS/Azure)", location: "Bangalore, India", type: "Remote" },
    { title: "Penetration Tester", location: "USA", type: "Full Time" },
    { title: "DevSecOps Specialist", location: "Hyderabad, India", type: "Full Time" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Joint <span className="text-yellow-500">Talent</span> & Careers
            </h2>
            <p className="text-xl text-slate-500">
              We are always looking for passionate security experts to join our global team and help build a safer digital world.
            </p>
          </div>
          <button className="mt-8 lg:mt-0 px-8 py-3 bg-blue-600 text-white rounded-full font-bold flex items-center hover:bg-blue-700 transition-colors">
            View All Openings <ArrowRight size={18} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: 10 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center group cursor-pointer"
            >
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-slate-500 text-sm">
                    <span className="flex items-center"><MapPin size={14} className="mr-1" /> {job.location}</span>
                    <span className="flex items-center"><Globe size={14} className="mr-1" /> {job.type}</span>
                  </div>
                </div>
              </div>
              <button className="px-6 py-2 border-2 border-slate-200 rounded-full text-slate-600 font-bold group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">
                Apply Now
              </button>
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
    { q: "What are cyber security services?", a: "Cyber security services encompass a range of solutions designed to protect digital assets, networks, and systems from unauthorized access, attacks, and data breaches. This includes everything from threat detection to compliance management." },
    { q: "Does WorkHolo Labs provide secure application development?", a: "Yes, we integrate security into the entire software development lifecycle (SDLC) using DevSecOps practices, ensuring that security is a core component of your application from day one." },
    { q: "How often should security audits be conducted?", a: "We recommend conducting comprehensive security audits at least annually, or whenever significant changes are made to your infrastructure or applications to ensure ongoing protection." },
    { q: "Do you provide cloud security services?", a: "Absolutely. We specialize in securing cloud environments across AWS, Azure, and Google Cloud Platform, focusing on IAM, data encryption, and network security." }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </h2>
          <p className="text-xl text-slate-500">Everything you need to know about our security services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-800">{faq.q}</span>
                {openIdx === idx ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
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

const CTASection = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8">
          Secure Your <span className="text-yellow-500">Digital Assets</span> Today
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how our cyber security services can protect your business from threats and ensure compliance.
        </p>
        <button 
          style={{ backgroundColor: ACCENT_ORANGE }}
          className="text-white px-12 py-5 rounded-xl font-black text-xl hover:scale-105 transition-transform shadow-2xl"
        >
          Get a Free Security Assessment
        </button>
      </div>
    </section>
  );
};

export default function CyberSecurityServices() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-200 selection:text-purple-900">
      <main>
        <Hero />
        <CriticalSection />
        <ExpertiseSection />
        <ServicesSection />
        <ApproachSection />
        <WhyChooseSection />
        <IndustriesSection />
        <ToolsSection />
        <ExecutivesSection />
        <CareersSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
}
