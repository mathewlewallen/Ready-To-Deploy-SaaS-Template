import React, { useState } from 'react';

interface NavigationItem {
  name: string;
  href?: string;
  to?: string;
};

export default function Footer({ footerNavigation }: {
  readonly footerNavigation: {
    app: NavigationItem[]
    company: NavigationItem[]
    social: NavigationItem[]
  }
}) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      setSuccess('');
      return;
    }
  
    try {
      setIsSubmitting(true);
      setError('');
      setSuccess('');
  
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        setEmail('');
        setSuccess('Thank you for subscribing to our newsletter!');
      } else {
        throw new Error('Failed to subscribe.');
      }
    } catch (err: unknown) {
      console.error('Newsletter subscription failed:', err);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto pb-20 mt-20 max-w-7xl px-6 lg:px-8 bg-boxdark2">
      <footer
        aria-labelledby="footer-heading"
        className="relative border-t border-gray-200/10 pt-4 pb-26"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="flex flex-wrap items-start justify-between mt-10 gap-10">
          {/* App Section */}
          <div>
            <h3 className="text-md font-bold underline leading-none  text-white">
              Resources
            </h3>
            <ul className="mt-6 space-y-4">
              {footerNavigation.app.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-none  hover: hover:text-primary text-neutral-400"
                  >
                    {item.name.split('\n').map((line, i, arr) => (
                      <span key={`${item.name}-line-${i}`}>
                        {line}
                        {i !== arr.length - 1 && <br />}
                        </span> 
                      ))}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-md font-bold underline leading-none  text-white">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm leading-none  hover: hover:text-primary text-neutral-400"
                  >
                    {item.name.split('\n').map((line, i, arr) => (
                      <span key={`${item.name}-line-${i}`}>
                        {line}
                        {i !== arr.length - 1 && <br />}
                        </span> 
                      ))}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-md font-bold underline leading-none  text-white">
              Follow Us
            </h3>
            <ul className="mt-6 space-y-4">
              {footerNavigation.social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-none  hover: hover:text-primary text-neutral-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-auto">
            <h3 className="text-md font-bold underline leading-none  text-white">
              Newsletter
            </h3>
            <p className="mt-6 text-sm  text-neutral-400">
              Subscribe to stay updated on the latest features and updates.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit}>
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full max-w-xs rounded-md font-bold border px-2 py-2 text-md focus:outline-none border-primary  ring-1 ring-inset shadow-lg ring-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-white hover:ring-4 focus:ring-4 hover:ring-primary focus:ring-primary bg-gray-700 "
                  aria-label="Email address"
                  aria-invalid={!!error}
                  aria-describedby={error ? "newsletter-error" : undefined}
                />
                {error && (
                  <p
                    id="newsletter-error"
                    className="mt-2 text-sm text-red-600"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
                {success && (
                  <output
                  className="mt-2 text-sm text-green-600"
                  form="newsletter-form"
                >
                  {success}
                </output>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-md px-2 py-2 text-md font-bold  ring-1 ring-inset ring-primary hover:ring-4 hover:ring-primary shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}