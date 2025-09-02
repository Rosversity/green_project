"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";

type Option = { value: string; label: string };

const capabilitiesOptions: Option[] = [
  { value: "strategy", label: "Strategy & Consulting" },
  { value: "digital", label: "Digital Transformation" },
  { value: "operations", label: "Operations Excellence" },
  { value: "people", label: "People & Organization" },
  { value: "sustainability", label: "Sustainability" },
];

const industryOptions: Option[] = [
  { value: "automotive", label: "Automotive" },
  { value: "banking", label: "Banking & Insurance" },
  { value: "energy", label: "Energy & Environment" },
  { value: "healthcare", label: "Healthcare" },
  { value: "technology", label: "Technology" },
  { value: "retail", label: "Retail & Consumer" },
];

function useClickOutside<T extends HTMLElement>(onOutside: () => void) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    function handle(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutside();
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onOutside]);
  return ref;
}

const CapabilitiesSection = () => {
  const [selectedCapability, setSelectedCapability] = useState<Option | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<Option | null>(null);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const capabilitiesRef = useClickOutside<HTMLDivElement>(() => setCapabilitiesOpen(false));
  const industriesRef = useClickOutside<HTMLDivElement>(() => setIndustriesOpen(false));

  const capabilityTriggerClasses = `w-full flex items-center justify-between bg-white rounded-lg px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors border ${selectedCapability ? "border-green-500 text-green-700" : "border-gray-300 hover:border-green-500"}`;
  const industryTriggerClasses = `w-full flex items-center justify-between bg-white rounded-lg px-4 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors border ${selectedIndustry ? "border-green-500 text-green-700" : "border-gray-300 hover:border-green-500"}`;

  return (
    <section className="py-20 bg-green-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-light text-black mb-8">
              How can we assist you today?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Learn more about our core areas of expertise by selecting your topic of interest.
            </p>
            
            {/* Custom dropdown selectors */}
            <div className="space-y-4">
              {/* Capabilities dropdown */}
              <div className="relative" ref={capabilitiesRef}>
                <button
                  type="button"
                  onClick={() => {
                    setCapabilitiesOpen((v) => !v);
                    setIndustriesOpen(false);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={capabilitiesOpen}
                  className={capabilityTriggerClasses}
                >
                  <span className="truncate">
                    {selectedCapability ? selectedCapability.label : "Capabilities"}
                  </span>
                  <ChevronDownIcon className={`h-5 w-5 ${selectedCapability ? "text-green-600" : "text-gray-500"} transition-transform ${capabilitiesOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                {capabilitiesOpen && (
                  <ul
                    role="listbox"
                    className="absolute z-10 mt-2 w-full max-h-64 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg"
                  >
                    {capabilitiesOptions.map((option) => {
                      const isSelected = selectedCapability?.value === option.value;
                      return (
                        <li
                          key={option.value}
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setSelectedCapability(option);
                            setCapabilitiesOpen(false);
                          }}
                          className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors
                            ${isSelected ? "bg-green-500 text-white" : "text-gray-800 hover:bg-green-50 hover:text-green-700"}
                          `}
                        >
                          <span className="truncate">{option.label}</span>
                          {isSelected && <CheckIcon className="h-5 w-5" />}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              {/* Industries dropdown */}
              <div className="relative" ref={industriesRef}>
                <button
                  type="button"
                  onClick={() => {
                    setIndustriesOpen((v) => !v);
                    setCapabilitiesOpen(false);
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={industriesOpen}
                  className={industryTriggerClasses}
                >
                  <span className="truncate">
                    {selectedIndustry ? selectedIndustry.label : "Industries"}
                  </span>
                  <ChevronDownIcon className={`h-5 w-5 ${selectedIndustry ? "text-green-600" : "text-gray-500"} transition-transform ${industriesOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                {industriesOpen && (
                  <ul
                    role="listbox"
                    className="absolute z-10 mt-2 w-full max-h-64 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg"
                  >
                    {industryOptions.map((option) => {
                      const isSelected = selectedIndustry?.value === option.value;
                      return (
                        <li
                          key={option.value}
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            setSelectedIndustry(option);
                            setIndustriesOpen(false);
                          }}
                          className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors
                            ${isSelected ? "bg-green-500 text-white" : "text-gray-800 hover:bg-green-50 hover:text-green-700"}
                          `}
                        >
                          <span className="truncate">{option.label}</span>
                          {isSelected && <CheckIcon className="h-5 w-5" />}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Enhanced video background */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden relative group shadow-2xl">
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/7660169-uhd_2160_3840_25fps.mp4" type="video/mp4" />
              </video>
              
              {/* Elegant overlay */}
              
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 via-green-400/60 to-green-600/80 transition-all duration-700 group-hover:from-green-500/70 group-hover:via-green-400/50 group-hover:to-green-600/70"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-white/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 transform transition-all duration-500 group-hover:translate-y-[-4px]">
                    Expert Guidance
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed max-w-xs mx-auto transform transition-all duration-500 group-hover:translate-y-[-2px]" style={{ transitionDelay: '100ms' }}>
                    Discover how our expertise can drive your business transformation and unlock new opportunities for growth.
                  </p>
                </div>
              </div>
              
              {/* Subtle floating elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 right-8 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 left-8 w-2.5 h-2.5 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection; 