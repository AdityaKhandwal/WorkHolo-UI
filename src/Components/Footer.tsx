import { motion } from "framer-motion";
import { ChevronUp, Globe, X } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-32 pb-10 bg-[#F5F5F5] text-black relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 lg:px-12 relative z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 mb-32">
          <div className="space-y-4">
            <p className="text-xl font-medium text-black/60">
              Raj Nagar, Dwarka, New Delhi- 110078, Delhi, India
            </p>
            <p className="text-xl font-medium text-black/60">
              India – WorkHolo Operations
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-medium text-black/60">
              hr@workholo.com
            </p>
            <p className="text-xl font-medium text-black/60">
              +91-XXXXXXXXXX
            </p>
          </div>
          <div className="flex justify-start lg:justify-end gap-4">
            {[X, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-[#7B2CBF] hover:text-white transition-all shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <h1 className="text-[22vw] font-black font-display text-black/5 leading-none uppercase tracking-tighter text-center select-none">
            WorkHolo
          </h1>
        </div>

        <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-black/40">
          <p>© 2026 WorkHolo Agency. All rights reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-[#7B2CBF] hover:text-white transition-all group"
      >
        <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}