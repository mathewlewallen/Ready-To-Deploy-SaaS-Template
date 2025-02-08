import { useAuth } from 'wasp/client/auth';
import { generateCheckoutSession, getCustomerPortalUrl, useQuery } from 'wasp/client/operations';
import { PaymentPlanId, paymentPlans, prettyPaymentPlanName } from './plans';
import { AiFillCheckCircle } from 'react-icons/ai';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../client/cn';
import { routes, Link as WaspRouterLink } from 'wasp/client/router';

const bestDealPaymentPlanId: PaymentPlanId = PaymentPlanId.Premium;

interface PaymentPlanCard {
  name: string;
  price: string | JSX.Element;
  description: string;
  features: string[];
}

const paymentPlanCards: Record<PaymentPlanId, PaymentPlanCard> = {
  [PaymentPlanId.Enterprise]: {
    name: prettyPaymentPlanName(PaymentPlanId.Enterprise),
    price: <span className="text-4xl font-bold tracking-tight">Contact Us!</span>,
    description: 'Advanced context management with enterprise-grade features and dedicated support for large teams',
    features: ['Unlimited access to all premium features and tools', 'Team collaboration and management tools', 'Priority customer support'],
  },
  [PaymentPlanId.Premium]: {
    name: prettyPaymentPlanName(PaymentPlanId.Premium),
    price: (
      <>
        <span className="text-4xl font-bold tracking-tight  text-white">$9.99</span>
        <span className="text-sm font-semibold leading-6  text-white"> /month</span>
      </>
    ),
    description: 'Enhanced context analysis with advanced features for professional developers and growing teams',
    features: ['Unlock premium watchers and advanced analytics', 'Enhanced project metrics and real-time updates', 'Everything we have to offer!'],
  },
  [PaymentPlanId.Basic]: {
    name: prettyPaymentPlanName(PaymentPlanId.Basic),
    price: <span className="text-4xl font-bold tracking-tight text-white">Free!</span>,
    description: 'Essential context management for individual developers to understand and document their projects',
    features: ['Automatically generate project structure (Tree.txt)', 'Basic project metadata generation', 'Forever free, no hidden charges!'],
  },
  [PaymentPlanId.Beta]: {
    name: prettyPaymentPlanName(PaymentPlanId.Beta),
    price: <span className="text-4xl font-bold tracking-tight text-primary">BETA</span>,
    description: 'Join our limited-time Beta to explore advanced CloudContext features before anyone else. Provide feedback and help shape our final release.',
    features: ['Access to all premium features and tools', 'Priority customer support', 'Early access to new features and updates', 'Please Provide Feedback!'],
  },
};

