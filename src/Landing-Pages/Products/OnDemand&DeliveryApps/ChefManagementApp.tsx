import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  Plus, 
  Minus,
  Users,
  DollarSign,
  Code,
  Layers,
  ShieldCheck,
  Layout,
  Smartphone
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="bg-[#F8F9FA] pt-32 pb-20 overflow-hidden">
    <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
          Chef Management App <br />
          <span className="text-primary">Development</span>
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-lg">
          Empowering Restaurants, Cloud Kitchens & F&B Brands with Smart Chef Operations
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative z-10 flex justify-center">
          <img 
            src="https://picsum.photos/seed/chef-app-1/400/800" 
            alt="App Screen 1" 
            className="w-64 md:w-80 shadow-2xl rounded-[3rem] border-8 border-white"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://picsum.photos/seed/chef-app-2/400/800" 
            alt="App Screen 2" 
            className="w-64 md:w-80 shadow-2xl rounded-[3rem] border-8 border-white absolute -bottom-10 -right-10 hidden md:block"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full -z-0"></div>
      </motion.div>
    </div>
  </section>
);

const KeyFeatures = () => {
  const features = [
    { title: "Recipe Management", icon: "📖" },
    { title: "Stock Control", icon: "📦" },
    { title: "Order Tracking", icon: "🚚" },
    { title: "Analytics Dashboard", icon: "📊" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-4">Key Features for Seamless Kitchen Operations</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-16"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OnDemandSection = () => (
  <section className="py-20 bg-[#F8F9FA]">
    <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative flex justify-center"
      >
        <div className="w-80 h-[600px] bg-green-100 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"></div>
        <img 
          src="https://picsum.photos/seed/chef-app-3/400/800" 
          alt="On-Demand App" 
          className="w-72 shadow-2xl rounded-[2.5rem] border-4 border-white relative z-10"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">On-Demand Chef Management App Development</h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Managing chefs, recipes, and kitchen operations manually can slow down your entire service chain. With our fully customizable Chef Management App, we help restaurants and cloud kitchens streamline workflows, reduce errors, and boost kitchen efficiency.
        </p>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Our solution gives chefs powerful tools to manage daily tasks, track ingredients, collaborate with team members, and maintain consistent food quality across every dish. Whether you're running a single restaurant or multiple outlets, our app adapts to your operations seamlessly.
        </p>
      </motion.div>
    </div>
  </section>
);

const BannerSection = () => (
  <section className="py-16 bg-white">
    <div className="container-custom">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-l-8 border-green-600 p-12 rounded-2xl"
      >
        <h3 className="text-3xl font-bold text-gray-800 leading-snug">
          Every culinary operation is different. We build customized chef management platforms that align with your specific business workflows.
        </h3>
      </motion.div>
    </div>
  </section>
);

const CustomBuiltSection = () => (
  <section className="py-20 bg-white">
    <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom-Built for Your Kitchen Needs</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Every kitchen operates differently. That's why we design and develop chef management apps tailored to your restaurant's structure—whether it's dine-in, takeaway, delivery, or a multi-brand cloud kitchen. Manage roles, recipes, portion sizes, kitchen inventory, and order preparation flows from one robust platform engineered for efficiency and accuracy.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative flex justify-center"
      >
        <div className="w-96 h-96 bg-green-500/10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0"></div>
        <img 
          src="https://picsum.photos/seed/chef-grid/500/800" 
          alt="Custom Features" 
          className="w-80 shadow-2xl rounded-[2.5rem] border-4 border-white relative z-10"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </div>
  </section>
);

const ServicesGrid = () => {
  const services = [
    { title: "Easy-to-Use Interface", icon: <Layout className="text-green-500" /> },
    { title: "Multi-Role Access", icon: <Users className="text-blue-500" /> },
    { title: "Cost-Effective Solutions", icon: <DollarSign className="text-yellow-500" /> },
    { title: "Custom App Development", icon: <Code className="text-purple-500" /> },
    { title: "Highly Scalable Architecture", icon: <Layers className="text-red-500" /> },
    { title: "Secure Data Management", icon: <ShieldCheck className="text-teal-500" /> },
    { title: "Feature-Rich Modules", icon: <Layout className="text-orange-500" /> },
    { title: "Modern & Attractive UI", icon: <Smartphone className="text-pink-500" /> },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16 max-w-2xl mx-auto leading-tight">
          Chef Management App Development Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                {React.cloneElement(s.icon as React.ReactElement<{ size?: number }>, { size: 32 })}
              </div>
              <h3 className="font-bold text-gray-800 text-sm md:text-base">{s.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppScreens = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container-custom text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">App Screens</h2>
      <p className="text-gray-500 text-lg">Build a customizable, multi-featured Chef Management platform with us!</p>
    </div>
    <div className="flex gap-8 justify-center overflow-x-auto pb-12 px-4 no-scrollbar">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex-shrink-0"
        >
          <img 
            src={`https://picsum.photos/seed/screen-${i}/300/600`} 
            alt={`Screen ${i}`} 
            className="w-64 rounded-[2.5rem] shadow-xl border-4 border-gray-100"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ))}
    </div>
  </section>
);

const ApplicationFeatures = () => {
  const [activeTab, setActiveTab] = useState('user');
  
  const features = {
    user: ["User Registration", "Profile & Role Management", "Task Assignment", "Push Notifications", "Multi-Language Support"],
    admin: ["Dashboard Analytics", "Staff Management", "Inventory Control", "Report Generation", "System Configuration"],
    manager: ["Kitchen Monitoring", "Order Approval", "Staff Scheduling", "Performance Tracking", "Resource Allocation"]
  };

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container-custom text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Application Features</h2>
        <p className="text-gray-500">Build a customizable, multi-featured Hotel platform with us!</p>
      </div>
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex justify-center gap-4 mb-12">
            {['user', 'admin', 'manager'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-bold text-sm border-2 transition-all ${
                  activeTab === tab 
                    ? 'bg-green-600 border-green-600 text-white' 
                    : 'bg-white border-green-600 text-green-600 hover:bg-green-50'
                }`}
              >
                {tab === 'user' ? 'User' : tab === 'admin' ? 'Admin Panel' : 'Manager Portal'}
              </button>
            ))}
          </div>
          <div className="space-y-6">
            {features[activeTab as keyof typeof features].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-gray-700 font-medium">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const techs = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
        <p className="text-gray-500">Designed with advanced technologies for reliability & performance</p>
      </div>
      <div className="container-custom flex flex-wrap justify-center gap-6">
        {techs.map((t, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all w-32 h-32 flex items-center justify-center"
          >
            <img src={t.logo} alt={t.name} className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is a chef management app and how can it help food businesses?",
      a: "A chef management app helps restaurants and food service providers organize kitchen tasks, track orders, manage staff schedules, and monitor inventory in real time, improving kitchen efficiency and service quality."
    },
    {
      q: "What features does mTouch Labs include in chef management app solutions?",
      a: "We include recipe management, inventory tracking, staff scheduling, order processing, analytics, and multi-role access for chefs, managers, and owners."
    },
    {
      q: "How does mTouch Labs ensure the app improves kitchen productivity?",
      a: "By automating manual processes, providing real-time data, and streamlining communication between front-of-house and back-of-house teams."
    },
    {
      q: "Can a chef management app integrate with POS and other restaurant systems?",
      a: "Yes, our apps are designed to integrate seamlessly with existing POS systems, accounting software, and supply chain management tools."
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="container-custom">
        <h2 className="text-5xl font-bold text-center mb-16">FAQ's</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left font-bold text-gray-800 hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                {openIndex === i ? <Minus size={20} className="text-green-500" /> : <Plus size={20} className="text-green-500" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-600 leading-relaxed"
                  >
                    {faq.a}
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

export default function ChefManagementApp() {
  return (
    <div className="p-3 min-h-screen bg-white">
      <Hero />
      <KeyFeatures />
      <OnDemandSection />
      <BannerSection />
      <CustomBuiltSection />
      <ServicesGrid />
      <AppScreens />
      <ApplicationFeatures />
      <TechStack />
      <FAQ />
    </div>
  );
}
