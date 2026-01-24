import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import takeoffLogo from '@/assets/takeoff-logo.png';
import pacyaFruitsLogo from '@/assets/pacya-fruits-logo.png';
import { Button } from '@/components/ui/button';
import { Globe, Package, Ship, Mail, Phone, MapPin, ArrowRight, CheckCircle2, TrendingUp, Boxes, Tag, Search, Shield, Award, Plane, MessageCircle } from 'lucide-react';
import LogisticsAnimation from '@/components/LogisticsAnimation';
import ServiceImageCard from '@/components/ServiceImageCard';
import LanguageSelector from '@/components/LanguageSelector';

const WHATSAPP_NUMBER = '919677053103';
const WHATSAPP_MESSAGE = `Hello Takeoff Exports,

I would like to request a free quote.
Please get in touch with me.`;

const openWhatsApp = () => {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

const AnimatedOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <div 
    className={`orb animate-pulse-slow ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);

const AchievementCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description: string; delay: number }) => (
  <div 
    className="bg-card-gradient-dark border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 hover:shadow-lg group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const Index = () => {
  const { t } = useTranslation();
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
      {/* Language Selector - Top Left */}
      <div className="fixed top-20 left-4 z-40">
        <LanguageSelector />
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
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection(servicesRef)} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection(brandsRef)} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t('nav.brands')}
            </button>
            <button 
              onClick={() => scrollToSection(achievementsRef)} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t('nav.achievements')}
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)} 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t('nav.contact')}
            </button>
          </div>
          <Button variant="hero" size="sm" onClick={() => scrollToSection(contactRef)}>
            {t('nav.getQuote')}
          </Button>
        </div>
      </nav>

      {/* Hero Section - DARK */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-hero-gradient overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(215_70%_15%)]" />
        
        {/* Animated Orbs */}
        <AnimatedOrb className="orb-blue w-96 h-96 -top-48 -right-48 opacity-20" delay={0} />
        <AnimatedOrb className="orb-light-blue w-80 h-80 top-1/3 -left-40 opacity-15" delay={2} />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <img src={takeoffLogo} alt="Takeoff Exports" className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-lg" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-white">Takeoff</span>
              <span className="text-gradient-light"> Exports</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              "{t('hero.tagline')}"
            </p>
            
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="hero" size="lg" onClick={() => scrollToSection(contactRef)}>
                {t('hero.startExporting')}
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero" size="lg" onClick={() => scrollToSection(servicesRef)}>
                {t('hero.ourServices')}
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute right-10 top-1/3 animate-float opacity-20 hidden lg:block">
          <Ship className="w-24 h-24 text-primary" strokeWidth={1} />
        </div>
        <div className="absolute left-10 bottom-1/3 animate-float opacity-20 hidden lg:block" style={{ animationDelay: '2s' }}>
          <Plane className="w-20 h-20 text-primary rotate-45" strokeWidth={1} />
        </div>
      </section>

      {/* About Section - DARK */}
      <section ref={aboutRef} className="py-24 relative section-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070')`,
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">{t('about.label')}</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
                {t('about.title')} <span className="text-gradient-light">{t('about.titleHighlight')}</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {t('about.description1')}
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {t('about.description2')}
              </p>
              
              <h3 className="font-display text-xl font-bold mb-4 text-white">{t('about.whyChoose')}</h3>
              <ul className="space-y-4">
                {['quality', 'pricing', 'logistics', 'support'].map((key, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                    {t(`about.reasons.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl" />
                <div className="relative bg-card-gradient-dark border border-primary/20 rounded-3xl p-10 text-center">
                  <img src={takeoffLogo} alt="Takeoff Exports" className="w-48 mx-auto mb-6 rounded-2xl" />
                  <h3 className="font-display text-2xl font-bold text-gradient-light mb-4">Takeoff Exports</h3>
                  <p className="text-white/70 italic">"{t('hero.tagline')}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - LIGHT */}
      <section ref={servicesRef} className="py-24 relative section-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">{t('services.label')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
              {t('services.title')} <span className="text-gradient">{t('services.titleHighlight')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ServiceImageCard 
              icon={Package} 
              title={t('services.portfolio.title')} 
              description={t('services.portfolio.description')}
              imageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
            />
            <ServiceImageCard 
              icon={TrendingUp} 
              title={t('services.market.title')} 
              description={t('services.market.description')}
              imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
            />
            <ServiceImageCard 
              icon={Ship} 
              title={t('services.logistics.title')} 
              description={t('services.logistics.description')}
              imageUrl="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
            />
            <ServiceImageCard 
              icon={Plane} 
              title={t('services.express.title')} 
              description={t('services.express.description')}
              imageUrl="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074"
            />
          </div>
        </div>
      </section>

      {/* Brands Section - LIGHT */}
      <section ref={brandsRef} className="py-24 relative section-light border-t border-border/30">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')`,
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">{t('brands.label')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
              {t('brands.title')} <span className="text-gradient">{t('brands.titleHighlight')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PacYa Fruits - Active Brand */}
            <a 
              href="https://www.pacyafruits.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-card-gradient border border-border/50 rounded-3xl p-8 text-center group cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <img 
                  src={pacyaFruitsLogo} 
                  alt="PacYa Fruits" 
                  className="w-48 h-48 object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">PacYa Fruits</h3>
              <p className="text-primary text-sm font-medium">Visit Website →</p>
            </a>
            
            {/* Coming Soon */}
            <div className="bg-card-gradient border border-border/50 rounded-3xl p-8 text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">{t('brands.comingSoon')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('brands.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - DARK */}
      <section ref={achievementsRef} className="py-24 relative section-dark overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(215_70%_15%)] via-transparent to-[hsl(215_70%_15%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">{t('achievements.label')}</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-white">
              {t('achievements.title')} <span className="text-gradient-light">{t('achievements.titleHighlight')}</span>
            </h2>
            <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
              {t('achievements.subtitle')}
            </p>
          </div>
          
          {/* Logistics Animation */}
          <div className="mb-12">
            <LogisticsAnimation />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <AchievementCard 
              icon={Boxes} 
              title={t('achievements.multiProduct.title')} 
              description={t('achievements.multiProduct.description')}
              delay={100}
            />
            <AchievementCard 
              icon={Tag} 
              title={t('achievements.packaging.title')} 
              description={t('achievements.packaging.description')}
              delay={200}
            />
            <AchievementCard 
              icon={Search} 
              title={t('achievements.sourcing.title')} 
              description={t('achievements.sourcing.description')}
              delay={300}
            />
            <AchievementCard 
              icon={Shield} 
              title={t('achievements.integrity.title')} 
              description={t('achievements.integrity.description')}
              delay={400}
            />
            <AchievementCard 
              icon={Award} 
              title={t('achievements.excellence.title')} 
              description={t('achievements.excellence.description')}
              delay={500}
            />
          </div>
        </div>
      </section>

      {/* Contact Section - LIGHT */}
      <section ref={contactRef} className="py-24 relative section-light">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-8"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074')`,
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card-gradient border border-border/50 rounded-3xl p-10 md:p-16 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative text-center mb-12">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">{t('contact.label')}</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 text-foreground">
                  {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                  {t('contact.description')}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <a href="mailto:info@takeoffexports.com" className="flex flex-col items-center p-6 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">{t('contact.email')}</span>
                  <span className="text-foreground font-medium text-sm">info@takeoffexports.com</span>
                </a>
                
                <a href="https://wa.me/919677053103" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <div className="flex items-center gap-1">
                      <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      <MessageCircle className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">{t('contact.phone')}</span>
                  <span className="text-foreground font-medium">+91 96770 53103</span>
                </a>
                
                <a href="https://maps.app.goo.gl/9Z4d9ay2QE422pVi9" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">{t('contact.address')}</span>
                  <span className="text-foreground font-medium text-center text-xs leading-relaxed">
                    77/46 E2, Old Post Office Street,<br />
                    Usilampatti, Madurai DT – 625532
                  </span>
                </a>
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="hero" size="lg" onClick={openWhatsApp}>
                  {t('contact.requestQuote')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Signature - TAKEOFF Branding - Final Page Element */}
      <div className="relative pt-12 md:pt-16 pb-6 md:pb-8 mb-0 section-dark overflow-hidden">
        {/* Watercolor Background Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Light blue watercolor blobs */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] opacity-40"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[hsl(200_60%_70%/0.15)] rounded-full blur-[80px] opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-[hsl(190_50%_60%/0.1)] rounded-full blur-[120px] opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Horizontal flex container for TAKEOFF + Logo */}
          <div className="flex flex-row items-center justify-center gap-4 md:gap-8">
            {/* Large TAKEOFF Text */}
            <h2 
              className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extrabold tracking-[0.1em] md:tracking-[0.15em] text-transparent bg-clip-text opacity-80"
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(200 70% 75% / 0.6) 0%, hsl(210 60% 85% / 0.4) 50%, hsl(190 50% 70% / 0.5) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              TAKEOFF
            </h2>
            
            {/* Logo inline to the right */}
            <img 
              src={takeoffLogo} 
              alt="Takeoff Exports" 
              className="h-12 sm:h-16 md:h-20 lg:h-28 xl:h-32 w-auto rounded-xl opacity-90 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
