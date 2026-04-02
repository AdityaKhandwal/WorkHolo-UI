import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ReactNode } from "react";

import { 
  ChevronDown, 
  ChevronUp, 
  Mail,  
  Globe, 
  MessageCircle,
  ArrowUp,
  Zap,
  Layers,
  Code2,
  Users,
  Briefcase,
  Building2,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative pt-40 pb-32 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8"
      >
        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        NODE.JS DEVELOPMENT • INDIA
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] mb-8"
      >
        Hire <span className="text-blue-500">Node.js</span> Developers in India
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block"
      >
         <div className="relative">
            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
               <MessageCircle className="w-12 h-12 text-green-500" />
            </div>
            <div className="absolute -inset-4 border border-green-500/10 rounded-full animate-ping" />
         </div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
        <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 group">
          Hire Developers <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="w-full md:w-auto bg-brand-card hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-lg font-bold text-lg transition-all">
          View Our Work
        </button>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-20 border-y border-white/5 bg-brand-dark/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        <StatItem number="500+" label="Projects Delivered" />
        <StatItem number="1050+" label="Global Clients" />
        <StatItem number="14+" label="Years in Tech" />
        <StatItem number="99%" label="Satisfaction Rate" />
      </div>

      <div className="mt-32 text-center max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-medium text-gray-300 leading-relaxed">
          Modern applications demand backend systems that are fast, responsive, and capable of handling high volumes of concurrent users. Node.js has become a preferred technology for building scalable, event-driven, and real-time applications.
        </p>
        <p className="mt-8 text-blue-400 font-semibold italic text-xl">
          At WorkHolo Labs, we offer experienced Node.js developers in India who design and build high-performance backend architectures tailored to your product vision.
        </p>
      </div>
    </div>
  </section>
);

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-black text-white mb-2 font-display">{number}</div>
    <div className="text-gray-400 font-medium">{label}</div>
  </div>
);

const Features = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Built for <span className="text-blue-500">Speed and Scalability</span></h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Our developers focus on creating backend systems that remain stable as traffic grows.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Zap className="w-8 h-8 text-orange-500" />}
          title="Real-Time Processing"
          description="Real-time data processing with event-driven architecture."
        />
        <FeatureCard 
          icon={<Layers className="w-8 h-8 text-blue-500" />}
          title="High Concurrency"
          description="Handle high volumes of concurrent connections efficiently."
        />
        <FeatureCard 
          icon={<Code2 className="w-8 h-8 text-purple-500" />}
          title="API-First Development"
          description="RESTful and GraphQL API development with Node.js."
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-10 rounded-3xl bg-brand-card border border-white/5 hover:border-blue-500/30 transition-all shadow-2xl"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const HiringModels = () => (
  <section className="py-32 bg-brand-card/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Flexible <span className="text-blue-500">Hiring</span> Models</h2>
        <p className="text-gray-400 text-lg">Our collaboration model adapts to your roadmap and deadlines.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <HiringCard 
          icon={<Users className="w-6 h-6" />}
          title="Dedicated Full-Time"
          description="A dedicated Node.js developer focused on your backend."
        />
        <HiringCard 
          icon={<Briefcase className="w-6 h-6" />}
          title="Team Augmentation"
          description="Augment your team with skilled Node.js engineers."
          highlight
        />
        <HiringCard 
          icon={<Building2 className="w-6 h-6" />}
          title="Complete Backend Project"
          description="End-to-end backend development from architecture to deployment."
        />
        <HiringCard 
          icon={<Globe className="w-6 h-6" />}
          title="Offshore Partnership"
          description="Offshore development partnership with full transparency."
        />
      </div>
    </div>
  </section>
);

const HiringCard = ({ icon, title, description, highlight }: { icon: ReactNode; title: string; description: string; highlight?: boolean }) => (
  <div className={`p-10 rounded-3xl border transition-all ${highlight ? 'border-blue-500 bg-blue-500/5' : 'border-white/5 bg-brand-dark'}`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${highlight ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-400'}`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Platforms = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold font-display mb-16">Ideal for <span className="text-blue-500">Modern Digital Platforms</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlatformItem icon="☁️" label="SaaS platforms" />
        <PlatformItem icon="🛒" label="E-commerce backends" />
        <PlatformItem icon="💰" label="FinTech systems" />
        <PlatformItem icon="📊" label="Enterprise dashboards" />
        <PlatformItem icon="👥" label="Real-time collaboration tools" />
        <PlatformItem icon="📈" label="Data-intensive applications" />
      </div>
    </div>
  </section>
);

const PlatformItem = ({ icon, label }: { icon: string; label: string }) => (
  <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-default">
    <span className="text-2xl">{icon}</span>
    <span className="font-semibold text-gray-200">{label}</span>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why hire Node.js developers in India?",
      a: "India provides skilled backend engineers with experience building scalable and real-time systems at competitive costs."
    },
    {
      q: "Is Node.js suitable for enterprise applications?",
      a: "Yes, Node.js is widely used by enterprises like Netflix, LinkedIn, and Uber for its scalability and performance."
    },
    {
      q: "Can Node.js handle real-time applications?",
      a: "Absolutely. Its event-driven architecture makes it perfect for chat apps, live streaming, and collaborative tools."
    },
    {
      q: "Do you offer ongoing maintenance?",
      a: "Yes, we provide post-deployment support and maintenance to ensure your backend remains secure and updated."
    }
  ];

  return (
    <section className="py-32 bg-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-display text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl border transition-all ${openIndex === i ? 'border-blue-500 bg-blue-500/5' : 'border-white/10 bg-brand-dark'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className={`text-lg font-bold ${openIndex === i ? 'text-blue-400' : 'text-white'}`}>{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-blue-400" /> : <ChevronDown className="text-gray-500" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed">
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

const CTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-black font-display mb-8">Build High-Performance Backend Systems</h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
        If you're looking to hire Node.js developers in India who understand scalable architecture and real-time performance, WorkHolo Labs is ready to collaborate. Create secure and future-ready backend systems with confidence.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-xl font-bold text-xl transition-all flex items-center justify-center gap-2 group">
          Contact Us Today <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="w-full md:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-12 py-4 rounded-xl font-bold text-xl transition-all flex items-center justify-center gap-2">
          WhatsApp <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  </section>
);

const FloatingButtons = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <button className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
      <MessageCircle className="w-8 h-8" />
    </button>
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
    >
      <ArrowUp className="w-7 h-7" />
    </button>
  </div>
);

// --- Main App ---

export default function NodeJsDeveloper() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[60]" />
      
      {/* Top Bar */}
      <div className="bg-black py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-[11px] font-bold text-gray-400 tracking-wider">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-blue-500" />
              CONTACT@WorkHoloLABS.COM
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-orange-500 rounded-xs" />
              +91 9390683154
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-blue-800 rounded-xs" />
              +1 (551) 222-0070
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-yellow-500">NASSCOM <span className="text-gray-500">SME Inspire Awards 2026</span> 🏆</span>
            <div className="flex items-center gap-4">
              <span>HYDERABAD</span>
              <span>BANGALORE</span>
              <span>USA</span>
            </div>
          </div>
        </div>
      </div>
      
      <main>
        <Hero />
        <Stats />
        <Features />
        <HiringModels />
        <Platforms />
        <FAQ />
        <CTA />
      </main>

      <FloatingButtons />

      {/* Notification Badge */}
      <div className="fixed bottom-10 right-10 z-[60] pointer-events-none">
         <div className="relative">
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-brand-dark">1</div>
         </div>
      </div>
    </div>
  );
}
