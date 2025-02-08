import React, { ReactNode } from 'react';
import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import logo from '../client/static/logo.webp';

export function AuthPageLayout({children} : {children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bodydark2 flex flex-col justify-center py-12 sm:px-10 lg:px-12">
      {/* Logo Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
        <WaspRouterLink to={routes.LandingPageRoute.to} className="flex justify-center">
          <div className="p-3 bg-boxdark2 rounded-full">
          <img className="h-16 w-auto" src={logo} alt="Cloud Context" />
          </div>
          </WaspRouterLink>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Welcome to <span className='text-primary'>Cloud Context</span>
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Secure access to your account 
        </p>
      </div>
      <div className="text-center mb-10">
  <WaspRouterLink 
    to={routes.ContactPageRoute.to} 
    className="inline-flex items-center px-6 py-3 text-2xl rounded-lg bg-boxdark2 border border-primary/20 
              text-primary hover:text-boxdark2 hover:bg-primary transition-all duration-200 
              shadow-lg hover:shadow-primary/20 group"
  >
    <svg 
      className="h-5 w-5 mr-2 text-xl group-hover:animate-bounce" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    Found a bug? Report it here!
  </WaspRouterLink>
  </div>

      {/* Main Content Card */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
  <div className="relative">
    {/* Subtle gradient "border" behind card */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-gray-900 to-primary/70 rounded-lg blur-md"></div>

    {/* The card itself */}
    <div className="
      relative bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10
      border border-primary/30 text-gray-800
    ">
      {children}
    </div>
  </div>

        {/* Footer Links */}
        <div className="mt-8 text-center">
          <div className="space-x-4 text-sm text-gray-400">
            <WaspRouterLink to={routes.TOSPageRoute.to} className="hover:text-primary transition-colors">
              Terms of Service
            </WaspRouterLink>
            <span>•</span>
            <WaspRouterLink to={routes.PrivacyPageRoute.to} className="hover:text-primary transition-colors">
              Privacy Policy
            </WaspRouterLink>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[40%] top-0 h-[1000px] w-[1000px] rounded-full bg-primary opacity-5 blur-3xl"></div>
        <div className="absolute right-[40%] bottom-0 h-[800px] w-[800px] rounded-full bg-primary opacity-5 blur-3xl"></div>
      </div>
    </div>
  )
}