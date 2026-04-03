import React, { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import { 
  ChevronRight,
  Calendar, FileText, Home, ShieldCheck, Plus, Minus,
  Smartphone, Database, Activity, Search,
  Users, MessageSquare, ArrowUpRight,
} from 'lucide-react';

// --- Components ---

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}: HTMLMotionProps<"button"> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}) => {
  const variants = {
    primary: "bg-[#7B2CBF] text-white hover:bg-[#6A24A3] shadow-lg shadow-purple-500/20",
    secondary: "bg-[#007BFF] text-white hover:bg-[#0069D9] shadow-lg shadow-blue-500/20",
    outline: "border-2 border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF] hover:text-white",
    ghost: "text-gray-600 hover:bg-gray-100",
    dark: "bg-[#020617] text-white hover:bg-gray-900 shadow-lg shadow-gray-900/20"
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold"
  };
  
  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        "rounded-full transition-all duration-300 flex items-center justify-center gap-2 font-medium whitespace-nowrap",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true,
  dark = false 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
  dark?: boolean;
}) => (
  <div className={clsx("mb-10 md:mb-16", centered ? "text-center" : "text-left")}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={clsx(
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
        dark ? "text-white" : "text-[#0F172A]"
      )}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={clsx(
          "text-base sm:text-lg md:text-xl max-w-3xl mx-auto",
          dark ? "text-gray-400" : "text-[#475569]"
        )}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ 
  children, 
  className,
  hover = true 
}: { 
  children: React.ReactNode; 
  className?: string;
  hover?: boolean;
  key?: React.Key;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={hover ? { y: -10, transition: { duration: 0.3 } } : {}}
    className={clsx(
      "bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 border border-gray-100",
      className
    )}
  >
    {children}
  </motion.div>
);

const AccordionItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
  key?: React.Key;
}) => (
  <div className="mb-4 border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-50 transition-colors"
    >
      <span className="text-base sm:text-lg font-semibold text-[#0F172A]">{question}</span>
      <div className={clsx(
        "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0",
        isOpen ? "bg-[#7B2CBF] text-white" : "bg-gray-100 text-gray-500"
      )}>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-5 sm:p-6 pt-0 text-[#475569] leading-relaxed text-sm sm:text-base">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- Main App ---

export default function DiagnosticApp() {
  const [bookingTab, setBookingTab] = useState('health checkups');
  const [featureTab, setFeatureTab] = useState('customer');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const keyFeatures = [
    { 
      title: 'Appointment Booking', 
      icon: <Calendar className="w-8 h-8 md:w-10 md:h-10 text-[#007BFF]" />,
      desc: 'Seamless scheduling for patients and clinics.'
    },
    { 
      title: 'Test Reports & History', 
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10 text-[#E91E63]" />,
      desc: 'Secure access to diagnostic results anytime.'
    },
    { 
      title: 'Home Sample Collection', 
      icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-[#4CAF50]" />,
      desc: 'Convenient home visits for sample gathering.'
    },
    { 
      title: 'Secure Payment & Insurance', 
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-[#7B2CBF]" />,
      desc: 'Integrated billing and insurance processing.'
    }
  ];

  const services = [
    { title: 'Custom Diagnostic App', desc: 'Apps Designed for Labs & Healthcare Professionals' },
    { title: 'White-Label Diagnostic', desc: 'Custom-Branded Ready-Made Apps for Unique Needs' },
    { title: 'Multi-Platform App Development', desc: 'Native & Cross-Platform Apps for iOS, Android & Web' },
    { title: 'Healthcare Systems', desc: 'Smooth interaction with platforms like LIS, EMR, and EHR' },
    { title: 'Cloud-Based Data', desc: 'Secure Cloud Storage for Reports & Diagnostic Data' },
    { title: 'Telemedicine App', desc: 'Online Diagnostic & Doctor Consultation Solutions' },
    { title: 'AI & ML-Powered Diagnostic', desc: 'Smart Automation for Predictive Analysis & Diagnosis' },
    { title: 'Compliance Assurance', desc: 'Healthcare Data Security with GDPR & HIPAA Compliance' }
  ];

  const techStack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Crashlytics', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'Google Analytics', icon: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg' },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
  ];

  const faqs = [
    { q: "How is a diagnostic app developed?", a: "Diagnostic app development involves several stages: planning, UI/UX design, backend development, integration with LIS/EMR systems, and rigorous testing for HIPAA/GDPR compliance." },
    { q: "What features should a diagnostic app have?", a: "Key features include appointment booking, digital reports, home sample collection, secure payments, telemedicine integration, and real-time notifications." },
    { q: "What technologies are used in diagnostic app development?", a: "We use modern stacks like Flutter for cross-platform apps, Node.js or Laravel for backends, and AWS/Firebase for secure cloud infrastructure." },
    { q: "Is it possible to integrate this app with existing healthcare systems?", a: "Yes, our apps are built to integrate seamlessly with existing Laboratory Information Systems (LIS), Electronic Medical Records (EMR), and EHR platforms." },
    { q: "How secure is the data stored in a diagnostic app?", a: "Data security is our top priority. We implement end-to-end encryption, multi-factor authentication, and ensure full compliance with international healthcare data standards." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#0F172A] selection:bg-[#7B2CBF]/10 selection:text-[#7B2CBF]">
      
      {/* --- Navigation --- */}

      {/* --- Hero Section --- */}
      <section id="home" className="relative pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-32 lg:pb-40 overflow-hidden bg-[#160139]">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-white/10 text-blue-300 text-sm font-bold uppercase tracking-widest mb-6"
            >
              Healthcare Innovation
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white">
              Build Scalable <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Diagnostic</span> with End-to-End Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Empowering healthcare providers with cutting-edge web and mobile applications designed for precision, speed, and patient satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">View Demo</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10">Our Portfolio</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-white/10">
              <img 
                src="https://picsum.photos/seed/medical-lab/1200/800" 
                alt="Medical Laboratory" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Elements - Hidden on very small screens */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-10 -right-6 md:-right-10 bg-white p-4 md:p-6 rounded-3xl shadow-2xl z-20 items-center gap-4 border border-gray-100"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-500">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Heart Rate</p>
                <p className="text-lg md:text-xl font-bold">72 BPM</p>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden sm:flex absolute -bottom-10 -left-6 md:-left-10 bg-white p-4 md:p-6 rounded-3xl shadow-2xl z-20 items-center gap-4 border border-gray-100"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500">
                <Users size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Patients</p>
                <p className="text-lg md:text-xl font-bold">10k+</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background Decorations */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </section>

      {/* --- Key Features --- */}
      <section id="features" className="py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <SectionHeading 
          title="Key Features for Seamless Functionality" 
          subtitle="Empowering diagnostic centers with cutting-edge digital tools for better patient care."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {keyFeatures.map((feature, idx) => (
            <Card key={idx} className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7B2CBF]/10 group-hover:text-[#7B2CBF] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* --- On-Demand Diagnostic --- */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="bg-white p-3 md:p-4 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl inline-block border border-gray-100">
              <img 
                src="https://picsum.photos/seed/app-screen-1/400/800" 
                alt="App Screen" 
                className="rounded-[2rem] md:rounded-[2.5rem] w-full max-w-[280px] md:max-w-[320px] mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 -right-10 w-40 h-40 bg-[#7B2CBF]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
              On-Demand Diagnostic App Development
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              In the realm of healthcare, precision and speed in diagnostics can make all the difference. At WorkHolo Labs, we are dedicated to crafting state-of-the-art diagnostic apps that elevate the capabilities of healthcare providers. As the Best Diagnostic App Development Company, we design apps to deliver accurate results swiftly, enhance patient management, and optimize clinical workflows.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button variant="dark" size="lg">
                Request Quote <ArrowUpRight size={20} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Easy Booking Tabs --- */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <SectionHeading title="Diagnostic App for Easy Booking" />
        <div className="max-w-5xl mx-auto">
          {/* Mobile Tab Scroll */}
          <div className="flex overflow-x-auto pb-4 mb-10 no-scrollbar gap-3 sm:justify-center">
            {['Health checkups', 'RTPCR Test', 'Diabetes', 'Cardiac'].map((tab) => (
              <button
                key={tab}
                onClick={() => setBookingTab(tab.toLowerCase())}
                className={clsx(
                  "px-6 py-3 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 shadow-sm whitespace-nowrap flex-shrink-0",
                  bookingTab === tab.toLowerCase() 
                    ? "bg-blue-100 text-blue-600 border-2 border-blue-200" 
                    : "bg-white text-gray-500 border-2 border-transparent hover:bg-gray-50"
                )}
              >
                <div className={clsx(
                  "w-8 h-8 rounded-xl flex items-center justify-center",
                  bookingTab === tab.toLowerCase() ? "bg-white" : "bg-gray-100"
                )}>
                  {tab === 'Health checkups' && <Activity size={16} />}
                  {tab === 'RTPCR Test' && <Smartphone size={16} />}
                  {tab === 'Diabetes' && <Search size={16} />}
                  {tab === 'Cardiac' && <Activity size={16} />}
                </div>
                {tab}
              </button>
            ))}
          </div>
          
          <motion.div 
            key={bookingTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-10 md:gap-12 items-center"
          >
            <div className="flex-1 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 capitalize">Comprehensive {bookingTab} Solutions</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our platform provides a seamless experience for {bookingTab}. From booking to result delivery, we ensure every step is optimized for user convenience and medical accuracy.
              </p>
              <ul className="space-y-4">
                {['Real-time tracking', 'Digital reports', 'Expert consultation'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 order-1 md:order-2">
              <img 
                src={`https://picsum.photos/seed/${bookingTab}/400/400`} 
                alt={bookingTab} 
                className="rounded-3xl w-full shadow-lg aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section id="services" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[#020617] text-white">
        <SectionHeading 
          title="Diagnostic App Development Services" 
          subtitle="Revolutionizing Healthcare with Advanced Diagnostic App Development"
          dark
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl mb-6 flex items-center justify-center">
                <Smartphone className="text-blue-400" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Application Features Tabs --- */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Application Features" 
            subtitle="Powerful Features of Our Diagnostic App"
          />
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Customer Panel', 'Admin Panel', 'Doctor Panel'].map((panel) => (
              <button
                key={panel}
                onClick={() => setFeatureTab(panel.toLowerCase().split(' ')[0])}
                className={clsx(
                  "px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold transition-all duration-300 shadow-lg text-sm sm:text-base",
                  featureTab === panel.toLowerCase().split(' ')[0]
                    ? "bg-[#007BFF] text-white scale-105"
                    : "bg-white text-gray-500 border border-gray-100 hover:bg-gray-50"
                )}
              >
                {panel}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 shadow-2xl border border-gray-50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                key={featureTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-8 capitalize">{featureTab} Panel Features</h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { title: 'User Profile', icon: <Users size={20} /> },
                    { title: 'Real-time Tracking', icon: <Activity size={20} /> },
                    { title: 'Secure Payments', icon: <ShieldCheck size={20} /> },
                    { title: 'Instant Notifications', icon: <MessageSquare size={20} /> },
                    { title: 'Digital Reports', icon: <FileText size={20} /> },
                    { title: 'History Management', icon: <Database size={20} /> }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">{feature.title}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex justify-center sm:justify-start">
                  <Button variant="secondary">
                    Learn More <ChevronRight size={18} />
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                key={`${featureTab}-img`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative hidden sm:block"
              >
                <div className="relative z-10 bg-gray-100 rounded-[2rem] p-4 shadow-inner">
                  <img 
                    src={`https://picsum.photos/seed/${featureTab}-panel/800/600`} 
                    alt={`${featureTab} Panel`} 
                    className="rounded-[1.5rem] w-full shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- App Screens --- */}
      <section id="portfolio" className="py-20 md:py-32 bg-gray-50 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-24">
          <SectionHeading 
            title="App Screens" 
            subtitle="Explore the Intuitive Screens of Our Diagnostic App"
          />
        </div>
        <div className="flex gap-6 px-6 md:px-12 lg:px-24 overflow-x-auto pb-12 no-scrollbar scroll-smooth">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-[240px] md:w-[280px] bg-white p-3 rounded-[2.5rem] shadow-xl border border-gray-100"
            >
              <img 
                src={`https://picsum.photos/seed/screen-${i}/300/600`} 
                alt={`Screen ${i}`} 
                className="rounded-[2rem] w-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Technology Section --- */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <SectionHeading 
          title="Technology We Use" 
          subtitle="Web Technologies Used in Diagnostic App Development"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg shadow-gray-100 border border-gray-50 flex flex-col items-center justify-center gap-4 hover:border-[#7B2CBF]/30 transition-colors group"
            >
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 sm:w-12 sm:h-12 grayscale group-hover:grayscale-0 transition-all duration-300" />
              <span className="text-[10px] sm:text-xs font-bold text-gray-500 group-hover:text-[#7B2CBF]">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section id="faq" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-12">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}

      {/* --- Floating Widgets --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-[#25D366]/20 rounded-full animate-ping" />
            <MessageSquare size={24} fill="currentColor" />
          </div>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <ArrowUpRight size={24} className="-rotate-45" />
        </motion.button>
      </div>

    </div>
  );
}
