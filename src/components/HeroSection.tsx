"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const navigationTabs = [
    { name: "BCG SPOTLIGHT", slug: "bcg-spotlight" },
    { name: "THE CEO AGENDA", slug: "ceo-agenda" },
    { name: "RETRIEVAL-AUGMENTED GENERATION", slug: "ai-insights" },
    { name: "PEOPLE STRATEGY", slug: "people-strategy" },
  ];
  
  const slides = [
    {
      id: 1,
      title: "INTERNATIONAL TRADE",
      category: "ARTICLE",
      date: "JULY 29, 2025",
      headline: "The EU-US Trade Agreement: Some Clarity and Ongoing...",
      bgColor: "from-teal-500 to-blue-600",
      bgImage: "/images/pexels-george-milton-7034738.jpg",
      type: "image",
    },
    {
      id: 2,
      title: "DIGITAL TRANSFORMATION", 
      category: "INSIGHT",
      date: "JULY 25, 2025",
      headline: "Accelerating Digital Growth in the Modern Enterprise",
      bgColor: "from-green-500 to-emerald-600",
      bgVideo: "/videos/7660169-uhd_2160_3840_25fps.mp4",
      type: "video",
    },
    {
      id: 3,
      title: "SUSTAINABILITY",
      category: "PERSPECTIVE", 
      date: "JULY 20, 2025",
      headline: "Building Sustainable Supply Chains for Tomorrow",
      bgColor: "from-blue-500 to-indigo-600",
      bgImage: "/images/pexels-artempodrez-6990475.jpg",
      type: "image",
    },
    {
      id: 4,
      title: "TEAM COLLABORATION",
      category: "INSIGHTS",
      date: "JULY 15, 2025",
      headline: "Empowering Teams Through Strategic Leadership",
      bgColor: "from-purple-500 to-pink-600",
      bgImage: "/images/pexels-thirdman-7651924.jpg",
      type: "image",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="/videos/7593214-hd_1080_1920_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      {/* Welcome text */}
      <div className="relative z-10 text-center py-8">
        <h1 className="text-sm font-medium text-gray-500 tracking-wider uppercase">
          WELCOME TO GREEN PROJECT
        </h1>
      </div>

      {/* Main headline */}
      <div className="relative z-10 text-center px-6 lg:px-8 mb-16">
        <h2 className="text-4xl lg:text-6xl font-light text-black max-w-4xl mx-auto leading-tight">
          Unlocking the Potential of Those Who Advance the World
        </h2>
      </div>

      {/* Image carousel */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative h-[600px] overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="h-full w-full relative">
                {/* Dynamic background - image or video */}
                {slide.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={slide.bgVideo} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={slide.bgImage} 
                    alt={slide.headline}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                
                {/* Enhanced overlay with gradient fallback */}
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} opacity-60`}></div>
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Enhanced content overlay */}
                <div className="absolute bottom-8 left-8 text-white max-w-md">
                  <div className="mb-3">
                    <span className="inline-block bg-white/30 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider border border-white/20">
                      {slide.title}
                    </span>
                  </div>
                  <div className="mb-4 flex items-center">
                    <span className="text-sm font-medium bg-black/30 px-3 py-1 rounded-full">{slide.category}</span>
                    <span className="mx-3 w-1 h-1 bg-white/60 rounded-full"></span>
                    <span className="text-sm font-medium bg-black/30 px-3 py-1 rounded-full">{slide.date}</span>
                  </div>
                  <h3 className="text-2xl lg:text-4xl font-bold mb-6 leading-tight drop-shadow-lg">
                    {slide.headline}
                  </h3>
                  <button className="inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 border border-white/30 hover:border-white/50">
                    <span>READ MORE</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 border border-white/30"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-110 border border-white/30"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>

        {/* Enhanced slide indicators with counter */}
        <div className="absolute bottom-6 left-8 flex items-center space-x-4">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 h-3 bg-white rounded-full"
                    : "w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full hover:scale-110"
                }`}
              />
            ))}
          </div>
          <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-white text-sm font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation tabs */}
      <div className="relative z-20 mt-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex justify-center">
            <div className="inline-flex bg-white/95 backdrop-blur-sm rounded-xl p-2 shadow-xl border border-gray-200/50">
              {navigationTabs.map((tab, index) => (
                <button
                  key={tab.slug}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                    activeTab === index
                      ? "bg-green-400 text-white shadow-lg hover:bg-green-500"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 