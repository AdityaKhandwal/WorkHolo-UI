import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  MessageCircle
} from 'lucide-react';

// --- Components ---


const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="container-custom text-center relative z-10">
        <div className="flex items-center justify-center gap-2 text-[14px] text-gray-400 mb-6">
          <span>Home</span> <ChevronRight size={14} /> <span>Services</span> <ChevronRight size={14} /> <span className="text-[#f39c12]">Mobile App Development</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Mobile <span className="text-[#f39c12] italic">App Development</span> <br /> Company
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Custom iOS, Android, and cross-platform apps built for scalable growth.
        </p>
        <button className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-8 py-3.5 rounded-lg font-bold text-lg transition-all flex items-center gap-2 mx-auto">
          Contact Us <ArrowRight size={20} />
        </button>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00a8ff]/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Custom Mobile App Development',
      desc: 'Every organization has unique requirements. Our custom mobile app development services focus on creating solutions tailored to specific business workflows, user needs, and operational goals.',
      color: 'border-blue-500/20'
    },
    {
      id: '02',
      title: 'iOS App Development',
      desc: 'Our iOS developers create high-performance mobile applications optimized for Apple devices. Using technologies like Swift and Apple development frameworks, we build secure and reliable applications for iPhone and iPad users.',
      color: 'border-blue-500/20'
    },
    {
      id: '03',
      title: 'Android App Development',
      desc: 'We develop Android applications that provide consistent performance across multiple devices. Our Android developers focus on building scalable applications with intuitive interfaces and optimized performance.',
      color: 'border-blue-500/20'
    },
    {
      id: '04',
      title: 'Cross-Platform App Development',
      desc: 'To help businesses reach wider audiences efficiently, we build cross-platform mobile applications using frameworks such as Flutter and React Native. These technologies allow us to develop applications faster while maintaining strong performance.',
      color: 'border-orange-500/40'
    }
  ];

  return (
    <section className="py-24 bg-white text-[#05070a]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Mobile App <span className="text-[#f39c12]">Development Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our mobile app development services help businesses build innovative digital products that improve customer engagement and support business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className={`p-8 rounded-2xl border ${service.color} bg-gray-50 hover:shadow-xl transition-all group`}>
              <div className="w-12 h-12 bg-[#00a8ff] text-white rounded-lg flex items-center justify-center font-bold mb-6">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00a8ff] transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              {service.id === '02' && (
                <p className="text-[14px] text-gray-500">
                  Our <span className="text-blue-600 font-semibold">iOS developers</span> create high-performance...
                </p>
              )}
              {service.id === '03' && (
                <p className="text-[14px] text-gray-500">
                  We develop <span className="text-blue-600 font-semibold">Android applications</span> that provide...
                </p>
              )}
              {service.id === '04' && (
                <p className="text-[14px] text-gray-500">
                  ...using frameworks such as <span className="text-blue-600 font-semibold">Flutter</span> and <span className="text-blue-600 font-semibold">React Native</span>.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { id: '01', title: 'Discovery' },
    { id: '02', title: 'UI/UX Design' },
    { id: '03', title: 'Development' },
    { id: '04', title: 'Testing & QA' },
    { id: '05', title: 'Deployment' },
    { id: '06', title: 'Support' }
  ];

  return (
    <section className="py-24 bg-[#05070a]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Development <span className="text-[#f39c12]">Process</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured approach that ensures quality at every stage
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-blue-500 to-blue-500/20 hidden md:block"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="text-center group">
                <div className="w-16 h-16 bg-[#05070a] border-2 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <span className="text-xl font-bold">{step.id}</span>
                </div>
                <h4 className="font-bold text-lg">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Technologies = () => {
  const techs = [
    'Swift', 'Kotlin', 'Flutter', 'React Native', 'Firebase', 'Node.js', 'AWS', 
    'REST APIs', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Docker', 'CI/CD', 'Cloud Infrastructure'
  ];

  const stats = [
    { label: 'Frameworks & Languages', value: '14+' },
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'API Integrations', value: '50+' },
    { label: 'Apps Delivered', value: '1500+' }
  ];

  return (
    <section className="py-24 bg-white text-[#05070a]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Technologies <span className="text-[#f39c12]">We Use</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Our development team uses modern technologies to build scalable mobile applications. By selecting the right technology stack for each project, we ensure that applications remain secure, scalable, and future ready.
            </p>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-100 rounded-full text-[14px] font-medium text-gray-700 border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-[14px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { title: 'Healthcare', icon: '🏥' },
    { title: 'Fintech', icon: '💰' },
    { title: 'E-commerce', icon: '🛒' },
    { title: 'Logistics', icon: '🚚' },
    { title: 'Education', icon: '🎓' },
    { title: 'Real Estate', icon: '🏠' },
    { title: 'Travel & Hospitality', icon: '✈️' }
  ];

  return (
    <section className="py-24 bg-[#05070a]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Industries We <span className="text-[#f39c12]">Serve</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Our experience across multiple industries allows us to develop mobile applications tailored to specific business needs. Each industry requires unique digital solutions, and our team focuses on building applications that address real challenges and improve user engagement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((item) => (
            <div key={item.title} className="p-8 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-all group cursor-pointer">
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
              <h4 className="font-bold text-lg">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const features = [
    { title: 'iOS & Android Native', icon: '📱' },
    { title: 'Cross-Platform Apps', icon: '⚡' },
    { title: 'Enterprise Solutions', icon: '🏢' },
    { title: 'Scalable Architecture', icon: '🚀' }
  ];

  return (
    <section className="py-24 bg-white text-[#05070a]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Why Choose <span className="text-[#f39c12]">mTouch Labs</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                In today's competitive digital landscape, an app is not just a product — it is a business asset. Companies choose mTouch Labs because we align technology with business objectives and build scalable architectures from day one.
              </p>
              <p>
                We prioritize security and performance, deliver predictable timelines using agile methodology, and provide long-term support beyond launch. Our focus is on building mobile solutions that are sustainable, secure, and future-ready.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-8 bg-gray-50 border border-gray-200 rounded-2xl text-center hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h4 className="font-bold text-gray-800">{f.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What makes mTouch Labs different from other mobile app development companies?',
      a: 'We combine technical expertise with a deep understanding of business goals to deliver solutions that actually drive growth.'
    },
    {
      q: 'Do you support startups and enterprises?',
      a: 'Yes, we work with both early-stage startups to build MVPs and large enterprises to develop complex, scalable solutions.'
    },
    {
      q: 'Which platforms do you develop for?',
      a: 'We specialize in iOS (Swift), Android (Kotlin), and Cross-platform (Flutter, React Native) development.'
    },
    {
      q: 'Do you provide post-launch support?',
      a: 'Absolutely. We offer comprehensive maintenance and support packages to ensure your app stays updated and performs optimally.'
    },
    {
      q: 'What industries do you serve?',
      a: 'We have extensive experience in Healthcare, Fintech, E-commerce, Logistics, Education, Real Estate, and Travel.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 text-[#05070a]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-[#f39c12]">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our mobile development services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <button 
                className="w-full px-8 py-6 flex justify-between items-center text-left font-bold text-lg hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className={openIndex === i ? 'text-[#f39c12]' : ''}>{faq.q}</span>
                <ChevronDown size={20} className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
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

export default function MobileDevelopement() {
  return (
    <div className="min-h-screen selection:bg-[#00a8ff] selection:text-white">
      <Hero />
      <Services />
      <Process />
      <Technologies />
      <Industries />
      <WhyChoose />
      <FAQ />
      

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <button className="w-14 h-14 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative">
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Chat with us
          </span>
        </button>
        <button className="w-14 h-14 bg-[#00a8ff] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative">
          <ChevronDown className="rotate-180" size={32} />
          <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Back to top
          </span>
        </button>
      </div>

      {/* "Let's Chat" Badge */}
      <div className="fixed bottom-8 left-8 z-[100] hidden md:block">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
          <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center text-white">
            <MessageCircle size={24} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Let's Chat</div>
            <div className="text-sm font-bold">WE ARE ONLINE!</div>
          </div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
