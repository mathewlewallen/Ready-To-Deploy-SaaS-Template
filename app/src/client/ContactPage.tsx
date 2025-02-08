import React from 'react';
import ContactForm from '../server/ContactForm';

export function ContactPage() {
  return (
    <div className='bg-boxdark2 mt-10 flex items-center justify-center p-6'>
      <div className='max-w-2xl w-full'>
        <h1 className='text-6xl font-bold text-white text-center mb-6'>Give Us Some <span className='text-primary'>Context</span></h1>
        <p className='text-center text-bodydark mb-8'>
          Have questions? Fill out the form below, and we&apos;ll get back to you as soon as possible.
        </p>
        <div className="mb-10 text-center">
  </div>
        <ContactForm /> 
      </div>
    </div>
  );
}