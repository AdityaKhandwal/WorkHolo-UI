import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  Plus, 
  Minus,
  Globe,
  MessageCircle,
  Download,
  ArrowRight
} from 'lucide-react';

// --- Components ---


const Hero = () => (
  <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-hero-gradient overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl z-10"
    >
      <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[14px] mb-6">Transform Your Milk Business With Us</h2>
      <h1 className="text-4xl md:text-7xl font-extrabold text-[#1A1A1A] leading-[1.1] mb-10">
        Revolutionize Your Dairy Business with Custom <br />
        <span className="text-blue-500">Milk Delivery Solution</span>
      </h1>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-[16px] font-bold uppercase tracking-wider shadow-xl transition-all hover:scale-105">
        View Demo
      </button>
    </motion.div>
    
    {/* Decorative elements */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent"></div>
    </div>
  </section>
);

const IntroSection = () => (
  <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-12">
        Milk Delivery App <br /> Development Company
      </h2>
      <p className="text-gray-600 text-[18px] leading-relaxed max-w-4xl mx-auto">
        We are a leading <span className="text-blue-500 font-medium">milk delivery app development company</span> dedicated to providing top-notch milk delivery app development services. Our skilled milk delivery app developers design innovative solutions that cater to your business needs, ensuring seamless delivery and exceptional user experiences.
      </p>
    </motion.div>
  </section>
);

const ProductShowcase = () => (
  <section className="py-20 px-4 md:px-12 bg-gray-50">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img 
          src="https://picsum.photos/seed/milk-app/800/600" 
          alt="App Mockup" 
          className="rounded-3xl shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              🥛
            </div>
            <span className="font-bold text-sm">Natural Milk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
              🥗
            </div>
            <span className="font-bold text-sm">Organic Food</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-8">Online Milk Delivery App</h2>
        <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
          Our app is built to simplify dairy operations, whether you're running a small family farm or managing a large dairy network.
        </p>
        <p className="text-gray-600 text-[18px] leading-relaxed mb-10">
          Empower your dairy business with <span className="text-blue-500 font-medium">milk delivery app solutions</span> designed to streamline operations and boost customer satisfaction. From small dairies to large-scale operations, our apps ensure a seamless, efficient process.
        </p>
        <p className="text-gray-600 text-[18px] leading-relaxed">
          From scheduling routes to tracking inventory, our solution empowers your business to thrive in today's competitive market, ensuring both dairy producers and customers benefit from a seamless process.
        </p>
      </motion.div>
    </div>
  </section>
);

const DiscoverServices = () => (
  <section className="py-24 px-4 md:px-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-blue-600 font-bold uppercase tracking-wider text-[12px] mb-4 block">Discover Services</span>
        <h2 className="text-4xl font-extrabold text-[#1A1A1A] mb-8">Milk Delivery Web and App Development Services</h2>
        <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
          Whether you're starting a new <span className="text-blue-500 font-medium">milk delivery platform</span> or upgrading an existing system, our solutions are tailored to your needs.
        </p>
        <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
          We specialize in creating scalable, feature-rich apps that streamline your operations while enhancing customer satisfaction. From delivery management to subscription tracking, every feature is designed to ensure efficiency.
        </p>
        <p className="text-gray-600 text-[18px] leading-relaxed">
          Our customized approach ensures your app grows with your business, helping you manage daily tasks with ease and keeping your customers happy with smooth, timely deliveries.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-blue-50 rounded-3xl p-12 h-full flex flex-col justify-center"
      >
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
              <Globe size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">Web Solutions</h4>
              <p className="text-gray-500 text-sm">Robust web platforms for managing your entire dairy ecosystem.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">Mobile Apps</h4>
              <p className="text-gray-500 text-sm">Intuitive Android & iOS apps for customers and delivery partners.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection = () => {
  const features = [
    { title: "App Customization", desc: "Tailor the app to suit your business needs with customizable features, branding options, and unique functionalities." },
    { title: "Push Notifications & Alerts", desc: "Instant alerts for order confirmation, delivery status updates, and promotional offers to keep users informed." },
    { title: "Admin Dashboard", desc: "A comprehensive dashboard for managing customer subscriptions, tracking deliveries, and overseeing operations." },
    { title: "Multi-Payment Gateway Integration", desc: "Seamless integration of multiple payment options like credit/debit cards, e-wallets, UPI, and cash-on-delivery." },
    { title: "Inventory & Stock Management", desc: "Real-time inventory tracking to ensure product availability and minimize shortages." },
    { title: "Customer Feedback & Ratings", desc: "Integrated rating system for customers to provide feedback on deliveries and service quality." }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-[#1A1A1A] mb-20">Features of Milk Delivery App</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-gray-100"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-[#1A1A1A] group-hover:text-blue-600 transition-colors">{f.title}</h3>
                <span className="text-2xl">🌿</span>
              </div>
              <p className="text-gray-500 leading-relaxed text-[16px]">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="bg-primary-purple hover:bg-purple-700 text-white px-10 py-4 rounded-lg text-[16px] font-bold uppercase tracking-wider shadow-xl transition-all">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { title: "Planning & Design", desc: "Gather requirements, conduct market research, and create wireframes for an intuitive user experience." },
    { title: "Development", desc: "Build the app and website with robust features, ensuring seamless integration of payment gateways and user-friendly navigation." },
    { title: "Testing", desc: "Conduct thorough testing for functionality and performance, addressing any bugs to ensure a smooth launch." },
    { title: "Launch & Support", desc: "Deploy the app and website, followed by ongoing maintenance and updates based on user feedback for continuous improvement." }
  ];

  return (
    <section className="py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-blue-600 font-bold uppercase tracking-wider text-[12px] mb-4 block">Transform Your Milk Business With Us</span>
        <h2 className="text-5xl font-extrabold text-[#1A1A1A] mb-20">Milk Delivery App & Web Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold mb-6">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{s.desc}</p>
              <div className="mt-auto">
                <ArrowRight className="text-green-500" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded-lg text-[16px] font-bold uppercase tracking-wider shadow-xl transition-all">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

const IntegratedServices = () => (
  <section className="py-24 px-4 md:px-12 bg-blue-50/30">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-10 leading-tight">
        Transform Your Milk Delivery Service with Custom Web and Mobile Solutions
      </h2>
      <p className="text-gray-600 text-[18px] leading-relaxed mb-12">
        Build a powerful ecosystem with our tailored web and mobile app solutions that connect customers and dairy providers seamlessly. Our integrated approach enhances user experience, facilitates smooth transactions, and drives growth for your milk delivery service.
      </p>
    </div>
  </section>
);

const AppFeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState('Admin Panel');
  const tabs = ['Admin Panel', 'User Panel', 'Delivery Partner Panel'];
  const features = [
    'Dashboard Overview', 'Analytics & Reporting', 'User Management', 'Notifications',
    'Product Management', 'Inventory Management', 'Order Management'
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-[#1A1A1A] mb-6">Application Features</h2>
        <p className="text-gray-500 mb-12">Explore the features of each panel in our milk delivery platform!</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-bold text-[15px] transition-all border-2 ${
                activeTab === tab 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
                : 'bg-white border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-blue-50 text-blue-800 px-6 py-3 rounded-xl font-semibold text-[15px] shadow-sm"
            >
              {f}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "How can a milk delivery app streamline operations for dairy businesses?", a: "A milk delivery app automates order placement, route optimization, and payment collection, reducing manual errors and saving time." },
    { q: "What innovative features does WorkHolo Labs include in milk delivery apps?", a: "We include features like real-time tracking, subscription management, multi-payment gateways, and automated push notifications." },
    { q: "How does WorkHolo Labs ensure a seamless user experience in milk delivery apps?", a: "We focus on intuitive UI/UX design, fast loading times, and robust backend infrastructure to ensure reliability." },
    { q: "Can milk delivery apps support recurring subscriptions and notifications?", a: "Yes, our apps are built with sophisticated subscription engines that handle daily, weekly, or custom recurring orders automatically." },
    { q: "What factors affect the development timeline for a milk delivery app?", a: "The timeline depends on feature complexity, platform requirements (iOS/Android/Web), and integration needs with third-party services." }
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-[#1A1A1A] mb-20">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[18px] text-[#1A1A1A]">{faq.q}</span>
                {openIndex === i ? <Minus className="text-blue-500" size={20} /> : <Plus className="text-blue-500" size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-500 leading-relaxed">
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


const GlobalPresence = () => {
  const regions = [
    { name: "INDIA", cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"] },
    { name: "AMERICAS", cities: ["United States", "Canada"] },
    { name: "EUROPE", cities: ["United Kingdom", "Germany", "Ireland"] },
    { name: "ASIA PACIFIC", cities: ["Singapore", "Australia", "New Zealand", "India"] },
    { name: "MIDDLE EAST", cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"] }
  ];

  return (
    <section className="bg-presence-dark text-white py-20 px-4 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Globe className="text-blue-500" size={24} />
          <h3 className="text-xl font-bold">Global Presence</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {regions.map((region, i) => (
            <div key={i}>
              <h4 className="text-blue-500 font-black text-[11px] tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {region.name}
              </h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                {region.cities.map((city, j) => (
                  <li key={j} className="hover:text-white cursor-pointer transition-colors">{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CopyrightBar = () => (
  <div className="bg-presence-dark text-gray-500 py-8 px-4 md:px-12 border-t border-gray-900 text-[12px]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p>© 2026 <span className="text-gray-300 font-bold">WorkHolo Labs Pvt. Ltd.</span> All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
      </div>
    </div>
  </div>
);

const FloatingWidgets = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
    <button className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative group">
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">Chat with us!</span>
    </button>
    <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
      <Download size={20} />
    </button>
  </div>
);

// --- Main App ---

export default function MilkDeliveryApp() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <main className="flex-grow">
        <Hero />
        <IntroSection />
        <ProductShowcase />
        <DiscoverServices />
        <IntegratedServices />
        <FeaturesSection />
        <ProcessSection />
        <AppFeaturesTabs />
        <FAQSection />
      </main>

      <GlobalPresence />
      <CopyrightBar />
      <FloatingWidgets />
    </div>
  );
}
