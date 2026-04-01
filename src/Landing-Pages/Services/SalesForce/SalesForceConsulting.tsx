import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  CheckCircle2,  
  RefreshCw, 
  ShoppingCart,
  DollarSign,
  HeartPulse,
  Home,
  Cpu,
  Factory,
  BarChart3,
  Link2,
  PieChart,
  MessageCircle,
  ChevronUp,
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="bg-[#050B1A] text-white pt-12 pb-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none" />
    <div className="container-custom relative z-10">
      <div className="flex items-center gap-2 text-xs text-white/60 mb-8 font-medium">
        <span>Home</span>
        <span className="text-white/30">/</span>
        <span>Services</span>
        <span className="text-white/30">/</span>
        <span className="text-brand-orange">Salesforce Consulting</span>
      </div>

      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6"
        >
          Salesforce <span className="text-brand-orange italic">Consulting</span> Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-display font-semibold text-white/90 mb-6"
        >
          Strategic Salesforce Implementation & CRM Transformation Experts
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/70 leading-relaxed max-w-3xl"
        >
          At mTouch Labs, we help businesses unlock the full potential of Salesforce by aligning CRM technology with strategic growth objectives. We don't just deploy Salesforce — we design scalable CRM ecosystems that improve sales performance, automate workflows, and enhance customer lifecycle management.
        </motion.p>
      </div>
    </div>
    
    {/* WhatsApp Floating Button */}
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative group">
        <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/30 transition-all" />
        <button className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl relative transition-transform hover:scale-110">
          <MessageCircle size={32} fill="currentColor" />
        </button>
      </div>
    </div>
  </section>
);

