import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  ArrowRight,
  Check,
  Mail,
  Phone,
  Star,
  User,
  MessageSquare,
  Globe,
} from "lucide-react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
    title: "Custom Website Development",
    description:
      "We design and develop modern, responsive websites based on your business requirements.",
  },
  {
    title: "Ready-Made Software Solutions",
    description:
      "Choose from pre-built systems like admin dashboards, CRMs, and business tools — ready to deploy.",
  },
  {
    title: "Custom Software Development",
    description:
      "Need something unique? We build tailored software solutions from scratch for your specific needs.",
  },
];

const TESTIMONIALS = [
  {
    name: "Yashraj Jaiswal",
    location: "India",
    text: "WorkHolo delivered exactly what we needed. The ready-made solution saved us weeks of time.",
    rating: 5,
  },
  {
    name: "Ashish Pandey",
    location: "India",
    text: "Their custom development approach helped us launch quickly with a professional product.",
    rating: 5,
  },
  {
    name: "Startup Founder",
    location: "Bangalore",
    text: "We were struggling to build our MVP, but WorkHolo provided a ready solution that worked perfectly.",
    rating: 5,
  },
  {
    name: "E-commerce Owner",
    location: "Mumbai",
    text: "The online store system was easy to customize and helped us start selling within days.",
    rating: 5,
  },
  {
    name: "Tech Entrepreneur",
    location: "Hyderabad",
    text: "Professional team with great support. They understood our requirements and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Small Business Owner",
    location: "Delhi",
    text: "We needed a website fast, and WorkHolo delivered a clean and modern design that fits our brand perfectly.",
    rating: 4,
  },
  {
    name: "Agency Partner",
    location: "Pune",
    text: "We partnered with WorkHolo for multiple projects. Their systems are reliable and easy to scale.",
    rating: 5,
  },
  {
    name: "Product Manager",
    location: "Chennai",
    text: "The dashboard system is powerful and easy to use. It helped us manage our data efficiently.",
    rating: 5,
  },
];

