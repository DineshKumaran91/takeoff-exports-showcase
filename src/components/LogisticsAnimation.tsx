import { Plane, Ship, Package, Globe, Container, FileText, Warehouse } from 'lucide-react';

const LogisticsAnimation = () => {
  return (
    <div className="relative w-full h-32 md:h-40 overflow-hidden rounded-2xl bg-card-gradient-dark border border-primary/20">
      {/* Moving elements */}
      <div className="absolute inset-0 flex items-center justify-around">
        {/* Globe */}
        <div className="animate-pulse-slow">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center">
            <Globe className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Ship */}
        <div className="animate-float" style={{ animationDuration: '4s' }}>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/15 flex items-center justify-center">
            <Ship className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Plane */}
        <div className="animate-plane">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center">
            <Plane className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Container */}
        <div className="animate-float hidden sm:flex" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/15 flex items-center justify-center">
            <Container className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Package */}
        <div className="animate-pulse-slow hidden md:flex">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center">
            <Package className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Warehouse */}
        <div className="animate-float hidden lg:flex" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/15 flex items-center justify-center">
            <Warehouse className="w-7 h-7 md:w-8 md:h-8 text-primary" strokeWidth={1.5} />
          </div>
        </div>
      </div>
      
      {/* Track line with glow */}
      <div className="absolute bottom-4 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent rounded-full" />
    </div>
  );
};

export default LogisticsAnimation;
