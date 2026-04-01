import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  Mail, 
  ArrowRight, 
  Plus, 
  Minus, 
  MapPin,
  Globe,
} from 'lucide-react';

// --- Components ---

const Hero = () => {
  return (
    <section className="relative min-h-[950px] bg-black overflow-hidden flex items-center pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://picsum.photos/seed/booking/1920/1080?grayscale&blur=2" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center py-20">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block bg-primary/20 text-primary px-8 py-3 rounded-full text-sm font-black mb-10 border border-primary/30 uppercase tracking-[0.3em]"
          >
            #1 Ticket Booking App Development Company
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white text-6xl md:text-8xl lg:text-[110px] font-black leading-[0.9] mb-12 tracking-tighter"
          >
            Custom <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Ticket Booking</span> <br />
            App Development
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-400 text-2xl md:text-3xl mb-16 max-w-2xl leading-relaxed font-medium"
          >
            Empower your business with a high-performance, scalable, and feature-rich ticket booking application tailored to your specific needs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(123,44,191,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-16 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl shadow-primary/40"
            >
              View Demo
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-16 py-7 rounded-2xl font-black text-2xl transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end perspective-2000"
        >
          <div className="relative w-[360px] md:w-[450px] aspect-[9/19] bg-[#1a1a1a] rounded-[5rem] border-[18px] border-[#222] overflow-hidden shadow-[0_0_120px_rgba(123,44,191,0.6)] transform rotate-2 hover:rotate-0 transition-transform duration-1000">
            {/* Phone Screen Content Mockup */}
            <div className="w-full h-full bg-[#0f0f0f] flex flex-col">
              <div className="h-12 w-full flex justify-between items-center px-12 pt-8">
                <span className="text-white text-base font-black">9:41</span>
                <div className="flex space-x-3">
                   <div className="w-6 h-3 bg-white rounded-full"></div>
                   <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-grow p-10 space-y-12 overflow-y-auto scrollbar-hide">
                <div className="flex justify-between items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10"></div>
                  <div className="flex space-x-5">
                    <div className="w-14 h-14 rounded-xl bg-white/10"></div>
                    <div className="w-14 h-14 rounded-xl bg-white/10"></div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h4 className="text-white font-black text-4xl">Now Playing</h4>
                  <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex-shrink-0 w-64 aspect-[3/4] rounded-[3rem] overflow-hidden relative group">
                        <img src={`https://picsum.photos/seed/movie${i}/500/700`} alt="Movie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                        <div className="absolute bottom-6 left-6 bg-primary text-white text-sm px-5 py-2.5 rounded-xl font-black shadow-2xl">4.8 ★</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 rounded-[3.5rem] p-10 border border-white/10">
                  <div className="flex justify-between items-center mb-10">
                    <h5 className="text-white font-black text-2xl">Select Seats</h5>
                    <span className="text-primary text-lg font-bold">View All</span>
                  </div>
                  <div className="grid grid-cols-7 gap-5">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div key={i} className={`aspect-square rounded-xl ${i % 7 === 0 || i % 5 === 0 ? 'bg-primary shadow-[0_0_20px_rgba(123,44,191,0.7)]' : 'bg-white/10'}`}></div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-7 rounded-[3rem] font-black text-2xl shadow-2xl shadow-primary/50 hover:scale-[1.02] transition-transform active:scale-95">
                  Book Tickets Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-1/4 bg-white p-10 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.25)] hidden xl:block border border-gray-100"
          >
             <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-3xl bg-green-100 flex items-center justify-center text-green-600">
                   <Plus className="w-12 h-12" />
                </div>
                <div>
                   <p className="text-sm font-black text-gray-400 uppercase tracking-[0.3em] mb-1">New Booking</p>
                   <p className="text-3xl font-black text-gray-900">Movie Ticket</p>
                </div>
             </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 bottom-1/4 bg-white p-10 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.25)] hidden xl:block border border-gray-100"
          >
             <div className="flex items-center space-x-6">
                <div className="w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center text-blue-600">
                   <Globe className="w-12 h-12" />
                </div>
                <div>
                   <p className="text-sm font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Active Users</p>
                   <p className="text-3xl font-black text-gray-900">2.5k+ Online</p>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-40 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-white rounded-[5rem] shadow-[0_80px_160px_rgba(0,0,0,0.15)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-gray-100"
        >
          <div className="p-20 lg:p-32 bg-primary text-white relative overflow-hidden">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -mr-64 -mt-64 blur-[120px]"
            ></motion.div>
            <motion.div 
              animate={{ scale: [1, 1.3, 1], rotate: [0, -15, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full -ml-64 -mb-64 blur-[120px]"
            ></motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl font-black mb-12 relative z-10 leading-tight tracking-tight"
            >
              Let's Build Your Ticket Booking App
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-white/90 text-2xl mb-20 leading-relaxed relative z-10 font-medium"
            >
              Have a project in mind? Our team of experts is ready to help you transform your vision into a successful digital product.
            </motion.p>
            <div className="space-y-14 relative z-10">
              {[
                { icon: Mail, label: "Email Us", value: "contact@mtouchlabs.com" },
                { icon: Phone, label: "Call Us", value: "+91 9390683154" },
                { icon: MapPin, label: "Visit Us", value: "Hyderabad, India" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                  whileHover={{ x: 15 }} 
                  className="flex items-center space-x-10 group"
                >
                  <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center shadow-xl border border-white/5 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <div>
                    <p className="text-sm opacity-70 uppercase font-black tracking-[0.3em] mb-2">{item.label}</p>
                    <p className="text-3xl font-black">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="p-20 lg:p-32 flex flex-col justify-center">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-sm font-black text-gray-700 uppercase tracking-[0.2em] ml-2">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border-2 border-gray-100 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-xl placeholder:text-gray-300" placeholder="John Doe" />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-black text-gray-700 uppercase tracking-[0.2em] ml-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border-2 border-gray-100 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-xl placeholder:text-gray-300" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-700 uppercase tracking-[0.2em] ml-2">Phone Number</label>
                <input type="tel" className="w-full bg-gray-50 border-2 border-gray-100 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-xl placeholder:text-gray-300" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-black text-gray-700 uppercase tracking-[0.2em] ml-2">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 border-2 border-gray-100 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none font-bold text-xl placeholder:text-gray-300" placeholder="Tell us about your project..."></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 30px 60px rgba(123,44,191,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-primary text-white py-8 rounded-[2rem] font-black text-2xl shadow-2xl shadow-primary/40 hover:bg-primary/90 transition-all mt-6"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const userFeatures = [
    { icon: "🎟️", title: "Easy Registration", desc: "Quick sign-up via social media or email." },
    { icon: "🔍", title: "Smart Search", desc: "Filter events by location, date, and category." },
    { icon: "💺", title: "Seat Selection", desc: "Interactive map to choose your preferred seats." },
    { icon: "💳", title: "Secure Payment", desc: "Multiple payment options with SSL security." },
  ];

  const adminFeatures = [
    { icon: "📊", title: "Dashboard", desc: "Comprehensive overview of sales and bookings." },
    { icon: "📅", title: "Event Management", desc: "Easily add, edit, or remove events and shows." },
    { icon: "👥", title: "User Management", desc: "Manage user profiles and booking history." },
    { icon: "📈", title: "Reports & Analytics", desc: "Detailed insights into business performance." },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section className="py-40 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">Key Features for Seamless Functionality</h2>
          <p className="text-gray-600 text-2xl max-w-3xl mx-auto font-medium leading-relaxed">Comprehensive features for both users and administrators designed for the best experience.</p>
        </motion.div>
        
        <div className="mb-32">
          <motion.h3 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-black mb-16 text-primary flex items-center"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-2 bg-primary mr-6 rounded-full"
            ></motion.div> User App Features
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {userFeatures.map((f, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.03, boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
                className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 shadow-sm transition-all duration-500 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-10"
                >{f.icon}</motion.div>
                <h4 className="font-black text-3xl mb-6 group-hover:text-primary transition-colors">{f.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-black mb-16 text-primary flex items-center"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-2 bg-primary mr-6 rounded-full"
            ></motion.div> Admin Panel Features
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {adminFeatures.map((f, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.03, boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
                className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 shadow-sm transition-all duration-500 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-10"
                >{f.icon}</motion.div>
                <h4 className="font-black text-3xl mb-6 group-hover:text-primary transition-colors">{f.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OnDemandSection = () => {
  return (
    <section className="py-40 bg-white overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <h2 className="text-6xl font-black mb-10 leading-tight tracking-tight">On-Demand Ticket Booking App Development</h2>
          <p className="text-gray-600 text-2xl leading-relaxed mb-14 font-medium">
            The way people attend events has been transformed by ticket booking applications, which offer flexibility and convenience. With these apps, users can peruse a wide range of events—from festivals to theater productions to concerts—all from the palm of their hands. Users can easily look for events by entering criteria like location, date, and genre that suit their interests. There is no longer a need for paper tickets because they may pick their preferred seats, make a number of payment choices, and receive their tickets instantly.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(123,44,191,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-full font-black text-xl flex items-center transition-all shadow-2xl shadow-primary/20"
          >
            Request A Quote <ArrowRight className="w-6 h-6 ml-4" />
          </motion.button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 80, rotate: 8, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-[4rem] blur-[100px] -z-10"></div>
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -2 }}
            className="relative"
          >
            <img src="https://picsum.photos/seed/ondemand/800/600" alt="On-Demand Booking" className="rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.2)] border-[12px] border-white" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AppScreens = () => {
  const screens = [
    { title: "Splash Screen", img: "https://picsum.photos/seed/splash/400/800" },
    { title: "Login/Signup", img: "https://picsum.photos/seed/login/400/800" },
    { title: "Home Screen", img: "https://picsum.photos/seed/home/400/800" },
    { title: "Event Details", img: "https://picsum.photos/seed/details/400/800" },
    { title: "Seat Selection", img: "https://picsum.photos/seed/seats/400/800" },
    { title: "Payment Gateway", img: "https://picsum.photos/seed/pay/400/800" },
  ];

  return (
    <section className="bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black rounded-full blur-[180px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom py-40 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-7xl md:text-8xl font-black mb-8 tracking-tight">App Screens</h2>
          <p className="text-3xl opacity-90 mb-24 max-w-4xl mx-auto font-medium leading-relaxed">Essential Screens for a Seamless Ticket Booking App Experience</p>
        </motion.div>
        
        <div className="flex overflow-x-auto pb-24 space-x-12 scrollbar-hide snap-x snap-mandatory px-8">
          {screens.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 120, scale: 0.7, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.1, duration: 1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex-shrink-0 w-[340px] snap-center"
            >
              <motion.div 
                whileHover={{ y: -20, scale: 1.05 }}
                className="relative aspect-[9/19] rounded-[4.5rem] border-[12px] border-white/20 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)] mb-10 group"
              >
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </motion.div>
              <h3 className="font-black text-3xl tracking-wide">{s.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: "01", title: "Requirement Analysis", desc: "Understanding your vision and defining the core features." },
    { num: "02", title: "UI/UX Design", desc: "Creating intuitive and visually stunning app interfaces." },
    { num: "03", title: "Development", desc: "Building robust frontend and backend architectures." },
    { num: "04", title: "Testing & QA", desc: "Rigorous quality checks for a bug-free experience." },
    { num: "05", title: "Deployment", desc: "Launching your app on App Store and Play Store." },
    { num: "06", title: "Support", desc: "Ongoing maintenance and feature updates." },
  ];

  return (
    <section className="py-40 bg-white">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">Our Development Process</h2>
          <p className="text-gray-600 text-2xl max-w-3xl mx-auto font-medium leading-relaxed">How we bring your ticket booking app to life through a systematic approach.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -15 }}
              className="relative pl-24 group"
            >
              <div className="absolute left-0 top-0 text-8xl font-black text-gray-100 leading-none select-none group-hover:text-primary/10 transition-colors duration-700">
                {s.num}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="text-3xl font-black mb-6 text-gray-900 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                <p className="text-gray-500 text-xl leading-relaxed font-medium">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Expert Developers", desc: "Years of experience in building high-performance apps." },
    { title: "Custom Solutions", desc: "Tailored exactly to your business requirements." },
    { title: "Scalable Architecture", desc: "Built to handle millions of users simultaneously." },
    { title: "24/7 Support", desc: "Always here to help you with any technical issues." },
  ];

  return (
    <section className="py-40 bg-gray-900 text-white overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-7xl font-black mb-16 tracking-tight leading-tight">Why Choose mTouch Labs?</h2>
          <div className="space-y-12">
            {reasons.map((r, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                className="flex items-start space-x-8 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-500 shadow-lg shadow-primary/10"
                >
                  <div className="w-5 h-5 rounded-full bg-primary group-hover:bg-white transition-colors"></div>
                </motion.div>
                <div>
                  <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="text-gray-400 text-xl leading-relaxed font-medium">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 80, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-[5rem] blur-[150px] -z-10"></div>
          <motion.div 
            whileHover={{ scale: 1.02, rotate: -2 }}
            className="aspect-square bg-gradient-to-br from-primary/30 to-blue-600/30 rounded-[5rem] overflow-hidden border border-white/20 shadow-[0_60px_120px_rgba(0,0,0,0.5)]"
          >
             <img src="https://picsum.photos/seed/team/800/800" alt="Our Team" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
            className="absolute -bottom-16 -left-16 bg-white p-12 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.3)] text-black hidden md:block border border-gray-100"
          >
             <p className="text-7xl font-black text-primary mb-3">10+</p>
             <p className="text-lg font-black text-gray-500 uppercase tracking-[0.3em]">Years Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: "Custom App Development", desc: "Customized ticketing systems for a range of sectors.", icon: "📱" },
    { title: "Mobile App Development", desc: "Native applications for Android and iOS.", icon: "📲" },
    { title: "Web App Development", desc: "Desktop and mobile web versions that are responsive.", icon: "🌐" },
    { title: "API Integrations", desc: "Real-time updates, seat bookings, and payment.", icon: "🔌" },
    { title: "UI/UX Design", desc: "Designs that are both aesthetically pleasing and easy to use.", icon: "🎨" },
    { title: "Marketing & User Acquisition", desc: "Social media, SEO, and marketing tactics.", icon: "📈" },
    { title: "Maintenance & Support", desc: "Frequent technical assistance and upgrades.", icon: "🛠️" },
    { title: "Cloud Hosting", desc: "Scalable and secure cloud infrastructure for your app.", icon: "🚀" },
  ];

  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-40 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">Ticket Booking App Development Services</h2>
          <p className="text-gray-600 text-2xl max-w-3xl mx-auto font-medium leading-relaxed">Top 8 Services for Ticket Booking App Development tailored for your success.</p>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {services.map((s, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.03, boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
              className="bg-white p-12 rounded-[3rem] shadow-sm transition-all duration-500 border border-gray-100 flex flex-col items-center text-center group"
            >
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="w-24 h-24 bg-gray-50 rounded-[2rem] flex items-center justify-center text-5xl mb-10 group-hover:bg-primary/10 transition-all duration-500"
              >
                {s.icon}
              </motion.div>
              <h3 className="font-black text-3xl mb-6 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-xl leading-relaxed font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const techs = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  ];

  return (
    <section className="py-40 bg-[#f8f4ff]">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">Technology We Use</h2>
          <p className="text-gray-600 text-2xl max-w-3xl mx-auto font-medium leading-relaxed">Key Features for a User-Friendly and Efficient Ticket Booking App</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
          {techs.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.8, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -15, scale: 1.1, boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
              className="bg-white p-10 rounded-[3rem] shadow-sm flex flex-col items-center justify-center transition-all duration-500 group"
            >
              <motion.img 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                src={t.logo} alt={t.name} className="h-16 w-auto mb-6 grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" 
              />
              <span className="text-lg font-black text-gray-700 tracking-tight group-hover:text-primary transition-colors">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What types of ticket booking apps do you develop?", a: "We develop a wide range of ticket booking apps including movie tickets, event tickets, travel tickets, and sports tickets." },
    { q: "Can the app integrate with third-party services and APIs?", a: "Yes, we provide seamless integration with payment gateways, social media, maps, and other third-party APIs." },
    { q: "Can you develop apps for both iOS and Android platforms?", a: "Absolutely! We specialize in both native and cross-platform app development for iOS and Android." },
    { q: "Can you help with app marketing and user acquisition?", a: "Yes, we offer comprehensive marketing services including SEO, social media marketing, and user acquisition strategies." },
    { q: "Can the app support multiple languages and currencies?", a: "Yes, our apps are designed to be global-ready with multi-language and multi-currency support." },
  ];

  return (
    <section className="py-40 bg-white">
      <div className="container-custom max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-8 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-2xl max-w-3xl mx-auto font-medium leading-relaxed">Everything you need to know about our development process.</p>
        </motion.div>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="border-2 border-gray-50 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-10 text-left font-black text-2xl hover:bg-gray-50 transition-colors group"
              >
                <span className="group-hover:text-primary transition-colors">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  className={`rounded-2xl p-4 transition-all duration-500 ${openIndex === i ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 text-gray-900'}`}
                >
                  {openIndex === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-10 text-gray-500 text-xl leading-relaxed font-medium border-t border-gray-50 mt-4 pt-10">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Main App ---

export default function TicketBookingApp() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white font-sans">
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Intro Section */}
        <section className="py-40 bg-gray-50 overflow-hidden">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <motion.div 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex flex-col"
              >
                <h2 className="text-6xl font-black mb-10 leading-tight tracking-tight">Custom Event Apps for Every Need</h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 120 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-3 bg-primary mb-12 rounded-full"
                ></motion.div>
                <p className="text-gray-600 leading-relaxed text-2xl font-medium">
                  We provide specialized solutions for different types of events, ensuring that your audience has the best possible experience from discovery to entry. Our expertise spans across multiple domains, delivering high-performance applications that scale.
                </p>
             </motion.div>
             <motion.div 
                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="bg-white p-20 rounded-[5rem] shadow-2xl border border-gray-100 relative group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
                <h3 className="text-5xl font-black mb-10 text-gray-900 leading-tight group-hover:text-primary transition-colors">Ticket Booking App Development</h3>
                <p className="text-gray-600 leading-relaxed text-xl font-medium">
                  In the age of digital transformation, the way we book and manage tickets has evolved significantly. Our ticket booking app development services are at the forefront of this transformation, providing creative solutions that improve the user experience and streamline the ticketing process. Whether you're organising concerts, sports events, theatre performances, or conferences, our custom-built apps offer a streamlined, efficient, and user-friendly ticket ordering and management experience.
                </p>
             </motion.div>
          </div>
        </section>

        <OnDemandSection />
        <AppScreens />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUs />
        <TechnologySection />
        <ContactSection />
        <FAQ />
      </main>
    </div>
  );
}
