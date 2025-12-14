import { Truck, Plane, Ship, Package } from 'lucide-react';

const LogisticsAnimation = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl">
      {/* Moving elements */}
      <div className="absolute inset-0 flex items-center justify-around">
        {/* Truck */}
        <div className="animate-truck">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
            <Truck className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        {/* Ship */}
        <div className="animate-float" style={{ animationDuration: '4s' }}>
          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
            <Ship className="w-8 h-8 text-accent" />
          </div>
        </div>
        
        {/* Plane */}
        <div className="animate-plane">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
            <Plane className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        {/* Package */}
        <div className="animate-pulse-slow">
          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
            <Package className="w-8 h-8 text-accent" />
          </div>
        </div>
      </div>
      
      {/* Track line */}
      <div className="absolute bottom-4 left-8 right-8 h-1 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-full" />
    </div>
  );
};

export default LogisticsAnimation;
