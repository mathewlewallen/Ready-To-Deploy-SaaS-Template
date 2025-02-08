import React from 'react';
import cloudContextBannerWebp from '../../client/static/cloudcontext-banner.webp';
import { routes } from 'wasp/client/router';

export default function Hero() {
  return (
    <div className='relative pt-8 w-full'>
      <div className='py-4 sm:py-5'>
        <div className='flex justify-center mb-4 relative'>
          <img
            src={cloudContextBannerWebp}
            alt='CloudContext screenshot'
            width={1000}
            height={530}
            loading='lazy'
            className='rounded-md'
          />
        </div>
        <div className='mx-auto max-w-8xl px-6 lg:px-8'>
          <div className='lg:mb-18 mx-auto max-w-3xl text-center'>
            <h1 className='text-6xl font-bold  sm:text-6xl text-white'>
            Unlock Full <span className='italic  text-primary'>Context</span>
            </h1>
            <p className='mt-6 mx-auto max-w-2xl text-2xl leading-8 text-white'>
            Empowering you (and your AI tools) to work smarter.
            </p>
            <p className='mt-6 mx-auto max-w-2xl text-lg leading-8 text-white'>
              Leverage the generated <code className='text-primary'>.context</code> folder to supercharge AI tools with<br></br>a complete understanding of your project&apos;s structure and dependencies.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href={routes.LoginRoute.to}
                className='rounded-md px-6 py-2.5 text-xl font-bold  ring-1 ring-inset ring-primary hover:ring-4 hover:ring-primary shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-white'
                >
                Get Started <span aria-hidden='true'>→</span>
              </a>
              <a
              href={routes.PricingPageRoute.to}
              className='rounded-md px-6 py-2.5 text-xl font-bold  ring-1 ring-inset ring-primary hover:ring-4 hover:ring-primary shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-white'
              >
                Learn More
                </a>
            </div>
          </div>
          <div className='mt-8 flow-root sm:mt-14'>
            <div className='-m-2  flex justify-center rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4'>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}