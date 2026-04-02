import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  ArrowUp
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative bg-[#7B2CBF] pt-32 pb-24 px-4 md:px-12 overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-8 font-medium">
        <a href="#" className="hover:text-white">Home</a>
        <span>/</span>
        <a href="#" className="hover:text-white">Services</a>
        <span>/</span>
        <span className="text-yellow-500">DevOps Services</span>
      </div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
      >
        DevOps <span className="text-[#FFB800]">Services</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium"
      >
        Accelerating Software Delivery Through Automation, Reliability & Continuous Innovation
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-white/70 max-w-3xl mx-auto mt-8 text-lg leading-relaxed"
      >
        WorkHolo Labs delivers structured DevOps services that streamline development workflows, automate infrastructure, and improve deployment reliability across cloud environments. Speed without control creates risk. DevOps creates balance.
      </motion.p>
    </div>
  </section>
);

const WhatIsDevOps = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-[#1A1A1A] mb-8">
          What Are <span className="text-[#FFB800]">DevOps Services</span>?
        </h2>
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            DevOps services involve implementing automation, integration pipelines, monitoring systems, and infrastructure management frameworks that improve collaboration between development and operations teams.
          </p>
          <p>
            Professional DevOps solutions include CI/CD, Infrastructure as Code, container orchestration, monitoring & observability, and release management automation. Our <a href="#" className="text-blue-600 font-semibold hover:underline">cloud services</a> provide the foundation for scalable DevOps infrastructure.
          </p>
          <p>
            Combined with <a href="#" className="text-blue-600 font-semibold hover:underline">DevOps consulting</a>, we design and implement frameworks that reduce deployment friction while improving reliability.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        {[
          { title: "CI/CD Pipelines", icon: "🔄", color: "bg-blue-50" },
          { title: "Container Orchestration", icon: "📦", color: "bg-orange-50" },
          { title: "Infrastructure as Code", icon: "📋", color: "bg-purple-50" },
          { title: "Monitoring & Observability", icon: "📊", color: "bg-green-50" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`${item.color} p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:shadow-lg transition-all cursor-default`}
          >
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
            <h3 className="font-bold text-[#1A1A1A] text-lg">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Capabilities = () => (
  <section className="py-24 px-4 md:px-12 bg-gray-50">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
        {[
          { val: "500+", label: "DevOps Projects", color: "text-blue-600" },
          { val: "10x", label: "Faster Deploys", color: "text-orange-600" },
          { val: "99.9%", label: "Pipeline Uptime", color: "text-blue-500" },
          { val: "24/7", label: "Monitoring", color: "text-blue-600" }
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
          >
            <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.val}</div>
            <div className="text-gray-500 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="order-1 lg:order-2"
      >
        <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
          Our DevOps <span className="text-[#FFB800]">Capabilities</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          End-to-end DevOps engineering across the software lifecycle:
        </p>
        <ul className="space-y-4">
          {[
            "CI/CD pipeline implementation & deployment automation",
            "Infrastructure as Code (IaC) — Terraform, CloudFormation, Ansible",
            "Containerization & orchestration — Docker, Kubernetes",
            "Monitoring & observability — Prometheus, Grafana, Datadog",
            "DevSecOps — automated security scanning & compliance"
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
              <CheckCircle2 className="text-yellow-500 shrink-0 mt-1" size={20} />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const ServicesList = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold text-[#1A1A1A]">
        Our DevOps <span className="text-[#FFB800]">Services</span>
      </h2>
      <p className="text-gray-500 mt-4 text-lg">From CI/CD to enterprise-grade automation</p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
      {[
        {
          id: "01",
          title: "CI/CD Pipeline Implementation",
          desc: "Automated build pipelines, code integration workflows, deployment automation, version control integration, and testing automation reducing manual errors."
        },
        {
          id: "02",
          title: "Infrastructure as Code",
          desc: "Code-driven infrastructure provisioning, environment replication, configuration management, and automated scaling frameworks for reproducibility."
        },
        {
          id: "03",
          title: "Containerization & Orchestration",
          desc: "Container-based architecture, microservices deployment, orchestration frameworks, and scalable cluster environments improving portability."
        },
        {
          id: "04",
          title: "Monitoring & Observability",
          desc: "Real-time performance monitoring, log aggregation systems, alert management frameworks, and incident response workflows for system resilience."
        },
        {
          id: "05",
          title: "DevSecOps Integration",
          desc: "Automated security scanning, compliance validation, secure configuration practices, and vulnerability monitoring — security integrated into every pipeline stage."
        }
      ].map((service, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className={`bg-gray-50 p-10 rounded-2xl border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-300 ${idx === 4 ? 'md:col-span-2' : ''}`}
        >
          <div className="bg-blue-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
            {service.id}
          </div>
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed text-lg">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ImplementationFramework = () => (
  <section className="py-24 px-4 md:px-12 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <h2 className="text-4xl font-bold text-[#1A1A1A]">
        Our DevOps <span className="text-[#FFB800]">Implementation Framework</span>
      </h2>
      <p className="text-gray-500 mt-4 text-lg">Structured execution ensures sustainable improvement.</p>
    </div>

    <div className="max-w-7xl mx-auto relative">
      {/* Connector Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-100 hidden lg:block -translate-y-1/2 z-0"></div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
        {[
          { step: "1", title: "Assessment" },
          { step: "2", title: "Architecture" },
          { step: "3", title: "Automation" },
          { step: "4", title: "Monitoring" },
          { step: "5", title: "Security" },
          { step: "6", title: "Optimization" }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6">
              <div className="w-24 h-24 bg-white border-2 border-blue-100 rounded-2xl flex items-center justify-center text-[#1A1A1A] font-bold shadow-sm group-hover:border-blue-500 transition-colors">
                {item.title}
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-white">
                {item.step}
              </div>
            </div>
            {idx < 5 && (
              <div className="lg:hidden flex justify-center mb-4">
                <ArrowRight className="text-blue-200 rotate-90 md:rotate-0" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="py-24 px-4 md:px-12 bg-gray-50">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold text-[#1A1A1A]">
        Why Choose WorkHolo Labs for <span className="text-[#FFB800]">DevOps</span>?
      </h2>
      <p className="text-gray-500 mt-4 text-lg">We build DevOps systems that support innovation at scale.</p>
    </div>

    <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
      {[
        "Automation-first methodology",
        "Cloud-native expertise",
        "Enterprise DevOps frameworks",
        "Security-integrated processes",
        "Continuous monitoring systems",
        "Scalable infrastructure alignment"
      ].map((pill, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: idx * 0.05 }}
          className="bg-white px-8 py-4 rounded-full border border-gray-200 shadow-sm flex items-center gap-3 font-semibold text-gray-700 hover:border-yellow-500 transition-colors cursor-default"
        >
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          {pill}
        </motion.div>
      ))}
    </div>
  </section>
);

const Industries = () => (
  <section className="py-24 px-4 md:px-12 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold text-[#1A1A1A]">
        Industries We <span className="text-[#FFB800]">Serve</span>
      </h2>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {[
        { title: "SaaS & Technology", icon: "💻" },
        { title: "FinTech Applications", icon: "💳" },
        { title: "Healthcare Systems", icon: "🏥" },
        { title: "eCommerce Platforms", icon: "🛒" },
        { title: "Enterprise B2B", icon: "🏢" },
        { title: "AI & Data Companies", icon: "🤖" }
      ].map((industry, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-gray-50 p-12 rounded-2xl border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
        >
          <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">{industry.icon}</span>
          <h3 className="text-xl font-bold text-[#1A1A1A]">{industry.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

const Technologies = () => (
  <section className="py-24 px-4 md:px-12 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-5xl font-bold text-[#1A1A1A] mb-6">
          Devops <span className="text-[#FFB800]">Services Technologies</span>
        </h2>
        <p className="text-gray-500 text-xl mb-10">Industry-standard DevOps tools and cloud-native platforms.</p>
        
        <div className="flex flex-wrap gap-3">
          {[
            "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins",
            "GitHub Actions", "GitLab CI", "AWS CodePipeline", "Azure DevOps",
            "ArgoCD", "Helm", "Prometheus", "Grafana", "Datadog", "ELK Stack",
            "SonarQube", "Trivy", "Vault", "Nginx", "CI/CD"
          ].map((tech, idx) => (
            <span key={idx} className="bg-gray-50 px-4 py-2 rounded-full border border-gray-200 text-gray-600 font-medium text-sm hover:bg-white hover:border-blue-500 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {[
          { val: "20+", label: "DevOps Tools", color: "text-blue-600" },
          { val: "K8s", label: "Orchestration", color: "text-blue-600" },
          { val: "IaC", label: "Terraform & Ansible", color: "text-blue-600" },
          { val: "CI/CD", label: "Automated Pipelines", color: "text-blue-600" }
        ].map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center min-h-[200px]"
          >
            <div className={`text-5xl font-black ${card.color} mb-3`}>{card.val}</div>
            <div className="text-gray-600 font-bold">{card.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What are DevOps services?",
      a: "DevOps services bridge the gap between development and operations through automation, continuous integration, and infrastructure management. It focuses on faster, more reliable software delivery."
    },
    {
      q: "How does DevOps improve software delivery?",
      a: "By automating repetitive tasks, implementing CI/CD pipelines, and ensuring consistent environments, DevOps reduces errors and significantly shortens the time from code commit to production."
    },
    {
      q: "Is DevOps only for cloud environments?",
      a: "While DevOps is highly effective in the cloud, its principles of automation, collaboration, and monitoring can be applied to on-premise and hybrid infrastructures as well."
    },
    {
      q: "Can DevOps improve system reliability?",
      a: "Absolutely. Continuous monitoring, automated testing, and Infrastructure as Code ensure that systems are stable, predictable, and can recover quickly from failures."
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-[#1A1A1A]">
          Frequently Asked <span className="text-[#FFB800]">Questions</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg">Everything about our DevOps services</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
            >
              <span className="text-xl font-bold text-[#1A1A1A]">{faq.q}</span>
              {openIdx === idx ? <ChevronDown className="text-blue-600" /> : <ChevronRight className="text-gray-400" />}
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-8 pb-6 text-gray-600 text-lg leading-relaxed"
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

const CTA = () => (
  <section className="py-24 px-4 md:px-12 bg-[#0B1120] text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2)_0%,transparent_70%)]"></div>
    </div>
    
    <div className="max-w-4xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
        Ready to Accelerate <span className="text-[#FFB800]">Software Delivery</span>?
      </h2>
      <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
        Let's discuss how DevOps automation can streamline your workflows and improve deployment reliability.
      </p>
      <button className="bg-[#FFB800] hover:bg-yellow-500 text-black px-10 py-4 rounded-xl font-black text-lg transition-all transform hover:scale-105 shadow-xl">
        Start Your DevOps Project
      </button>
    </div>
  </section>
);

const FloatingButtons = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
    <button className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group">
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat with us</span>
    </button>
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transition-colors"
    >
      <ArrowUp size={24} />
    </button>
  </div>
);

export default function DevOpsServices() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif] selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <main>
        <Hero />
        <WhatIsDevOps />
        <Capabilities />
        <ServicesList />
        <ImplementationFramework />
        <WhyChoose />
        <Industries />
        <Technologies />
        <FAQ />
        <CTA />
      </main>
      <FloatingButtons />
    </div>
  );
}
