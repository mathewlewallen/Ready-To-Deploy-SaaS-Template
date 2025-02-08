import React from 'react';
import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { ResetPasswordForm } from 'wasp/client/auth';
import { AuthPageLayout } from '../AuthPageLayout';

export function PasswordResetPage() {
  return (
    <AuthPageLayout>
      <ResetPasswordForm />
      <br />
      <span className='text-sm font-medium text-white'>
        If everything is okay, <WaspRouterLink to={routes.LoginRoute.to} className='text-primary underline'>go to login</WaspRouterLink>
      </span>
    </AuthPageLayout>
  );
}
