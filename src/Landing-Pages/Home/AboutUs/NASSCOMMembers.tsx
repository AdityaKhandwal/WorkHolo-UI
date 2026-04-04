import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { 
  Globe, 
  ArrowRight, 
  Plus, 
  Minus, 
  MessageCircle,
  ChevronUp,
  TrendingUp,
  Globe2,
  Zap,
  ShieldCheck,
  Users,
  Lightbulb,
  Handshake,
  Cpu
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative bg-[#0a1628] pt-24 pb-32 overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary rounded-full blur-[100px]" />
    </div>
    
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 mb-8"
      >
        <span className="text-white text-[13px] font-bold tracking-widest uppercase">NASSCOM MEMBER</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
      >
        Proud NASSCOM Member & <br />
        <span className="text-white">Global Technology Partner</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Partner with a recognized and trusted technology company.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
        <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-md font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl">
          Get In Touch <ArrowRight size={20} />
        </button>
        <button className="bg-transparent text-white border-2 border-white/30 px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
          Awards & Recognition
        </button>
      </motion.div>
    </div>
  </section>
);

const Commitment = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          Our Commitment to <span className="text-accent">Industry Excellence</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-lg leading-relaxed mb-8"
        >
          WorkHolo Labs is an official member of NASSCOM — the premier trade body representing India's IT and business process management industry. This membership reflects our commitment to maintaining global quality standards, ethical business practices, and continuous innovation.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg leading-relaxed"
        >
          As a part of the NASSCOM ecosystem, we gain access to collaborative initiatives that shape the future of technology in India and beyond.
        </motion.p>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:w-1/2 flex justify-center"
      >
        <div className="bg-[#e11d48] w-full max-w-[500px] aspect-[16/9] rounded-2xl flex items-center justify-center p-12 shadow-2xl">
          <span className="text-white font-black text-6xl md:text-8xl tracking-tighter">nasscom</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Strengthens = () => {
  const cards = [
    {
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      title: "Credibility and Global Recognition",
      desc: "Instills confidence in businesses seeking dependable software development and digital transformation partners."
    },
    {
      icon: <Cpu className="text-blue-500" size={32} />,
      title: "Commitment to Industry Standards",
      desc: "Ensures our development processes, data security, and quality benchmarks are consistent with globally recognised best practices."
    },
    {
      icon: <Lightbulb className="text-blue-500" size={32} />,
      title: "Innovation in Emerging Technology",
      desc: "Provides access to insights and frameworks that help us advance our capabilities in AI, cloud, automation, and SaaS solutions."
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      title: "Collaboration and Growth Opportunities",
      desc: "Facilitates collaboration, networking, and knowledge exchange with premier industry leaders."
    },
    {
      icon: <Handshake className="text-blue-500" size={32} />,
      title: "Contributing to India's IT Leadership",
      desc: "Enables us to shape the future of IT developments and policy environments."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16"
        >
          Our NASSCOM Membership <span className="text-accent">Strengthens</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <img 
          src="https://picsum.photos/seed/about/800/600" 
          alt="About WorkHolo Labs" 
          className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="lg:w-1/2">
        <motion.h2 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          About <span className="text-accent">WorkHolo Labs</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-lg leading-relaxed mb-8"
        >
          At WorkHolo Labs, innovation is at the heart of everything we do. We are a leading <span className="text-blue-600 font-semibold">mobile app development company</span> in India offering end-to-end digital transformation services to help businesses succeed in a technology-driven world.
        </motion.p>
      </div>
    </div>
  </section>
);

const ClientsSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col lg:flex-row-reverse items-center gap-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <img 
          src="https://picsum.photos/seed/clients/800/600" 
          alt="Our Clients" 
          className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="lg:w-1/2">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          What It Means for <span className="text-accent">Our Clients</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-lg leading-relaxed mb-8"
        >
          Partnering with a NASSCOM-affiliated software company means:
        </motion.p>
        <ul className="space-y-4">
          {[
            "Trusted and verified technology expertise",
            "Transparent and ethical business practices",
            "Enhanced data security & compliance",
            "Commitment to continuous improvement",
            "Capability to deliver on global standards"
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-gray-700 font-medium"
            >
              <div className="text-green-500"><ShieldCheck size={20} /></div>
              {item}
            </motion.li>
          ))}
        </ul>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-gray-500 italic"
        >
          Clients choosing WorkHolo Labs gain a technology partner who is recognized, accountable, and driven by excellence.
        </motion.p>
      </div>
    </div>
  </section>
);

const InnovationSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-16">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:w-1/2"
      >
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/innovation/800/800" 
            alt="Innovation" 
            className="rounded-3xl shadow-2xl w-full object-cover aspect-square"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
        </div>
      </motion.div>
      <div className="lg:w-1/2">
        <motion.h2 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-6"
        >
          Driving Digital Innovation with <span className="text-accent">Industry Leadership</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-lg leading-relaxed mb-8"
        >
          As a NASSCOM Member, we are inspired to push boundaries in:
        </motion.p>
        <ul className="space-y-4">
          {[
            "Custom Software Development",
            "Mobile App Development",
            "Salesforce CRM Integration & Development",
            "AI-driven Automation & Cloud Solutions",
            "Enterprise SaaS Platforms",
            "eCommerce & Web Product Engineering"
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 text-gray-700 font-medium"
            >
              <div className="text-green-500"><ShieldCheck size={20} /></div>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const EmpowersSection = () => {
  const items = [
    {
      icon: <TrendingUp className="text-blue-500" size={40} />,
      text: "Stay ahead of emerging technologies and market trends."
    },
    {
      icon: <Globe2 className="text-blue-500" size={40} />,
      text: "Build sustainable and inclusive digital ecosystems."
    },
    {
      icon: <Zap className="text-blue-500" size={40} />,
      text: "Contribute to India's growing digital economy."
    }
  ];

  return (
    <section className="py-24 bg-[#0a1628] text-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4"
        >
          Being a NASSCOM member <span className="text-accent">empowers us to</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-2xl flex flex-col items-center text-center shadow-xl"
            >
              <div className="mb-8">{item.icon}</div>
              <p className="text-gray-700 text-lg font-medium leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-white/60 text-lg"
        >
          At WorkHolo Labs, we take pride in being recognized among India's most credible IT organizations, aligned with the nation's digital-first mission.
        </motion.p>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is NASSCOM and why is it significant?",
      a: "NASSCOM (National Association of Software and Service Companies) is the premier trade body and chamber of commerce of the IT-BPM industry in India. It plays a crucial role in policy advocacy, setting industry standards, and fostering innovation."
    },
    {
      q: "Is WorkHolo Labs a NASSCOM member?",
      a: "Yes, WorkHolo Labs is a proud and official member of NASSCOM, reflecting our commitment to quality and industry excellence."
    },
    {
      q: "What does NASSCOM membership mean for clients?",
      a: "It guarantees that the company follows ethical business practices, maintains high quality standards, and is part of a globally recognized network of technology leaders."
    },
    {
      q: "How does NASSCOM membership benefit WorkHolo Labs?",
      a: "It provides access to industry insights, networking opportunities with global leaders, and a platform to contribute to the growth of India's digital economy."
    },
    {
      q: "What values does NASSCOM membership align with?",
      a: "It aligns with our core values of innovation, transparency, excellence, and commitment to delivering world-class digital solutions."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16"
        >
          Frequently Asked <span className="text-accent">Questions</span>
        </motion.h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all ${activeIndex === idx ? 'shadow-lg border-blue-200' : 'hover:border-gray-300'}`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-900 text-lg"
              >
                {faq.q}
                {activeIndex === idx ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed">
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

const GlobalPresence = () => {
  const regions = [
    {
      name: "INDIA",
      cities: ["Hyderabad", "Bangalore", "Chennai", "Coimbatore", "Kochi"]
    },
    {
      name: "AMERICAS",
      cities: ["United States", "Canada"]
    },
    {
      name: "EUROPE",
      cities: ["United Kingdom", "Germany", "Ireland"]
    },
    {
      name: "ASIA PACIFIC",
      cities: ["Singapore", "Australia", "New Zealand", "India"]
    },
    {
      name: "MIDDLE EAST",
      cities: ["UAE", "Dubai", "Saudi Arabia", "Qatar", "Kuwait"]
    }
  ];

  return (
    <section className="py-24 bg-[#050a14] text-white border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div className="flex items-center gap-3 mb-16">
          <Globe className="text-blue-500" size={24} />
          <h2 className="text-2xl font-bold">Global Presence</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {regions.map((region) => (
            <div key={region.name}>
              <h3 className="text-blue-500 font-bold text-sm tracking-widest mb-8 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" /> {region.name}
              </h3>
              <ul className="space-y-4">
                {region.cities.map((city) => (
                  <li key={city} className="text-gray-400 hover:text-white cursor-pointer transition-colors text-lg">
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FloatingActions = () => (
  <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl relative"
    >
      <MessageCircle size={32} />
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
    </motion.button>
    <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl self-end"
    >
      <ChevronUp size={24} />
    </motion.button>
    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
      1
    </div>
  </div>
);

export default function NASSCOMMembers() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <Hero />
        <Commitment />
        <Strengthens />
        <AboutSection />
        <ClientsSection />
        <InnovationSection />
        <EmpowersSection />
        <FAQSection />
        <GlobalPresence />
      </main>
      <FloatingActions />
    </div>
  );
}
