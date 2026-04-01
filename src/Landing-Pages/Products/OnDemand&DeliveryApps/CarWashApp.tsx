import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { 
  Smartphone, 
  Monitor, 
  Globe, 
  User, 
  Calendar, 
  MapPin, 
  CreditCard, 
  CheckCircle, 
  XCircle, 
  Layers,
  Settings,
  Users,
} from 'lucide-react';

const PlatformCard = ({ icon: Icon, label }: { icon: LucideIcon; label: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center gap-4 w-full"
  >
    <div className="p-4 bg-gray-50 rounded-full">
      <Icon size={40} className="text-gray-800" />
    </div>
    <h3 className="text-xl font-bold text-gray-800">{label}</h3>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description, image }: { icon:LucideIcon; title: string; description: string; image: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4 border border-gray-100"
  >
    <img src={image} alt={title} className="w-full h-48 object-contain mb-4" referrerPolicy="no-referrer" />
    <div className="flex items-center gap-3">
      <div className="p-2 bg-blue-50 rounded-lg">
        <Icon size={24} className="text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-[#0A1128]">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center gap-2 text-white">
    <span className="text-5xl font-bold">{value}</span>
    <span className="text-sm font-medium opacity-90">{label}</span>
  </div>
);

const ServiceItem = ({ icon: Icon, title, description, align = "left" }: { icon: LucideIcon; title: string; description: string; align?: "left" | "right" }) => (
  <div className={`flex gap-4 ${align === "right" ? "flex-row-reverse text-right" : "flex-row text-left"}`}>
    <div className="flex-shrink-0">
      <div className="p-3 bg-blue-50 rounded-xl">
        <Icon size={28} className="text-blue-600" />
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <h4 className="text-lg font-bold text-[#0A1128]">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const TechCategory = ({ title, items }: { title: string; items: { name: string; icon: string }[] }) => (
  <div className="flex flex-col gap-6">
    <h4 className="text-lg font-bold text-[#0A1128] border-b pb-2">{title}:</h4>
    <div className="flex flex-wrap gap-8 items-center">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
          <img src={item.icon} alt={item.name} className="h-10 object-contain" referrerPolicy="no-referrer" />
          <span className="text-xs font-medium text-gray-500">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function CarWashApp() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}

      {/* Header */}

      {/* Mobile Menu */}

      <main>
        {/* Hero Section */}
        <section className="bg-hero-gradient pt-20 pb-32 px-4 md:px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                On-Demand Car Wash
              </h1>
              <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
                Elevate your car wash experience with our innovative app, featuring easy booking, real-time tracking, and personalized wash packages.
              </p>
              <button className="bg-[#FF6B00] hover:bg-[#e66000] text-white px-10 py-4 rounded-md text-lg font-bold transition-all shadow-xl">
                Get Demo
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              <img 
                src="https://picsum.photos/seed/carwash/800/600" 
                alt="Car Wash" 
                className="w-full h-auto rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 hidden lg:block">
                <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Booking Success</p>
                    <p className="text-sm font-bold text-gray-800">Your wash is scheduled!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
        </section>

        {/* Platform Support */}
        <section className="py-24 px-4 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0A1128] mb-4">Platform Supporting Car Wash Web & App</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A comprehensive platform that seamlessly integrates web and mobile app solutions for efficient car wash management and customer engagement.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <PlatformCard icon={Smartphone} label="iOS" />
            <PlatformCard icon={Smartphone} label="Android" />
            <PlatformCard icon={Monitor} label="Desktop" />
            <PlatformCard icon={Globe} label="Web Application" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0A1128] mb-4 italic">Features of Car Washing Apps</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our car washing apps come packed with features designed to enhance user experience and operational efficiency.
            </p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={User} 
              title="User Profiles" 
              description="Customers can create and manage profiles to track their service history and preferences."
              image="https://picsum.photos/seed/profile/400/300"
            />
            <FeatureCard 
              icon={Calendar} 
              title="Service Booking" 
              description="Users can schedule car washing services at their convenience, selecting time slots that suit their schedules."
              image="https://picsum.photos/seed/booking/400/300"
            />
            <FeatureCard 
              icon={MapPin} 
              title="Real-time Tracking" 
              description="Customers can track the status of their car wash service in real-time, ensuring transparency and reliability."
              image="https://picsum.photos/seed/tracking/400/300"
            />
            <FeatureCard 
              icon={CreditCard} 
              title="Payment Integration" 
              description="We offer secure payment gateways that allow users to pay online seamlessly, with multiple payment options available."
              image="https://picsum.photos/seed/payment/400/300"
            />
            <FeatureCard 
              icon={Layers} 
              title="Book a Wash" 
              description="Easily schedule a car wash at your convenience with just a few taps. Choose your preferred service and time."
              image="https://picsum.photos/seed/wash/400/300"
            />
            <FeatureCard 
              icon={XCircle} 
              title="Cancel Request" 
              description="Plans changed? Effortlessly cancel or reschedule your car wash appointment through the app."
              image="https://picsum.photos/seed/cancel/400/300"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-stats-gradient py-20 px-4 md:px-12">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">Are you ready to take your car wash business to the next</h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatItem value="250+" label="Projects Launched" />
            <StatItem value="250+" label="Satisfied Clients" />
            <StatItem value="14+" label="Year Experience" />
            <StatItem value="97+" label="Client Retention" />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 md:px-12 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-extrabold text-[#0A1128] italic">Car Washing App Development Services</h2>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 flex flex-col gap-12">
              <ServiceItem 
                icon={Smartphone} 
                title="Custom Car Wash App Solutions" 
                description="Tailored app development to meet the specific needs of your car wash business, whether it's for a single location or a large franchise."
              />
              <ServiceItem 
                icon={Layers} 
                title="On-Demand Car Wash App Development" 
                description="Build apps that enable customers to book car wash services instantly from their mobile devices."
              />
              <ServiceItem 
                icon={Calendar} 
                title="Real-Time Booking & Scheduling" 
                description="Integration of live availability features, allowing customers to book services at their convenience."
              />
            </div>
            
            <div className="flex-1 flex justify-center relative">
              <div className="relative z-10">
                <img 
                  src="https://picsum.photos/seed/phone/300/600" 
                  alt="Phone Mockup" 
                  className="w-[280px] h-auto rounded-[3rem] border-[8px] border-gray-900 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-200 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-100 rounded-full animate-pulse delay-75"></div>
            </div>

            <div className="flex-1 flex flex-col gap-12">
              <ServiceItem 
                icon={CreditCard} 
                title="Multiple Payment Gateway Integration" 
                description="Secure payment methods including credit/debit cards, digital wallets, and in-app purchases."
                align="right"
              />
              <ServiceItem 
                icon={MapPin} 
                title="GPS Tracking & Geo-Fencing" 
                description="Enable users to locate nearby car wash stations and track service providers in real-time."
                align="right"
              />
              <ServiceItem 
                icon={Users} 
                title="Multi-Vendor Support" 
                description="Manage multiple service providers under one app, allowing each to handle bookings, pricing, and service offerings independently."
                align="right"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16">
            <ServiceItem 
              icon={Settings} 
              title="Admin Dashboard Development" 
              description="A powerful backend system for admins to manage appointments, monitor business analytics, track orders, and maintain user data."
            />
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-24 px-4 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#0A1128] mb-4">Technology Stack</h2>
            <p className="text-gray-600">Top Technologies Powering Your Car Wash App</p>
          </div>
          <div className="max-w-5xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col gap-16">
            <TechCategory 
              title="Frontend Development" 
              items={[
                { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
                { name: "Flutter", icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
                { name: "Swift", icon: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
                { name: "Kotlin", icon: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" }
              ]}
            />
            <TechCategory 
              title="Backend Development" 
              items={[
                { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
                { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
                { name: "PHP", icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" }
              ]}
            />
            <TechCategory 
              title="Payment Gateways" 
              items={[
                { name: "PayPal", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
                { name: "Stripe", icon: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
                { name: "Razorpay", icon: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" }
              ]}
            />
            <TechCategory 
              title="Cloud Storage" 
              items={[
                { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
                { name: "Google Cloud", icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
                { name: "Azure DevOps", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" }
              ]}
            />
          </div>
        </section>
      </main>

      {/* Footer */}

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="bg-green-500 p-4 rounded-full shadow-2xl cursor-pointer relative"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8" />
        </motion.div>
      </div>
    </div>
  );
}
