import React, { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ChevronDown,  
  Globe, 
  Check, 
  Smartphone, 
  ShieldCheck, 
  Zap,
} from 'lucide-react';

// --- Components ---


const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[#15013d] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_transparent_50%)]"></div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4">
          <span className="text-white/80 text-sm font-medium uppercase tracking-[0.2em]">Home / Services / iOS App Development</span>
        </div>
        
        <h1 className="text-white text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
          iOS <span className="text-[#7B2CBF]">App Development</span> Company
        </h1>
        
        <h2 className="text-white/90 text-2xl lg:text-3xl font-bold mb-8">
          Secure, Scalable & High-Performance iPhone Applications
        </h2>
        
        <p className="text-white/80 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          mTouch Labs is a professional iOS app development company delivering custom iPhone and iPad applications engineered for performance, security, and seamless user experience — from startup MVPs to enterprise-grade applications.
        </p>
      </div>
    </section>
  );
};

const IntroSection = () => {
  const features = [
    { icon: <Zap className="text-[#7B2CBF]" />, title: "Swift Native", desc: "Swift-based native development for high performance." },
    { icon: <Smartphone className="text-[#7B2CBF]" />, title: "iPhone & iPad", desc: "Optimized for all Apple devices and screen sizes." },
    { icon: <ShieldCheck className="text-[#7B2CBF]" />, title: "App Store Compliant", desc: "Strict adherence to Apple's HIG and App Store guidelines." },
    { icon: <Globe className="text-[#7B2CBF]" />, title: "High Performance", desc: "Optimized backend and frontend for speed." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#050505] leading-tight mb-8">
            How is an <span className="text-[#7B2CBF]">iOS App Development</span> and Company Builds and Delivers Mobile Apps?
          </h2>
          <p className="text-[#666666] text-lg leading-relaxed mb-6">
            An iOS app development company specializes in designing, developing, testing, and deploying applications for Apple devices using Swift and native iOS frameworks.
          </p>
          <p className="text-[#666666] text-lg leading-relaxed mb-8">
            Professional iOS development ensures optimized performance on Apple devices, secure data handling, smooth UI animations, App Store compliance, and long-term scalability. Our <span className="text-[#0096FF] font-bold cursor-pointer">UI/UX design team</span> ensures every interface follows Apple Human Interface Guidelines while delivering engaging user experiences.
          </p>
          <p className="text-[#666666] text-lg leading-relaxed">
            We combine intuitive interface design, optimized backend architecture, and App Store-compliant engineering standards to deliver solutions built to scale. Whether you need a consumer app, an <span className="text-[#0096FF] font-bold cursor-pointer">enterprise mobility solution</span>, or a <span className="text-[#0096FF] font-bold cursor-pointer">cross-platform application</span>, our iOS expertise covers it all.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center group hover:border-[#0096FF] transition-all">
              {/* <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0096FF]/10 transition-all">
                {React.cloneElement(f.icon as React.ReactElement, { size: 32 })}
              </div> */}
              <h3 className="text-xl font-bold text-[#050505] mb-2">{f.title}</h3>
              <p className="text-[#666666] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "735+", label: "iOS Apps Delivered", color: "text-[#0096FF]" },
    { value: "Swift", label: "Native Development", color: "text-[#0096FF]" },
    { value: "99%", label: "App Store Approval", color: "text-[#0096FF]" },
    { value: "14+", label: "Years Experience", color: "text-[#0096FF]" }
  ];

  const features = [
    "Data encryption & secure API communication",
    "Role-based access control",
    "High-performance memory management",
    "Battery efficiency optimization",
    "Apple Human Interface Guidelines compliance"
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm text-center">
              <h3 className={`text-5xl font-extrabold mb-2 ${s.color}`}>{s.value}</h3>
              <p className="text-[#666666] font-medium">{s.label}</p>
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#050505] leading-tight mb-6">
            Security & <span className="text-[#7B2CBF]">Performance</span> Standards
          </h2>
          <p className="text-[#666666] text-lg mb-8">Our iOS applications include enterprise-grade security:</p>
          <ul className="space-y-4">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 bg-[#7B2CBF]/10 p-1 rounded">
                  <Check size={18} className="text-[#7B2CBF]" />
                </div>
                <span className="text-[#333333] text-lg font-medium">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { id: "01", title: "Custom iOS Apps", desc: "Consumer apps, enterprise mobility, on-demand services, marketplace platforms, and subscription applications using Swift." },
    { id: "02", title: "UI/UX Design for iOS", desc: "Apple HIG compliance, intuitive navigation, accessibility optimization, responsive layouts, and engagement-driven design." },
    { id: "03", title: "Architecture & Engineering", desc: "Swift-based native development, modular code, API-driven backends, secure authentication, and performance optimization." },
    { id: "04", title: "App Store Deployment", desc: "Submission, compliance review, performance testing, metadata optimization, and version updates & enhancements." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#050505] mb-4">
            Our iOS <span className="text-[#7B2CBF]">Development Services</span>
          </h2>
          <p className="text-[#666666] text-lg">From consumer apps to enterprise mobility</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div key={i} className={`p-10 rounded-2xl border ${i === 3 ? 'border-[#7B2CBF] bg-white' : 'border-gray-100 bg-[#F8F9FA]'} transition-all hover:shadow-xl`}>
              <span className="inline-block bg-[#0096FF] text-white px-3 py-1 rounded-md text-xs font-bold mb-6">{s.id}</span>
              <h3 className="text-2xl font-bold text-[#050505] mb-4">{s.title}</h3>
              <p className="text-[#666666] leading-relaxed text-lg">{s.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-[#F8F9FA] p-10 rounded-2xl border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <span className="inline-block bg-[#0096FF] text-white px-3 py-1 rounded-md text-xs font-bold w-fit">05</span>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#050505] mb-2">Enterprise iOS Solutions</h3>
              <p className="text-[#666666] leading-relaxed text-lg">
                Secure internal business apps, field workforce mobility, real-time reporting, cloud-integrated platforms, and multi-role access. Explore our full <span className="text-[#0096FF] font-bold cursor-pointer">mobile app development services</span> for multi-platform needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { id: 1, label: "Requirements" },
    { id: 2, label: "Wireframing" },
    { id: 3, label: "UI Design" },
    { id: 4, label: "Development" },
    { id: 5, label: "QA Testing", active: true },
    { id: 6, label: "Optimization" },
    { id: 7, label: "App Store" }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#050505] mb-4">
          Our iOS <span className="text-[#7B2CBF]">Development Process</span>
        </h2>
        <p className="text-[#666666] text-lg mb-16">We follow a structured lifecycle for reliable and predictable delivery.</p>
        
        <div className="relative flex flex-wrap justify-center items-center gap-4 lg:gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-2xl border-2 flex flex-col items-center justify-center relative ${step.active ? 'border-[#0096FF] bg-[#0096FF]/5 shadow-[0_0_20px_rgba(0,150,255,0.2)]' : 'border-gray-100 bg-white'}`}>
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#0096FF] text-white rounded-full flex items-center justify-center text-xs font-bold">{step.id}</span>
                  <span className="text-xs font-bold text-[#050505] uppercase tracking-wider">{step.label}</span>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block w-12 h-[2px] bg-gray-200 mx-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const reasons = [
    "Swift-native expertise",
    "App Store compliance knowledge",
    "Performance-first engineering",
    "Scalable backend integration",
    "Secure development standards",
    "Long-term maintenance support"
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#050505] mb-4">
          Why Choose <span className="text-[#0096FF]">mTouch Labs</span>?
        </h2>
        <p className="text-[#666666] text-lg mb-12">We build iOS apps that align with business goals and user expectations.</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white px-8 py-4 rounded-full shadow-sm border border-gray-100 flex items-center gap-3 group hover:border-[#0096FF] transition-all">
              <div className="w-2 h-2 bg-[#7B2CBF] rounded-full"></div>
              <span className="text-[#050505] font-bold text-lg">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => {
  const industries = [
    { icon: "🛒", title: "eCommerce & Retail" },
    { icon: "🏥", title: "Healthcare & HealthTech" },
    { icon: "💰", title: "FinTech & Banking" },
    { icon: "🏠", title: "Real Estate" },
    { icon: "🚚", title: "Logistics & Transport" },
    { icon: "🚀", title: "SaaS & Technology" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#050505] text-center mb-16">
          Industries We <span className="text-[#7B2CBF]">Serve</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className={`p-12 rounded-2xl border text-center transition-all hover:shadow-xl group ${i === 5 ? 'border-[#7B2CBF]' : 'border-gray-100 bg-[#F8F9FA]'}`}>
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all">{ind.icon}</div>
              <h3 className="text-2xl font-bold text-[#050505]">{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  const techs = [
    "Swift", "SwiftUI", "UIKit", "Xcode", "Objective-C", "Core Data",
    "CloudKit", "ARKit", "CoreML", "Firebase", "REST APIs", "GraphQL",
    "TestFlight", "Fastlane", "CocoaPods", "SPM", "Combine", "MVVM"
  ];

  const stats = [
    { value: "18+", label: "Frameworks & Tools" },
    { value: "iOS 15+", label: "Version Support" },
    { value: "4.8★", label: "Avg App Rating" },
    { value: "99%", label: "Crash-Free Rate" }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#050505] mb-6">
            Our <span className="text-[#7B2CBF]">Technology Stack</span>
          </h2>
          <p className="text-[#666666] text-lg leading-relaxed mb-8">
            We leverage Apple's latest frameworks and modern development tools to build high-performance, future-ready iOS applications.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {techs.map((t, i) => (
              <span key={i} className="bg-[#F8F9FA] text-[#050505] px-4 py-2 rounded-full text-sm font-bold border border-gray-100 hover:border-[#0096FF] transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all">
              <h3 className="text-4xl font-extrabold text-[#0096FF] mb-2">{s.value}</h3>
              <p className="text-[#666666] font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is iOS app development?", a: "iOS app development is the process of creating mobile applications for Apple hardware, including iPhone, iPad, and iPod Touch. The software is written in the Swift programming language or Objective-C and then deployed to the App Store for users to download." },
    { q: "How long does iPhone app development take?", a: "The timeline varies based on complexity. A simple app might take 2-3 months, while a complex enterprise solution can take 6-12 months. We provide detailed timelines after the requirements phase." },
    { q: "Do you develop apps for both iPhone and iPad?", a: "Yes, we build universal applications that are optimized for both iPhone and iPad, ensuring a seamless experience across all Apple screen sizes." },
    { q: "Do you provide post-launch support?", a: "Absolutely. We offer comprehensive maintenance and support packages to ensure your app stays updated with the latest iOS versions and continues to perform optimally." }
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#050505] mb-4">
            Frequently Asked <span className="text-[#7B2CBF]">Questions</span>
          </h2>
          <p className="text-[#666666] text-lg">Everything about iOS app development</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`accordion-item border-b border-gray-100 ${activeIndex === i ? 'active' : ''}`}>
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-bold text-[#050505] group-hover:text-[#0096FF] transition-colors">{faq.q}</span>
                <ChevronDown className={`chevron transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`accordion-content transition-all duration-300 ${activeIndex === i ? 'max-h-96 pb-6' : 'max-h-0 overflow-hidden'}`}>
                <p className="text-[#666666] text-lg leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-[#15013d] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6">
          Build Your <span className="text-[#7B2CBF]">iOS App</span> Today
        </h2>
        <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
          Let's discuss how we can build a high-performance iPhone app for your business.
        </p>
        <button className="bg-[#7B2CBF] hover:bg-[#4a0884] text-[#050505] hover:text-[#EFEFEF] px-10 py-4 rounded-lg font-extrabold text-xl transition-all shadow-[0_10px_20px_rgba(242,169,0,0.2)]">
          Start Your iOS Project
        </button>
      </div>
    </section>
  );
};


// --- Main App ---

export default function IOSAppDevelopment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <main>
        <Hero />
        <IntroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseSection />
        <IndustriesSection />
        <TechStackSection />
        <FAQSection />
        <CTASection />
      </main>
    
    </div>
  );
}
