import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Plus,
  Minus,
} from 'lucide-react';

// --- Constants & Types ---

const PRIMARY_PURPLE = '#7B2CBF';

const services = [
  {
    title: "Custom E-Learning App",
    description: "Custom Solutions for Business Training & Education.",
    icon: "https://picsum.photos/seed/edu1/100/100"
  },
  {
    title: "Learning Management",
    description: "Seamless Integration with Learning Management Systems.",
    icon: "https://picsum.photos/seed/edu2/100/100"
  },
  {
    title: "Gamification Learning",
    description: "Engaging Features: Leaderboards, Rewards & Quizzes.",
    icon: "https://picsum.photos/seed/edu3/100/100"
  },
  {
    title: "Live Classes Streaming",
    description: "On-demand video courses and live virtual classrooms.",
    icon: "https://picsum.photos/seed/edu4/100/100"
  },
  {
    title: "AI-Powered Personalization",
    description: "Personalized Learning Based on Preferences & Progress.",
    icon: "https://picsum.photos/seed/edu5/100/100"
  },
  {
    title: "Multilingual Support",
    description: "Personalized UI & Content for International Students.",
    icon: "https://picsum.photos/seed/edu6/100/100"
  },
  {
    title: "Assessment & Certification",
    description: "E-Certifications, Skill Tests & Online Examinations.",
    icon: "https://picsum.photos/seed/edu7/100/100"
  },
  {
    title: "Cloud-Based Scalability",
    description: "Cloud-hosted, secure solutions for flawless operation.",
    icon: "https://picsum.photos/seed/edu8/100/100"
  }
];

