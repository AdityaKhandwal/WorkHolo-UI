import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Globe, 
  ChevronDown, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Minus,
  Smartphone,
  Palette,
  RefreshCw,
  Zap,
  Clock,
  Users,
  Headphones,
  ShoppingCart,
  HeartPulse,
  Building2,
  GraduationCap,
  Home as HomeIcon,
  Rocket,
} from 'lucide-react';

// --- Components ---

type Step = {
  id: string;
  title?: string;
  font?: string;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-dark/40 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-8"
        >
          Build Once · Deploy Everywhere
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter"
        >
          Cross-Platform <span className="text-brand-accent">App</span> <br />
          Development Company
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium"
        >
          mTouch Labs is a trusted Cross Platform App Development Company delivering high-performance 
          mobile applications that run seamlessly on iOS, Android, and web platforms using a single codebase.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12"
        >
          {[
            { label: 'Faster Development', value: '60%' },
            { label: 'Cost Savings', value: '40%' },
            { label: 'Apps Delivered', value: '200+' },
            { label: 'Code Reusability', value: '99%' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black mb-2">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Overview = () => {
  return (
    <section className="py-24 bg-brand-dark/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Overview</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            What is <span className="text-brand-accent">Cross Platform</span> App Development?
          </h2>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              Cross platform app development is the process of building mobile applications that function 
              across multiple operating systems — primarily iOS and Android — using a shared codebase.
            </p>
            <p>
              Instead of developing separate native apps, businesses can reduce development cost, 
              maintain a single code repository, ensure faster updates, deliver consistent user 
              experience, and scale efficiently across platforms.
            </p>
            <p>
              We help startups, SMEs, and enterprises reduce development time, optimize costs, 
              and accelerate time-to-market through modern cross-platform technologies such 
              as Flutter, React Native, and progressive frameworks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'Platforms, One Build', value: '2', icon: Smartphone },
            { label: 'Years of Expertise', value: '14+', icon: Clock },
            { label: 'Expert Developers', value: '50+', icon: Users },
            { label: 'Support & Maintenance', value: '24/7', icon: Headphones },
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group transition-all hover:bg-white/10"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <card.icon size={24} />
              </div>
              <span className="text-4xl font-black mb-2">{card.value}</span>
              <span className="text-xs font-bold opacity-60 leading-tight">{card.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const services = [
    {
      id: '01',
      title: 'Flutter App Development',
      desc: 'Build high-performance, natively compiled applications from a single Dart codebase using Google\'s Flutter framework.',
      points: ['High-performance UI rendering', 'Native-like experience', 'Faster MVP launches', 'Web & desktop support']
    },
    {
      id: '02',
      title: 'React Native Development',
      desc: 'JavaScript-powered mobile apps with reusable components and enterprise-grade scalability.',
      points: ['Reusable components', 'Seamless API integration', 'Enterprise-grade scalability', 'Large community & third-party plugins']
    },
    {
      id: '03',
      title: 'Hybrid App Development',
      desc: 'Web + Mobile compatibility optimized for multi-device performance across all platforms.',
      points: ['Web + Mobile compatibility', 'Optimized for multi-device performance', 'Progressive web app support', 'Single codebase for all platforms']
    },
    {
      id: '04',
      title: 'UI/UX Design for Cross-Platform',
      desc: 'Platform-adaptive designs that respect iOS and Android design guidelines while maintaining brand consistency.',
      points: ['Material Design & Cupertino patterns', 'Responsive layouts for all screen sizes', 'Accessibility-first approach', 'Design system creation']
    },
    {
      id: '05',
      title: 'API & Backend Integration',
      desc: 'Seamless connection to your existing systems, third-party APIs, and cloud services.',
      points: ['REST & GraphQL integration', 'Firebase & AWS backend services', 'Payment gateway integration', 'Real-time data synchronization']
    },
    {
      id: '06',
      title: 'Migration & Modernization',
      desc: 'Migrate your existing native apps to a unified cross-platform codebase without losing functionality.',
      points: ['Native to Flutter/React Native migration', 'Performance benchmarking', 'Feature parity validation', 'Zero-downtime transition']
    }
  ];

  return (
    <section className="py-24 bg-white text-brand-purple">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Our Cross Platform <span className="text-brand-accent">Development Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 hover:shadow-2xl hover:shadow-brand-purple/5 transition-all group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white font-black text-sm">
                  {service.id}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-6 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-3 text-sm font-medium text-gray-500">
                    <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: 'Lower development & maintenance cost', icon: ShoppingCart },
    { title: 'Faster time-to-market', icon: Zap },
    { title: 'Unified brand experience', icon: Palette },
    { title: 'Simplified updates', icon: RefreshCw },
    { title: 'Wider audience reach', icon: Globe },
    { title: 'Quick MVP for startups, scalable growth for enterprises', icon: Rocket },
  ];

  return (
    <section className="py-24 bg-gray-50 text-brand-purple">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Why Choose <span className="text-brand-accent">Cross Platform</span> Development?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 flex items-center gap-6 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                <benefit.icon size={24} />
              </div>
              <p className="font-bold text-sm leading-snug">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyMtouch = () => {
  return (
    <section className="py-24 bg-white text-brand-purple">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Our Edge</span>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            Why Choose <span className="text-brand-accent">mTouch Labs</span>?
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            As a forward-thinking Digital Transformation Company, we combine mobile engineering expertise 
            with strategic consulting. We focus not only on app development but on delivering measurable 
            business impact.
          </p>
          <ul className="space-y-4">
            {[
              'Modern frameworks (Flutter, React Native)',
              'Cloud-integrated mobile backend systems',
              'API & third-party integrations',
              'Secure architecture standards',
              'Performance optimization',
              'Long-term technical support'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 font-bold text-gray-700">
                <CheckCircle2 size={20} className="text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="bg-brand-dark rounded-[40px] p-12 text-white text-center flex flex-col items-center justify-center min-h-[400px] shadow-2xl">
            <h3 className="text-4xl font-black mb-6">Trusted by 200+ Clients</h3>
            <p className="text-white/70 mb-10 text-lg">
              From startups launching MVPs to enterprises scaling digital operations — we deliver results.
            </p>
            <button className="bg-brand-accent hover:bg-brand-accent/90 text-white px-10 py-4 rounded-full font-black flex items-center gap-3 transition-all transform hover:scale-105">
              Get Started <ArrowRight size={20} />
            </button>
          </div>
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-3xl -z-10 animate-bounce" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-purple/20 rounded-full -z-10 blur-2xl" />
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { name: 'eCommerce & Retail', icon: ShoppingCart },
    { name: 'Healthcare & HealthTech', icon: HeartPulse },
    { name: 'FinTech & Banking', icon: Building2 },
    { name: 'EdTech Platforms', icon: GraduationCap },
    { name: 'Real Estate & PropTech', icon: HomeIcon },
    { name: 'SaaS & Startups', icon: Rocket },
  ];

  return (
    <section className="py-24 bg-gray-50 text-brand-purple">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Domains</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Industries <span className="text-brand-accent">We Build For</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                <ind.icon size={32} />
              </div>
              <span className="font-black text-lg">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is cross platform app development?',
      a: 'Cross platform app development is building mobile apps that work on both iOS and Android using a single codebase. This approach saves time and money while maintaining high performance.'
    },
    {
      q: 'Is cross platform development better than native?',
      a: 'It depends on your needs. For 90% of business apps, cross-platform is better as it offers 99% native performance at 60% of the cost and time. Native is only preferred for extremely hardware-intensive apps like high-end games.'
    },
    {
      q: 'Which frameworks does mTouch Labs use?',
      a: 'We specialize in Flutter (Google) and React Native (Meta). We also work with progressive web technologies to ensure your app scales across all devices.'
    },
    {
      q: 'How long does cross platform development take?',
      a: 'A typical MVP takes 8-12 weeks, which is about 40% faster than developing separate native apps for iOS and Android.'
    }
  ];

  return (
    <section className="py-24 bg-white text-brand-purple">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Frequently Asked <span className="text-brand-accent">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-3xl overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full p-8 flex justify-between items-center text-left font-black text-lg hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                {openIdx === idx ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-blue-500" />}
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-gray-600 leading-relaxed">
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

const TechStack = () => {
  const techs = ['Flutter', 'React Native', 'Dart', 'TypeScript', 'Firebase', 'GraphQL', 'REST APIs', 'Redux', 'Riverpod', 'CI/CD'];

  return (
    <section className="py-24 bg-gray-50 text-brand-purple">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Tech Stack</span>
        <h2 className="text-4xl md:text-5xl font-black mb-8">
          Our <span className="text-brand-accent">Technology</span> Stack
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          We work with industry-leading cross-platform frameworks to ensure your app delivers 
          native-quality performance, smooth animations, and seamless device integration.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, idx) => (
            <span key={idx} className="px-8 py-3 bg-white rounded-full border border-gray-200 font-bold text-sm shadow-sm hover:shadow-md transition-all cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps: Step[] = [
    { id: '01', title: 'Requirement Analysis' },
    { id: '02', title: 'UX/UI Prototyping' },
    { id: '03', title: 'Architecture Selection' },
    { id: '04', font: 'Agile Development' },
    { id: '05', title: 'Cross-Device Testing' },
    { id: '06', title: 'Deployment & ASO' },
    { id: '07', title: 'Monitoring & Support' },
  ];

  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">How We Work</span>
        <h2 className="text-4xl md:text-5xl font-black mb-8">
          Our <span className="text-brand-accent">Development</span> Process
        </h2>
        <p className="text-white/60 max-w-3xl mx-auto mb-20 text-lg">
          We follow a structured and agile approach that ensures high performance, 
          security, and long-term scalability.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 font-black text-sm group-hover:border-brand-accent group-hover:bg-brand-accent transition-all">
                {step.id}
              </div>
              <span className="text-xs font-bold opacity-60 leading-tight">{step.title || step.font}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-brand-purple relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          Ready to Build Your <span className="text-brand-accent">Cross-Platform</span> App?
        </h2>
        <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto font-medium">
          Let's discuss your project requirements and find the perfect cross-platform solution for your business.
        </p>
        <button className="bg-white text-brand-purple px-12 py-5 rounded-full font-black text-lg flex items-center gap-3 mx-auto hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
          Get a Free Consultation <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default function CrossPlatformAppDevelopment() {
  return (
    <div className="font-sans selection:bg-brand-accent selection:text-white">
      <main>
        <Hero />
        <Overview />
        <Expertise />
        <Benefits />
        <WhyMtouch />
        <Industries />
        <TechStack />
        <Process />
        <FAQ />
        <CTA />
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative">
          <div className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Chat with us
          </div>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.597 6.011L0 24l6.135-1.61a11.747 11.747 0 005.911 1.586h.005c6.634 0 12.048-5.414 12.048-12.05a11.75 11.75 0 00-3.489-8.522z"/>
          </svg>
        </button>
        <button className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative">
          <div className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Scroll to top
          </div>
          <ChevronDown size={28} className="rotate-180" />
        </button>
      </div>
    </div>
  );
}
