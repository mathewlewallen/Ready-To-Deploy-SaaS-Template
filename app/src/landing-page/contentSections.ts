import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { routes } from 'wasp/client/router';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'Pricing', to: routes.PricingPageRoute.to },
  { name: 'Contact Us', to: routes.ContactPageRoute.to },
  { name: 'FAQ', to: routes.FAQPageRoute.to },
];

export const features = [
  {
    name: 'Tree.txt',
    description: 'Automatically compiles and maintains your entire project tree.',
    icon: '🌳',
    href: null,
  },
  {
    name: "Dependencies.json",
    description: "Visualize your dependencies for simplified analysis of complex codebases.",
    icon: '🔗',
    href: null,
  },
  {
    name: "Summaries.json",
    description: "Generate contextual file overviews for fast onboarding and reference.",
    icon: '📝',
    href: null,
  },
  {
    name: "Quality-metrics.json",
    description: "Track code quality metrics to maintain reliability and performance at scale.",
    icon: '📈',
    href: null,
  },
  {
    name: "Tech-stack.json",
    description: "Identify languages, frameworks, and tooling used across your project.",
    icon: '🧰',
    href: null,
  },
  {
    name: "Env-vars.json",
    description: "Manage environment variables securely to reduce dev/staging/production confusion.",
    icon: '🔐',
    href: null,
  },
  {
    name: "API-usage.json",
    description: "Monitor and optimize internal and external API usage with real-time logs.",
    icon: '🌐',
    href: null,
  },
  {
    name: "Project-history.json",
    description: "Store file changes and Git logs to keep a historical timeline of your project.",
    icon: '📅',
    href: null,
  },
]; 
export const testimonials = [
  {
    author: {
      name: "This could be you!",
      role: "AI Researcher",
      avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      socialUrl: "https://twitter.com/emmaai"
    },
    quote: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "This could be you!",
      role: "AI Researcher",
      avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      socialUrl: "https://twitter.com/davidtech"
    },
    quote: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "This could be you!",
      role: "AI Researcher",
      avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      socialUrl: "https://twitter.com/sofiaml"
    },
    quote: "Finally, a tool that actually understands context! The accuracy in natural language processing is impressive.",
    href: "https://twitter.com/sofiaml"
  },
  {
    author: {
      name: "This could be you!",
      role: "AI Researcher",
      avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      socialUrl: "https://twitter.com/emmaai"
    },
    quote: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "This could be you!",
      role: "AI Researcher",
      avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      socialUrl: "https://twitter.com/davidtech"
    },
    quote: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "This could be you!",
      role: "AI Researcher",
      avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      socialUrl: "https://twitter.com/sofiaml"
    },
    quote: "Finally, a tool that actually understands context! The accuracy in natural language processing is impressive.",
    href: "https://twitter.com/sofiaml"
  }
];

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
