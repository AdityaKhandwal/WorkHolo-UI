import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { 
  ArrowRight, 
  Layout, 
  Server, 
  Database, 
  Code2, 
  Cloud, 
  ShieldCheck, 
  Users, 
  UserPlus, 
  Briefcase, 
  Globe, 
  Plus, 
  Minus,
  MessageCircle,
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative bg-[#050A15] pt-24 pb-32 px-4 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

    <div className="max-w-7xl mx-auto text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold mb-8"
      >
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        FULL STACK DEVELOPMENT • INDIA
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
      >
        Hire <span className="text-[#FFD700]">Full Stack Developers</span> in India
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#7B2CBF] hover:bg-[#6A24A3] text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-lg shadow-purple-500/20"
        >
          Hire Developers <ArrowRight size={20} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all"
        >
          View Our Work
        </motion.button>
      </div>
    </div>

    {/* Floating WhatsApp Icon */}
    <div className="fixed bottom-24 right-8 z-50">
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="bg-[#25D366] p-4 rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} color="white" fill="white" />
      </motion.div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="bg-white py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
          Building a successful digital product requires more than isolated frontend or backend expertise.
        </h2>
        <p className="text-xl text-blue-600 font-bold italic">
          At mTouch Labs, we provide experienced full stack developers in India who take ownership of complete product development, ensuring seamless integration, performance, and scalability.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Projects Delivered', value: '500+' },
          { label: 'Global Clients', value: '1050+' },
          { label: 'Years in Tech', value: '14+' },
          { label: 'Satisfaction Rate', value: '99%' },
        ].map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-black text-[#0A192F] mb-2">{stat.value}</div>
            <div className="text-gray-500 font-medium text-lg">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const EndToEndSection = () => {
  const services = [
    { title: 'Frontend Development', desc: 'Frontend interface development with modern frameworks.', icon: <Layout className="text-pink-400" /> },
    { title: 'Backend Architecture', desc: 'Backend system architecture for reliable performance.', icon: <Server className="text-purple-400" /> },
    { title: 'Database Design', desc: 'Database design and management for optimal data handling.', icon: <Database className="text-blue-400" /> },
    { title: 'API Development', desc: 'API development and integration for seamless connectivity.', icon: <Code2 className="text-gray-400" /> },
    { title: 'Cloud & DevOps', desc: 'Cloud deployment and DevOps support for scalable solutions.', icon: <Cloud className="text-blue-300" /> },
    { title: 'Security Implementation', desc: 'Security implementation across all layers of development.', icon: <ShieldCheck className="text-yellow-500" /> },
  ];

  return (
    <section className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-4">
            End-to-End Development <span className="text-blue-600">Under One Roof</span>
          </h2>
          <p className="text-gray-500 text-xl">This holistic approach reduces complexity and accelerates delivery.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0A192F] mb-4">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EngagementSection = () => {
  const models = [
    { title: 'Dedicated Full-Time', desc: 'Dedicated full-time engagement for your product development.', icon: <Users className="text-purple-400" /> },
    { title: 'Team Extension', desc: 'Team extension model to augment your existing team.', icon: <UserPlus className="text-purple-400" /> },
    { title: 'Product Outsourcing', desc: 'Complete product outsourcing from concept to delivery.', icon: <Briefcase className="text-orange-400" /> },
    { title: 'Offshore Collaboration', desc: 'Offshore development collaboration with agile processes.', icon: <Globe className="text-blue-400" /> },
  ];

  return (
    <section className="bg-[#050A15] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Flexible Engagement That <span className="text-blue-400">Matches</span> <span className="text-[#FFD700]">Your Roadmap</span>
          </h2>
          <p className="text-gray-400 text-xl">Scale up or down based on your growth phase.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {models.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-12 rounded-[40px] border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="mb-8">{m.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-6">{m.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const techs = [
    { name: 'React, Angular, Vue', icon: <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600"><Layout size={24} /></div> },
    { name: 'Node.js, PHP, .NET, Python', icon: <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600"><div className="w-4 h-4 bg-green-500 rounded-full" /></div> },
    { name: 'MySQL, PostgreSQL, MongoDB', icon: <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><Database size={24} /></div> },
    { name: 'AWS, Azure, GCP', icon: <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-400"><Cloud size={24} /></div> },
    { name: 'CI/CD pipelines and automation', icon: <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-400"><Code2 size={24} /></div> },
    { name: 'Rapid MVP development', icon: <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-400"><ShieldCheck size={24} /></div> },
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0A192F] mb-4">
            Technology Versatility That <span className="text-blue-500">Drives Results</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techs.map((t, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl flex items-center gap-6 hover:shadow-md transition-shadow cursor-default">
              {t.icon}
              <span className="text-xl font-bold text-[#0A192F]">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'Why hire full stack developers in India?', a: 'India offers experienced developers with multi-technology expertise and flexible hiring models at competitive costs.' },
    { q: 'Do full stack developers handle both frontend and backend?', a: 'Yes, our full stack developers are proficient in both client-side and server-side technologies, ensuring a cohesive development process.' },
    { q: 'Is full stack development suitable for enterprise projects?', a: 'Absolutely. Full stack development is ideal for enterprise projects as it ensures better integration and reduces communication overhead between teams.' },
    { q: 'Do you provide ongoing support?', a: 'Yes, we offer comprehensive post-launch support and maintenance to ensure your application remains up-to-date and performs optimally.' },
  ];

  return (
    <section className="bg-white py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#0A192F] text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`border rounded-2xl transition-all ${openIdx === idx ? 'border-blue-500 shadow-lg shadow-blue-50' : 'border-gray-200'}`}>
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className={`text-xl font-bold ${openIdx === idx ? 'text-blue-600' : 'text-[#0A192F]'}`}>{faq.q}</span>
                {openIdx === idx ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-500 text-lg leading-relaxed">
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

const CTASection = () => (
  <section className="bg-[#050A15] py-32 px-4 relative overflow-hidden">
     <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
     
     <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-12 tracking-tight">Build Complete Digital Solutions</h2>
        <p className="text-gray-400 text-2xl mb-16 max-w-4xl mx-auto leading-relaxed">
          If you're looking to hire full stack developers in India who understand both technology and business strategy, mTouch Labs is ready to collaborate. Create scalable, secure, and future-ready applications with confidence.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-[#7B2CBF] hover:bg-[#6A24A3] text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center gap-2 transition-all">
            Contact Us Today <ArrowRight size={24} />
          </button>
          <button className="bg-[#22C55E] hover:bg-green-600 text-white px-12 py-5 rounded-2xl font-bold text-xl flex items-center gap-2 transition-all">
            WhatsApp <ArrowRight size={24} />
          </button>
        </div>
     </div>
  </section>
);

export default function FullStackDeveloper() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-600">
      <Hero />
      <StatsSection />
      <EndToEndSection />
      <EngagementSection />
      <TechnologySection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
