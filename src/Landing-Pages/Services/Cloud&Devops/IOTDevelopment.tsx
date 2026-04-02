import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Cloud, 
  BarChart3, 
  ShieldCheck, 
  Factory, 
  Stethoscope, 
  Building2, 
  Truck, 
  Zap, 
  Sprout,
  MessageCircle,
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0B0D17]">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center space-x-2 text-sm font-medium opacity-60 mb-6">
            <span>Home</span>
            <span>/</span>
            <span>Services</span>
            <span>/</span>
            <span className="text-brand-accent">IoT Development</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.1]">
            Best <span className="text-brand-accent italic">IoT Development</span> Company <br /> in India
          </h1>
          
          <p className="text-xl lg:text-2xl font-semibold mb-10 opacity-90">
            Secure, Scalable & Intelligent IoT Solutions
          </p>
          
          <p className="max-w-3xl mx-auto text-lg opacity-70 leading-relaxed mb-12">
            WorkHolo Labs is a leading IoT development company in India delivering intelligent, secure, and scalable Internet of Things solutions for enterprises. We design, develop, and deploy IoT ecosystems that connect devices, collect real-time data, automate workflows, and enable predictive decision-making.
          </p>
        </motion.div>
      </div>

      {/* Floating WhatsApp Icon */}
      <div className="fixed bottom-10 right-10 z-50">
        <div className="relative group">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
          <button className="bg-[#25D366] p-4 rounded-full shadow-2xl relative z-10 hover:scale-110 transition-transform">
            <MessageCircle className="w-8 h-8 text-white fill-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

