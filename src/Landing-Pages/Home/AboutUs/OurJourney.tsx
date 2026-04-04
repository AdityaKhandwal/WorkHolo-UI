import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {  
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Plus, 
  Minus,
  Smartphone,
  Cloud,
  Cpu,
  Database,
  Code2,
  MessageSquare,
  ChevronUp
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="bg-[#0A192F] text-white py-20 px-4 md:px-12 relative overflow-hidden">
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
        <span>Home</span>
        <span>/</span>
        <span>Services</span>
        <span>/</span>
        <span className="text-yellow-500">Our Journey</span>
      </div>
      
      <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-6">
        Since 2012
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
        Our <span className="text-yellow-500">Journey</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
        From a passionate startup to a global software & AI solutions partner. Founded in 2012, 
        WorkHolo Labs began as a small team of developers driven by curiosity, creativity, and a 
        desire to make technology more accessible and impactful.
      </p>
      
      <div className="flex flex-wrap gap-4">
        <button className="bg-[#7B2CBF] hover:bg-[#6a25a3] text-white px-8 py-4 rounded-lg font-bold flex items-center transition-all">
          Get In Touch <ArrowRight className="w-5 h-5 ml-2" />
        </button>
        <button className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all">
          Our Team
        </button>
      </div>
    </div>
    
    {/* Decorative Elements */}
    <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
    <div className="absolute right-10 bottom-20 opacity-20">
      <Globe className="w-64 h-64 text-blue-400" />
    </div>
  </section>
);

const Timeline = () => {
  const milestones = [
    {
      year: "2012",
      title: "Mobile-First Innovation",
      description: "Founded with a mobile-first vision, specializing in iOS and Android app development, cross-platform solutions, and UI/UX-driven mobile experiences.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "blue"
    },
    {
      year: "2015",
      title: "Enterprise & Cloud Expansion",
      description: "Expanded into custom software development, enterprise applications, web development, cloud services, and DevOps engineering.",
      icon: <Cloud className="w-6 h-6" />,
      color: "blue"
    },
    {
      year: "2019",
      title: "AI & Intelligent Solutions",
      description: "Strategically expanded into AI-powered business automation, predictive analytics, intelligent data solutions, and AI-integrated SaaS platforms.",
      icon: <Cpu className="w-6 h-6" />,
      color: "blue"
    },
    {
      year: "2022",
      title: "Global Digital Partner",
      description: "Established presence serving clients across USA, UK, UAE, Australia, and India with enterprise-grade digital transformation solutions.",
      icon: <Globe className="w-6 h-6" />,
      color: "blue"
    }
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          How We <span className="text-yellow-500">Evolved</span>
        </h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 -translate-x-1/2"></div>
          
          <div className="space-y-24">
            {milestones.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Icon Circle */}
                <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-blue-500 rounded-full -translate-x-1/2 flex items-center justify-center text-white z-10 border-4 border-white shadow-lg">
                  {item.icon}
                </div>
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow">
                    <span className="text-blue-600 font-bold text-lg mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Growth = () => (
  <section className="bg-gray-50 py-24 px-4 md:px-12">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        Milestones That Define Our <span className="text-yellow-500">Growth</span>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {[
          "Founded in 2012 with a mobile-first vision",
          "Expanded into enterprise software development",
          "Successfully delivered scalable cloud-native solutions",
          "Integrated AI-driven digital transformation services",
          "Built long-term partnerships with global clients"
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100"
          >
            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
            <span className="font-medium text-gray-700">{item}</span>
          </motion.div>
        ))}
      </div>
      
      <p className="mt-16 text-gray-500 font-light italic text-lg">
        Each Milestone represents our continuous evolution as a trusted global technology partner.
      </p>
    </div>
  </section>
);

