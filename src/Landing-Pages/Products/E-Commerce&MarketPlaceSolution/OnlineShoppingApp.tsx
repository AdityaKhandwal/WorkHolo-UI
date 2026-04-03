import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChevronDown,
  Phone,
  Mail,
  Plus,
  Minus,
  Smartphone,
  ShieldCheck,
  Heart,
  Users,
  Globe,
  MessageCircle,
  Layout,
  Database,
  CheckCircle2,
} from "lucide-react";

// --- Components ---

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-[#0b0034] relative overflow-hidden p-5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-light-blue -skew-x-12 transform origin-top-right translate-x-32 -z-10 hidden lg:block"></div>

      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#EFEFEF] leading-[1.1] mb-6">
            One-Stop Solution for{" "}
            <span className="text-primary">Online Shopping</span> Web & Mobile
            App Development
          </h1>
          <p className="text-lg text-[#bdbbbb] mb-8 leading-relaxed max-w-xl">
            Explore the future of online shopping with WorkHolo labs. We're more
            than just an app development firm; we're your strategic partner for
            developing engaging, user-centric shopping experiences.
          </p>
          <button className="bg-purple-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-900 transition-all shadow-lg">
            View Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000"
            alt="Shopping App"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">100% Secure</p>
                <p className="text-sm text-gray-500">Payment Gateways</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ScrollingBanner = () => {
  const items = [
    "Online Shopping",
    "e commerce",
    "Fashion",
    "Online shopping",
    "Clothing",
    "Sale",
    "Online shopping",
  ];

  return (
    <div className="bg-primary p-4 -rotate-2 transform scale-105 overflow-hidden whitespace-nowrap z-20 relative">
      <div className="flex animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center mx-8">
            <span className="text-white text-2xl font-bold uppercase tracking-wider">
              {item}
            </span>
            <span className="text-white/50 mx-8 text-3xl">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const KeyFeatures = () => {
  const features = [
    {
      title: "User-Friendly Interface",
      icon: <Smartphone className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Secure Payment Options",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Wishlists & Saved Items",
      icon: <Heart className="w-8 h-8" />,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Community & Social Integration",
      icon: <Users className="w-8 h-8" />,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  return (
    <section className="section-padding bg-white p-5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1556740734-7f95834d0ff9?auto=format&fit=crop&q=80&w=1000"
              alt="Features"
              className="rounded-3xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Key Features for Seamless Functionality
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${feature.color}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OnDemandSection = () => {
  return (
    <section className="section-padding bg-light-blue p-5">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1000"
            alt="Mobile App"
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            On - Demand Shopping App Development
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            In today's rapidly changing digital landscape, online shopping
            applications are essential tools for both businesses and consumers.
            These apps have transformed the retail business by offering a
            seamless, convenient, and entertaining purchasing experience that
            connects physical locations and online platforms.
          </p>
          <p className="text-gray-600 leading-relaxed">
            As technology advances, online shopping apps will become more
            complex. Innovations such as AI, AR, and virtual reality will
            further enhance the shopping experience, making it more interactive
            and personalised.
          </p>
        </div>
      </div>
    </section>
  );
};

const AppScreens = () => {
  const screens = [
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1523206489230-c012c5458c15?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1533228891704-7fce9a093d7b?auto=format&fit=crop&q=80&w=400",
  ];

  return (
    <section className="section-padding bg-primary/10 p-5">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          App Screens
        </h2>
        <p className="text-gray-600 mb-12">
          Designing Intuitive and Engaging App Screens for a Superior User
          Experience
        </p>

        <div className="flex flex-nowrap overflow-x-auto gap-6 pb-8 no-scrollbar">
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex-none w-64 h-[500px] rounded-[40px] overflow-hidden border-8 border-black shadow-2xl"
            >
              <img
                src={screen}
                alt={`Screen ${i + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ApplicationFeatures = () => {
  const [activeTab, setActiveTab] = useState("customer");

  const tabs = [
    { id: "customer", name: "Customer Panel" },
    { id: "admin", name: "Admin Panel" },
    { id: "delivery", name: "Delivery Panel" },
  ];

  return (
    <section className="section-padding bg-white px-5">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Application Features
        </h2>
        <p className="text-gray-600 mb-12">
          Powerful and User-Centric Features to Enhance Your App's Functionality
        </p>

        <div className="max-w-4xl mx-auto bg-light-blue p-2 rounded-full flex mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 rounded-full font-bold transition-all ${activeTab === tab.id ? "bg-orange-400 text-white shadow-lg" : "text-gray-600 hover:bg-white/50"}`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="bg-light-blue rounded-[40px] p-12 min-h-[400px] flex items-center justify-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 capitalize">
                {activeTab} Features
              </h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4, 5].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <CheckCircle2 size={14} />
                    </div>
                    Advanced {activeTab} dashboard and management tools.
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/50 rounded-3xl p-8 flex items-center justify-center">
              <div className="w-full h-48 bg-gray-200 rounded-2xl animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Custom Store Design",
      desc: "Unique App Designs Aligned with Your Brand",
      icon: <Layout />,
    },
    {
      title: "Mobile App Development",
      desc: "Advanced iOS & Android Shopping Apps",
      icon: <Smartphone />,
    },
    {
      title: "Payment Gateway Setup",
      desc: "Secure & Seamless Payment Processing",
      icon: <ShieldCheck />,
    },
    {
      title: "UX/UI Design",
      desc: "Intuitive Interfaces for Smooth Shopping",
      icon: <Layout />,
    },
    {
      title: "Multi-Vendor Marketplace",
      desc: "Easy Management for Multiple Sellers",
      icon: <Users />,
    },
    {
      title: "Order Tracking",
      desc: "Real-Time Order & Delivery Updates",
      icon: <Globe />,
    },
    {
      title: "Product Catalog System",
      desc: "Simple Tools for Product Listings & Updates",
      icon: <Database />,
    },
    {
      title: "Customer Support Chat",
      desc: "AI Chatbots & Integrated Support Systems",
      icon: <MessageCircle />,
    },
  ];

  return (
    <section className="section-padding bg-primary/5 p-5">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Online Shopping App Development Services
        </h2>
        <p className="text-gray-600 mb-12">
          Comprehensive Services for Seamless Online Shopping App Development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-primary/10 hover:border-primary transition-all group"
            >
              <div className="w-24 h-24 bg-black rounded-3xl mx-auto mb-6 flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                {React.cloneElement(
                  service.icon as React.ReactElement<{ size?: number }>,
                  { size: 40 },
                )}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  const techs = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "AWS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
  ];

  return (
    <section className="section-padding bg-white p-5">
      <div className="container-custom text-center">
        <div className="bg-light-blue rounded-[50px] p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology We Use
          </h2>
          <p className="text-gray-600 mb-16">
            Reliable and Advanced Technologies We Use for App Development
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {techs.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-center"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does it take to develop an online shopping app?",
      a: "Development time varies depending on complexity, but typically ranges from 3 to 6 months for a full-featured application.",
    },
    {
      q: "Can I customize the online shopping app to match my brand?",
      a: "Yes, we provide fully custom designs that align perfectly with your brand identity, colors, and user experience requirements.",
    },
    {
      q: "Will my app be compatible with both iOS and Android devices?",
      a: "Absolutely. We use cross-platform technologies like Flutter or native development to ensure your app works flawlessly on both platforms.",
    },
    {
      q: "Can the app integrate with my existing e-commerce platform?",
      a: "Yes, we can integrate with popular platforms like Shopify, Magento, WooCommerce, or your custom-built backend via APIs.",
    },
    {
      q: "Do you provide post-launch support for the online shopping app?",
      a: "Yes, we offer comprehensive support and maintenance packages to ensure your app stays updated and performs optimally.",
    },
  ];

  return (
    <section className="section-padding bg-white p-5">
      <div className="container-custom max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          FAQ's
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full py-6 flex items-center justify-between text-left font-bold text-lg transition-colors ${openIndex === i ? "text-primary" : "text-gray-900"}`}
              >
                {faq.q}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? "bg-primary text-white rotate-180" : "bg-gray-100 text-gray-500"}`}
                >
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
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

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919390683154"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform group"
  >
    <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
    <MessageCircle size={32} />
    <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      Chat with us
    </span>
  </a>
);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-28 right-8 z-50 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-xl transition-all ${visible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
    >
      <ChevronDown className="rotate-180" size={24} />
    </button>
  );
};

export default function OnlineShoppingApp() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Info Bar */}
      <div className="bg-black text-white py-2 border-b border-white/10 text-[10px] md:text-xs">
        <div className="container-custom flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@WorkHololabs.com"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Mail size={12} /> contact@WorkHololabs.com
            </a>
            <a
              href="tel:+919390683154"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Phone size={12} /> +91 9390683154
            </a>
            <a
              href="tel:+15512220070"
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              <Phone size={12} /> +1 (551) 222-0070
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-yellow-500 font-bold">NASSCOM</span>
            <span>SME Inspire Awards 2026 🏆</span>
            <div className="hidden md:flex gap-4 text-gray-400">
              <span>Hyderabad</span>
              <span>|</span>
              <span>Bangalore</span>
              <span>|</span>
              <span>USA</span>
            </div>
          </div>
        </div>
      </div>

      <main>
        <Hero />
        <ScrollingBanner />
        <KeyFeatures />
        <OnDemandSection />
        <AppScreens />
        <ApplicationFeatures />
        <Services />
        <Technology />
        <FAQ />
      </main>
      <WhatsAppButton />
      <ScrollToTop />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </div>
  );
}
