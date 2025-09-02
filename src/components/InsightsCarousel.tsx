"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const InsightsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const insights = [
    {
      id: 1,
      category: "ARTIFICIAL INTELLIGENCE",
      type: "ARTICLE",
      date: "JULY 24, 2025",
      title: "CEOs Aren't Thinking Big Enough with AI",
      description: "Most executives are missing the transformative potential of artificial intelligence. To unlock AI's full value, leaders must think beyond automation and embrace AI as a strategic enabler of business transformation.",
      bgImage: "/images/pexels-artempodrez-6990475.jpg",
      hasFloatingElements: true,
      backgroundPattern: "ai-brain",
    },
    {
      id: 2,
      category: "PERFORMANCE AND VALUE",
      type: "ARTICLE", 
      date: "JULY 8, 2025",
      title: "The $300 Billion Reason Why CEOs in Europe Need to Focus on Transformation",
      description: "Beyond tariffs and geopolitics, weak fundamentals are driving financial stress across Europe. At risk: more than $300 billion in GDP and 3.5 million jobs.",
      bgImage: "/images/pexels-george-milton-7034738.jpg",
      hasFloatingElements: false,
      backgroundPattern: "compass",
    },
    {
      id: 3,
      category: "COST MANAGEMENT",
      type: "ARTICLE",
      date: "JUNE 16, 2025", 
      title: "For CMOs, the Future Starts with Smarter Spending",
      description: "Marketing leaders are reimagining budget allocation strategies to drive growth in uncertain times. Data-driven approaches and performance-based spending are becoming essential for sustainable growth.",
      bgImage: "/images/pexels-kindelmedia-9875412.jpg",
      hasFloatingElements: false,
      backgroundPattern: "growth-chart",
    },
    {
      id: 4,
      category: "CORPORATE FINANCE AND STRATEGY",
      type: "ARTICLE",
      date: "JUNE 10, 2025",
      title: "How CFOs Can Lead by Example in Cost Transformation",
      description: "Finance leaders are uniquely positioned to drive organization-wide cost optimization. Strategic cost management requires a balance between efficiency gains and growth investments.",
      bgImage: "/images/eco-house.png",
      hasDataViz: true,
      backgroundPattern: "financial-dashboard",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, insights.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, insights.length - 2)) % Math.max(1, insights.length - 2));
  };

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

  // Function to render background patterns
  const renderBackgroundPattern = (pattern: string) => {
    switch (pattern) {
      case "ai-brain":
        return (
          <div className="absolute inset-0 opacity-20">
            {/* AI Neural Network Pattern */}
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
              {/* Nodes */}
              <circle cx="50" cy="80" r="4" fill="white" className="animate-pulse" />
              <circle cx="120" cy="60" r="4" fill="white" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="200" cy="100" r="4" fill="white" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="280" cy="70" r="4" fill="white" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
              <circle cx="350" cy="90" r="4" fill="white" className="animate-pulse" style={{ animationDelay: '2s' }} />
              
              {/* Connections */}
              <line x1="50" y1="80" x2="120" y2="60" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="120" y1="60" x2="200" y2="100" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="100" x2="280" y2="70" stroke="white" strokeWidth="1" opacity="0.4" />
              <line x1="280" y1="70" x2="350" y2="90" stroke="white" strokeWidth="1" opacity="0.4" />
              
              {/* Brain-like structure */}
              <path d="M80 150 Q150 120 220 150 Q180 180 140 170 Q100 160 80 150" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
            </svg>
          </div>
        );
      
      case "compass":
        return (
          <div className="absolute inset-0 opacity-25">
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
              {/* Compass */}
              <circle cx="200" cy="150" r="60" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
              <circle cx="200" cy="150" r="40" stroke="white" strokeWidth="1" fill="none" opacity="0.4" />
              <circle cx="200" cy="150" r="20" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
              
              {/* Compass needle */}
              <line x1="200" y1="110" x2="200" y2="190" stroke="white" strokeWidth="3" opacity="0.8" />
              <line x1="160" y1="150" x2="240" y2="150" stroke="white" strokeWidth="2" opacity="0.6" />
              
              {/* Direction markers */}
              <text x="200" y="100" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">N</text>
              <text x="250" y="155" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">E</text>
              <text x="200" y="210" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">S</text>
              <text x="150" y="155" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">W</text>
            </svg>
          </div>
        );
      
      case "growth-chart":
        return (
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
              {/* Growth arrow */}
              <path d="M50 250 L150 200 L200 180 L250 150 L300 120 L350 80" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
              
              {/* Arrow head */}
              <path d="M340 70 L350 80 L340 90" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
              
              {/* Data points */}
              <circle cx="50" cy="250" r="3" fill="white" opacity="0.9" />
              <circle cx="150" cy="200" r="3" fill="white" opacity="0.9" />
              <circle cx="200" cy="180" r="3" fill="white" opacity="0.9" />
              <circle cx="250" cy="150" r="3" fill="white" opacity="0.9" />
              <circle cx="300" cy="120" r="3" fill="white" opacity="0.9" />
              
              {/* Grid lines */}
              <line x1="30" y1="100" x2="370" y2="100" stroke="white" strokeWidth="1" opacity="0.2" />
              <line x1="30" y1="150" x2="370" y2="150" stroke="white" strokeWidth="1" opacity="0.2" />
              <line x1="30" y1="200" x2="370" y2="200" stroke="white" strokeWidth="1" opacity="0.2" />
            </svg>
          </div>
        );
      
      case "financial-dashboard":
        return (
          <div className="absolute inset-0 opacity-25">
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
              {/* Dashboard elements */}
              <rect x="50" y="80" width="80" height="60" stroke="white" strokeWidth="1" fill="none" opacity="0.6" />
              <rect x="150" y="100" width="80" height="40" stroke="white" strokeWidth="1" fill="none" opacity="0.6" />
              <rect x="250" y="60" width="80" height="80" stroke="white" strokeWidth="1" fill="none" opacity="0.6" />
              
              {/* Pie chart */}
              <circle cx="90" cy="200" r="30" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
              <path d="M90 170 A30 30 0 0 1 110 185 L90 200 Z" fill="white" opacity="0.4" />
              
              {/* Line chart */}
              <path d="M200 220 L220 210 L240 200 L260 190 L280 185" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
              
              {/* Dollar signs */}
              <text x="320" y="30" fill="white" fontSize="24" opacity="0.4">$</text>
              <text x="60" y="40" fill="white" fontSize="20" opacity="0.3">$</text>
            </svg>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header with fade-in animation */}
        <div className={`mb-16 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-4 transition-colors duration-300 hover:text-gray-700">
            Insights for the C-Suite
          </h2>
        </div>

        {/* Carousel container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 33.333}%)`,
              }}
            >
              {insights.map((insight, index) => (
                <div
                  key={insight.id}
                  className={`w-1/3 flex-shrink-0 px-4 transform transition-all duration-500 ease-out ${
                    isVisible 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150}ms` 
                  }}
                >
                  <div className="group cursor-pointer">
                    <div className="relative h-[28rem] rounded-2xl overflow-hidden transform transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-black/20">
                      {/* Background image */}
                      <img 
                        src={insight.bgImage} 
                        alt={insight.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Background pattern */}
                      {renderBackgroundPattern(insight.backgroundPattern)}
                      
                      {/* Default state - with background patterns visible */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500 ease-out"></div>
                      
                      {/* Floating elements for AI article */}
                      {insight.hasFloatingElements && (
                        <div className="absolute inset-0 pointer-events-none group-hover:opacity-50 transition-opacity duration-500">
                          <div className="absolute top-8 right-8 w-10 h-10 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                          <div className="absolute top-20 right-16 w-6 h-6 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                          <div className="absolute top-32 right-12 w-8 h-8 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
                        </div>
                      )}

                      {/* Data visualization animation for finance article */}
                      {insight.hasDataViz && (
                        <div className="absolute top-8 right-8 pointer-events-none group-hover:opacity-50 transition-opacity duration-500">
                          <div className="relative w-20 h-16">
                            <div className="absolute bottom-0 left-0 w-3 bg-white/30 animate-pulse" style={{ height: '60%', animationDelay: '0s' }}></div>
                            <div className="absolute bottom-0 left-4 w-3 bg-white/40 animate-pulse" style={{ height: '80%', animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-0 left-8 w-3 bg-white/35 animate-pulse" style={{ height: '45%', animationDelay: '1s' }}></div>
                            <div className="absolute bottom-0 left-12 w-3 bg-white/45 animate-pulse" style={{ height: '90%', animationDelay: '1.5s' }}></div>
                          </div>
                        </div>
                      )}

                      {/* Category tag with enhanced hover effects */}
                      <div className="absolute top-6 left-6 z-10">
                        <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full uppercase backdrop-blur-sm border border-white/30 transition-all duration-300 ease-out group-hover:bg-white/30 group-hover:border-white/50 group-hover:shadow-lg group-hover:scale-105">
                          {insight.category}
                        </span>
                      </div>

                      {/* Default content overlay - always visible */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-0 transition-all duration-500 ease-out">
                        <div className="text-white">
                          <div className="mb-3 text-base opacity-90">
                            <span>{insight.type}</span>
                            <span className="mx-2">•</span>
                            <span>{insight.date}</span>
                          </div>
                          <h3 className="text-2xl font-semibold leading-tight">
                            {insight.title}
                          </h3>
                        </div>
                      </div>

                      {/* Expanded content overlay - appears on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-white/95 backdrop-blur-sm flex flex-col justify-between p-8">
                        
                        {/* Top section with meta info */}
                        <div>
                          <div className="mb-4 text-gray-600 text-base font-medium">
                            <span>{insight.type}</span>
                            <span className="mx-2">•</span>
                            <span>{insight.date}</span>
                          </div>
                          
                          <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
                            {insight.title}
                          </h3>
                          
                          <p className="text-gray-700 text-base leading-relaxed mb-8">
                            {insight.description}
                          </p>
                        </div>

                        {/* Bottom section with LEARN MORE button */}
                        <div>
                          <button className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 ease-out hover:scale-105 shadow-lg hover:shadow-xl">
                            <span className="transition-transform duration-300 hover:translate-x-1">LEARN MORE</span>
                            <ArrowRightIcon className="ml-2 h-4 w-4 transition-all duration-300 hover:translate-x-1 hover:scale-110" />
                          </button>
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                        <div className="absolute inset-0 rounded-2xl border-2 border-green-500/50 shadow-lg shadow-green-500/25"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-5 hover:bg-white hover:shadow-2xl transition-all duration-300 ease-out z-10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 border border-gray-200/50"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="h-7 w-7 text-gray-700 transition-colors duration-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/90 backdrop-blur-sm shadow-xl rounded-full p-5 hover:bg-white hover:shadow-2xl transition-all duration-300 ease-out z-10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 border border-gray-200/50"
            disabled={currentIndex >= insights.length - 3}
          >
            <ChevronRightIcon className="h-7 w-7 text-gray-700 transition-colors duration-300" />
          </button>
        </div>

        {/* Enhanced "View all link" with modern micro-interactions */}
        <div className={`mt-16 text-center transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`} style={{ transitionDelay: '600ms' }}>
          <a
            href="/insights"
            className="inline-flex items-center text-green-500 hover:text-green-700 font-medium text-lg transition-all duration-300 ease-out group hover:scale-105"
          >
            <span className="transition-all duration-300 ease-out group-hover:translate-x-1">View All Insights</span>
            <ChevronRightIcon className="ml-2 h-5 w-5 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsCarousel; 