import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronRight, 
  Plus, 
  Search, 
  Home,  
  Layout, 
  Smartphone, 
  Database,  
  ShieldCheck, 
  MessageSquare, 
  Gavel, 
  Building2, 
  Key,
  ArrowRight
} from 'lucide-react';

// Animation Component
const ScrollReveal = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[700px] flex items-center overflow-hidden bg-[#F8F9FA]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/blueprint/1920/1080" 
          alt="Blueprint background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-[64px] font-extrabold text-[#1A1A1A] leading-[1.1] mb-8 tracking-tight">
            <span className="text-[#7B2CBF]">Real Estate</span> <br />
            App Development for <br />
            Web and Mobile Platforms
          </h1>
          <button className="bg-[#7B2CBF] hover:bg-[#6A25A3] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View Demo
          </button>
        </ScrollReveal>
        
        <div className="hidden md:block relative">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/house/800/600" 
              alt="3D House Model" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const KeyFeatures = () => {
  const features = [
    { title: "Property Search & Filters", icon: <Search className="w-8 h-8 text-[#7B2CBF]" /> },
    { title: "Virtual Tours & Photos", icon: <Home className="w-8 h-8 text-[#7B2CBF]" /> },
    { title: "Price Alerts", icon: <div className="text-2xl font-bold text-[#7B2CBF]">₹</div> },
    { title: "Mortgage Calculator", icon: <Layout className="w-8 h-8 text-[#7B2CBF]" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-[48px] font-extrabold text-[#1A1A1A] tracking-tight">Key Features for Seamless Functionality</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <ScrollReveal key={i} className="group">
              <div className="border-2 border-purple-50 rounded-2xl p-10 text-center hover:border-[#7B2CBF] transition-all cursor-pointer h-full flex flex-col items-center justify-center bg-white shadow-sm hover:shadow-xl transform hover:-translate-y-2">
                <div className="mb-6 p-5 bg-purple-50 rounded-2xl group-hover:bg-purple-100 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333] group-hover:text-[#7B2CBF] transition-colors">{f.title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const OnDemandSection = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-[48px] font-extrabold text-[#1A1A1A] mb-8 leading-tight tracking-tight">On-Demand Real Estate App Development</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            In the fast-paced world of real estate, staying ahead means embracing technology. 
            Real estate apps have become essential tools for buyers, sellers, and agents alike, 
            offering convenience, accessibility, and efficiency.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            We understand that every real estate business is unique. Whether you're a real estate 
            agent, broker, or property developer, we can create an app that meets your unique 
            business needs.
          </p>
          <button className="bg-[#7B2CBF] hover:bg-[#6A25A3] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get A Request Quote <ArrowRight className="w-5 h-5" />
          </button>
        </ScrollReveal>
        <ScrollReveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#7B2CBF]/10 rounded-3xl blur-2xl"></div>
            <img 
              src="https://picsum.photos/seed/realestate/800/600" 
              alt="Real Estate App" 
              className="relative rounded-2xl shadow-2xl w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const BuyersSellersSection = () => {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal className="order-2 md:order-1">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/mobileapp/800/1000" 
              alt="Mobile App Screens" 
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal className="order-1 md:order-2">
          <div className="bg-[#7B2CBF] text-white px-5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-2 mb-8 shadow-md">
            Get A Request Quote <ArrowRight className="w-3 h-3" />
          </div>
          <h2 className="text-4xl md:text-[48px] font-extrabold text-[#1A1A1A] mb-8 leading-tight tracking-tight">Real Estate Apps for Buyers and Sellers</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At mTouch Labs, we specialize in creating custom mobile apps for the real estate industry. 
            As a custom real estate app development company, our team of experienced developers and 
            designers works closely with clients to understand their unique needs and deliver tailored solutions.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We provide customized solutions, such as user-friendly interfaces for property listings or 
            advanced search functionality to enhance user experience. Investing in real estate apps 
            allows you to streamline operations and attract more potential buyers and sellers to your platform.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    { title: "Real Estate App", desc: "Custom Online & Mobile App Solutions for Real Estate", icon: <Smartphone className="w-10 h-10" /> },
    { title: "Property Management", desc: "Digital Tools for Rent, Payments & Property Listings", icon: <Building2 className="w-10 h-10" /> },
    { title: "Real Estate Marketplace", desc: "Seamless Platform for Buyers, Sellers & Agents", icon: <Globe className="w-10 h-10" /> },
    { title: "MLS & IDX Integration", desc: "Integrate IDX & MLS for Real-Time Property Listings", icon: <Database className="w-10 h-10" /> },
    { title: "Real Estate CRM", desc: "CRM Solutions for Realtors to Manage Leads & Sales", icon: <Layout className="w-10 h-10" /> },
    { title: "Auction & Bidding Platform", desc: "Auction solutions for real estate purchases and sales", icon: <Gavel className="w-10 h-10" /> },
    { title: "Real Estate ERP Solutions", desc: "ERP Solutions for Large-Scale Real Estate Management", icon: <ShieldCheck className="w-10 h-10" /> },
    { title: "Rental & Lease Admin", desc: "Apps for Payments, Leases & Tenant Communication", icon: <Key className="w-10 h-10" /> },
  ];

  return (
    <section className="py-24 bg-[#FFF9F0]">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-[48px] font-extrabold text-[#1A1A1A] mb-6 tracking-tight">Real Estate App Development Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive Real Estate App Development Services for Modern Property Solutions</p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={i}>
              <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col items-center text-center group border border-gray-100 transform hover:-translate-y-2">
                <div className="w-full aspect-video bg-[#1A1A1A] rounded-2xl mb-8 flex items-center justify-center text-white group-hover:bg-[#7B2CBF] transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#7B2CBF] transition-colors">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppScreens = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-[48px] font-extrabold text-[#1A1A1A] mb-6 tracking-tight">App Screens</h2>
          <p className="text-xl text-gray-600">Visually Stunning App Screens for an Enhanced User Journey</p>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center gap-12">
          {[1, 2, 3].map((n) => (
            <ScrollReveal key={n} className="w-full max-w-[320px]">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#7B2CBF]/5 rounded-[50px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={`https://picsum.photos/seed/screen${n}/600/1200`} 
                  alt={`App Screen ${n}`} 
                  className="relative rounded-[48px] border-[10px] border-gray-900 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologyStack = () => {
  const techs = [
    { name: "HTML 5", color: "text-orange-600" },
    { name: "CSS 3", color: "text-blue-600" },
    { name: "JavaScript", color: "text-yellow-500" },
    { name: "Bootstrap", color: "text-purple-600" },
    { name: "PHP", color: "text-indigo-600" },
    { name: "Laravel", color: "text-red-600" },
    { name: "Flutter", color: "text-blue-400" },
    { name: "Firebase", color: "text-orange-400" },
    { name: "MySQL", color: "text-blue-800" },
    { name: "Crashlytics", color: "text-gray-600" },
    { name: "Google Analytics", color: "text-orange-500" },
    { name: "AWS", color: "text-orange-600" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-[#333333] rounded-[60px] p-12 md:p-24 text-white text-center shadow-2xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-[48px] font-extrabold mb-6 tracking-tight">Technology We Use</h2>
            <p className="text-xl text-gray-400 mb-20">Innovative Web Technologies for Seamless Digital Experiences</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techs.map((t, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center aspect-square hover:scale-110 transition-all cursor-pointer shadow-lg group">
                  <div className={`text-2xl font-black mb-2 ${t.color} group-hover:scale-110 transition-transform`}>{t.name.split(' ')[0]}</div>
                  <div className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{t.name}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    "What features should a real estate app include?",
    "What technology stack is recommended for developing a Real Estate app?",
    "How long does it take to develop a Real Estate app?",
    "Can I integrate third-party services into my real estate app?",
    "Can my real estate app support multiple languages and currencies?",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <ScrollReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-[48px] font-extrabold text-[#1A1A1A] tracking-tight">FAQ's</h2>
        </ScrollReveal>
        
        <div className="space-y-6">
          {faqs.map((q, i) => (
            <ScrollReveal key={i}>
              <div className="bg-gray-500 text-white rounded-xl p-8 flex items-center justify-between cursor-pointer hover:bg-[#7B2CBF] transition-all shadow-md hover:shadow-xl group">
                <span className="font-bold text-xl">{q}</span>
                <div className="bg-white/20 p-2 rounded-full group-hover:rotate-90 transition-transform">
                  <Plus className="w-6 h-6" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-[56px] font-extrabold text-[#1A1A1A] mb-8 tracking-tight">Get Your Custom Real Estate App Now</h2>
          <p className="text-xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed">
            Drive your business forward with our customizable Real Estate App Development Solutions
          </p>
          <button className="bg-[#7B2CBF] hover:bg-[#6A25A3] text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-2xl flex items-center gap-4 mx-auto transform hover:-translate-y-2 hover:shadow-purple-500/20">
            Let's Bring Your Idea to Life <ArrowRight className="w-7 h-7" />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      <div className="absolute -inset-4 bg-green-500/20 rounded-full animate-ping group-hover:hidden"></div>
      <button className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <MessageSquare className="w-8 h-8 fill-current" />
      </button>
    </div>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-28 right-8 z-[100] bg-[#7B2CBF] text-white p-3 rounded-full shadow-xl transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
    >
      <ChevronRight className="w-6 h-6 -rotate-90" />
    </button>
  );
};

export default function RealEstateApp() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <KeyFeatures />
      <OnDemandSection />
      <BuyersSellersSection />
      <ServicesGrid />
      <AppScreens />
      <TechnologyStack />
      <FAQ />
      <CTASection />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
