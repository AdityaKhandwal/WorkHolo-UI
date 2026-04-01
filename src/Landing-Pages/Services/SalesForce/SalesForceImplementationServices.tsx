import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Mail,
  Phone,
  Globe,
  ChevronDown,
  Check,
  MessageCircle,
  ArrowUp,
  Briefcase,
  BarChart3,
  Zap,
  ShieldCheck,
  RefreshCw,
  Layers,
} from "lucide-react";

// --- Components ---

const Hero = () => {
  return (
    <section className="bg-[#0a0f1a] text-white pt-24 pb-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,163,255,0.1),transparent_70%)]"></div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center space-x-2 mb-6 text-sm uppercase tracking-[0.2em] text-white/60">
            <span>Home</span>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="text-[#F2A93B]">Salesforce Implementation</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Salesforce{" "}
            <span className="text-[#F2A93B] italic">Implementation</span> <br />{" "}
            Services
          </h1>
          <p className="text-xl lg:text-2xl font-semibold mb-8 text-white/90 max-w-3xl mx-auto">
            Structured CRM Deployment Built for Scalable Growth
          </p>
          <p className="text-lg text-white/60 max-w-4xl mx-auto leading-relaxed italic">
            "Salesforce implementation is not about installing software — it is
            about designing a centralized intelligence system that aligns
            people, processes, and performance. We deliver outcome-driven
            Salesforce Implementation Services that help organizations
            streamline operations and gain real-time visibility into customer
            lifecycles."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const RevenueEnablement = () => {
  const cards = [
    {
      title: "Business-First Architecture",
      icon: <BarChart3 className="w-8 h-8 text-[#00A3FF]" />,
      bg: "bg-[#f8faff]",
    },
    {
      title: "Clean Data Migration",
      icon: <RefreshCw className="w-8 h-8 text-[#00A3FF]" />,
      bg: "bg-[#f8faff]",
    },
    {
      title: "System Integration",
      icon: <Layers className="w-8 h-8 text-[#00A3FF]" />,
      bg: "bg-[#f8faff]",
    },
    {
      title: "Adoption Strategy",
      icon: <ShieldCheck className="w-8 h-8 text-[#00A3FF]" />,
      bg: "bg-[#f8faff]",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              From CRM Setup to{" "}
              <span className="text-[#F2A93B]">Revenue Enablement</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Many companies struggle after Salesforce purchase because the
                system doesn't reflect actual sales processes, teams resist
                adoption, data migration creates inconsistencies, and reporting
                lacks clarity.
              </p>
              <p>
                Our implementation framework ensures Salesforce becomes a
                performance accelerator — not a complexity layer. Our{" "}
                <span className="text-[#00A3FF] font-semibold">
                  consulting expertise
                </span>{" "}
                drives every deployment as a business transformation initiative.
              </p>
              <p>
                We design Salesforce around your real operational structure —
                analyzing sales funnels, service workflows, customer
                touchpoints, and operational bottlenecks before touching
                configuration, with seamless{" "}
                <span className="text-[#00A3FF] font-semibold">
                  system integration
                </span>{" "}
                across departments.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`${card.bg} p-8 rounded-2xl flex flex-col items-center text-center shadow-sm border border-gray-100`}
              >
                <div className="mb-6">{card.icon}</div>
                <h3 className="font-bold text-lg leading-tight">
                  {card.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { label: "CRM Deployments", value: "100+" },
    { label: "Salesforce Clouds", value: "5" },
    { label: "Weeks to Deploy", value: "4-12" },
    { label: "Migration Accuracy", value: "99%" },
  ];

  const features = [
    "Custom object architecture & workflow automation logic",
    "Territory & role hierarchies with approval chains",
    "Data cleansing, deduplication & field-level mapping validation",
    "ERP, marketing, eCommerce & custom API integrations",
    "Role-based training & Lightning migration readiness",
  ];

  return (
    <section className="py-24 px-4 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center"
              >
                <div className="text-5xl font-black text-[#00A3FF] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              What Makes Our <br />
              <span className="text-[#F2A93B]">Implementation Different</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We build scalable CRM environments with strategic precision:
            </p>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-[#F2A93B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {feature.includes("Lightning migration") ? (
                      <>
                        Role-based training &{" "}
                        <span className="text-[#00A3FF]">
                          Lightning migration
                        </span>{" "}
                        readiness
                      </>
                    ) : (
                      feature
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const items = [
    {
      id: "01",
      title: "Business-First Architecture",
      desc: "We analyze sales funnels, service workflows, customer touchpoints, reporting requirements, and operational bottlenecks before any configuration.",
    },
    {
      id: "02",
      title: "Intelligent CRM Structuring",
      desc: "Custom object architecture, workflow automation, territory & role hierarchies, approval chains, and performance dashboards built for scale.",
    },
    {
      id: "03",
      title: "Clean Data Migration",
      desc: "Structured migration planning, data cleansing & deduplication, field-level mapping validation, secure transfer, and post-migration verification.",
    },
    {
      id: "04",
      title: "System Integration",
      desc: "Seamless integration with ERP, accounting, marketing automation, eCommerce, and custom APIs for unified visibility across departments.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Our Implementation{" "}
          <span className="text-[#F2A93B]">Capabilities</span>
        </h2>
        <p className="text-lg text-gray-500">
          End-to-end CRM deployment from discovery to optimization
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-[#f8faff] p-10 rounded-2xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="bg-[#00A3FF] text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold mb-6">
              {item.id}
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Lifecycle = () => {
  const steps = [
    { name: "Discovery", id: 1 },
    { name: "Design", id: 2, active: true },
    { name: "Configure", id: 3 },
    { name: "Integrate", id: 4 },
    { name: "Validate", id: 5 },
    { name: "Deploy", id: 6 },
    { name: "Optimize", id: 7 },
  ];

  return (
    <section className="py-24 px-4 bg-[#f8faff] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Our Implementation <span className="text-[#F2A93B]">Lifecycle</span>
        </h2>
        <p className="text-lg text-gray-500">
          This structured lifecycle minimizes risk and ensures measurable
          outcomes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative px-10">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 hidden lg:block"></div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center relative z-10 gap-8 lg:gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="relative mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step.active ? "bg-[#00A3FF] text-white scale-110 shadow-lg shadow-[#00A3FF]/30" : "bg-white text-gray-400 border-2 border-gray-100"}`}
                >
                  {step.id}
                </div>
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-8 w-8 h-[2px] bg-gray-200 -translate-y-1/2 lg:hidden"></div>
                )}
              </div>
              <div
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${step.active ? "bg-white text-black shadow-md border border-[#00A3FF]/20" : "bg-white text-gray-400 border border-gray-100"}`}
              >
                {step.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Card for Step 5 (as seen in Screenshot 8) */}
      <div className="max-w-5xl mx-auto mt-20">
        <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative">
          <div className="absolute -top-4 left-10 bg-[#00A3FF] text-white px-4 py-1 rounded-lg font-bold text-sm">
            05
          </div>
          <h3 className="text-2xl font-bold mb-6">Adoption & Optimization</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Role-based training, admin enablement, user onboarding frameworks,
            KPI tracking dashboards, and ongoing system refinement for maximum
            ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

const Clouds = () => {
  const clouds = [
    {
      name: "Sales Cloud",
      icon: <Briefcase className="w-10 h-10 text-[#8e5d5d]" />,
    },
    {
      name: "Service Cloud",
      icon: <Phone className="w-10 h-10 text-gray-400" />,
    },
    {
      name: "Experience Cloud",
      icon: <Globe className="w-10 h-10 text-[#00A3FF]" />,
    },
    {
      name: "Marketing Cloud",
      icon: <Mail className="w-10 h-10 text-[#7B2CBF]" />,
    },
    {
      name: "Commerce Cloud",
      icon: <Zap className="w-10 h-10 text-gray-400" />,
    },
    {
      name: "Lightning Platform",
      icon: <Zap className="w-10 h-10 text-[#F2A93B]" />,
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Salesforce Clouds <span className="text-[#F2A93B]">We Implement</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clouds.map((cloud, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="mb-6">{cloud.icon}</div>
            <h3 className="text-xl font-bold">{cloud.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const BusinessImpact = () => {
  const impacts = [
    "Faster deal cycles",
    "Improved sales visibility",
    "Automated customer journeys",
    "Accurate forecasting",
    "Reduced manual data entry",
    "Enhanced cross-team collaboration",
  ];

  return (
    <section className="py-24 px-4 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Business Impact <span className="text-[#F2A93B]">You Can Expect</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We focus on operational clarity and measurable growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {impacts.map((impact, idx) => (
            <div
              key={idx}
              className="bg-white px-8 py-3 rounded-full border border-gray-200 shadow-sm flex items-center"
            >
              <div className="w-2 h-2 rounded-full bg-[#F2A93B] mr-3"></div>
              <span className="font-semibold text-gray-700">{impact}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    "Strategic CRM Alignment",
    "Scalable Architecture",
    "Automation-Driven",
    "Secure Cloud Config",
    "Transparent Roadmap",
    "Long-Term Partnership",
    "Data Migration",
    "Apex Development",
    "Lightning Web Components",
    "REST APIs",
    "MuleSoft",
    "Salesforce Flow",
  ];

  const stats = [
    { label: "Years Experience", value: "14+" },
    { label: "Cloud Products", value: "5" },
    { label: "Implementations", value: "100+" },
    { label: "Ongoing Support", value: "24/7" },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Why <span className="text-[#F2A93B]">mTouch Labs</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We position Salesforce as a core growth infrastructure — not just
              a CRM tool.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((f, idx) => (
                <span
                  key={idx}
                  className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 border border-gray-100"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm text-center"
              >
                <div className="text-5xl font-black text-[#00A3FF] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What are Salesforce implementation services?",
      a: "Salesforce implementation services involve the end-to-end process of setting up, configuring, and customizing the Salesforce platform to meet your specific business needs. This includes discovery, design, data migration, integration, and user training.",
    },
    {
      q: "How long does implementation typically take?",
      a: "A typical implementation can take anywhere from 4 to 12 weeks depending on the complexity of your requirements, the number of users, and the volume of data to be migrated.",
    },
    {
      q: "Can you implement for multi-department organizations?",
      a: "Yes, we specialize in complex, multi-departmental implementations. We ensure that each department's unique workflows are captured while maintaining a unified view of the customer across the entire organization.",
    },
    {
      q: "Do you provide support after implementation?",
      a: "Absolutely. We offer 24/7 ongoing support and optimization services to ensure your Salesforce environment continues to evolve with your business and delivers maximum ROI.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Frequently Asked <span className="text-[#F2A93B]">Questions</span>
        </h2>
        <p className="text-lg text-gray-500">
          Everything you need to know about Salesforce implementation
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-100">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full py-6 flex justify-between items-center text-left hover:text-[#00A3FF] transition-colors"
            >
              <span className="text-xl font-bold">{faq.q}</span>
              {openIdx === idx ? (
                <ChevronDown className="w-6 h-6 rotate-180" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-gray-600 leading-relaxed text-lg">
                    {faq.a}
                  </p>
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
    <section className="py-24 px-4 bg-[#0a0f1a] text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(242,169,59,0.05),transparent_70%)]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">
          Ready to Deploy <span className="text-[#F2A93B]">Salesforce</span>?
        </h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how our implementation services can transform your CRM
          into a growth engine.
        </p>
        <button className="bg-[#7B2CBF] hover:bg-[#6a25a3] text-white px-10 py-5 rounded-xl text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-[#7B2CBF]/40">
          Start Your Implementation
        </button>
      </div>
    </section>
  );
};

// --- Main App ---

export default function SalesForceImplementationServices() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#7B2CBF] selection:text-white">
      <main>
        <Hero />
        <RevenueEnablement />
        <StatsSection />
        <Capabilities />
        <Lifecycle />
        <Clouds />
        <BusinessImpact />
        <WhyUs />
        <FAQ />
        <CTA />
      </main>

      {/* Floating Widgets */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 relative group"
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
          <MessageCircle className="w-8 h-8 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-xl border border-gray-100"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Chat Widget (Bottom Right) */}
      <div className="fixed bottom-8 left-8 z-[100] hidden lg:block">
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
              M
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Let's Chat!
            </p>
            <p className="text-sm font-black">WE ARE HERE!</p>
          </div>
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
            1
          </div>
        </div>
      </div>
    </div>
  );
}
