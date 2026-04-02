import { motion } from "framer-motion";

import { 
  Mail, Phone, Globe, ChevronRight,  Download, MapPin, Plus, ArrowRight,
  MessageCircle, ArrowUp
} from 'lucide-react';

// --- Components ---

const Hero = () => (
  <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.1]">
          500+ Global Brands <br /> 
          <span className="text-white/60">and Startups</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Recognized worldwide as a trusted Software Development Company & IT Solutions provider, mTouch Labs collaborates with the Telangana, Abu Dhabi Governments & leading enterprises to deliver secure, scalable, and innovative digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/20">
            Get Started
          </button>
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold text-lg transition-all border border-white/10">
            Our Portfolio
          </button>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
      <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-1 bg-white/40 rounded-full"></div>
      </motion.div>
    </div>
  </section>
);

const LogoCloud = () => {
  const logos = [
    { name: 'Olt', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' }, // Placeholder
    { name: 'Fluencyo', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Paygen', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    { name: 'VVoosh', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Om Video', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center opacity-50 hover:opacity-100 transition-opacity">
          {logos.map((logo) => (
            <div key={logo.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-500">
              <img src={logo.url} alt={logo.name} className="h-8 md:h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function WebAppDeveloper() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoCloud />
      
      {/* Services Section */}
      <section className="py-24 px-4 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Innovative Solutions for Every Need</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              We provide a wide range of software development services to help businesses grow and succeed in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mobile App Development',
                desc: 'Crafting high-performance iOS and Android applications with seamless user experiences.',
                icon: <Phone className="text-primary text-blue-600" size={32} />,
                features: ['iOS Development', 'Android Development', 'Flutter & React Native']
              },
              {
                title: 'Web Development',
                desc: 'Building responsive, scalable, and secure web applications using modern technologies.',
                icon: <Globe className="text-secondary text-purple-400" size={32} />,
                features: ['React & Next.js', 'Node.js Backend', 'E-commerce Solutions']
              },
              {
                title: 'UI/UX Design',
                desc: 'Designing intuitive and visually stunning interfaces that engage and delight users.',
                icon: <Plus className="text-purple-600" size={32} />,
                features: ['User Research', 'Wireframing', 'Prototyping']
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all group"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">{service.title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
                  Learn More <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4 md:px-12 bg-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Empowering Businesses Through <span className="text-primary">Digital Transformation</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              At mTouch Labs, we are more than just a software company. We are your strategic partners in innovation. With a global presence and a team of dedicated experts, we help organizations navigate the complexities of the digital landscape.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
                <p className="text-white/60 text-sm uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-secondary mb-2">500+</h4>
                <p className="text-white/60 text-sm uppercase tracking-widest">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-yellow-500 mb-2">150+</h4>
                <p className="text-white/60 text-sm uppercase tracking-widest">Expert Team</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-green-500 mb-2">98%</h4>
                <p className="text-white/60 text-sm uppercase tracking-widest">Client Satisfaction</p>
              </div>
            </div>

            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all flex items-center gap-3">
              Read Our Story <ArrowRight size={20} />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
                alt="Team working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black p-8 rounded-3xl border border-white/10 shadow-2xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Download className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Download Profile</p>
                  <p className="font-bold">Company Brochure</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 px-4 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Work</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Case Studies & Projects</h2>
              <p className="text-white/60 text-lg">
                Explore our portfolio of successful projects delivered for clients across various industries.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all">All</button>
              <button className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all">Mobile</button>
              <button className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all">Web</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: 'E-commerce Platform',
                category: 'Web Development',
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2089',
                color: 'bg-blue-500'
              },
              {
                title: 'Health & Fitness App',
                category: 'Mobile App',
                image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070',
                color: 'bg-green-500'
              },
              {
                title: 'Real Estate Portal',
                category: 'Web Development',
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2073',
                color: 'bg-orange-500'
              },
              {
                title: 'Social Networking App',
                category: 'Mobile App',
                image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&q=80&w=2070',
                color: 'bg-purple-500'
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2">
                      View Project <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                  </div>
                  <div className={`w-12 h-12 rounded-full ${project.color} flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity`}>
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="border border-white/20 hover:bg-white/5 px-10 py-4 rounded-full font-bold transition-all">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 md:px-12 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'CEO, TechCorp',
                content: 'mTouch Labs delivered our mobile app ahead of schedule and with exceptional quality. Their team is professional and highly skilled.',
                avatar: 'https://i.pravatar.cc/150?u=1'
              },
              {
                name: 'Sarah Johnson',
                role: 'Founder, StartupX',
                content: 'Working with mTouch Labs was a game-changer for our business. They understood our vision and brought it to life perfectly.',
                avatar: 'https://i.pravatar.cc/150?u=2'
              },
              {
                name: 'Michael Brown',
                role: 'CTO, GlobalSolutions',
                content: 'The level of technical expertise at mTouch Labs is impressive. They solved complex problems with ease and delivered a robust solution.',
                avatar: 'https://i.pravatar.cc/150?u=3'
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-black border border-white/10 p-8 rounded-3xl relative"
              >
                <div className="text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-white/40 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
            Join 500+ companies that trust mTouch Labs for their digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              Get a Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Contact Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Let's Discuss Your Project</h2>
            <p className="text-white/60 text-lg mb-12">
              Have an idea? We'd love to hear about it. Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Office</h4>
                  <p className="text-white/60">Plot No. 12, 3rd Floor, Silicon Valley, Madhapur, Hyderabad, Telangana 500081</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-secondary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email Us</h4>
                  <p className="text-white/60">contact@mtouchlabs.com</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-green-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Call Us</h4>
                  <p className="text-white/60">+91 9390683154</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Message</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all h-32 resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20"
        >
          <MessageCircle size={28} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={28} />
        </motion.button>
      </div>
    </div>
  );
}
