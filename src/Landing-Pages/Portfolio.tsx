import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
} from 'lucide-react';

// --- Constants & Data ---

const PRIMARY_COLOR = "#7B2CBF"; // As requested in prompt

const PORTFOLIO_CATEGORIES = [
  "All", "Ecommerce", "CRM", "Online Services", "Ed-tech", 
  "Retail Management", "Real Estate", "Transport Management", 
  "Legal", "Health Care", "Social Media", "Utility"
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "On-Demand Home Services Mobile App Development",
    category: "Online Services",
    tags: "UX, UI, Website, Android and iOS",
    image: "https://picsum.photos/seed/home-service/600/400"
  },
  {
    id: 2,
    title: "Seamlessly Plan Events and Send Gifts with Our All-in-One App Development",
    category: "Online Services",
    tags: "UX, UI, Website, Android and iOS",
    image: "https://picsum.photos/seed/events/600/400"
  },
  {
    id: 3,
    title: "Hyper-Local Grocery Shopping App",
    category: "Ecommerce",
    tags: "UX, UI, Android and iOS",
    image: "https://picsum.photos/seed/grocery/600/400"
  },
  {
    id: 4,
    title: "Custom CRM Software Development Company",
    category: "CRM",
    tags: "UX, UI, Website, Android and iOS",
    image: "https://picsum.photos/seed/crm/600/400"
  },
  {
    id: 5,
    title: "On-Demand Chef Management Web Development",
    category: "Online Services",
    tags: "UX, UI, Website",
    image: "https://picsum.photos/seed/chef/600/400"
  },
  {
    id: 6,
    title: "Multi-Vendor Ecommerce Mobile App Development",
    category: "Ecommerce",
    tags: "UX, UI, Android and iOS",
    image: "https://picsum.photos/seed/multivendor/600/400"
  },
  {
    id: 7,
    title: "Discover the Finest Rice, Anytime, Anywhere",
    category: "Ecommerce",
    tags: "UX, UI, Website, Android, iOS",
    image: "https://picsum.photos/seed/rice/600/400"
  },
  {
    id: 8,
    title: "Empowering Early Literacy with Engaging Digital Learning Tools",
    category: "Ed-tech",
    tags: "UX, UI, Website, Android and iOS",
    image: "https://picsum.photos/seed/literacy/600/400"
  },
  {
    id: 9,
    title: "Streamlined Mobile App Development for On-Demand Services",
    category: "Online Services",
    tags: "UX, UI, Android and iOS",
    image: "https://picsum.photos/seed/ondemand/600/400"
  }
];

const FAQS = [
  {
    question: "What does mTouch Labs portfolio include?",
    answer: "The portfolio showcases a wide range of digital products created by mTouch Labs, including mobile apps, business websites, e-commerce platforms, SaaS products, and custom software solutions across multiple industries."
  },
  {
    question: "Can I request a project similar to something in mTouch Labs portfolio?",
    answer: "Yes, we specialize in custom solutions. If you see something you like, we can adapt and build a tailored version for your specific needs."
  },
  {
    question: "Do you work on both mobile and web development projects?",
    answer: "Absolutely. Our team is proficient in both mobile (Android/iOS) and web technologies to provide comprehensive digital solutions."
  },
  {
    question: "How can I get a quote for a project like the ones in your portfolio?",
    answer: "You can click on the 'Request Quote' button or contact us via email/phone. We'll discuss your requirements and provide a detailed proposal."
  },
  {
    question: "Are all projects in the portfolio custom-built for clients?",
    answer: "Yes, every project we undertake is custom-built from the ground up to meet the unique business objectives of our clients."
  }
];

const Hero = () => (
  <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[#050A18]">
      <img 
        src="https://picsum.photos/seed/office-dark/1920/1080?blur=5" 
        className="w-full h-full object-cover opacity-30"
        alt="Hero Background"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050A18]"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-white mb-6"
      >
        Our <span className="text-yellow-500">Portfolio</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-gray-300"
      >
        See how we transform ideas into powerful digital experiences.
      </motion.p>
    </div>
  </section>
);

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat 
                ? "bg-blue-500 text-white border-blue-500" 
                : "bg-gray-100 text-gray-600 border-transparent hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <p className="text-blue-500 text-xs font-bold uppercase mb-2">{item.tags}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">
                    {item.title}
                  </h3>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const HireSection = () => (
  <section className="bg-[#F0F7FF] py-20 px-4 md:px-12 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Hire world-class Web and Mobile App development team for your Project
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Contact our Web and Mobile App Development Company if you have any app ideas. We have a professional Android and iOS App Development Team who develop clients' projects excellently and deliver the project on a timeline.
        </p>
        <button 
          className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-lg"
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          Start Your Project <ArrowRight size={20} />
        </button>
      </div>
      <div className="flex-1 relative">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://picsum.photos/seed/team-work/800/600" 
            alt="Team Working" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Your Questions <span className="text-blue-500">Answered</span> Clearly
        </h2>
        <p className="text-center text-gray-600 mb-12 font-medium">
          Everything you need to know about Mtouchlabs
        </p>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-lg text-gray-800"
              >
                {faq.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
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

export default function Portfolio() {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen font-['Inter'] selection:bg-purple-200 selection:text-purple-900">
      <main>
        <Hero />
        <PortfolioSection />
        <HireSection />
        <FAQSection />
      </main>
    </div>
  );
}
