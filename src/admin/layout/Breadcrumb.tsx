// Import Link component from Wasp router for navigation
import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import React from 'react';
// Interface defining props expected by Breadcrumb component
interface BreadcrumbProps {
  pageName: string;
}

// Breadcrumb component used across multiple admin pages:
// - AnalyticsDashboardPage
// - UsersDashboardPage 
// - CalendarPage
// - FormElementsPage
// - FormLayoutsPage
// - SettingsPage
// - AlertsPage
// - ButtonsPage
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    // Container with responsive flex layout
    <div className='mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
      {/* Navigation breadcrumb */}
      <nav>
        <ol className='flex items-center gap-2'>
          {/* Dashboard link - always first item */}
          <li>
            <WaspRouterLink to={routes.AdminRoute.to} className='hover:text-primary'>Dashboard /</WaspRouterLink>
          </li>
          {/* Current page name - passed in as prop */}
          <li className='text-primary'>{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;