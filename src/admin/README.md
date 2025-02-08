# Admin Directory

This directory contains all admin-related functionality, including dashboards, layouts, and UI elements for the admin interface.

## Directory Structure

- `dashboards/` - Admin dashboard pages and components
  - `users/` - User management dashboard
  - `analytics/` - Analytics dashboard
  - Other specialized dashboards
- `elements/` - Reusable UI components for admin interfaces
- `layout/` - Layout components and templates for admin pages

## Key Files

- `useRedirectHomeUnlessUserIsAdmin.ts` - Hook for admin route protection
- Other utility files for admin functionality

## Features

- Protected admin routes with role-based access control
- User management dashboard
- Analytics dashboard
- Custom UI components for admin interfaces
- Responsive admin layouts

## Usage

### Admin Route Protection

```typescript
import { useRedirectHomeUnlessUserIsAdmin } from '../admin/useRedirectHomeUnlessUserIsAdmin'

const AdminPage = () => {
  useRedirectHomeUnlessUserIsAdmin()
  return <div>Admin Content</div>
}
```

### Admin Components

Admin components are organized by feature in the `dashboards` directory. Each dashboard typically includes:
- Main page component
- Data tables
- Charts and visualizations
- Action components (edit, delete, etc.)

## Development Guidelines

1. All admin routes should use the `useRedirectHomeUnlessUserIsAdmin` hook
2. Follow the established component structure in dashboards
3. Use shared UI elements from the `elements` directory
4. Implement proper loading states and error handling
5. Add appropriate TypeScript types for all components
6. Document complex business logic
7. Test admin-only access controls

## Styling

- Use Tailwind CSS for styling
- Follow the dark theme color scheme:
  - `bg-boxdark` for dark backgrounds
  - `text-white` for light text
  - `border-boxdark` for borders
- Use provided UI components from `/src/admin/elements/`

## Security

- Implement proper admin role checks
- Validate all user input
- Log security-relevant actions
- Handle sensitive data appropriately
- Use proper CSRF protection

For more detailed documentation about specific admin features, please refer to the README files in each subdirectory.
