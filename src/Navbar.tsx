import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Globe,
  Smartphone,
  Code,
  Cloud,
  Palette,
  TrendingUp,
  ShoppingBag,
  Calendar,
  BookOpen,
  HeartPulse,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const TOP_BAR = {
  email: "hr@workholo.com",
  phone1: "+91-XXXXXXXXXX",
  phone2: "+1-XXX-XXX-XXXX",
  Corousel: [
    "Welcome to WorkHolo Platform",
    "Real-Time Chat & Collaboration",
    "Create Organizations & Teams",
    "Manage Channels Seamlessly",
    "Integrated SIP Calling System",
    "Secure Role-Based Access Control",
  ],
  locations: "India | Remote Teams | Global Clients",
};

const NAV_DATA = [
  {
    title: "Home",
    hasMegaMenu: true,
    items: [
      {
        id: "about-us",
        label: "About WorkHolo",
        icon: Users,
        description:
          "WorkHolo is a communication platform enabling real-time chat, SIP calling, and team collaboration.",
        links: [], // Home uses a different center layout in screenshot
      },
      {
        id: "blog",
        label: "Blog",
        icon: BookOpen,
        description: "Discover expert ideas and innovations on our Blogs",
        links: [],
      },
    ],
    centerContent: {
      title: "PRODUCT UPDATES",
      links: [
        {
          label: "Chat System Implementation",
          desc: "Real-time messaging with notifications and UI responsiveness",
          href: "#",
        },
        {
          label: "SIP Trunk Integration",
          desc: "Connecting DID numbers with web-based dialer system",
          href: "#",
        },
        {
          label: "Role-Based Access Control",
          desc: "Managing user roles, permissions and feature access",
          href: "#",
        },
        {
          label: "Notification System Fixes",
          desc: "Improving real-time alerts and sound updates",
          href: "#",
        },
        {
          label: "Team & Channel Management",
          desc: "Creating and managing teams, channels, and users",
          href: "#",
        },
      ],
    },
    whySection: {
      title: "ABOUT WORKHOLO",
      points: [
        "Real-Time Messaging & Chat System",
        "SIP Trunk & DID Integration",
        "Role-Based Access Control",
        "Multi-Team & Channel Management",
        "Scalable Web Communication Platform",
      ],
      buttonText: "Get in Touch",
    },
  },
  {
    title: "Services",
    hasMegaMenu: true,
    items: [
      {
        id: "software-dev",
        label: "Communication System Development",
        icon: Code,
        description:
          "Delivering seamless digital experiences with expert software development.",
        links: [
          {
            label: "Chat System Development",
            desc: "Real-time messaging with notifications",
            href: "#",
          },
          {
            label: "Web Application Development",
            desc: "Scalable frontend and backend systems",
            href: "#",
          },
          {
            label: "Authentication System",
            desc: "Secure login and session handling",
            href: "#",
          },
          {
            label: "Role & Permission System",
            desc: "Admin and user access control",
            href: "#",
          },
        ],
      },
      {
        id: "cloud-devops",
        label: "Cloud & DevOps",
        icon: Cloud,
        description: "Hosting and managing real-time communication systems",
        links: [],
      },
      {
        id: "salesforce",
        label: "Salesforce",
        icon: ShieldCheck,
        description: "CRM customization, integration and consulting",
        links: [],
      },
      {
        id: "design-exp",
        label: "Design & Experience",
        icon: Palette,
        description: "User-centric UI/UX design that drives engagement",
        links: [],
      },
      {
        id: "digital-marketing",
        label: "Digital Marketing Solutions",
        icon: TrendingUp,
        description: "SEO, PPC and social media strategies that grow revenue",
        links: [],
      },
    ],
    whySection: {
      title: "WHY MTOUCH LABS?",
      points: [
        "Client-Centric, Result-Driven Approach",
        "End-to-End IT & Digital Transformation Solutions",
        "Efficient Development with Speed & Quality",
        "Dedicated In-House Expert Team",
        "Proven Track Record Across 20+ Industries",
      ],
      buttonText: "Get in Touch",
    },
  },
  {
    title: "Products",
    hasMegaMenu: true,
    items: [
      {
        id: "on-demand",
        label: "On-Demand & Delivery Apps",
        icon: ShoppingBag,
        description:
          "Transforming everyday services into on-demand experiences.",
        links: [
          {
            label: "Food Delivery App",
            desc: "Multi-restaurant ordering with real-time tracking",
            href: "#",
          },
          {
            label: "Grocery Delivery App",
            desc: "Quick commerce for daily essentials",
            href: "#",
          },
          {
            label: "Milk Delivery App",
            desc: "Subscription-based daily delivery management",
            href: "#",
          },
          {
            label: "Car Wash App",
            desc: "On-demand vehicle care at your doorstep",
            href: "#",
          },
          {
            label: "Chef Management App",
            desc: "On-demand vehicle care at your doorstep",
            href: "#",
          },
        ],
      },
      {
        id: "booking",
        label: "Booking and Service Platforms",
        icon: Calendar,
        description: "Seamless scheduling and appointment management apps",
        links: [],
      },
      {
        id: "ecommerce",
        label: "E-Commerce & Marketplace Solutions",
        icon: ShoppingBag,
        description: "Multi-vendor stores and online shopping platforms",
        links: [],
      },
      {
        id: "edu-ent",
        label: "Education & Entertainment",
        icon: BookOpen,
        description: "eLearning platforms and interactive media solutions",
        links: [],
      },
      {
        id: "health",
        label: "Healthcare & Wellness",
        icon: HeartPulse,
        description: "Patient management and telemedicine applications",
        links: [],
      },
      {
        id: "social",
        label: "Social & Media Apps",
        icon: Users,
        description: "Community building and content sharing platforms",
        links: [],
      },
    ],
    whySection: {
      title: "OUR PRODUCT EDGE",
      points: [
        "Scalable & Future-Ready Architecture",
        "AI-Enabled & Data-Driven Solutions",
        "User-Centric UI/UX Design Excellence",
        "High-Performance & Secure Platforms",
        "Continuous Innovation & Product Optimization",
      ],
      buttonText: "Get in Touch",
    },
  },
  {
    title: "Resources",
    hasMegaMenu: true,
    items: [
      {
        id: "mobile-devs",
        label: "Mobile App Developers",
        icon: Smartphone,
        description:
          "Mobile App Development - From concept to code, we create apps that connect an...",
        links: [
          {
            label: "Mobile App Developers",
            desc: "Full-cycle iOS & Android app specialists",
            href: "#",
          },
          {
            label: "Native App Developers",
            desc: "Platform-specific apps for peak performance",
            href: "#",
          },
          {
            label: "Android App Developers",
            desc: "Kotlin & Java experts for the Play Store",
            href: "#",
          },
          {
            label: "Hybrid App Developers",
            desc: "Single codebase apps across iOS & Android",
            href: "#",
          },
          {
            label: "iOS App Developers",
            desc: "Swift developers for iPhone & Apple ecosystem",
            href: "#",
          },
          {
            label: "Flutter App Developers",
            desc: "Google's UI toolkit for beautiful cross-platform apps",
            href: "#",
          },
          {
            label: "iPad App Developers",
            desc: "Tablet-optimized apps for enterprise & education",
            href: "#",
          },
          {
            label: "React Native Developers",
            desc: "JavaScript-powered mobile apps with native feel",
            href: "#",
          },
          {
            label: "Custom Software Developers",
            desc: "Bespoke solutions tailored to your workflow",
            href: "#",
          },
        ],
      },
      {
        id: "web-devs",
        label: "Web App Developers",
        icon: Globe,
        description: "Full-stack developers for scalable web applications",
        links: [],
      },
      {
        id: "enterprise-cloud",
        label: "Enterprise & Cloud Developers",
        icon: Cloud,
        description: "AWS, DevOps and cloud infrastructure specialists",
        links: [],
      },
      {
        id: "design-creative",
        label: "Design & Creative Experts",
        icon: Palette,
        description: "UI/UX designers and creative professionals on demand",
        links: [],
      },
    ],
    whySection: {
      title: "HIRING MADE EASY",
      points: [
        "Pre-Vetted & Skilled IT Professionals",
        "Flexible Hiring Models (Hourly, Dedicated, Project-Based)",
        "Quick Onboarding & Seamless Integration",
        "Cost-Effective Resource Engagement",
        "Transparent Communication & Full Control",
      ],
      buttonText: "Start Hiring",
    },
  },
  { title: "Portfolio", hasMegaMenu: false },
  { title: "Careers", hasMegaMenu: false },
  { title: "Contact Us", hasMegaMenu: false },
];

