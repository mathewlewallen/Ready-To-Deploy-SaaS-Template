import React from 'react';
import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { VerifyEmailForm } from 'wasp/client/auth';
import { AuthPageLayout } from '../AuthPageLayout';

export function EmailVerificationPage() {
  return (
    <AuthPageLayout>
      <VerifyEmailForm />
      <br />
      <span className='text-sm font-medium '>
        If everything is okay, <WaspRouterLink to={routes.LoginRoute.to} className='underline'>go to login</WaspRouterLink>
      </span>
    </AuthPageLayout>
  );
}
