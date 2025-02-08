import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from 'wasp/client/router';

export interface DocumentationSection {
    id: string;
    title: string;
    description: string;
    content: string[];
  }
  
  export const documentationSections: DocumentationSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Learn the basics to get started with Cloud Context.',
      content: [
        '### What is Cloud Context?',
        'Cloud Context simplifies project management by automatically generating and maintaining contextual insights for your codebase.',
        '',
        '### Prerequisites',
        '- Node.js v16 or higher',
        '- A PostgreSQL database',
        '- Wasp CLI installed (minimum v0.15.2)',
        '',
        '### Quick Start',
        '1. Clone the repository: `git clone https://github.com/cloudcontext/project.git`',
        '2. Install dependencies: `npm install`',
        '3. Start the development server: `wasp start`',
      ],
    },
    {
      id: 'setup-guide',
      title: 'Setup Guide',
      description: 'Step-by-step instructions to configure and deploy Cloud Context.',
      content: [
        '### Local Setup',
        '1. Ensure that PostgreSQL is running locally on port 5432.',
        '2. Copy `.env.example` to `.env` and update the environment variables.',
        '3. Run database migrations: `wasp db migrate-dev`.',
        '',
        '### Deployment',
        '1. Choose a hosting provider (e.g., Vercel, AWS, or DigitalOcean).',
        '2. Set up a production database.',
        '3. Configure environment variables for the production server.',
        '4. Deploy using `wasp deploy`.',
      ],
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Detailed reference for available API endpoints.',
      content: [
        '### User Endpoints',
        '- **GET /api/users**: Fetch a list of all users.',
        '- **POST /api/users**: Create a new user.',
        '',
        '### Admin Endpoints',
        '- **GET /api/admin/stats**: Fetch platform analytics.',
        '- **POST /api/admin/actions**: Execute admin-level actions.',
      ],
    },
    {
      id: 'faqs',
      title: 'FAQs',
      description: 'Common questions and answers about Cloud Context.',
      content: [
        '### How do I reset my password?',
        'Visit the [Forgot Password](#/forgotpassword) page and follow the instructions to reset your password.',
        '',
        '### What happens if I encounter a bug?',
        'Submit a bug report through the [Contact Us](#/contact) page, and we will address it promptly.',
        '',
        '### Can I integrate Cloud Context with external tools?',
        'Yes! Cloud Context supports webhooks and APIs for integrations with other platforms.',
      ],
    },
    {
      id: 'support',
      title: 'Support',
      description: 'Resources for troubleshooting and contacting support.',
      content: [
        '### Troubleshooting',
        '- Check the [Getting Started](#/getting-started) guide for setup instructions.',
        '- Review our [FAQs](#/faqs) for common issues.',
        '',
        '### Contact Us',
        'If you need further assistance, please reach out through the [Contact Us](#/contact) page or email us at `support@cloudcontext.cc`.',
      ],
    },
  ];
  
export default function DocumentationPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Show a brief message and redirect
    const timer = setTimeout(() => {
      navigate(routes.FAQPageRoute.to);
    }, 0);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="bg-boxdark text-white min-h-screen">
      <header className="bg-boxdark2 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Documentation</h1>
          <p className="text-bodydark text-lg">
            Explore guides, tutorials, and resources to help you get started with <strong>Cloud Context</strong>.
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
        {/* Sidebar Navigation */}
          <div className="block bg-boxdark2 rounded-lg shadow-lg w-60">
  <div className="sticky top-[4.5rem] overflow-y-auto pt-8">
    <nav className="text-center text-lg">
      <h2 className="text-2xl font-semibold text-primary mb-4">Sections</h2>
      <ul role="list" className="space-y-4">
        {documentationSections.map((section) => (
          <li key={section.title}>
                  <a href={`#${section.id}`} className="block text-sm font-medium text-bodydark hover:text-primary">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
    </nav>
  </div>
</div>
          <section className="md:col-span-3">
            {documentationSections.map((section) => (
              <div key={section.id} id={section.id} className="bg-boxdark2 rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">{section.title}</h2>
                <p className="text-bodydark mb-4">{section.description}</p>
                <div className="prose prose-invert">
                  {section.content.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
      <footer className="bg-boxdark2 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-bodydark">&copy; {new Date().getFullYear()} Cloud Context. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
