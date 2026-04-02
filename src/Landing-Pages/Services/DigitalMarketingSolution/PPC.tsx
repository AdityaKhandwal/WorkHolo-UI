import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  ShoppingCart, 
  HeartPulse, 
  Building2, 
  Briefcase, 
  Rocket,
  MessageCircle,
  ArrowUp,
  Users,
  Star
} from 'lucide-react';

// --- Constants & Types ---

const PRIMARY_PURPLE = '#7B2CBF'; 

const capabilities = [
  {
    id: '01',
    title: 'Google Ads Management',
    description: 'Search campaigns, display advertising, Performance Max, Shopping ads, and YouTube advertising aligned with business goals and user intent.'
  },
  {
    id: '02',
    title: 'Social Media Advertising',
    description: 'Targeted campaigns across Meta (Facebook & Instagram), LinkedIn Ads for B2B targeting, and platform-specific audience strategies.'
  },
  {
    id: '03',
    title: 'Funnel Optimization',
    description: 'User acquisition funnels, retargeting sequences, customer journey stages, lead qualification flows, and conversion pathway engineering.'
  },
  {
    id: '04',
    title: 'Landing & Conversion',
    description: 'Landing page messaging, CTA placement, form structure, speed performance, and conversion tracking integration for full funnel alignment.'
  },
  {
    id: '05',
    title: 'Budget & Bid Management',
    description: 'Smart bidding frameworks, CPA monitoring, ROI-based allocation, performance benchmarking, and continuous budget refinement for sustainable performance.'
  }
];

const processSteps = [
  { id: 1, name: 'Planning' },
  { id: 2, name: 'Research' },
  { id: 3, name: 'Creation' },
  { id: 4, name: 'Launch' },
  { id: 5, name: 'Monitor' },
  { id: 6, name: 'Optimize' },
  { id: 7, name: 'Scale' }
];

const industries = [
  { name: 'SaaS & Technology', icon: <Monitor className="w-8 h-8 text-blue-500" /> },
  { name: 'eCommerce', icon: <ShoppingCart className="w-8 h-8 text-blue-500" /> },
  { name: 'Healthcare', icon: <HeartPulse className="w-8 h-8 text-blue-500" /> },
  { name: 'Financial Services', icon: <Building2 className="w-8 h-8 text-blue-500" /> },
  { name: 'Enterprise B2B', icon: <Briefcase className="w-8 h-8 text-blue-500" /> },
  { name: 'Startup Growth', icon: <Rocket className="w-8 h-8 text-blue-500" /> }
];

const techStack = [
  'Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 
  'Microsoft Ads', 'Google Analytics 4', 'Tag Manager', 'Looker Studio',
  'Optimizely', 'Unbounce', 'Hotjar', 'Facebook Pixel',
  'Google Merchant Center', 'SA360', 'DV360', 'CallRail', 'HubSpot',
  'Zapier', 'Supermetrics'
];

const faqs = [
  {
    question: 'What are PPC advertising services?',
    answer: 'PPC advertising services involve managing paid digital campaigns where advertisers pay only when users click — across search engines, social platforms, and display networks with keyword targeting, audience segmentation, bid optimization, and ROI analysis.'
  },
  {
    question: 'How quickly can PPC generate results?',
    answer: 'PPC can generate traffic almost immediately after a campaign is launched. However, optimization for conversions typically takes 2-4 weeks of data gathering.'
  },
  {
    question: 'Is PPC better than SEO?',
    answer: 'Neither is "better"; they serve different purposes. PPC provides immediate visibility and control, while SEO builds long-term organic authority. A balanced strategy often uses both.'
  },
  {
    question: 'How do you measure PPC success?',
    answer: 'We measure success through KPIs like ROAS (Return on Ad Spend), CPA (Cost Per Acquisition), Conversion Rate, and overall revenue growth.'
  }
];

const latestJobs = [
  { title: 'PPC Specialist', location: 'Hyderabad, India', type: 'Full-time' },
  { title: 'Digital Marketing Manager', location: 'Remote', type: 'Full-time' },
  { title: 'Performance Analyst', location: 'Bangalore, India', type: 'Contract' }
];

const executives = [
  { name: 'Srinivas Rao', role: 'CEO & Founder', image: 'https://picsum.photos/seed/exec1/200/200' },
  { name: 'Anjali Sharma', role: 'Head of Digital Strategy', image: 'https://picsum.photos/seed/exec2/200/200' },
  { name: 'David Wilson', role: 'Chief Technology Officer', image: 'https://picsum.photos/seed/exec3/200/200' }
];

// --- Components ---

