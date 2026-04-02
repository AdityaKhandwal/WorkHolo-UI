import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Minus, Plus } from "lucide-react";
import { useState } from "react";

// --- Components ---

const Hero = () => {
  return (
    <section className="bg-[#0B0E14] pt-48 pb-24 px-4 md:px-12 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="flex justify-center items-center space-x-2 text-gray-400 text-sm mb-8 font-medium">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <span>/</span>
          <a href="#" className="hover:text-white">
            Services
          </a>
          <span>/</span>
          <span className="text-[#F2994A]">DevOps Consulting</span>
        </div>

        <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
          DevOps <span className="text-[#F2994A]">Consulting</span> Services
        </h1>

        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 max-w-3xl mx-auto leading-relaxed">
          Strategic DevOps Advisory for Scalable, High-Performance Software
          Delivery
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-medium">
          WorkHolo Labs provides expert DevOps Consulting Services designed to
          help organizations design, optimize, and scale modern DevOps
          frameworks. Transformation begins with strategy, not scripts.
        </p>
      </motion.div>
    </section>
  );
};

const WhatIsDevOps = () => {
  const cards = [
    { title: "Maturity Assessment", icon: "📋" },
    { title: "Transformation Roadmap", icon: "🗺️" },
    { title: "Automation Strategy", icon: "⚙️" },
    { title: "Team Alignment", icon: "👥" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            What Are <span className="text-[#F2994A]">DevOps Consulting</span>{" "}
            Services?
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
            <p>
              DevOps consulting services involve evaluating existing development
              and operations workflows and creating structured strategies to
              improve deployment efficiency, collaboration, and system
              reliability — including workflow assessment, pipeline
              architecture, automation strategy, and organizational readiness.
            </p>
            <p>
              Unlike{" "}
              <a href="#" className="text-blue-600 hover:underline font-bold">
                DevOps implementation services
              </a>{" "}
              which focus on technical execution, consulting focuses on
              strategy, assessment, and roadmap planning to establish
              sustainable DevOps maturity.
            </p>
            <p>
              Our advisory aligns with{" "}
              <a href="#" className="text-blue-600 hover:underline font-bold">
                cloud infrastructure
              </a>{" "}
              strategy to ensure DevOps frameworks are optimized for your
              specific cloud environment.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group ${idx === 1 ? "border-[#F2994A]/30 bg-[#F2994A]/5" : "bg-gray-50"}`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-800">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  const stats = [
    { value: "550+", label: "Consulting Projects", color: "text-blue-600" },
    { value: "10x", label: "Deploy Speed Gain", color: "text-blue-500" },
    { value: "85%", label: "Error Reduction", color: "text-blue-400" },
    { value: "14+", label: "Years Experience", color: "text-blue-300" },
  ];

  const points = [
    "DevOps maturity assessment — workflows, releases & monitoring",
    "Transformation roadmap — CI/CD, IaC & containerization strategy",
    "Pipeline & workflow architecture advisory",
    "DevOps culture & team alignment consulting",
    "DevSecOps strategy — secure development lifecycle planning",
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-6 order-2 lg:order-1">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center"
            >
              <div className={`text-5xl font-black mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-500 font-bold text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Our Consulting <span className="text-[#F2994A]">Capabilities</span>
          </h2>
          <p className="text-gray-600 text-xl mb-8 font-medium">
            Strategic DevOps advisory across the transformation lifecycle:
          </p>
          <ul className="space-y-5">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <CheckCircle2
                  className="text-[#F2994A] mr-4 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 text-lg font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      id: "01",
      title: "DevOps Maturity Assessment",
      desc: "Analysis of development workflows, release frequency, infrastructure provisioning, monitoring practices, and security integration to identify bottlenecks and inefficiencies.",
    },
    {
      id: "02",
      title: "Roadmap & Transformation Planning",
      desc: "CI/CD architecture design, infrastructure automation planning, containerization strategy, security integration models, and governance policy definition for phased implementation.",
    },
    {
      id: "03",
      title: "Pipeline Architecture Advisory",
      desc: "Optimized frameworks for continuous integration, automated deployment, version control governance, and release management alignment reducing operational friction.",
    },
    {
      id: "04",
      title: "Culture & Team Alignment",
      desc: "Cross-functional collaboration models, role definition frameworks, communication optimization, and responsibility matrix alignment for long-term performance.",
      highlight: true,
    },
    {
      id: "05",
      title: "DevSecOps Strategy",
      desc: "Secure development lifecycle planning, automated compliance checkpoints, security monitoring integration, and risk-based pipeline governance strengthening resilience.",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Consulting <span className="text-[#F2994A]">Services</span>
        </h2>
        <p className="text-gray-500 text-xl font-medium">
          From assessment to continuous advisory
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-10 rounded-3xl border transition-all duration-300 ${service.highlight ? "border-[#F2994A]/50 bg-white shadow-xl ring-1 ring-[#F2994A]/10" : "border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl"}`}
          >
            <div className="bg-blue-500 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold mb-6">
              {service.id}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Framework = () => {
  const steps = [
    { id: 1, label: "Assessment" },
    { id: 2, label: "Gap Analysis" },
    { id: 3, label: "Strategy" },
    { id: 4, label: "Roadmap" },
    { id: 5, label: "Governance" },
    { id: 6, label: "Implementation", active: true },
    { id: 7, label: "Advisory" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Consulting <span className="text-[#F2994A]">Framework</span>
        </h2>
        <p className="text-gray-500 text-xl font-medium">
          Structured guidance ensures successful transformation.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-100 -translate-y-1/2 hidden lg:block"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 relative ${step.active ? "bg-blue-600 text-white shadow-xl shadow-blue-200 ring-4 ring-blue-100" : "bg-white text-gray-800 border border-gray-200 shadow-sm"}`}
              >
                <span
                  className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step.active ? "bg-blue-700" : "bg-blue-500 text-white"}`}
                >
                  {step.id}
                </span>
                <span className="font-bold text-sm text-center px-2">
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-2">
                  <ArrowRight className="text-blue-200 rotate-90 md:rotate-0" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => {
  const points = [
    "Strategy-first DevOps advisory",
    "Enterprise transformation expertise",
    "Automation roadmap design",
    "Cloud-aligned frameworks",
    "Security-integrated planning",
    "Long-term scalability focus",
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Why Choose WorkHolo Labs for{" "}
          <span className="text-[#F2994A]">DevOps Consulting</span>?
        </h2>
        <p className="text-gray-500 text-xl font-medium mb-12">
          We guide organizations toward measurable DevOps excellence.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white border border-gray-200 px-8 py-4 rounded-full shadow-sm hover:shadow-md hover:border-[#F2994A]/30 transition-all flex items-center"
            >
              <div className="w-2 h-2 bg-[#F2994A] rounded-full mr-3"></div>
              <span className="font-bold text-gray-700">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
    { title: "SaaS & Technology", icon: "💻" },
    { title: "Financial Services", icon: "💳" },
    { title: "Healthcare Systems", icon: "🏥", highlight: true },
    { title: "Enterprise B2B", icon: "🏢" },
    { title: "eCommerce Businesses", icon: "🛒" },
    { title: "AI & Data Organizations", icon: "🤖" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          Industries We <span className="text-[#F2994A]">Serve</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-12 rounded-3xl border transition-all duration-300 flex flex-col items-center justify-center text-center ${item.highlight ? "border-[#F2994A]/50 bg-white shadow-xl ring-1 ring-[#F2994A]/10" : "border-gray-100 bg-white hover:shadow-xl"}`}
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechServices = () => {
  const techs = [
    "Docker",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "Jenkins",
    "GitHub Actions",
    "GitLab CI",
    "AWS CodePipeline",
    "Azure DevOps",
    "ArgoCD",
    "Helm",
    "Prometheus",
    "Grafana",
    "Datadog",
    "ELK Stack",
    "SonarQube",
    "Vault",
    "CI/CD",
  ];

  const cards = [
    { title: "18+", subtitle: "DevOps Tools", color: "text-blue-600" },
    { title: "K8s", subtitle: "Orchestration", color: "text-blue-500" },
    {
      title: "IaC",
      subtitle: "Infrastructure as Code",
      color: "text-blue-400",
    },
    { title: "CI/CD", subtitle: "Pipeline Design", color: "text-blue-300" },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Devops Consulting <br />
            <span className="text-[#F2994A]">Technologies Services</span>
          </h2>
          <p className="text-gray-600 text-xl mb-10 font-medium">
            Industry-standard DevOps tools and cloud-native platforms we consult
            on.
          </p>

          <div className="flex flex-wrap gap-3">
            {techs.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-gray-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-500 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center flex flex-col justify-center min-h-[200px]"
            >
              <div className={`text-5xl font-black mb-2 ${card.color}`}>
                {card.title}
              </div>
              <div className="text-gray-500 font-bold text-sm uppercase tracking-wide">
                {card.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What are DevOps consulting services?",
      a: "DevOps consulting services involve evaluating existing development and operations workflows and creating structured strategies to improve deployment efficiency, collaboration, and system reliability.",
    },
    {
      q: "How is consulting different from implementation?",
      a: "Consulting focuses on strategy, assessment, and roadmap planning, whereas implementation focuses on the actual technical execution and setup of tools and pipelines.",
    },
    {
      q: "Can DevOps consulting improve deployment speed?",
      a: "Yes, by identifying bottlenecks and implementing automation strategies, DevOps consulting can significantly increase the frequency and reliability of deployments.",
    },
    {
      q: "Is DevOps consulting suitable for enterprises?",
      a: "Absolutely. Enterprises often have complex legacy systems where strategic DevOps advisory is crucial for successful modernization and scaling.",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Frequently Asked <span className="text-[#F2994A]">Questions</span>
        </h2>
        <p className="text-gray-500 text-xl font-medium">
          Everything about DevOps consulting
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="text-xl font-bold text-gray-800">{faq.q}</span>
              {openIdx === idx ? (
                <Minus className="text-[#F2994A]" />
              ) : (
                <Plus className="text-gray-400" />
              )}
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-gray-600 text-lg font-medium leading-relaxed border-t border-gray-50">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#0B0E14] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F2994A] rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
          Ready to Transform Your{" "}
          <span className="text-[#F2994A]">DevOps Strategy</span>?
        </h2>
        <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium">
          Let's discuss how strategic DevOps consulting can accelerate your
          software delivery and operational excellence.
        </p>
        <button className="bg-[#7B2CBF] hover:bg-[#6A25A3] text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-purple-500/20 hover:-translate-y-1">
          Book a Consultation
        </button>
      </div>
    </section>
  );
};

// --- Main App ---

export default function DevOpsConsultingServices() {
  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      <main>
        <Hero />
        <WhatIsDevOps />
        <Capabilities />
        <ServicesGrid />
        <Framework />
        <WhyChoose />
        <Industries />
        <TechServices />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
