import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Plus, 
  Minus, 
  MessageCircle,
  ArrowUp,
  Globe,
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-[#00A89E]">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00A89E]/90 to-transparent z-10"></div>
      <img 
        src="https://picsum.photos/seed/fitness-hero/1920/1080" 
        alt="Fitness Background" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      <div className="relative z-20 container mx-auto px-4 md:px-12 h-full flex flex-col justify-center items-start text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tight">
            CUSTOM <br />
            <span className="text-white">WEB & APP DEVELOPMENT</span> <br />
            FOR <span className="text-yellow-400">SPORTS & FITNESS</span>
          </h1>
          
          <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
            View Demo
          </button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-4 opacity-50">
          {[1, 2, 3, 4, 5].map(i => <Plus key={i} size={24} className="text-white" />)}
        </div>
      </div>

      {/* Floating Image Mockup */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute right-12 top-1/2 -translate-y-1/2 z-20 hidden xl:block w-[500px]"
      >
        <div className="relative bg-gray-900 rounded-2xl p-4 shadow-2xl border border-gray-700">
          <div className="grid grid-cols-2 gap-2">
            <img src="https://picsum.photos/seed/fit1/300/300" className="rounded-lg" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/fit2/300/300" className="rounded-lg" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/fit3/300/300" className="rounded-lg" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/fit4/300/300" className="rounded-lg" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -left-10 bottom-10 bg-white p-4 rounded-xl shadow-lg">
             <img src="https://picsum.photos/seed/fit5/400/600" className="w-64 rounded-lg" referrerPolicy="no-referrer" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const KeyFeatures = () => {
  const features = [
    { title: "Personalized Workout Plans", color: "bg-white" },
    { title: "Activity Tracking", color: "bg-white" },
    { title: "Progress Analytics", color: "bg-white" },
    { title: "Community & Social Integration", color: "bg-white" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Key Features for Seamless Functionality</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ backgroundColor: "#f3f4f6" }}
              className={`p-10 text-center border-r border-gray-200 last:border-r-0 flex flex-col items-center justify-center min-h-[200px] cursor-pointer transition-colors`}
            >
              <h3 className="text-xl font-semibold text-gray-800 leading-snug">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OnDemandSection = () => {
  return (
    <section className="py-20 bg-[#E0F2F1]">
      <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">On Demand Sports & Fitness App Development</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            As technology advances, sports and fitness applications are expected to expand their influence, changing the fitness environment and improving public health outcomes. Sports and fitness applications have revolutionized the way people approach fitness and health, empowering people to take charge of their health and live healthier lifestyles by making fitness more accessible, personalized and enjoyable. These apps also enable data driven insights and behavioral changes, which contribute to long term benefits in physical and mental health.
          </p>
        </div>
        <div className="lg:w-1/2">
           <div className="bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
              <img src="https://picsum.photos/seed/fitness-app/800/500" alt="App Development" className="w-full h-auto rounded-xl" referrerPolicy="no-referrer" />
           </div>
        </div>
      </div>
    </section>
  );
};

const AgencySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Sports & Fitness App Development Agency</h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            We specialise in creating sports and fitness apps that will transform the way you exercise, track, and achieve your fitness objectives. Our objective is to empower athletes, fitness enthusiasts, and trainers by offering personalised, interactive tools that improve their training experiences. Whether you require a unique app to measure real-time progress, give personalised fitness plans, or build a feeling of community among users, we have the skills to bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    { title: "Custom Fitness Apps", desc: "Customized diet and exercise regimens." },
    { title: "Wearable Integration", desc: "Connect to smartwatches and fitness trackers." },
    { title: "On-Demand Training", desc: "Sessions with trainers, either in person or on tape." },
    { title: "Health Tracking", desc: "Keep track of your hydration, calories, and nutrition." },
    { title: "Fitness Challenges", desc: "Features for communities and leaderboards." },
    { title: "Performance Analytics", desc: "Tracking and insights in real time." },
    { title: "Video Workouts", desc: "A resource of fitness and exercise tutorials." },
    { title: "Social Media Integration", desc: "Post accomplishments on social media." },
  ];

  return (
    <section className="py-24 bg-[#E0F2F1]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sports and Fitness App Development Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive Sport and Fitness App Solutions for a Healthier, Engaging Experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-primary transition-colors">
                <Plus className="text-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppScreens = () => {
  const screens = [
    { title: "Home Screen", img: "https://picsum.photos/seed/screen1/400/800" },
    { title: "Workout Plan", img: "https://picsum.photos/seed/screen2/400/800" },
    { title: "Activity Tracker", img: "https://picsum.photos/seed/screen3/400/800" },
    { title: "Nutrition", img: "https://picsum.photos/seed/screen4/400/800" },
    { title: "Profile", img: "https://picsum.photos/seed/screen5/400/800" },
  ];

  return (
    <section className="py-24 bg-[#80CBC4] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">App Screens</h2>
        <p className="text-gray-800 text-xl mb-16">Build a customisable, multi-featured grocery platform with us!</p>
        
        <div className="flex flex-nowrap gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar">
           {screens.map((screen, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="min-w-[280px] md:min-w-[320px] snap-center"
             >
               <div className="h-[580px] bg-gray-900 rounded-[3rem] border-[12px] border-black shadow-2xl overflow-hidden relative group">
                  <img src={screen.img} alt={screen.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{screen.title}</span>
                  </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const techs = [
    "Android", "iOS", "React Native", "Flutter", "Swift", "Kotlin", "Node.js", "Python",
    "Firebase", "AWS", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "GraphQL", "Redis"
  ];

  return (
    <section className="py-24 bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="text-5xl font-bold mb-4">Technology We Use</h2>
        <p className="text-gray-400 text-xl mb-16">Build a customisable, multi-featured grocery platform with us!</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {techs.map((tech, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#000000" }}
              className="aspect-square bg-white/5 rounded-2xl flex flex-col items-center justify-center p-4 shadow-lg cursor-pointer border border-white/10 transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg mb-3 flex items-center justify-center">
                <Globe size={24} className="text-primary" />
              </div>
              <span className="text-xs font-bold uppercase tracking-tighter">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppFeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState('user');

  const tabs = [
    { id: 'user', label: 'User Panel' },
    { id: 'coach', label: 'Coach/Trainer Panel' },
    { id: 'admin', label: 'Admin Panel' },
  ];

  const tabContent = {
    user: [
      "Personalized Workout Plans",
      "Real-time Activity Tracking",
      "Nutritional Guidance & Meal Plans",
      "Community Support & Challenges",
      "Progress Analytics & Reports",
      "Wearable Device Integration"
    ],
    coach: [
      "Client Management Dashboard",
      "Custom Workout Builder",
      "Real-time Progress Monitoring",
      "Direct Messaging & Feedback",
      "Performance Analytics",
      "Scheduling & Appointments"
    ],
    admin: [
      "User & Coach Management",
      "Content Management System",
      "Analytics & Revenue Reports",
      "Subscription Management",
      "Push Notifications Control",
      "App Configuration Settings"
    ]
  };

  return (
    <section className="py-24 bg-[#E0F2F1]">
      <div className="container mx-auto px-4 md:px-12 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Application Features</h2>
        <p className="text-gray-600 text-xl mb-16">Build a customisable, multi-featured grocery platform with us!</p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-2 rounded-full shadow-lg flex justify-between mb-12 border border-gray-100 overflow-hidden">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 rounded-full font-bold text-lg transition-all ${activeTab === tab.id ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#263238] p-12 rounded-3xl shadow-2xl text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tabContent[activeTab as keyof typeof tabContent].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 text-white">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Plus size={16} />
                  </div>
                  <span className="text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "What types of sports and fitness apps do you develop?", a: "We develop a wide range of apps including workout trackers, nutrition planners, wearable integrations, and community-based fitness platforms." },
    { q: "Can you develop apps for both iOS and Android platforms?", a: "Yes, we specialize in cross-platform development using technologies like React Native and Flutter, as well as native development for both iOS and Android." },
    { q: "Can I integrate wearable devices with a sports and fitness app?", a: "Absolutely. We have extensive experience integrating with Apple HealthKit, Google Fit, Fitbit, Garmin, and other popular wearable APIs." },
    { q: "Is it possible to customize a sports and fitness app to match my brand or fitness facility?", a: "Yes, all our solutions are fully white-labeled and customizable to match your brand identity and specific business requirements." },
    { q: "Can you help with app marketing and user acquisition?", a: "We provide strategic guidance on app store optimization (ASO) and can integrate marketing tools to help you grow your user base." },
  ];

  return (
    <section className="py-24 bg-[#263238] text-white">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-5xl font-bold text-center mb-16">FAQ's</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#E0F2F1] rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center text-left text-gray-900 font-bold text-lg"
              >
                {faq.q}
                <div className="bg-white p-1 rounded-full shadow-sm">
                  {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t border-gray-200/50">
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

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <>
      <div className="fixed right-6 bottom-24 z-50">
        <a 
          href="https://wa.me/919390683154" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
        >
          <MessageCircle size={32} className="text-white" />
          <div className="absolute -left-2 top-1/2 -translate-x-full -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </div>
        </a>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed right-6 bottom-6 z-50 w-12 h-12 bg-[#0091FF] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-600 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Main App ---

export default function SportsAndFitness() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <main>
        <Hero />
        <KeyFeatures />
        <OnDemandSection />
        <AgencySection />
        <ServicesGrid />
        <AppScreens />
        <TechnologySection />
        <AppFeaturesTabs />
        <FAQSection />
      </main>
      <FloatingButtons />
    </div>
  );
}
