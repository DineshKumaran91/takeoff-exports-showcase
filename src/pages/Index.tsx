import { useEffect, useRef } from 'react';
import takeoffLogo from '@/assets/takeoff-logo.png';
import { Button } from '@/components/ui/button';
import { Plane, Globe, Package, Ship, Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

const AnimatedOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <div 
    className={`orb animate-pulse-slow ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) => (
  <div 
    className="bg-card-gradient border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="font-display text-xl font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">{value}</div>
    <div className="text-muted-foreground text-sm uppercase tracking-wider">{label}</div>
  </div>
);

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <AnimatedOrb className="orb-gold w-96 h-96 -top-48 -right-48" delay={0} />
        <AnimatedOrb className="orb-sky w-80 h-80 top-1/3 -left-40" delay={2} />
        <AnimatedOrb className="orb-sunset w-72 h-72 bottom-20 right-1/4" delay={4} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={takeoffLogo} alt="Takeoff Exports Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Globe className="w-4 h-4" />
                Premium Export Services from India
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground">Your Gateway to</span>
              <br />
              <span className="text-gradient">Global Markets</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
              Connecting India's finest products with the world. We handle everything from sourcing to shipping, ensuring your business reaches new horizons.
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/30 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <StatCard value="50+" label="Countries Served" />
              <StatCard value="1000+" label="Happy Clients" />
              <StatCard value="15+" label="Years Experience" />
            </div>
          </div>
        </div>

        {/* Floating airplane animation */}
        <div className="absolute right-10 top-1/3 animate-float opacity-20 hidden lg:block">
          <Plane className="w-32 h-32 text-primary rotate-45" />
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Trusted Export Partner <span className="text-gradient">Since 2009</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Takeoff Exports is a leading export company based in India, specializing in connecting Indian manufacturers with global buyers. Our expertise spans multiple industries, ensuring quality products reach markets worldwide.
              </p>
              <ul className="space-y-4">
                {[
                  'Certified quality assurance standards',
                  'Competitive pricing with transparent quotes',
                  'End-to-end logistics management',
                  'Dedicated account management'
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative bg-card-gradient border border-border/50 rounded-3xl p-10 text-center">
                  <img src={takeoffLogo} alt="Takeoff Exports" className="w-48 mx-auto mb-6" />
                  <h3 className="font-display text-2xl font-bold text-gradient mb-4">Takeoff Exports</h3>
                  <p className="text-muted-foreground">Your trusted partner in international trade</p>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={Package} 
              title="Product Sourcing" 
              description="Access India's vast manufacturing network for premium quality products at competitive prices."
              delay={100}
            />
            <ServiceCard 
              icon={Globe} 
              title="Market Research" 
              description="Comprehensive analysis of target markets to identify opportunities and optimize your export strategy."
              delay={200}
            />
            <ServiceCard 
              icon={Ship} 
              title="Logistics & Shipping" 
              description="Complete shipping solutions including documentation, customs clearance, and delivery tracking."
              delay={300}
            />
            <ServiceCard 
              icon={Plane} 
              title="Express Export" 
              description="Fast-track export services for time-sensitive shipments with guaranteed delivery timelines."
              delay={400}
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
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
                <a href="mailto:contact@takeoffexports.com" className="flex flex-col items-center p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Email Us</span>
                  <span className="text-foreground font-medium text-sm">contact@takeoffexports.com</span>
                </a>
                
                <a href="tel:+919876543210" className="flex flex-col items-center p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Call Us</span>
                  <span className="text-foreground font-medium">+91 98765 43210</span>
                </a>
                
                <div className="flex flex-col items-center p-6 rounded-2xl bg-muted/30 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">Visit Us</span>
                  <span className="text-foreground font-medium text-center text-sm">Mumbai, Maharashtra, India</span>
                </div>
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
              <img src={takeoffLogo} alt="Takeoff Exports" className="h-10 w-auto" />
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
