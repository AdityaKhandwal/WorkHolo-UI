import React, { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2,  
  Database, 
  ShieldCheck, 
  Layers, 
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

export default function CloudMigrationServices() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* Top Bar */}

      {/* Header */}

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
            Cloud <span className="text-[#7B2CBF]">Migration</span> Services
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
            WorkHolo Labs delivers enterprise-grade cloud migration services that enable organizations to transition from legacy infrastructure to scalable cloud environments with minimal risk and operational disruption. Migration should improve efficiency, not introduce instability.
          </motion.p>
        </div>
      </section>

      {/* What Are Cloud Migration Services? */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              What Are <span className="text-[#7B2CBF]">Cloud Migration</span> Services?
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
              Our Migration <span className="text-[#7B2CBF]">Capabilities</span>
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
            Our Migration <span className="text-[#7B2CBF]">Services</span>
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
            Our Migration <span className="text-[#7B2CBF]">Methodology</span>
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

      {/* Why Choose WorkHolo Labs */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Why Choose WorkHolo Labs for <span className="text-[#7B2CBF]">Cloud Migration</span>?
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
            Industries We <span className="text-[#7B2CBF]">Serve</span>
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
              Cloud <span className="text-[#7B2CBF]">Migration Technologies</span>
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
              Frequently Asked <span className="text-[#7B2CBF]">Questions</span>
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
            Ready to Migrate to the <span className="text-[#7B2CBF]">Cloud</span>?
          </h2>
          <p className="text-slate-300 text-xl mb-12 font-medium leading-relaxed">
            Let's discuss how structured cloud migration can modernize your infrastructure with zero disruption.
          </p>
          <button className="bg-[#7B2CBF] hover:bg-orange-600 text-white px-12 py-5 rounded-xl text-lg font-black transition-all shadow-lg shadow-orange-500/20">
            Start Your Migration
          </button>
        </div>
      </section>

      {/* Footer */}

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
