import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown,  
  ArrowRight, 
  MessageSquare, 
  Globe, 
  Users, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Handshake, 
  Search,
  Send,
  ArrowUp
} from 'lucide-react';

// --- Components ---

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className={`border rounded-xl mb-4 overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-500 bg-blue-50/5' : 'border-white/10 bg-white/5'}`}>
    <button 
      onClick={onClick}
      className="w-full px-6 py-5 flex items-center justify-between text-left"
    >
      <span className="text-lg font-semibold text-white/90">{question}</span>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-white/10 text-white/50'}`}>
        <ChevronDown size={20} />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 pb-6 text-white/60 leading-relaxed">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

interface PartnerCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PartnerCard = ({ icon: Icon, title, description }: PartnerCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-all group"
  >
    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
      <Icon className="text-blue-500 group-hover:text-white transition-colors" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-white/60 leading-relaxed">{description}</p>
  </motion.div>
);

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState('Dover, United States');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const locations = [
    {
      name: 'Dover, United States',
      address: '1111B South Governors Avenue, Suite 48193, Dover, DE 19904, United States',
      phone: '+1 (551) 222-0070',
      email: 'contact@WorkHololabs.com',
      hours: 'Mon–Fri, 9:00 AM – 6:00 PM EST',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.882434526671!2d-75.5255474!3d39.1456128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c77b0767073747%3A0x6b77960787073747!2s1111B%20S%20Governors%20Ave%2C%20Dover%2C%20DE%2019904!5e0!3m2!1sen!2sus!4v1712123456789!5m2!1sen!2sus'
    },
    {
      name: 'Hyderabad, India',
      address: '#514, Manjeera Trinity Corporate, JNTU-Hitech City Road, Kukatpally, Hyderabad, Telangana 500072',
      phone: '+91 9390683154',
      email: 'contact@WorkHololabs.com',
      hours: 'Mon–Fri, 9:00 AM – 6:00 PM IST',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.263842135017!2d78.3888365!3d17.4950131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918d3637171d%3A0x8670498a44211f90!2sManjeera%20Trinity%20Corporate!5e0!3m2!1sen!2sin!4v1712123456790!5m2!1sen!2sin'
    },
    {
      name: 'Bengaluru, India',
      address: '101, 4th Main Road, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka 560076',
      phone: '+91 9014793487',
      email: 'contact@WorkHololabs.com',
      hours: 'Mon–Fri, 9:00 AM – 6:00 PM IST',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.123456789!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1712123456791!5m2!1sen!2sin'
    }
  ];

  const faqs = [
    {
      question: "How soon can we begin an enterprise software project?",
      answer: "Once you submit your request, our solution architects schedule a discovery call within 24–48 hours. A tailored roadmap and proposal are typically delivered within 3–5 business days."
    },
    {
      question: "Do you work with global enterprises?",
      answer: "Yes, we have a strong global presence serving clients across North America, Europe, Asia Pacific, and the Middle East with dedicated teams for each region."
    },
    {
      question: "Do you sign NDAs before discussing projects?",
      answer: "Absolutely. We prioritize client confidentiality and intellectual property protection. We sign standard or custom NDAs before any detailed project discussions."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in Fintech, Healthcare, E-commerce, Logistics, and EdTech, but our engineering expertise scales across any industry requiring digital transformation."
    },
    {
      question: "What is the typical enterprise engagement budget?",
      answer: "Engagement budgets vary based on scope and complexity. We offer flexible engagement models including fixed-price, time & material, and dedicated team models."
    }
  ];

  const partners = [
    { icon: Users, title: "Dedicated Enterprise Teams", description: "Cross-functional teams with solution architects, developers, DevOps engineers, and QA specialists." },
    { icon: Search, title: "Transparent Engagement", description: "Clear communication, milestone-based delivery, and full project visibility at every stage." },
    { icon: Globe, title: "Scalable Global Delivery", description: "Offices across India and the USA serving enterprises in APAC, Middle East, Europe, and North America." },
    { icon: Layers, title: "Solution Architecture Expertise", description: "From system design to cloud deployment — we architect solutions built for scale and performance." },
    { icon: Handshake, title: "Long-term Technology Partnerships", description: "We don't just deliver projects — we build lasting relationships that drive continuous innovation." },
    { icon: Zap, title: "Legacy Modernization", description: "Migrate and modernize legacy systems to cloud-native architectures with zero downtime." }
  ];

  const currentLocation = locations.find(loc => loc.name === activeTab) || locations[0];

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e1b4b]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-blue-400 text-sm font-semibold mb-8">
              <MessageSquare size={16} />
              GET IN TOUCH
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-extrabold leading-[1.1] mb-8 tracking-tight">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Extraordinary</span>
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-xl leading-relaxed">
              Have a project in mind? Fill out the form and let's discuss how WorkHolo Labs can transform your vision into reality.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { label: "Projects Delivered", value: "1500+" },
                { label: "Global Clients", value: "1000+" },
                { label: "Client Retention", value: "98%" },
                { label: "Support Available", value: "24/7" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-white/40 uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'AWS', 'Salesforce', 'AI/ML', 'DevOps'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-slate-900"
          >
            <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-slate-500 mb-8">We'll get back to you within 24 hours.</p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Full Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Email *</label>
                  <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Company</label>
                  <input type="text" placeholder="Your Company" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Phone *</label>
                  <div className="flex gap-2">
                    <select className="px-2 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-sm">
                      <option>IN +91</option>
                      <option>US +1</option>
                      <option>UK +44</option>
                    </select>
                    <input type="tel" placeholder="9876543210" className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Service</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none">
                    <option>Select a service</option>
                    <option>Mobile App Development</option>
                    <option>Web Development</option>
                    <option>Cloud Services</option>
                    <option>AI & Data Analytics</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-slate-400">Message *</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="privacy" className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="privacy" className="text-sm text-slate-500">I agree to the <a href="#" className="text-blue-600 font-semibold underline">Privacy Policy</a> and consent to being contacted.</label>
              </div>

              <button type="submit" className="w-full bg-[#7B2CBF] hover:bg-[#6a25a4] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/20">
                Send Message <Send size={20} />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                <ShieldCheck size={14} className="text-green-500" />
                100% Secure. Your information is encrypted and never shared with third parties.
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Visit Us Worldwide Section */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Visit Us <span className="text-blue-600">Worldwide</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            With offices across 3 continents, we're always close to you. Find the nearest WorkHolo Labs office below.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {locations.map(loc => (
              <button 
                key={loc.name}
                onClick={() => setActiveTab(loc.name)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === loc.name ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                {loc.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-200">
            <div className="rounded-3xl overflow-hidden h-[400px] shadow-xl border border-slate-200">
              <iframe 
                src={currentLocation.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Address</h4>
                  <p className="text-lg font-medium text-slate-700 leading-relaxed">{currentLocation.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Phone</h4>
                  <p className="text-lg font-medium text-slate-700">{currentLocation.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Email</h4>
                  <p className="text-lg font-medium text-slate-700">{currentLocation.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-1">Business Hours</h4>
                  <p className="text-lg font-medium text-slate-700">{currentLocation.hours}</p>
                </div>
              </div>

              <button className="w-full py-4 border-2 border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                Open in Google Maps <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-[#020617]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">Why Partner with <span className="text-blue-500">WorkHolo Labs</span>?</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            We don't just write code — we engineer solutions that scale with your business.
          </p>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-2 text-[#EFEFEF] lg:grid-cols-3 gap-8">
          {partners.map((partner, i) => (
            <div key={i}>
              <PartnerCard 
                icon={partner.icon} 
                title={partner.title} 
                description={partner.description} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#250254] text-slate-900">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#EFEFEF]">Frequently Asked <span className="text-blue-600">Questions</span></h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with WorkHolo Labs
          </p>
        </div>

        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          {faqs.map((faq, i) => (
            <div key={i}>
              <FAQItem 
                question={faq.question} 
                answer={faq.answer} 
                isOpen={openFaq === i} 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Connect with WorkHolo Labs today and speak with our enterprise technology experts.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center gap-2 mx-auto shadow-xl">
            Get Started Now <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 relative group"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-0 transition-opacity" />
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.096 3.389l-.72 2.634 2.7-.708c.816.521 1.782.825 2.821.825 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.38 8.044c-.139.391-.705.713-1.012.759-.287.043-.66.074-1.063-.056-.25-.081-.569-.196-.967-.368-1.696-.733-2.797-2.455-2.882-2.569-.085-.114-.693-.922-.693-1.758 0-.836.435-1.247.587-1.413.152-.166.331-.208.441-.208.11 0 .221.002.317.006.102.004.238-.039.373.287.139.336.476 1.159.518 1.243.042.084.07.182.014.294-.056.112-.084.182-.168.28-.084.098-.177.219-.252.294-.084.084-.172.176-.074.344.098.168.434.717.931 1.159.641.57 1.181.747 1.349.831.168.084.266.07.364-.042.098-.112.42-.49.532-.658.112-.168.224-.14.378-.084.154.056.98.462 1.148.546.168.084.28.126.322.196.042.07.042.406-.097.797z" />
          </svg>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/20"
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>

      {/* <div className="fixed bottom-8 left-8 z-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-4 border border-slate-200 max-w-xs"
        >
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 shrink-0 relative">
            <MessageSquare size={24} />
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full" />
          </div>
          <div>
            <p className="text-xs text-slate-500 font-medium mb-1">Welcome to our site, if you need help simply reply to this message, we are online and ready to help.</p>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <ChevronDown size={20} className="rotate-90" />
          </button>
        </motion.div>
      </div> */}
    </div>
  );
}
