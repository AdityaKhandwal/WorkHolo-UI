import logoImage from "../src/assets/WorkHolo-logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const TOP_BAR = {
  email: "hr@workholo.com",
  phone1: "+91-XXXXXXXXXX",
  carousel: [
    "Build Websites & Software for Your Business",
    "Ready-Made Solutions Available for Instant Launch",
    "Custom Development Based on Your Requirements",
    "Scalable Digital Products for Growing Businesses",
    "Launch Faster with WorkHolo Solutions",
  ],
  locations: "India | Serving Clients Worldwide",
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
          "WorkHolo builds ready-to-use and custom websites and software solutions for businesses to launch and scale faster.",
        links: [],
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
      title: "LATEST SOLUTIONS",
      links: [
        {
          label: "Business Website Solutions",
          desc: "Modern websites ready to customize and launch",
        },
        {
          label: "Admin Dashboard Systems",
          desc: "Manage users, data, and analytics easily",
        },
        {
          label: "E-Commerce Platforms",
          desc: "Complete online store solutions",
        },
        {
          label: "Custom Software Projects",
          desc: "Tailored systems built for your needs",
        },
        {
          label: "Automation Tools",
          desc: "Improve workflows with smart systems",
        },
      ],
    },
    whySection: {
      title: "ABOUT WORKHOLO",
      points: [
        "Ready-to-Launch Digital Products",
        "Fully Customizable Solutions",
        "Fast Development & Delivery",
        "Scalable & Future-Ready Systems",
        "Built for Real Business Needs",
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
        label: "Software Development",
        icon: Code,
        description:
          "We design and build websites and software tailored to your business needs.",
        links: [
          {
            label: "Mobile App Development",
            desc: "Custom iOS, Android & cross-platform solution",
          },
          {
            label: "iOs App Development",
            desc: "Native iPhone apps with seamless UX",
          },
          {
            label: "Android App Development",
            desc: "Robust apps for the Android ecosystem",
          },
          {
            label: "ipad App Development",
            desc: "Optimized tablet experiences for enterprise",
          },
          {
            label: "Flutter App Development",
            desc: "Cross-platform apps from a single codebase",
          },
          {
            label: "React Native App Development",
            desc: "High-performance hybrid mobile apps",
          },
          {
            label: "Cross-Platform Development",
            desc: "build once, deploy everywhere",
          },
          {
            label: "Web Application Development",
            desc: "Scalable web apps built for your business",
          },
          {
            label: "Custom Software Development",
            desc: "Tailored solution for unique business needs",
          },
          {
            label: "CMS & Portal Development",
            desc: "Optimized tablet experiences for enterprise",
          },
          {
            label: "Enterprise Application Development",
            desc: "Scalable, Secure & cloud-native enterprise software",
          },
          {
            label: "App maintainance & Support",
            desc: "Ongoing updates, bug fixes & performance optimization",
          },
        ],
      },
      {
        id: "cloud-hosting",
        label: "Cloud Hosting & Deployment",
        icon: Cloud,
        description: "Hosting and managing real-time communication systems",
        links: [
          {
            label: "Cloud Services",
            desc: "Secure, scalable cloud infrastructure and deployment solutions",
          },
          {
            label: "Cloud Migration Services",
            desc: "Seamless migration of application and data to modern cloud platforms",
          },
          {
            label: "Cloud Security Services",
            desc: "Advanced cloud security, compliance, and threat protection for your infrastructure",
          },
          {
            label: "IoT Development",
            desc: "Custom IoT solutions with device integration, cloud connectivity, and real-time analytics",
          },
          {
            label: "DevOps Services",
            desc: "Ci/CD automation, infrastructure as code, and faster release cycles",
          },
          {
            label: "DevOps Consulting Services",
            desc: "Strategic DevOps advisory to improve performance and scalability",
          },
          {
            label: "Cloud Managed Services",
            desc: "24/7 monitoring, optimization, and ongoing cloud management support",
          },
          {
            label: "AWS Cloud Services",
            desc: "Scalable cloud solutions on AWS including deployment, migration, DevOps, and secure infrastructure management",
          },
        ],
      },
      {
        id: "salesforce",
        label: "Salesforce",
        icon: ShieldCheck,
        description: "CRM customization, integration and consulting",
        links: [
          {
            label: "Salesforce Consulting",
            desc: "CRM implementtion, customization & integration",
          },
          {
            label: "SalesForce Implementation",
            desc: "End-to-end CRM setup, migration & deployment",
          },
          {
            label: "Lightning Migration & Development",
            desc: "Classic to Lightning upgrade & LWC development",
          },
          {
            label: "Salesforce Integration",
            desc: "Connect Salesforce with ERP, marketing & APIs",
          },
        ],
      },
      {
        id: "design-exp",
        label: "Design & Experience",
        icon: Palette,
        description: "User-centric UI/UX design that drives engagement",
        links: [
          {
            label: "UI/UX Design Company",
            desc: "User-centered interfaces that enhance usability and drive conversions",
          },
          {
            label: "Product Design Services",
            desc: "End-to-end product design from concept to scalble digital solutions",
          },
          {
            label: "Design sustem Development",
            desc: "Consisent, scalable UI systems for faster and unified product development",
          },
          {
            label: "Mobile App Design",
            desc: "Engaging mobile app experience built for performance and clarity",
          },
          {
            label: "UX Research Services",
            desc: "Responsive, conversion-focused websites tailored to your brand",
          },
        ],
      },
      {
        id: "digital-marketing",
        label: "Digital Marketing Solutions",
        icon: TrendingUp,
        description: "SEO, PPC and social media strategies that grow revenue",
        links: [
          {
            label: "Digital Marketing",
            desc: "Full-funnel strategies to grow your brand",
          },
          {
            label: "PPC Advertising",
            desc: "Targeting paid compaigns with high ROI",
          },
          {
            label: "Social Media Marketing",
            desc: "Boost app visibility and downloads",
          },
          {
            label: "Content Marketing Services",
            desc: "Boost app visibility and Downloads",
          },
          {
            label: "SEO Services",
            desc: "Rank higher and drive organic traffic",
          },
          {
            label: "ASO Services",
            desc: "Boost app visibility and downloads",
          },
          {
            label: "Conversion Rate Optimization",
            desc: "Boost app visiblity and downloads",
          },
          {
            label: "Mobile App Design",
            desc: "Boost app visibility and downloads",
          },
        ],
      },
    ],
    whySection: {
      title: "WHY WORKHOLO?",
      points: [
        "Build → Customize → Launch Model",
        "Ready-Made + Custom Solutions",
        "Fast Delivery with Quality",
        "Affordable for Startups & Businesses",
        "Focused on Real Business Growth",
      ],
      buttonText: "Get in Touch",
    },
  },
  {
    title: "Products",
    hasMegaMenu: true,
    items: [
      {
        id: "ready-products",
        label: "On-Demand & Delivery Apps",
        icon: ShoppingBag,
        description:
          "On Demand and Delivery apps-Transforming everyday services into on",
        links: [
          {
            label: "Food Delivery App",
            desc: "Multi-restaurant ordering with real-time tracking",
          },
          {
            label: "rocery Delivery App",
            desc: "Quick commerce for daily essentials",
          },
          {
            label: "Milk delivery App",
            desc: "Subscription-based daily delivery management",
          },
          {
            label: "Car Wash App",
            desc: "On-Demand vehicle care t your doorstep",
          },
          {
            label: "Chef Management App",
            desc: "On-Demand vehicle care t your doorstep",
          },
        ],
      },
      {
        id: "Booking",
        label: "Booking and Servce Platforms",
        icon: BookOpen,
        description: "Seamless scheduling and appointment management apps",
        links: [
          {
            label: "Taxi Booking App",
            desc: "Ride-hailing with smart route optimization",
          },
          {
            label: "Hotel Booking App",
            desc: "Seamless hotel search, compare & reserve",
          },
          {
            label: "Ticket Booking App",
            desc: "Events, travel & entertainment ticketing",
          },
          {
            label: "Real Estate App",
            desc: "Property listing, virtual tours & lead management",
          },
        ],
      },

      {
        id: "E-Commerce",
        label: "E-Commerce & Marketplace Solution",
        icon: ShoppingBag,
        description: "Multi-vendor stores and online shopping platforms",
        links: [
          {
            label: "eCommerce App",
            desc: "Scalable online stores with seamless checkout",
          },
          {
            label: "Online Shopping App",
            desc: "Feature-rich shopping experience for customers",
          },
          {
            label: "Multi-Vendor Marketplace",
            desc: "Connect multiple sellers on one platform",
          },
        ],
      },
      {
        id: "education",
        label: "Education & Entertainment",
        icon: ShoppingBag,
        description: "eLearning platforms and interactive media solutions",
        links: [
          {
            label: "E-Learning App",
            desc: "Interactive courses, quizzes & certifications",
          },
          {
            label: "Gaming App",
            desc: "Engaging mobile games with monetization",
          },
          {
            label: "OTT App",
            desc: "Video sreaming like Netflix & Hotstar",
          },
        ],
      },
      {
        id: "healthcare",
        label: "Healthcare & Wellness",
        icon: ShoppingBag,
        description: "Patient management and telemedicine applications",
        links: [
          {
            label: "Diagnostic App",
            desc: "Lab booking, reports & health tracking",
          },
          {
            label: "Sports & Fitness App",
            desc: "Workout plans, tracking & community features",
          },
        ],
      },
      {
        id: "Social&Media",
        label: "Social & Media Apps",
        icon: ShoppingBag,
        description: "Community building and content sharing platforms",
        links: [
          {
            label: "Social Media App",
            desc: "Community platform with feeds, chat & sharing",
          },
        ],
      },
    ],
    whySection: {
      title: "KNOWLEDGE HUB",
      points: [
        "How to Launch Your Website",
        "Choosing the Right Software",
        "Scaling Your Digital Business",
        "Latest Tech Trends",
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
          "Mobile App Development - From concept to code, we create apps that connect...",
        links: [
          {
            label: "Mobile App Developers",
            desc: "Full-cycle iOS & Android app specialists",
          },
          {
            label: "Native App Developers",
            desc: "Platform-specific apps for peak performance",
          },
          {
            label: "Android App Developers",
            desc: "Kotlin & Java experts for the Play Store",
          },
          {
            label: "Hybrid App Developers",
            desc: "Single codebase apps across iOS & Android",
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
    ],
    whySection: {
      title: "HIRING MADE EASY",
      points: [
        "Pre-Vetted & Skilled IT Professionals",
        "Flexible Hiring Models",
        "Quick Onboarding",
        "Cost-Effective Resource Engagement",
        "Transparent Communication",
      ],
      buttonText: "Start Hiring",
    },
  },
  { title: "Portfolio", hasMegaMenu: false },
  { title: "Careers", hasMegaMenu: false },
  { title: "Contact Us", hasMegaMenu: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % TOP_BAR.carousel.length);
    }, 3000);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
            ? "h-0 opacity-0 overflow-hidden"
            : "bg-[#0a0a0a] text-white py-1.5 px-6 lg:px-12 flex items-center justify-between text-[11px] font-medium border-b border-white/10"
        }`}
      >
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`mailto:${TOP_BAR.email}`}
            className="flex items-center gap-1.5 hover:text-[#7B2CBF] transition-colors"
          >
            <Mail size={12} />
            {TOP_BAR.email}
          </a>
          <a
            href={`tel:${TOP_BAR.phone1}`}
            className="flex items-center gap-1.5 hover:text-[#7B2CBF] transition-colors"
          >
            <Phone size={12} />
            {TOP_BAR.phone1}
          </a>
        </div>
        <div className="flex items-center justify-center flex-1 overflow-hidden">
          <div className="relative w-full max-w-[600px] h-[20px] overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={carouselIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full text-center text-[#EFEFEF] font-semibold tracking-wider text-[10px] md:text-[11px]"
              >
                {TOP_BAR.carousel[carouselIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-white/60">{TOP_BAR.locations}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-md"
            : "bg-transparent py-5"
        }`}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1 cursor-pointer group">
            <div className="w-12 h-12">
              <img src={logoImage} className={`w-full h-full object-contain`} />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-black tracking-tighter leading-none ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                WORKHOLO
              </span>
              <span
                className={`text-[9px] font-bold tracking-[0.2em] ${scrolled ? "text-gray-500" : "text-white/60"}`}
              >
                Custom Software Solution
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_DATA.map((nav) => (
              <div
                key={nav.title}
                className="relative h-full flex items-center"
                onMouseEnter={() => handleNavHover(nav.title, nav.hasMegaMenu)}
              >
                <a
                  href="#"
                  className={`text-[14px] font-bold flex items-center gap-1 transition-all py-2 ${
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
            <button
              className={`hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 shadow-lg group ${
                scrolled
                  ? "bg-[#7B2CBF] text-white hover:bg-[#6c09c4]"
                  : "bg-[#7B2CBF] text-white hover:bg-gray-100 hover:text-black"
              }`}
            >
              Start Project
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <button
              className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-black bg-gray-100" : "text-white bg-white/10"}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl hidden lg:block"
              ref={menuRef}
            >
              <div className="max-w-[1440px] mx-auto flex min-h-[450px]">
                {/* Left Sidebar */}
                <div className="w-[320px] border-r border-gray-100 p-8 bg-gray-50/50">
                  <h3 className="text-[12px] font-black text-[#7B2CBF] uppercase tracking-widest mb-6">
                    {activeMegaMenu} Categories
                  </h3>
                  <div className="space-y-2">
                    {NAV_DATA.find(
                      (n) => n.title === activeMegaMenu,
                    )?.items?.map((item) => (
                      <button
                        key={item.id}
                        onMouseEnter={() => setActiveSubItem(item.id)}
                        className={`w-full flex items-start gap-2 p-2 rounded-xl transition-all text-left group ${
                          activeSubItem === item.id
                            ? "bg-white shadow-md ring-1 ring-black/5"
                            : "hover:bg-white/50"
                        }`}
                      >
                        <div
                          className={`p-2.5 rounded-lg shrink-0 transition-all ${
                            activeSubItem === item.id
                              ? "bg-[#7B2CBF] text-white scale-110"
                              : "bg-white text-[#7B2CBF] shadow-sm"
                          }`}
                        >
                          <item.icon size={20} />
                        </div>
                        <div>
                          <div
                            className={`text-[15px] font-bold leading-tight ${activeSubItem === item.id ? "text-[#7B2CBF]" : "text-gray-800"}`}
                          >
                            {item.label}
                          </div>
                          <p className="text-[12px] text-gray-500 mt-1 leading-snug line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Center Content */}
                <div className="flex-1 p-10 bg-white">
                  {activeMegaMenu === "Home" ? (
                    <div className="space-y-8">
                      <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-widest">
                        {
                          NAV_DATA.find((n) => n.title === "Home")
                            ?.centerContent?.title
                        }
                      </h4>
                      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                        {NAV_DATA.find(
                          (n) => n.title === "Home",
                        )?.centerContent?.links.map((link, idx) => (
                          <a key={idx} href="#" className="group block">
                            <h5 className="text-[16px] font-bold text-gray-900 group-hover:text-[#7B2CBF] transition-colors">
                              {link.label}
                            </h5>
                            <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                              {link.desc}
                            </p>
                            <div className="mt-2 flex items-center gap-1 text-[12px] font-bold text-[#7B2CBF] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                              Learn More <ArrowRight size={12} />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    activeSubItem && (
                      <div className="space-y-8">
                        <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-widest">
                          {
                            NAV_DATA.find(
                              (n) => n.title === activeMegaMenu,
                            )?.items?.find((i) => i.id === activeSubItem)?.label
                          }{" "}
                          Features
                        </h4>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                          {NAV_DATA.find((n) => n.title === activeMegaMenu)
                            ?.items?.find((i) => i.id === activeSubItem)
                            ?.links.map((link, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="group flex flex-col p-4 rounded-xl hover:bg-gray-50 transition-all"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[15px] font-bold text-gray-900 group-hover:text-[#7B2CBF] transition-colors">
                                    {link.label}
                                  </span>
                                  <ArrowRight
                                    size={16}
                                    className="text-[#7B2CBF] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                                  />
                                </div>
                                <span className="text-[12px] text-gray-500 mt-1">
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
                <div className="w-[340px] bg-[#7B2CBF] p-10 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="relative z-10">
                    <h3 className="text-[18px] font-black mb-8 border-b border-white/20 pb-4">
                      {
                        NAV_DATA.find((n) => n.title === activeMegaMenu)
                          ?.whySection?.title
                      }
                    </h3>
                    <ul className="space-y-6">
                      {NAV_DATA.find(
                        (n) => n.title === activeMegaMenu,
                      )?.whySection?.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-white shrink-0 mt-0.5"
                          />
                          <span className="text-[14px] font-medium leading-tight text-white/90">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="relative z-10 mt-12 w-full bg-white text-[#7B2CBF] py-4 rounded-xl font-black text-[15px] hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2 group">
                    {
                      NAV_DATA.find((n) => n.title === activeMegaMenu)
                        ?.whySection?.buttonText
                    }
                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12">
                    <img
                      src={logoImage}
                      className={`w-full h-full object-contain`}
                    />
                  </div>
                  <span className="text-lg font-black text-gray-900">
                    WORKHOLO
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-black"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {NAV_DATA.map((nav) => (
                  <div
                    key={nav.title}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === nav.title ? null : nav.title,
                        )
                      }
                      className="w-full flex items-center justify-between py-4 px-2 text-[16px] font-bold text-gray-900"
                    >
                      {nav.title}
                      {nav.hasMegaMenu && (
                        <ChevronDown
                          size={18}
                          className={`text-gray-400 transition-transform ${mobileExpanded === nav.title ? "rotate-180" : ""}`}
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {nav.hasMegaMenu && mobileExpanded === nav.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50/50 rounded-xl px-4 py-2 mb-2"
                        >
                          {nav.items?.map((item) => (
                            <div key={item.id} className="py-3">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="p-1.5 bg-white rounded-md text-[#7B2CBF] shadow-sm">
                                  <item.icon size={16} />
                                </div>
                                <span className="font-bold text-gray-800 text-[14px]">
                                  {item.label}
                                </span>
                              </div>
                              <div className="grid grid-cols-1 gap-1 pl-9">
                                {item.links.map((link, idx) => (
                                  <a
                                    key={idx}
                                    href="#"
                                    className="text-[13px] text-gray-500 py-1.5 hover:text-[#7B2CBF]"
                                  >
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gray-50 space-y-6">
                <div className="space-y-4">
                  <a
                    href={`tel:${TOP_BAR.phone1}`}
                    className="flex items-center gap-3 text-gray-700 font-bold text-[14px]"
                  >
                    <Phone size={18} className="text-[#7B2CBF]" />
                    {TOP_BAR.phone1}
                  </a>
                  <a
                    href={`mailto:${TOP_BAR.email}`}
                    className="flex items-center gap-3 text-gray-700 font-bold text-[14px]"
                  >
                    <Mail size={18} className="text-[#7B2CBF]" />
                    {TOP_BAR.email}
                  </a>
                </div>
                <button className="w-full bg-[#7B2CBF] text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-[#7B2CBF]/20">
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
