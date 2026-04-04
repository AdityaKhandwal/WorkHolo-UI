import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import {  
  Globe, 
  ArrowRight, 
  Trophy, 
  Smartphone, 
  Cloud, 
  Users, 
  CheckCircle2, 
  Plus, 
  Minus, 
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative bg-gradient-to-br from-navy via-navy to-black py-24 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#007BFF_0%,transparent_50%)]"></div>
    </div>

    <div className="container-standard relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8"
      >
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <span>/</span>
        <span className="text-white">Awards & Recognition</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-md text-xs font-bold tracking-widest uppercase mb-6"
      >
        Recognition
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight"
      >
        Awards & <span className="text-accent">Recognition</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        Recognized for excellence in software development and digital innovation. Our commitment to delivering scalable, secure, and innovative solutions has earned us recognition across industries.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-md font-bold flex items-center gap-2 transition-all">
          Work With Us <ArrowRight size={18} />
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-bold transition-all border border-white/20">
          Our Team
        </button>
      </motion.div>
    </div>

    {/* Floating WhatsApp Icon */}
    <div className="fixed bottom-24 right-8 z-50">
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-10 h-10" />
      </motion.div>
    </div>
  </section>
);

const Achievements = () => {
  const cards = [
    {
      icon: <Trophy className="text-accent" size={32} />,
      title: "Excellence in Custom Software Development",
      description: "Recognized for delivering high-performance enterprise applications and scalable SaaS platforms for global businesses.",
      link: "Custom Software Services"
    },
    {
      icon: <Smartphone className="text-accent" size={32} />,
      title: "Innovation in Mobile App Development",
      description: "Acknowledged for building secure and user-centric mobile applications using modern frameworks like iOS, Android, and React Native.",
      link: "Mobile App Services"
    },
    {
      icon: <Cloud className="text-accent" size={32} />,
      title: "Cloud & Digital Transformation Leadership",
      description: "Honored for implementing cloud-native architectures and successful cloud migration strategies for enterprises.",
      link: "Cloud Services"
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: "Client Satisfaction & Delivery Excellence",
      description: "Appreciated for maintaining transparent communication, agile project management, and consistent on-time delivery.",
      link: "Enterprise Solutions"
    }
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="container-standard">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Industry Recognition & <span className="text-accent">Achievements</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight">{card.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{card.description}</p>
              <a href="#" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                {card.link} <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => (
  <section className="py-24 bg-gray-50 text-black">
    <div className="container-standard text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Certifications & <span className="text-accent">Partnerships</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed"
      >
        Our team continuously upgrades skills and aligns with global standards through:
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {[
          "Cloud certifications (AWS, Azure)",
          "Agile & DevOps best practices",
          "Enterprise security compliance",
          "Modern UI/UX and accessibility standards"
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white px-8 py-4 rounded-full shadow-md flex items-center gap-3 border border-gray-100"
          >
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
              <CheckCircle2 size={14} />
            </div>
            <span className="font-semibold text-gray-800">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-500 italic"
      >
        These recognitions reinforce our position as a trusted <span className="text-primary font-bold">enterprise software development partner</span>.
      </motion.p>
    </div>
  </section>
);

const RecognitionMeans = () => (
  <section className="py-24 bg-white text-black">
    <div className="container-standard text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        What Our Recognition <span className="text-accent">Means for Clients</span>
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          "Proven technical expertise",
          "Globally aligned engineering standards",
          "Scalable and secure architecture",
          "Dedicated innovation-driven teams",
          "Long-term digital growth strategies"
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-green-50 border border-green-100 px-6 py-3 rounded-md flex items-center gap-3"
          >
            <CheckCircle2 className="text-green-600" size={20} />
            <span className="font-medium text-gray-800">{item}</span>
          </motion.div>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
        Our recognition is not just an achievement — it is a responsibility to continue delivering excellence.
      </motion.p>
    </div>
  </section>
);

const GlobalTrust = () => (
  <section className="py-24 bg-navy text-white">
    <div className="container-standard text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Global Trust & <span className="text-accent">Industry Impact</span>
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-white/60 mb-16"
      >
        We proudly serve clients across:
      </motion.p>

      <div className="bg-white rounded-2xl p-12 md:p-20 shadow-2xl">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {[
            { name: "USA", icon: <Globe size={24} /> },
            { name: "UK", icon: <Globe size={24} /> },
            { name: "UAE", icon: <Globe size={24} /> },
            { name: "Australia", icon: <Globe size={24} /> },
            { name: "India", icon: <Globe size={24} /> }
          ].map((country, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 text-navy font-bold text-xl"
            >
              <div className="text-primary">{country.icon}</div>
              {country.name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Has WorkHolo Labs received recognition for software development services?",
      a: "Yes, WorkHolo Labs has been recognized by industry leaders like NASSCOM for excellence in software development and SME innovation."
    },
    {
      q: "What makes WorkHolo Labs an award-worthy technology company?",
      a: "Our commitment to quality, innovation, and client success, backed by ISO certifications and a track record of delivering complex enterprise solutions."
    },
    {
      q: "Do awards reflect project quality?",
      a: "Absolutely. Our recognitions are a direct result of the high-quality, scalable, and secure solutions we deliver to our global clients."
    },
    {
      q: "Does recognition impact client projects?",
      a: "Recognition validates our processes and expertise, giving clients confidence that they are partnering with a globally recognized engineering team."
    }
  ];

  return (
    <section className="py-24 bg-white text-black">
      <div className="container-standard">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Frequently Asked <span className="text-accent">Questions</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-lg hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
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

const CTA = () => (
  <section className="py-24 bg-navy text-white relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
    
    <div className="container-standard relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-block bg-white/10 text-white px-4 py-1 rounded-md text-xs font-bold tracking-widest uppercase mb-8"
      >
        Award-Winning Team
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-extrabold mb-8"
      >
        Build Your Next Project With Us
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Partner with a globally recognized software development company.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4"
      >
        <button className="bg-white text-navy hover:bg-gray-100 px-8 py-4 rounded-md font-bold flex items-center gap-2 transition-all">
          Contact Us <ArrowRight size={18} />
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-md font-bold transition-all border border-white/20">
          Cloud Migration
        </button>
      </motion.div>
    </div>
  </section>
);

export default function AwardAndRecognisation() {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      <Hero />
      <Achievements />
      <Certifications />
      <RecognitionMeans />
      <GlobalTrust />
      <FAQ />
      <CTA />
    </div>
  );
}
