import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Plus, 
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

// --- Components ---


const Hero = () => {
  return (
    <section className="pt-40 pb-20 px-4 md:px-12 bg-[#140036] overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[48px] md:text-[64px] text-[#EFEFEF] font-extrabold leading-[1.1] mb-6">
            Grow Your <span className="text-[#7B2CBF]">Food Delivery</span> with Web & App Solutions
          </h1>
          <button className="bg-[#7B2CBF] hover:bg-[#430876] text-white px-10 py-4 rounded-lg font-bold text-[18px] transition-all shadow-lg shadow-orange-200">
            View Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Mockup Placeholder */}
          <div className="relative z-10 flex justify-center">
            <div className="w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden relative">
              <img src="https://picsum.photos/seed/app1/280/580" alt="App Screen" className="w-full h-full object-cover" />
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-dashed border-gray-200 rounded-full -z-0"></div>
          <div className="absolute top-10 right-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
            <img src="https://picsum.photos/seed/person1/200/200" alt="Person" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const IntroSection = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#FDF8F1]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/foodapp/800/600" alt="Food App UI" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-[40px] font-bold text-[#1A1A1A] mb-6 leading-tight">
            On-Demand Food Delivery App Development
          </h2>
          <p className="text-[#4A4A4A] text-[18px] leading-relaxed mb-6">
            <span className="text-[#0096FF] font-semibold">Food delivery app development services</span> have transformed the way people order food and get delivered. These applications have become an essential part due to the growing desire for speed and convenience.
          </p>
          <p className="text-[#4A4A4A] text-[18px] leading-relaxed">
            When it comes to designing a food delivery app, there are many crucial services that assist businesses in building a successful platform. From creating <span className="text-[#0096FF] font-semibold">user-friendly interfaces</span> to integrating secure payment methods, app development services are critical to providing a seamless experience for both customers and restaurants.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const OnlineApplications = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[40px] font-bold text-[#1A1A1A] mb-8">Online Food Delivery Applications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <p className="text-[#4A4A4A] text-[18px] leading-relaxed">
              At WorkHolo Labs, we specialise in creating unique food delivery apps that transform how restaurants and food businesses interact with their customers. Our expertise in <span className="text-[#0096FF] font-semibold underline">cross-platform app development</span> and deep understanding of the food and beverage industry allow us to create solutions that are not only functional but also highly engaging and user-friendly.
            </p>
            <p className="text-[#4A4A4A] text-[18px] leading-relaxed">
              Our Food delivery app solutions are intended to create a seamless experience for both customers and restaurant partners. From user-friendly interfaces to secure payment gateways, our apps are designed to improve every aspect of the food delivery experience.
            </p>
          </div>
        </motion.div>

        <div className="mt-20">
          <h2 className="text-[40px] font-bold text-[#1A1A1A] text-center mb-4">Food Delivery App Development Services</h2>
          <p className="text-[#4A4A4A] text-center mb-16 text-[18px]">Key Services for Food Delivery App Development</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Custom App Development', desc: 'Create a custom food delivery app from the ground up.', icon: '📱', color: 'blue' },
              { title: 'Multi-Vendor Marketplace', desc: 'Create a platform that links patrons and several eateries.', icon: '🏢', color: 'orange' },
              { title: 'Restaurant App Solutions', desc: 'Custom Programs for Restaurant Online Orders.', icon: '🍕', color: 'red' },
              { title: 'Delivery Partner App', desc: 'Delivery Acceptance & Tracking Software for Drivers.', icon: '🚚', color: 'green' },
              { title: 'Cloud Kitchen App', desc: 'Meal Plan Apps with Automated Food Delivery Service.', icon: '☁️', color: 'purple' },
              { title: 'Subscription-Based Delivery', desc: 'Offer meal plan apps with recurring food deliveries.', icon: '📅', color: 'pink' },
              { title: 'White-Label Solutions', desc: 'Offer a pre-made, adaptable app for meal delivery.', icon: '🏷️', color: 'cyan' },
              { title: 'API & Payment Integration', desc: 'Incorporate third-party APIs, GPS, and payment gateways.', icon: '💳', color: 'yellow' },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-4">{service.title}</h3>
                <p className="text-[#4A4A4A] text-[15px] leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AppScreens = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#2a036e]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[48px] font-bold text-white mb-4">App Screens</h2>
          <p className="text-white/90 text-[20px] mb-16">App Screen Design and User Interface</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-[9/19] bg-white/20 rounded-3xl backdrop-blur-md border border-white/30 overflow-hidden shadow-2xl">
                <img src={`https://picsum.photos/seed/screen${i}/300/600`} alt={`Screen ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const [activeTab, setActiveTab] = useState('Customer Panel');

  const tabs = ['Customer Panel', 'Admin Panel', 'Delivery Partner Panel'];
  const features = [
    'Dashboard', 'My Orders', 'My Address Book',
    'Quick Product Search', 'Order Status Tracking', 'Sign up / Login',
    'My Favourites', 'Delivery Time Slots', 'Product Variant Selection',
    'Apply Coupon', 'Order Alerts / History', 'Order Cancellation',
    'Google Location'
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-[#FDF8F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-[#1A1A1A] mb-4">Application Features</h2>
          <p className="text-[#4A4A4A] text-[18px]">Build a customizable, multi-featured grocery platform with us!</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-bold text-[16px] transition-all border-2 ${
                activeTab === tab 
                ? 'bg-[#7B2CBF] border-[#7B2CBF] text-white shadow-lg' 
                : 'bg-white border-gray-200 text-[#4A4A4A] hover:border-[#7B2CBF]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center space-x-4 group"
            >
              <div className="bg-[#7B2CBF] p-1 rounded-full text-white">
                <CheckCircle2 size={20} />
              </div>
              <span className="text-[18px] font-medium text-[#1A1A1A] group-hover:text-[#7B2CBF] transition-colors">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-[40px] font-bold text-[#1A1A1A] mb-4">Technology We Use</h2>
        <p className="text-[#4A4A4A] text-[18px] mb-16">Advanced Tools & Frameworks for Food Delivery App Development</p>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="aspect-square bg-[#FDF8F1] rounded-2xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <img src={`https://picsum.photos/seed/tech${i}/100/100`} alt="Tech" className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(4);

  const faqs = [
    "What features should a food delivery app have",
    "How long does it take to develop a food delivery app",
    "What technologies are used in developing a food delivery app",
    "Can you integrate third-party services into the app",
    "How do you ensure the security of the app"
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[48px] font-bold text-[#1A1A1A] text-center mb-16">FAQ's</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left bg-[#FDF8F1] hover:bg-[#f7f0e6] transition-colors"
              >
                <span className="text-[18px] font-bold text-[#1A1A1A]">{faq}</span>
                <div className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-45' : ''}`}>
                  <Plus size={24} className="text-[#1A1A1A]" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="p-6 text-[#4A4A4A] text-[16px] leading-relaxed">
                      We implement multi-layered security protocols including data encryption, secure API endpoints, OAuth authentication, and regular security audits to ensure your app and user data are fully protected.
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

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[48px] font-bold text-[#1A1A1A] mb-4">Get Your Custom Food Delivery App Now</h2>
        <p className="text-[#4A4A4A] text-[20px] mb-12">Drive your business forward with our customizable Food Delivery App Development Solutions</p>
        <button className="bg-#7B2CBF[] hover:bg-[#4a0785] text-white px-12 py-5 rounded-full font-bold text-[20px] transition-all flex items-center mx-auto shadow-xl shadow-orange-100">
          Let's Bring Your Idea to Life <ArrowRight size={24} className="ml-3" />
        </button>
      </div>
    </section>
  );
};


export default function FoodDeliveryApp() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif] selection:bg-[#0096FF] selection:text-white">
      <main>
        <Hero />
        <IntroSection />
        <OnlineApplications />
        <AppScreens />
        <Features />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
