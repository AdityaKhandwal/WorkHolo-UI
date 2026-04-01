import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  BarChart3, 
  Zap, 
  Monitor, 
  CreditCard, 
  HeartPulse, 
  ShoppingCart, 
  Briefcase, 
  Rocket,
  Plus,
  Minus,
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative overflow-hidden pt-20 pb-32 px-6">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
    </div>

    <div className="container-max text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="flex justify-center gap-2 text-xs font-medium text-gray-500 mb-8 uppercase tracking-widest">
          <span>Home</span> / <span>Services</span> / <span className="text-accent">Social Media Marketing</span>
        </nav>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Social Media <span className="text-accent italic">Marketing</span> Services
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
          Strategic Brand Growth Across Global Social Platforms
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          mTouch Labs delivers structured social media marketing services designed to strengthen brand visibility, audience engagement, and measurable growth across digital platforms. Strategy creates impact.
        </p>
      </motion.div>
    </div>
  </section>
);

const WhatIsSocial = () => (
  <section className="section-padding bg-darker/50">
    <div className="container-max grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          What Are <span className="text-accent">Social Media Marketing</span> Services?
        </h2>
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>
            Social media marketing services involve planning, managing, and optimizing brand presence across platforms to increase awareness, engagement, and conversions — including audience research, content planning, paid advertising, and performance analytics.
          </p>
          <p>
            Our social strategies integrate with <span className="text-blue-400 font-medium">content marketing</span> and <span className="text-blue-400 font-medium">SEO</span> for comprehensive digital growth.
          </p>
          <p>
            Combined with <span className="text-blue-400 font-medium">paid media</span> and <span className="text-blue-400 font-medium">performance marketing</span>, social campaigns amplify high-value audiences and drive measurable business outcomes.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        {[
          { icon: <Monitor className="text-blue-400" />, title: "Platform Strategy" },
          { icon: <Zap className="text-pink-400" />, title: "Paid Social" },
          { icon: <Users className="text-purple-400" />, title: "Community Growth" },
          { icon: <BarChart3 className="text-green-400" />, title: "Analytics" }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-all cursor-default group"
          >
            <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="section-padding">
    <div className="container-max grid lg:grid-cols-2 gap-20 items-center">
      <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
        {[
          { val: "300+", label: "Campaigns Managed" },
          { val: "5x", label: "Avg Engagement Lift" },
          { val: "Global", label: "Platform Reach" },
          { val: "14+", label: "Years Experience" }
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col items-center justify-center text-center gap-2 border-blue-500/20"
          >
            <span className="text-4xl font-black text-blue-500">{stat.val}</span>
            <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 lg:order-2"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Business Benefits of <span className="text-accent">Social Media</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10">Social platforms influence modern buying decisions:</p>
        <ul className="space-y-6">
          {[
            "Increased brand visibility & higher engagement",
            "Improved customer trust & better campaign reach",
            "Data-backed growth insights & multi-channel expansion",
            "B2B thought leadership & executive branding",
            "Integration with SEO & content marketing"
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-4 text-gray-300 text-lg">
              <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
              {text}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

const Capabilities = () => (
  <section className="section-padding bg-darker/30">
    <div className="container-max text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Social Media <span className="text-accent">Capabilities</span></h2>
      <p className="text-gray-400 text-lg">From strategy to scalable brand growth</p>
    </div>

    <div className="container-max grid md:grid-cols-2 gap-8">
      {[
        { id: "01", title: "Strategy Development", desc: "Platform selection, target audience alignment, content positioning, competitive benchmarking, and engagement objectives planning." },
        { id: "02", title: "Content & Brand Positioning", desc: "Brand storytelling, educational engagement, authority positioning, campaign-based messaging, and product awareness strategies." },
        { id: "03", title: "Paid Social Advertising", desc: "Performance campaigns across Meta, LinkedIn, emerging platforms, and retargeting to amplify high-value audiences." },
        { id: "04", title: "Community & Engagement", desc: "Engagement optimization, audience interaction, reputation management, brand trust reinforcement, and loyalty building." },
        { id: "05", title: "B2B & Enterprise Social", desc: "Thought leadership, executive brand amplification, industry-focused campaigns, LinkedIn authority building, and employer branding support." }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`glass-card p-10 flex flex-col gap-6 group hover:border-primary/50 transition-all ${i === 4 ? 'md:col-span-2' : ''}`}
        >
          <span className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">{item.id}</span>
          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
          <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Framework = () => (
  <section className="section-padding overflow-hidden">
    <div className="container-max text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Social Media <span className="text-accent">Framework</span></h2>
      <p className="text-gray-400 text-lg">Consistency and measurement drive results.</p>
    </div>

    <div className="container-max relative">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden lg:block" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
        {[
          { id: 1, title: "Strategy" },
          { id: 2, title: "Content" },
          { id: 3, title: "Deploy", active: true },
          { id: 4, title: "Amplify" },
          { id: 5, title: "Monitor" },
          { id: 6, title: "Refine" }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center gap-6">
            <div className={`w-32 h-20 rounded-2xl flex items-center justify-center relative transition-all duration-500 ${step.active ? 'bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.4)] scale-110' : 'bg-white/5 border border-white/10'}`}>
              <span className="font-bold text-sm tracking-widest uppercase">{step.title}</span>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold border-4 border-dark">
                {step.id}
              </div>
            </div>
            {i < 5 && <ArrowRight className="lg:hidden text-gray-600" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChoose = () => (
  <section className="section-padding bg-darker/50">
    <div className="container-max text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-accent">mTouch Labs</span>?</h2>
      <p className="text-gray-400 text-lg">We align brand presence with measurable business growth.</p>
    </div>

    <div className="container-max flex flex-wrap justify-center gap-4">
      {[
        "Strategy-first planning",
        "Data-driven paid amplification",
        "B2B & SaaS expertise",
        "SEO & content integration",
        "Transparent analytics",
        "Scalable global execution"
      ].map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white/10 transition-all cursor-default"
        >
          <div className="w-2 h-2 bg-accent rounded-full" />
          <span className="font-medium text-gray-200">{feature}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

const Industries = () => (
  <section className="section-padding">
    <div className="container-max text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We <span className="text-accent">Support</span></h2>
    </div>

    <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: <Monitor className="text-blue-400" />, title: "Technology & SaaS" },
        { icon: <CreditCard className="text-green-400" />, title: "Financial Services" },
        { icon: <HeartPulse className="text-red-400" />, title: "Healthcare" },
        { icon: <ShoppingCart className="text-orange-400" />, title: "eCommerce" },
        { icon: <Briefcase className="text-purple-400" />, title: "Enterprise B2B" },
        { icon: <Rocket className="text-pink-400" />, title: "Startup Growth" }
      ].map((industry, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="glass-card p-12 flex flex-col items-center text-center gap-6 hover:bg-white/10 transition-all group"
        >
          <div className="p-6 bg-white/5 rounded-3xl group-hover:bg-white/10 transition-colors">
            {industry.icon}
          </div>
          <h3 className="text-xl font-bold">{industry.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

const TechStack = () => (
  <section className="section-padding bg-darker/30">
    <div className="container-max grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Social Media <span className="text-accent">Technology Stack</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10">Enterprise social management and analytics platforms.</p>
        
        <div className="flex flex-wrap gap-3">
          {[
            "Meta Business Suite", "LinkedIn Campaign Manager", "Hootsuite", "Buffer",
            "Sprout Social", "Later", "Canva", "Adobe Creative Suite",
            "Google Analytics 4", "Facebook Pixel", "Meta Ads Manager",
            "LinkedIn Analytics", "Brandwatch", "Mention", "BuzzSumo", "Sprinklr",
            "HubSpot Social", "Zapier"
          ].map((tool, i) => (
            <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-400 font-medium hover:text-white transition-colors">
              {tool}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        {[
          { val: "300+", label: "Campaigns" },
          { val: "5x", label: "Engagement" },
          { val: "18+", label: "Tools" },
          { val: "14+", label: "Years" }
        ].map((stat, i) => (
          <div key={i} className="glass-card p-10 flex flex-col items-center text-center gap-2 border-blue-500/20">
            <span className="text-4xl font-black text-blue-500">{stat.val}</span>
            <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What are social media marketing services?", a: "Social media marketing services involve strategic planning, content creation, community management, and paid advertising across platforms like LinkedIn, Facebook, Instagram, and Twitter to drive business growth." },
    { q: "Is paid advertising necessary?", a: "While organic growth is important, paid advertising allows for precise targeting, faster results, and the ability to scale your reach to high-value audiences that organic posts might not reach." },
    { q: "Which platforms do you manage?", a: "We manage all major platforms including LinkedIn (B2B focus), Meta (Facebook/Instagram), Twitter (X), YouTube, and emerging platforms based on your target audience." },
    { q: "Can social media generate leads?", a: "Absolutely. Through targeted lead generation campaigns, strategic content, and conversion-optimized landing pages, social media is a powerful engine for both B2B and B2C lead generation." }
  ];

  return (
    <section className="section-padding">
      <div className="container-max text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-accent">Questions</span></h2>
        <p className="text-gray-400 text-lg">Everything about social media marketing</p>
      </div>

      <div className="container-max max-w-3xl space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 flex justify-between items-center text-left font-bold text-lg hover:bg-white/5 transition-colors"
            >
              {faq.q}
              {openIndex === i ? <Minus size={20} className="text-accent" /> : <Plus size={20} className="text-accent" />}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-gray-400 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="section-padding">
    <div className="container-max bg-gradient-to-br from-darker to-dark border border-white/10 rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-[100px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
          Grow Your <span className="text-accent">Social Presence</span>
        </h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how social media marketing can strengthen your brand and drive measurable growth.
        </p>
        <button className="bg-accent hover:bg-accent/90 text-dark px-12 py-5 rounded-xl font-black text-xl transition-all shadow-[0_10px_40px_rgba(245,158,11,0.3)] hover:scale-105">
          Start Social Strategy
        </button>
      </motion.div>
    </div>
  </section>
);

export default function SocialMediaMarketing() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <main>
        <Hero />
        <WhatIsSocial />
        <Benefits />
        <Capabilities />
        <Framework />
        <WhyChoose />
        <Industries />
        <TechStack />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
