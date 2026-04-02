import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ArrowRight, 
  Puzzle,
  MousePointer2,
  Link as LinkIcon,
  Box,
  Zap,
  Smartphone,
  Cloud,
  LayoutDashboard,
  ShoppingCart,
  Users,
  Globe,
  MessageCircle,
  ChevronUp,
} from 'lucide-react';

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent -z-10" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-[#00A3FF] text-xs font-bold uppercase tracking-widest mb-8"
      >
        <div className="w-2 h-2 bg-[#00A3FF] rounded-full animate-pulse" />
        React Development • India
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]"
      >
        Hire React Developers <span className="text-[#00A3FF]">in India</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        <button className="bg-[#007BFF] hover:bg-[#0069D9] text-white px-10 py-4 rounded-lg font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
          Hire Developers <ArrowRight size={20} />
        </button>
        <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-lg font-bold transition-all">
          View Our Work
        </button>
      </motion.div>
    </div>

    {/* Floating WhatsApp */}
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl cursor-pointer relative group"
      >
        <MessageCircle size={32} className="text-white" />
        <div className="absolute right-full mr-4 bg-white text-dark px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </div>
      </motion.div>
      <motion.div 
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-10 h-10 bg-[#00A3FF] rounded-full flex items-center justify-center shadow-xl cursor-pointer"
      >
        <ChevronUp size={24} className="text-white" />
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-20 bg-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        <StatItem value="500+" label="Projects Delivered" />
        <StatItem value="1050+" label="Global Clients" />
        <StatItem value="14+" label="Years in Tech" />
        <StatItem value="99%" label="Satisfaction Rate" />
      </div>
      
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
          User expectations for web applications have evolved. Speed, responsiveness, and seamless interaction are no longer optional — they are essential. React has emerged as a powerful framework for building dynamic interfaces that scale effortlessly.
        </p>
        <p className="mt-8 text-[#00A3FF] font-medium italic text-lg">
          At WorkHolo Labs, we provide experienced React developers in India who craft high-performance web applications designed for growth, usability, and long-term maintainability.
        </p>
      </div>
    </div>
  </section>
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    viewport={{ once: true }}
    className="flex flex-col gap-2"
  >
    <span className="text-5xl md:text-6xl font-bold text-white">{value}</span>
    <span className="text-gray-500 font-medium uppercase tracking-widest text-sm">{label}</span>
  </motion.div>
);

const Features = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Build Modern Interfaces That <span className="text-[#00A3FF]">Engage Users</span></h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">We engineer web applications that feel fast, intuitive, and reliable.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Puzzle className="text-green-400" />} 
          title="Component Architecture" 
          desc="Component-based architecture for reusable and modular code." 
        />
        <FeatureCard 
          icon={<MousePointer2 className="text-orange-400" />} 
          title="Interactive UI" 
          desc="Interactive UI development with fluid user experiences." 
        />
        <FeatureCard 
          icon={<LinkIcon className="text-blue-400" />} 
          title="API-Driven Frontend" 
          desc="API-driven frontend systems for dynamic data handling." 
        />
        <FeatureCard 
          icon={<Box className="text-amber-600" />} 
          title="State Management" 
          desc="State management solutions for complex application logic." 
        />
        <FeatureCard 
          icon={<Zap className="text-orange-500" />} 
          title="Performance Optimization" 
          desc="Performance optimization for fast loading and smooth interactions." 
        />
        <FeatureCard 
          icon={<Smartphone className="text-purple-400" />} 
          title="Responsive Design" 
          desc="Responsive design across all devices and screen sizes." 
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string; active?: boolean }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="p-8 rounded-2xl bg-[#0D1526] border border-white/5 hover:border-blue-500/30 transition-all group"
  >
    <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 group-hover:text-[#00A3FF] transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </motion.div>
);

