import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  Mail,
  ArrowRight,
  Plus,
  Minus,
  Smartphone,
  PenTool,
  MessageSquare,
  Video,
  Cpu,
  Layers,
  Share2,
  Cloud,
  CheckCircle2,
} from "lucide-react";

// --- Components ---

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-[64px] font-extrabold leading-[1.1] mb-6">
            Grow Your <span className="text-primary">Social App</span> with Web
            & App Development
          </h1>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Build Your Custom Social Media App Today
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 mb-10 max-w-xl">
            Transform how people connect with our cutting-edge social networking
            app development solutions.
          </p>
          <button className="flex items-center gap-2 bg-[#FF7E47] hover:bg-[#FF7E47]/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all group shadow-lg shadow-orange-500/20">
            Let's Bring Your Idea to Life{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Mockup Container */}
          <div className="relative z-10 flex justify-center">
            <img
              src="https://picsum.photos/seed/socialapp/800/1200"
              alt="App Mockup"
              className="w-[300px] lg:w-[400px] h-auto rounded-[3rem] border-[12px] border-gray-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-[100px] -z-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Smartphone className="text-primary" size={40} />,
      title: "User Profiles & Customization",
    },
    {
      icon: <Share2 className="text-secondary" size={40} />,
      title: "Feed & Content Sharing",
    },
    {
      icon: <Mail className="text-primary" size={40} />,
      title: "Private Messaging",
    },
    {
      icon: <CheckCircle2 className="text-secondary" size={40} />,
      title: "Notifications & Alerts",
    },
  ];

  return (
    <section className="py-20 bg-white text-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          Key Features for Seamless Functionality
        </h2>
        <p className="text-gray-500 mb-16 text-lg">
          Essential components that make your social app successful.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-6 p-6 bg-gray-50 rounded-3xl group hover:bg-primary/5 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold leading-tight max-w-[150px]">
                {f.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OnDemandSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://picsum.photos/seed/ondemand/800/1200"
            alt="On Demand App"
            className="w-full max-w-[500px] mx-auto rounded-[3rem] border-[12px] border-gray-800 shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
            On-Demand Social Media App Development
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Social networking apps have transformed the way we communicate,
            share, and interact with others. These platforms have become a vital
            part of our daily lives, offering a multitude of features that cater
            to various needs and preferences. From personal interactions and
            community building to professional networking and content
            development,{" "}
            <span className="text-secondary">social media applications</span>{" "}
            offer a dynamic platform for individuals and organisations to
            connect with a global audience.
          </p>
          <button className="flex items-center gap-2 border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-dark transition-all group">
            Request Quote{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const AgencySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
            Social Media App Development Agency
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            We are passionate about developing{" "}
            <span className="text-secondary">custom social media apps</span>{" "}
            that redefine the way people connect and interact online. Our team
            of trained specialists uses cutting-edge technologies and innovative{" "}
            <span className="text-secondary">design principles</span> to create
            platforms that are not only feature-rich and safe, but also
            extremely engaging and user-friendly. Whether you aim to build a
            niche community or a global social network, we provide the expertise
            and creativity to bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://picsum.photos/seed/agency/800/1200"
            alt="Agency App"
            className="w-full max-w-[500px] mx-auto rounded-[3rem] border-[12px] border-gray-800 shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Smartphone />,
      title: "Custom Social Media App",
      desc: "Solutions for Communities, Influencers & Enterprises",
    },
    {
      icon: <PenTool />,
      title: "Social Media App UI/UX",
      desc: "Captivating & User-Friendly UI/UX Design Solutions",
    },
    {
      icon: <MessageSquare />,
      title: "Real-time Chat & Messaging",
      desc: "Features for Safe Chat & Multimedia Sharing",
    },
    {
      icon: <Video />,
      title: "Video & Live Streaming",
      desc: "Live Streaming & High-Quality Video Sharing Features",
    },
    {
      icon: <Cpu />,
      title: "AI Content Recommendation",
      desc: "Clever Algorithms to Improve User Interaction",
    },
    {
      icon: <Layers />,
      title: "Multi-Platform App",
      desc: "Apps for Web, iOS, and Android Social Networking",
    },
    {
      icon: <Share2 />,
      title: "Social Media API Integration",
      desc: "Seamless Integration with Twitter, Facebook & Instagram",
    },
    {
      icon: <Cloud />,
      title: "Scalable Cloud Hosting",
      desc: "Stable Backend Development and Safe Data Storage",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-cream text-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          Social Media App Development Services
        </h2>
        <p className="text-gray-500 mb-16 text-lg">
          Comprehensive Social Media App Development Services for Next-Gen
          Networking
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group text-center"
            >
              <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                {React.cloneElement(
                  s.icon as React.ReactElement<{ size?: number }>,
                  { size: 32 },
                )}
              </div>
              <h3 className="text-xl font-extrabold mb-4">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppScreens = () => {
  return (
    <section className="py-20 lg:py-32 bg-cream text-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          App Screens
        </h2>
        <p className="text-gray-500 text-lg">
          Showcasing App Screens for Better Navigation and Engagement
        </p>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-10 px-10 no-scrollbar">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="flex-shrink-0 w-[280px] lg:w-[320px]"
          >
            <img
              src={`https://picsum.photos/seed/screen${i}/600/1200`}
              alt={`Screen ${i}`}
              className="w-full h-auto rounded-[2.5rem] border-8 border-white shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AppFeatures = () => {
  const [activeTab, setActiveTab] = useState("Admin Panel");

  const tabs = ["Admin Panel", "Moderator Panel", "User Panel"];
  const features = [
    "User Management",
    "Content Management",
    "Community Management",
    "Analytics and Reporting",
    "Payment Management",
    "Promotions and Marketing",
    "Feedback and Review Management",
  ];

  return (
    <section className="py-20 lg:py-32 bg-cream text-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          Application Features
        </h2>
        <p className="text-gray-500 mb-12 text-lg">
          Key Features That Enhance Your Application's Functionality and
          Performance
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-10 py-3 rounded-full font-bold text-lg transition-all border-2 ${activeTab === tab ? "bg-primary text-white border-primary" : "bg-white text-primary border-primary/20"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary/5 px-8 py-4 rounded-xl font-bold text-gray-700 border border-primary/10"
            >
              {f}
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
      name: "HTML 5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS 3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Laravel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Crashlytics",
      logo: "https://www.gstatic.com/mobilesdk/160503_mobilesdk/discovery_crashlytics_color_24dp.png",
    },
    {
      name: "Google Analytics",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-cream text-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
          Technology We Use
        </h2>
        <p className="text-gray-500 mb-16 text-lg">
          Advanced Technologies We Leverage for App Development
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techs.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-sm flex flex-col items-center justify-center gap-4"
            >
              <img
                src={t.logo}
                alt={t.name}
                className="w-16 h-16 object-contain"
              />
              <span className="font-bold text-sm text-gray-700">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What are the key features of a social media app?",
      a: "Key features include user profiles, news feeds, messaging, notifications, content sharing, and privacy settings.",
    },
    {
      q: "What technologies are used in social media app development?",
      a: "We use modern stacks like React Native, Flutter, Node.js, and cloud services like AWS and Firebase.",
    },
    {
      q: "Will you customize my social media app?",
      a: "Yes, we specialize in building fully custom solutions tailored to your specific business requirements.",
    },
    {
      q: "How do I handle user data and privacy concerns in my social media app?",
      a: "We implement robust security protocols, data encryption, and GDPR-compliant privacy features.",
    },
    {
      q: "What are some emerging trends in social media app development?",
      a: "Trends include AI-driven personalization, AR filters, short-form video content, and decentralized social networks.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white text-dark">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16">
          FAQ's
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-cream rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left font-bold text-xl"
              >
                {faq.q}
                <div className="bg-dark text-white p-1 rounded-full">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-gray-600 leading-relaxed"
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

// --- Main App ---
export default function SocialMediaApps() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <main>
        <Hero />
        <Features />
        <OnDemandSection />
        <AgencySection />
        <Services />
        <AppScreens />
        <AppFeatures />
        <Technology />
        <FAQ />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-4">
        <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WA"
            className="w-10 h-10"
          />
        </button>
        <button className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
          <ArrowRight className="-rotate-90" size={24} />
        </button>
      </div>
    </div>
  );
}
