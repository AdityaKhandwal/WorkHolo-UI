import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ChevronDown,
  Search,
  Smartphone,
  Layers,
  Target,
  CheckCircle2,
  ArrowRight,
  Monitor,
  ShoppingBag,
  HeartPulse,
  Truck,
  Building2,
  CreditCard,
  MessageSquare,
} from "lucide-react";

// --- Components ---

const Hero = () => {
  return (
    <section className="relative bg-[#050A18] pt-48 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="flex justify-center items-center gap-2 text-gray-400 text-[14px] font-medium mb-6 uppercase tracking-widest">
          <span>Home</span> <span className="text-gray-600">/</span>{" "}
          <span>Services</span> <span className="text-gray-600">/</span>{" "}
          <span className="text-orange-500">App Store Optimization</span>
        </div>
        <h1 className="text-4xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1]">
          App Store <span className="text-orange-500 italic">Optimization</span>{" "}
          Services
        </h1>
        <p className="text-lg lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
          Increasing App Visibility, Downloads & Long-Term Store Performance
        </p>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-[15px] lg:text-[17px] leading-relaxed">
          mTouch Labs provides professional ASO services designed to improve app
          discoverability, increase organic downloads, and enhance user
          acquisition performance across global marketplaces. App growth begins
          with discoverability.
        </p>
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
    </section>
  );
};