const PORTFOLIO = [
  {
    category: "WEBSITE",
    title: "Business Website Template",
    description: "A ready-to-use modern website...",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800",
  },
  {
    category: "SOFTWARE",
    title: "Admin Dashboard System",
    description: "A complete dashboard solution...",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  },
  {
    category: "E-COMMERCE",
    title: "Online Store System",
    description: "A fully functional e-commerce platform...",
    image:
      "https://lh6.googleusercontent.com/G9fmuqVwC9iN-xBOc7obvptv1HuNb4HPQkPy8dptRJ5D6Fkep-f-pGHXwl0oIwCA1SJkRwYIiZds06t8W0iWqKovUCjdEysnSqVT2lalXc7sBM2F48YTD5xB1IXMVIeZHbJl_4gnbGDbLazeWk_4gaNgMn44neboUdk8M0UsHqawOhicmM89fLE55F3Hzw",
  },
];

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

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

        if (!isInView) {
          setCounts([0, 0, 0, 0]);
          return;
        }
      }, intervalTime);
    });
  }, [isInView]);

  return (
    <div className="selection:bg-purple-500 selection:text-white min-h-screen bg-black text-white overflow-x-hidden ">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-48 pb-16 md:pb-24 overflow-hidden">
        {/* Layer 1: Background Image & Gradients (z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://img.freepik.com/free-photo/connecting-dots-background-network-communication-design_53876-160207.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Layer 2: Floating Images (z-10) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="relative w-full h-full max-w-7xl mx-auto">
            {/* Floating Image 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{
                opacity: 0.9,
                x: 0,
                y: [0, -30, 0],
                rotate: [-5, -8, -5],
              }}
              transition={{
                opacity: { duration: 1.2 },
                x: { duration: 1.2 },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              }}
              className="absolute top-[10%] -left-10 md:left-0 w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl blur-[1px] hover:blur-0 transition-all duration-700 pointer-events-auto cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800"
                alt="Floating 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Image 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: 0.9,
                x: 0,
                y: [0, 25, 0],
                rotate: [10, 15, 10],
              }}
              transition={{
                opacity: { duration: 1.2, delay: 0.3 },
                x: { duration: 1.2, delay: 0.3 },
                y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
              }}
              className="absolute top-[40%] -left-16 md:-left-[2%] w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 blur-[1px] hover:blur-0 transition-all duration-700 pointer-events-auto cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
                alt="Floating 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Image 3 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: 0.9,
                x: 0,
                y: [0, -40, 0],
                rotate: [5, 2, 5],
              }}
              transition={{
                opacity: { duration: 1.2, delay: 0.6 },
                x: { duration: 1.2, delay: 0.6 },
                y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
              }}
              className="absolute top-[12%] -right-8 md:right-0 w-24 h-36 md:w-36 md:h-52 rounded-2xl overflow-hidden shadow-2xl blur-[2px] hover:blur-0 transition-all duration-700 pointer-events-auto cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=800"
                alt="Floating 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Image 4 */}
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{
                opacity: 0.9,
                y: [0, 30, 0],
                rotate: [-12, -15, -12],
              }}
              transition={{
                opacity: { duration: 1.2, delay: 0.9 },
                y: { repeat: Infinity, duration: 9, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 9, ease: "easeInOut" },
              }}
              className="absolute bottom-[14%] -right-16 md:right-[10%] w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-2xl blur-[1px] hover:blur-0 transition-all duration-700 pointer-events-auto cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
                alt="Floating 4"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating Image 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 0.7,
                scale: 1,
                y: [0, -20, 0],
                rotate: [15, 18, 15],
              }}
              transition={{
                opacity: { duration: 1.2, delay: 1.2 },
                scale: { duration: 1.2, delay: 1.2 },
                y: { repeat: Infinity, duration: 10, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 10, ease: "easeInOut" },
              }}
              className="absolute top-[40%] -right-10 md:right-[5%] w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl blur-[1px] hover:blur-0 transition-all duration-700 pointer-events-auto cursor-pointer group"
            >
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=600"
                alt="Floating 5"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>

        {/* Layer 3: Main Content (z-20) */}
        <div className="container mt-14 mx-auto px-6 lg:px-12 relative z-20">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: window.innerWidth < 768 ? -70 : -50 }}
                transition={{ duration: 1 }}
                className="text-[9vw] md:text-[9vw] lg:text-[9vw] font-black font-display leading-[0.85] uppercase tracking-tighter  "
              >
               <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 z-50">WorkHolo</span>  <br />
                <span className="text-white/10 outline-text">
                  Build. Customize. Sell.
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: -35 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-3 md:mt-16 flex flex-col items-center"
            >
              <p className="text-xl md:text-2xl font-medium tracking-wide mb-12 max-w-2xl text-white/80">
                We build websites and software solutions that you can launch,
                customize, and scale for your business.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-16">
                <button className="bg-[#7B2CBF] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full shadow-[0_0_30px_rgba(123,44,191,0.4)]">
                  Explore Solutions
                </button>
                <button className="border border-white/20 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-full">
                  Contact Us
                </button>
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full cursor-pointer hover:bg-white/10 transition-colors"
              >
                <ArrowRight className="w-6 h-6 rotate-90" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-12 md:py-16 border-y border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all"
          >
            {LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className="h-6 md:h-8 lg:h-10 w-auto"
                referrerPolicy="no-referrer"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
                Empowering you and <br />
                <span className="text-[#7B2CBF]">your business</span>
              </h2>
            </motion.div>
            <div className="space-y-12 md:space-y-16">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-3xl md:text-4xl font-bold font-display group-hover:text-[#7B2CBF] transition-colors">
                      {service.title}
                    </h3>
                    <div className="w-10 h-10 md:w-12 md:h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-[#7B2CBF] group-hover:border-[#7B2CBF] transition-all flex-shrink-0 ml-4">
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg">
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
      <section className="py-20 md:py-32 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="relative z-50 text-4xl md:text-6xl lg:text-8xl font-black font-display leading-[1.1] uppercase tracking-tighter"
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
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -top-10 -left-10 lg:-left-32 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-2xl hidden lg:block -z-10 opacity-80"
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
              CUSTOMIZE AND SELL
              <br />
              <span className="relative inline-block">
                DIGITAL PRODUCTS
                <motion.div
                  initial={{ rotate: 10, opacity: 0, y: 20 }}
                  whileInView={{
                    rotate: 15,
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -bottom-10 -right-10 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-2xl hidden lg:block -z-10"
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
      <section className="py-20 md:py-32 bg-white text-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden aspect-[4/5] hidden md:block"
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
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-10"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
                  Learn More
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                  The future of ready-to-launch digital solutions
                </h2>
              </div>
              <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                WorkHolo helps businesses launch faster by providing ready-made
                and custom-built websites and software solutions tailored to
                their needs.
              </p>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Pre-built solutions ready for quick deployment",
                  "Fully customizable based on client requirements",
                  "Scalable systems for long-term growth",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 text-base md:text-lg font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#7B2CBF]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#7B2CBF]" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <button className="bg-[#7B2CBF] text-white px-8 md:px-10 py-4 md:py-5 text-sm font-bold uppercase tracking-widest hover:bg-black transition-all duration-300 w-full md:w-auto">
                About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={ref} className="py-20 md:py-32 bg-[#F5F5F5] text-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Projects Built", value: 50, suffix: "+" },
              { label: "Clients Served", value: 20, suffix: "+" },
              { label: "Products Ready", value: 10, suffix: "+" },
              { label: "Custom Solutions", value: 30, suffix: "+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="text-[80px] md:text-[100px] lg:text-[120px] font-black font-display text-black/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {counts[i]}
                  {stat.suffix}
                </span>
                <div className="relative z-10">
                  <h4 className="text-lg md:text-xl font-bold mb-2">
                    {stat.label}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-10"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
                  Experts
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                  We build solutions that businesses can launch instantly{" "}
                  <span className="text-[#7B2CBF]">excellence</span>
                </h2>
              </div>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-md">
                Our team designs and develops ready-to-use digital products and
                custom solutions to help businesses grow faster without starting
                from scratch.
              </p>
              <button className="bg-[#7B2CBF] text-white px-8 md:px-10 py-4 md:py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 w-full md:w-auto">
                The Team
              </button>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
        className="py-12 md:py-20 bg-black overflow-hidden border-y border-white/10"
      >
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-12 md:gap-20 mx-6 md:mx-10"
            >
              <span className="text-5xl md:text-8xl lg:text-[120px] font-black font-display uppercase tracking-tighter">
                Custom Website Development
              </span>
              <div className="w-10 h-10 md:w-16 md:h-16 bg-[#7B2CBF] rounded-lg rotate-45 flex items-center justify-center">
                <div className="w-5 h-5 md:w-8 md:h-8 border-2 md:border-4 border-white rounded-sm"></div>
              </div>
              <span className="text-5xl md:text-8xl lg:text-[120px] font-black font-display uppercase tracking-tighter">
                Ready-Made Software
              </span>
              <div className="w-10 h-10 md:w-16 md:h-16 bg-[#7B2CBF] rounded-lg rotate-45 flex items-center justify-center">
                <div className="w-5 h-5 md:w-8 md:h-8 border-2 md:border-4 border-white rounded-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-20 md:space-y-32">
            {PORTFOLIO.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
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
                  className={`space-y-6 md:space-y-8 order-1 ${i % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
                    {item.category}
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">
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
      <section className="py-20 md:py-32 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24 space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
              Testimonials
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display">
              What clients say
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[#151515] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-[#7B2CBF]/30 transition-all group"
              >
                <div className="flex gap-1 mb-6 md:mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#7B2CBF] text-[#7B2CBF]"
                    />
                  ))}
                </div>
                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 md:mb-10 italic">
                  "{t.text}"
                </p>
                <div className="space-y-1">
                  <h4 className="text-lg md:text-xl font-bold font-display">
                    {t.name}
                  </h4>
                  <p className="text-sm text-white/40">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 md:mt-16 flex justify-center gap-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full ${i === 0 ? "bg-[#7B2CBF]" : "bg-white/20"}`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-[#F5F5F5] text-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 md:space-y-12"
            >
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B2CBF]">
                  Contact Us
                </span>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
                  Have a project or idea? <br />
                  Let’s build and launch it together!
                </h2>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-square hidden md:block">
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
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 lg:p-20 rounded-3xl shadow-2xl"
            >
              <form className="space-y-8 md:space-y-10">
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <User className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-black/10 py-3 md:py-4 pl-8 md:pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-base md:text-lg"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full bg-transparent border-b border-black/10 py-3 md:py-4 pl-8 md:pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-base md:text-lg"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-black/10 py-3 md:py-4 pl-8 md:pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-base md:text-lg"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <Globe className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-transparent border-b border-black/10 py-3 md:py-4 pl-8 md:pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-base md:text-lg"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute left-0 top-4 text-black/30 group-focus-within:text-[#7B2CBF] transition-colors">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <textarea
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full bg-transparent border-b border-black/10 py-3 md:py-4 pl-8 md:pl-10 focus:outline-none focus:border-[#7B2CBF] transition-all placeholder:text-black/30 text-base md:text-lg resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id="consent"
                    className="w-5 h-5 accent-[#7B2CBF]"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm md:text-base text-black/60"
                  >
                    I agree that my data is{" "}
                    <a href="#" className="underline">
                      collected
                    </a>
                    .
                  </label>
                </div>
                <button className="bg-[#7B2CBF] text-white px-8 md:px-12 py-4 md:py-5 text-sm font-bold uppercase tracking-widest hover:bg-black transition-all duration-300 w-full md:w-auto">
                  Get In Touch
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 2px rgba(255, 255, 255, 0.2);
          }
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
