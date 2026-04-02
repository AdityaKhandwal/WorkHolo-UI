import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  Phone, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  ArrowUp,  
  ShoppingCart, 
  Users, 
  Layers, 
  Cpu, 
  FileText,
  Zap,
  Shield,
  Link,
  TrendingUp,
  Activity,
  Settings,
} from 'lucide-react';

// Custom components
const Button = ({ children, className = "", variant = "primary", ...props }: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: 'primary' | 'secondary' | 'outline'; 
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  const variants: Record<string, string> = {
    primary: "bg-[#7B2CBF] text-white hover:bg-[#6A24A3] shadow-lg hover:shadow-xl",
    secondary: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#050a15]",
    outline: "bg-transparent border-2 border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF] hover:text-white",
    blue: "bg-[#0091FF] text-white hover:bg-[#0077D6] shadow-lg hover:shadow-xl",
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden bg-white shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-[#050a15]">{question}</span>
        {isOpen ? <ChevronUp className="text-[#0091FF]" /> : <ChevronDown className="text-gray-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-5 text-gray-600 leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PHPDeveloper() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050a15] font-sans text-white overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-[#050a15] border-b border-gray-800 py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:contact@WorkHololabs.com" className="flex items-center gap-2 hover:text-[#0091FF] transition-colors">
              <Mail size={16} /> contact@WorkHololabs.com
            </a>
            <a href="tel:+919390683154" className="flex items-center gap-2 hover:text-[#0091FF] transition-colors">
              <Phone size={16} /> +91 9390683154
            </a>
            <a href="tel:+15512220070" className="flex items-center gap-2 hover:text-[#0091FF] transition-colors">
              <Phone size={16} /> +1 (551) 222-0070
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-yellow-500 font-semibold flex items-center gap-2">
              NASSCOM SME Inspire Awards 2026 🏆
            </span>
            <div className="flex items-center gap-4 text-gray-400">
              <span>Hyderabad</span> | <span>Bangalore</span> | <span>USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050a15]/95 backdrop-blur-md py-3 shadow-xl' : 'bg-[#050a15] py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0091FF] rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">WorkHolo Labs</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">ISO Certified Company</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="hover:text-[#0091FF] transition-colors flex items-center gap-1">Home <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-[#0091FF] transition-colors flex items-center gap-1">Services <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-[#0091FF] transition-colors flex items-center gap-1">Products <ChevronDown size={14} /></a>
            <a href="#" className="text-[#0091FF] font-semibold flex items-center gap-1">Resources <ChevronDown size={14} /></a>
            <a href="#" className="hover:text-[#0091FF] transition-colors">Portfolio</a>
            <a href="#" className="hover:text-[#0091FF] transition-colors">Careers</a>
            <a href="#" className="hover:text-[#0091FF] transition-colors">Contact Us</a>
          </div>

          <Button variant="primary" className="hidden md:flex">
            Request Quote <span className="text-lg">→</span>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#050a15] -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0091FF]/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <div className="w-2 h-2 bg-[#0091FF] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-widest">PHP Development · India</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Hire PHP Developers in <span className="text-[#0091FF]">India</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Behind every high-performing web application is a reliable backend. PHP continues to power millions of dynamic websites, enterprise platforms, and scalable web systems across the globe.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button variant="primary" className="w-full sm:w-auto px-10 py-4 text-lg">
              Hire Developers →
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto px-10 py-4 text-lg">
              View Our Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-[#0091FF] font-bold italic text-lg mb-4">
              At WorkHolo Labs, we offer skilled PHP developers in India who build secure, performance-driven, and maintainable backend solutions tailored to your business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Projects Delivered", value: "500+" },
              { label: "Global Clients", value: "1050+" },
              { label: "Years in Tech", value: "14+" },
              { label: "Satisfaction Rate", value: "99%" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#050a15] mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#050a15] mb-4">
              Engineering <span className="text-[#0091FF]">Reliable Web Backends</span>
            </h2>
            <p className="text-gray-500 text-lg">We emphasize structured architecture and long-term maintainability.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-orange-500" />, title: "High Traffic Handling", desc: "Handle high traffic efficiently with optimized backend systems." },
              { icon: <Shield className="text-orange-400" />, title: "Strong Security", desc: "Maintain strong security standards across all applications." },
              { icon: <Link className="text-gray-400" />, title: "API Integration", desc: "Integrate smoothly with APIs and third-party platforms." },
              { icon: <Activity className="text-blue-500" />, title: "Business Scalability", desc: "Scale with business growth using modular architecture." },
              { icon: <TrendingUp className="text-pink-500" />, title: "Consistent Performance", desc: "Deliver consistent performance across all user interactions." },
              { icon: <Settings className="text-purple-500" />, title: "Modern Frameworks", desc: "Laravel, Symfony, CodeIgniter, Yii and more." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#050a15] mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="bg-[#050a15] py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Flexible <span className="text-[#0091FF]">Engagement</span> Options
            </h2>
            <p className="text-gray-400 text-lg">Scale resources as your project evolves.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Users className="text-purple-500" />, title: "Dedicated Developer", desc: "Dedicated developer model focused on your backend systems." },
              { icon: <Users className="text-purple-500" />, title: "Team Extension", desc: "Long-term team extension to augment your existing workforce." },
              { icon: <FileText className="text-orange-400" />, title: "Full Project Outsourcing", desc: "End-to-end project outsourcing from planning to deployment." },
              { icon: <Globe className="text-blue-400" />, title: "Offshore Partnership", desc: "Offshore development partnership with full transparency." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-10 rounded-3xl"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#050a15] mb-4">
              Ideal Use Cases for <span className="text-[#0091FF]">PHP Development</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="text-blue-500" />, title: "Custom web applications" },
              { icon: <ShoppingCart className="text-gray-500" />, title: "E-commerce platforms" },
              { icon: <Layers className="text-blue-400" />, title: "CRM & ERP systems" },
              { icon: <Cpu className="text-purple-400" />, title: "SaaS products" },
              { icon: <Link className="text-gray-400" />, title: "API-driven backend services" },
              { icon: <FileText className="text-orange-400" />, title: "Content management systems" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#050a15]">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#050a15] text-center mb-16">Frequently Asked Questions</h2>
          
          <FAQItem 
            question="Why hire PHP developers in India?"
            answer="India provides access to experienced developers, cost efficiency, and strong expertise in modern PHP frameworks. Our developers are well-versed in global standards and deliver high-quality code."
          />
          <FAQItem 
            question="Is PHP still relevant for modern web development?"
            answer="Absolutely. PHP powers over 75% of the web. With modern frameworks like Laravel and Symfony, it remains one of the most efficient and scalable languages for backend development."
          />
          <FAQItem 
            question="Can you build APIs using PHP?"
            answer="Yes, PHP is excellent for building RESTful and GraphQL APIs. We use frameworks like Laravel or Lumen to create high-performance, secure API backends for mobile and web apps."
          />
          <FAQItem 
            question="Do you offer maintenance support?"
            answer="Yes, we provide comprehensive post-launch support and maintenance services to ensure your application remains secure, updated, and performs optimally."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0a192f] to-[#050a15] rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0091FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Build a Backend That Supports Growth</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              If you're looking to hire PHP developers in India who understand architecture, scalability, and performance, our team is ready to collaborate. Partner with WorkHolo Labs and build web systems engineered for reliability and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="primary" className="w-full sm:w-auto px-10 py-4 text-lg">
                Contact Us Today →
              </Button>
              <Button className="w-full sm:w-auto px-10 py-4 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white">
                <MessageCircle size={20} /> WhatsApp →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
          <MessageCircle size={32} />
        </motion.button>
        
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-[#0091FF] rounded-full flex items-center justify-center text-white shadow-xl"
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>

      <div className="fixed bottom-8 left-8 z-50">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="bg-white p-2 rounded-full shadow-2xl flex items-center gap-3 pr-6"
        >
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
            <MessageCircle size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 leading-none">Need help?</span>
            <span className="text-sm font-bold text-black leading-none">Chat with us</span>
          </div>
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">1</div>
        </motion.div>
      </div>
    </div>
  );
}
