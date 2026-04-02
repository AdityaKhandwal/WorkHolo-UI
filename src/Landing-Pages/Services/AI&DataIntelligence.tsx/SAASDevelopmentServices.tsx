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
  MessageSquare, 
  ChevronUp,
  Cloud,
  Layers,
  Cpu,
  Users,
  ShoppingCart,
  Truck,
  HeartPulse,
  Wallet,
  Briefcase
} from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---


const Hero = () => {
  return (
    <section className="pt-40 pb-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#00A3FF_0%,transparent_50%)]" />
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <nav className="flex justify-center gap-2 text-white/60 text-[13px] mb-8 font-medium">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <span>/</span>
          <span className="text-secondary">SaaS Development Services</span>
        </nav>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          End-to-End <span className="text-secondary">SaaS Development</span> <br /> Services
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          WorkHolo Labs delivers scalable and secure SaaS development services for startups, product companies, and enterprises looking to build high-performance cloud-based platforms. From MVP development to enterprise-scale SaaS ecosystems, we design and engineer subscription-driven software platforms built for growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <button className="bg-secondary hover:bg-primary text-white px-10 py-4 rounded-lg text-lg font-bold transition-all shadow-[0_10px_30px_rgba(0,163,255,0.4)]">
            Speak with Our SaaS Development Experts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const WhatIsSaaS = () => {
  const features = [
    { icon: <Layers className="text-primary" />, title: "Multi-Tenant Architecture", desc: "Secure data isolation and resource sharing." },
    { icon: <Wallet className="text-primary" />, title: "Subscription Billing", desc: "Automated recurring payments and tier management." },
    { icon: <Cloud className="text-primary" />, title: "Cloud-Native Deploy", desc: "Optimized for AWS, Azure, and Google Cloud." },
    { icon: <Cpu className="text-primary" />, title: "API Ecosystems", desc: "Seamless integrations with third-party services." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">What Is <span className="text-secondary">SaaS Development</span>?</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            SaaS (Software as a Service) development involves building cloud-based applications that operate on subscription models and are accessible via the web. As a leading <span className="text-secondary font-semibold">custom software development company</span>, WorkHolo Labs extends its engineering expertise to SaaS product development.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our SaaS development services include multi-tenant architecture design, subscription & billing integration, secure cloud deployment, API-driven ecosystem development, and SaaS product scaling & optimization.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We leverage <span className="text-secondary font-semibold">cloud & DevOps engineering</span> capabilities to deploy and scale SaaS platforms on AWS, Azure, and Google Cloud.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center group transition-all hover:shadow-xl hover:bg-white"
            >
              <div className="mb-4 p-3 bg-white rounded-xl shadow-sm group-hover:bg-primary/10 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const stats = [
    { value: "14+", label: "Years Experience" },
    { value: "50+", label: "SaaS Projects" },
    { value: "3", label: "Cloud Platforms" },
    { value: "24/7", label: "Support" }
  ];

  const benefits = [
    "Enterprise-grade SaaS architecture & product-first mindset",
    "Cloud-native deployment on AWS, Azure & Google Cloud",
    "Subscription model & payment gateway integration",
    "Dedicated SaaS development teams with global delivery",
    "Long-term <span className='text-secondary font-semibold'>maintenance support</span> & SaaS optimization"
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="p-10 bg-white rounded-2xl border border-gray-100 text-center shadow-sm">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{s.value}</div>
              <div className="text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Why WorkHolo Labs for <span className="text-secondary">SaaS Development</span></h2>
          <p className="text-gray-600 text-lg mb-8">We combine product engineering with cloud-native expertise:</p>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span className="text-gray-700 text-lg" dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    { num: "01", title: "SaaS Architecture & Strategy", desc: "We design scalable SaaS architectures using microservices, containerization, and cloud-native infrastructure to ensure flexibility and performance." },
    { num: "02", title: "SaaS MVP Development", desc: "We help startups validate ideas quickly with robust, scalable MVPs built for rapid iteration and market launch." },
    { num: "03", title: "Multi-Tenant SaaS Platforms", desc: "We develop secure multi-tenant systems with data isolation, performance optimization, and enterprise-grade security." },
    { num: "04", title: "Subscription & Payment Systems", desc: "Integration of subscription billing platforms, payment gateways, and automated revenue workflows using Stripe, Razorpay, and custom solutions." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Our SaaS <span className="text-secondary">Development Services</span></h2>
          <p className="text-gray-500 text-lg">End-to-end SaaS solutions from MVP to enterprise scale</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden"
            >
              <div className="absolute top-6 right-10 text-8xl font-black text-gray-200/50 group-hover:text-secondary/10 transition-colors">{s.num}</div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{s.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-10 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
          <div className="absolute top-6 right-10 text-8xl font-black text-gray-200/50 group-hover:text-secondary/10 transition-colors">05</div>
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-4 relative z-10">SaaS Cloud Engineering & Scaling</h3>
            <p className="text-gray-600 text-lg leading-relaxed relative z-10">
              We deploy SaaS platforms on AWS, Azure, or Google Cloud with CI/CD pipelines, DevOps automation, performance optimization, and legacy architecture modernization for growing SaaS companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { name: "Discovery", color: "bg-navy" },
    { name: "Architecture", color: "bg-navy" },
    { name: "MVP Build", color: "bg-navy" },
    { name: "Cloud Deploy", color: "bg-navy" },
    { name: "Security", color: "bg-navy" },
    { name: "Testing", color: "bg-navy" },
    { name: "Scale", color: "bg-navy" }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Our SaaS <span className="text-secondary">Development Process</span></h2>
        <p className="text-gray-500 text-lg mb-16">Structured lifecycle ensuring product stability and scalability.</p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className={cn("px-8 py-3 rounded-full text-white font-bold text-sm shadow-lg", s.color)}>
                {s.name}
              </div>
              {i < steps.length - 1 && <ArrowRight className="text-gray-300" size={20} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const Security = () => {
  const tags = ["Data encryption", "Secure authentication", "Role-based access control", "Scalable infrastructure", "Compliance-ready architecture"];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">Security & <span className="text-secondary">Compliance</span></h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Our SaaS solutions are built with enterprise-grade security standards, integrated with <span className="text-secondary font-semibold">Salesforce consulting & CRM</span> capabilities for compliant platforms.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {tags.map((t, i) => (
            <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm text-gray-700 font-medium hover:border-secondary transition-colors cursor-default">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { icon: <Wallet size={32} className="text-yellow-600" />, name: "FinTech SaaS Platforms" },
    { icon: <HeartPulse size={32} className="text-pink-600" />, name: "Healthcare SaaS Systems" },
    { icon: <Briefcase size={32} className="text-blue-600" />, name: "B2B SaaS Applications" },
    { icon: <Truck size={32} className="text-orange-600" />, name: "Logistics & Supply Chain SaaS" },
    { icon: <Users size={32} className="text-purple-600" />, name: "HR & CRM SaaS Platforms" },
    { icon: <ShoppingCart size={32} className="text-indigo-600" />, name: "E-Commerce SaaS Solutions" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-16 tracking-tight">Industries We <span className="text-secondary">Serve with SaaS</span></h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col items-center gap-6"
            >
              <div className="p-4 bg-gray-50 rounded-2xl">
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

const TechStack = () => {
  const techs = ["React", "Next.js", "Node.js", "Python", ".NET", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "CI/CD", "Stripe", "Razorpay", "REST APIs", "GraphQL"];
  const stats = [
    { val: "3", label: "Cloud Platforms" },
    { val: "20+", label: "Technologies" },
    { val: "CI/CD", label: "Automation" },
    { val: "24/7", label: "Monitoring" }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">SaaS Development <span className="text-secondary">Technology Stack</span></h2>
          <p className="text-gray-500 text-lg mb-10">Modern frameworks, cloud platforms, and automation tools.</p>
          
          <div className="flex flex-wrap gap-3">
            {techs.map((t, i) => (
              <span key={i} className="px-5 py-2 bg-gray-50 rounded-lg border border-gray-200 text-gray-600 font-medium text-sm hover:bg-white hover:border-secondary transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="p-8 bg-orange-50/30 rounded-2xl border border-orange-100 text-center group hover:bg-orange-50 transition-colors">
              <div className="text-4xl font-bold text-orange-600 mb-1">{s.val}</div>
              <div className="text-gray-500 font-medium text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "What are SaaS development services?", a: "SaaS development services involve building cloud-based software that is delivered over the internet via a subscription model. It includes architecture design, multi-tenancy implementation, and cloud deployment." },
    { q: "How long does SaaS development take?", a: "The timeline varies based on complexity. An MVP typically takes 3-4 months, while a full-scale enterprise SaaS platform can take 8-12 months or more." },
    { q: "What technologies do you use for SaaS development?", a: "We use modern stacks including React/Next.js for frontend, Node.js/Python for backend, and AWS/Azure/GCP for cloud infrastructure." },
    { q: "Do you build scalable multi-tenant SaaS platforms?", a: "Yes, we specialize in multi-tenant architectures that ensure data isolation, security, and efficient resource sharing across multiple clients." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Frequently Asked <span className="text-secondary">Questions</span></h2>
          <p className="text-gray-500 text-lg">Everything about SaaS development services</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-800">{f.q}</span>
                <ChevronDown className={cn("text-gray-400 transition-transform", openIndex === i && "rotate-180")} size={20} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                      {f.a}
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
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#00A3FF_0%,transparent_70%)]" />
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Build Your <span className="text-secondary">SaaS Platform</span>?</h2>
        <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Let's discuss how we can design, develop, and scale your SaaS product with enterprise-grade architecture.
        </p>
        <button className="bg-secondary hover:bg-primary text-white px-12 py-4 rounded-lg text-lg font-bold transition-all shadow-[0_10px_30px_rgba(0,163,255,0.4)]">
          Speak with Our SaaS Development Experts
        </button>
      </div>
    </section>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl relative group"
      >
        <div className="absolute -left-32 bg-black/80 text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.button>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white shadow-2xl relative group"
      >
        <div className="absolute -left-44 bg-black/80 text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <span className="text-yellow-500 font-bold">WE ARE HERE!</span> Let's Chat
        </div>
        <MessageSquare size={28} />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 rounded-full text-[10px] flex items-center justify-center font-bold">1</div>
      </motion.button>

      <motion.button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white shadow-xl"
      >
        <ChevronUp size={24} />
      </motion.button>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <WhatIsSaaS />
        <WhyChooseUs />
        <ServicesGrid />
        <Process />
        <Security />
        <Industries />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
      <FloatingButtons />
    </div>
  );
}
