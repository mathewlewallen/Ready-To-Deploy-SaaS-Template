import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { routes } from 'wasp/client/router';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'Pricing', to: routes.PricingPageRoute.to },
  { name: 'Contact Us', href: 'mailto:mathewlewallen@cloudcontext.cc' },
];

export const faqs = [
  {
    id: 1,
    question: 'What is CloudContext?',
    answer: 
      "CloudContext is a platform designed to help developers automatically generate project metadata in a .context folder. Once you connect your project, CloudContext scans (or walks) your repository to produce structured outputs—like Tree.txt or Dependencies.json—that provide an at-a-glance overview of your codebase. It&apos;s ideal for quickly grasping project structure, sharing context with collaborators, and boosting productivity.",
    href: null,
  },
  {
    id: 2,
    question: 'Is CloudContext free to use?',
    answer: 
      "We offer a free tier that lets you generate context for smaller projects. As your needs grow, you can upgrade to one of our paid plans for advanced analytics and priority support. Check out our pricing page for the latest details.",
    href: routes.PricingPageRoute.to,
  },
  {
    id: 3,
    question: 'How does CloudContext handle my source code?',
    answer: 
      "Your source code is never stored or transmitted externally without your explicit permission. CloudContext only scans your project locally (or via a secure connection) to create the .context metadata. After generation, you retain full control of those context files. We take security seriously, so environment variables or other sensitive data are not collected or uploaded.",
    href: null,
  },
  {
    id: 4,
    question: 'Is CloudContext secure?',
    answer: 
      "Absolutely. We prioritize security at every step. By default, we do not store or log your code outside the scanning process. All operations happen locally or via secure connections, so your data remains safe. We also follow industry best practices.",
    href: null,
  },
  {
    id: 5,
    question: 'How do I get started?',
    answer:
      "Getting started is quick and easy. Simply sign up for an account, navigate to the Generate Context page, and follow the prompts. CloudContext will walk your repository and produce the .context files automatically. If you run into any issues, our support team is here to help.",
      href: null,
    },
  {
    id: 6,
    question: 'What support options are available?',
    answer:
      "For now, we offer email support at mathewlewallen@cloudcontext.cc, a community Discord server, on GitHub Discussions, and via our contact page. As CloudContext evolves, we plan to roll out more options such as a full knowledge base, live chat, and priority support for higher-tier plans.",
    href: routes.ContactPageRoute.to,
  },
]

export const footerNavigation = {
  app: [
    { name: 'Website Built\nwith OpenSaaS', href: 'https://docs.opensaas.sh' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: routes.PricingPageRoute.to },
    { name: 'Documentation', href: routes.DocsPageRoute.to },
  ],
  company: [
    { name: 'Contact Us', href: routes.ContactPageRoute.to },
    { name: 'Privacy Policy', href: routes.PrivacyPageRoute.to },
    { name: 'Terms of Service', href: routes.TOSPageRoute.to },
    { name: 'Refund &\nCancellation Policy', href: routes.RefundPageRoute.to },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/cloud_context' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/mathewlewallen' },
    { name: 'GitHub', href: 'https://github.com/mathewlewallen' },
    { name: 'Discord', href: 'https://discord.gg/V3tXJ4cS' },
  ],
};