const WorldMapAnimation = () => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simple world map outline */}
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(270 60% 60%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(280 50% 55%)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(270 60% 60%)" />
            <stop offset="100%" stopColor="hsl(280 50% 65%)" />
          </linearGradient>
        </defs>

        {/* Simplified continents */}
        <ellipse cx="400" cy="200" rx="350" ry="160" fill="url(#mapGradient)" stroke="hsl(270 40% 80%)" strokeWidth="1" />
        
        {/* India - Tamil Nadu marker (origin) */}
        <circle cx="520" cy="220" r="8" fill="hsl(270 60% 55%)" className="animate-pulse-dot" />
        <circle cx="520" cy="220" r="16" fill="hsl(270 60% 55%)" opacity="0.3" className="animate-pulse-dot" style={{ animationDelay: '0.5s' }} />
        <text x="520" y="250" textAnchor="middle" fill="hsl(270 50% 35%)" fontSize="12" fontWeight="600">Tamil Nadu, India</text>

        {/* Destination markers */}
        {/* USA */}
        <circle cx="150" cy="150" r="5" fill="hsl(280 50% 60%)" className="animate-pulse-dot" style={{ animationDelay: '0.2s' }} />
        <text x="150" y="135" textAnchor="middle" fill="hsl(270 40% 50%)" fontSize="10">USA</text>
        
        {/* Europe */}
        <circle cx="380" cy="120" r="5" fill="hsl(280 50% 60%)" className="animate-pulse-dot" style={{ animationDelay: '0.4s' }} />
        <text x="380" y="105" textAnchor="middle" fill="hsl(270 40% 50%)" fontSize="10">Europe</text>
        
        {/* Middle East */}
        <circle cx="450" cy="180" r="5" fill="hsl(280 50% 60%)" className="animate-pulse-dot" style={{ animationDelay: '0.6s' }} />
        <text x="450" y="165" textAnchor="middle" fill="hsl(270 40% 50%)" fontSize="10">Middle East</text>
        
        {/* Southeast Asia */}
        <circle cx="600" cy="230" r="5" fill="hsl(280 50% 60%)" className="animate-pulse-dot" style={{ animationDelay: '0.8s' }} />
        <text x="600" y="215" textAnchor="middle" fill="hsl(270 40% 50%)" fontSize="10">SE Asia</text>
        
        {/* Australia */}
        <circle cx="650" cy="320" r="5" fill="hsl(280 50% 60%)" className="animate-pulse-dot" style={{ animationDelay: '1s' }} />
        <text x="650" y="340" textAnchor="middle" fill="hsl(270 40% 50%)" fontSize="10">Australia</text>
        
        {/* Africa */}
        <circle cx="400" cy="260" r="5" fill="hsl(280 50% 60%)" className="animate-pulse-dot" style={{ animationDelay: '1.2s' }} />
        <text x="400" y="280" textAnchor="middle" fill="hsl(270 40% 50%)" fontSize="10">Africa</text>

        {/* Connection lines from India */}
        <path d="M520 220 Q 350 100 150 150" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6" className="animate-draw-line" />
        <path d="M520 220 Q 450 140 380 120" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6" className="animate-draw-line" style={{ animationDelay: '0.5s' }} />
        <path d="M520 220 Q 480 195 450 180" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6" className="animate-draw-line" style={{ animationDelay: '1s' }} />
        <path d="M520 220 Q 560 220 600 230" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6" className="animate-draw-line" style={{ animationDelay: '1.5s' }} />
        <path d="M520 220 Q 600 280 650 320" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6" className="animate-draw-line" style={{ animationDelay: '2s' }} />
        <path d="M520 220 Q 460 250 400 260" fill="none" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.6" className="animate-draw-line" style={{ animationDelay: '2.5s' }} />
      </svg>
    </div>
  );
};

export default WorldMapAnimation;
