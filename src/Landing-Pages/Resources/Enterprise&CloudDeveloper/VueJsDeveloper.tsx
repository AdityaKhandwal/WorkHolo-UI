import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown, 
  Zap, 
  Rocket, 
  TrendingUp, 
  Cpu, 
  Layout, 
  Users, 
  User,
  Link as LinkIcon, 
  MessageCircle,
  ArrowRight,
  Cloud,
  BarChart3,
  Smartphone,
  Building2
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="accordion-header"
      >
        <span className={isOpen ? "text-blue-400" : "text-white"}>{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-400" : "text-gray-400"}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="accordion-content">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <h3 className="text-5xl font-extrabold text-white mb-2">{value}</h3>
    <p className="text-gray-400 font-medium">{label}</p>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card flex flex-col items-start gap-4"
  >
    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
      <Icon className="w-6 h-6" />
    </div>
    <h4 className="text-xl font-bold text-white">{title}</h4>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const DeliveryCard = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-all"
  >
    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-lg font-semibold text-white">{title}</span>
  </motion.div>
);

export default function VueJsDeveloper() {
  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      {/* Top Bar */}

      {/* Navigation */}

      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-32 px-4 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Build Modern Web Experiences <br /> with <span className="text-blue-500">Vue.js</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            If you're looking to hire Vue.js developers in India who combine technical expertise with a user-focused approach, mTouch Labs is ready to collaborate. Create fast, scalable, and future-ready web applications with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary">
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-whatsapp">
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </button>
          </div>
        </motion.div>
      </section>

      {/* Second CTA Section (Screenshot 9) */}
      <section className="py-24 px-4 md:px-12 bg-gradient-to-r from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
              Vue.js Development • India
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">
              Hire <span className="text-blue-300">Vue.js Developers</span> in India
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
                Hire Developers <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-xl font-bold transition-all">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Text Block (Screenshot 9) */}
      <section className="py-24 px-4 md:px-12 bg-[#050A18]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-12">
              When building modern web applications, speed and simplicity matter. Vue.js has emerged as a powerful yet lightweight framework that allows businesses to create dynamic interfaces without unnecessary complexity.
            </p>
            <p className="text-xl text-blue-400 font-medium italic">
              At mTouch Labs, we provide experienced Vue.js developers in India who craft scalable, maintainable, and performance-driven web applications tailored to your product goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#020617] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatCard value="500+" label="Projects Delivered" />
            <StatCard value="1050+" label="Global Clients" />
            <StatCard value="14+" label="Years in Tech" />
            <StatCard value="99%" label="Satisfaction Rate" />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 md:px-12 bg-[#050A18]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-blue-500">Vue.js</span>?
            </h2>
            <p className="text-gray-400 text-lg">Lightweight flexibility with room for growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap} 
              title="Lightweight Architecture" 
              description="Lightweight and flexible architecture for fast development." 
            />
            <FeatureCard 
              icon={Rocket} 
              title="Rapid Development" 
              description="Rapid frontend development with minimal overhead." 
            />
            <FeatureCard 
              icon={LinkIcon} 
              title="Smooth Integration" 
              description="Smooth integration with existing systems and APIs." 
            />
            <FeatureCard 
              icon={TrendingUp} 
              title="Progressive Enhancement" 
              description="Progressive enhancement for incremental improvements." 
            />
            <FeatureCard 
              icon={Cpu} 
              title="High Performance" 
              description="High performance with minimal resource overhead." 
            />
            <FeatureCard 
              icon={Layout} 
              title="Component Design" 
              description="Clean component design and optimized rendering." 
            />
          </div>
        </div>
      </section>

      {/* Hiring Models Section */}
      <section className="py-24 px-4 md:px-12 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Flexible <span className="text-blue-400">Hiring</span> Models
            </h2>
            <p className="text-gray-400 text-lg">Our workflow adapts to your technical environment and timeline.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="glass-card border-l-4 border-l-purple-500"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                <User className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Dedicated Full-Time</h4>
              <p className="text-gray-400">A dedicated Vue.js developer focused on your project.</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="glass-card border-l-4 border-l-blue-500"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                <LinkIcon className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Team Extension</h4>
              <p className="text-gray-400">Extend your team with skilled Vue.js professionals.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Where Vue.js Delivers Section */}
      <section className="py-24 px-4 md:px-12 bg-[#050A18]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Where Vue.js Delivers <span className="text-blue-500">the Most Value</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DeliveryCard icon={Cloud} title="SaaS platforms" />
            <DeliveryCard icon={BarChart3} title="Interactive dashboards" />
            <DeliveryCard icon={Users} title="Customer portals" />
            <DeliveryCard icon={Smartphone} title="Progressive Web Apps" />
            <DeliveryCard icon={Zap} title="Real-time web applications" />
            <DeliveryCard icon={Building2} title="Enterprise frontend modernization" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-12 bg-[#020617]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <FAQItem 
              question="Why hire Vue.js developers in India?" 
              answer="India offers experienced Vue.js developers with strong frontend expertise and flexible hiring options." 
            />
            <FAQItem 
              question="Is Vue.js suitable for enterprise applications?" 
              answer="Yes, Vue.js is highly scalable and used by many large enterprises for complex, high-performance applications." 
            />
            <FAQItem 
              question="Can Vue.js integrate with existing backend systems?" 
              answer="Absolutely. Vue.js is designed to be incrementally adoptable and works seamlessly with any backend API (REST, GraphQL, etc.)." 
            />
            <FAQItem 
              question="Do you provide long-term support?" 
              answer="Yes, we offer various support and maintenance packages to ensure your application stays updated and performant." 
            />
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 px-4 md:px-12 bg-[#050A18] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Globe className="w-6 h-6 text-blue-500" />
            <h2 className="text-2xl font-bold text-white">Global Presence</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            <div>
              <h5 className="text-blue-500 font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> INDIA
              </h5>
              <ul className="space-y-4 text-gray-400">
                <li>Hyderabad</li>
                <li>Bangalore</li>
                <li>Chennai</li>
                <li>Coimbatore</li>
                <li>Kochi</li>
              </ul>
            </div>
            <div>
              <h5 className="text-blue-500 font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> AMERICAS
              </h5>
              <ul className="space-y-4 text-gray-400">
                <li>United States</li>
                <li>Canada</li>
              </ul>
            </div>
            <div>
              <h5 className="text-blue-500 font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> EUROPE
              </h5>
              <ul className="space-y-4 text-gray-400">
                <li>United Kingdom</li>
                <li>Germany</li>
                <li>Ireland</li>
              </ul>
            </div>
            <div>
              <h5 className="text-blue-500 font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> ASIA PACIFIC
              </h5>
              <ul className="space-y-4 text-gray-400">
                <li>Singapore</li>
                <li>Australia</li>
                <li>New Zealand</li>
                <li>India</li>
              </ul>
            </div>
            <div>
              <h5 className="text-blue-500 font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> MIDDLE EAST
              </h5>
              <ul className="space-y-4 text-gray-400">
                <li>UAE</li>
                <li>Dubai</li>
                <li>Saudi Arabia</li>
                <li>Qatar</li>
                <li>Kuwait</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 text-white"
        >
          <MessageCircle className="w-8 h-8" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronDown className="w-8 h-8 rotate-180" />
        </motion.button>
      </div>
    </div>
  );
}
