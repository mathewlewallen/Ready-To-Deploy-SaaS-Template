import type { NavigationItem } from './NavBar';
import { routes } from 'wasp/client/router';

export const appNavigationItems: NavigationItem[] = [
  { name: 'Home', to: routes.LandingPageRoute.to },
  { name: 'Pricing', to: routes.PricingPageRoute.to },
  { name: 'Contact Us', to: routes.ContactPageRoute.to },
  { name: 'FAQ', to: routes.FAQPageRoute.to },
];
