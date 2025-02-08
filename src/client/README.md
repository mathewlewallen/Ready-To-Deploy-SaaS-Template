# Client Directory

This directory contains the core client-side application code, including the main App component, navigation, and shared UI elements.

## Directory Structure

- `components/` - Reusable React components
  - `NavBar/` - Navigation bar components
  - `NotFoundPage.tsx` - 404 page component
- `hooks/` - Custom React hooks
  - `useIsLandingPage` - Landing page detection hook
- `icons/` - SVG icons and visual assets
- `static/` - Static assets (images, fonts, etc.)
- `App.tsx` - Main application component
- `Main.css` - Global styles and Tailwind configuration
- `cn.ts` - Utility for conditional class names
- `ContactPage.tsx` - Contact page component

## Features

- Core application layout
- Navigation system
- Route management
- Theme handling
- Global styling
- Shared components

## Usage

### App Component

The main App component (`App.tsx`) provides:
- Route handling
- Navigation bar management
- Layout structure
- Theme context
- User session tracking

```typescript
// App.tsx structure
<App>
  {isAdminDashboard ? (
    <Outlet />
  ) : (
    <>
      <NavBar navigationItems={navigationItems} />
      <div className="mx-auto max-w-7xl">
        <Outlet />
      </div>
    </>
  )}
</App>
```

### Navigation

```typescript
import NavBar from './components/NavBar/NavBar'
import { appNavigationItems } from './components/NavBar/contentSections'

// Use navigation
<NavBar navigationItems={navigationItems} />
```

## Development Guidelines

1. Follow component organization structure
2. Use TypeScript for all components
3. Implement proper loading states
4. Handle route transitions
5. Maintain theme consistency
6. Document complex components

## Styling

- Use Tailwind CSS for styling
- Global styles in `Main.css`
- Dark theme using `bg-boxdark2` and `text-white`
- Use `cn` utility for conditional classes:

```typescript
import { cn } from '../cn'

className={cn(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' && 'primary-class'
)}
```

## Routing

- Uses Wasp's routing system
- Route definitions in main.wasp
- Route guards for protected routes
- Hash-based scroll handling
- Navigation state management

## State Management

- User authentication state
- Navigation state
- Route state
- Theme preferences
- Session tracking
- Loading states

## Performance

- Route-based code splitting
- Lazy loading components
- Asset optimization
- State management
- Navigation caching
- Theme switching

## Error Handling

- Route error boundaries
- Loading states
- Network errors
- Authentication errors
- Not found pages
- State recovery

## Testing

- Component testing
- Route testing
- Hook testing
- Theme testing
- Navigation testing
- State management testing

## Browser Support

- Modern browser support
- Responsive design
- Mobile optimization
- Theme consistency
- Navigation handling
- Touch interactions

For more detailed documentation about client-side features, please refer to the individual component and hook documentation. 