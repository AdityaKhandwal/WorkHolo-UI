import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Eye,
  Plus,
  Minus,
  MessageCircle,
  ArrowUp
} from 'lucide-react';


const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
          <span>Home</span>
          <span className="text-white/20">/</span>
          <span>Services</span>
          <span className="text-white/20">/</span>
          <span className="text-yellow-500">AI & Machine Learning</span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1]"
        >
          Enterprise AI & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Machine Learning</span> Development <br />
          Company
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 font-medium"
        >
          Scalable, Data-Driven AI & ML Solutions for Business Growth
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/50 max-w-2xl mx-auto mb-12"
        >
          WorkHolo Labs is a results-driven Machine Learning Development Company delivering scalable AI & ML solutions that help businesses automate processes, improve decision-making, and unlock predictive insights.
        </motion.p>
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[40%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[40%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
};

const WhatIsML = () => {
  const cards = [
    { title: 'Custom ML Models', icon: <Brain className="text-pink-500" /> },
    { title: 'Predictive Analytics', icon: <BarChart3 className="text-blue-500" /> },
    { title: 'NLP & Chatbots', icon: <MessageSquare className="text-purple-500" /> },
    { title: 'Computer Vision', icon: <Eye className="text-red-500" /> }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What Are <span className="text-yellow-500">Machine Learning</span> <br /> Services?
          </h2>
          <div className="space-y-6 text-white/70 leading-relaxed">
            <p>
              Machine Learning services involve designing algorithms and AI models that enable systems to learn from data, identify patterns, and make intelligent decisions without explicit programming.
            </p>
            <p>
              Businesses leverage ML to automate repetitive processes, improve operational efficiency, enhance customer personalization, predict future trends, detect fraud and anomalies, and optimize supply chain performance. Our <span className="text-blue-400 font-bold">data science solutions</span> provide the analytical foundation for building accurate ML models.
            </p>
            <p>
              As a trusted IT Services and Digital Transformation Company, we design, develop, and deploy machine learning systems tailored to enterprise use cases — from <span className="text-blue-400 font-bold">generative AI</span> and intelligent automation to recommendation engines and computer vision.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center gap-4"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-2">
                {React.cloneElement(card.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
              </div>
              <h3 className="font-bold text-lg">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const stats = [
    { value: '14+', label: 'Years of Experience' },
    { value: '250+', label: 'ML Models Deployed' },
    { value: '1200+', label: 'Global Clients' },
    { value: '98%', label: 'Model Accuracy' }
  ];

  const points = [
    { title: 'ML Consulting & Strategy', desc: 'AI readiness assessment & roadmap' },
    { title: 'Custom ML Model Development', desc: 'Supervised, unsupervised & forecasting' },
    { title: 'Natural Language Processing', desc: 'Chatbots, sentiment analysis & automation' },
    { title: 'Computer Vision', desc: 'Image recognition, object detection & video analytics' },
    { title: 'MLOps & Deployment', desc: 'Cloud (AWS, Azure, GCP), CI/CD pipelines & monitoring', isCloud: true }
  ];

  return (
    <section className="py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center">
              <div className="text-5xl font-black text-blue-500 mb-2">{stat.value}</div>
              <div className="text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8">Our <span className="text-yellow-500">ML Expertise</span></h2>
          <p className="text-white/70 mb-10">
            At WorkHolo Labs, we provide end-to-end Machine Learning development services, including:
          </p>
          <div className="space-y-6">
            {points.map((point, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="text-yellow-500 shrink-0 mt-1" size={20} />
                <div>
                  <span className="font-bold">{point.title}</span> — {point.desc.includes('Cloud') ? (
                    <>
                      {point.desc.split('Cloud')[0]}
                      <span className="text-blue-400 font-bold">Cloud</span>
                      {point.desc.split('Cloud')[1]}
                    </>
                  ) : point.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      num: '01',
      title: 'ML Consulting & Strategy',
      desc: 'AI readiness assessment, data infrastructure evaluation, ML roadmap development, and use-case identification.'
    },
    {
      num: '02',
      title: 'Custom Model Development',
      desc: 'Supervised & unsupervised learning, predictive analytics, classification, regression, and time-series forecasting.'
    },
    {
      num: '03',
      title: 'Natural Language Processing',
      desc: 'Chatbots, virtual assistants, sentiment analysis, text classification, and document automation.'
    },
    {
      num: '04',
      title: 'Computer Vision Solutions',
      desc: 'Image recognition, facial recognition, object detection, and video analytics for visual intelligence.'
    }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          End-to-End <span className="text-yellow-500">ML Development Services</span>
        </h2>
        <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
          From consulting to deployment, we cover every stage of the ML lifecycle
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 p-10 rounded-3xl relative overflow-hidden group"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mb-6">
                {s.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-white/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* MLOps Section */}
        <div className="mt-8">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold mb-6">
              05
            </div>
            <h3 className="text-2xl font-bold mb-4">MLOps & Model Deployment</h3>
            <p className="text-white/60 leading-relaxed">
              Model training & optimization, cloud deployment (AWS, Azure, GCP), CI/CD for ML pipelines, and performance monitoring.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    'Business Analysis',
    'Data Collection',
    'Feature Engineering',
    'Model Training',
    'Testing & Optimization',
    'Deployment',
    'Monitoring'
  ];

  return (
    <section className="py-24 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our ML <span className="text-yellow-500">Development Process</span>
        </h2>
        <p className="text-white/60 mb-20 max-w-3xl mx-auto">
          This structured approach ensures measurable ROI and long-term model efficiency.
        </p>

        <div className="relative flex flex-wrap justify-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center group">
              <div className="flex flex-col items-center relative">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4 z-10 shadow-lg shadow-blue-500/40">
                  {i + 1}
                </div>
                <div className="bg-white/5 border border-white/10 px-6 py-8 rounded-2xl w-36 h-36 flex items-center justify-center text-center font-bold text-sm group-hover:bg-blue-500/10 transition-colors">
                  {step}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-12 h-[2px] bg-white/10 mx-[-10px] mt-[-40px]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const reasons = [
    'Strong data engineering capabilities',
    'Cloud-native ML architecture',
    'Secure & scalable AI deployment',
    'Enterprise integration expertise',
    'Continuous model optimization',
    'Transparent reporting & analytics'
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Choose <span className="text-yellow-500">WorkHolo Labs</span> for ML?
        </h2>
        <p className="text-white/60 mb-16 max-w-3xl mx-auto">
          We don't just build models — we build intelligent systems aligned with business goals.
        </p>

        <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-full px-8">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="font-bold text-sm md:text-base">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { title: 'FinTech & Banking', icon: '💰' },
    { title: 'Healthcare & HealthTech', icon: '🏥' },
    { title: 'eCommerce & Retail', icon: '🛒' },
    { title: 'Manufacturing & Supply Chain', icon: '🏭' },
    { title: 'Real Estate & PropTech', icon: '🏠' },
    { title: 'SaaS & Technology Platforms', icon: '🚀' }
  ];

  return (
    <section className="py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Industries We <span className="text-yellow-500">Serve</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-12 rounded-3xl flex flex-col items-center gap-6 group hover:bg-white/10 transition-all"
            >
              <div className="text-5xl">{ind.icon}</div>
              <h3 className="text-xl font-bold">{ind.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technologies = () => {
  const tags = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI & LLMs',
    'AWS SageMaker', 'Azure ML', 'Google AI Platform', 'Keras', 'MLflow',
    'Hugging Face', 'LangChain', 'NumPy', 'Pandas', 'Spark MLlib',
    'Kubeflow', 'Docker', 'Kubernetes', 'CI/CD', 'Git'
  ];

  const stats = [
    { value: '3', label: 'Cloud Platforms' },
    { value: '20+', label: 'ML Frameworks' },
    { value: '150+', label: 'Expert Engineers' },
    { value: '24/7', label: 'Model Monitoring' }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Machine Learning <br />
            <span className="text-yellow-500">Development Technologies</span>
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed">
            Our ML solutions are built on scalable cloud infrastructure to ensure high availability and performance.
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-500 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center">
              <div className="text-5xl font-black text-blue-500 mb-2">{stat.value}</div>
              <div className="text-white/60 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: 'What are machine learning services?', a: 'Machine learning services involve designing algorithms and AI models that enable systems to learn from data, identify patterns, and make intelligent decisions without explicit programming.' },
    { q: 'How can machine learning benefit my business?', a: 'Businesses leverage ML to automate repetitive processes, improve operational efficiency, enhance customer personalization, predict future trends, detect fraud and anomalies, and optimize supply chain performance.' },
    { q: 'How long does it take to implement ML solutions?', a: 'Implementation timelines vary depending on complexity, but typically range from 3 to 9 months for enterprise-grade solutions.' },
    { q: 'Does WorkHolo Labs provide enterprise ML solutions?', a: 'Yes, we specialize in enterprise-grade ML solutions tailored to specific business needs and scalable across global infrastructures.' }
  ];

  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </h2>
        <p className="text-center text-white/60 mb-16">
          Everything you need to know about our ML services
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full py-6 flex justify-between items-center text-left font-bold text-lg hover:text-blue-400 transition-colors"
              >
                {faq.q}
                {open === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-white/60 leading-relaxed">
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

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[40px] p-12 md:p-20 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8">
          Ready to Build <span className="text-yellow-500">Intelligent Systems</span>?
        </h2>
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
          Let's discuss how machine learning can transform your business operations and drive measurable growth.
        </p>
        <button className="bg-[#7B2CBF] hover:bg-purple-700 text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-2xl shadow-purple-500/40">
          Get a Free Consultation
        </button>
      </div>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-blue-500/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-purple-500/20 blur-[150px] rounded-full"></div>
      </div>
    </section>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 cursor-pointer group relative"
      >
        <MessageCircle size={32} className="text-white" />
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </div>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 cursor-pointer group relative"
      >
        <ArrowUp size={32} className="text-white" />
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Back to Top
        </div>
      </motion.div>

      <div className="fixed bottom-8 left-8">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
            <MessageSquare className="text-black" size={24} />
          </div>
          <div>
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Let's Chat!</div>
            <div className="text-sm font-bold text-white">WE ARE ONLINE!</div>
          </div>
          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white ml-2">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      <main>
        <Hero />
        <WhatIsML />
        <Expertise />
        <Services />
        <Process />
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

