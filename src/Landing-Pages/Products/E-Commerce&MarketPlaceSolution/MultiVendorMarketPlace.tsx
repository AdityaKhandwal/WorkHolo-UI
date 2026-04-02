import React, { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Plus, 
  Minus, 
  Users,
  Settings,
  Search,
  ShieldCheck,
  Star,
  BarChart3,
  ShoppingBag,
  Briefcase,
} from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' | 'dark' }) => {
  const variants = {
    primary: "bg-[#7B2CBF] text-white hover:bg-[#6a25a3]",
    secondary: "bg-[#FFC107] text-black hover:bg-[#e6ae06]",
    outline: "border-2 border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF] hover:text-white",
    dark: "bg-[#0A0A0A] text-white hover:bg-gray-800"
  };

  return (
    <button 
      className={cn(
        "px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ children, className, light = false }: { children: React.ReactNode, className?: string, light?: boolean }) => (
  <h2 className={cn(
    "text-[40px] font-extrabold text-center mb-8 leading-tight",
    light ? "text-white" : "text-[#7B2CBF]",
    className
  )}>
    {children}
  </h2>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4 border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-gray-800 group-hover:text-[#7B2CBF] transition-colors">{question}</span>
        <div className="bg-gray-100 p-2 rounded-full group-hover:bg-[#7B2CBF] group-hover:text-white transition-all">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function MultiVendorMarketPlace() {

  return (
    <div className="min-h-screen bg-white selection:bg-[#7B2CBF] selection:text-white">
      {/* Top Bar */}

      {/* Navigation */}

      {/* Hero Section */}
      <section className="bg-[#F3E8FF] pt-20 pb-32 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-[56px] font-black text-gray-900 leading-[1.1] mb-6">
              Transform Your eCommerce Vision with a <span className="text-[#7B2CBF]">Multi-Vendor Marketplace</span>
            </h1>
            <div className="flex gap-4">
              <Button variant="secondary" className="px-10">VIEW DEMO</Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://picsum.photos/seed/marketplace/800/600" 
              alt="Marketplace Illustration" 
              className="w-full h-auto rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Multi Vendor Ecommerce App Development</SectionHeading>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Welcome to the future of eCommerce! At WorkHolo Labs, we specialize in creating innovative, scalable multi-vendor marketplace solutions that empower businesses to thrive in the digital marketplace. Whether you're looking to build a new online marketplace or scale an existing one, our expert team delivers custom eCommerce app development tailored to your unique needs. With our comprehensive vendor management system and cloud-based infrastructure, we ensure a seamless experience for both vendors and customers alike.
            </p>
            <div className="bg-[#F3E8FF] p-10 rounded-[40px] border border-purple-100">
              <h3 className="text-2xl font-bold text-[#7B2CBF] mb-6">Ready to transform your business? Contact us today for a free consultation!</h3>
              <Button variant="secondary" className="mx-auto px-12 py-4 text-lg">Request A Quote</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-24 px-4 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <img src="https://picsum.photos/seed/phone1/400/800" alt="App Mockup 1" className="w-1/2 rounded-[40px] shadow-xl" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/phone2/400/800" alt="App Mockup 2" className="w-1/2 rounded-[40px] shadow-xl mt-12" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] font-extrabold text-[#7B2CBF] mb-6 leading-tight">What is a Multi-Vendor Marketplace?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A multi-vendor marketplace is a dynamic online platform where multiple vendors can sell their products or services under one roof. Unlike traditional eCommerce stores, a multi-vendor platform allows for diverse product offerings and shared management responsibilities. Our marketplace software development services enable you to create an ecosystem that brings together vendors, buyers, and administrators in a cohesive, user-friendly environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 md:px-12 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] font-extrabold text-[#7B2CBF] mb-6 leading-tight">Why Choose a Multi-Vendor Model?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Opting for a multi-vendor marketplace offers several advantages, including scalability, a wide variety of products, and reduced operational costs. This model supports multi-currency transactions and multi-language interfaces, making it ideal for businesses targeting global audiences. Whether you're looking to develop a mobile app for eCommerce or an integrated online marketplace, our solutions are designed to meet your specific business objectives.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="https://picsum.photos/seed/phone3/500/900" alt="App Mockup 3" className="w-full max-w-md mx-auto rounded-[40px] shadow-2xl" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Features of Our Multi-Vendor eCommerce Solutions</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Vendor Management System", desc: "Our multi-vendor platform streamlines vendor onboarding, product management, and sales tracking through a robust vendor dashboard.", icon: <Users className="text-[#7B2CBF]" size={40} /> },
              { title: "Customizable User Interfaces", desc: "We provide custom eCommerce designs for websites and apps, delivering a seamless and intuitive user experience across all devices.", icon: <Settings className="text-[#7B2CBF]" size={40} /> },
              { title: "Advanced Search & Filter Options", desc: "Enhance user engagement with customizable search and filtering options, making it easy for customers to find exactly what they need.", icon: <Search className="text-[#7B2CBF]" size={40} /> },
              { title: "Secure Payment Gateways", desc: "Our multi-seller eCommerce app ensures secure, seamless transactions with multiple payment gateways and support for multi-currency payments.", icon: <ShieldCheck className="text-[#7B2CBF]" size={40} /> },
              { title: "Ratings & Reviews", desc: "Boost trust and credibility with our integrated ratings and reviews system, enabling customer feedback to guide vendors and inform future buyers.", icon: <Star className="text-[#7B2CBF]" size={40} /> },
              { title: "Analytics & Reporting for eCommerce", desc: "Boost trust and credibility with our integrated ratings and reviews system, enabling customer feedback to guide vendors and inform future buyers.", icon: <BarChart3 className="text-[#7B2CBF]" size={40} /> }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group"
              >
                <div className="mb-6 p-4 bg-purple-50 rounded-2xl group-hover:bg-[#7B2CBF] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section className="py-24 px-4 md:px-12 bg-[#7B2CBF]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading light>Business Models We Support</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "B2C (Business To Consumer)", desc: "Our multi-vendor marketplace solutions are perfect for businesses selling directly to consumers. The platform supports a wide range of products and services, making it easy to scale as your customer base grows.", icon: <ShoppingBag size={48} /> },
              { title: "B2B (Business To Business)", desc: "We also specialize in developing B2B multi-vendor platforms that connect businesses with suppliers and manufacturers. This model is ideal for companies looking to streamline their procurement processes.", icon: <Briefcase size={48} /> },
              { title: "C2C (Consumer To Consumer)", desc: "Our C2C marketplaces facilitate peer-to-peer transactions, providing a platform where individuals can buy and sell goods directly to each other. This model is popular for resale and second-hand marketplaces.", icon: <Users size={48} /> }
            ].map((model, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[40px] text-center flex flex-col items-center shadow-2xl"
              >
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-8 text-pink-500">
                  {model.icon}
                </div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">{model.title}</h3>
                <p className="text-gray-600 leading-relaxed">{model.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Our Development Process</SectionHeading>
          <div className="relative mt-20 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-right"
              >
                <h3 className="text-2xl font-bold text-[#7B2CBF] mb-2">Discovery and Planning</h3>
                <p className="text-gray-600">We collaborate to craft a tailored project roadmap, positioning your multi-vendor marketplace for success through market research and strategic planning.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-right"
              >
                <h3 className="text-2xl font-bold text-[#7B2CBF] mb-2">Design and Development</h3>
                <p className="text-gray-600">We design and develop a secure, scalable eCommerce platform with custom features like vendor dashboards, mobile app integration, and cloud-based solutions for seamless user experiences.</p>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/3 flex justify-center">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="https://picsum.photos/seed/process/400/800" alt="Process Mockup" className="w-64 rounded-[40px] shadow-2xl" referrerPolicy="no-referrer" />
              </motion.div>
            </div>

            <div className="flex-1 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-[#7B2CBF] mb-2">Testing and Launch</h3>
                <p className="text-gray-600">We rigorously test the platform for performance and security, providing full support to ensure a seamless transition from development to launch.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-[#7B2CBF] mb-2">Post-Launch Support</h3>
                <p className="text-gray-600">We provide ongoing maintenance, updates, and scaling options, ensuring your marketplace operates at peak performance while supporting feature additions and regional expansions.</p>
              </motion.div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button variant="secondary" className="mx-auto px-12 py-4">Start Your Multi-Vendor Marketplace Today!</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-12 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-12 bg-white p-8 rounded-[40px] shadow-sm">
            <FAQItem 
              question="What is a multi-vendor eCommerce app?" 
              answer="A multi-vendor eCommerce app is a platform where multiple independent sellers can list and sell their products. The platform owner manages the overall marketplace, while vendors handle their own inventory and orders." 
            />
            <FAQItem 
              question="What are the key features of a multi-vendor eCommerce app?" 
              answer="Key features include vendor dashboards, product management, order tracking, commission management, secure payments, and customer reviews." 
            />
            <FAQItem 
              question="How long does it take to develop a multi-vendor eCommerce app?" 
              answer="Development time varies based on complexity, but typically ranges from 3 to 6 months for a fully functional, custom solution." 
            />
            <FAQItem 
              question="Can I integrate third-party payment gateways into the app?" 
              answer="Yes, we support integration with all major payment gateways like Stripe, PayPal, Razorpay, and more to ensure secure transactions." 
            />
            <FAQItem 
              question="What kind of support and maintenance services do you offer after app launch?" 
              answer="We offer comprehensive post-launch support including bug fixes, performance optimization, security updates, and feature enhancements." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/919390683154" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" referrerPolicy="no-referrer" />
      </a>
    </div>
  );
}
