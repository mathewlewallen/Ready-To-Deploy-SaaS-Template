import { faqs, footerNavigation } from './contentSections';
import Footer from '../landing-page/components/Footer';
import React from 'react';
import FAQ from './FAQ';
import { routes, Link as WaspRouterLink } from 'wasp/client/router';

export default function LandingPage() {
  return (
    <div className=' pt-10 text-white bg-boxdark2'>
      <main className='isolate bg-boxdark2'>
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
        <FAQ faqs={faqs} />
      </main>
      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}