const SectionHeading = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg ${light ? 'text-slate-400' : 'text-slate-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-semibold text-lg text-slate-800 hover:text-blue-600 transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PPC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* --- Top Bar --- */}
      <div className="bg-black text-white py-2 px-4 md:px-12 text-[11px] md:text-[13px] flex flex-wrap justify-between items-center gap-2 border-b border-white/10">
        <div className="flex items-center gap-4 flex-wrap">
          <a href="mailto:contact@WorkHololabs.com" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
            <Mail className="w-3 h-3" /> contact@WorkHololabs.com
          </a>
          <a href="tel:+919390683154" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
            <Phone className="w-3 h-3" /> +91 9390683154
          </a>
          <a href="tel:+15512220070" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
            <Phone className="w-3 h-3" /> +1 (551) 222-0070
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-yellow-500 font-bold">NASSCOM</span>
          <span>SME Inspire Awards 2026 🏆</span>
          <div className="hidden lg:flex items-center gap-3 ml-4 opacity-80">
            <span>Hyderabad</span> | <span>Bangalore</span> | <span>USA</span>
          </div>
        </div>
      </div>

      {/* --- Header --- */}

      {/* --- Hero Section --- */}
      <section className="bg-slate-950 text-white pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#7B2CBF,transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex justify-center items-center gap-2 text-sm text-slate-400 mb-8">
            <a href="#" className="hover:text-white">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-white">Services</a>
            <span>/</span>
            <span className="text-yellow-500">PPC Advertising</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            PPC <span className="text-yellow-500">Advertising</span> Services
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
          >
            Performance-Driven Paid Campaigns Focused on Measurable ROI
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            WorkHolo Labs delivers strategic PPC advertising services designed to generate qualified traffic, increase conversions, and optimize advertising spend. Paid traffic should produce measurable growth — not wasted spend.
          </motion.p>
        </div>
      </section>

      {/* --- What Are PPC Services --- */}
      <section className="py-24 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-slate-900">
            What Are <span className="text-yellow-500">PPC Advertising</span> Services?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            PPC advertising services involve managing paid digital campaigns where advertisers pay only when users click — across search engines, social platforms, and display networks with keyword targeting, audience segmentation, bid optimization, and ROI analysis.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Our PPC campaigns integrate with <a href="#" className="text-blue-600 font-semibold underline underline-offset-4">SEO strategies</a> for comprehensive visibility and <a href="#" className="text-blue-600 font-semibold underline underline-offset-4">CRO</a> for maximum conversion rates.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Combined with <a href="#" className="text-blue-600 font-semibold underline underline-offset-4">performance marketing</a>, we ensure every ad dollar drives measurable business outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: 'Precision Targeting', icon: '🎯' },
            { title: 'ROI Optimization', icon: '💰' },
            { title: 'Real-Time Analytics', icon: '📊' },
            { title: 'Continuous Testing', icon: '🔄' }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-bold text-slate-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Business Benefits --- */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            {[
              { val: '400+', label: 'Campaigns Managed' },
              { val: '3.5x', label: 'Avg ROAS' },
              { val: '35%', label: 'Lower CPA' },
              { val: '14+', label: 'Years Experience' }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center"
              >
                <div className="text-4xl font-black text-blue-500 mb-2">{stat.val}</div>
                <div className="text-sm font-bold text-slate-600 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Business Benefits of <span className="text-yellow-500">PPC Advertising</span>
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Paid advertising complements long-term organic growth:
            </p>
            <ul className="space-y-4">
              {[
                'Immediate traffic & high-intent audience targeting',
                'Measurable ROI & scalable growth strategy',
                'Faster lead acquisition & controlled budgets',
                'Cross-platform paid media expertise',
                'Conversion-optimized landing alignment'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Our PPC Capabilities --- */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading subtitle="From campaign planning to performance scaling">
          Our PPC <span className="text-yellow-500">Capabilities</span>
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div 
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all ${i === 4 ? 'md:col-span-2' : ''} bg-white group`}
            >
              <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:rotate-6 transition-transform">
                {cap.id}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{cap.title}</h3>
              <p className="text-slate-600 leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Execution Process --- */}
      <section className="py-24 px-4 bg-blue-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Structured cycle ensuring continuous performance improvement.">
            Our PPC <span className="text-yellow-500">Execution Process</span>
          </SectionHeading>
          
          <div className="relative flex flex-wrap justify-center gap-8 md:gap-4">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 hidden lg:block z-0" />
            
            {processSteps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border-2 border-blue-100 flex items-center justify-center mb-4 group-hover:border-blue-500 transition-colors">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold absolute -top-2 -right-2">
                    {step.id}
                  </div>
                  <span className="text-slate-800 font-bold text-sm">{step.name}</span>
                </div>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-blue-300 lg:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose --- */}
      <section className="py-24 px-4 text-center max-w-7xl mx-auto">
        <SectionHeading subtitle="We focus on profitable growth, not vanity metrics.">
          Why Choose <span className="text-yellow-500">WorkHolo Labs</span>?
        </SectionHeading>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {[
            'Performance-focused campaigns',
            'Data-backed decisions',
            'Conversion-optimized landing',
            'Cross-platform expertise',
            'Transparent analytics',
            'Continuous refinement'
          ].map((tag, i) => (
            <motion.div 
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-semibold shadow-sm flex items-center gap-2 hover:border-yellow-500 transition-colors"
            >
              <div className="w-2 h-2 bg-yellow-500 rounded-full" />
              {tag}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Industries We Support --- */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>
            Industries We <span className="text-yellow-500">Support</span>
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <motion.div 
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group"
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{ind.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Tech Stack --- */}
      <section className="py-24 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black mb-6 text-slate-900">
            PPC <span className="text-yellow-500">Technology Stack</span>
          </h2>
          <p className="text-slate-600 mb-10 text-lg">
            Enterprise paid media platforms and analytics tools.
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-bold border border-slate-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { val: '400+', label: 'Campaigns' },
            { val: '3.5x', label: 'Avg ROAS' },
            { val: '5+', label: 'Ad Platforms' },
            { val: '14+', label: 'Years' }
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center">
              <div className="text-4xl font-black text-blue-500 mb-2">{stat.val}</div>
              <div className="text-sm font-bold text-slate-500 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Our Leadership (Executives) --- */}
      <section id="executives" className="py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading subtitle="The experts driving your performance.">
          Our <span className="text-yellow-500">Leadership</span> Team
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {executives.map((exec, i) => (
            <motion.div 
              key={exec.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm text-center hover:shadow-xl transition-all"
            >
              <img 
                src={exec.image} 
                alt={exec.name} 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-slate-50"
                referrerPolicy="no-referrer"
              />
              <h3 className="text-xl font-bold text-slate-900">{exec.name}</h3>
              <p className="text-blue-500 font-medium">{exec.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Joint Talent Section --- */}
      <section id="joint-talent" className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Our collaborative ecosystem for top-tier digital professionals.">
            Joint <span className="text-yellow-500">Talent</span> Program
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                WorkHolo Labs' Joint Talent Program is a strategic initiative designed to bridge the gap between global enterprise needs and world-class digital talent.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Global Projects", icon: <Globe className="w-5 h-5" /> },
                  { title: "Flexible Models", icon: <Users className="w-5 h-5" /> },
                  { title: "Cutting-edge Tech", icon: <Rocket className="w-5 h-5" /> },
                  { title: "Continuous Growth", icon: <Star className="w-5 h-5" /> }
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <div className="text-blue-500">{item.icon}</div>
                    <span className="font-bold text-slate-800 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Why Join Us?</h3>
              <ul className="space-y-4">
                {[
                  "Work with Fortune 500 brands on high-impact campaigns",
                  "Access to premium tools and enterprise-grade platforms",
                  "Collaborative environment with industry-leading experts",
                  "Competitive compensation and performance-based incentives"
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Latest Jobs --- */}
      <section id="latest-jobs" className="py-24 px-4 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading light subtitle="Join our growing team of digital experts.">
            Latest <span className="text-yellow-500">Job Openings</span>
          </SectionHeading>
          <div className="grid gap-4">
            {latestJobs.map((job, i) => (
              <motion.div 
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-white/10 transition-colors"
              >
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-slate-400">{job.location} • {job.type}</p>
                </div>
                <button 
                  style={{ backgroundColor: PRIMARY_PURPLE }}
                  className="px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section id="faqs" className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Everything about PPC advertising">
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </SectionHeading>
          
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 px-4 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#7B2CBF,transparent_70%)]" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            Maximize Your <span className="text-yellow-500">Ad Performance</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Let's discuss how PPC can drive qualified leads and measurable revenue growth.
          </p>
          <button 
            style={{ backgroundColor: PRIMARY_PURPLE }}
            className="px-10 py-5 rounded-xl text-xl font-black text-white shadow-2xl shadow-purple-500/20 hover:scale-105 transition-transform active:scale-95"
          >
            Start Your PPC Campaign
          </button>
        </div>
      </section>

      {/* --- Footer --- */}

      {/* --- Floating Widgets --- */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        {showScrollTop && (
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
        <div className="relative group">
          <div className="absolute -top-12 right-0 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Let's <span className="text-yellow-500">CHAT!</span> HE...
          </div>
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-100">
            <MessageCircle className="w-8 h-8 text-slate-800" />
            <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              1
            </div>
          </button>
        </div>
        <button className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform overflow-hidden">
          <div className="absolute inset-0 bg-green-400 animate-ping opacity-20 rounded-full" />
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
      </div>

    </div>
  );
};
