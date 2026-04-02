import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Settings,
  Cloud,
  ShieldCheck,
  Layers,
} from "lucide-react";

// Custom components for the replica

const Hero = () => (
  <section className="bg-[#262525] pt-32 pb-20 relative overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative z-10">
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
        <span>Home</span>
        <ChevronRight size={14} />
        <span>Services</span>
        <ChevronRight size={14} />
        <span className="text-orange-500">Custom Software Development</span>
      </div>

      <div className="max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
        >
          Custom <span className="text-[#7B2CBF]">Software</span> Development
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-2xl md:text-3xl font-semibold mb-8"
        >
          Tailored Software Solutions Engineered for Growth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl"
        >
          mTouch Labs is a professional custom software development company
          specializing in designing and building scalable, secure, and
          business-aligned software systems that automate operations and support
          long-term digital transformation.
        </motion.p>
      </div>
    </div>

    {/* Floating WhatsApp Icon */}
    <div className="fixed right-8 bottom-24 z-40">
      <div className="bg-[#25D366] p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
        <MessageCircle size={32} color="white" fill="white" />
      </div>
    </div>
  </section>
);

const WhatIsSection = () => (
  <section className="bg-white py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-8">
          What Is <span className="text-[#7B2CBF]">Custom Software</span>{" "}
          Development?
        </h2>
        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Custom software development involves designing and building
            applications tailored to an organization's unique processes,
            operational challenges, and growth plans.
          </p>
          <p>
            Unlike off-the-shelf tools, custom software adapts to your
            workflows, integrates with existing systems, scales with business
            growth, enhances data control, and supports automation. Our{" "}
            <span className="text-blue-600 font-semibold">
              enterprise application development
            </span>{" "}
            expertise ensures every solution is built for mission-critical
            reliability.
          </p>
          <p>
            It becomes a strategic asset rather than a temporary solution —
            engineered specifically around your requirements and performance
            objectives. Combined with our{" "}
            <span className="text-blue-600 font-semibold">
              UI/UX design capabilities
            </span>
            , we deliver software that is both powerful and intuitive.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FeatureCard
          icon={<Settings className="text-purple-500" />}
          title="Process Automation"
        />
        <FeatureCard
          icon={<Cloud className="text-blue-500" />}
          title="Cloud-Native Apps"
        />
        <FeatureCard
          icon={<Layers className="text-orange-500" />}
          title="System Integration"
        />
        <FeatureCard
          icon={<ShieldCheck className="text-green-500" />}
          title="Security-First"
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow border border-gray-100">
    <div className="mb-4 p-3 bg-white rounded-xl shadow-sm">
      {React.cloneElement(icon as React.ReactElement<{ size?: number }>, {
        size: 32,
      })}
    </div>
    <h3 className="font-bold text-[#0B1120] text-lg">{title}</h3>
  </div>
);

const SecuritySection = () => (
  <section className="bg-white py-24 border-t border-gray-100">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-2 gap-8">
        <StatCard number="1500+" label="Projects Delivered" />
        <StatCard number="14+" label="Years Experience" />
        <StatCard number="3" label="Cloud Platforms" />
        <StatCard number="GDPR" label="Compliance Ready" />
      </div>

      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-8">
          Security-First <span className="text-[#7B2CBF]">Engineering</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Security is embedded throughout the lifecycle:
        </p>
        <ul className="space-y-4">
          <SecurityItem text="Role-based access control & secure authentication" />
          <SecurityItem text="Data encryption at rest & in transit" />
          <SecurityItem text="API security standards & compliance-aware infrastructure" />
          <SecurityItem text="Microservices & auto-scaling cloud architecture" />
          <SecurityItem text="Disaster recovery readiness on AWS, Azure & GCP" />
        </ul>
      </div>
    </div>
  </section>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-blue-50 p-10 rounded-2xl text-center">
    <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
    <div className="text-gray-600 font-medium">{label}</div>
  </div>
);

const SecurityItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3 text-gray-700 text-lg">
    <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
    <span>{text}</span>
  </li>
);

const ServicesSection = () => (
  <section className="bg-gray-50 py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
        Our Custom <span className="text-[#7B2CBF]">Software Services</span>
      </h2>
      <p className="text-gray-600 text-xl">
        From automation to enterprise platforms
      </p>
    </div>

    <div className="max-w-[1440px] mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8">
      <ServiceCard
        number="01"
        title="Business Process Automation"
        description="Automate manual workflows, reduce inefficiencies, improve cross-department collaboration, and enhance data accuracy."
      />
      <ServiceCard
        number="02"
        title="SaaS Application Development"
        description="Multi-tenant architectures, subscription systems, admin dashboards, and API-first products for reliability and monetization."
      />
      <ServiceCard
        number="03"
        title="Enterprise Software Solutions"
        description="ERP platforms, internal management systems, compliance-ready applications, and multi-user secure platforms."
      />
      <ServiceCard
        number="04"
        title="System Integration"
        description="Integrate with CRM, ERP, payment gateways, third-party APIs, and cloud services for seamless data flow."
      />
      <div className="md:col-span-2 flex justify-center">
        <div className="max-w-xl w-full">
          <ServiceCard
            number="05"
            title="Cloud-Native Architecture"
            description="AWS, Azure & GCP deployment with microservices, auto-scaling, secure API management, and disaster recovery."
          />
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
    <div className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
      {number}
    </div>
    <h3 className="text-2xl font-bold text-[#0B1120] mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
  </div>
);