const EngagementModels = () => (
  <section className="py-24 bg-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Engagement Models That <span className="text-[#00A3FF]">Fit Your Vision</span></h2>
        <p className="text-gray-400 text-lg">Scale your frontend team with flexibility and transparency.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <EngagementCard 
          icon={<Users className="text-purple-400" />}
          title="Dedicated Developers"
          desc="Full-time dedicated React developers for your projects."
        />
        <EngagementCard 
          icon={<Users className="text-purple-400" />}
          title="Team Augmentation"
          desc="Augment your existing team with experienced React talent."
          active
        />
        <EngagementCard 
          icon={<LayoutDashboard className="text-orange-400" />}
          title="Project-Based"
          desc="Complete project-based development from start to finish."
        />
        <EngagementCard 
          icon={<Globe className="text-blue-400" />}
          title="Offshore Collaboration"
          desc="Offshore collaboration with transparent communication."
        />
      </div>
    </div>
  </section>
);

const EngagementCard = ({ icon, title, desc, active }: { icon: React.ReactNode; title: string; desc: string; active?: boolean }) => (
  <div className={`p-10 rounded-3xl border transition-all ${active ? 'bg-blue-600/5 border-blue-500/50 shadow-2xl shadow-blue-500/10' : 'bg-[#0D1526] border-white/5'}`}>
    <div className="flex items-start gap-6">
      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);

const ScalableProducts = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ideal for <span className="text-[#00A3FF]">Scalable Digital Products</span></h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <Cloud className="text-purple-400" />, title: "SaaS platforms" },
          { icon: <LayoutDashboard className="text-blue-400" />, title: "Enterprise dashboards" },
          { icon: <ShoppingCart className="text-gray-400" />, title: "E-commerce applications" },
          { icon: <Users className="text-purple-600" />, title: "Customer portals" },
          { icon: <Zap className="text-orange-400" />, title: "Real-time web apps" },
          { icon: <Smartphone className="text-indigo-400" />, title: "Progressive Web Applications" }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-[#0D1526] border border-white/5"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <span className="text-lg font-semibold">{item.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Why hire React developers in India?",
      a: "India provides access to skilled React professionals with experience delivering scalable applications for global clients."
    },
    {
      q: "Is React suitable for enterprise applications?",
      a: "Yes, React's component-based architecture and robust ecosystem make it ideal for building complex, high-performance enterprise solutions."
    },
    {
      q: "Can React integrate with backend technologies?",
      a: "Absolutely. React is backend-agnostic and can seamlessly integrate with Node.js, Python, Java, .NET, and various cloud services via APIs."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes, we offer comprehensive post-launch support and maintenance services to ensure your application remains secure and up-to-date."
    }
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl border transition-all ${openIndex === i ? 'bg-white text-dark border-blue-500' : 'bg-[#0D1526] border-white/5 text-white'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between p-6 text-left font-bold text-lg"
              >
                {faq.q}
                <ChevronDown className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-500 leading-relaxed border-t border-gray-100">
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
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 -z-10" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center mb-8">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
          <span className="text-dark font-bold text-3xl">m</span>
        </div>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold mb-8">Let's Build Your Next Web Application</h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        If you're looking to hire React developers in India who combine technical expertise with business understanding, WorkHolo Labs is ready to collaborate. Create modern, scalable web applications that drive real results.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <button className="bg-[#007BFF] hover:bg-[#0069D9] text-white px-10 py-4 rounded-lg font-bold transition-all flex items-center gap-2 shadow-xl shadow-blue-500/20">
          Contact Us Today <ArrowRight size={20} />
        </button>
        <button className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-lg font-bold transition-all flex items-center gap-2 shadow-xl shadow-green-500/20">
          WhatsApp <ArrowRight size={20} />
        </button>
      </div>
    </div>
  </section>
);

export default function ReactDeveloper() {
  return (
    <div className="min-h-screen selection:bg-[#00A3FF] selection:text-white">
      <main>
        <Hero />
        <Stats />
        <Features />
        <EngagementModels />
        <ScalableProducts />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
