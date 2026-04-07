import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Plus, 
  Minus, 
  ArrowRight, 
  Rocket, 
  TrendingUp, 
  Users, 
  PartyPopper, 
  Clock, 
  Heart,
  MessageCircle,
  ChevronUp
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="bg-dark text-white bg-[#280260]  pt-32 pb-24 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
      >
        Life at <span className="text-accent">WorkHolo Labs</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed"
      >
        A culture where creativity thrives, talent grows, and people build meaningful careers
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {[
          { label: 'TEAM MEMBERS', value: '100+' },
          { label: 'YEARS STRONG', value: '14+' },
          { label: 'COUNTRIES SERVED', value: '12+' },
          { label: 'EMPLOYEE RATING', value: '4.9★' },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</span>
            <span className="text-[12px] font-bold tracking-widest text-slate-400">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CultureSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8">
            Our Culture. Our People. <span className="text-accent">Our Pride.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            At <span className="font-bold text-dark">WorkHolo Labs</span>, we believe that great ideas are born from great minds. We don't just hire talent; we invest in people and empower them to reach their full potential.
          </p>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Our people are our strongest asset. From <a href="#" className="text-secondary hover:underline">web development</a> to <a href="#" className="text-secondary hover:underline">mobile app development</a>, our teams deliver excellence by promoting work-life balance, mutual respect, and continuous feedback.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80&w=1000" 
              alt="Team working" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl hidden md:block shadow-xl">
            <p className="text-2xl font-bold">14+ Years</p>
            <p className="text-sm opacity-80">of Innovation Excellence</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const DifferentSection = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
        What Makes Us <span className="text-accent">Different</span>
      </h2>
      <p className="text-slate-500 text-lg mb-16">The values and practices that define life</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: 'Collaboration First',
            desc: 'Our culture is built on collaboration, curiosity, and inclusivity — creating an environment where individuals are encouraged to learn, experiment, and grow.',
            icon: '🤝'
          },
          {
            title: 'Innovation Mindset',
            desc: 'We encourage team members to think differently, challenge conventions, and take ownership of ideas. Creativity and problem-solving are deeply embedded in how we work.',
            icon: '💡'
          },
          {
            title: 'Diverse Perspectives',
            desc: 'We foster a workplace where diverse perspectives are valued, open communication is encouraged, and achievements are celebrated across the organization.',
            icon: '🌍'
          },
          {
            title: 'Continuous Learning',
            desc: 'Through mentorship, skill-building initiatives, and exposure to emerging technologies, our teams stay future-ready while growing both personally and professionally.',
            icon: '📚'
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
          >
            <div className="text-4xl mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold text-dark mb-4">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhyWorkWithUs = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
        Why Work <span className="text-accent">With Us</span>
      </h2>
      <p className="text-slate-500 text-lg mb-16 max-w-2xl mx-auto">
        More than a workplace — a launchpad for your career in <a href="#" className="text-secondary hover:underline">custom software development</a> and innovation
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Global Projects',
            desc: 'Work on projects for clients across 12+ countries using emerging technologies like AI, cloud, and mobile.',
            icon: <Rocket className="text-pink-500" size={32} />
          },
          {
            title: 'Professional Growth',
            desc: 'Structured career paths, regular skill development workshops, and mentorship from industry leaders.',
            icon: <TrendingUp className="text-blue-500" size={32} />
          },
          {
            title: 'Transparent Leadership',
            desc: 'Supportive management, open-door policy, and a work environment built on mutual respect and trust.',
            icon: <Users className="text-slate-500" size={32} />
          },
          {
            title: 'Fun at Work',
            desc: 'Team outings, workshops, fun Fridays, celebrations, and creative sessions that keep energy high.',
            icon: <PartyPopper className="text-orange-500" size={32} />
          },
          {
            title: 'Work-Life Balance',
            desc: 'Flexible processes, reasonable timelines, and a culture that respects personal time and well-being.',
            icon: <Clock className="text-amber-500" size={32} />
          },
          {
            title: 'Employee Benefits',
            desc: 'Competitive compensation, health coverage, performance bonuses, and continuous learning opportunities.',
            icon: <Heart className="text-blue-400" size={32} />
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-50 p-8 rounded-2xl text-left border border-slate-100 hover:border-secondary/30 transition-colors group"
          >
            <div className="mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-bold text-dark mb-4">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MoreThanCode = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-8">
            Work is More Than <span className="text-accent">Code</span>
          </h2>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            It's collaboration, creativity, and community. At WorkHolo Labs, every voice matters, every idea counts, and every person contributes to something bigger.
          </p>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            We celebrate wins together, learn from challenges together, and grow together as one team building <a href="#" className="text-secondary hover:underline">digital solutions</a> that impact millions.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
            View Open Positions <ArrowRight size={20} />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
            alt="Professional at work" 
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the work culture like?",
      a: "Our culture is collaborative, innovative, and inclusive. We value open communication and empower our team members to take ownership of their work."
    },
    {
      q: "Why should I consider a career?",
      a: "We offer global exposure, professional growth opportunities, and a supportive environment where your contributions truly matter."
    },
    {
      q: "What kind of projects do employees work on?",
      a: "Our teams work on diverse projects ranging from AI-driven solutions and cloud infrastructure to high-performance mobile and web applications for global clients."
    },
    {
      q: "Does WorkHolo Labs support learning and upskilling?",
      a: "Yes, we provide regular workshops, mentorship programs, and access to the latest technologies to ensure our team stays at the forefront of innovation."
    },
    {
      q: "Is the work environment flexible?",
      a: "We promote a healthy work-life balance with flexible processes and a culture that respects personal time while maintaining high productivity."
    },
    {
      q: "Are there team-building or fun activities?",
      a: "Absolutely! We have Fun Fridays, team outings, creative sessions, and celebrate all major wins and milestones together."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-dark text-center mb-16">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-slate-200 rounded-xl overflow-hidden transition-all ${activeIndex === idx ? 'shadow-md border-secondary/30' : ''}`}
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-dark text-lg">{faq.q}</span>
                {activeIndex === idx ? <Minus size={20} className="text-secondary" /> : <Plus size={20} className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
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
  <section className="py-24 bg-dark text-white text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]"></div>
    </div>
    
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 className="text-4xl md:text-6xl font-bold mb-8">
        Ready to Start Your <span className="text-accent">Journey</span>?
      </h2>
      <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
        Explore career opportunities and become part of a team that's shaping the future of technology.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
          Explore Careers
        </button>
        <button className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:bg-white/10">
          Get in Touch
        </button>
      </div>
    </div>
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
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl relative group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-dark px-3 py-1 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-black text-white p-4 rounded-full shadow-2xl relative group"
      >
        <MessageCircle size={28} className="rotate-180" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white">1</span>
      </motion.button>

      {showScrollTop && (
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-secondary text-white p-4 rounded-full shadow-2xl"
        >
          <ChevronUp size={28} />
        </motion.button>
      )}
    </div>
  );
};

export default function LifeAtWorkHolo() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <CultureSection />
        <DifferentSection />
        <WhyWorkWithUs />
        <MoreThanCode />
        <FAQ />
        <CTA />
      </main>
      <FloatingActions />
    </div>
  );
}
