import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Cpu, 
  Settings, 
  Lightbulb, 
  Plus, 
  Minus, 
  MessageCircle,
  ChevronUp
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="bg-[#0D1B3E] pt-40 pb-24 relative overflow-hidden">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-md text-xs font-bold uppercase tracking-widest mb-6"
        >
          Our People
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8"
        >
          Leadership <span className="text-orange-400">Team</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed mb-10 max-w-3xl"
        >
          Global technology leaders driving digital innovation. Our leadership team consists of experienced technology strategists, enterprise architects, and <span className="text-blue-400 underline decoration-blue-400 underline-offset-4">digital transformation</span> experts committed to delivering scalable software solutions.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#7B2CBF] hover:bg-[#6a25a5] text-white px-8 py-4 rounded-lg text-base font-bold flex items-center gap-2 transition-all group"
        >
          Get In Touch
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/5 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-blue-600/5 to-transparent pointer-events-none" />
  </section>
);

const Vision = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Our Leadership <span className="text-orange-400">Vision</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          We believe technology leadership goes beyond management. Our executives actively guide teams across <span className="text-blue-600 font-semibold">Custom Software Development</span>, <span className="text-blue-600 font-semibold">Enterprise Applications</span>, <span className="text-blue-600 font-semibold">Mobile App Development</span>, <span className="text-blue-600 font-semibold">Cloud Services</span>, and AI-powered Digital Solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          'Strategic product thinking',
          'Enterprise-grade architecture planning',
          'Agile delivery governance',
          'Security-first cloud strategy',
          'Long-term digital scalability'
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"
          >
            <CheckCircle2 className="text-green-500 shrink-0" size={20} />
            <span className="text-slate-800 font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const LeadershipTeam = () => {
  const leaders = [
    {
      title: 'Founder & CEO',
      subtitle: 'STRATEGIC TECHNOLOGY VISIONARY',
      desc: 'Leads global expansion, enterprise partnerships, and innovation initiatives. Drives long-term digital transformation strategies for clients across industries.',
      expertise: 'Global software consulting, enterprise modernization, SaaS platforms, AI adoption strategy.',
      icon: <Users className="text-blue-500" size={24} />
    },
    {
      title: 'Chief Technology Officer',
      subtitle: 'ENTERPRISE ARCHITECTURE LEADER',
      desc: 'Oversees engineering excellence, DevOps governance, scalable system design, and cloud-native transformation initiatives.',
      expertise: 'Microservices architecture, Cloud infrastructure (AWS, Azure), API ecosystems, performance engineering.',
      icon: <Cpu className="text-blue-500" size={24} />
    },
    {
      title: 'Director of Operations',
      subtitle: 'DELIVERY & QUALITY EXCELLENCE',
      desc: 'Ensures on-time global project delivery, process optimization, compliance standards, and customer success management.',
      expertise: 'Agile delivery, process optimization, compliance, customer success.',
      icon: <Settings className="text-blue-500" size={24} />
    },
    {
      title: 'Head of Digital Strategy',
      subtitle: 'PRODUCT & EXPERIENCE INNOVATION',
      desc: 'Focuses on UI/UX innovation, digital product strategy, and data-driven growth solutions.',
      expertise: 'UI/UX design systems, product strategy, data-driven growth.',
      icon: <Lightbulb className="text-blue-500" size={24} />
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Executive Leadership <span className="text-orange-400">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8">
                {leader.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{leader.title}</h3>
              <p className="text-blue-600 text-xs font-bold tracking-widest mb-6 uppercase">{leader.subtitle}</p>
              <p className="text-slate-600 leading-relaxed mb-6">{leader.desc}</p>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-slate-800 text-sm">
                  <span className="font-bold">Expertise:</span> {leader.expertise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StandsOut = () => (
  <section className="py-24 bg-white">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
          Why Our Leadership <span className="text-orange-400">Stands Out</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            'Proven experience in enterprise-grade applications',
            'Strong expertise in cloud-first architecture',
            'Agile & DevOps-driven execution',
            'Transparent communication with global clients',
            'Scalable digital transformation consulting'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-full shadow-sm">
              <CheckCircle2 className="text-green-500" size={18} />
              <span className="text-slate-800 font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
        
        <p className="text-slate-600 italic text-lg">
          Our leadership ensures every engagement delivers measurable ROI and long-term value.
        </p>
      </div>
    </div>
  </section>
);

const Industries = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
          Industries We <span className="text-orange-400">Empower</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {[
            { name: 'Healthcare', icon: <div className="w-5 h-5 text-blue-500">❤️</div> },
            { name: 'Fintech', icon: <div className="w-5 h-5 text-blue-500">💰</div> },
            { name: 'Retail & E-Commerce', icon: <div className="w-5 h-5 text-blue-500">🛒</div> },
            { name: 'Logistics & Supply Chain', icon: <div className="w-5 h-5 text-blue-500">🚚</div> },
            { name: 'Education Technology', icon: <div className="w-5 h-5 text-blue-500">🎓</div> },
            { name: 'Enterprise SaaS', icon: <div className="w-5 h-5 text-blue-500">💻</div> }
          ].map((industry, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-slate-200 px-8 py-5 rounded-xl shadow-sm flex items-center gap-3 cursor-default"
            >
              {industry.icon}
              <span className="text-slate-900 font-bold">{industry.name}</span>
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
      q: 'Who leads WorkHolo Labs?',
      a: 'WorkHolo Labs is led by a team of visionary technology experts with decades of experience in global software consulting and digital transformation.'
    },
    {
      q: 'What industries does the leadership team specialize in?',
      a: 'Our leadership has deep expertise in Healthcare, Fintech, Retail, Logistics, EdTech, and Enterprise SaaS sectors.'
    },
    {
      q: 'How does the leadership team ensure project success?',
      a: 'Through rigid agile governance, transparent communication, and a focus on scalable, secure architecture from day one.'
    },
    {
      q: 'Does WorkHolo Labs serve international clients?',
      a: 'Yes, we have a strong global presence serving clients across the USA, Europe, Asia Pacific, and the Middle East.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            Frequently Asked <span className="text-orange-400">Questions</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-bold text-slate-800">{faq.q}</span>
                  {openIdx === idx ? <Minus size={20} className="text-slate-400" /> : <Plus size={20} className="text-slate-400" />}
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
    <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
      <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">Let's Connect</p>
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Work with Our Expert Team</h2>
      <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
        Partner with proven technology leaders for your next digital initiative.
      </p>
      <button className="bg-white text-slate-900 px-10 py-4 rounded-lg text-lg font-bold flex items-center gap-2 mx-auto hover:bg-gray-100 transition-all group">
        Contact Us
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-[120px]" />
    </div>
  </section>
);

const FloatingButtons = () => (
  <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
    <motion.button 
      whileHover={{ scale: 1.1 }}
      className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
    >
      <MessageCircle size={32} />
    </motion.button>
    <motion.button 
      whileHover={{ scale: 1.1 }}
      className="w-16 h-16 bg-[#0091FF] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all relative"
    >
      <ChevronUp size={32} />
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
        1
      </div>
    </motion.button>
  </div>
);

// --- Main App ---

export default function LeadershipTeamApp() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-600">
      <main>
        <Hero />
        <Vision />
        <LeadershipTeam />
        <StandsOut />
        <Industries />
        <FAQ />
        <CTA />
      </main>
      <FloatingButtons />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-[60] origin-left"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
      />
    </div>
  );
}
