import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { 
  Phone, 
  Mail, 
  ChevronRight, 
  Plus, 
  Minus, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  Users, 
  Layout, 
  CreditCard, 
  Heart, 
  MessageSquare,
} from 'lucide-react';

// --- Components ---


const TopBar = () => (
  <div className="bg-black text-white py-2 border-b border-white/10 hidden md:block">
    <div className="container-custom flex justify-between items-center text-xs font-medium">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-[#007bff]" />
          <span>contact@mtouchlabs.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#007bff]" />
          <span>+91 9390683154</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#007bff]" />
          <span>+1 (551) 222-0070</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-bold">NASSCOM</span>
          <span>SME Inspire Awards 2026</span>
          <span>🏆</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <span>Hyderabad</span>
          <span>|</span>
          <span>Bangalore</span>
          <span>|</span>
          <span>USA</span>
        </div>
      </div>
    </div>
  </div>
);

const SectionHeading = ({ title, subtitle, centered = true, dark = false }: { title: string, subtitle?: string, centered?: boolean, dark?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-extrabold mb-4 ${dark ? 'text-white' : 'text-[#1a1a1a]'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-gray-400' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 border border-gray-200 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-[#1a1a1a]">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-[#007bff]" /> : <Plus className="w-5 h-5 text-[#007bff]" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-gray-50"
          >
            <div className="p-5 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function ECommerceApp() {
  const [activeTab, setActiveTab] = useState('Customer Panel');

  return (
    <div className="min-h-screen bg-white">
      <TopBar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#fdf2f8]">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border-4 border-pink-500 rounded-full" />
          <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-blue-500 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-pink-200 rounded-full" />
        </div>

        <div className="container-custom relative grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
              Transform Your <br />
              <span className="text-[#007bff]">E-Commerce Business</span> <br />
              with a Custom Mobile App Solution
            </h1>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#7B2CBF] hover:bg-[#6a24a3] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-200 transition-all">
                View Demo
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 flex justify-center">
              <img 
                src="https://picsum.photos/seed/hero-shopping/800/600" 
                alt="Shopping Illustration" 
                className="w-full max-w-md rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Phone Mockup Overlay */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-10 -bottom-10 w-64 hidden md:block z-20"
            >
              <img 
                src="https://picsum.photos/seed/phone-app/400/800" 
                alt="App Screen" 
                className="w-full rounded-[2.5rem] border-8 border-white shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="w-[400px] h-[400px] bg-pink-100 rounded-full absolute -z-10 animate-pulse" />
              <img 
                src="https://picsum.photos/seed/features-woman/600/600" 
                alt="Features" 
                className="w-[450px] h-[450px] object-cover rounded-full shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div>
              <SectionHeading 
                title="Key Features for Seamless Functionality" 
                centered={false} 
              />
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Layout, title: "User-Friendly Interface", desc: "Intuitive and easy to navigate for all users." },
                  { icon: CreditCard, title: "Secure Payment Options", desc: "Multiple secure payment gateways integrated." },
                  { icon: Heart, title: "Wishlists & Saved Items", desc: "Allow users to save products for later." },
                  { icon: MessageSquare, title: "Community & Social Integration", desc: "Connect with users through social platforms." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Demand Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold mb-6">On-Demand Ecommerce App Development</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                E-commerce apps have transformed the landscape of online shopping. As more consumers turn to their smartphones for purchasing goods and services, having a robust e-commerce app is essential for businesses aiming to stay competitive and meet customer expectations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At mTouch Labs, we specialize in transforming your business vision into a reality by crafting exceptional e-commerce applications. Our team of seasoned professionals is dedicated to deliver innovative and customized solutions that meet the unique needs of your business.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-blue-100 rounded-full -z-10 scale-90 blur-3xl opacity-50" />
              <img 
                src="https://picsum.photos/seed/phone-mockup-2/400/800" 
                alt="Phone Mockup" 
                className="w-full max-w-xs rounded-[3rem] shadow-2xl border-[12px] border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 bg-pink-400 text-white overflow-hidden">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center md:text-left"
          >
            Custom E-Commerce <br /> Apps for All
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/shopping-woman/500/500" 
              alt="Shopping Woman" 
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-8 border-white/20"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Agency Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-blue-50 rounded-full -z-10 blur-2xl" />
              <img 
                src="https://picsum.photos/seed/ecommerce-agency/500/800" 
                alt="Ecommerce Agency" 
                className="w-full max-w-sm rounded-[2.5rem] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold mb-6">E-commerce App Development Agency</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                As a leading e-commerce app development agency, we bring years of experience and a team of skilled professionals to the table. Our holistic approach encompasses strategy, design, development, and maintenance, providing you with a comprehensive solution to meet your business objectives. Transform your e-commerce vision into reality with our custom app development services.
              </p>
              <div className="space-y-4">
                {[
                  "Expert Team of Developers",
                  "User-Centric Design Approach",
                  "Scalable and Secure Solutions",
                  "End-to-End Development Cycle"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="E-commerce App Development Services" 
            subtitle="Comprehensive E-commerce App Development Services to Empower Your Online Business."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Easy to Navigate", desc: "Intuitive and user-friendly interfaces for seamless shopping experiences." },
              { icon: CreditCard, title: "Integrated Payment Systems", desc: "Multiple secure payment options for a smooth checkout process." },
              { icon: Smartphone, title: "Personalized Experience", desc: "Customization options tailored to individual customer preferences." },
              { icon: Zap, title: "Feature-Rich", desc: "A comprehensive set of features that cater to a variety of business needs." },
              { icon: Layout, title: "Easy to Manage", desc: "Streamlined back-end management for effortless store operation and monitoring." },
              { icon: ShieldCheck, title: "Highly Secure", desc: "Robust security features to protect user data and transactions." },
              { icon: Users, title: "Affordable Solutions", desc: "Cost-effective services that help you maximize your business potential." },
              { icon: Smartphone, title: "Highly Responsive", desc: "Optimized for seamless use across all devices, ensuring a great user experience." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-[#007bff]" />
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screens Section */}
      <section className="py-24 bg-[#0a192f] text-white overflow-hidden">
        <div className="container-custom">
          <SectionHeading 
            title="App Screens" 
            subtitle="Enhancing User Experience with Intuitive & Engaging App Screens" 
            dark 
          />
          <div className="flex flex-nowrap gap-6 overflow-x-auto pb-12 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[280px] h-[580px] rounded-[2.5rem] border-8 border-white/10 overflow-hidden shadow-2xl"
              >
                <img 
                  src={`https://picsum.photos/seed/screen-${i}/400/800`} 
                  alt={`App Screen ${i}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Features (Tabs) */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Application Features" 
            subtitle="Powerful and Innovative Features to Elevate Your Application Experience" 
          />
          
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1.5 rounded-full flex gap-2">
              {['Customer Panel', 'Admin Panel', 'Seller/Vendor Panel'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-white text-orange-500 shadow-md' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/features-books/600/400" 
                alt="Features Illustration" 
                className="w-full rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-orange-100 rounded-full -z-10" />
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1a1a]">{activeTab} Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Product Search & Filters",
                  "User Registration & Profiles",
                  "Shopping Cart & Checkout",
                  "Order Tracking",
                  "Push Notifications",
                  "Reviews & Ratings",
                  "Multiple Payment Options",
                  "Wishlist Functionality"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Technology We Use" 
            subtitle="Advanced Web Technologies for Scalable and High-Performance Applications" 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
              { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
              { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
              { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
              { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
              { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
              { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
              { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
              { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
              { name: "Crashlytics", icon: "https://picsum.photos/seed/crashlytics/100/100" },
              { name: "Google Analytics", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
              { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
            ].map((tech, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center gap-4 hover:shadow-md transition-all"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
                <span className="text-xs font-bold text-gray-600">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading title="FAQ's" />
          <div className="space-y-2">
            {[
              { q: "What services are included in ecommerce app development by mTouch Labs?", a: "We provide end-to-end services including UI/UX design, front-end and back-end development, payment gateway integration, and post-launch maintenance." },
              { q: "How does mTouch Labs build scalable ecommerce applications for businesses?", a: "We use modern tech stacks like Flutter, Laravel, and AWS to ensure your app can handle growth and high traffic seamlessly." },
              { q: "Why should businesses choose mTouch Labs for ecommerce app development?", a: "With years of experience and a track record of successful projects, we deliver high-quality, secure, and user-centric solutions." },
              { q: "What features should a modern ecommerce app include?", a: "Key features include advanced search, secure checkout, real-time tracking, push notifications, and personalized recommendations." },
              { q: "How long does it take to develop a fully functional ecommerce app?", a: "The timeline varies based on complexity, but typically ranges from 3 to 6 months for a comprehensive solution." }
            ].map((faq, idx) => (
              <AccordionItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-xl text-white"
        >
          <MessageSquare className="w-7 h-7" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#007bff] rounded-full flex items-center justify-center shadow-xl text-white"
        >
          <ChevronRight className="w-7 h-7 -rotate-90" />
        </motion.button>
      </div>
    </div>
  );
}
