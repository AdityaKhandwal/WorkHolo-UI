import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Phone,
  ChevronDown,
  Search,
  Calendar,
  User,
  CreditCard,
  Brain,
  Tag,
  MessageSquare,
  Globe,
  Plus,
  Minus,
} from "lucide-react";

// --- Components ---

const Hero = () => (
  <section className="relative min-h-[600px] flex items-center overflow-hidden bg-black">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="https://picsum.photos/seed/hotel-hero/1920/1080?blur=5"
        alt="Hero Background"
        className="w-full h-full object-cover opacity-40"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
    </div>

    <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
          End-to-End <br />
          <span className="text-[#4D96FF]">Hotel Booking</span> <br />
          Platform Development
        </h1>
        <button className="bg-[#4D96FF] hover:bg-[#3b82f6] text-white px-8 py-3 rounded-lg font-bold text-lg transition-all shadow-lg shadow-blue-500/20">
          View Demo
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:block"
      >
        <div className="flex gap-4 items-end">
          <img
            src="https://picsum.photos/seed/h1/300/500"
            alt="Hotel 1"
            className="w-1/3 rounded-2xl shadow-2xl transform -rotate-3"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://picsum.photos/seed/h2/300/600"
            alt="Hotel 2"
            className="w-1/3 rounded-2xl shadow-2xl z-10 scale-110"
            referrerPolicy="no-referrer"
          />
          <img
            src="https://picsum.photos/seed/h3/300/500"
            alt="Hotel 3"
            className="w-1/3 rounded-2xl shadow-2xl transform rotate-3"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const KeyFeatures = () => (
  <section className="py-20 bg-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-4">
          Key Features for Seamless Functionality
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/app-screen/300/600"
              alt="App UI"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -z-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl -top-10 -left-10"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Best Offers & Discounts",
              icon: <Tag className="text-primary" />,
            },
            {
              title: "Seamless Payments",
              icon: <CreditCard className="text-primary" />,
            },
            {
              title: "Reviewing & Rating",
              icon: <User className="text-primary" />,
            },
            { title: "SOS Alert", icon: <Phone className="text-primary" /> },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AgencySection = () => (
  <section className="py-20 bg-[#f8fafc] overflow-hidden">
    <div className="container-custom relative">
      {/* Dotted pattern */}
      <div className="absolute -left-20 top-0 grid grid-cols-6 gap-4 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0a0a0a] mb-8">
          Hotel Booking App Development Agency
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          Welcome to WorkHolo labs, your premier destination for hotel booking app
          development solutions. We specialise in developing apps that
          revolutionise the way travellers book their accommodations. We craft
          bespoke apps that cater to the unique needs of your business and
          delight your guests. Whether you're a boutique hotel or a large chain,
          we have the expertise to elevate your brand and increase your
          bookings.
        </p>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-20 bg-white">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0a0a0a] mb-4">
          Hotel Booking App Development Services
        </h2>
        <p className="text-gray-500 text-lg">
          Essential Services for a Feature-Rich Hotel Booking App
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Hotel Listings & Search",
            desc: "Filter Hotels by Location, Price, Reviews & Amenities.",
            icon: <Search />,
          },
          {
            title: "Room Booking & Reservations",
            desc: "Instant Room Booking with Secure Pay & Live Availability.",
            icon: <Calendar />,
          },
          {
            title: "User Profiles & Reviews",
            desc: "Permit users to read reviews, rate, and create profiles.",
            icon: <User />,
          },
          {
            title: "Multiple Payment Options",
            desc: "Accept Wallets, UPI, Net Banking & Credit/Debit Cards.",
            icon: <CreditCard />,
          },
          {
            title: "AI-Based Recommendations",
            desc: "Hotel Suggestions Based on Bookings & User Preferences.",
            icon: <Brain />,
          },
          {
            title: "Deals & Discounts",
            desc: "Exclusive Discounts, Coupons & Perks for Members.",
            icon: <Tag />,
          },
          {
            title: "Customer Support & Chatbot",
            desc: "24/7 Support via Phone, Email & Chat for Assistance.",
            icon: <MessageSquare />,
          },
          {
            title: "Multi-Language Support",
            desc: "Multi-Language & Currency Support for Global Travelers.",
            icon: <Globe />,
          },
        ].map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              {React.cloneElement(
                service.icon as React.ReactElement<{ size?: number }>,
                { size: 32 },
              )}
            </div>
            <h3 className="font-bold text-xl mb-3">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AppScreens = () => (
  <section className="py-24 bg-[#4D96FF] text-white text-center">
    <div className="container-custom">
      <h2 className="text-5xl font-bold mb-6">App Screens</h2>
      <p className="text-xl opacity-90">
        Key Screens for a Seamless Hotel Booking App Experience
      </p>
    </div>
  </section>
);

const TechnologySection = () => (
  <section className="py-20 bg-[#f8fafc]">
    <div className="container-custom">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0a0a0a] mb-4">
          Technology We Use
        </h2>
        <p className="text-gray-500 text-lg">
          Innovative Technologies We Utilize for Development
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-white rounded-2xl shadow-sm flex items-center justify-center p-6 hover:shadow-md transition-all"
          >
            <div className="w-full h-full bg-gray-100 rounded-lg animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is a hotel booking app?",
      a: "A hotel booking app is a digital platform that allows users to search, compare, and book hotel rooms and other accommodations directly from their mobile devices or computers.",
    },
    {
      q: "Can the app support multiple languages and currencies?",
      a: "Yes, our solutions are built to support global audiences with multi-language and multi-currency capabilities.",
    },
    {
      q: "Can I customize the app to match my hotel's branding?",
      a: "Absolutely. We provide fully bespoke development to ensure the app aligns perfectly with your brand identity.",
    },
    {
      q: "Can the app integrate with existing hotel management systems?",
      a: "Yes, we specialize in seamless integrations with various PMS and channel managers.",
    },
    {
      q: "How does the app handle seasonal pricing and promotions?",
      a: "The app includes a robust admin panel to manage dynamic pricing, seasonal offers, and promotional codes.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">FAQ's</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
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

// --- Main App ---

export default function HotelBookingApp() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <KeyFeatures />
        <AgencySection />
        <ServicesSection />
        <AppScreens />
        <TechnologySection />
        <FAQ />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <MessageSquare size={28} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 bg-[#4D96FF] text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <ChevronDown size={28} className="rotate-180" />
        </motion.button>
      </div>
    </div>
  );
}
