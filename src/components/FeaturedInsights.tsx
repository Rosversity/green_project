"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const FeaturedInsights = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-green-700 text-white relative overflow-hidden">
      {/* Background forest/nature illustration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-green-600 via-green-700 to-green-800">
          {/* Tree silhouettes */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3">
            <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
              {/* Tree 1 */}
              <path d="M100 400 L100 200 L70 150 L130 150 Z" fill="rgba(0,0,0,0.3)" />
              <circle cx="100" cy="150" r="40" fill="rgba(0,0,0,0.2)" />
              
              {/* Tree 2 */}
              <path d="M250 400 L250 180 L220 130 L280 130 Z" fill="rgba(0,0,0,0.3)" />
              <circle cx="250" cy="130" r="50" fill="rgba(0,0,0,0.2)" />
              
              {/* Tree 3 */}
              <path d="M400 400 L400 220 L370 170 L430 170 Z" fill="rgba(0,0,0,0.3)" />
              <circle cx="400" cy="170" r="45" fill="rgba(0,0,0,0.2)" />
              
              {/* Tree 4 */}
              <path d="M600 400 L600 190 L570 140 L630 140 Z" fill="rgba(0,0,0,0.3)" />
              <circle cx="600" cy="140" r="55" fill="rgba(0,0,0,0.2)" />
              
              {/* Building silhouette in distance */}
              <rect x="800" y="250" width="60" height="150" fill="rgba(0,0,0,0.1)" />
              <rect x="880" y="200" width="80" height="200" fill="rgba(0,0,0,0.1)" />
              <rect x="980" y="230" width="50" height="170" fill="rgba(0,0,0,0.1)" />
            </svg>
          </div>
          
          {/* Light rays */}
          <div className="absolute top-0 right-1/4 w-48 h-48">
            <div className="w-full h-full bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="text-sm font-medium text-green-200 tracking-wider uppercase">
              Featured Insights
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bcg-headline font-headings text-white mb-6 max-w-4xl mx-auto">
            Green Project's most inspiring thought leadership on issues shaping the 
            future of business and society
          </h2>
        </div>

        {/* Newsletter signup form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Get the latest industry insights delivered to you
            </h3>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="flex-1 px-4 py-3 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-200"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-accent-200 text-black font-medium rounded-lg hover:bg-green-500 hover:text-white transition-colors"
              >
                SUBSCRIBE
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Bottom CTA sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Executive Perspectives */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8">
            <div className="mb-4">
              <span className="text-sm font-medium text-green-200 tracking-wider uppercase">
                EXECUTIVE PERSPECTIVES
              </span>
            </div>
            
            <h3 className="text-3xl font-bcg-headline font-headings text-white mb-6">
              Function and Sector Playbooks for the C-Suite
            </h3>
            
            <button className="inline-flex items-center px-6 py-3 bg-accent-200 text-black font-medium rounded hover:bg-green-500 hover:text-white transition-colors">
              EXPLORE
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Sustainability Focus */}
          <div className="bg-green-800/40 backdrop-blur-sm rounded-2xl p-8">
            <div className="mb-4">
              <span className="text-sm font-medium text-green-200 tracking-wider uppercase">
                SUSTAINABILITY & CLIMATE
              </span>
            </div>
            
            <h3 className="text-3xl font-bcg-headline font-headings text-white mb-6">
              Leading the Transition to a Sustainable Future
            </h3>
            
            <button className="inline-flex items-center px-6 py-3 bg-accent-200 text-black font-medium rounded hover:bg-green-500 hover:text-white transition-colors">
              LEARN MORE
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsights; 