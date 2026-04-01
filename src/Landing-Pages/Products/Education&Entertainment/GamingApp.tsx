import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Plus, 
  Minus,
  Globe,
  Smartphone,
  Gamepad2,
  Zap,
  Trophy,
} from 'lucide-react';

// --- Components ---


const Hero = () => (
  <section className="relative bg-gradient-to-br from-[#7B2CBF] to-[#4D194D] overflow-hidden min-h-[700px] flex items-center">
    {/* Decorative elements */}
    <div className="absolute top-20 left-10 opacity-20">
      <div className="grid grid-cols-5 gap-4">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-white rounded-full" />
        ))}
      </div>
    </div>
    
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10 py-20">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
          Building Seamless <br />
          <span className="text-white/90 italic">Gaming</span> Experiences <br />
          on Web & Mobile
        </h1>
        
        <div className="mt-12">
          <button className="border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 italic">
            View Demo
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative z-20 flex justify-center">
          <img 
            src="https://picsum.photos/seed/game-app/400/800" 
            alt="App Preview" 
            className="w-[300px] md:w-[350px] rounded-[3rem] border-[12px] border-gray-900 shadow-2xl"
          />
          
          {/* Character Illustrations (Placeholders) */}
          <div className="absolute -left-20 top-1/4 w-48 h-48 bg-contain bg-no-repeat animate-bounce" style={{ backgroundImage: 'url(https://picsum.photos/seed/char1/200/200)' }} />
          <div className="absolute -right-20 bottom-1/4 w-64 h-64 bg-contain bg-no-repeat animate-pulse" style={{ backgroundImage: 'url(https://picsum.photos/seed/char2/300/300)' }} />
        </div>
        
        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -z-10" />
      </motion.div>
    </div>
  </section>
);