interface NavbarProps {
  scrolled: boolean;
}

function NavbarZ({ scrolled }: NavbarProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % TOP_BAR.Corousel.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavHover = (title: string, hasMegaMenu: boolean) => {
    if (hasMegaMenu) {
      setActiveMegaMenu(title);
      const menu = NAV_DATA.find((n) => n.title === title);
      if (menu && menu.items && menu.items.length > 0) {
        setActiveSubItem(menu.items[0].id);
      }
    } else {
      setActiveMegaMenu(null);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 font-sans">
      {/* Top Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "opacity-0 pointer-events-none"
            : "bg-[#0a0a0a] text-white py-1.5 px-6 lg:px-12 flex items-center justify-between text-[11px] font-medium border-b border-white/10"
        }`}
      >
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`mailto:${TOP_BAR.email}`}
            className="flex items-center gap-1.5 hover:text-[#0096FF] transition-colors"
          >
            <Mail size={12} className="text-white" />
            {TOP_BAR.email}
          </a>
          <a
            href={`tel:${TOP_BAR.phone1}`}
            className="flex items-center gap-1.5 hover:text-[#0096FF] transition-colors"
          >
            <Phone size={12} className="text-white" />
            {TOP_BAR.phone1}
          </a>
          <a
            href={`tel:${TOP_BAR.phone2}`}
            className="flex items-center gap-1.5 hover:text-[#0096FF] transition-colors"
          >
            <Phone size={12} className="text-white" />
            {TOP_BAR.phone2}
          </a>
        </div>
        <div className="flex items-center justify-center flex-1 overflow-hidden">
          <div className="relative w-full max-w-[600px] px-2 h-[20px] overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={carouselIndex}
                initial={{ x: "100%", opacity: 0, filter: "blur(4px)" }}
                animate={{ x: "0%", opacity: 1, filter: "blur(0px)" }}
                exit={{ x: "-100%", opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute w-full text-center px-1 text-[#EFEFEF] font-semibold tracking-[2px] text-[7px] md:text-[11px] lg:text-[12px]"
              >
                {TOP_BAR.Corousel[carouselIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/80">{TOP_BAR.locations}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#EFEFEF] backdrop-blur-md py-2"
            : "bg-transparent pt-8 pb-2"
        }`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center p-1.5">
                <div className="text-white font-black text-xl leading-none">
                  <img src={`../src/assets/WorkHolo-logo.png`} />
                </div>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-2xl font-bold tracking-tight leading-none ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  WorkHolo
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_DATA.map((nav) => (
              <div
                key={nav.title}
                className="relative h-full flex items-center group"
                onMouseEnter={() => handleNavHover(nav.title, nav.hasMegaMenu)}
              >
                <a
                  href="#"
                  className={`text-[15px] font-bold flex items-center gap-1 transition-colors py-2 ${
                    activeMegaMenu === nav.title
                      ? "text-[#7B2CBF]"
                      : scrolled
                        ? "text-black hover:text-[#7B2CBF]"
                        : "text-white hover:text-[#7B2CBF]"
                  }`}
                >
                  {nav.title}
                  {nav.hasMegaMenu && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${activeMegaMenu === nav.title ? "rotate-180" : ""}`}
                    />
                  )}
                </a>
                {activeMegaMenu === nav.title && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#7B2CBF]"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:flex items-center gap-2 bg-[#7B2CBF] text-white px-5 py-2 text-[15px] font-bold hover:bg-[#9b62cd] hover:text-grey-300 transition-all duration-300 shadow-lg group">
              Request Quote
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              className="lg:hidden p-2 text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl hidden lg:block"
              ref={menuRef}
            >
              <div className="max-w-[1920px] mx-auto flex min-h-[550px]">
                {/* Left Sidebar */}
                <div className="w-[300px] border-r border-gray-100 p-6 bg-white">
                  <h3 className="text-[14px] font-black text-[#7B2CBF] uppercase tracking-wider mb-6">
                    {activeMegaMenu.toUpperCase()}
                  </h3>
                  <div className="space-y-1">
                    {NAV_DATA.find(
                      (n) => n.title === activeMegaMenu,
                    )?.items?.map((item) => (
                      <button
                        key={item.id}
                        onMouseEnter={() => setActiveSubItem(item.id)}
                        className={`w-full flex items-start gap-3 p-3.5 rounded-lg transition-all text-left group ${
                          activeSubItem === item.id
                            ? "bg-blue-50/50 border-l-4 border-[#7B2CBF]"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-md shrink-0 transition-colors ${activeSubItem === item.id ? "bg-[#7B2CBF] text-white" : "bg-blue-50 text-[#7B2CBF]"}`}
                        >
                          <item.icon size={18} />
                        </div>
                        <div className="overflow-hidden">
                          <div
                            className={`text-[14px] font-bold leading-tight ${activeSubItem === item.id ? "text-[#7B2CBF]" : "text-gray-800"}`}
                          >
                            {item.label}
                          </div>
                          <p className="text-[11px] text-gray-500 mt-1 leading-tight line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        {activeSubItem === item.id && (
                          <ArrowRight
                            size={12}
                            className="text-[#7B2CBF] ml-auto shrink-0 mt-1"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Center Content */}
                <div className="flex-1 p-10 bg-white overflow-y-auto">
                  {activeMegaMenu === "Home" ? (
                    <div className="space-y-8">
                      <h4 className="text-[13px] font-black text-[#7B2CBF] uppercase tracking-widest border-b border-blue-100 pb-2 inline-block">
                        {
                          NAV_DATA.find((n) => n.title === "Home")
                            ?.centerContent?.title
                        }
                      </h4>
                      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                        {NAV_DATA.find(
                          (n) => n.title === "Home",
                        )?.centerContent?.links.map((blog, idx) => (
                          <a key={idx} href={blog.href} className="group block">
                            <h5 className="text-[15px] font-bold text-gray-800 group-hover:text-[#7B2CBF] transition-colors mb-1">
                              {blog.label}
                            </h5>
                            <p className="text-[12px] text-gray-500 leading-relaxed group-hover:text-gray-700">
                              {blog.desc}
                            </p>
                            <div className="mt-2 flex items-center gap-1 text-[11px] font-bold text-[#7B2CBF] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                              Read More <ArrowRight size={10} />
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="flex justify-end pt-4">
                        <a
                          href="#"
                          className="flex items-center gap-2 text-[#7B2CBF] font-bold text-sm hover:underline"
                        >
                          View All Blogs <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  ) : (
                    activeSubItem && (
                      <div className="space-y-8">
                        <h4 className="text-[13px] font-black text-[#7B2CBF] uppercase tracking-widest border-b border-blue-100 pb-2 inline-block">
                          {NAV_DATA.find((n) => n.title === activeMegaMenu)
                            ?.items?.find((i) => i.id === activeSubItem)
                            ?.label.toUpperCase()}
                        </h4>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                          {NAV_DATA.find((n) => n.title === activeMegaMenu)
                            ?.items?.find((i) => i.id === activeSubItem)
                            ?.links.map((link, idx) => (
                              <a
                                key={idx}
                                href={link.href}
                                className="group flex flex-col py-1 transition-all"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[15px] font-bold text-gray-800 group-hover:text-[#7B2CBF] transition-colors">
                                    {link.label}
                                  </span>
                                  <ArrowRight
                                    size={14}
                                    className="text-[#7B2CBF] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                                  />
                                </div>
                                <span className="text-[11px] text-gray-400 group-hover:text-gray-500 transition-colors mt-0.5">
                                  {link.desc}
                                </span>
                              </a>
                            ))}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Right Sidebar */}
                <div className="w-[320px] bg-[#6c09c4] p-10 text-white flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-[16px] font-black mb-8 leading-tight tracking-wide border-b border-white/20 pb-4">
                      {
                        NAV_DATA.find((n) => n.title === activeMegaMenu)
                          ?.whySection?.title
                      }
                    </h3>
                    <ul className="space-y-5">
                      {NAV_DATA.find(
                        (n) => n.title === activeMegaMenu,
                      )?.whySection?.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 size={14} className="text-white" />
                          </div>
                          <span className="text-[13px] font-medium leading-relaxed text-blue-50">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-10 w-full bg-white text-[#6c09c4] py-4 rounded-lg font-bold text-[15px] hover:bg-blue-50 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 group">
                    {
                      NAV_DATA.find((n) => n.title === activeMegaMenu)
                        ?.whySection?.buttonText
                    }
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden overflow-y-auto"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-sm">M</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">
                    mTouch Labs
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-black"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {NAV_DATA.map((nav) => (
                  <div
                    key={nav.title}
                    className="border-b border-gray-100 pb-3"
                  >
                    <div className="flex items-center justify-between py-2">
                      <span className="text-[17px] font-bold text-gray-900">
                        {nav.title}
                      </span>
                      {nav.hasMegaMenu && (
                        <ChevronDown size={18} className="text-gray-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10 space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <a
                    href={`tel:${TOP_BAR.phone1}`}
                    className="flex items-center gap-3 text-gray-700 text-sm font-bold"
                  >
                    <Phone size={18} className="text-[#0096FF]" />
                    {TOP_BAR.phone1}
                  </a>
                  <a
                    href={`mailto:${TOP_BAR.email}`}
                    className="flex items-center gap-3 text-gray-700 text-sm font-bold"
                  >
                    <Mail size={18} className="text-[#0096FF]" />
                    {TOP_BAR.email}
                  </a>
                </div>
                <button className="w-full bg-[#0096FF] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-100">
                  Request Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavbarZ scrolled={scrolled} />
    </div>
  );
}
