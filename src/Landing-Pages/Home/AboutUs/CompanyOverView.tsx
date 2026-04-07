import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ArrowRight, 
  Check, 
  MessageCircle,
  ChevronRight,
  ShoppingCart,
  CreditCard,
  Stethoscope,
  Building2,
  Factory,
  Rocket
} from 'lucide-react';

// --- Components ---
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'blue';
};

const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base";

  const variants = {
    primary: "bg-[#7B2CBF] hover:bg-[#6A25A5] text-white",
    secondary: "bg-[#7B2CBF] hover:bg-[#E29722] text-white",
    blue: "bg-[#0085FF] hover:bg-[#0074E0] text-white",
    outline: "border-2 border-white/20 hover:bg-white/10 text-white"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-gray-900' : 'text-white'}`}
    >
      {title.split(' ').map((word, i) => (
        <span key={i} className={word.toLowerCase() === 'it' || word.toLowerCase() === 'services' || word.toLowerCase() === 'we' || word.toLowerCase() === 'serve' || word.toLowerCase() === 'digital' || word.toLowerCase() === 'transformation' || word.toLowerCase() === 'delivery' || word.toLowerCase() === 'approach' || word.toLowerCase() === 'commitment' || word.toLowerCase() === 'WorkHolo' || word.toLowerCase() === 'labs' ? 'text-[#7B2CBF]' : ''}>
          {word}{' '}
        </span>
      ))}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-3xl ${light ? 'text-gray-600' : 'text-gray-400'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

interface FAQ {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQ) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left font-semibold text-gray-800 hover:text-[#7B2CBF] transition-colors"
      >
        <span>{question}</span>
        <ChevronRight className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function CompanyOverview() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}

      {/* Navbar */}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-black pt-24 px-8 flex flex-col gap-6 lg:hidden"
          >
            {['Home', 'Services', 'Products', 'Resources', 'Portfolio', 'Careers', 'Contact Us'].map((item) => (
              <a key={item} href="#" className="text-2xl font-bold border-b border-white/10 pb-2" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
            <Button variant="blue" className="mt-4">
              Request Quote <ArrowRight size={20} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col bg-[#22034f] items-center justify-center text-center px-6 py-32 overflow-hidden bg-gradient-to-b from-black to-[#0B0E14]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0085FF] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B2CBF] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-white leading-[1.1] tracking-tight">
              Trusted <span className="text-[#7B2CBF]">IT Services</span> & Digital <br className="hidden md:block" /> Transformation Company
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
              Delivering Measurable Results
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto italic">
              Enterprise-Grade IT Services Backed by Real-World Experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Performance-Driven IT Solutions */}
      <section className="section-padding bg-[#0B0E14]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              title="Performance-Driven IT Solutions"
              subtitle="WorkHolo Labs is a performance-driven IT Services and Digital Transformation Company helping startups, SMEs, and enterprises build scalable digital ecosystems."
            />
            <p className="text-gray-400 mb-8 leading-relaxed">
              With proven experience in delivering secure, high-performance technology solutions, we specialize in transforming complex business challenges into efficient, automated, and growth-oriented systems.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our work spans across web, mobile, cloud, AI, CRM, and digital growth engineering — enabling businesses to modernize operations and increase measurable ROI.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Years of Experience', value: '14+', color: 'text-[#0085FF]' },
              { label: 'Projects Delivered', value: '1500+', color: 'text-[#0085FF]' },
              { label: 'Global Clients', value: '1200+', color: 'text-[#0085FF]' },
              { label: 'Tech Experts', value: '150+', color: 'text-[#0085FF]' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
            {[
              { label: 'Industries Served', value: '6+', color: 'text-[#0085FF]' },
              { label: 'Client Retention Rate', value: '98%', color: 'text-[#0085FF]' },
              { label: 'Faster Time to Market', value: '3x', color: 'text-[#0085FF]' },
              { label: 'Technical Support', value: '24/7', color: 'text-[#0085FF]' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={`text-4xl md:text-5xl font-black mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading 
              title="Who We Are"
              subtitle="WorkHolo Labs is a technology consulting and engineering company built on execution excellence, innovation, and long-term client partnerships."
            />
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Over the years, our team has delivered solutions across industries including eCommerce, FinTech, Healthcare, Real Estate, SaaS, and Manufacturing — focusing on scalability, automation, and digital optimization.
              </p>
              <p>
                As a modern Digital Transformation Company, we do not simply deploy tools — we redesign digital processes for performance, efficiency, and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core IT Services */}
      <section className="section-padding bg-[#F8F9FA] text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core <span className="text-[#7B2CBF]">IT Services</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: '01',
                title: 'Custom Software Development',
                desc: 'We design and develop scalable enterprise applications using modern frameworks and cloud-native architecture.',
                tags: ['React', 'Next.js', 'Angular', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
                bullets: ['Secure architecture', 'Performance optimization', 'API-driven integrations', 'Long-term maintainability']
              },
              {
                id: '02',
                title: 'Mobile App Development',
                desc: 'High-performance iOS and Android applications designed for usability, speed, and scalability.',
                bullets: ['Cross-platform architecture', 'User-first UI/UX design', 'Backend integration', 'App performance monitoring']
              },
              {
                id: '03',
                title: 'Cloud & DevOps Services',
                desc: 'We help businesses migrate, optimize, and manage secure cloud infrastructure as part of our advanced IT services.',
                bullets: ['Cloud migration strategy', 'Infrastructure automation', 'CI/CD implementation', 'Performance monitoring', 'Cost optimization']
              },
              {
                id: '04',
                title: 'Enterprise Digital Transformation',
                desc: 'We focus on reducing operational friction while improving speed, visibility, and scalability.',
                bullets: ['Digital maturity assessment', 'Legacy system modernization', 'Workflow automation', 'AI-powered analytics integration', 'Performance measurement & optimization']
              },
              {
                id: '05',
                title: 'AI, Automation & Data Solutions',
                desc: 'We integrate AI-driven solutions that enhance decision-making and reduce manual processes.',
                bullets: ['Business Intelligence dashboards', 'Predictive analytics', 'Process automation', 'CRM & ERP integrations']
              },
              {
                id: '06',
                title: 'Salesforce & CRM Solutions',
                desc: 'We provide CRM implementation, customization, and automation strategies to improve sales pipelines and customer lifecycle management.',
                bullets: []
              },
              {
                id: '07',
                title: 'Digital Marketing & Growth Engineering',
                desc: 'Beyond development, we support measurable growth through strategic marketing and analytics.',
                bullets: ['SEO strategy', 'Performance marketing', 'Conversion rate optimization', 'Analytics tracking & reporting']
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#0085FF] text-white rounded-lg flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                  {service.id}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#0085FF] transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.desc}
                </p>
                {service.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-500 text-xs rounded-full border border-gray-200">{tag}</span>
                    ))}
                  </div>
                )}
                {service.bullets.length > 0 && (
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[#7B2CBF] rounded-full mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Proven Delivery Approach */}
      <section className="section-padding bg-white text-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Proven <span className="text-[#7B2CBF]">Delivery Approach</span></h2>
          <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
            We follow a structured execution model that ensures transparency, accountability, and performance-driven outcomes.
          </p>
          
          <div className="relative flex flex-wrap justify-center gap-4 md:gap-0">
            {/* Connector Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden md:block z-0" />
            
            {[
              { step: 1, label: 'Discovery' },
              { step: 2, label: 'Strategy' },
              { step: 3, label: 'Architecture' },
              { step: 4, label: 'Development' },
              { step: 5, label: 'Testing' },
              { step: 6, label: 'Deployment' },
              { step: 7, label: 'Optimization' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center w-32 md:w-40 mb-8 md:mb-0"
              >
                <div className="w-8 h-8 bg-[#0085FF] text-white rounded-full flex items-center justify-center text-xs font-bold mb-4 shadow-lg border-4 border-white">
                  {item.step}
                </div>
                <div className="bg-white px-4 py-6 rounded-xl border border-gray-200 shadow-sm w-full text-center font-bold text-sm hover:border-[#0085FF] hover:text-[#0085FF] transition-all cursor-default">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose WorkHolo Labs */}
      <section className="section-padding bg-white text-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Businesses Choose <span className="text-[#7B2CBF]">WorkHolo Labs</span></h2>
            <p className="text-gray-600 mb-10 text-lg">
              Our focus is not just launching products — but building digital systems that evolve with business growth.
            </p>
            <ul className="space-y-6">
              {[
                'Strategic alignment between technology and business KPIs',
                'Scalable and secure architecture',
                'Agile project execution',
                'Long-term technical support',
                'Transparent communication',
                'Data-driven performance optimization'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 text-gray-700 font-medium"
                >
                  <Check className="text-[#7B2CBF]" size={20} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#7B2CBF]/10 rounded-3xl blur-2xl" />
            <img 
              src="https://WorkHololabs.com/assets/images/why-choose-us.png" 
              alt="Why Choose Us" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/business/800/600";
              }}
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-[#F8F9FA] text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries <span className="text-[#7B2CBF]">We Serve</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ShoppingCart size={32} />, title: 'eCommerce & Retail' },
              { icon: <CreditCard size={32} />, title: 'Financial Services & FinTech' },
              { icon: <Stethoscope size={32} />, title: 'Healthcare & HealthTech' },
              { icon: <Building2 size={32} />, title: 'Real Estate & PropTech' },
              { icon: <Factory size={32} />, title: 'Manufacturing & Supply Chain' },
              { icon: <Rocket size={32} />, title: 'SaaS & Startup Ecosystems' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-[#7B2CBF] mb-8 group-hover:scale-125 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold group-hover:text-[#7B2CBF] transition-colors">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes WorkHolo Labs Reliable */}
      <section className="section-padding bg-white text-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">What Makes WorkHolo Labs a Reliable <span className="text-[#7B2CBF]">Digital Transformation</span> Company?</h2>
          <p className="text-gray-600 mb-12 text-lg leading-relaxed">
            A true digital transformation partner must deliver measurable outcomes. WorkHolo Labs integrates strategy, engineering, and analytics to ensure transformation initiatives produce real operational improvements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Measurable business impact',
              'Technical depth',
              'Process optimization',
              'Secure infrastructure',
              'Long-term scalability'
            ].map((item, i) => (
              <span key={i} className="px-6 py-3 bg-gray-50 text-gray-700 rounded-full border border-gray-200 text-sm font-semibold flex items-center gap-2">
                <div className="w-2 h-2 bg-[#7B2CBF] rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white text-gray-900 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked <span className="text-[#7B2CBF]">Questions</span></h2>
          <div className="space-y-2">
            {[
              { q: 'What IT services does WorkHolo Labs provide?', a: 'We provide a comprehensive range of IT services including custom software development, mobile app development, cloud & DevOps solutions, enterprise digital transformation, AI & data analytics, and Salesforce consulting.' },
              { q: 'How does WorkHolo Labs approach digital transformation?', a: 'Our approach is strategy-first. We assess your current digital maturity, identify friction points, and design a roadmap that aligns technology with your business KPIs for measurable ROI.' },
              { q: 'Is WorkHolo Labs suitable for enterprise-level projects?', a: 'Yes, we specialize in enterprise-grade solutions. Our team has extensive experience building scalable, secure, and high-performance systems for large organizations across various industries.' },
              { q: 'What industries does WorkHolo Labs serve?', a: 'We serve a diverse range of industries including eCommerce, FinTech, Healthcare, Real Estate, Manufacturing, and SaaS startups.' },
              { q: 'How do I get started with WorkHolo Labs?', a: 'You can get started by clicking the "Request Quote" or "Connect With Our Team" buttons. We will schedule a discovery call to understand your requirements and provide a tailored solution.' }
            ].map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding bg-white text-gray-900 text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our <span className="text-[#7B2CBF]">Commitment</span></h2>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Our mission is to be a trusted global IT Services and Digital Transformation Company delivering innovative, secure, and scalable technology solutions that drive sustainable business success.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0B0E14] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#7B2CBF] via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Start Your Digital <span className="text-[#7B2CBF]">Transformation</span> Journey</h2>
          <p className="text-xl text-gray-400 mb-12">
            If your organization is ready to modernize operations, improve efficiency, and scale confidently, WorkHolo Labs is your strategic technology partner.
          </p>
          <Button variant="secondary" className="mx-auto px-10 py-4 text-lg">
            Connect With Our Team
          </Button>
        </div>
      </section>

      {/* Footer */}

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white"
        >
          <MessageCircle size={32} fill="white" className="text-[#25D366]" />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#0085FF] rounded-full flex items-center justify-center shadow-2xl text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowRight size={24} className="-rotate-90" />
        </motion.button>
      </div>

      {/* Chat Widget Mock */}
      <div className="fixed bottom-8 left-8 z-50 hidden md:block">
        <div className="bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-2xl">
          <div className="relative">
            <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src="https://WorkHololabs.com/assets/images/logo.png" alt="WorkHolo" className="w-10 m-auto mt-1" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
          </div>
          <div>
            <div className="text-xs text-gray-400 font-medium">Let's Chat!</div>
            <div className="text-sm font-bold">WE ARE <span className="text-[#7B2CBF]">HERE!</span></div>
          </div>
          <div className="w-6 h-6 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">1</div>
        </div>
      </div>
    </div>
  );
}
