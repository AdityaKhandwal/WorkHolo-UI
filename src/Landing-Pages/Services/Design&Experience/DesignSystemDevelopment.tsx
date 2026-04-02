import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Search,
  Layout,
  Palette,
  Smartphone,
  Accessibility,
  Check
} from 'lucide-react';

// --- Components ---


const Hero = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-20 md:py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 text-[12px] uppercase tracking-[0.2em] mb-8 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <a href="#" className="hover:text-white transition-colors">Services</a>
          <span>/</span>
          <span className="text-orange-500 font-bold">Design System Development</span>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6 tracking-tight"
        >
          Design System <span className="text-orange-500 italic">Development</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed"
        >
          Building Structured UI Foundations for Scalable Digital Products
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-sm md:text-base text-gray-400 max-w-2xl mx-auto italic"
        >
          WorkHolo Labs offers professional design system development services that establish unified visual and interaction standards across digital products. Consistency is not repetition — it is structured efficiency.
        </motion.p>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: LucideIcon, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4"
  >
    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
      <Icon size={32} />
    </div>
    <h3 className="font-display font-bold text-lg text-gray-900">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
  </motion.div>
);

const WhatIsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-8 leading-tight text-gray-900">
            What Is <span className="text-orange-500">Design System Development?</span>
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed font-sans">
            <p>
              Design system development involves creating a comprehensive set of reusable UI components, style guidelines, and documentation standards that ensure consistency across web and mobile platforms — including component libraries, typography, color frameworks, layout principles, interaction patterns, and accessibility guidelines.
            </p>
            <p>
              Design systems support our <a href="#" className="text-blue-500 font-bold underline">product design</a> and <a href="#" className="text-blue-500 font-bold underline">UI/UX design</a> services by ensuring visual harmony at scale.
            </p>
            <p>
              The objective is to align design and development workflows under one structured system that integrates with <a href="#" className="text-blue-500 font-bold underline">custom software development</a> and <a href="#" className="text-blue-500 font-bold underline">web development</a> projects.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FeatureCard 
            icon={Layout} 
            title="Component Libraries" 
            description="Modular UI components including buttons, inputs, and navigation."
          />
          <FeatureCard 
            icon={Palette} 
            title="Visual Standards" 
            description="Color hierarchies, typography scales, and spacing standards."
          />
          <FeatureCard 
            icon={Smartphone} 
            title="Cross-Platform" 
            description="Adaptable to web, mobile apps, and enterprise dashboards."
          />
          <FeatureCard 
            icon={Accessibility} 
            title="Accessibility" 
            description="Contrast ratio validation and assistive technology compatibility."
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label, highlight = false }: { value: string, label: string, highlight?: boolean }) => (
  <div className={`p-10 rounded-2xl border ${highlight ? 'border-orange-500/50 bg-orange-50/10' : 'border-gray-100 bg-white'} flex flex-col items-center justify-center text-center gap-2 shadow-sm`}>
    <span className="text-5xl font-display font-black text-blue-600">{value}</span>
    <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">{label}</span>
  </div>
);

const BusinessBenefits = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row-reverse gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 leading-tight text-gray-900">
            Business Benefits of <span className="text-orange-500">Design Systems</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">Design systems improve both efficiency and user clarity:</p>
          <ul className="space-y-4">
            {[
              "Faster product development cycles & reduced duplication",
              "Stronger brand consistency & improved collaboration",
              "Predictable user experience & scalable expansion",
              "Developer-aligned documentation & token-based specs",
              "Accessibility & compliance standards built in"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <Check className="text-orange-500" size={20} /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
          <StatCard value="100+" label="Systems Built" />
          <StatCard value="50%" label="Faster Dev Cycles" highlight />
          <StatCard value="A11y" label="WCAG Compliant" />
          <StatCard value="14+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
};

const CapabilityCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-6"
  >
    <span className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-lg">{number}</span>
    <h3 className="text-2xl font-display font-bold text-gray-900">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </motion.div>
);

const Capabilities = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-gray-900">
          Our Design System <span className="text-orange-500">Capabilities</span>
        </h2>
        <p className="text-lg text-gray-600">From component architecture to cross-platform governance</p>
      </div>
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <CapabilityCard 
          number="01" 
          title="Component Library" 
          description="Modular UI components including buttons, input fields, navigation systems, cards, containers, modal structures, and form elements — all documented for predictable usage."
        />
        <CapabilityCard 
          number="02" 
          title="Visual Identity Standards" 
          description="Color hierarchies, typography scales, iconography frameworks, grid systems, and spacing standards ensuring visual harmony at scale."
        />
        <CapabilityCard 
          number="03" 
          title="Cross-Platform Integration" 
          description="Design systems adaptable to web applications, mobile apps, enterprise dashboards, and SaaS platforms while maintaining consistency."
        />
        <CapabilityCard 
          number="04" 
          title="Dev Alignment" 
          description="Clear developer documentation, token-based design specifications, reusable code-ready components, and version control structures reducing team gaps."
        />
        <div className="md:col-span-2">
           <CapabilityCard 
            number="05" 
            title="Accessibility & Compliance" 
            description="Contrast ratio validation, scalable typography, assistive technology compatibility, and interaction clarity guidelines strengthening usability for all users."
          />
        </div>
      </div>
    </section>
  );
};

