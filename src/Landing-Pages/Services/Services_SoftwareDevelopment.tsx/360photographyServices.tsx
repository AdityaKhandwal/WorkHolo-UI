import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {  
  Globe, 
  ChevronDown, 
  Check, 
  MessageCircle, 
  ChevronUp,
  Building2,
  Hotel,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  Tent,
  Search,
} from 'lucide-react';

// --- Types ---

interface StatCard {
  value: string;
  label: string;
}

interface ServiceCard {
  id: string;
  title: string;
  description: string;
}

interface IndustryCard {
  icon: React.ReactNode;
  title: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Constants ---

const STATS: StatCard[] = [
  { value: '1000+', label: 'Projects Captured' },
  { value: '50+', label: 'Cities Covered' },
  { value: '8K', label: 'Resolution Quality' },
  { value: '48hr', label: 'Fast Turnaround' },
];

const SERVICES: ServiceCard[] = [
  { 
    id: '01', 
    title: '360 Virtual Tour Services', 
    description: 'Interactive virtual tours for commercial properties, residential real estate, hotels & resorts, educational institutions, healthcare facilities, and corporate offices — helping customers explore spaces remotely.' 
  },
  { 
    id: '02', 
    title: '360 Product Photography', 
    description: 'Immersive product capture with rotational viewing, close-up interaction, enhanced product visibility, and improved eCommerce engagement — ideal for retail brands and online stores.' 
  },
  { 
    id: '03', 
    title: 'Google Street View Integration', 
    description: 'Integration of 360 visuals into Google Business profiles, websites, online directories, and marketing campaigns — increasing visibility and local customer engagement.' 
  },
  { 
    id: '04', 
    title: 'Real Estate 360 Photography', 
    description: 'Showcase apartments, villas, commercial properties, showrooms, and construction progress with high-quality visuals that increase property interest and buyer confidence.' 
  },
  { 
    id: '05', 
    title: 'Hospitality & Tourism Photography', 
    description: 'Room walkthroughs, facility previews, venue showcasing, and event space displays for hotels, resorts, and travel destinations — immersive visuals that improve booking conversions and guest confidence.' 
  },
];

const INDUSTRIES: IndustryCard[] = [
  { icon: <Building2 className="w-8 h-8 text-orange-500" />, title: 'Real Estate & Property' },
  { icon: <Hotel className="w-8 h-8 text-orange-500" />, title: 'Hospitality & Tourism' },
  { icon: <ShoppingBag className="w-8 h-8 text-orange-500" />, title: 'Retail & Showrooms' },
  { icon: <GraduationCap className="w-8 h-8 text-orange-500" />, title: 'Education Institutions' },
  { icon: <Briefcase className="w-8 h-8 text-orange-500" />, title: 'Corporate Offices' },
  { icon: <Tent className="w-8 h-8 text-orange-500" />, title: 'Event & Exhibition Spaces' },
];

const FAQS: FAQItem[] = [
  { 
    question: 'What are 360 degree photography services?', 
    answer: '360 degree photography involves capturing panoramic images that allow viewers to explore a space interactively from every angle. Unlike traditional photography, 360 visuals offer full-environment visibility, interactive navigation, zoom-enabled exploration, and virtual walkthrough capability.' 
  },
  { 
    question: 'How does 360 photography help businesses?', 
    answer: 'It increases customer engagement, improves online visibility, leads to higher conversion rates, and provides a better space presentation for remote exploration.' 
  },
  { 
    question: 'Can 360 images be integrated into websites?', 
    answer: 'Yes, our web development team ensures smooth integration of 360 visuals into websites, apps, and digital marketing platforms for maximum business impact.' 
  },
  { 
    question: 'Do you provide services across India?', 
    answer: 'Yes, we have a local expertise across India and provide fast turnaround and structured delivery for all projects.' 
  },
];

const PROCESS_STEPS = [
  'Site Assessment',
  'Equipment Setup',
  'Hi-Res Capture',
  'Image Stitching',
  'Post-Processing',
  'Integration',
  'Final Delivery'
];

// --- Components ---

const AccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button 
      className="w-full py-6 flex items-center justify-between text-left hover:text-orange-500 transition-colors"
      onClick={onClick}
    >
      <span className="text-xl font-semibold text-gray-900">{item.question}</span>
      {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-gray-600 leading-relaxed">
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default function ThreeSixtyPhotography() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-orange-500 selection:text-white">
      
      {/* Top Bar */}

      {/* Navbar */}

      {/* Hero Section */}
      <section className="relative bg-[#050505] pt-24 pb-32 px-4 md:px-12 overflow-hidden">
        {/* Background requested by user: #7B2CBF - used as a subtle glow/overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7B2CBF] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#7B2CBF] blur-[150px] rounded-full translate-y-1/2 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-6">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              Home / Services / 360° Photography
              <span className="w-8 h-[2px] bg-orange-500"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]">
              360° <span className="text-orange-500 italic">Photography</span> Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-3xl mx-auto">
              Immersive Visual Experiences That Capture Every Angle
            </p>
            <p className="text-lg text-white/60 max-w-4xl mx-auto leading-relaxed mb-12">
              mTouch Labs provides professional 360 degree photography services in India, helping businesses showcase their spaces, products, and environments through interactive panoramic visuals. From real estate and hospitality to retail and corporate spaces, we capture environments with precision and clarity. Visual storytelling is evolving — 360-degree photography leads the way.
            </p>
          </motion.div>
        </div>

        {/* Floating WhatsApp */}
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform relative"
          >
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
            <MessageCircle className="w-8 h-8 text-white fill-white" />
          </motion.div>
          <div className="bg-white px-4 py-2 rounded-lg shadow-xl text-sm font-bold flex items-center gap-2 border border-gray-100">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Let's Chat!
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              What Is <span className="text-orange-500">360 Degree</span> Photography?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              360 degree photography involves capturing panoramic images that allow viewers to explore a space interactively from every angle. Unlike traditional photography, 360 visuals offer full-environment visibility, interactive navigation, zoom-enabled exploration, realistic spatial experience, and virtual walkthrough capability.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              It transforms static viewing into immersive engagement — giving customers the ability to virtually explore spaces before visiting in person. Combined with our <span className="text-blue-600 font-bold border-b-2 border-blue-600 cursor-pointer">UI/UX design services</span>, we create seamless interactive visual experiences that maximize engagement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our <span className="text-blue-600 font-bold border-b-2 border-blue-600 cursor-pointer">web development team</span> ensures smooth integration of 360 visuals into websites, apps, and digital marketing platforms for maximum business impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Globe className="w-8 h-8 text-blue-500" />, title: 'Full-Environment Visibility' },
              { icon: <Search className="w-8 h-8 text-blue-500" />, title: 'Zoom-Enabled Exploration' },
              { icon: <Building2 className="w-8 h-8 text-orange-500" />, title: 'Virtual Walkthrough' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Benefits of <span className="text-orange-500">360° Photography</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Immersive visuals influence buying decisions and drive engagement:
            </p>
            <ul className="space-y-4">
              {[
                'Increased customer engagement & interaction time',
                'Improved online visibility & search rankings',
                'Higher conversion rates for real estate & hospitality',
                'Better space presentation & remote exploration',
                'Competitive digital advantage over static imagery'
              ].map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <Check className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our 360° <span className="text-orange-500">Photography Services</span>
            </h2>
            <p className="text-xl text-gray-600">From virtual tours to product photography</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-3xl border-2 transition-all ${idx === 1 ? 'border-orange-500 shadow-2xl' : 'border-gray-100 hover:border-orange-200'}`}
              >
                <span className="inline-block bg-blue-500 text-white font-black px-4 py-1 rounded-lg text-sm mb-6">
                  {service.id}
                </span>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 md:px-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our 360° Photography <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-gray-600">Professional-quality output and smooth digital integration.</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center justify-center p-4 text-center group-hover:border-orange-500 transition-colors">
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-black text-gray-900 leading-tight">{step}</span>
                  </div>
                </motion.div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block w-12 h-[2px] bg-gray-200 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            Why Choose mTouch Labs for <span className="text-orange-500">360° Photography</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-12">We combine visual precision with digital presentation expertise.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'High-resolution panoramic capture',
              'Professional-grade equipment',
              'Interactive virtual tour integration',
              'Business-ready digital formatting',
              'Local expertise across India',
              'Fast turnaround & structured delivery'
            ].map((pill, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gray-50 border border-gray-200 px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white hover:border-orange-500 hover:shadow-lg transition-all cursor-default"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-bold text-gray-800">{pill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Industries We <span className="text-orange-500">Serve</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="text-xl font-black text-gray-900">{industry.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Equipment & Tools <span className="text-orange-500">We Use</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We leverage professional-grade cameras, software, and integration platforms to deliver stunning 360° visuals.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                'Ricoh Theta Z1', 'Insta360 Pro', 'Matterport', 'Google Street View', 'PTGui',
                'Adobe Lightroom', 'Adobe Photoshop', 'Pano2VR', 'Kuula', '3DVista',
                'CloudPano', 'Krpano', 'HTML5 Embed', 'WebGL', 'React Integration', 'AWS S3 Hosting'
              ].map((tag, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-bold border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: '8K+', subtitle: 'Resolution Output', color: 'text-blue-500' },
              { title: '360°', subtitle: 'Full Panoramic', color: 'text-blue-500' },
              { title: 'HDR', subtitle: 'High Dynamic Range', color: 'text-blue-500' },
              { title: 'Web', subtitle: 'Ready Integration', color: 'text-blue-500' },
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-10 rounded-2xl border border-gray-100 text-center hover:shadow-xl transition-all"
              >
                <div className={`text-4xl md:text-5xl font-black ${card.color} mb-2`}>{card.title}</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">{card.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about 360° photography</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            {FAQS.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                item={faq} 
                isOpen={activeFaq === idx} 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-[#050505] relative overflow-hidden">
        {/* User requested background color #7B2CBF */}
        <div className="absolute inset-0 bg-[#7B2CBF] opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Ready for <span className="text-orange-500">Immersive Visuals</span>?
          </h2>
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            Let's discuss how 360° photography can showcase your spaces and products with interactive, high-impact visuals.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-xl font-black text-xl transition-all shadow-2xl hover:scale-105 active:scale-95">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 px-4 md:px-12 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-white font-black text-2xl mb-16">
            <Globe className="w-8 h-8 text-blue-500" />
            Global Presence
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {[
              { region: 'India', cities: ['Hyderabad', 'Bangalore', 'Chennai', 'Coimbatore', 'Kochi'] },
              { region: 'Americas', cities: ['United States', 'Canada'] },
              { region: 'Europe', cities: ['United Kingdom', 'Germany', 'Ireland'] },
              { region: 'Asia Pacific', cities: ['Singapore', 'Australia', 'New Zealand', 'India'] },
              { region: 'Middle East', cities: ['UAE', 'Dubai', 'Saudi Arabia', 'Qatar', 'Kuwait'] },
            ].map((col, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 text-blue-500 font-black uppercase tracking-widest text-xs mb-8">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {col.region}
                </div>
                <ul className="space-y-4">
                  {col.cities.map((city, cIdx) => (
                    <li key={cIdx} className="text-white/60 hover:text-white transition-colors cursor-pointer text-[15px]">
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-32 right-8 bg-blue-500 text-white p-3 rounded-full shadow-2xl hover:bg-blue-600 transition-colors z-[90]"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>

    </div>
  );
}
