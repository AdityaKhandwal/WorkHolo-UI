import Footer from "./Footer";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ArrowRight,
  Check,
  Mail,
  Phone,
  ShoppingCart,
  Image as ImageIcon,
  Layout,
  Star,
  User,
  MessageSquare,
  Globe,
} from "lucide-react";


const LOGOS = [
  {
    name: "slack",
    url: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  },
  {
    name: "github",
    url: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  { name: "loom", url: "https://cdn.worldvectorlogo.com/logos/loom-4.svg" },
  { name: "miro", url: "https://cdn.worldvectorlogo.com/logos/miro-2.svg" },
  {
    name: "framer",
    url: "https://cdn.worldvectorlogo.com/logos/framer-icon.svg",
  },
  {
    name: "airbnb",
    url: "https://cdn.worldvectorlogo.com/logos/airbnb-2-1.svg",
  },
];

const SERVICES = [
  {
    title: "Real-time Messaging System",
    description:
      "Implemented and tested real-time chat features, including message delivery, notifications, and UI responsiveness across devices.",
    icon: <ArrowRight className="w-6 h-6 rotate-[-45deg]" />,
  },
  {
    title: "SIP Trunk & DID Integration",
    description:
      "Integrated SIP Trunk and DID services to enable calling features, including provider research, testing, and API-based connectivity.",
    icon: <ArrowRight className="w-6 h-6 rotate-[-45deg]" />,
  },
  {
    title: "Role-Based Access & Team Management",
    description:
      "Developed and tested user roles, permissions, and team management features to ensure secure and structured access control.",
    icon: <ArrowRight className="w-6 h-6 rotate-[-45deg]" />,
  },
];

const TESTIMONIALS = [
  {
    name: "Internal QA Testing",
    location: "Boston, MA",
    text: 'The chat and notification system works efficiently with minor improvements needed in real-time updates.',
    rating: 5,
  },
  {
    name: "Development Team Feedback",
    location: "Washington City, WA",
    text: 'SIP integration provided stable connectivity and helped us test calling workflows effectively.',
    rating: 5,
  },
  {
    name: "Integration Testing",
    location: "Boston, MA",
    text: 'Role-based access and team management features are working as expected with proper restrictions.',
    rating: 5,
  },
  {
    name: "User Acceptance Testing",
    location: "New York City, NY",
    text: 'Overall system performance and UI responsiveness are smooth and consistent across modules.',
    rating: 5,
  },
];

const PORTFOLIO = [
  {
    category: "DIGITAL",
    title: "User Authentication System",
    description:
     'Implemented secure login and authentication with validation and session handling.',
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
  },
  {
    category: "DIGITAL",
    title: "Chat & Notification Module",
    description:
     'Developed and tested chat systems with real-time notifications and UI responsiveness.',
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1200",
  },
  {
    category: "DIGITAL",
    title: "SIP Dialer Integration",
    description:
     'Integrated SIP trunk and DID services for calling functionality within the web application.',
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1200",
  },
];

export default function Home() {
  const ref = React.useRef(null);
const isInView = useInView(ref, { once: true });

const [counts, setCounts] = useState([0, 0, 0, 0]);

useEffect(() => {
  if (!isInView) return;

  const targets = [61, 32, 10, 15];
  const duration = 2000; // total animation time (2 seconds)
  const intervalTime = 30; // update every 30ms

  targets.forEach((target, index) => {
    let current = 0;
    const steps = duration / intervalTime;
    const increment = target / steps;

    const interval = setInterval(() => {
      current += increment;

      setCounts((prev) => {
        const updated = [...prev];
        updated[index] = Math.floor(current);
        return updated;
      });

      if (current >= target) {
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = target;
          return updated;
        });
        clearInterval(interval);
      }
    }, intervalTime);
  });
}, [isInView]);

  return (
    <div className="min-h-screen bg-black mt-3 text-white selection:bg-purple-500 selection:text-white">
      {/* Sticky Sidebar Actions */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-px">
        <button className="bg-[#7B2CBF] p-4 hover:bg-purple-600 transition-colors">
          <ShoppingCart className="w-6 h-6 text-white" />
        </button>
        <button className="bg-[#7B2CBF] p-4 hover:bg-purple-600 transition-colors">
          <ImageIcon className="w-6 h-6 text-white" />
        </button>
        <button className="bg-[#7B2CBF] p-4 hover:bg-purple-600 transition-colors">
          <Layout className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-6xl">
              {/* Floating Images */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -20, 0],
                  rotate: [-5, -7, -5],
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  x: { duration: 0.8 },
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                }}
                className="absolute -top-10 -left-20 w-40 h-40 rounded-2xl overflow-hidden hidden lg:block z-20 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800"
                  alt="Floating 1"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, 15, 0],
                  rotate: [10, 12, 10],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.2 },
                  x: { duration: 0.8, delay: 0.2 },
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 5, ease: "easeInOut" },
                }}
                className="absolute top-1/2 -left-32 w-[150px] h-[150px] rounded-2xl overflow-hidden hidden lg:block z-30 shadow-2xl border-4 border-black"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
                  alt="Floating 2"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -25, 0],
                  rotate: [5, 3, 5],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.4 },
                  x: { duration: 0.8, delay: 0.4 },
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                  rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                }}
                className="absolute -top-20 -right-20 w-[100px] h-[150px] rounded-2xl overflow-hidden hidden lg:block z-20 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800"
                  alt="Floating 3"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: [0, 20, 0],
                  rotate: [-8, -10, -8],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.6 },
                  y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
                  rotate: {
                    repeat: Infinity,
                    duration: 4.5,
                    ease: "easeInOut",
                  },
                }}
                className="absolute -bottom-32 -left-10 w-[150px] h-[150px] rounded-2xl overflow-hidden hidden lg:block z-20 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                  alt="Floating 4"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -15, 0],
                  rotate: [12, 14, 12],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.8 },
                  x: { duration: 0.8, delay: 0.8 },
                  y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
                  rotate: {
                    repeat: Infinity,
                    duration: 5.5,
                    ease: "easeInOut",
                  },
                }}
                className="absolute bottom-0 -right-32 w-[120px] h-[150px] rounded-2xl overflow-hidden hidden lg:block z-30 shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600"
                  alt="Floating 5"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 0.8 }}
                transition={{ duration: 1 }}
                className="relative z-50 text-[12vw] lg:text-[10vw] font-black font-display leading-[0.9] uppercase tracking-tighter"
              >
                WorkHolo <br />
                <span className="text-white/10 outline-text ">
                  Communication Platform
                </span>
              </motion.div>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <p className="text-xl font-medium tracking-wide mb-8">
                Real-time Chat, SIP Calling, Team Collaboration
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full"
              >
                <ArrowRight className="w-5 h-5 rotate-90" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Background Images */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
          <img
            src="https://img.freepik.com/free-photo/connecting-dots-background-network-communication-design_53876-160207.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-between items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all"
          >
            {LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className="h-8 lg:h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl lg:text-7xl font-bold font-display leading-tight">
                Empowering you and <br />
                <span className="text-[#7B2CBF]">your business</span>
              </h2>
            </motion.div>
            <div className="space-y-16">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-4xl font-bold font-display group-hover:text-[#7B2CBF] transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-[#7B2CBF] group-hover:border-[#7B2CBF] transition-all">
                      {service.icon}
                    </div>
                  </div>
                  <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                  <div className="mt-8 h-px bg-white/10 w-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Big Text Section */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-50 text-6xl lg:text-8xl font-black font-display leading-[1.1] uppercase tracking-tighter"
            >
              <span className="relative inline-block">
                WE BUILD,
                <motion.div
                  initial={{ rotate: -10, opacity: 0, y: 20 }}
                  whileInView={{
                    rotate: -15,
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-10 -left-32 w-24 h-24 rounded-lg overflow-hidden shadow-2xl hidden lg:block -z-10 opacity-80"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=400"
                      alt="Design"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </motion.div>
              </span>
              <br />
              TEST AND SCALE
              <br />
              <span className="relative inline-block">
                COMMUNICATION SYSTEMS
                <motion.div
                  initial={{ rotate: 10, opacity: 0, y: 20 }}
                  whileInView={{
                    rotate: 15,
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-lg overflow-hidden shadow-2xl hidden lg:block"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600"
                      alt="Design"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </motion.div>
              </span>
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden aspect-[4/5]"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="w-full h-full"
              >
                <img
                  src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200"
                  alt="Future"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
                  Learn More
                </span>
                <h2 className="text-6xl font-bold font-display leading-tight">
                  The future of communication platforms
                </h2>
              </div>
              <p className="text-xl text-black/60 leading-relaxed">
                WorkHolo is designed to simplify communication with integrated
                chat, calling, and team collaboration tools for modern
                businesses.
              </p>
              <ul className="space-y-6">
                {[
                  "Real-time messaging and notifications",
                  "SIP-based calling with DID support",
                  "Secure role-based access control",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 text-lg font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#7B2CBF]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#7B2CBF]" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <button className="bg-[#7B2CBF] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-black transition-all duration-300">
                About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="py-32 bg-[#F5F5F5] text-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
  { label: "Features", value: 61, suffix: "+" },
  { label: "Agents", value: 32, suffix: "" },
  { label: "Modules", value: 10, suffix: "+" },
  { label: "Integrations", value: 15, suffix: "+" },
].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="text-[120px] font-black font-display text-black/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {counts[i]}{stat.suffix}
                </span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">{stat.label}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
                  Experts
                </span>
                <h2 className="text-6xl font-bold font-display leading-tight">
                  Our development and testing team drives product quality{" "}
                  <span className="text-[#7B2CBF]">income</span>
                </h2>
              </div>
              <p className="text-xl text-white/60 leading-relaxed max-w-md">
               Our team focuses on building, testing, and optimizing communication workflows for seamless user experience.
              </p>
              <button className="bg-[#7B2CBF] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                The Team
              </button>
            </motion.div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="rounded-xl overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-500"
                >
                  <motion.div
                    animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + i,
                      ease: "easeInOut",
                    }}
                    className="w-full h-full"
                  >
                    <img
                      src={`https://picsum.photos/seed/team${i}/600/600`}
                      alt="Team Member"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 bg-black overflow-hidden border-y border-white/10"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-20 mx-10">
              <span className="text-8xl lg:text-[120px] font-black font-display uppercase tracking-tighter">
                Real-time Chat Systems
              </span>
              <div className="w-16 h-16 bg-[#7B2CBF] rounded-lg rotate-45 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white rounded-sm"></div>
              </div>
              <span className="text-8xl lg:text-[120px] font-black font-display uppercase tracking-tighter">
                SIP Calling Integration
              </span>
              <div className="w-16 h-16 bg-[#7B2CBF] rounded-lg rotate-45 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white rounded-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {PORTFOLIO.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div
                  className={`order-2 ${i % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3]">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 5 + i,
                        ease: "easeInOut",
                      }}
                      className="w-full h-full"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  </div>
                </div>
                <div
                  className={`space-y-8 order-1 ${i % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
                    {item.category}
                  </span>
                  <h2 className="text-6xl font-bold font-display leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-xl text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest group"
                  >
                    Read More
                    <div className="w-12 h-px bg-white group-hover:w-20 group-hover:bg-[#7B2CBF] transition-all"></div>
                    <ArrowRight className="w-4 h-4 group-hover:text-[#7B2CBF]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
              Testimonials
            </span>
            <h2 className="text-6xl lg:text-7xl font-bold font-display">
              What clients say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#151515] p-10 rounded-2xl border border-white/5 hover:border-[#7B2CBF]/30 transition-all group"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#7B2CBF] text-[#7B2CBF]"
                    />
                  ))}
                </div>
                <p className="text-lg text-white/70 leading-relaxed mb-10 italic">
                  "{t.text}"
                </p>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold font-display">{t.name}</h4>
                  <p className="text-sm text-white/40">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 flex justify-center gap-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-[#7B2CBF]" : "bg-white/20"}`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-[#F5F5F5] text-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
                  Contact Us
                </span>
                <h2 className="text-6xl lg:text-7xl font-bold font-display leading-tight">
                  Have a communication solution in mind? <br />
                  Let’s build it together!
                </h2>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-square">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full"
                >
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000"
                    alt="Contact"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 lg:p-20 rounded-3xl shadow-2xl"
            >
              <form className="space-y-10">
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <User className="w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-black/10 py-4 pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-lg"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-black/10 py-4 pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-lg"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-black/10 py-4 pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-lg"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <Globe className="w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-transparent border-b border-black/10 py-4 pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-lg"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute left-0 top-4 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <textarea
                    placeholder="How can we help you? Feel free to get in touch!"
                    rows={4}
                    className="w-full bg-transparent border-b border-black/10 py-4 pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-lg resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-5 h-5 accent-[#7B2CBF]"
                  />
                  <label htmlFor="consent" className="text-black/60">
                    I agree that my data is{" "}
                    <a href="#" className="underline">
                      collected
                    </a>
                    .
                  </label>
                </div>
                <button className="bg-[#7B2CBF] text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-black transition-all duration-300">
                  Get In Touch
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
