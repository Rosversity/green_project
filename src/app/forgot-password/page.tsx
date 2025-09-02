"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { EnvelopeIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header Section */}
        <div className={`text-center transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Link href="/" className="group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-200 rounded-full animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-black group-hover:text-green-600 transition-colors duration-300">
                  <span className="bg-gradient-to-r from-black to-green-700 bg-clip-text text-transparent">
                                         GREEN
                   </span>
                   <span className="ml-1 text-green-600">PROJECT</span>
                </div>
              </div>
            </Link>
          </div>
          
          {!isSubmitted ? (
            <>
              <h2 className="text-3xl font-light text-gray-900 mb-2">
                Reset Your Password
              </h2>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Enter your email address and we'll send you a link to reset your password
              </p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-light text-gray-900 mb-2">
                Check Your Email
              </h2>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                We've sent a password reset link to <span className="font-medium text-gray-900">{email}</span>
              </p>
            </>
          )}
        </div>

        {/* Form or Success Message */}
        <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`} style={{ transitionDelay: '200ms' }}>
          
          {!isSubmitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors duration-300" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:z-10 transition-all duration-300 hover:border-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending reset link...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        Send Reset Link
                      </span>
                      <ArrowRightIcon className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                    </div>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Success Message Content */}
              <div className="text-center space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    If an account with that email exists, you'll receive a password reset link within a few minutes.
                  </p>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p>Didn't receive the email? Check your spam folder.</p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail("");
                    }}
                    className="text-green-600 hover:text-green-500 font-medium transition-colors duration-300"
                  >
                    Try a different email address
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Back to Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remember your password?{' '}
              <Link href="/login" className="font-medium text-green-600 hover:text-green-500 transition-colors duration-300">
                Back to sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Professional Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-emerald-100 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/5 w-24 h-24 bg-teal-100 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="forgot-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(5, 150, 105, 0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#forgot-grid)" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage; 