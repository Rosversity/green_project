"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const CareersSection = () => {
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
    <section ref={sectionRef} className="py-20 bg-neutral-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced Content */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className={`mb-4 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '200ms' }}>
              <span className="text-sm font-medium text-gray-500 tracking-wider uppercase transition-colors duration-300 hover:text-green-500">
                GREEN PROJECT CAREERS
              </span>
            </div>
            
            <h2 className={`text-4xl lg:text-5xl font-light text-black mb-6 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            } hover:text-gray-700`} style={{ transitionDelay: '300ms' }}>
              Go Beyond the Expected
            </h2>
            
            <p className={`text-lg text-gray-700 mb-8 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              We're dedicated to helping our clients do amazing things and unlocking the potential of 
              those who advance the world. Join us, and you can too.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`} style={{ transitionDelay: '500ms' }}>
              <button className="group relative inline-flex items-center px-8 py-4 border-2 border-black text-black font-medium rounded-lg overflow-hidden transition-all duration-300 ease-out hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300/50">
                <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                  EXPLORE GREEN PROJECT CAREERS
                </span>
                <ArrowRightIcon className="relative ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </button>
              <button className="group relative inline-flex items-center px-8 py-4 bg-green-300 text-black font-medium rounded-lg overflow-hidden transition-all duration-300 ease-out hover:bg-green-700 hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-green-300/25 focus:outline-none focus:ring-4 focus:ring-green-300/50">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                  APPLY TODAY
                </span>
                <ArrowRightIcon className="relative ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </button>
            </div>
          </div>

          {/* Right side - Enhanced Professional Team Scene */}
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`} style={{ transitionDelay: '300ms' }}>
            <div className="aspect-square rounded-3xl overflow-hidden relative group shadow-2xl">
              {/* Real team photo background */}
              <img 
                src="/images/pexels-thirdman-7651924.jpg" 
                alt="Professional team meeting at Green Project"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              {/* Enhanced overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 group-hover:via-black/15 transition-all duration-700"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2 transform transition-all duration-500 group-hover:translate-y-[-4px]">
                  Join Our Team
                </h3>
                <p className="text-white/90 text-sm leading-relaxed transform transition-all duration-500 group-hover:translate-y-[-2px]" style={{ transitionDelay: '100ms' }}>
                  Build your career with industry-leading professionals who are shaping the future of business.
                </p>
              </div>
              <div className="absolute bottom-12 right-12 w-40 h-48 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                {/* Meeting room background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl"></div>
                
                {/* Conference table */}
                <div className="absolute bottom-16 left-4 right-4 h-4 bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg shadow-sm"></div>
                
                {/* Team members */}
                <div className="absolute top-6 left-6 w-12 h-16 transform transition-all duration-300 group-hover:scale-105">
                  {/* Person 1 - Professional woman */}
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mb-2 shadow-md"></div>
                  <div className="w-12 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg"></div>
                </div>
                
                <div className="absolute top-6 right-6 w-12 h-16 transform transition-all duration-300 group-hover:scale-105" style={{ transitionDelay: '100ms' }}>
                  {/* Person 2 - Professional man */}
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mb-2 shadow-md"></div>
                  <div className="w-12 h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded-t-lg"></div>
                </div>
                
                <div className="absolute bottom-20 left-8 w-10 h-14 transform transition-all duration-300 group-hover:scale-105" style={{ transitionDelay: '200ms' }}>
                  {/* Person 3 - Professional person */}
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-2 shadow-md"></div>
                  <div className="w-10 h-5 bg-gradient-to-r from-green-600 to-green-700 rounded-t-lg"></div>
                </div>
                
                <div className="absolute bottom-20 right-8 w-10 h-14 transform transition-all duration-300 group-hover:scale-105" style={{ transitionDelay: '300ms' }}>
                  {/* Person 4 - Professional person */}
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-2 shadow-md"></div>
                  <div className="w-10 h-5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-t-lg"></div>
                </div>
                
                {/* Presentation screen/whiteboard */}
                <div className="absolute top-4 left-14 right-4 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded border-2 border-gray-300">
                  {/* Chart elements */}
                  <div className="absolute top-1 left-1 w-1 h-4 bg-green-400 rounded-sm"></div>
                  <div className="absolute top-2 left-3 w-1 h-3 bg-blue-400 rounded-sm"></div>
                  <div className="absolute top-1.5 left-5 w-1 h-3.5 bg-orange-400 rounded-sm"></div>
                  <div className="absolute top-0.5 left-7 w-1 h-4.5 bg-purple-400 rounded-sm"></div>
                </div>
                
                {/* Floating idea bubbles */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-300 rounded-full animate-pulse opacity-70"></div>
                <div className="absolute top-4 right-6 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Abstract professional elements */}
              <div className="absolute top-12 left-12 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm transition-all duration-500 group-hover:scale-110"></div>
              <div className="absolute top-20 left-20 w-20 h-20 bg-white/15 rounded-full backdrop-blur-sm transition-all duration-500 group-hover:scale-105" style={{ transitionDelay: '100ms' }}></div>
              <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm transition-all duration-500 group-hover:scale-105" style={{ transitionDelay: '200ms' }}></div>
              
              {/* Career growth arrows */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
                  {/* Growth arrow */}
                  <path
                    d="M60 350 Q180 200 340 300 Q260 150 380 60"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="3"
                    fill="none"
                    className="transition-all duration-700 group-hover:stroke-[rgba(255,255,255,0.5)]"
                  />
                  <path
                    d="M20 220 Q140 120 280 200 Q340 140 380 220"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                    fill="none"
                    className="transition-all duration-700 group-hover:stroke-[rgba(255,255,255,0.4)]"
                  />
                  
                  {/* Arrow heads */}
                  <path d="M370 55 L380 60 L370 65" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" />
                  <path d="M370 215 L380 220 L370 225" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                </svg>
              </div>
              
              {/* Floating career icons */}
              <div className="absolute top-16 right-20 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30">
                <span className="text-white text-xs font-bold">MBA</span>
              </div>
              <div className="absolute bottom-24 left-16 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30" style={{ transitionDelay: '200ms' }}>
                <span className="text-white text-xs font-bold">CEO</span>
              </div>
              <div className="absolute top-32 left-8 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30" style={{ transitionDelay: '400ms' }}>
                <span className="text-white text-xs font-bold">CFO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection; 