const WhatIsIoT = () => {
  const cards = [
    { icon: <Cpu className="w-8 h-8 text-blue-400" />, title: 'Device Connectivity' },
    { icon: <Cloud className="w-8 h-8 text-purple-400" />, title: 'Cloud Integration' },
    { icon: <BarChart3 className="w-8 h-8 text-green-400" />, title: 'Real-Time Analytics' },
    { icon: <ShieldCheck className="w-8 h-8 text-orange-400" />, title: 'Security Architecture' },
  ];

  return (
    <section className="py-24 bg-[#0B0D17]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
            What Is <span className="text-brand-accent">IoT Development</span>?
          </h2>
          <div className="space-y-6 text-lg opacity-80 leading-relaxed">
            <p>
              IoT development involves designing and building connected systems that enable devices, sensors, and applications to communicate, collect data, and automate processes through <span className="text-blue-400 font-semibold">cloud infrastructure</span>.
            </p>
            <p>
              A professional IoT development company provides device connectivity solutions, cloud integration, real-time data processing, IoT dashboard development, edge computing implementation, and security architecture.
            </p>
            <p>
              Our <span className="text-blue-400 font-semibold underline underline-offset-4">IoT app development services</span> enable smarter operations and improved decision-making powered by <span className="text-blue-400 font-semibold">AWS IoT</span> and Azure IoT Hub platforms.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center space-y-4"
            >
              {card.icon}
              <h3 className="font-bold text-lg">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyAmongBest = () => {
  const stats = [
    { value: '14+', label: 'Years Experience' },
    { value: '100+', label: 'IoT Projects' },
    { value: '3', label: 'Cloud Platforms' },
    { value: '24/7', label: 'Monitoring' },
  ];

  const benefits = [
    'Engineering-driven architecture & secure IoT protocols',
    'Cloud-native scalability with AWS IoT & Azure IoT Hub',
    'Real-time analytics & dashboard expertise',
    'Industry-specific IoT solutions for manufacturing & healthcare',
    'Long-term maintenance support & optimization',
  ];

  return (
    <section className="py-24 bg-[#0B0D17]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-10 rounded-2xl text-center">
              <div className="text-5xl font-black text-blue-500 mb-2">{stat.value}</div>
              <div className="text-sm font-bold opacity-60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
            Why WorkHolo Labs Is Among the <span className="text-brand-accent">Best IoT Companies</span>
          </h2>
          <p className="text-lg opacity-80 mb-8">
            We combine hardware integration knowledge with cloud engineering capabilities:
          </p>
          <ul className="space-y-4">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                <span className="text-lg opacity-90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'Custom IoT Applications',
      desc: 'Smart device control systems, industrial IoT platforms, asset tracking solutions, predictive maintenance systems, and remote monitoring applications.',
    },
    {
      id: '02',
      title: 'Device Integration & Connectivity',
      desc: 'Secure communication between sensors, embedded systems, gateways, mobile apps, and cloud platforms ensuring seamless device-to-cloud interaction.',
    },
    {
      id: '03',
      title: 'IoT Cloud Integration',
      desc: 'Integration with AWS IoT, Azure IoT Hub, and custom cloud infrastructure providing secure, scalable data processing and storage.',
    },
    {
      id: '04',
      title: 'Analytics & Dashboards',
      desc: 'Intelligent dashboards with real-time monitoring, data visualization, alert systems, performance analytics, and predictive insights.',
    },
    {
      id: '05',
      title: 'Industrial IoT (IIoT) Solutions',
      desc: 'Smart factory automation, equipment performance tracking, supply chain visibility systems, and energy management solutions for manufacturing and enterprise sectors.',
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-[#0B0D17]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Our IoT <span className="text-brand-accent">Development Services</span>
          </h2>
          <p className="text-xl opacity-70">End-to-end IoT solutions from device to cloud</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`bg-white p-10 rounded-2xl shadow-xl border border-slate-100 ${idx === 4 ? 'md:col-span-2' : ''}`}
            >
              <div className="bg-[#0095FF] text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl mb-6">
                {service.id}
              </div>
              <h3 className="text-2xl font-extrabold mb-4">{service.title}</h3>
              <p className="text-lg opacity-70 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const stats = [
    { value: '3', label: 'Cloud Platforms' },
    { value: '20+', label: 'IoT Technologies' },
    { value: 'MQTT', label: 'Protocol Experts' },
    { value: '24/7', label: 'Device Monitoring' },
  ];

  const tags = [
    'AWS IoT Core', 'Azure IoT Hub', 'Google Cloud IoT', 'MQTT', 'CoAP',
    'Raspberry Pi', 'Arduino', 'ESP32', 'Node-RED', 'Kafka', 'InfluxDB',
    'Grafana', 'Docker', 'Kubernetes', 'Python', 'Node.js', 'REST APIs',
    'BLE', 'Zigbee', 'LoRaWAN'
  ];

  return (
    <section className="py-24 bg-white text-[#0B0D17]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
            IoT Development <span className="text-brand-accent">Technology Stack</span>
          </h2>
          <p className="text-lg opacity-70 mb-10">
            Enterprise IoT platforms and connectivity frameworks.
          </p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span key={tag} className="bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold opacity-80 border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl text-center border border-slate-100 shadow-lg">
              <div className="text-5xl font-black text-blue-500 mb-2">{stat.value}</div>
              <div className="text-sm font-bold opacity-60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { icon: <Factory className="w-10 h-10 text-blue-500" />, name: 'Manufacturing' },
    { icon: <Stethoscope className="w-10 h-10 text-purple-500" />, name: 'Healthcare' },
    { icon: <Building2 className="w-10 h-10 text-green-500" />, name: 'Smart Cities' },
    { icon: <Truck className="w-10 h-10 text-orange-500" />, name: 'Logistics & Transportation' },
    { icon: <Zap className="w-10 h-10 text-yellow-500" />, name: 'Energy & Utilities' },
    { icon: <Sprout className="w-10 h-10 text-emerald-500" />, name: 'Agriculture' },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] text-[#0B0D17]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-16">
          Industries We <span className="text-brand-accent">Serve</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-12 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-6"
            >
              {industry.icon}
              <h3 className="text-xl font-extrabold">{industry.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { name: 'Requirements', id: 1 },
    { name: 'Architecture', id: 2 },
    { name: 'Device Integration', id: 3 },
    { name: 'Cloud Deploy', id: 4 },
    { name: 'Security', id: 5 },
    { name: 'Testing', id: 6 },
    { name: 'Monitoring', id: 7 },
  ];

  return (
    <section className="py-24 bg-white text-[#0B0D17] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Our IoT <span className="text-brand-accent">Development Process</span>
          </h2>
          <p className="text-xl opacity-70">Structured lifecycle ensuring system stability and scalability.</p>
        </div>
        
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-white border-2 border-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="font-bold text-xs leading-tight px-2">{step.name}</span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {step.id}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-blue-300 lg:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
            Why Choose <span className="text-brand-accent">WorkHolo Labs</span>?
          </h2>
          <p className="text-xl opacity-70 mb-12">We deliver reliable IoT ecosystems with enterprise-grade security.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Engineering-driven architecture',
              'Secure IoT communication protocols',
              'Cloud-native scalability',
              'Real-time analytics expertise',
              'Industry-specific IoT solutions',
              'Long-term maintenance support'
            ].map((pill) => (
              <div key={pill} className="bg-white px-8 py-3 rounded-full shadow-md border border-slate-100 font-bold text-slate-700 flex items-center">
                <div className="w-2 h-2 bg-brand-accent rounded-full mr-3" />
                {pill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What does an IoT development company do?',
      a: 'An IoT development company designs and builds connected systems that allow physical devices to communicate with each other and with cloud platforms. This includes hardware integration, firmware development, cloud connectivity, and data visualization.',
    },
    {
      q: 'Why choose an IoT development company in India?',
      a: 'India offers a large pool of skilled engineers, cost-effective development, and expertise in both hardware and software integration. Companies like WorkHolo Labs provide global-standard IoT solutions at competitive prices.',
    },
    {
      q: 'How secure are IoT solutions?',
      a: 'Security is paramount in IoT. We implement end-to-end encryption, secure device authentication, regular security audits, and follow industry-standard protocols like MQTT with TLS to ensure data integrity and privacy.',
    },
    {
      q: 'Do you provide enterprise IoT solutions?',
      a: 'Yes, we specialize in enterprise-grade IoT solutions for manufacturing, healthcare, smart cities, and logistics. Our systems are built to scale and integrate seamlessly with existing enterprise infrastructure.',
    },
  ];

  return (
    <section className="py-24 bg-white text-[#0B0D17]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center mb-4">
          Frequently Asked <span className="text-brand-accent">Questions</span>
        </h2>
        <p className="text-center opacity-70 mb-16">Everything about IoT development in India</p>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full py-6 flex justify-between items-center text-left font-bold text-xl hover:text-blue-600 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-6 h-6 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-lg opacity-70 leading-relaxed">{faq.a}</p>
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

const CTA = () => {
  return (
    <section className="py-32 bg-[#0B0D17] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
          Build Your <span className="text-brand-accent">IoT Ecosystem</span> Today
        </h2>
        <p className="text-xl lg:text-2xl opacity-80 mb-12 max-w-3xl mx-auto">
          Let's discuss how IoT can transform your operations with intelligent, connected solutions.
        </p>
        <button className="bg-brand-accent hover:bg-orange-600 text-[#0B0D17] px-12 py-5 rounded-xl font-black text-xl transition-all shadow-2xl shadow-orange-500/20">
          Start Your IoT Project
        </button>
      </div>
    </section>
  );
};

// --- Main App ---

export default function IOTDevelopment() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-[#0B0D17]">
      <main>
        <Hero />
        <WhatIsIoT />
        <WhyAmongBest />
        <Services />
        <TechStack />
        <Industries />
        <Process />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
