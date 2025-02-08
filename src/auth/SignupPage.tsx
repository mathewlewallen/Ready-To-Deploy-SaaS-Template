import React, { useEffect } from 'react';
import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { AuthPageLayout } from './AuthPageLayout';
import { SignupForm, useAuth } from 'wasp/client/auth';
import { useNavigate } from 'react-router-dom';

export function Signup() {
  const { data: user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    // If user is logged in, redirect to generate context
    if (user) {
      navigate('/pricing');
      return;
    }
  }, [user]);
  return (
    <AuthPageLayout>
      <SignupForm />
      <br />
      <span className='text-sm font-medium '>
        I already have an account?  {'  '}
        <WaspRouterLink to={routes.LoginRoute.to} className='underline underline-offset-4 decoration-primary'>
          Login
        </WaspRouterLink>
      </span>
      <br />
    </AuthPageLayout>
  );
}
