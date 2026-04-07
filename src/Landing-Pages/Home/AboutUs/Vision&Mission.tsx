import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ArrowRight, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  MessageCircle, 
  ChevronUp,
} from 'lucide-react';

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
    <div className="text-4xl font-bold text-blue-500 mb-2 font-outfit">{value}</div>
    <div className="text-gray-400 text-sm font-medium">{label}</div>
  </div>
);

const VisionCard = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all hover:-translate-y-1 group">
    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
      <Icon className="text-blue-500" size={32} />
    </div>
    <h3 className="text-lg font-semibold font-outfit">{title}</h3>
  </div>
);

const TrendCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all hover:-translate-y-1">
    <div className="text-blue-500 font-bold text-xl mb-4 font-outfit">{number}</div>
    <h3 className="text-xl font-bold mb-4 font-outfit">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const StepItem = ({ number, title, isLast = false }: { number: string; title: string; isLast?: boolean }) => (
  <div className="flex items-center gap-4 flex-1">
    <div className="relative">
      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
        {number}
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-[#0B1120]">
        {number}
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-bold font-outfit">{title}</span>
    </div>
    {!isLast && (
      <div className="hidden lg:block flex-1 h-[2px] bg-blue-500/20 mx-4">
        <div className="h-full bg-blue-500 w-1/2 rounded-full" />
      </div>
    )}
    {!isLast && <ArrowRight className="lg:hidden text-blue-500/20" size={20} />}
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-lg font-semibold font-outfit">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function VisionAndMission() {

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Bar */}

      {/* Header */}

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 px-4 lg:px-12 bg-[#220262] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold mb-8 text-white font-outfit"
            >
              Our <span className="text-blue-500 italic">Vision</span> & <span className="text-[#7B2CBF] italic">Mission</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl lg:text-2xl font-bold text-gray-300 mb-6 font-outfit"
            >
              WorkHolo Labs — Global IT Services & Digital Transformation Company
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Empowering businesses to innovate, scale, and lead confidently in the digital era.
            </motion.p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 px-4 lg:px-12 bg-white/2">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-outfit">Our <span className="text-[#7B2CBF]">Vision</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                At WorkHolo Labs, our vision is to become a globally recognized <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-4 cursor-pointer hover:text-blue-400 transition-colors">IT Services and Digital Transformation Company</span> that empowers businesses across India and international markets to innovate, scale, and lead confidently in the digital era.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Headquartered in Hyderabad, India, we aim to bridge global technology standards with agile engineering excellence — delivering enterprise IT solutions that drive measurable growth.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                We envision a business ecosystem where organizations leverage cutting-edge technology to achieve operational excellence and competitive advantage.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <VisionCard icon={Cloud} title="Cloud-Native Infrastructure" />
              <VisionCard icon={Cpu} title="AI-Driven Automation" />
              <VisionCard icon={ShieldCheck} title="Secure Enterprise Architecture" />
              <VisionCard icon={BarChart3} title="Data-Powered Decision Making" />
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-4 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-outfit">Our <span className="text-[#7B2CBF]">Mission</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our mission is to deliver scalable, secure, and high-performance IT services that enable sustainable digital transformation for businesses worldwide.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                As a trusted Digital Transformation Company in India serving global clients, we focus on:
              </p>
              <ul className="space-y-4">
                {[
                  "Designing enterprise-grade software solutions",
                  "Modernizing legacy systems with <span class='text-blue-500'>cloud transformation</span>",
                  "Implementing <span class='text-blue-500'>AI and automation</span> frameworks",
                  "Strengthening cybersecurity and compliance standards",
                  "Aligning technology investments with business KPIs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="text-[#7B2CBF] shrink-0 mt-1" size={18} />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 grid grid-cols-2 gap-6"
            >
              <StatCard value="14+" label="Years of Excellence" />
              <StatCard value="500+" label="Projects Delivered" />
              <StatCard value="200+" label="Global Clients" />
              <StatCard value="98%" label="Client Retention" />
            </motion.div>
          </div>
        </section>

        {/* Trends Section */}
        <section className="py-24 px-4 lg:px-12 bg-white/2">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-outfit">How Our Vision Aligns with <span className="text-[#7B2CBF]">Global Digital Trends</span></h2>
              <p className="text-gray-400 text-lg">Modern enterprises require advanced digital capabilities to stay competitive</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TrendCard 
                number="01" 
                title="Cloud-First Infrastructure" 
                description="Scalable, resilient cloud architecture that supports business agility and global reach."
              />
              <TrendCard 
                number="02" 
                title="Intelligent Workflow Automation" 
                description="AI-powered process automation that reduces manual effort and accelerates operational efficiency."
              />
              <TrendCard 
                number="03" 
                title="Integrated CRM & ERP Systems" 
                description="Unified business platforms that centralize data, streamline workflows, and improve visibility."
              />
              <TrendCard 
                number="04" 
                title="Real-Time Data Analytics" 
                description="Live dashboards and business intelligence tools that drive data-powered decision-making."
              />
              <div className="lg:col-span-2">
                <TrendCard 
                  number="05" 
                  title="Agile DevOps Environments" 
                  description="Continuous integration and delivery pipelines that ensure faster releases and higher quality."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 px-4 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-outfit">Our Digital <span className="text-[#7B2CBF]">Transformation Philosophy</span></h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-20">
              Digital transformation is not a one-time upgrade — it is a continuous evolution. Our approach ensures long-term ROI and operational resilience.
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 bg-white/5 p-12 rounded-3xl border border-white/10">
              <StepItem number="1" title="Assessment" />
              <StepItem number="2" title="Planning" />
              <StepItem number="3" title="Optimization" />
              <StepItem number="4" title="Implementation" />
              <StepItem number="5" title="Monitoring" />
              <StepItem number="6" title="Improvement" isLast />
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-24 px-4 lg:px-12 bg-white/2">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-outfit">Commitment to <span className="text-[#7B2CBF]">Excellence & Trust</span></h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
              As an emerging global IT consulting partner from India, WorkHolo Labs is committed to building digital solutions designed to grow with our clients — across industries and geographic markets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Ethical business practices",
                "Transparent communication",
                "Scalable & secure architecture",
                "Long-term client partnerships",
                "Innovation-driven engineering"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors cursor-default">
                  <div className="w-2 h-2 bg-[#7B2CBF] rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center font-outfit">Frequently Asked Questions</h2>
            <div className="flex flex-col">
              <FAQItem 
                question="What is the vision of WorkHolo Labs?" 
                answer="Our vision is to become a globally recognized IT Services and Digital Transformation Company that empowers businesses across India and international markets to innovate, scale, and lead confidently in the digital era."
              />
              <FAQItem 
                question="What is the mission of WorkHolo Labs?" 
                answer="Our mission is to deliver scalable, secure, and high-performance IT services that enable sustainable digital transformation for businesses worldwide."
              />
              <FAQItem 
                question="Where is WorkHolo Labs located?" 
                answer="WorkHolo Labs is headquartered in Hyderabad, India, with additional offices in Bangalore and a strong presence in the USA."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 lg:px-12">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600/20 to-blue-900/20 border border-blue-500/20 rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500/10 pointer-events-none" />
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 font-outfit">
              Partner with a Trusted <span className="text-[#7B2CBF]">Digital Transformation</span> Company
            </h2>
            <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to align your technology with your business vision? WorkHolo Labs combines strategic consulting with deep technical expertise to deliver measurable business outcomes.
            </p>
            <button className="bg-[#7B2CBF] hover:bg-[#4d0c87] text-black px-10 py-5 rounded-xl text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#7B2CBF]/20">
              Connect With Our Team
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <button className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group relative">
          <MessageCircle size={28} />
          <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </div>
        </button>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform"
        >
          <ChevronUp size={24} />
        </button>
      </div>
    </div>
  );
}
