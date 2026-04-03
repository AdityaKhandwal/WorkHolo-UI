import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Cloud, 
  Server, 
  Shield, 
  DollarSign, 
  Zap, 
  Settings, 
  Users, 
  Globe, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  ArrowUp, 
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Layout,
  Menu,
} from 'lucide-react';

// --- Constants ---
const PRIMARY_PURPLE = '#7B2CBF';
const DARK_BG = '#0A0E1A';

// --- Components ---
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'blue' | 'whatsapp';
  className?: string;
};


const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base";
  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: `bg-[${PRIMARY_PURPLE}] text-white hover:opacity-90 shadow-lg shadow-[${PRIMARY_PURPLE}]/20`,
    outline: "border-2 border-gray-700 text-white hover:bg-gray-800",
    blue: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={variant === 'primary' ? { backgroundColor: PRIMARY_PURPLE } : {}}
      {...props}
    >
      {children}
    </button>
  );
};


type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-5"
          >
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function AWSDeveloper() {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500 selection:text-white" style={{ backgroundColor: DARK_BG }}>
      {/* --- Top Bar --- */}
      <div className="hidden lg:block bg-black text-white py-2 border-b border-gray-800">
        <div className="container mx-auto px-6 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={14} /> contact@mtouchlabs.com
            </a>
            <a href="tel:+919390683154" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <span className="flex items-center gap-1">🇮🇳 +91 9390683154</span>
            </a>
            <a href="tel:+15512220070" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <span className="flex items-center gap-1">🇺🇸 +1 (551) 222-0070</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-yellow-500 font-bold">NASSCOM</span> SME Inspire Awards 2026 🏆
            <div className="flex items-center gap-4 border-l border-gray-700 pl-6">
              <span>Hyderabad</span> | <span>Bangalore</span> | <span>USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Navbar --- */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
              <img src="https://picsum.photos/seed/mtouch/100/100" alt="Logo" className="w-full h-full object-contain rounded-full" referrerPolicy="no-referrer" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">mTouch Labs</span>
            <div className="hidden sm:block px-2 py-0.5 bg-yellow-500 text-black text-[10px] font-bold rounded uppercase">ISO Certified</div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'Services', 'Products', 'Resources', 'Portfolio', 'Careers', 'Contact Us'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1">
                {item} {['Home', 'Services', 'Products', 'Resources'].includes(item) && <ChevronDown size={14} />}
              </a>
            ))}
            <Button variant="blue" className="!py-2 !px-5 text-sm">
              Request Quote <ArrowRight size={16} />
            </Button>
          </div>

          <button className="lg:hidden text-white">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold mb-8"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            AWS CLOUD DEVELOPMENT · INDIA
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight max-w-4xl mx-auto"
          >
            Hire <span className="text-blue-500">AWS Developers</span> in India
          </motion.h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button variant="primary" className="w-full sm:w-auto">
              Hire Developers <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto bg-white/5 backdrop-blur-sm">
              View Our Work
            </Button>
          </div>

          {/* Intro Text & Stats */}
          <div className="max-w-5xl mx-auto mt-24">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-3xl"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto">
                Cloud infrastructure is no longer optional — it is the backbone of modern digital products. Businesses require secure, scalable, and resilient systems that can adapt to growing user demands and evolving technology landscapes.
              </p>
              
              <p className="text-blue-400 font-bold italic text-lg mb-12">
                At mTouch Labs, we provide experienced AWS developers in India who design, deploy, and manage cloud-native applications built on Amazon Web Services.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { label: "Projects Delivered", value: "500+" },
                  { label: "Global Clients", value: "1050+" },
                  { label: "Years in Tech", value: "14+" },
                  { label: "Satisfaction Rate", value: "99%" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2">{stat.value}</div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Architecting Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Architecting for <span className="text-blue-600">Scale and Reliability</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build cloud systems that balance performance, flexibility, and cost efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cloud, title: "Cloud-Native Architecture", desc: "Design cloud-native architectures for maximum scalability." },
              { icon: Database, title: "AWS Migration", desc: "Migrate applications to AWS securely and efficiently." },
              { icon: DollarSign, title: "Cost Optimization", desc: "Optimize infrastructure costs without sacrificing performance." },
              { icon: Layers, title: "CI/CD Pipelines", desc: "Implement CI/CD pipelines for automated deployment." },
              { icon: Cpu, title: "Auto-Scaling", desc: "Configure auto-scaling environments for dynamic workloads." },
              { icon: Shield, title: "Security & Compliance", desc: "Enhance security and compliance across cloud infrastructure." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon className="text-blue-600 w-8 h-8 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Hiring Models Section --- */}
      <section className="py-24" style={{ backgroundColor: DARK_BG }}>
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Flexible <span className="text-blue-500">Hiring</span> Models
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Our engagement models align with your technical and operational goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Users, title: "Dedicated Cloud Engineers", desc: "Full-time AWS developers focused on your infrastructure." },
              { icon: Zap, title: "Team Augmentation", desc: "Augment your team with skilled AWS professionals." },
              { icon: Layout, title: "End-to-End Cloud", desc: "Complete cloud implementation from design to deployment." },
              { icon: Globe, title: "Offshore Cloud Support", desc: "Offshore cloud support with transparent communication." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#111827] p-10 rounded-3xl border border-gray-800 flex gap-8 items-start hover:border-blue-500/50 transition-all"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex-shrink-0 flex items-center justify-center">
                  <item.icon className="text-blue-500 w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Ideal For Section --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ideal for <span className="text-blue-600">Cloud-Driven Businesses</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cloud, title: "SaaS platforms" },
              { icon: Globe, title: "High-traffic web applications" },
              { icon: Server, title: "Enterprise cloud migration" },
              { icon: Cpu, title: "Microservices architecture" },
              { icon: Settings, title: "DevOps automation" },
              { icon: Shield, title: "Disaster recovery systems" },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 flex items-center gap-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-blue-600 w-6 h-6" />
                </div>
                <span className="text-lg font-bold text-gray-800">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQItem 
              question="Why hire AWS developers in India?" 
              answer="India offers skilled cloud professionals with experience in AWS architecture and cost-effective engagement models." 
            />
            <FAQItem 
              question="Can AWS handle enterprise workloads?" 
              answer="Yes, AWS is designed to handle massive enterprise workloads with high availability, security, and scalability." 
            />
            <FAQItem 
              question="Do you support cloud migration?" 
              answer="Absolutely. We specialize in migrating legacy systems to AWS with zero downtime and optimized performance." 
            />
            <FAQItem 
              question="Do you provide ongoing cloud support?" 
              answer="Yes, we offer 24/7 monitoring, maintenance, and support services to ensure your cloud infrastructure runs smoothly." 
            />
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24" style={{ backgroundColor: DARK_BG }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Build Secure and Scalable Cloud Solutions
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              If you're looking to hire AWS developers in India who understand cloud architecture and scalable infrastructure, mTouch Labs is ready to collaborate. Create resilient, cost-efficient, and future-ready cloud systems with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="blue" className="w-full sm:w-auto !px-10 !py-4 text-lg">
                Contact Us Today <ArrowRight size={20} />
              </Button>
              <Button variant="whatsapp" className="w-full sm:w-auto !px-10 !py-4 text-lg">
                WhatsApp <ArrowRight size={20} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Footer --- */}

      {/* --- Floating Elements --- */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 relative group"
        >
          <MessageCircle size={28} />
          <div className="absolute right-full mr-4 px-3 py-1 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
            Chat with us
          </div>
        </motion.button>
        
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/40"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </div>

      {/* Notification badge mock */}
      <div className="fixed bottom-24 right-6 z-[101]">
        <div className="relative">
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-black">1</div>
        </div>
      </div>
    </div>
  );
}