const WhatIsASO = () => {
  const services = [
    { icon: <Search className="text-blue-500" />, title: "Keyword Strategy" },
    {
      icon: <Layers className="text-purple-500" />,
      title: "Listing Optimization",
    },
    {
      icon: <Smartphone className="text-orange-500" />,
      title: "Visual Assets",
    },
    { icon: <Target className="text-green-500" />, title: "A/B Testing" },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050A18] mb-8">
            What Are <span className="text-orange-500">ASO Services</span>?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            App Store Optimization services improve a mobile app's ranking and
            visibility within Apple App Store and Google Play Store through
            keyword research, metadata refinement, visual asset optimization,
            and conversion rate improvement.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our ASO integrates with{" "}
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              mobile app development
            </span>{" "}
            and{" "}
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              mobile design
            </span>{" "}
            for end-to-end app growth.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-4 shadow-sm"
            >
              <div className="p-4 bg-white rounded-xl shadow-sm mb-2">
               {React.cloneElement(
  s.icon as React.ReactElement<{ size?: number }>,
  { size: 32 }
)}
              </div>
              <span className="font-bold text-[#050A18] text-lg">
                {s.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BusinessBenefits = () => {
  const stats = [
    { value: "200+", label: "Apps Optimized", color: "text-blue-600" },
    { value: "3x", label: "Avg Download Lift", color: "text-orange-500" },
    { value: "iOS", label: "& Android", color: "text-blue-600" },
    { value: "Global", label: "Marketplace", color: "text-blue-600" },
  ];

  const benefits = [
    "Increased organic downloads & reduced paid costs",
    "Improved app discoverability & higher conversion rates",
    "Stronger marketplace positioning & long-term sustainability",
    "Data-driven keyword research & structured A/B testing",
    "Integration with performance marketing teams",
  ];

  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center"
            >
              <div className={`text-5xl font-black mb-2 ${s.color}`}>
                {s.value}
              </div>
              <div className="text-gray-500 font-bold text-sm uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050A18] mb-8">
            Business Benefits of <span className="text-orange-500">ASO</span>
          </h2>
          <div className="flex flex-col gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2
                  className="text-orange-500 mt-1 shrink-0"
                  size={20}
                />
                <span className="text-gray-700 text-lg font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const items = [
    {
      id: "01",
      title: "Keyword & Metadata",
      desc: "High-intent search terms, competitive keyword gaps, ranking opportunities, store algorithm alignment, and structured metadata updates.",
    },
    {
      id: "02",
      title: "Listing Conversion",
      desc: "App titles, descriptions, feature highlights, value proposition clarity, and CTA messaging optimization for higher download rates.",
    },
    {
      id: "03",
      title: "Visual Assets",
      desc: "App icon strategy, screenshot storytelling, preview video positioning, and visual hierarchy for stronger first impressions.",
    },
    {
      id: "04",
      title: "A/B Testing",
      desc: "Title variations, screenshot sequencing, feature emphasis testing, and conversion rate benchmarking for data-backed improvements.",
    },
    {
      id: "05",
      title: "Analytics & Reporting",
      desc: "Keyword ranking tracking, install growth analysis, conversion rate performance, competitive benchmarking, and retention signal monitoring.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-[#050A18] mb-6">
            Our ASO <span className="text-orange-500 italic">Capabilities</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium">
            From keyword strategy to ranking monitoring
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-[#F8FAFC] p-10 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="bg-blue-500 text-white w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl mb-6">
                {item.id}
              </div>
              <h3 className="text-2xl font-black text-[#050A18] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Framework = () => {
  const steps = [
    { id: 1, title: "Market Analysis" },
    { id: 2, title: "Keywords" },
    { id: 3, title: "Listing" },
    { id: 4, title: "Visuals" },
    { id: 5, title: "A/B Test" },
    { id: 6, title: "Monitor" },
    { id: 7, title: "Optimize" },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-black text-[#050A18] mb-6">
          Our ASO <span className="text-orange-500 italic">Framework</span>
        </h2>
        <div className="relative flex flex-wrap justify-center gap-8 lg:gap-4 items-center">
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center gap-4 group">
                <div className="relative">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white border-2 border-gray-100 rounded-2xl shadow-lg flex items-center justify-center group-hover:border-blue-400 transition-all">
                    <span className="text-gray-800 font-bold text-sm lg:text-base">
                      {step.title}
                    </span>
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {step.id}
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block text-gray-200">
                  <ArrowRight size={24} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const reasons = [
    "Global marketplace expertise",
    "Data-driven keyword research",
    "Conversion-focused listings",
    "Structured A/B testing",
    "Performance marketing integration",
    "Continuous ranking tracking",
  ];

  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-black text-[#050A18] mb-6">
          Why Choose <span className="text-orange-500 italic">mTouch Labs</span>
          ?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 px-8 py-3 rounded-full shadow-sm flex items-center gap-3 hover:border-orange-400 transition-colors cursor-default"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-gray-700 font-bold">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { icon: <Monitor />, title: "SaaS & Mobile Products" },
    { icon: <CreditCard />, title: "FinTech Applications" },
    { icon: <ShoppingBag />, title: "eCommerce Apps" },
    { icon: <HeartPulse />, title: "Healthcare & Wellness" },
    { icon: <Truck />, title: "On-Demand Platforms" },
    { icon: <Building2 />, title: "Enterprise Mobile" },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-black text-[#050A18] text-center mb-20">
          Industries We <span className="text-orange-500 italic">Support</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col items-center text-center gap-6"
            >
              <div className="text-blue-500">
                {React.cloneElement(
                  ind.icon as React.ReactElement<{ size?: number }>,
                  { size: 32 },
                )}
              </div>
              <h3 className="text-xl font-black text-[#050A18]">{ind.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Tools = () => {
  const tools = [
    "App Annie",
    "Sensor Tower",
    "Mobile Action",
    "AppTweak",
    "SplitMetrics",
    "StoreMaven",
    "App Radar",
    "Keyword Tool",
    "App Store Connect",
    "Google Play Console",
    "Firebase",
    "Adjust",
    "AppsFlyer",
    "Mixpanel",
    "Amplitude",
    "TestFlight",
    "Google Experiments",
    "Localization",
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#050A18] mb-8">
            ASO{" "}
            <span className="text-orange-500 italic">Tools & Platforms</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="bg-[#F8FAFC] text-gray-600 px-4 py-2 rounded-lg text-sm font-bold border border-gray-100"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {["200+", "iOS", "Global", "14+"].map((v, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-50 text-center"
            >
              <div className="text-5xl font-black text-blue-600 mb-2">{v}</div>
              <div className="text-gray-500 font-bold text-sm uppercase">
                {["Apps Optimized", "& Android", "Markets", "Years"][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Executives = () => {
  const leaders = [
    {
      name: "Srinivas Rao",
      role: "CEO & Founder",
      image: "https://picsum.photos/seed/ceo/400/400",
    },
    {
      name: "Anitha Reddy",
      role: "Chief Operations Officer",
      image: "https://picsum.photos/seed/coo/400/400",
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Technology",
      image: "https://picsum.photos/seed/cto/400/400",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-black text-[#050A18] text-center mb-20">
          Our <span className="text-orange-500 italic">Executives</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden mb-8 border-8 border-[#F8FAFC] group-hover:border-[#7B2CBF]/20 transition-all">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-2xl font-black text-[#050A18] mb-2">
                {leader.name}
              </h3>
              <p className="text-[#7B2CBF] font-bold uppercase tracking-widest text-sm">
                {leader.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestJobs = () => {
  const jobs = [
    {
      title: "Senior Mobile App Developer",
      type: "Full Time",
      location: "Hyderabad, India",
    },
    { title: "ASO Specialist", type: "Remote", location: "Bangalore, India" },
    { title: "UI/UX Designer", type: "Full Time", location: "USA" },
    {
      title: "Digital Marketing Manager",
      type: "Full Time",
      location: "Hyderabad, India",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl lg:text-6xl font-black text-[#050A18] mb-4">
              Latest{" "}
              <span className="text-orange-500 italic">Job Openings</span>
            </h2>
          </div>
          <button className="bg-[#7B2CBF] hover:bg-[#6A24A3] text-white px-8 py-4 rounded-xl font-bold transition-all">
            View All Careers
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center group cursor-pointer"
            >
              <div>
                <h3 className="text-xl font-black text-[#050A18] mb-2 group-hover:text-[#7B2CBF] transition-colors">
                  {job.title}
                </h3>
                <div className="flex gap-4 text-gray-400 text-sm font-bold uppercase tracking-wider">
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#7B2CBF] group-hover:bg-[#7B2CBF] group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JointTalent = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto bg-[#7B2CBF] rounded-[40px] p-12 lg:p-24 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-7xl font-black text-white mb-8">
            Joint <span className="text-orange-400 italic">Talent</span> Network
          </h2>
          <p className="text-white/80 text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-medium">
            Not finding the right role? Join our talent community to stay
            updated on future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 px-8 py-5 rounded-2xl w-full sm:w-96 focus:outline-none focus:bg-white/20 transition-all font-bold"
            />
            <button className="bg-white text-[#7B2CBF] px-12 py-5 rounded-2xl font-black text-xl hover:bg-gray-100 transition-all">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      q: "What are app store optimization services?",
      a: "ASO services involve optimizing various elements of your app's store listing to improve its visibility and ranking.",
    },
    {
      q: "How long does ASO take to show results?",
      a: "Typically, you can start seeing initial ranking improvements within 2-4 weeks.",
    },
    {
      q: "Is ASO necessary if I run paid ads?",
      a: "Yes! ASO improves your conversion rate, which makes your paid ads more efficient.",
    },
    {
      q: "Do you optimize both Apple and Google Play?",
      a: "Absolutely. We understand the unique algorithms of both stores.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-black text-[#050A18] text-center mb-16">
          Frequently Asked{" "}
          <span className="text-orange-500 italic">Questions</span>
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold text-[#050A18]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
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

const BoostCTA = () => {
  return (
    <section className="py-32 px-6 bg-[#050A18] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-tight">
          Boost Your{" "}
          <span className="text-orange-500 italic">App Visibility</span>
        </h2>
        <button className="bg-[#7B2CBF] hover:bg-[#6A24A3] text-white px-12 py-5 rounded-xl font-black text-xl shadow-2xl shadow-[#7B2CBF]/20 transition-all transform hover:scale-105">
          Start App Optimization
        </button>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#7B2CBF] selection:text-white">
      <Hero />
      <WhatIsASO />
      <BusinessBenefits />
      <Capabilities />
      <Framework />
      <WhyChoose />
      <Industries />
      <Tools />
      <Executives />
      <LatestJobs />
      <JointTalent />
      <FAQ />
      <BoostCTA />
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40"
        >
          <MessageSquare size={28} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-500 text-white p-4 rounded-full shadow-2xl shadow-blue-500/40"
        >
          <ArrowRight className="-rotate-90" size={28} />
        </motion.button>
      </div>
    </div>
  );
}