const ProcessSection = () => (
  <section className="bg-white py-24 overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
        Our Development <span className="text-[#7B2CBF]">Process</span>
      </h2>
      <p className="text-gray-600 text-xl max-w-3xl mx-auto">
        We follow a structured methodology to ensure predictable outcomes and
        long-term maintainability.
      </p>
    </div>

    <div className="max-w-[1440px] mx-auto px-4 md:px-8 relative">
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
        <ProcessStep number="1" title="Business Analysis" />
        <ProcessStep number="2" title="Architecture" />
        <ProcessStep number="3" title="UI/UX Planning" />
        <ProcessStep number="4" title="Agile Dev" />
        <ProcessStep number="5" title="QA Testing" />
        <ProcessStep number="6" title="Deployment" />
        <ProcessStep number="7" title="Optimization" />
      </div>
    </div>
  </section>
);

const ProcessStep = ({ number, title }: { number: string; title: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 bg-white border-2 border-blue-500 rounded-2xl flex items-center justify-center relative mb-4 shadow-md">
      <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      <div className="text-blue-500 font-bold text-center px-2 text-xs uppercase tracking-wider">
        {title.split(" ")[0]}
        <br />
        {title.split(" ")[1] || ""}
      </div>
    </div>
    <div className="lg:hidden text-gray-400 mb-4">
      <ChevronDown size={24} />
    </div>
  </div>
);

const WhyChooseSection = () => (
  <section className="bg-gray-50 py-24">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
        Why Choose <span className="text-[#7B2CBF]">mTouch Labs</span>?
      </h2>
      <p className="text-gray-600 text-xl">
        We don't just develop applications — we build sustainable digital
        systems.
      </p>
    </div>

    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <PillItem text="Business-focused engineering" />
      <PillItem text="Scalable software architecture" />
      <PillItem text="Secure development practices" />
      <PillItem text="Transparent project management" />
      <PillItem text="Long-term support partnership" />
      <PillItem text="Cloud-native deployment expertise" />
    </div>
  </section>
);

const PillItem = ({ text }: { text: string }) => (
  <div className="bg-white px-8 py-4 rounded-full shadow-sm flex items-center gap-3 border border-gray-100 hover:shadow-md transition-all">
    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
    <span className="text-gray-800 font-semibold text-lg">{text}</span>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does a custom software development company do?",
      a: "A custom software development company designs, builds, and maintains software applications tailored to the specific needs of a business. This includes everything from initial analysis and planning to development, testing, and post-launch support.",
    },
    {
      q: "How long does custom software development take?",
      a: "The timeline for custom software development varies depending on the complexity of the project. A simple application might take 3-4 months, while a complex enterprise system could take 9-12 months or more. We follow an agile methodology to deliver incremental value throughout the process.",
    },
    {
      q: "Is custom software scalable?",
      a: "Yes, scalability is one of the primary benefits of custom software. We design our solutions using cloud-native architectures and microservices that can easily grow alongside your business, handling increased users and data without performance degradation.",
    },
    {
      q: "Do you provide post-launch support?",
      a: "Absolutely. We offer comprehensive post-launch support and maintenance packages to ensure your software remains secure, up-to-date, and continues to meet your evolving business needs.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
            Frequently Asked <span className="text-[#7B2CBF]">Questions</span>
          </h2>
          <p className="text-gray-600 text-xl">
            Everything about custom software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-bold text-[#0B1120] group-hover:text-blue-600 transition-colors">
                  {faq.q}
                </span>
                {openIndex === index ? (
                  <ChevronDown className="rotate-180 transition-transform" />
                ) : (
                  <ChevronDown className="transition-transform" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 text-lg leading-relaxed">
                      {faq.a}
                    </p>
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

const CTASection = () => (
  <section className="bg-[#262525] py-24 relative overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
        Build Your Custom{" "}
        <span className="text-[#7B2CBF]">Software Solution</span>
      </h2>
      <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
        Let's discuss how tailored software can automate your operations and
        accelerate growth.
      </p>
      <button className="bg-[#7B2CBF] hover:bg-orange-500 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-lg hover:shadow-orange-500/20">
        Start Your Project
      </button>
    </div>

    {/* Background Decoration */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
  </section>
);

export default function CustomSOftwareDevelopment() {
  return (
    <div className="font-['Inter',sans-serif] selection:bg-blue-500 selection:text-white">
      <main>
        <Hero />
        <WhatIsSection />
        <SecuritySection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
}