const techStack = [
  { name: "HTML 5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS 3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Crashlytics", logo: "https://picsum.photos/seed/crash/40/40" },
  { name: "Google Analytics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
];

const faqs = [
  { q: "What are the key features of an e-learning app?", a: "Key features include interactive lessons, progress tracking, assessments, and offline access." },
  { q: "What technologies are used in developing e-learning apps?", a: "We use modern stacks like React, Flutter, Node.js, and cloud services like AWS and Firebase." },
  { q: "Can you customize the e-learning app to suit my specific needs?", a: "Yes, we specialize in custom development tailored to your business or educational requirements." },
  { q: "Can you integrate third-party services into the e-learning app?", a: "Absolutely, we can integrate payment gateways, CRM, and other third-party APIs." },
  { q: "Do you provide post-launch support and maintenance?", a: "Yes, we offer comprehensive support and maintenance packages post-launch." },
];

// --- Components ---

const Hero = () => {
  return (
    <section className="relative bg-[#F5F3FF] pt-20 pb-32 overflow-hidden px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
            Responsive and Scalable <br />
            <span className="text-[#7B2CBF]">eLearning</span> <br />
            Development
          </h1>
          <div className="flex items-center gap-3 mb-8">
            <p className="text-gray-600 text-lg max-w-md">
              Powerful Features to Enhance Learning and Engagement!
            </p>
          </div>
          <button 
            className="text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:scale-105 transition-transform"
            style={{ backgroundColor: PRIMARY_PURPLE }}
          >
            View Demo
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative z-10">
            <img 
              src="https://picsum.photos/seed/hero-app/600/800" 
              alt="E-Learning App" 
              className="w-full max-w-md mx-auto drop-shadow-2xl rounded-[3rem] border-[12px] border-white"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -right-10 -bottom-10 z-20 hidden md:block">
            <img 
              src="https://picsum.photos/seed/student/400/400" 
              alt="Student" 
              className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: "Interactive Lessons", icon: "https://picsum.photos/seed/feat1/60/60" },
    { title: "Progress Tracking", icon: "https://picsum.photos/seed/feat2/60/60" },
    { title: "Multi-Device & Accessibility", icon: "https://picsum.photos/seed/feat3/60/60" },
    { title: "Offline Mode", icon: "https://picsum.photos/seed/feat4/60/60" },
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img 
            src="https://picsum.photos/seed/features-img/500/600" 
            alt="Features" 
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 leading-tight">
            Key Features for Seamless Functionality
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow bg-white"
              >
                <img src={f.icon} alt={f.title} className="w-12 h-12 rounded-xl" />
                <h3 className="font-bold text-lg text-gray-800">{f.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const OnDemandSection = () => {
  return (
    <section className="py-24 bg-[#F5F3FF] px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <img 
            src="https://picsum.photos/seed/ondemand/500/700" 
            alt="On Demand App" 
            className="w-full max-w-md mx-auto rounded-[2.5rem] shadow-2xl border-[8px] border-white"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            On-Demand E-Learning App Development
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            These revolutionary applications are transforming the way we access, deliver, and consume educational content, making learning more engaging and adaptable than ever. E-learning app companies have gained tremendous popularity for overcoming traditional educational hurdles. With the rise of smartphones, tablets, and high-speed internet, learning is no longer confined to the classroom. Students and professionals alike can now access a wealth of knowledge at their fingertips, thanks to innovative solutions from E-learning app development companies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const AgencySection = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <img 
            src="https://picsum.photos/seed/agency/500/700" 
            alt="Agency App" 
            className="w-full max-w-md mx-auto rounded-[2.5rem] shadow-2xl border-[8px] border-white"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            E-Learning App Development Agency
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            In today's digital age, e-learning is transforming education by making information more accessible and engaging. As an E-learning app development agency, we have years of experience in education technology and the expertise to create effective e-learning solutions. Our skilled team combines cutting-edge technology with imaginative design to deliver exceptional results. Our e-learning apps are ideal for schools, universities, corporate training programs, and professional development providers. They are compatible with mobile devices and web platforms, enabling learners to access instructional content anytime and anywhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">E-Learning App Development Services</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Revolutionize Learning with Innovative, Engaging, and Scalable E-Learning Solutions.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div 
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 mb-6 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img src={s.icon} alt={s.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AppScreens = () => {
  const screens = [
    "https://picsum.photos/seed/screen1/300/600",
    "https://picsum.photos/seed/screen2/300/600",
    "https://picsum.photos/seed/screen3/300/600",
    "https://picsum.photos/seed/screen4/300/600",
    "https://picsum.photos/seed/screen5/300/600",
  ];

  return (
    <section className="py-24 bg-[#3B82F6] px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center text-white mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">App Screens</h2>
        <p className="text-blue-100 text-lg">Key Screens for a Seamless Learning Experience</p>
      </div>
      
      <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar px-4">
        {screens.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-72"
          >
            <img 
              src={s} 
              alt={`Screen ${i+1}`} 
              className="w-full rounded-[2.5rem] shadow-2xl border-8 border-white/20"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AppFeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState('Admin Panel');
  const tabs = ['Admin Panel', 'Instructor Panel', 'Student Panel'];

  return (
    <section className="py-24 bg-white px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Application Features</h2>
        <p className="text-gray-600 text-lg">Powerful Features to Enhance Learning and Engagement!</p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-12 bg-gray-50 p-2 rounded-2xl">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                activeTab === tab 
                ? 'bg-orange-400 text-white shadow-lg' 
                : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#F0FDF4] rounded-[3rem] p-12 min-h-[300px] flex items-center justify-center border border-green-100"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">{activeTab} Features</h3>
            <p className="text-gray-600 text-lg">
              Comprehensive tools and dashboards designed specifically for {activeTab.toLowerCase()} to manage, track, and optimize the learning experience.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  return (
    <section className="py-24 bg-[#F5F3FF] px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Technology We Use</h2>
        <p className="text-gray-600 text-lg">Advanced Web Technologies for a Seamless E-Learning Experience</p>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {techStack.map((tech, i) => (
          <motion.div 
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 border border-purple-50"
          >
            <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
            <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">FAQ's</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-800 text-lg">{faq.q}</span>
                <div className={`p-1 rounded-full bg-gray-100 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
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


export default function ELearningApp() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-200 selection:text-purple-900">
      <main>
        <Hero />
        <Features />
        <OnDemandSection />
        
        {/* Innovative E-Learning Apps for All Section */}
        <section className="py-24 bg-[#F5F3FF] px-4 md:px-12 text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16">
              Innovative E-Learning Apps for All
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto"
            >
              <img 
                src="https://picsum.photos/seed/innovative/1200/600" 
                alt="Innovative Apps" 
                className="rounded-[3rem] shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </section>

        <AgencySection />
        <ServicesGrid />
        <AppScreens />
        <AppFeaturesTabs />
        <TechnologySection />
        <FAQSection />
      </main>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes pulse-soft {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}} />
    </div>
  );
}