const ImplementationApproach = () => {
  const steps = [
    { id: 1, title: "Interface Audit" },
    { id: 2, title: "Component ID" },
    { id: 3, title: "Architecture" },
    { id: 4, title: "Documentation" },
    { id: 5, title: "Dev Alignment" },
    { id: 6, title: "Governance" }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-gray-900">
          Our Implementation <span className="text-orange-500">Approach</span>
        </h2>
        <p className="text-lg text-gray-600">Ensures adoption across teams, not just documentation.</p>
      </div>
      
      <div className="container mx-auto px-4 md:px-12 relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 hidden lg:block"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24 bg-white rounded-3xl shadow-md border border-gray-100 flex items-center justify-center text-center p-4 font-bold text-sm text-gray-800">
                  {step.title}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-gray-50">
                  {step.id}
                </div>
              </div>
              {step.id < 6 && <ArrowRight className="text-blue-200 lg:hidden" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const points = [
    "System-first design methodology",
    "Enterprise product experience",
    "Cross-platform standardization",
    "Developer-aligned documentation",
    "Scalable UI governance models",
    "Long-term system maintenance"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-gray-900">
          Why Choose <span className="text-orange-500">WorkHolo Labs?</span>
        </h2>
        <p className="text-lg text-gray-600">We build UI frameworks that support product growth, not restrict it.</p>
      </div>
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {points.map((point, i) => (
          <div key={i} className="bg-gray-50 px-8 py-4 rounded-full flex items-center gap-3 text-gray-700 font-medium border border-gray-100">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            {point}
          </div>
        ))}
      </div>
    </section>
  );
};

const IndustryCard = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => (
  <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center gap-6 hover:border-orange-500/30 transition-all group">
    <div className="text-blue-400 group-hover:scale-110 transition-transform">
      <Icon size={48} strokeWidth={1.5} />
    </div>
    <h3 className="font-display font-bold text-lg text-gray-900 text-center">{title}</h3>
  </div>
);

const Industries = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-gray-900">
          Industries We <span className="text-orange-500">Support</span>
        </h2>
      </div>
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <IndustryCard icon={Layout} title="SaaS & Product Companies" />
        <IndustryCard icon={Globe} title="Enterprise Technology" />
        <IndustryCard icon={Smartphone} title="FinTech Applications" />
        <IndustryCard icon={Mail} title="Healthcare Systems" />
        <IndustryCard icon={Search} title="eCommerce Solutions" />
        <IndustryCard icon={Layout} title="Corporate Internal Tools" />
      </div>
    </section>
  );
};

const ToolsSection = () => {
  const tags = [
    "Figma", "Storybook", "Design Tokens", "Tailwind CSS", "Material Design",
    "Chakra UI", "Radix UI", "Headless UI", "Styled Components", "CSS Variables",
    "Zeplin", "Chromatic", "Bit", "Lerna", "Rollup", "TypeScript", "WCAG 2.1",
    "Accessibility Audit"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-gray-900">
            Tools & Frameworks <span className="text-orange-500">We Use</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">Industry-standard design system and component platforms.</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span key={i} className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 border border-gray-100">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
          <StatCard value="100+" label="Systems Built" />
          <StatCard value="50%" label="Faster Dev" highlight />
          <div className="p-10 rounded-2xl border border-gray-100 bg-white flex flex-col items-center justify-center text-center gap-2 shadow-sm">
             <span className="text-5xl font-display font-black text-blue-600 italic">A11y</span>
             <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Compliant</span>
          </div>
          <StatCard value="14+" label="Years" />
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is design system development?",
      a: "Design system development involves creating a comprehensive set of reusable components, patterns, and guidelines that ensure consistency and efficiency across digital products."
    },
    {
      q: "How does a design system improve efficiency?",
      a: "By providing a single source of truth for both designers and developers, it reduces duplication of effort, speeds up the design-to-code process, and simplifies maintenance."
    },
    {
      q: "Is a design system suitable for startups?",
      a: "Yes, especially for startups planning to scale. Building a foundation early prevents technical and design debt later on."
    },
    {
      q: "Can a design system integrate with existing products?",
      a: "Absolutely. We specialize in auditing existing interfaces and incrementally implementing a design system without disrupting current operations."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-4 text-gray-900">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>
        <p className="text-lg text-gray-600">Everything about design system development</p>
      </div>
      <div className="container mx-auto px-4 md:px-12 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex justify-between items-center text-left font-display font-bold text-lg text-gray-900"
              >
                {faq.q}
                {openIndex === i ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-gray-400" />}
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

const CTA = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full"></div>
      <div className="container mx-auto px-4 md:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6">
          Build Your <span className="text-orange-500">Design System</span> Today
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's discuss how a structured design system can accelerate your product development.
        </p>
        <button className="bg-[#7B2CBF] hover:bg-[#6a24a3] text-white px-12 py-5 rounded-xl text-xl font-bold transition-all shadow-xl shadow-purple-500/20">
          Start Design System
        </button>
      </div>
    </section>
  );
};

export default function DesignSystemDevelopment() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <main>
        <Hero />
        <WhatIsSection />
        <BusinessBenefits />
        <Capabilities />
        <ImplementationApproach />
        <WhyChoose />
        <Industries />
        <ToolsSection />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