const AgencySection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-[1440px] mx-auto px-4 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Gaming App Development Agency</h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
          From initial concept to final launch, we provide custom game app development services that suit your unique business needs. Whether you want a simple mobile game or a complicated multiplayer experience, we've got you covered. Our expert designers craft visually stunning and user-friendly interfaces that enhance the overall gaming experience. Our games are designed to run seamlessly across various platforms, including iOS, Android, PC, and consoles. This ensures that your game reaches a broader audience and provides a consistent experience on all devices.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="relative z-10 flex justify-center">
            <img 
              src="https://picsum.photos/seed/rank-screen/400/800" 
              alt="Rank Screen" 
              className="w-[300px] rounded-[3rem] border-[8px] border-gray-900 shadow-xl"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/10 rounded-full -z-10" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-gray-900">Flawless Games on iOS & Android</h3>
          <p className="text-gray-600 text-lg">
            We specialize in creating high-performance gaming applications for both major mobile platforms. Our development process ensures that your game looks and plays perfectly, regardless of the device.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Smartphone className="text-[#7B2CBF] mb-4" size={32} />
              <h4 className="font-bold mb-2">iOS Development</h4>
              <p className="text-sm text-gray-500">Optimized for iPhone and iPad with latest Swift features.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <Globe className="text-[#7B2CBF] mb-4" size={32} />
              <h4 className="font-bold mb-2">Android Development</h4>
              <p className="text-sm text-gray-500">Broad compatibility across thousands of Android devices.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const OnDemandSection = () => (
  <section className="py-24 bg-[#F3E8FF]">
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="order-2 lg:order-1"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">On - Demand Gaming App Development</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Gaming applications have become an important component of the digital entertainment environment, providing immersive experiences and infinite amusement to consumers of all ages. They can range from simple puzzle games to large multi-player internet environments. These apps are accessible on platforms such as iOS and Android, and they may be downloaded from app stores or viewed via web browser.
        </p>
        <div className="space-y-4">
          {[
            { icon: <Gamepad2 size={24} />, title: "Multiplayer Mode" },
            { icon: <Smartphone size={24} />, title: "In-App Purchases" },
            { icon: <Trophy size={24} />, title: "Leader boards & Achievements" },
            { icon: <Zap size={24} />, title: "Offline Play" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-purple-100">
              <div className="text-[#7B2CBF]">{item.icon}</div>
              <span className="font-bold text-gray-800">{item.title}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="order-1 lg:order-2 flex justify-center"
      >
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/game-character/600/600" 
            alt="Character" 
            className="w-full max-w-[500px] drop-shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-4 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Gaming App Development Services</h2>
        <p className="text-gray-500 text-xl">End-to-End Gaming App Development Services</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Custom Game Development", desc: "Customized gaming experiences for various systems" },
          { title: "Game Design & Prototyping", desc: "Creating and evaluating prototypes for games" },
          { title: "Online Integration", desc: "Including multiplayer capabilities in real time" },
          { title: "AR/VR Game Development", desc: "Making VR and AR games that are immersive" },
          { title: "Cross-Platform Development", desc: "Creating games for the web, iOS, and Android" },
          { title: "Game Testing & QA", desc: "Using performance testing to ensure quality" },
          { title: "Game Monetization", desc: "Ads and in-app purchases are being implemented" },
          { title: "Maintenance & Support", desc: "Continuous bug repairs and upgrades after launch" },
        ].map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#F3E8FF] p-8 rounded-3xl text-center group hover:bg-[#7B2CBF] transition-all duration-500"
          >
            <div className="w-full aspect-video bg-black rounded-2xl mb-6 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white/20">
                <Gamepad2 size={48} />
              </div>
            </div>
            <h4 className="font-extrabold text-xl mb-3 group-hover:text-white transition-colors">{service.title}</h4>
            <p className="text-gray-600 group-hover:text-white/80 transition-colors">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ScreensSection = () => (
  <section className="py-24 bg-[#7B2CBF] text-white">
    <div className="max-w-[1440px] mx-auto px-4 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">App Screens</h2>
        <p className="text-white/80 text-xl">Engaging and User-Friendly App Screens Design</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="w-[260px] rounded-[2.5rem] border-[6px] border-white/20 overflow-hidden shadow-2xl"
          >
            <img src={`https://picsum.photos/seed/screen-${i}/300/600`} alt={`Screen ${i}`} className="w-full" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AppFeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('user');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Application Features</h2>
          <p className="text-gray-500 text-xl">Essential Features to Enhance Your App's Functionality</p>
        </div>

        <div className="bg-[#F3E8FF] rounded-[3rem] p-12">
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: 'user', label: 'User Panel' },
              { id: 'developer', label: 'Developer Panel' },
              { id: 'admin', label: 'Admin Panel' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-10 py-3 rounded-full font-bold text-lg transition-all border-2 ${
                  activeTab === tab.id 
                    ? 'bg-[#EF4444] text-white border-[#EF4444]' 
                    : 'bg-white text-orange-500 border-orange-500 hover:bg-orange-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[300px] flex items-center justify-center text-gray-400 italic">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                {activeTab === 'user' && (
                  <div className="grid md:grid-cols-3 gap-8 text-left not-italic">
                    {[
                      "Profile Management", "Game Library", "Social Integration",
                      "In-app Messaging", "Leaderboards", "Achievements & Rewards",
                      "Push Notifications", "Secure Payments", "Multiplayer Lobby"
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-800 font-semibold">
                        <div className="w-2 h-2 bg-[#EF4444] rounded-full" />
                        {feat}
                      </div>
                    ))}
                  </div>
                )}
                {activeTab !== 'user' && <p className="text-2xl">Details for {activeTab} panel coming soon...</p>}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechSection = () => (
  <section className="py-24 bg-[#F3E8FF]">
    <div className="max-w-[1440px] mx-auto px-4 md:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Technology We Use</h2>
        <p className="text-gray-500 text-xl">Web Technologies for Consistent and Dependable Performance</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[
          { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
          { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
          { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
          { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
          { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        ].map((tech, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
            <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-4 object-contain" />
            <span className="font-bold text-gray-700">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { q: "What types of games can you develop?", a: "We develop all types of games including Action, Adventure, Puzzle, RPG, Multiplayer, and AR/VR games for mobile, web, and desktop platforms." },
    { q: "How long does it take to develop a gaming app?", a: "The timeline varies based on complexity. A simple game might take 2-4 months, while a complex multiplayer game can take 6-12 months or more." },
    { q: "What platforms do you develop games for?", a: "We develop for iOS, Android, Web (HTML5), PC, and specialized AR/VR platforms like Oculus and HTC Vive." },
    { q: "Can you integrate AR/VR into my gaming app?", a: "Yes, we have extensive experience in AR/VR integration using Unity and Unreal Engine to create immersive experiences." },
    { q: "Can you help with the marketing and promotion of the game?", a: "Yes, we offer post-launch support including ASO (App Store Optimization), marketing strategy, and user acquisition consulting." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">FAQ's</h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#F3E8FF] rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left"
              >
                <span className="text-xl font-bold text-gray-900">{faq.q}</span>
                <div className={`p-2 rounded-full transition-all ${openIndex === i ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-8 pb-6 text-gray-600 text-lg"
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


export default function GamingApp() {
  return (
    <div className="font-sans selection:bg-blue-500 selection:text-white">
      <Hero />
      <AgencySection />
      <OnDemandSection />
      <FeaturesSection />
      <ScreensSection />
      <AppFeaturesSection />
      <TechSection />
      <FAQSection />
    </div>
  );
}
