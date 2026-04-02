import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Database, 
  Cpu, 
  Globe, 
  Activity, 
  Smartphone, 
  Building2, 
  ShoppingCart, 
  Stethoscope, 
  Truck, 
  CreditCard,
  MessageCircle,
  
} from 'lucide-react';

// --- Components ---


const Hero = () => (
  <section className="bg-dark text-white pt-20 pb-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent pointer-events-none" />
    <div className="container-max relative z-10 text-center">
      <div className="flex items-center justify-center gap-2 text-xs font-medium mb-8 opacity-60 uppercase tracking-widest">
        <span>Home</span> / <span>Services</span> / <span className="text-accent">Data Science Solutions</span>
      </div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
      >
        Data <span className="text-accent italic">Science</span> Solutions
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
      >
        Turning Complex Data into Strategic Business Intelligence
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-sm text-gray-500 max-w-2xl mx-auto mt-6"
      >
        WorkHolo Labs delivers advanced data science solutions that help organizations transform raw data into actionable intelligence. Data is valuable — only when it becomes insight.
      </motion.p>
    </div>
  </section>
);

const WhatIsDataScience = () => (
  <section className="section-padding bg-white">
    <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          What Are <span className="text-accent">Data Science</span> Solutions?
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Data science solutions involve collecting, analyzing, modeling, and interpreting data to solve business problems and improve strategic outcomes — including data exploration, predictive analytics, statistical modeling, pattern recognition, business intelligence dashboards, and data-driven forecasting.
          </p>
          <p>
            The goal is not just reporting — it is measurable decision advantage. Our <span className="text-secondary font-semibold">machine learning services</span> complement data science with automated model training and deployment.
          </p>
          <p>
            Combined with <span className="text-secondary font-semibold">generative AI</span>, we transform analytical insights into intelligent automation that drives real business outcomes on <span className="text-secondary font-semibold">scalable cloud infrastructure</span>.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: <Activity className="text-secondary" />, title: "Predictive Analytics" },
          { icon: <Database className="text-secondary" />, title: "Data Engineering" },
          { icon: <BarChart3 className="text-secondary" />, title: "Business Intelligence" },
          { icon: <Cpu className="text-secondary" />, title: "Statistical Modeling" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-4 shadow-sm"
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
              {item.icon}
            </div>
            <h3 className="font-bold text-sm">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BusinessImpact = () => (
  <section className="section-padding bg-gray-50">
    <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
      <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
        {[
          { val: "200+", label: "Analytics Projects" },
          { val: "95%", label: "Forecast Accuracy" },
          { val: "PB+", label: "Data Processed" },
          { val: "14+", label: "Years Experience" }
        ].map((stat, i) => (
          <div key={i} className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">{stat.val}</div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="order-1 lg:order-2">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Business Impact of <span className="text-accent">Data Science</span>
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Data science shifts organizations from reactive analysis to predictive intelligence:
        </p>
        <ul className="space-y-4">
          {[
            "Better strategic decisions & reduced operational risk",
            "Improved forecasting accuracy & enhanced customer insights",
            "Increased revenue optimization & measurable performance visibility",
            "Real-time KPI tracking with interactive dashboards",
            "Data governance aligned with <span class='text-secondary font-semibold'>enterprise systems</span>"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
              <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Capabilities = () => (
  <section className="section-padding bg-white">
    <div className="container-max text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Data Science <span className="text-accent">Capabilities</span>
      </h2>
      <p className="text-gray-500">From predictive analytics to data strategy consulting</p>
    </div>
    
    <div className="container-max grid md:grid-cols-2 gap-8">
      {[
        { 
          num: "01", 
          title: "Predictive Analytics & Forecasting", 
          desc: "Predictive models for demand forecasting, risk pattern identification, pricing optimization, customer retention improvement, and operational challenge anticipation." 
        },
        { 
          num: "02", 
          title: "Data Engineering & Infrastructure", 
          desc: "Data pipelines, ETL processes, scalable data storage, cloud-based analytics infrastructure, and real-time processing frameworks for reliable insights." 
        },
        { 
          num: "03", 
          title: "Business Intelligence & Visualization", 
          desc: "Interactive dashboards with real-time performance metrics, KPI tracking, trend analysis, data storytelling, and executive reporting systems." 
        },
        { 
          num: "04", 
          title: "Statistical & Analytical Modeling", 
          desc: "Regression analysis, clustering techniques, trend identification, anomaly detection, and scenario simulation aligned with real business objectives." 
        },
        { 
          num: "05", 
          title: "Data Strategy Consulting", 
          desc: "Data governance frameworks, quality standards improvement, analytics-growth alignment, measurable KPI identification, and reporting workflow optimization." 
        }
      ].map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className={`p-10 rounded-3xl border border-gray-100 shadow-sm ${i === 4 ? 'md:col-span-2' : ''} bg-gray-50/50`}
        >
          <div className="w-10 h-10 bg-secondary text-white rounded-lg flex items-center justify-center font-bold text-xs mb-6">
            {item.num}
          </div>
          <h3 className="text-xl font-bold mb-4">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ImplementationFramework = () => (
  <section className="section-padding bg-gray-50 overflow-hidden">
    <div className="container-max text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our Implementation <span className="text-accent">Framework</span>
      </h2>
      <p className="text-gray-500">Ensuring accuracy, reliability, and long-term scalability.</p>
    </div>
    
    <div className="container-max relative">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-secondary/20 -translate-y-1/2 hidden lg:block" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
        {[
          { num: 1, title: "Problem ID" },
          { num: 2, title: "Data Assessment" },
          { num: 3, title: "Model Design" },
          { num: 4, title: "Validation" },
          { num: 5, title: "Deployment" },
          { num: 6, title: "Monitoring" },
          { num: 7, title: "Optimization" }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-md flex items-center justify-center text-center p-4 border border-gray-100">
                <span className="text-[10px] font-bold leading-tight">{step.title}</span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-gray-50">
                {step.num}
              </div>
              {i < 6 && (
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-secondary/40 hidden lg:block">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="section-padding bg-white">
    <div className="container-max text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Why Choose WorkHolo Labs for <span className="text-accent">Data Science</span>?
      </h2>
      <p className="text-gray-500">We transform data complexity into measurable business clarity.</p>
    </div>
    
    <div className="container-max flex flex-wrap justify-center gap-4">
      {[
        "Structured analytical methodology",
        "Scalable data infrastructure design",
        "Predictive modeling expertise",
        "Cloud-based analytics integration",
        "Enterprise-focused implementation",
        "Continuous performance refinement"
      ].map((item, i) => (
        <div key={i} className="px-8 py-4 bg-gray-50 rounded-full border border-gray-100 flex items-center gap-3 shadow-sm">
          <div className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-sm font-semibold text-gray-700">{item}</span>
        </div>
      ))}
    </div>
  </section>
);

const Industries = () => (
  <section className="section-padding bg-gray-50">
    <div className="container-max text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Industries Leveraging <span className="text-accent">Data Science</span>
      </h2>
    </div>
    
    <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: <CreditCard className="text-secondary" />, title: "Financial Services" },
        { icon: <Stethoscope className="text-secondary" />, title: "Healthcare & Clinical" },
        { icon: <ShoppingCart className="text-secondary" />, title: "eCommerce & Retail" },
        { icon: <Truck className="text-secondary" />, title: "Logistics & Supply Chain" },
        { icon: <Smartphone className="text-secondary" />, title: "SaaS & Technology" },
        { icon: <Building2 className="text-secondary" />, title: "Enterprise Corporate" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          whileHover={{ scale: 1.02 }}
          className="p-12 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-6"
        >
          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shadow-inner">
            {item.icon}
          </div>
          <h3 className="text-lg font-bold">{item.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

const Technologies = () => (
  <section className="section-padding bg-white">
    <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Data Science <span className="text-accent">Development</span> Technologies
        </h2>
        <p className="text-gray-600 mb-10 leading-relaxed">
          Enterprise data platforms and analytical frameworks for scalable intelligence.
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            "Python", "R", "SQL", "Pandas", "NumPy", "Scikit-learn", "TensorFlow",
            "PyTorch", "Apache Spark", "Hadoop", "Airflow", "dbt", "Snowflake",
            "BigQuery", "Redshift", "Tableau", "Power BI", "Looker", "AWS", "Azure"
          ].map((tech, i) => (
            <span key={i} className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 text-xs font-bold text-gray-600">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {[
          { val: "20+", label: "Analytics Tools" },
          { val: "BI", label: "Dashboard Platforms" },
          { val: "ETL", label: "Data Pipelines" },
          { val: "3", label: "Cloud Platforms" }
        ].map((stat, i) => (
          <div key={i} className="p-10 bg-white rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col justify-center">
            <div className="text-4xl font-bold text-secondary mb-2">{stat.val}</div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqs = [
    {
      q: "What are data science solutions?",
      a: "Data science solutions involve collecting, analyzing, modeling, and interpreting data to solve business problems and improve strategic outcomes — including data exploration, predictive analytics, statistical modeling, pattern recognition, business intelligence dashboards, and data-driven forecasting."
    },
    {
      q: "How do data science solutions benefit businesses?",
      a: "They help in making better strategic decisions, reducing operational risks, improving forecasting accuracy, and gaining deeper customer insights. They also drive revenue optimization and provide measurable performance visibility."
    },
    {
      q: "Is data science different from generative AI?",
      a: "Yes, data science focuses on extracting insights and making predictions from data, while generative AI focuses on creating new content. However, they are often used together to automate insights and drive intelligent actions."
    },
    {
      q: "Can data science integrate with existing systems?",
      a: "Absolutely. We design our solutions to integrate seamlessly with your existing enterprise systems, ensuring that insights are accessible and actionable within your current workflows."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>
        <p className="text-gray-500">Everything about data science solutions</p>
      </div>
      
      <div className="container-max max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center font-bold text-lg"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                {faq.q}
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-600 leading-relaxed"
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
  <section className="section-padding bg-dark text-white relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
    <div className="container-max text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        Ready to Unlock <span className="text-accent font-display italic">Data Intelligence</span>?
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
        Let's discuss how data science can transform your raw data into strategic business intelligence.
      </p>
      <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(123,44,191,0.4)] border-2 border-white/10">
        Start Your Data Project
      </button>
    </div>
  </section>
);

const GlobalPresence = () => (
  <section className="bg-dark text-white py-20 px-6 md:px-12 lg:px-24 border-t border-white/5">
    <div className="container-max">
      <div className="flex items-center gap-3 mb-16">
        <Globe className="text-secondary" />
        <h2 className="text-xl font-bold uppercase tracking-widest">Global Presence</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {[
          { region: "India", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
          { region: "Americas", cities: ["United States", "Canada"] },
          { region: "Europe", cities: ["United Kingdom", "Germany", "Ireland"] },
          { region: "Asia Pacific", cities: ["Singapore", "Australia", "New Zealand", "India"] },
          { region: "Middle East", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] }
        ].map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary">{item.region}</h4>
            </div>
            <ul className="space-y-4 text-sm text-gray-500">
              {item.cities.map((city, j) => (
                <li key={j} className="hover:text-white cursor-pointer transition-colors">{city}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FloatingButtons = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
    <motion.button 
      whileHover={{ scale: 1.1 }}
      className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
    >
      <MessageCircle size={28} />
    </motion.button>
    <motion.button 
      whileHover={{ scale: 1.1 }}
      className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
    >
      <ArrowRight size={28} className="-rotate-90" />
    </motion.button>
  </div>
);

// --- Main App ---

export default function DataScienceSolution() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Hero />
      <WhatIsDataScience />
      <BusinessImpact />
      <Capabilities />
      <ImplementationFramework />
      <WhyChooseUs />
      <Industries />
      <Technologies />
      <FAQ />
      <CTA />
      <GlobalPresence />
      <FloatingButtons />
    </div>
  );
}
