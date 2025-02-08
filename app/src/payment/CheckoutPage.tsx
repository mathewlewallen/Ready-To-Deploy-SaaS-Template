import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CheckoutPage() {
  const [paymentStatus, setPaymentStatus] = useState('loading');
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/pricing');
    }, 4000);

    const queryParams = new URLSearchParams(location.search);
    const isSuccess = queryParams.get('success');
    const isCanceled = queryParams.get('canceled');

    if (isCanceled) {
      setPaymentStatus('canceled');
    } else if (isSuccess) {
      setPaymentStatus('paid');
    } else {
      navigate('/pricing');
    }
    return () => clearTimeout(redirectTimer);
  }, [location, navigate]);

  const statusConfig = {
    paid: {
      icon: '🎉',
      title: 'Payment Successful!',
      message: 'Thank you for your purchase.',
      color: 'text-success'
    },
    canceled: {
      icon: '↩️',
      title: 'Payment Canceled',
      message: 'Your payment was canceled.',
      color: 'text-warning'
    },
    error: {
      icon: '⚠️',
      title: 'Payment Error',
      message: 'Something went wrong with your payment.',
      color: 'text-danger'
    },
    loading: {
      icon: '⌛',
      title: 'Processing...',
      message: 'Please wait while we confirm your payment.',
      color: 'text-primary'
    }
  };

  const currentStatus = statusConfig[paymentStatus as keyof typeof statusConfig];

  return (
    <div className="min-h-screen bg-boxdark flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-boxdark2 py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 
                      border border-primary/20">
          {/* Status Icon */}
          <div className="text-center mb-6">
            <span className="text-6xl">{currentStatus.icon}</span>
          </div>

          {/* Status Title */}
          <h2 className={`text-2xl font-bold text-center mb-4 ${currentStatus.color}`}>
            {currentStatus.title}
          </h2>

          {/* Status Message */}
          <p className="text-gray-400 text-center mb-6">
            {currentStatus.message}
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-boxdark rounded-full h-2.5 mb-6">
            <div className="bg-primary h-2.5 rounded-full animate-progress"></div>
          </div>

          {/* Redirect Message */}
          <p className="text-sm text-gray-400 text-center">
            Redirecting to your account page in a few seconds...
          </p>
        </div>
      </div>
    </div>
  );
}