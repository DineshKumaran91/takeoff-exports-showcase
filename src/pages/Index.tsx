import { useRef } from 'react';
import takeoffLogo from '@/assets/takeoff-logo.png';
import { Button } from '@/components/ui/button';
import { Rocket, Globe, Package, Ship, Mail, Phone, MapPin, ArrowRight, CheckCircle2, TrendingUp, Boxes, Tag, Search, Shield, Award } from 'lucide-react';
import WorldMapAnimation from '@/components/WorldMapAnimation';
import LogisticsAnimation from '@/components/LogisticsAnimation';

const AnimatedOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <div 
    className={`orb animate-pulse-slow ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) => (
  <div 
    className="bg-card-gradient border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors duration-300">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="font-display text-xl font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const AchievementCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) => (
  <div 
    className="bg-card-gradient border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-lg group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <AnimatedOrb className="orb-purple w-96 h-96 -top-48 -right-48" delay={0} />
        <AnimatedOrb className="orb-lavender w-80 h-80 top-1/3 -left-40" delay={2} />
        <AnimatedOrb className="orb-purple-light w-72 h-72 bottom-20 right-1/4" delay={4} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={takeoffLogo} alt="Takeoff Exports Logo" className="h-12 w-auto rounded-lg" />
            <span className="font-display font-bold text-xl text-foreground hidden sm:block">Takeoff Exports</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection(servicesRef)} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection(brandsRef)} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Brands
            </button>
            <button 
              onClick={() => scrollToSection(achievementsRef)} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          <Button variant="hero" size="sm" onClick={() => scrollToSection(contactRef)}>
            Get Quote
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <img src={takeoffLogo} alt="Takeoff Exports" className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-lg" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground">Takeoff</span>
              <span className="text-gradient"> Exports</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              "Delivering Quality. Exporting Trust."
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
              An India-based export company committed to delivering high-quality products to global markets with transparency, consistency, and efficient execution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="lg" onClick={() => scrollToSection(contactRef)}>
                Start Exporting
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => scrollToSection(servicesRef)}>
                Our Services
              </Button>
            </div>
          </div>
        </div>

        {/* Floating rocket animation */}
        <div className="absolute right-10 top-1/3 animate-float opacity-30 hidden lg:block">
          <Rocket className="w-32 h-32 text-primary rotate-45" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Trusted Export Partner <span className="text-gradient">Since 2025</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Takeoff Exports is an India-based export company committed to delivering high-quality products to global markets. With a strong focus on quality, compliance, and reliability, we ensure every shipment meets international standards and customer expectations.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our approach is built on transparency, consistency, and efficient execution—making global trade smooth, dependable, and scalable for our partners.
              </p>
              
              <h3 className="font-display text-xl font-bold mb-4 text-foreground">Why Choose Takeoff Exports?</h3>
              <ul className="space-y-4">
                {[
                  'Internationally compliant quality assurance',
                  'Competitive and transparent pricing',
                  'End-to-end export and logistics management',
                  'Dedicated customer and account support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl" />
                <div className="relative bg-card-gradient border border-border/50 rounded-3xl p-10 text-center">
                  <img src={takeoffLogo} alt="Takeoff Exports" className="w-48 mx-auto mb-6 rounded-2xl" />
                  <h3 className="font-display text-2xl font-bold text-gradient mb-4">Takeoff Exports</h3>
                  <p className="text-muted-foreground italic">"Delivering Quality. Exporting Trust."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Our <span className="text-gradient">Export Services</span>
            </h2>
          </div>
          
          {/* World Map Animation */}
          <div className="mb-16">
            <WorldMapAnimation />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Package} 
              title="Product Portfolio Management" 
              description="Carefully selected, quality-driven products aligned with global standards and market demand."
              delay={100}
            />
            <ServiceCard 
              icon={TrendingUp} 
              title="Market Intelligence" 
              description="In-depth market insights to help position products effectively and maximize international reach."
              delay={200}
            />
            <ServiceCard 
              icon={Ship} 
              title="Logistics & Shipping Solutions" 
              description="Seamless export operations covering documentation, customs coordination, and real-time shipment tracking."
              delay={300}
            />
            <ServiceCard 
              icon={Rocket} 
              title="Express Export Services" 
              description="Accelerated export handling for time-critical shipments with reliable and committed timelines."
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section ref={brandsRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">~ Our Brands ~</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Delivering <span className="text-gradient">Excellence Together</span>
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-card-gradient border border-border/50 rounded-3xl p-12 text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Coming Soon</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're building partnerships with exceptional brands to bring you the best products from India to the world. Stay tuned for our brand portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Achievements</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Customers Prefer Us for <span className="text-gradient">Our Specialties</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              We Value Unique and Innovative Client Requirements
            </p>
          </div>
          
          {/* Logistics Animation */}
          <div className="mb-12">
            <LogisticsAnimation />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <AchievementCard 
              icon={Boxes} 
              title="Multi-Product Consolidation Expertise" 
              description="We specialize in handling complex shipments, managing over 100 different products in a single container or LCL shipment with precision and care."
              delay={100}
            />
            <AchievementCard 
              icon={Tag} 
              title="Customized Packaging & Labeling" 
              description="Tailor-made packaging and labeling solutions designed to meet country-specific regulations and client preferences."
              delay={200}
            />
            <AchievementCard 
              icon={Search} 
              title="New & Custom Product Sourcing" 
              description="Looking for something new or different? Share your product list with us. We identify suitable products at your target price and export them under your brand name."
              delay={300}
            />
            <AchievementCard 
              icon={Shield} 
              title="Integrity & Transparency" 
              description="We are committed to ethical practices, honesty, and complete transparency in every transaction."
              delay={400}
            />
            <AchievementCard 
              icon={Award} 
              title="Pursuit of Excellence" 
              description="Driven by continuous improvement, we strive to enhance our processes, services, and product quality to deliver exceptional value."
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card-gradient border border-border/50 rounded-3xl p-10 md:p-16 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              
              <div className="relative text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Get In Touch</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
                  Ready to <span className="text-gradient">Take Off?</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                  Contact us today for a free consultation and discover how we can help expand your business globally.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <a href="mailto:info@takeoffexpoerts.com" className="flex flex-col items-center p-6 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Email Us</span>
                  <span className="text-foreground font-medium text-sm">info@takeoffexpoerts.com</span>
                </a>
                
                <a href="tel:+919677053103" className="flex flex-col items-center p-6 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Call Us</span>
                  <span className="text-foreground font-medium">+91 96770 53103</span>
                </a>
                
                <a href="https://maps.app.goo.gl/9Z4d9ay2QE422pVi9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Location</span>
                  <span className="text-foreground font-medium text-center text-sm">Tamil Nadu, India</span>
                </a>
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="hero" size="lg">
                  Request Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={takeoffLogo} alt="Takeoff Exports" className="h-10 w-auto rounded-lg" />
              <span className="font-display font-bold text-foreground">Takeoff Exports</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Takeoff Exports. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
