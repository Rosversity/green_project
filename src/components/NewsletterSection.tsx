"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="relative py-20 bg-charcoal text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/8124130-hd_1080_1920_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-charcoal/70"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Newsletter signup */}
          <div className="relative">
            {/* Background tunnel image effect */}
            <div className="absolute inset-0 rounded-lg overflow-hidden opacity-60">
              <div className="w-full h-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
                {/* Tunnel perspective effect */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                    <defs>
                      <radialGradient id="tunnel" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0.8)" />
                      </radialGradient>
                    </defs>
                    <rect width="400" height="300" fill="url(#tunnel)" />
                    {/* Perspective lines */}
                    <path d="M50 50 L200 150 L350 50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <path d="M50 250 L200 150 L350 250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <path d="M50 50 L200 150 L50 250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <path d="M350 50 L200 150 L350 250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 p-8">
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">
                  EMAIL SUBSCRIPTIONS
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bcg-headline font-headings text-white mb-6">
                Stay Ahead with Our Latest Content
              </h2>
              
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    className="flex-1 px-4 py-3 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-accent-200"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-accent-200 text-black font-medium rounded hover:bg-green-700 hover:text-white transition-colors"
                  >
                    SUBSCRIBE
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right side - Podcast section */}
          <div className="relative">
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-300 tracking-wider uppercase">
                PODCASTS BY SOLARPNP
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bcg-headline font-headings text-white mb-6">
              Hear from Our Experts on Trending Topics
            </h2>
            
            <button className="inline-flex items-center px-6 py-3 bg-accent-200 text-black font-medium rounded hover:bg-green-700 hover:text-white transition-colors">
              LISTEN AND SUBSCRIBE
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection; 