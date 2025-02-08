import { type AuthUser } from 'wasp/auth';
import Breadcrumb from '../../layout/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { useRedirectHomeUnlessUserIsAdmin } from '../../useRedirectHomeUnlessUserIsAdmin';
import React from 'react';

const Alerts = ({ user }: { user: AuthUser }) => {
  useRedirectHomeUnlessUserIsAdmin({ user });

  return (
    <DefaultLayout user={user}>
      <Breadcrumb pageName='Alerts' />
      <div className='rounded-lg border p-4 shadow-lg border-primary/20 bg-boxdark md:p-6 xl:p-9'>
        <div className='flex flex-col gap-6'>
          {/* Warning Alert */}
          <div className='flex w-full border-l-4 border-warning bg-warning/10 px-7 py-8 shadow-md md:p-9'>
            <div className='mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-warning/20'>
              <svg className="h-6 w-6 text-warning" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div className='w-full'>
              <h5 className='mb-3 text-lg font-semibold text-warning'>Important Notice</h5>
              <p className='leading-relaxed text-warning/80'>
                Please ensure all required fields are completed before submitting the form.
              </p>
            </div>
          </div>

          {/* Success Alert */}
          <div className='flex w-full border-l-4 border-success bg-success/10 px-7 py-8 shadow-md md:p-9'>
            <div className='mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-success/20'>
              <svg className="h-6 w-6 text-success" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='w-full'>
              <h5 className='mb-3 text-lg font-semibold text-success'>Operation Successful</h5>
              <p className='text-base leading-relaxed text-success/80'>
                Your changes have been successfully saved and applied.
              </p>
            </div>
          </div>

          {/* Error Alert */}
          <div className='flex w-full border-l-4 border-danger bg-danger/10 px-7 py-8 shadow-md md:p-9'>
            <div className='mr-5 flex h-9 w-9 items-center justify-center rounded-lg bg-danger/20'>
              <svg className="h-6 w-6 text-danger" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='w-full'>
              <h5 className='mb-3 font-semibold text-danger'>Error Detected</h5>
              <ul>
                <li className='leading-relaxed text-danger/80'>Please check your input and try again.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Alerts;