const PricingPage = () => {
  const [isPaymentLoading, setIsPaymentLoading] = useState<boolean>(false);
  
  const { data: user } = useAuth();
  const isUserSubscribed = !!user && !!user.subscriptionStatus && user.subscriptionStatus !== 'deleted';

  const {
    data: customerPortalUrl,
    isLoading: isCustomerPortalUrlLoading,
    error: customerPortalUrlError,
  } = useQuery(getCustomerPortalUrl, { enabled: isUserSubscribed });

  const navigate = useNavigate();

  async function handleBuyNowClick(paymentPlanId: PaymentPlanId) {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      setIsPaymentLoading(true);

      const checkoutResults = await generateCheckoutSession(paymentPlanId);

      if (checkoutResults?.sessionUrl) {
        window.open(checkoutResults.sessionUrl, '_self');
      } else {
        throw new Error('Error generating checkout session URL');
      }
    } catch (error) {
      console.error(error);
      setIsPaymentLoading(false); // We only set this to false here and not in the try block because we redirect to the checkout url within the same window
    }
  }

  const handleCustomerPortalClick = () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (customerPortalUrlError) {
      console.error('Error fetching customer portal url');
    }

    if (!customerPortalUrl) {
      throw new Error(`Customer Portal does not exist for user ${user.id}`)
    }

    window.open(customerPortalUrl, '_blank');
  };

  return (
    <div className='py-10 lg:mt-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div id='pricing' className='mx-auto max-w-4xl text-center'>
          <h2 className='mt-2 text-6xl font-bold tracking-tight text-white'>
            Pick Your <span className='text-primary'>Plan</span>
          </h2>
            {/* Add Beta Banner */}
            <div className="mt-8 mx-auto max-w-2xl">
            <button
                onClick={() => handleBuyNowClick(PaymentPlanId.Beta)}
                tabIndex={0}
                aria-label="Access Beta Program"
                className="w-full text-left cursor-pointer group bg-gradient-to-r from-boxdark2 to-boxdark hover:from-primary/20 hover:to-primary/10 
                         rounded-lg p-6 border border-primary/20 shadow-lg transition-all duration-300"
              >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="animate-pulse">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Beta Access Available!</h3>
                </div>
                <span className="text-primary group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
              <p className="mt-2 text-gray-300">
                Join our beta program to get early access to all premium features and help shape the future of CloudContext
              </p>
            </button>
          </div>
    <div className="mt-8 text-center">
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
</div>
        <div className='isolate mx-auto mt-16 grid max-w-md gap-y-8 lg:gap-x-8 sm:mt-20 lg:mx-0 lg:max-w-none grid-cols-3'>
          {Object.values(PaymentPlanId).filter(planId => planId !== PaymentPlanId.Beta).map((planId) => (
            <div
              key={planId}
              className={cn(
                'relative flex flex-col grow justify-between rounded-3xl ring-primary overflow-hidden p-8 xl:p-10',
                {
                  'ring-2 ': bestDealPaymentPlanId === planId,
                  'ring-1 lg:mt-8 ': bestDealPaymentPlanId !== planId,
                }
              )}
            >
              {bestDealPaymentPlanId === planId && (
                <div
                className='absolute top-0 right-0 -z-10 w-full h-full transform-gpu blur-2xl'
                aria-hidden='true'
              >
                <div
                  className='absolute w-full h-full bg-gradient-to-br from-boxdark2 to-primary opacity-30'
                  style={{
                    clipPath: 'circle(670% at 50% 50%)',
                  }}
                />
              </div>
              )}
              <div className={cn(
                'mb-8',
                bestDealPaymentPlanId === planId ? 'text-white' : ' text-white'
              )}>
                <div className='flex justify-center decoration-primary underline decoration-4 gap-x-4'>
                  <h3 className='text-5xl font-bold leading-8'>
                    {paymentPlanCards[planId].name}
                  </h3>
                </div>
                <p className='mt-4 text-center text-md leading-6'>
                  {paymentPlanCards[planId].description}
                </p>
                <p className='mt-6 flex justify-center items-baseline gap-x-1'>
                  <span className='text-4xl font-bold tracking-tight'>
                    {paymentPlanCards[planId].price}
                  </span>
                  <span className='text-sm font-semibold'>
                    {paymentPlans[planId].effect.kind === 'subscription'}
                  </span>
                </p>
                <ul className='mt-8 space-y-3 text-sm leading-6'>
                  {paymentPlanCards[planId].features.map((feature) => (
                    <li key={feature} className='flex items-center justify-center gap-x-3'>
                      <div className='w-72 flex items-center gap-x-3'>
                        <AiFillCheckCircle 
                          className='h-6 w-5 flex-none text-primary'
                          aria-hidden='true'
                        />
                        <span className='flex-1'>{feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {isUserSubscribed ? (
                <button
                  onClick={handleCustomerPortalClick}
                  disabled={isCustomerPortalUrlLoading}
                  className={cn(
                    'mt-8 block rounded-md py-2 px-3 text-center text-md font-semibold leading-6 text-primary hover:bg-boxdark-3 duration-300 ease-in-out',
                    {
                      'ring-2 ring-inset ring-white hover:ring-primary': bestDealPaymentPlanId === planId,
                      'ring-1 ring-inset ring-white hover:ring-primary': bestDealPaymentPlanId !== planId,
                    }
                  )}
                >
                  Manage Subscription
                </button>
              ) : (
                <button
                  onClick={() => handleBuyNowClick(planId)}
                  aria-describedby={planId}
                  className={cn(
                    'mt-8 block rounded-md py-2 px-3 text-center text-md font-semibold leading-6 text-primary hover:bg-boxdark-3 duration-300 ease-in-out',
                    {
                      'ring-2 ring-inset ring-white hover:ring-primary': bestDealPaymentPlanId === planId,
                      'ring-1 ring-inset ring-white hover:ring-primary': bestDealPaymentPlanId !== planId,
                    },
                  )}
                  disabled={isPaymentLoading}
                >                  
                  {!!user ? 'Buy plan' : 'Log in to buy plan'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
