import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ChevronRight,  
  Globe, 
  Plus, 
  Database,
  Layers,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  MessageCircle,
  ArrowUp
} from 'lucide-react';

// --- Constants & Types ---

const CAPABILITIES = [
  {
    id: '01',
    title: 'AI-Powered Digital Assistants',
    description: 'Intelligent assistants with multi-step contextual conversations, knowledge base interaction, internal process automation, and dynamic response adaptation.'
  },
  {
    id: '02',
    title: 'Intelligent Content & Document Systems',
    description: 'Structured automation of document drafting, report summarization, contract analysis, and data interpretation reducing manual effort while maintaining quality.'
  },
  {
    id: '03',
    title: 'Personalized Experience Engines',
    description: 'Adaptive AI systems that recommend products dynamically, adjust content based on user behavior, personalize digital journeys, and optimize engagement.'
  },
  {
    id: '04',
    title: 'AI-Augmented Enterprise Workflows',
    description: 'Generative intelligence embedded into CRM systems, internal dashboards, analytics platforms, and knowledge management tools enhancing productivity.'
  },
  {
    id: '05',
    title: 'Responsible & Secure AI Deployment',
    description: 'Controlled model access, secure API architecture, data isolation frameworks, compliance-aware system design, and continuous model performance monitoring.'
  }
];

const INDUSTRIES = [
  { name: 'Financial Services', icon: <BarChart3 className="w-8 h-8 text-blue-500" /> },
  { name: 'Healthcare & Clinical', icon: <Plus className="w-8 h-8 text-red-500" /> },
  { name: 'SaaS & Digital Platforms', icon: <Layers className="w-8 h-8 text-indigo-500" /> },
  { name: 'eCommerce & Retail', icon: <Database className="w-8 h-8 text-orange-500" /> },
  { name: 'Legal & Documentation', icon: <ShieldCheck className="w-8 h-8 text-yellow-500" /> },
  { name: 'Enterprise Corporate', icon: <Globe className="w-8 h-8 text-cyan-500" /> },
];

const TECH_TAGS = [
  'OpenAI GPT', 'Claude API', 'LangChain', 'LlamaIndex', 'Hugging Face',
  'Python', 'TensorFlow', 'PyTorch', 'AWS Bedrock', 'Azure OpenAI',
  'Google Vertex AI', 'RAG Architecture', 'Vector Databases', 'Pinecone',
  'ChromaDB', 'Docker', 'Kubernetes', 'REST APIs', 'GraphQL', 'CI/CD'
];

const FAQS = [
  {
    question: 'What is generative AI development?',
    answer: 'Generative AI development involves building systems that can create new content, such as text, images, or code, using advanced machine learning models like Large Language Models (LLMs).'
  },
  {
    question: 'How can generative AI improve enterprise productivity?',
    answer: 'It automates repetitive tasks, enhances decision-making with data insights, personalizes customer interactions, and streamlines content creation workflows.'
  },
  {
    question: 'Is generative AI suitable for regulated industries?',
    answer: 'Yes, with proper security frameworks, data isolation, and compliance-aware design, generative AI can be safely deployed in finance, healthcare, and legal sectors.'
  },
  {
    question: 'Can generative AI integrate with existing platforms?',
    answer: 'Absolutely. We architect AI solutions that seamlessly connect with your existing CRM, ERP, and data infrastructure via secure APIs.'
  }
];

