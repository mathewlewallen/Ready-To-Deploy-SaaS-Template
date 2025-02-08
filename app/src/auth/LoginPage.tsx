import React, { useEffect } from 'react';
import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { AuthPageLayout } from './AuthPageLayout';
import { LoginForm, useAuth } from 'wasp/client/auth';
import { useNavigate } from 'react-router-dom';


export default function Login() {
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
      <LoginForm />
      <br />
      <span className='text-sm font-medium  '>
        Don&apos;t have an account yet?  {'  '}
        <WaspRouterLink to={routes.SignupRoute.to} className='underline underline-offset-4 decoration-primary'>
          Sign Up!
        </WaspRouterLink>
      </span>
      <br />
      <span className='text-sm font-medium '>
        Forgot your password?  {'  '}
        <WaspRouterLink to={routes.RequestPasswordResetRoute.to} className='underline underline-offset-4 decoration-primary'>
          Let&apos;s reset it.
        </WaspRouterLink>
      </span>
    </AuthPageLayout>
  );
}
