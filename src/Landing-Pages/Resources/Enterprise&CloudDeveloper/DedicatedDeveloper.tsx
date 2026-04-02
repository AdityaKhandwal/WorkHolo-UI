import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ArrowRight,
  CheckCircle2,
  Trophy,
  RefreshCw,
  Handshake,
  Globe,
  Smartphone,
  Wrench,
  Cloud,
  Cpu,
  Building2,
  Plus,
  Minus,
  MessageCircle,
  ChevronUp,
  X,
} from "lucide-react";

// --- Components ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-[15px]";
  const variants = {
    primary:
      "bg-[#7B2CBF] hover:bg-[#6A23A6] text-white shadow-lg shadow-purple-500/20",
    secondary:
      "bg-[#7B2CBF] hover:bg-[#6A23A6] text-white shadow-lg shadow-purple-500/20",
    outline:
      "border-2 border-white/20 hover:border-white/40 text-white bg-transparent",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20BD5C] text-white shadow-lg shadow-green-500/20",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
}: {
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}) => (
  <div className={`mb-16 ${centered ? "text-center" : ""}`}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-blue-500" />
        ) : (
          <Plus className="w-5 h-5 text-blue-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function DedicatedDeveloper() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen selection:bg-purple-500/30">
      {/* Top Bar */}

      {/* Navbar */}

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[60] bg-[#050A18] p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold">WorkHolo Labs</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {[
                "Home",
                "Services",
                "Products",
                "Resources",
                "Portfolio",
                "Careers",
                "Contact Us",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-2xl font-semibold hover:text-blue-400"
                >
                  {item}
                </a>
              ))}
              <Button variant="secondary" className="mt-8 w-full py-4 text-lg">
                Request Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-[200px] pb-32 overflow-hidden bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight leading-[1.1]"
          >
            Hire <span className="text-blue-500">Dedicated</span> <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Developers in India
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            If you're looking to hire dedicated developers in India who work as
            a true extension of your team, WorkHolo Labs is ready to collaborate.
            Build faster, scale confidently, and innovate continuously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              variant="secondary"
              className="w-full sm:w-auto px-10 py-4 text-lg"
            >
              Hire Developers <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-10 py-4 text-lg"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Scaling your digital product often requires more than just
              outsourcing a project. It requires reliable, long-term technical
              talent that works as an extension of your internal team.
            </p>
            <p className="mt-8 text-blue-400 font-semibold italic text-lg">
              At WorkHolo Labs, we provide dedicated developers in India who
              integrate seamlessly into your workflow, align with your product
              vision, and contribute consistently to your growth.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Projects Delivered", value: "500+" },
              { label: "Global Clients", value: "1050+" },
              { label: "Years in Tech", value: "14+" },
              { label: "Satisfaction Rate", value: "99%" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-8 rounded-3xl bg-white/5 border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Model Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title={
              <>
                A Flexible Model for{" "}
                <span className="text-blue-500">Growing Businesses</span>
              </>
            }
            subtitle="Hiring dedicated developers gives you full-time commitment and greater control."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Time Commitment",
                desc: "Developers fully committed to your project and goals.",
                icon: <Building2 className="w-8 h-8 text-purple-500" />,
              },
              {
                title: "Direct Communication",
                desc: "Direct communication and full transparency at every stage.",
                icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
              },
              {
                title: "Greater Control",
                desc: "Greater control over development priorities and workflow.",
                icon: <Wrench className="w-8 h-8 text-yellow-500" />,
              },
              {
                title: "Faster Turnaround",
                icon: <Cpu className="w-8 h-8 text-red-500" />,
                desc: "Faster turnaround times with dedicated focus.",
              },
              {
                title: "Product Continuity",
                icon: <RefreshCw className="w-8 h-8 text-green-500" />,
                desc: "Long-term product continuity with consistent team members.",
              },
              {
                title: "Stability & Efficiency",
                icon: <Handshake className="w-8 h-8 text-blue-400" />,
                desc: "Stability and efficiency for startups and enterprises alike.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32 bg-[#080E1E]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title={
              <>
                Why Choose <span className="text-blue-500">WorkHolo Labs?</span>
              </>
            }
            subtitle="We prioritize reliability, accountability, and measurable outcomes."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "14+ Years Experience",
                icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
                desc: "Over 14 years of software development experience.",
              },
              {
                title: "Vetted Developers",
                icon: <Trophy className="w-6 h-6 text-yellow-500" />,
                desc: "Skilled and thoroughly vetted developers for every project.",
              },
              {
                title: "Agile Management",
                icon: <RefreshCw className="w-6 h-6 text-blue-500" />,
                desc: "Agile project management with transparent processes.",
              },
              {
                title: "Partnership Mindset",
                icon: <Handshake className="w-6 h-6 text-purple-500" />,
                desc: "Long-term partnership mindset with flexible engagement terms.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title={
              <>
                Access to{" "}
                <span className="text-blue-500">
                  Multi-Technology Expertise
                </span>
              </>
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web development",
                icon: <Globe className="w-6 h-6 text-blue-500" />,
              },
              {
                title: "Mobile app development",
                icon: <Smartphone className="w-6 h-6 text-purple-500" />,
              },
              {
                title: "Full stack engineering",
                icon: <Wrench className="w-6 h-6 text-yellow-500" />,
              },
              {
                title: "Cloud & DevOps",
                icon: <Cloud className="w-6 h-6 text-blue-300" />,
              },
              {
                title: "AI & machine learning",
                icon: <Cpu className="w-6 h-6 text-red-500" />,
              },
              {
                title: "Enterprise systems",
                icon: <Building2 className="w-6 h-6 text-gray-400" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all cursor-default group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                  {item.icon}
                </div>
                <span className="text-lg font-semibold">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#EFEFEF]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="space-y-2">
            <FAQItem
              question="Why hire dedicated developers in India?"
              answer="India offers skilled professionals, cost efficiency, and flexible engagement models suitable for startups and enterprises. The large talent pool ensures you find the exact expertise needed for your project."
            />
            <FAQItem
              question="How does the dedicated developer model work?"
              answer="We assign a full-time developer or team to your project. They work exclusively for you, following your processes and tools, while we handle the administrative and infrastructure aspects."
            />
            <FAQItem
              question="Can I scale the team later?"
              answer="Yes, our model is highly flexible. You can scale your team up or down based on your project requirements with minimal notice."
            />
            <FAQItem
              question="Do you provide project management support?"
              answer="While the developers work under your direction, we provide an account manager and technical lead to ensure smooth delivery and address any operational needs."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Scale Smarter with{" "}
            <span className="text-blue-500">Dedicated Developers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mb-12"
          >
            Ready to take your product to the next level? Our team is standing
            by to help you build faster and scale confidently.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="px-12 py-4 text-lg">
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="whatsapp" className="px-12 py-4 text-lg">
              WhatsApp <MessageCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}

      {/* Footer */}

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 text-white"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.button>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/40 text-white"
          >
            <ChevronUp className="w-7 h-7" />
          </motion.button>
        )}
      </div>
    </div>
  );
}