// --- Components ---

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg ${light ? 'text-slate-300' : 'text-slate-500'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
      >
        <span className="text-lg font-semibold text-slate-800">{question}</span>
        {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
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
};

export default function GenerativeAI() {
  return (
    <div className="min-h-screen font-['Inter',sans-serif] selection:bg-primary/30">

      {/* --- Hero Section --- */}
      <section className="relative bg-[#050B18] text-white py-32 px-4 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2CBF]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center gap-2 text-sm font-bold mb-6 text-slate-400">
              <span>Home</span> / <span>Services</span> / <span className="text-orange-500">Generative AI Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Generative <span className="text-orange-500">AI</span> Development <br /> Company
            </h1>
            <p className="text-xl md:text-2xl font-bold text-slate-300 mb-10 max-w-3xl mx-auto">
              Intelligent Systems Designed to Think, Create & Evolve
            </p>
            <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed mb-12">
              mTouch Labs operates as a specialized generative AI development company, engineering advanced AI-driven systems that generate content, automate reasoning, and enhance decision-making across digital platforms. Innovation is no longer about automation alone — it's about intelligent generation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Understanding Section --- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-slate-900 leading-tight">
              Understanding <span className="text-orange-500">Generative AI</span> in Business
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Generative AI represents a shift from rule-based automation to adaptive intelligence. Instead of simply responding to inputs, modern AI systems can create, analyze, summarize, and personalize outputs in real time.
              </p>
              <p>
                Generative AI systems are capable of producing context-aware responses, content drafts and summaries, analytical insights, code suggestions, and data-driven recommendations. Our <a href="#" className="text-blue-600 font-semibold hover:underline">machine learning services</a> provide the foundational models that power generative AI applications.
              </p>
              <p>
                Combined with <a href="#" className="text-blue-600 font-semibold hover:underline">data science capabilities</a>, we architect generative AI within your ecosystem to maximize value and integrate with <a href="#" className="text-blue-600 font-semibold hover:underline">cloud infrastructure</a> for scalable deployment.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { title: 'Adaptive Intelligence', icon: '🧠', color: 'bg-pink-50' },
              { title: 'Content Generation', icon: '✍️', color: 'bg-orange-50', active: true },
              { title: 'Digital Assistants', icon: '🤖', color: 'bg-indigo-50' },
              { title: 'Responsible AI', icon: '🔒', color: 'bg-slate-50' },
            ].map((item) => (
              <motion.div 
                key={item.title}
                whileHover={{ y: -5 }}
                className={`${item.color} p-8 rounded-2xl flex flex-col items-center text-center border ${item.active ? 'border-orange-500 shadow-lg' : 'border-transparent'}`}
              >
                <span className="text-4xl mb-4">{item.icon}</span>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Business Impact Section --- */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'AI Projects', value: '100+' },
              { label: 'Model Integration', value: 'LLM' },
              { label: 'Cloud Platforms', value: '3' },
              { label: 'Years Experience', value: '14+' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="text-4xl font-black text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 text-slate-900">
              Business Impact of <span className="text-orange-500">Generative AI</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Generative AI shifts businesses from reactive systems to proactive intelligence:
            </p>
            <ul className="space-y-4">
              {[
                'Accelerated content production & reduced operational workload',
                'Improved knowledge retrieval & enhanced personalization',
                'Faster decision-making & increased workflow efficiency',
                'AI-augmented enterprise workflows — CRM, dashboards & analytics',
                'Responsible & secure deployment with compliance governance'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Capabilities Section --- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="From digital assistants to enterprise workflow intelligence">
            Generative AI <span className="text-orange-500">Capabilities We Engineer</span>
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {CAPABILITIES.map((cap) => (
              <motion.div 
                key={cap.id}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                  {cap.id}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{cap.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Strategic Implementation Framework --- */}
      <section className="py-24 px-4 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Structured framework ensures sustainable AI adoption.">
            Strategic <span className="text-orange-500">Implementation Framework</span>
          </SectionHeading>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
              {[
                'Opportunity Mapping', 'Data Assessment', 'Architecture', 'Model Integration', 'Validation', 'Monitoring', 'Optimization'
              ].map((step, idx) => (
                <div key={step} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center justify-center mb-4 relative group hover:border-blue-500 transition-colors">
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white rounded-full text-[10px] flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <div className="w-8 h-8 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 leading-tight">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Partner Section --- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="We focus on practical AI integration that delivers measurable value.">
            Why Organizations <span className="text-orange-500">Partner with mTouch Labs</span>
          </SectionHeading>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Applied AI engineering expertise',
              'Architecture-first implementation',
              'Scalable cloud integration models',
              'Secure enterprise-grade deployment',
              'Continuous optimization strategy',
              'Long-term innovation roadmap'
            ].map((item) => (
              <div key={item} className="bg-white border border-slate-200 px-8 py-4 rounded-full shadow-sm flex items-center gap-3 hover:border-primary transition-colors cursor-default">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span className="font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Industries Section --- */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>
            Industries Benefiting from <span className="text-orange-500">Generative AI</span>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <motion.div 
                key={industry.name}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Technologies Section --- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-slate-900">
              Generative AI <span className="text-orange-500">Development Technologies</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Cutting-edge AI frameworks and cloud platforms for generative intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold border border-slate-200 hover:bg-white hover:border-primary transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'AI Frameworks', value: '20+' },
              { label: 'Model Integration', value: 'LLM' },
              { label: 'Architecture', value: 'RAG' },
              { label: 'Cloud Platforms', value: '3' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center flex flex-col justify-center min-h-[200px]">
                <div className="text-5xl font-black text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-500 font-bold uppercase text-xs tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Everything about generative AI development">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </SectionHeading>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Ready to Build CTA --- */}
      <section className="py-24 px-4 bg-[#050B18] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ready to Build <span className="text-orange-500">Generative AI</span> Systems?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how generative AI can transform your enterprise operations with intelligent automation.
          </p>
          <button className="bg-[#7B2CBF] hover:bg-[#6A25A4] text-white px-12 py-5 rounded-xl text-xl font-black transition-all transform hover:scale-105 shadow-xl shadow-[#7B2CBF]/20">
            Start Your AI Project
          </button>
        </div>
      </section>

      {/* --- Footer --- */}
      

      {/* --- Floating Actions --- */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 relative group"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
            Chat with us
          </span>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">1</div>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>

    </div>
  );
}
