import React, { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  Phone, 
  Globe, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Cloud, 
  Database, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Smartphone, 
  Settings, 
  BarChart3, 
  Search, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  Plus,
  Minus,
  Monitor,
  CreditCard,
  Stethoscope,
  ShoppingCart,
  Building2,
  Bot
} from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void, key?: React.Key }) => (
  <div className="border-b border-slate-200 last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
    >
      <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{question}</span>
      {isOpen ? <Minus className="text-blue-600" size={20} /> : <Plus className="text-slate-400 group-hover:text-blue-600" size={20} />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-slate-600 leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- Main Application ---

export default function App() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Top Bar */}
      <div className="bg-[#05070a] text-white py-2 px-4 md:px-12 flex flex-wrap justify-between items-center text-[11px] font-medium border-b border-white/10">
        <div className="flex items-center gap-6">
          <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={12} /> contact@mtouchlabs.com
          </a>
          <a href="tel:+919390683154" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={12} /> +91 9390683154
          </a>
          <a href="tel:+15512220070" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={12} /> +1 (551) 222-0070
          </a>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="text-yellow-500 font-bold">NASSCOM</span> SME Inspire Awards 2026 🏆
          </span>
          <div className="flex items-center gap-4 border-l border-white/20 pl-6">
            <span className="hover:text-blue-400 cursor-pointer">Hyderabad</span>
            <span className="hover:text-blue-400 cursor-pointer">Bangalore</span>
            <span className="hover:text-blue-400 cursor-pointer">USA</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300 px-4 md:px-12 py-4 flex items-center justify-between",
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-[#05070a]"
      )}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-black text-xl italic">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl tracking-tight">mTouch Labs</span>
            <span className="text-[8px] text-slate-400 uppercase tracking-widest font-bold">Certified Company</span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-8 text-sm font-semibold text-white">
          <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">Home <ChevronDown size={14} /></a>
          <a href="#" className="text-blue-400 flex items-center gap-1">Services <ChevronDown size={14} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">Products <ChevronDown size={14} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">Resources <ChevronDown size={14} /></a>
          <a href="#" className="hover:text-blue-400 transition-colors">Portfolio</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Careers</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a>
        </nav>

        <button className="bg-[#0095FF] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 group">
          Request Quote <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#05070a] pt-20 pb-32 px-4 md:px-12 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span className="text-slate-600">/</span>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <span className="text-slate-600">/</span>
            <span className="text-yellow-500">Cloud Migration</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]"
          >
            Cloud <span className="text-[#f59e0b]">Migration</span> Services
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 font-bold mb-8 max-w-4xl mx-auto"
          >
            Secure, Structured & Zero-Disruption Cloud Transformation
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed mb-12"
          >
            mTouch Labs delivers enterprise-grade cloud migration services that enable organizations to transition from legacy infrastructure to scalable cloud environments with minimal risk and operational disruption. Migration should improve efficiency, not introduce instability.
          </motion.p>
        </div>
      </section>

      {/* What Are Cloud Migration Services? */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              What Are <span className="text-[#f59e0b]">Cloud Migration</span> Services?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Cloud migration services involve transferring applications, databases, workloads, and infrastructure from on-premise or legacy systems to modern cloud environments — including infrastructure assessment, dependency mapping, risk mitigation, security validation, and post-migration optimization.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              The objective is to modernize systems while maintaining operational integrity. Our <a href="#" className="text-blue-600 font-bold hover:underline">comprehensive cloud services</a> provide the foundation for successful migration across all major platforms.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Post-migration, our <a href="#" className="text-blue-600 font-bold hover:underline">cloud managed services</a> ensure continuous performance optimization and <a href="#" className="text-blue-600 font-bold hover:underline">security governance</a>.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Layers className="text-blue-500" />, title: "Zero-Downtime Migration" },
              { icon: <Settings className="text-orange-500" />, title: "Infrastructure Modernization" },
              { icon: <Database className="text-purple-500" />, title: "Database Migration" },
              { icon: <ShieldCheck className="text-green-500" />, title: "Security Compliance" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-800 leading-tight">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Migration Capabilities */}
      <section className="py-24 px-4 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
            {[
              { val: "2000+", label: "Migrations Completed" },
              { val: "0", label: "Data Loss Incidents" },
              { val: "3", label: "Cloud Platforms" },
              { val: "99.9%", label: "Migration Uptime" }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl font-black text-blue-600 mb-2 tracking-tight">{stat.val}</div>
                <div className="text-slate-500 font-bold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Our Migration <span className="text-[#f59e0b]">Capabilities</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 font-medium">Structured migration across all workload types:</p>
            <ul className="space-y-5">
              {[
                "Infrastructure migration — servers, VMs & network to cloud",
                "Application migration — rehost, replatform & refactor",
                "Database migration — zero-downtime data transfer & validation",
                "Hybrid & multi-cloud migration strategies",
                "Security & compliance assurance throughout transition"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-orange-500 mt-1 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Migration Services */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Our Migration <span className="text-[#f59e0b]">Services</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium">From assessment to post-migration optimization</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              id: "01",
              title: "Infrastructure Migration",
              desc: "Physical servers to cloud environments, virtual machines to scalable instances, and network configurations to secure cloud architecture for improved flexibility."
            },
            {
              id: "02",
              title: "Application Migration",
              desc: "Rehosting (lift and shift), replatforming for optimization, refactoring legacy applications, and cloud-native transformation based on workload complexity."
            },
            {
              id: "03",
              title: "Database Migration",
              desc: "Structured and unstructured data transfer, zero-downtime database transitions, backup validation, and performance benchmarking preserving data integrity."
            },
            {
              id: "04",
              title: "Hybrid & Multi-Cloud Migration",
              desc: "Hybrid migration strategies, multi-cloud transition planning, phased migration execution, and disaster recovery alignment reducing downtime risks."
            },
            {
              id: "05",
              title: "Security & Compliance Assurance",
              desc: "Identity and access configuration, encryption validation, regulatory alignment, and security monitoring setup ensuring governance remains intact throughout migration."
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={cn(
                "bg-slate-50 p-10 rounded-2xl border border-slate-100 flex flex-col gap-6 transition-all",
                i === 4 && "md:col-span-2"
              )}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-black text-sm">
                {service.id}
              </div>
              <h3 className="text-2xl font-black text-slate-800">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Migration Methodology */}
      <section className="py-24 px-4 md:px-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Our Migration <span className="text-[#f59e0b]">Methodology</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium">Each phase is documented and monitored to ensure accuracy.</p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {[
              { id: 1, title: "Assessment" },
              { id: 2, title: "Strategy Design" },
              { id: 3, title: "Environment Prep" },
              { id: 4, title: "Data Transfer" },
              { id: 5, title: "Validation" },
              { id: 6, title: "Optimization" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className={cn(
                    "w-24 h-24 rounded-2xl flex items-center justify-center font-bold text-sm transition-all shadow-sm",
                    i < 3 ? "bg-white border border-slate-200 text-slate-800" : "bg-blue-500 text-white"
                  )}>
                    {step.title}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-slate-50">
                    {step.id}
                  </div>
                </div>
                {i < 5 && (
                  <ArrowRight className="text-blue-300 lg:hidden" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose mTouch Labs */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Why Choose mTouch Labs for <span className="text-[#f59e0b]">Cloud Migration</span>?
          </h2>
          <p className="text-slate-500 text-lg font-medium">We ensure migration enhances performance and stability.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          {[
            "Structured migration planning",
            "Enterprise-scale workload management",
            "Multi-cloud environment expertise",
            "Security-first transition frameworks",
            "Zero-disruption migration strategy",
            "Post-migration performance optimization"
          ].map((reason, i) => (
            <div key={i} className="bg-slate-50 px-8 py-4 rounded-full flex items-center gap-4 border border-slate-100 hover:border-blue-200 transition-colors">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full" />
              <span className="font-bold text-slate-700 text-sm">{reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 px-4 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Industries We <span className="text-[#f59e0b]">Serve</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Monitor className="text-blue-500" />, title: "Technology & SaaS" },
            { icon: <CreditCard className="text-blue-500" />, title: "Financial Services" },
            { icon: <Stethoscope className="text-blue-500" />, title: "Healthcare Organizations" },
            { icon: <ShoppingCart className="text-blue-500" />, title: "eCommerce Enterprises" },
            { icon: <Building2 className="text-blue-500" />, title: "Enterprise B2B" },
            { icon: <Bot className="text-blue-500" />, title: "Data-Driven Organizations" }
          ].map((industry, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-6 group transition-all"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                {industry.icon}
              </div>
              <h3 className="text-xl font-black text-slate-800">{industry.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cloud Migration Technologies */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Cloud <span className="text-[#f59e0b]">Migration Technologies</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 font-medium">Enterprise migration tools and cloud platforms for secure transitions.</p>
            
            <div className="flex flex-wrap gap-3">
              {[
                "AWS Migration Hub", "Azure Migrate", "Google Cloud Migrate", "Terraform",
                "Docker", "Kubernetes", "AWS DMS", "CloudEndure", "Velero", "Ansible",
                "CloudFormation", "RDS", "S3", "VPC", "IAM", "CloudWatch", "Datadog", "CI/CD"
              ].map((tech, i) => (
                <span key={i} className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 text-xs font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { val: "3", label: "Cloud Platforms" },
              { val: "18+", label: "Migration Tools" },
              { val: "0", label: "Data Loss" },
              { val: "IaC", label: "Automated Provisioning" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-2xl border border-slate-100 text-center">
                <div className="text-4xl font-black text-blue-600 mb-2 tracking-tight">{stat.val}</div>
                <div className="text-slate-500 font-bold text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 px-4 md:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Frequently Asked <span className="text-[#f59e0b]">Questions</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">Everything about cloud migration</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            {[
              {
                q: "What are cloud migration services?",
                a: "Cloud migration services involve moving data, applications, and infrastructure from on-premise servers or other cloud platforms to a target cloud environment. It includes assessment, planning, execution, and optimization phases."
              },
              {
                q: "How long does cloud migration take?",
                a: "The duration depends on the complexity of the workloads, data volume, and the chosen migration strategy. Small migrations can take weeks, while enterprise-scale transformations might take several months."
              },
              {
                q: "Can migration occur without downtime?",
                a: "Yes, using strategies like live migration, data replication, and blue-green deployments, we can achieve near-zero downtime for critical business applications."
              },
              {
                q: "Is cloud migration secure?",
                a: "Security is our top priority. We implement end-to-end encryption, strict IAM policies, and compliance checks throughout the migration process to ensure your data remains protected."
              }
            ].map((faq, i) => (
              <AccordionItem 
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={activeAccordion === i}
                onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Migrate Section */}
      <section className="py-24 px-4 md:px-12 bg-[#05070a] text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Migrate to the <span className="text-[#f59e0b]">Cloud</span>?
          </h2>
          <p className="text-slate-300 text-xl mb-12 font-medium leading-relaxed">
            Let's discuss how structured cloud migration can modernize your infrastructure with zero disruption.
          </p>
          <button className="bg-[#f59e0b] hover:bg-orange-600 text-white px-12 py-5 rounded-xl text-lg font-black transition-all shadow-lg shadow-orange-500/20">
            Start Your Migration
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05070a] pt-24 pb-12 px-4 md:px-12 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-black text-xl italic">M</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">mTouch Labs</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
              A global technology partner engineering next-generation digital solutions that accelerate business transformation across industries.
            </p>
            <div className="space-y-4 text-sm font-medium">
              <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Mail size={16} className="text-blue-500" /> contact@mtouchlabs.com
              </a>
              <a href="tel:+919390683154" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Phone size={16} className="text-blue-500" /> +91 9390683154
              </a>
              <a href="tel:+15512220070" className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors">
                <Phone size={16} className="text-blue-500" /> +1 (551) 222-0070
              </a>
            </div>
            <div className="flex gap-4 mt-10">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all text-slate-400 hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Services</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Custom Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-blue-400">Cloud & DevOps Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Application Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salesforce Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Assurance & Testing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <div className="bg-white/5 p-4 rounded-2xl mb-6">
              <div className="w-full aspect-square bg-slate-800 rounded-xl flex flex-col items-center justify-center text-center p-6 border border-white/10">
                <Globe className="text-blue-500 mb-4" size={40} />
                <span className="text-xs font-bold text-slate-400 mb-2">Open in Maps</span>
                <span className="text-[10px] text-slate-500">mTouch Labs - Software Development</span>
              </div>
            </div>
            <button className="w-full bg-[#4285F4] hover:bg-blue-600 text-white py-4 rounded-2xl text-sm font-black transition-all flex items-center justify-center gap-2">
              Download Brochure <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Global Presence */}
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
          <div className="flex items-center gap-3 mb-12">
            <Globe className="text-blue-500" size={24} />
            <h3 className="text-xl font-black">Global Presence</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {[
              { region: "India", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
              { region: "Americas", cities: ["United States", "Canada"] },
              { region: "Europe", cities: ["United Kingdom", "Germany", "Ireland"] },
              { region: "Asia Pacific", cities: ["Singapore", "Australia", "New Zealand", "India"] },
              { region: "Middle East", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] }
            ].map((group, i) => (
              <div key={i}>
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {group.region}
                </h5>
                <ul className="space-y-4 text-sm font-bold text-slate-400">
                  {group.cities.map((city, j) => (
                    <li key={j} className="hover:text-white transition-colors cursor-pointer">{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © 2026 <span className="text-slate-300">mTouch Labs Pvt. Ltd.</span> All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs font-bold text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20"
        >
          <div className="relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </div>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20"
        >
          <ChevronDown className="rotate-180" size={24} />
        </motion.button>
      </div>
    </div>
  );
}