const WhyConsulting = () => (
  <section className="section-padding bg-white">
    <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
          Why <span className="text-brand-orange">Salesforce Consulting</span> Matters
        </h2>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            Salesforce is powerful — but without the right strategy and architecture, businesses struggle with poor CRM adoption, inefficient workflows, data silos, low reporting visibility, and inaccurate forecasting.
          </p>
          <p>
            Effective Salesforce consulting ensures streamlined sales pipelines, automated business processes, centralized customer data, real-time performance analytics, and scalable CRM infrastructure. Our <span className="text-brand-blue font-semibold">implementation services</span> turn strategy into operational reality.
          </p>
          <p>
            As a trusted Salesforce Consulting Company, we provide end-to-end consulting, customization, <span className="text-brand-blue font-semibold">integration</span>, and optimization services tailored to startups, SMEs, and enterprise organizations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {[
          { icon: <BarChart3 className="text-brand-purple" />, title: "Real-Time Analytics" },
          { icon: <RefreshCw className="text-brand-purple" />, title: "Workflow Automation" },
          { icon: <Link2 className="text-brand-purple" />, title: "Seamless Integration" },
          { icon: <PieChart className="text-brand-purple" />, title: "Sales Performance" },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center gap-4 transition-all hover:shadow-xl hover:bg-white"
          >
            <div className="bg-white p-4 rounded-xl shadow-sm">{item.icon}</div>
            <h3 className="font-display font-bold text-lg">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CloudsSupport = () => (
  <section className="section-padding bg-slate-50">
    <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-2 gap-4">
        {[
          { val: "100+", label: "CRM Implementations" },
          { val: "5", label: "Salesforce Clouds" },
          { val: "95%", label: "Adoption Success Rate" },
          { val: "14+", label: "Years Experience" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
            <div className="text-4xl font-display font-extrabold text-brand-blue mb-2">{stat.val}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Salesforce Clouds <span className="text-brand-orange">We Support</span>
        </h2>
        <p className="text-slate-600 mb-8">
          We tailor each cloud to align with your industry-specific requirements:
        </p>
        <ul className="space-y-4">
          {[
            { name: "Sales Cloud", desc: "pipeline management & deal closures" },
            { name: "Service Cloud", desc: "customer service & case management" },
            { name: "Marketing Cloud", desc: "campaigns & customer journeys" },
            { name: "Experience Cloud", desc: "portals & community platforms" },
            { name: "Commerce Cloud", desc: "eCommerce & digital storefronts" },
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="text-brand-orange shrink-0 mt-1" size={18} />
              <span className="text-slate-700">
                <span className="text-brand-blue font-bold">{item.name}</span> — {item.desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Our Salesforce <span className="text-brand-orange">Consulting Services</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          End-to-end CRM transformation from strategy to optimization
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            num: "01",
            title: "Salesforce Implementation",
            desc: "Business process analysis, CRM architecture design, custom object configuration, workflow automation, role-based access control, and data migration with validation."
          },
          {
            num: "02",
            title: "Customization & Development",
            desc: "Custom dashboards & reports, Lightning component development, automation rules, Apex & Visualforce customization, and advanced validation logic."
          },
          {
            num: "03",
            title: "Integration Services",
            desc: "Seamless integration with ERP systems, marketing automation, eCommerce platforms, payment gateways, and third-party APIs for a unified data ecosystem."
          },
          {
            num: "04",
            title: "Optimization & Support",
            desc: "CRM audit & health checks, automation enhancement, data cleansing, performance tuning, and user adoption training for maximum ROI."
          }
        ].map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-slate-50 p-10 rounded-3xl border border-slate-100 relative overflow-hidden group transition-all hover:bg-white hover:shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full transition-all group-hover:bg-brand-blue/10" />
            <div className="bg-brand-blue text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold mb-6 shadow-lg shadow-brand-blue/20">
              {service.num}
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Approach = () => (
  <section className="section-padding bg-slate-50">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Our Consulting <span className="text-brand-orange">Approach</span>
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          This ensures Salesforce becomes a strategic growth engine — not just a software tool.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
          {[
            { num: 1, title: "Requirement Discovery" },
            { num: 2, title: "CRM Architecture", active: true },
            { num: 3, title: "Implementation" },
            { num: 4, title: "Integration" },
            { num: 5, title: "User Training" },
            { num: 6, title: "Optimization" },
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg transition-all ${step.active ? 'bg-brand-blue scale-110' : 'bg-slate-400'}`}>
                {step.num}
              </div>
              <div className={`bg-white p-6 rounded-2xl border-2 transition-all w-full h-full flex items-center justify-center min-h-[120px] ${step.active ? 'border-brand-blue shadow-xl' : 'border-slate-100 shadow-sm'}`}>
                <span className="font-display font-bold text-sm">{step.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="section-padding bg-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Why Choose <span className="text-brand-orange">mTouch Labs</span>?
        </h2>
        <p className="text-slate-500 max-w-3xl mx-auto">
          We focus on measurable outcomes such as improved conversion rates, faster deal closures, and enhanced customer engagement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {[
          "Business-first CRM strategy",
          "Scalable & secure architecture",
          "Automation-driven workflows",
          "Real-time analytics dashboards",
          "Long-term CRM optimization",
          "Dedicated Salesforce experts"
        ].map((feature, idx) => (
          <div key={idx} className="bg-slate-50 px-6 py-3 rounded-full border border-slate-200 flex items-center gap-3 transition-all hover:bg-white hover:border-brand-orange group">
            <div className="w-2 h-2 rounded-full bg-brand-orange group-hover:scale-150 transition-transform" />
            <span className="text-sm font-semibold text-slate-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section className="section-padding bg-slate-50">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Industries We <span className="text-brand-orange">Serve</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <ShoppingCart className="text-slate-400" />, title: "eCommerce & Retail" },
          { icon: <DollarSign className="text-slate-400" />, title: "FinTech & Financial Services" },
          { icon: <HeartPulse className="text-slate-400" />, title: "Healthcare & HealthTech" },
          { icon: <Home className="text-slate-400" />, title: "Real Estate & Construction" },
          { icon: <Cpu className="text-slate-400" />, title: "SaaS & Technology" },
          { icon: <Factory className="text-slate-400" />, title: "Manufacturing & Distribution" },
        ].map((industry, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-12 rounded-3xl border border-slate-100 flex flex-col items-center text-center gap-6 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="bg-slate-50 p-4 rounded-2xl">{industry.icon}</div>
            <h3 className="text-xl font-display font-bold">{industry.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Ecosystem = () => (
  <section className="section-padding bg-white">
    <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Salesforce <span className="text-brand-orange">Ecosystem</span>
        </h2>
        <p className="text-slate-600 mb-8 text-lg">
          We leverage the full Salesforce platform and complementary technologies.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Sales Cloud", "Service Cloud", "Marketing Cloud", "Experience Cloud",
            "Commerce Cloud", "Apex", "Visualforce", "Lightning Web Components",
            "REST APIs", "SOAP APIs", "MuleSoft", "Salesforce Flow", "Einstein AI",
            "AppExchange", "Heroku", "Tableau CRM", "SOQL", "Data Loader"
          ].map((tag, idx) => (
            <span key={idx} className="bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {[
          { val: "5", label: "Cloud Products" },
          { val: "Apex", label: "Custom Development" },
          { val: "API", label: "Integration Layer" },
          { val: "LWC", label: "Lightning Components" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-all group">
            <div className="text-4xl font-display font-extrabold text-brand-blue mb-2 group-hover:scale-110 transition-transform">{item.val}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does a Salesforce consulting company do?",
      a: "A Salesforce consulting company helps businesses implement, customize, and optimize Salesforce to meet their specific needs. This includes strategy, technical architecture, development, integration, and ongoing support."
    },
    {
      q: "How long does Salesforce implementation take?",
      a: "Implementation timelines vary based on complexity, but a standard implementation typically takes 4 to 12 weeks. Large-scale enterprise transformations can take longer."
    },
    {
      q: "Can you customize Salesforce for our industry?",
      a: "Yes, we specialize in industry-specific customizations for eCommerce, FinTech, Healthcare, Real Estate, and more, ensuring the CRM aligns with your unique business processes."
    },
    {
      q: "Do you provide ongoing Salesforce support?",
      a: "Absolutely. We offer post-implementation support, maintenance, CRM audits, and performance tuning to ensure your Salesforce ecosystem continues to deliver value."
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <p className="text-slate-500">Everything you need to know about our Salesforce services</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-display font-bold text-slate-800">{faq.q}</span>
                {openIdx === idx ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
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
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="section-padding bg-[#050B1A] text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/5 to-transparent pointer-events-none" />
    <div className="container-custom relative z-10">
      <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
        Transform Your <span className="text-brand-orange">CRM Strategy</span> Today
      </h2>
      <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
        Let's discuss how our Salesforce consulting services can streamline your sales pipeline and drive growth.
      </p>
      <button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-brand-purple/20 transition-all transform hover:scale-105">
        Get a Free CRM Consultation
      </button>
    </div>
  </section>
);

export default function SalesForceConsulting() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <WhyConsulting />
        <CloudsSupport />
        <Services />
        <Approach />
        <WhyChoose />
        <Industries />
        <Ecosystem />
        <FAQ />
        <CTA />
      </main>
      
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-28 right-8 bg-brand-blue text-white p-3 rounded-full shadow-lg hover:bg-brand-blue/90 transition-all z-40"
      >
        <ChevronUp size={20} />
      </button>
    </div>
  );
}
