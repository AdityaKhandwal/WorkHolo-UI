import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Globe,
  ArrowRight,
  Plus,
  CheckCircle2,
  Smartphone,
  Palette,
  Truck,
  CreditCard,
  Users,
  Gift,
  Settings,
} from "lucide-react";

// --- Components ---

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "blue";
  [key: string]: unknown;
}) => {
  const variants = {
    primary: "bg-[#7B2CBF] text-white hover:bg-[#5a189a]",
    secondary: "bg-[#FF8C42] text-white hover:bg-[#e67e22]",
    outline:
      "border-2 border-[#7B2CBF] text-[#7B2CBF] hover:bg-[#7B2CBF] hover:text-white",
    blue: "bg-[#0091FF] text-white hover:bg-[#0077e6]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
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
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => (
  <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-600 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800 md:text-lg">
          {question}
        </span>
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
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-5 pb-5 text-gray-600 leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function GroceryDeliveryApp() {
  return (
    <div className="min-h-screen bg-white p-3">
      {/* --- Top Bar --- */}

      {/* --- Header --- */}

      {/* --- Hero Section --- */}
      <section className="relative bg-[#F0FDF4] pt-20 pb-32 overflow-hidden">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Grocery Delivery <br />
              <span className="text-[#7B2CBF]">App Development</span>
            </h1>
            <div className="bg-white inline-flex items-center gap-3 px-6 py-3 rounded-full shadow-sm mb-8">
              <div className="bg-green-500 p-1 rounded-full">
                <CheckCircle2 size={18} className="text-white" />
              </div>
              <span className="font-semibold text-gray-800">View Demo</span>
            </div>
            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              Drive your business forward with our customizable Grocery Delivery
              App Development Solutions. We build high-performance apps that
              scale with your business.
            </p>
            <Button variant="secondary" className="text-lg px-8 py-4">
              Let's Bring Your Idea to Life <ArrowRight size={20} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://picsum.photos/seed/delivery/800/800"
                alt="Delivery Man"
                className="w-full max-w-lg mx-auto rounded-3xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-10 right-0 md:right-10 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100"
            >
              <div className="bg-red-100 p-3 rounded-full">
                <img
                  src="https://picsum.photos/seed/clock/40/40"
                  alt="Clock"
                  className="w-8 h-8"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Delivery in</p>
                <p className="text-xs text-gray-500">10 mins</p>
              </div>
            </motion.div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#7B2CBF]/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* --- Key Features --- */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Key Features for Seamless Functionality"
            subtitle="Our grocery delivery apps are packed with features that ensure a smooth experience for both customers and merchants."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="text-blue-500" />,
                title: "Scheduled Delivery",
                desc: "Allow users to pick their preferred time slots.",
              },
              {
                icon: <Smartphone className="text-purple-500" />,
                title: "Real-Time Order Tracking",
                desc: "Live updates from store to doorstep.",
              },
              {
                icon: <Settings className="text-orange-500" />,
                title: "Product Search & Filters",
                desc: "Advanced search for quick shopping.",
              },
              {
                icon: <Truck className="text-green-500" />,
                title: "Order Customization",
                desc: "Easy modifications before checkout.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#F0FDF4] hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- On-Demand Section --- */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              On-Demand Grocery Delivery <br />
              <span className="text-[#7B2CBF]">App Development</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Grocery delivery apps provide a practical way for time-pressed
              people to save money without sacrificing quality in today's hectic
              world. We anticipate more developments in this area as technology
              develops, which will improve the shopping experience for both
              customers and merchants.
            </p>
            <Button variant="blue" className="px-10">
              Request Quote <ArrowRight size={18} />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://picsum.photos/seed/app1/600/800"
              alt="App Mockup"
              className="w-full max-w-md mx-auto rounded-[3rem] shadow-2xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* --- Customizable Section --- */}
      <section className="py-24 bg-[#F0FDF4]">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://picsum.photos/seed/scooter/800/600"
              alt="Customizable Solutions"
              className="w-full rounded-3xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Our apps are fully <br />
              <span className="text-green-600">
                customizable to fit your brand,
              </span>{" "}
              <br />
              inventory, and business model.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We don't believe in one-size-fits-all. Every grocery business has
              its unique challenges and goals. Our expert team works closely
              with you to tailor every pixel and feature to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Online Grocery Section --- */}
      <section className="py-24 bg-white">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Online Grocery Delivery Applications
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to mTouch Labs, your trusted partner for{" "}
              <span className="text-blue-600 font-semibold">
                grocery delivery app development
              </span>
              . In today's fast-paced world, having a reliable and user-friendly
              app is essential for grocery businesses looking to stay
              competitive.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From{" "}
              <span className="text-blue-600 font-semibold">
                user-friendly interfaces
              </span>{" "}
              to seamless payment integration, we ensure that your app provides
              a seamless shopping experience for your customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://picsum.photos/seed/app2/600/800"
              alt="Product List Mockup"
              className="w-full max-w-md mx-auto rounded-[3rem] shadow-2xl border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-24 bg-[#F0FDF4]">
        <div className="container-custom">
          <SectionHeading
            title="Grocery App Development Services"
            subtitle="End-to-End Grocery Delivery App Development Solutions"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Smartphone />,
                title: "Custom App Development",
                desc: "Custom Grocery Delivery App with Unique Features.",
              },
              {
                icon: <Globe />,
                title: "Multi-Platform Support",
                desc: "Web, iOS & Android Apps to Expand Your Reach.",
              },
              {
                icon: <Palette />,
                title: "UI/UX Design",
                desc: "Make the shopping experience simple and interesting.",
              },
              {
                icon: <Truck />,
                title: "Logistics & Delivery",
                desc: "Turn on real-time tracking to ensure smooth delivery.",
              },
              {
                icon: <CreditCard />,
                title: "Payment Gateway Setup",
                desc: "Provide a variety of safe payment methods.",
              },
              {
                icon: <Users />,
                title: "Admin & Vendor Panel",
                desc: "Easily manage customers, orders, and inventory.",
              },
              {
                icon: <Gift />,
                title: "Subscription & Loyalty",
                desc: "Put in place discounts, prizes, and subscriptions.",
              },
              {
                icon: <Settings />,
                title: "Maintenance & Support",
                desc: "Keep Your System Smooth with Updates & Maintenance.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="bg-gray-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#7B2CBF] group-hover:text-white transition-colors">
                  {React.cloneElement(
                    service.icon as React.ReactElement<{ size?: number }>,
                    { size: 32 },
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- App Screens --- */}
      <section className="py-24 bg-green-600 text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">App Screens</h2>
            <p className="text-xl opacity-90">
              Intuitive App Screens for Seamless User Experience.
            </p>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-72 h-[500px] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-800"
                whileHover={{ y: -10 }}
              >
                <img
                  src={`https://picsum.photos/seed/screen${i}/300/600`}
                  alt={`Screen ${i}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Technology Partners --- */}
      <section className="py-24 bg-[#F0FDF4]">
        <div className="container-custom">
          <SectionHeading
            title="Technology Partners"
            subtitle="Collaborating with Leading Technology Providers"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Bootstrap",
              "PHP",
              "Laravel",
              "Flutter",
              "Firebase",
              "MySQL",
              "Crashlytics",
              "Google Analytics",
              "AWS",
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow"
              >
                <img
                  src={`https://picsum.photos/seed/${tech}/60/60`}
                  alt={tech}
                  className="h-12 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-bold text-gray-700 text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading title="FAQ's" />

          <div className="space-y-2">
            <FAQItem
              question="What are the key features to include in a grocery delivery app?"
              answer="Key features include real-time tracking, secure payment gateways, push notifications, easy search and filters, and a user-friendly admin panel."
            />
            <FAQItem
              question="Do I need to partner with local grocery stores for my app?"
              answer="Yes, partnering with local stores is essential for a marketplace model. Alternatively, you can manage your own inventory if you have a warehouse."
            />
            <FAQItem
              question="Do I need to develop separate apps for iOS and Android platforms?"
              answer="We recommend cross-platform development using Flutter or React Native to save costs while maintaining high performance on both platforms."
            />
            <FAQItem
              question="Is it possible to integrate third-party services into my app?"
              answer="Absolutely. We can integrate payment gateways, SMS services, map APIs, and analytics tools seamlessly."
            />
            <FAQItem
              question="What are some emerging trends in grocery delivery app development?"
              answer="AI-driven recommendations, voice search, dark store models, and hyper-local delivery are currently leading the trends."
            />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl"
        >
          <img
            src="https://picsum.photos/seed/whatsapp/30/30"
            alt="WhatsApp"
            className="w-8 h-8"
            referrerPolicy="no-referrer"
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl"
        >
          <ArrowRight className="-rotate-90" />
        </motion.button>
      </div>
    </div>
  );
}