const Today = () => {
  const focuses = [
    { title: "Enterprise Software Modernization", icon: <Smartphone className="w-8 h-8" /> },
    { title: "Cloud Transformation & Migration", icon: <Cloud className="w-8 h-8" /> },
    { title: "AI-Powered Digital Solutions", icon: <Cpu className="w-8 h-8" /> },
    { title: "SaaS Product Development", icon: <Code2 className="w-8 h-8" /> },
    { title: "End-to-End Digital Product Engineering", icon: <Database className="w-8 h-8" /> }
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Where We Are <span className="text-yellow-500">Today</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Today, WorkHolo Labs stands at the intersection of innovation, scalability, and intelligence — 
            delivering <span className="text-blue-600 font-semibold underline">custom software solutions</span>, 
            <span className="text-blue-600 font-semibold underline"> cloud services</span>, and 
            <span className="text-blue-600 font-semibold underline"> AI-powered platforms</span> to clients worldwide.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {focuses.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-lg flex items-center space-x-6 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)]"
            >
              <div className="bg-blue-50 p-4 rounded-xl text-blue-600">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center mt-16 text-gray-500 font-medium">
          Our journey continues — driven by innovation, guided by expertise, and focused on delivering measurable business outcomes worldwide.
        </p>
      </div>
    </section>
  );
};

const GlobalPresence = () => (
  <section className="bg-[#0A192F] py-24 px-4 md:px-12 text-white text-center">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        Global Presence & <span className="text-yellow-500">Industry Impact</span>
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4">
        {["USA", "UK", "UAE", "Australia", "India"].map((country, index) => (
          <button 
            key={index}
            className="flex items-center bg-white/10 hover:bg-blue-600 border border-white/20 px-8 py-4 rounded-xl transition-all group"
          >
            <Globe className="w-5 h-5 mr-3 text-blue-400 group-hover:text-white" />
            <span className="font-bold text-lg">{country}</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "When was WorkHolo Labs founded?",
      a: "WorkHolo Labs was founded in 2012 with a vision to provide cutting-edge mobile and software solutions."
    },
    {
      q: "How has WorkHolo Labs evolved over the years?",
      a: "We started as a mobile-first startup and have since expanded into enterprise software, cloud transformation, and AI-powered digital solutions serving global clients."
    },
    {
      q: "Does WorkHolo Labs provide AI solutions?",
      a: "Yes, we specialize in AI-powered business automation, predictive analytics, and intelligent data solutions integrated into modern software platforms."
    },
    {
      q: "Does WorkHolo Labs serve international clients?",
      a: "Absolutely. We have a strong global presence with clients across the USA, UK, UAE, Australia, and India."
    }
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked <span className="text-yellow-500">Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-800">{faq.q}</span>
                {openIndex === index ? <Minus className="w-5 h-5 text-blue-500" /> : <Plus className="w-5 h-5 text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
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
  <section className="bg-[#0A192F] py-24 px-4 md:px-12 text-white text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">Partner With Us</span>
      <h2 className="text-5xl md:text-6xl font-bold mb-8">Let's Build the Future Together</h2>
      <p className="text-xl text-gray-400 mb-12">
        Join 100+ global clients who trust WorkHolo Labs for enterprise-grade digital solutions.
      </p>
      
      <div className="flex flex-wrap justify-center gap-6">
        <button className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-xl font-bold flex items-center transition-all">
          Contact Us <ArrowRight className="w-5 h-5 ml-2" />
        </button>
        <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-10 py-4 rounded-xl font-bold transition-all">
          Cloud Migration
        </button>
      </div>
    </div>
    
    <div className="absolute left-[-10%] top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
    <div className="absolute right-[-10%] bottom-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
  </section>
);

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-[60] flex flex-col space-y-4">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center relative group"
      >
        <MessageSquare className="w-7 h-7" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold">1</div>
        <div className="absolute right-16 bg-white text-black px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold pointer-events-none">
          Chat with us
        </div>
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
      </motion.button>

      {showScrollTop && (
        <motion.button 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          <ChevronUp className="w-7 h-7" />
        </motion.button>
      )}
    </div>
  );
};

export default function OurJourney() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Timeline />
        <Growth />
        <Today />
        <GlobalPresence />
        <FAQ />
        <CTA />
      </main>
      <FloatingActions />
    </div>
  );
}
