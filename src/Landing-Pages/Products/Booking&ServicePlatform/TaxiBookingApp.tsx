import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  Mail, 
  ChevronDown, 
  ArrowRight, 
  Plus, 
  Bell, 
  Wallet, 
  Star, 
  Shield, 
  MessageCircle, 
  ArrowUp,
  MapPin,
  Clock,
  Users,
  CreditCard,
  Navigation,
  LayoutDashboard,
  Headphones
} from 'lucide-react';

// --- Constants & Types ---

const PRIMARY_PURPLE = '#7B2CBF';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-full"
  >
    <div className="w-full h-48 bg-gray-100 rounded-3xl mb-6 flex items-center justify-center overflow-hidden">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#F8F9FF] p-6 rounded-xl flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="bg-gray-800 text-white p-1 rounded-full"
        >
          <Plus size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 text-gray-600 bg-white border-x border-b rounded-b-xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Component ---

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-['Inter',sans-serif] text-gray-900 overflow-x-hidden selection:bg-purple-200">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 md:px-12 flex flex-wrap justify-between items-center text-[12px] border-b border-gray-800">
        <div className="flex gap-6 items-center">
          <a href="mailto:contact@mtouchlabs.com" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Mail size={14} /> contact@mtouchlabs.com
          </a>
          <a href="tel:+919390683154" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <span className="text-orange-500">🇮🇳</span> +91 9390683154
          </a>
          <a href="tel:+15512220070" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <span className="text-blue-500">🇺🇸</span> +1 (551) 222-0070
          </a>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <span className="text-yellow-500 font-bold">NASSCOM</span>
          <span className="opacity-80">SME Inspire Awards 2026</span>
          <span>🏆</span>
          <div className="ml-4 flex gap-4 opacity-80">
            <span>Hyderabad</span> | <span>Bangalore</span> | <span>USA</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-black text-white py-4 px-4 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-black font-black text-xl">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none">mTouch Labs</span>
            <span className="text-[10px] uppercase tracking-widest opacity-60">ISO Certified Company</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-[15px]">
          <a href="#" className="flex items-center gap-1 hover:text-purple-400">Home <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-purple-400">Services <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 text-purple-400">Products <ChevronDown size={14} /></a>
          <a href="#" className="flex items-center gap-1 hover:text-purple-400">Resources <ChevronDown size={14} /></a>
          <a href="#" className="hover:text-purple-400">Portfolio</a>
          <a href="#" className="hover:text-purple-400">Careers</a>
          <a href="#" className="hover:text-purple-400">Contact Us</a>
        </div>

        <button 
          className="px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 text-[15px]"
          style={{ backgroundColor: PRIMARY_PURPLE }}
        >
          Request Quote <ArrowRight size={18} />
        </button>
      </nav>

      {/* Hero Section (Screenshot 11) */}
      <section className="relative bg-[#F4F7FF] pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2 z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 text-[#0A0E12]">
              On-Demand <br />
              <span className="text-[#FF6B00]">Taxi Booking App</span> for <br />
              Web and Mobile Development
            </h1>
            <button className="bg-black text-white px-10 py-4 rounded-md italic font-bold text-xl hover:bg-gray-800 transition-all shadow-lg">
              View Demo
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center"
          >
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/taxi-hero/500/700" 
                alt="App Showcase" 
                className="rounded-[40px] shadow-2xl relative z-10 w-[320px] md:w-[400px]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -left-20 bottom-10 z-0">
                <img 
                  src="https://picsum.photos/seed/taxi-car/400/250" 
                  alt="Taxi" 
                  className="w-[300px] md:w-[450px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
        {/* Background city skyline pattern */}
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-10 pointer-events-none">
          <svg viewBox="0 0 1440 320" className="w-full h-full"><path fill="#000" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </section>

      {/* Key Features Section (Screenshot 10) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 relative flex justify-center">
              <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center relative">
                <div className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-orange-100 overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/woman-phone/500/500" 
                    alt="User" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating icons */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-10 right-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100"><MapPin size={20} className="text-orange-500" /></motion.div>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute bottom-20 right-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100"><Phone size={20} className="text-orange-500" /></motion.div>
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-10 left-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100"><Star size={20} className="text-orange-500" /></motion.div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-12 text-[#0A0E12]">Key Features for Seamless Functionality</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Real Time Updates', icon: <Bell className="text-orange-500" />, bg: 'bg-orange-50' },
                  { title: 'Seamless Payments', icon: <Wallet className="text-purple-500" />, bg: 'bg-purple-50' },
                  { title: 'Reviewing & Rating', icon: <Star className="text-yellow-500" />, bg: 'bg-yellow-50' },
                  { title: 'SOS Alert', icon: <Shield className="text-red-500" />, bg: 'bg-red-50' },
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-4 border border-gray-100"
                  >
                    <div className={`p-4 ${feature.bg} rounded-2xl`}>{feature.icon}</div>
                    <span className="font-bold text-lg text-[#0A0E12]">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Development Section (Screenshot 9) */}
      <section className="py-24 bg-[#F8F9FF]">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-[#0A0E12]">On-Demand Taxi Booking App Development</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              As a leading mobile app development company, we understand the unique challenges faced by taxi businesses in today's competitive landscape. That's why we've crafted a comprehensive taxi booking app solution that will transform the way you operate and serve your customers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our taxi booking app development solutions are designed to provide a seamless, user-friendly experience for your customers. With features like real-time vehicle tracking, on-demand booking, and hassle-free payment options, your customers will enjoy a hassle-free taxi-booking experience like never before.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://picsum.photos/seed/confirmed-ride/400/800" 
              alt="Ride Confirmed" 
              className="rounded-[40px] shadow-2xl w-[320px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Smart Taxi Section (Screenshot 8) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-4xl font-bold mb-12 text-[#0A0E12]">Smart Taxi & Driver Booking Apps</h2>
          <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/seed/yellow-taxi-top/1200/500" 
              alt="Yellow Taxi Top View" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Agency Description Section (Screenshot 7) */}
      <section className="py-24 bg-[#F8F9FF]">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-[#0A0E12]">Taxi Booking App Development Agency</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At mtouch Labs, we use latest technology like GPS, AI, and machine learning to make your taxi booking software efficient, reliable, and adaptable to your client needs. Our creative strategy will provide you a competitive advantage in the market and keep your business ahead of the competition.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of experts will work closely with you to understand your unique business requirements and tailor your taxi booking app as per your specific needs. From branding to user experience, we'll make sure your app stands out and connects with your intended audience.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://picsum.photos/seed/map-app/400/800" 
              alt="Map Interface" 
              className="rounded-[40px] shadow-2xl w-[320px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Services Grid Section (Screenshot 6 & 5) */}
      <section className="py-24 bg-[#FDFBF0]">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#0A0E12]">Taxi Booking App Development Services</h2>
          <p className="text-gray-600 text-xl mb-16 max-w-3xl mx-auto">
            Seamless taxi booking with smart management and enhanced user experience
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="On-Demand Ride Booking" 
              description="Instant Taxi Booking with Auto Driver Assignment."
              icon={<div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center"><Navigation size={64} className="text-white opacity-20" /></div>}
            />
            <ServiceCard 
              title="Ride Scheduling" 
              description="Schedule Rides in Advance for Any Day & Time."
              icon={<div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center"><Clock size={64} className="text-white opacity-20" /></div>}
            />
            <ServiceCard 
              title="Driver & User Management" 
              description="Secure Profile Management & Verification for All."
              icon={<div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center"><Users size={64} className="text-white opacity-20" /></div>}
            />
            <ServiceCard 
              title="Fare Estimation & Payment" 
              description="Automatic fare calculations and several ways to pay."
              icon={<div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center"><CreditCard size={64} className="text-white opacity-20" /></div>}
            />
            <ServiceCard 
              title="Live GPS Tracking" 
              description="Real-time navigation support and driving tracking."
              icon={<div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center"><MapPin size={64} className="text-white opacity-20" /></div>}
            />
            <ServiceCard 
              title="Ride Pooling" 
              description="Budget-Friendly Shared Rides for Affordable Travel."
              icon={<div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center"><Users size={64} className="text-white opacity-20" /></div>}
            />
            <ServiceCard 
              title="Customer Support" 
              description="24/7 support with an SOS emergency function."
              icon={<div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center"><Headphones size={64} className="text-white opacity-20" /></div>}
            />
            <ServiceCard 
              title="Admin Dashboard" 
              description="Management & Analytics Tools for Business Optimization."
              icon={<div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center"><LayoutDashboard size={64} className="text-white opacity-20" /></div>}
            />
          </div>
        </div>
      </section>

      {/* App Screens Section (Screenshot 3) */}
      <section className="py-24 bg-[#001F8F] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">App Screens</h2>
          <p className="text-blue-100 text-xl">Intuitive and user-friendly interface for a seamless app experience!</p>
        </div>
        
        <div className="flex gap-8 px-4 overflow-x-auto pb-12 no-scrollbar scroll-smooth">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              className="min-w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-900"
            >
              <img 
                src={`https://picsum.photos/seed/screen-${i}/300/600`} 
                alt={`Screen ${i}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section (Screenshot 2) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#0A0E12]">FAQ'S</h2>
          <FAQItem 
            question="What features should a taxi booking app have?" 
            answer="A comprehensive taxi booking app should include real-time GPS tracking, secure payment gateways, driver/user profiles, ride scheduling, fare estimation, and an SOS emergency feature."
          />
          <FAQItem 
            question="What technologies are used in taxi booking app development?" 
            answer="We utilize a modern tech stack including React Native or Flutter for cross-platform mobile apps, Node.js or Python for the backend, and Google Maps API for navigation and location services."
          />
          <FAQItem 
            question="Can the app integrate with other systems and services?" 
            answer="Yes, our solutions are built with an API-first approach, allowing seamless integration with third-party payment providers, CRM systems, and analytics tools."
          />
          <FAQItem 
            question="Can the app handle multiple languages and currencies?" 
            answer="Absolutely. We build localized solutions that support multi-language interfaces and multi-currency payment processing to cater to a global audience."
          />
          <FAQItem 
            question="How long does it take to develop a taxi booking app?" 
            answer="The timeline varies based on complexity, but a standard MVP typically takes 3-4 months, while a full-featured enterprise solution can take 6 months or more."
          />
        </div>
      </section>

      {/* Global Presence & Footer (Screenshot 1) */}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end">
        {/* WhatsApp Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors relative group"
        >
          <MessageCircle size={32} />
          <div className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold text-sm pointer-events-none">
            Chat with us
          </div>
        </motion.button>
        
        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transition-colors"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Support Bubble */}
      <div className="fixed bottom-8 right-32 z-[100] hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white text-gray-900 px-4 py-3 rounded-2xl relative shadow-2xl flex items-center gap-3 border border-gray-100"
        >
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">M</div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Support</span>
            <span className="text-sm font-bold">How can I help you?</span>
          </div>
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-t border-r border-gray-100"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">1</div>
        </motion.div>
      </div>

      {/* Global CSS for no-scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
