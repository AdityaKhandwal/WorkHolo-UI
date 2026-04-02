import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  CheckCircle2, 
  Bot, 
  Zap, 
  Lock, 
  RefreshCcw, 
  Link2, 
  User, 
  ClipboardList, 
  MessageCircle, 
  ArrowUp,
  Cloud,
  Smartphone,
  Database,
  ShoppingCart,
  Settings,
} from "lucide-react";

const PRIMARY_PURPLE = "#7B2CBF";
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050B1A] via-[#0A1A3F] to-[#050B1A] z-0"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[12px] md:text-[14px] font-bold tracking-widest uppercase mb-8"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-ping"></div>
          QUALITY ASSURANCE · INDIA
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white font-display font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 tracking-tight"
        >
          Hire <span className="text-blue-400">Quality Analyst</span> Developers in <span className="text-yellow-500">India</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <button 
            className="w-full sm:w-auto px-10 py-4 rounded-xl text-white font-display font-bold text-[16px] md:text-[18px] flex items-center justify-center transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(123,44,191,0.4)] active:scale-95"
            style={{ backgroundColor: PRIMARY_PURPLE }}
          >
            Hire QA Developers <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="w-full sm:w-auto px-10 py-4 rounded-xl border-2 border-gray-700 text-white font-display font-bold text-[16px] md:text-[18px] hover:bg-white/5 transition-all active:scale-95">
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "1050+", label: "Global Clients" },
    { value: "14+", label: "Years in Tech" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 font-sans text-lg md:text-2xl leading-relaxed mb-8"
          >
            Launching software without rigorous testing can expose your business to performance failures, security risks, and poor user experiences. Quality assurance is not a final step — it is an ongoing process that protects your product and your reputation.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-display font-bold text-xl md:text-2xl italic"
          >
            At mTouch Labs, we provide experienced quality analyst developers in India who ensure your applications are secure, stable, and ready for real-world usage.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-[#0A1A3F] font-display font-extrabold text-4xl md:text-6xl mb-2">{stat.value}</div>
              <div className="text-gray-500 font-sans font-medium text-sm md:text-lg uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => {
  const expertise = [
    {
      title: "Functional Testing",
      desc: "Detect functional defects and validate business logic.",
      icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
      bg: "bg-green-50"
    },
    {
      title: "Automation Testing",
      desc: "Automated test frameworks for improved efficiency and coverage.",
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      bg: "bg-purple-50"
    },
    {
      title: "Performance Testing",
      desc: "Performance and load testing for application stability.",
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      bg: "bg-orange-50"
    },
    {
      title: "Security Testing",
      desc: "Strengthen security posture and ensure compliance standards.",
      icon: <Lock className="w-8 h-8 text-red-500" />,
      bg: "bg-red-50"
    },
    {
      title: "Regression Testing",
      desc: "Regression testing to ensure stable releases every time.",
      icon: <RefreshCcw className="w-8 h-8 text-blue-500" />,
      bg: "bg-blue-50"
    },
    {
      title: "API Testing",
      desc: "API testing for seamless integration and data validation.",
      icon: <Link2 className="w-8 h-8 text-indigo-500" />,
      bg: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#0A1A3F] font-display font-extrabold text-4xl md:text-5xl mb-4"
          >
            Comprehensive <span className="text-blue-600">Testing Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 font-sans text-lg md:text-xl"
          >
            We combine manual precision with automation efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-start"
            >
              <div className={`p-4 rounded-2xl ${item.bg} mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-[#0A1A3F] font-display font-bold text-2xl mb-4">{item.title}</h3>
              <p className="text-gray-500 font-sans leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EngagementSection = () => {
  const models = [
    {
      title: "Dedicated QA Professionals",
      desc: "Full-time QA professionals focused on your product quality.",
      icon: <User className="w-8 h-8 text-white" />
    },
    {
      title: "Project-Based Testing",
      desc: "Complete testing engagement for specific project milestones.",
      icon: <ClipboardList className="w-8 h-8 text-white" />
    },
    {
      title: "Automation Support",
      desc: "Automation testing support for continuous integration pipelines.",
      icon: <Bot className="w-8 h-8 text-white" />
    },
    {
      title: "Offshore QA Collaboration",
      desc: "Offshore QA collaboration with transparent reporting.",
      icon: <Globe className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-24 bg-[#050B1A] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white font-display font-extrabold text-4xl md:text-5xl mb-4"
          >
            Flexible <span className="text-blue-400">Engagement</span> Models
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-sans text-lg md:text-xl"
          >
            Our team adapts to your development cycle and timelines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:bg-white/[0.08] transition-colors group"
            >
              <div className="mb-8 p-4 bg-blue-500/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-white font-display font-bold text-2xl mb-4">{item.title}</h3>
              <p className="text-gray-400 font-sans text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImprovementSection = () => {
  const categories = [
    { name: "SaaS platforms", icon: <Cloud className="w-6 h-6" /> },
    { name: "Enterprise applications", icon: <Database className="w-6 h-6" /> },
    { name: "Mobile apps", icon: <Smartphone className="w-6 h-6" /> },
    { name: "E-commerce systems", icon: <ShoppingCart className="w-6 h-6" /> },
    { name: "Cloud-native applications", icon: <Globe className="w-6 h-6" /> },
    { name: "Ongoing product maintenance", icon: <Settings className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0A1A3F] font-display font-extrabold text-4xl md:text-5xl mb-4"
          >
            Designed for <span className="text-blue-600">Continuous Improvement</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-default"
            >
              <div className="p-3 bg-white rounded-xl shadow-sm mr-4 text-blue-600">
                {cat.icon}
              </div>
              <span className="text-[#0A1A3F] font-sans font-semibold text-lg">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Why hire quality analyst developers in India?",
      a: "India offers skilled QA engineers with strong expertise in manual and automated testing at competitive engagement models."
    },
    {
      q: "Do you provide automation testing services?",
      a: "Yes, we specialize in building robust automation frameworks using Selenium, Appium, Cypress, and other modern tools to ensure faster release cycles."
    },
    {
      q: "Can QA be integrated into agile development?",
      a: "Absolutely. Our QA engineers work closely with development teams in sprints, ensuring continuous testing and immediate feedback loops."
    },
    {
      q: "Do you offer post-release support?",
      a: "Yes, we provide ongoing maintenance and monitoring services to identify and fix any issues that might arise after the software goes live."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0A1A3F] font-display font-extrabold text-4xl md:text-5xl mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`border rounded-2xl overflow-hidden transition-all ${openIdx === idx ? "border-blue-400 bg-white shadow-lg" : "border-gray-200 bg-white"}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-6 text-left flex justify-between items-center group"
              >
                <span className={`font-display font-bold text-lg md:text-xl ${openIdx === idx ? "text-blue-600" : "text-[#0A1A3F]"}`}>
                  {faq.q}
                </span>
                {openIdx === idx ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400 group-hover:text-blue-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-500 font-sans text-lg leading-relaxed border-t border-blue-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050B1A] to-[#0A1A3F] z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white font-display font-extrabold text-4xl md:text-6xl mb-8"
        >
          Deliver Software with Confidence
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-300 font-sans text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          If you're looking to hire quality analyst developers in India who prioritize reliability, performance, and security, mTouch Labs is ready to collaborate. Ensure your software performs flawlessly before it reaches your users.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            className="w-full sm:w-auto px-10 py-4 rounded-xl text-white font-display font-bold text-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            style={{ backgroundColor: PRIMARY_PURPLE }}
          >
            Contact Us Today <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#25D366] text-white font-display font-bold text-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95">
            WhatsApp <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};


const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col space-y-4">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      <button className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        <MessageCircle className="w-8 h-8" />
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </div>
      </button>
      <button className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative">
        <MessageCircle className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">1</div>
      </button>
    </div>
  );
};

export default function QualityAnalystDeveloper() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-200 selection:text-purple-900">
      <main>
        <Hero />
        <StatsSection />
        <ExpertiseSection />
        <EngagementSection />
        <ImprovementSection />
        <FAQSection />
        <BottomCTA />
      </main>
      <FloatingActions />
    </div>
  );
}
