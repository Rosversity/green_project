"use client";

import { useState, useEffect, useRef } from "react";

const LocationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced Image with parallax effect */}
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-2xl">
              {/* Real location image */}
              <img 
                src="/images/pexels-scottwebb-305833.jpg" 
                alt="Green Project office location in India"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              {/* Enhanced bridge silhouette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-700 group-hover:from-black/50 group-hover:via-black/15"></div>
              
              {/* Animated bridge illustration */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 transform transition-transform duration-700 group-hover:scale-105">
                <svg className="w-full h-full" viewBox="0 0 800 300" fill="none">
                  {/* Bridge structure with hover animation */}
                  <path
                    d="M0 250 L100 200 L200 180 L300 170 L400 165 L500 170 L600 180 L700 200 L800 250"
                    stroke="rgba(0,0,0,0.8)"
                    strokeWidth="4"
                    fill="none"
                    className="transition-all duration-700 group-hover:stroke-[rgba(0,0,0,0.9)]"
                  />
                  {/* Animated bridge supports */}
                  <line x1="150" y1="180" x2="150" y2="280" stroke="rgba(0,0,0,0.6)" strokeWidth="3" className="transition-all duration-500 group-hover:stroke-[rgba(0,0,0,0.8)]"/>
                  <line x1="250" y1="175" x2="250" y2="280" stroke="rgba(0,0,0,0.6)" strokeWidth="3" className="transition-all duration-500 group-hover:stroke-[rgba(0,0,0,0.8)]" style={{ transitionDelay: '50ms' }}/>
                  <line x1="350" y1="170" x2="350" y2="280" stroke="rgba(0,0,0,0.6)" strokeWidth="3" className="transition-all duration-500 group-hover:stroke-[rgba(0,0,0,0.8)]" style={{ transitionDelay: '100ms' }}/>
                  <line x1="450" y1="170" x2="450" y2="280" stroke="rgba(0,0,0,0.6)" strokeWidth="3" className="transition-all duration-500 group-hover:stroke-[rgba(0,0,0,0.8)]" style={{ transitionDelay: '150ms' }}/>
                  <line x1="550" y1="175" x2="550" y2="280" stroke="rgba(0,0,0,0.6)" strokeWidth="3" className="transition-all duration-500 group-hover:stroke-[rgba(0,0,0,0.8)]" style={{ transitionDelay: '200ms' }}/>
                  <line x1="650" y1="180" x2="650" y2="280" stroke="rgba(0,0,0,0.6)" strokeWidth="3" className="transition-all duration-500 group-hover:stroke-[rgba(0,0,0,0.8)]" style={{ transitionDelay: '250ms' }}/>
                  
                  {/* Enhanced water reflection with animation */}
                  <ellipse cx="300" cy="290" rx="150" ry="8" fill="rgba(255,255,255,0.2)" className="animate-pulse opacity-60 group-hover:opacity-80 transition-opacity duration-700"/>
                  <ellipse cx="500" cy="290" rx="150" ry="8" fill="rgba(255,255,255,0.2)" className="animate-pulse opacity-60 group-hover:opacity-80 transition-opacity duration-700" style={{ animationDelay: '1s' }}/>
                </svg>
              </div>
              
              {/* Enhanced city skyline with staggered animation */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 opacity-40 group-hover:opacity-50 transition-opacity duration-700">
                <div className="flex items-end justify-center h-full space-x-2">
                  <div className="w-8 h-32 bg-gray-800 rounded-t transform transition-all duration-500 group-hover:scale-105" style={{ transitionDelay: '0ms' }}></div>
                  <div className="w-6 h-24 bg-gray-700 rounded-t transform transition-all duration-500 group-hover:scale-105" style={{ transitionDelay: '50ms' }}></div>
                  <div className="w-10 h-40 bg-gray-800 rounded-t transform transition-all duration-500 group-hover:scale-105" style={{ transitionDelay: '100ms' }}></div>
                  <div className="w-8 h-28 bg-gray-700 rounded-t transform transition-all duration-500 group-hover:scale-105" style={{ transitionDelay: '150ms' }}></div>
                  <div className="w-12 h-44 bg-gray-800 rounded-t transform transition-all duration-500 group-hover:scale-105" style={{ transitionDelay: '200ms' }}></div>
                  <div className="w-6 h-20 bg-gray-700 rounded-t transform transition-all duration-500 group-hover:scale-105" style={{ transitionDelay: '250ms' }}></div>
                  <div className="w-8 h-36 bg-gray-800 rounded-t transform transition-all duration-500 group-hover:scale-105" style={{ transitionDelay: '300ms' }}></div>
                </div>
              </div>

              {/* Floating light particles */}
              <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
              <div className="absolute top-1/5 right-1/2 w-1.5 h-1.5 bg-white/35 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
            </div>
          </div>

          {/* Right side - Enhanced Content with staggered animations */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className={`mb-4 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <span className="text-sm font-medium text-gray-500 tracking-wider uppercase transition-colors duration-300 hover:text-green-500">
                OUR LOCATIONS
              </span>
            </div>
            
            <h2 className={`text-4xl lg:text-5xl font-light text-black mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            } hover:text-gray-700`} style={{ transitionDelay: '500ms' }}>
              Green Project in India
            </h2>
            
            <p className={`text-lg text-gray-700 mb-8 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              Learn about our offices in India, read our latest thought leadership, 
              and connect with our team.
            </p>
            
            {/* Enhanced button with modern hover effects */}
            <div className={`transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: '700ms' }}>
              <button className="group relative inline-flex items-center px-8 py-4 bg-green-300 text-black font-medium rounded-lg overflow-hidden transition-all duration-300 ease-out hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-green-300/25 focus:outline-none focus:ring-4 focus:ring-green-300/50">
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Button text with micro-animation */}
                <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                  LEARN MORE
                </span>
                
                {/* Animated arrow */}
                <svg 
                  className="relative ml-2 w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;