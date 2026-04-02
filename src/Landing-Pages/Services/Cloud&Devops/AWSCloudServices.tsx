import { clsx, type ClassValue } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {  
  ArrowRight, 
  Cloud,
  ShieldCheck,
  CheckCircle2,
  Plus,
  Minus,
  Monitor,
  Database,
  Zap,
  ShoppingCart,
  Truck,
  Building2,
  Stethoscope,
} from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-darker-bg pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-blue font-semibold tracking-widest uppercase text-sm mb-6 block">
            Home / Services / AWS Cloud Services
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
            AWS <span className="text-brand-orange">Cloud</span> Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Secure, Scalable & High-Performance Amazon Web Services Solutions. 
            WorkHolo Labs provides professional AWS Cloud Services designed to help businesses migrate, modernize, 
            and scale their infrastructure. From cloud migration to infrastructure optimization, we help organizations 
            unlock the full potential of AWS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-brand-purple hover:bg-brand-purple/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:translate-y-[-2px] shadow-lg shadow-brand-purple/20">
              Start AWS Consultation
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform group">
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

const InfoSection = () => {
  const cards = [
    { icon: Cloud, title: "Cloud Migration", color: "text-blue-400" },
    { icon: Building2, title: "Infrastructure", color: "text-orange-400" },
    { icon: Zap, title: "DevOps Automation", color: "text-red-400" },
    { icon: ShieldCheck, title: "Security & Compliance", color: "text-green-400" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What Are <span className="text-brand-orange">AWS Cloud</span> Services?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              AWS Cloud Services involve designing, deploying, and managing cloud infrastructure using Amazon Web Services to improve scalability, reliability, and operational efficiency — including migration planning, architecture, DevOps automation, cost optimization, security, and ongoing management.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our AWS solutions integrate with <span className="text-brand-blue font-medium">cloud services</span> and <span className="text-brand-blue font-medium">cloud migration</span> for comprehensive infrastructure modernization.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Combined with <span className="text-brand-blue font-medium">DevOps services</span> and <span className="text-brand-blue font-medium">cloud security</span>, we build environments optimized for performance, resilience, and long-term growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center group transition-all hover:shadow-xl hover:bg-white"
              >
                <div className={cn("w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", card.color)}>
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-gray-800">{card.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const stats = [
    { value: "200+", label: "AWS Projects", color: "text-brand-blue" },
    { value: "99.9%", label: "Uptime SLA", color: "text-brand-blue" },
    { value: "40%", label: "Avg Cost Savings", color: "text-brand-blue" },
    { value: "14+", label: "Years Experience", color: "text-brand-blue" },
  ];

  const benefits = [
    "Reduced infrastructure costs & improved scalability",
    "High availability & enhanced data security",
    "Faster deployment cycles & reliable disaster recovery",
    "DevOps-driven automation & cost optimization",
    "Transparent governance & long-term partnership",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
                <div className={cn("text-5xl font-extrabold mb-2", stat.color)}>{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business Benefits of <span className="text-brand-orange">AWS Cloud</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              AWS empowers organizations to innovate without infrastructure limitations:
            </p>
            <ul className="space-y-6">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-orange/10 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      id: "01",
      title: "AWS Cloud Consulting",
      desc: "Cloud readiness assessment, architecture planning, cost modeling, security framework design, and scalability roadmap aligned with business goals."
    },
    {
      id: "02",
      title: "AWS Cloud Migration",
      desc: "On-premise to AWS migration, legacy modernization, database migration, re-platforming, re-architecting, and zero-downtime deployment strategies."
    },
    {
      id: "03",
      title: "Infrastructure Deployment",
      desc: "EC2 instances, S3 storage, RDS databases, VPC networking, load balancing, and auto-scaling groups optimized for performance and resilience."
    },
    {
      id: "04",
      title: "DevOps & Automation",
      desc: "CI/CD pipelines, Infrastructure as Code, automated monitoring, container orchestration, and deployment automation for faster release cycles."
    },
    {
      id: "05",
      title: "Managed Services & Security",
      desc: "Performance monitoring, security audits, backup & disaster recovery, cost optimization, IAM access control, encryption, and compliance-ready architecture."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our AWS <span className="text-brand-orange">Cloud Services</span>
          </h2>
          <p className="text-gray-500 text-lg">From consulting to managed cloud operations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all",
                idx === 4 ? "md:col-span-2" : ""
              )}
            >
              <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg mb-8">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FrameworkSection = () => {
  const steps = [
    { id: 1, label: "Assess" },
    { id: 2, label: "Architect" },
    { id: 3, label: "Migrate" },
    { id: 4, label: "Deploy" },
    { id: 5, label: "Automate" },
    { id: 6, label: "Monitor", active: true },
    { id: 7, label: "Optimize" },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our AWS <span className="text-brand-orange">Implementation Framework</span>
          </h2>
          <p className="text-gray-500 text-lg">Structured approach from assessment to ongoing optimization.</p>
        </div>
        
        <div className="relative flex items-center justify-between max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg border-4 border-white shadow-md transition-all",
                step.active ? "bg-brand-blue text-white scale-125" : "bg-gray-100 text-gray-400"
              )}>
                {step.id}
              </div>
              <span className={cn(
                "absolute -bottom-10 whitespace-nowrap font-bold text-sm uppercase tracking-wider",
                step.active ? "text-brand-blue" : "text-gray-400"
              )}>
                {step.label}
              </span>
              {idx < steps.length - 1 && (
                <div className="absolute top-1/2 left-full w-full h-4 -translate-y-1/2 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const features = [
    "Strategic cloud architecture",
    "Secure & scalable deployment",
    "DevOps-driven automation",
    "Cost optimization focus",
    "Transparent governance",
    "Long-term cloud partnership"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose <span className="text-brand-orange">WorkHolo Labs</span>?
        </h2>
        <p className="text-gray-500 text-lg mb-16 max-w-3xl mx-auto">
          We help businesses transform infrastructure into a competitive advantage.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 px-8 py-4 rounded-full border border-gray-100 flex items-center gap-3 hover:bg-white hover:shadow-md transition-all cursor-default">
              <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
              <span className="font-semibold text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { icon: Monitor, title: "SaaS & Technology" },
    { icon: Database, title: "FinTech & Finance" },
    { icon: Stethoscope, title: "Healthcare" },
    { icon: ShoppingCart, title: "eCommerce & Retail" },
    { icon: Truck, title: "Logistics & Transport" },
    { icon: Building2, title: "Enterprise Operations" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We <span className="text-brand-orange">Support</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-brand-blue/10 transition-colors">
                <industry.icon className="w-10 h-10 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{industry.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  const tags = [
    "Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon Lambda",
    "Amazon ECS", "Amazon EKS", "Amazon CloudFront", "Amazon VPC",
    "AWS IAM", "AWS CloudFormation", "AWS CodePipeline", "AWS CloudWatch",
    "Amazon DynamoDB", "Amazon SQS", "Amazon SNS", "AWS Elastic Beanstalk",
    "Terraform", "Docker"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AWS <span className="text-brand-orange">Technology Stack</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10">Enterprise AWS services and DevOps tools.</p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { val: "200+", label: "AWS Projects" },
              { val: "99.9%", label: "Uptime" },
              { val: "18+", label: "AWS Services" },
              { val: "14+", label: "Years" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm text-center">
                <div className="text-4xl font-extrabold text-brand-blue mb-2">{stat.val}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are AWS Cloud Services?",
      a: "AWS Cloud Services encompass a broad range of global cloud-based products including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications."
    },
    {
      q: "Is AWS suitable for enterprise businesses?",
      a: "Yes, AWS is the leading cloud provider for enterprises, offering robust security, compliance certifications, global infrastructure, and advanced services for AI, Big Data, and IoT."
    },
    {
      q: "How long does AWS migration take?",
      a: "The duration depends on the complexity and volume of data. A simple migration might take a few weeks, while a large-scale enterprise migration could take several months."
    },
    {
      q: "Do you provide ongoing AWS management?",
      a: "Yes, we offer 24/7 managed services including performance monitoring, security updates, cost optimization, and technical support."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="text-gray-500 text-lg">Everything about AWS Cloud Services</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-gray-800">{faq.q}</span>
                {openIdx === idx ? <Minus className="w-5 h-5 text-brand-blue" /> : <Plus className="w-5 h-5 text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed">
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
    <section className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 opacity-50"></div>
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
          Transform Your <span className="text-brand-orange">Cloud Infrastructure</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Let's discuss how AWS can scale your business with secure, high-performance cloud solutions.
        </p>
        <button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl shadow-brand-purple/20">
          Start AWS Consultation
        </button>
      </div>
    </section>
  );
};

export default function AWSCloudServices() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      <main>
        <Hero />
        <InfoSection />
        <BenefitsSection />
        <ServicesGrid />
        <FrameworkSection />
        <WhyChooseSection />
        <IndustriesSection />
        <TechStackSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
}
