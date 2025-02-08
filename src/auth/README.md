# Authentication Directory

This directory contains all authentication-related functionality, including login, signup, and user management.

## Directory Structure

- `email-and-pass/` - Email and password authentication implementation
- `hooks.ts` - Custom authentication hooks
- `userSignupFields.ts` - User signup field definitions
- `LoginPage.tsx` - Login page component
- `SignupPage.tsx` - Signup page component
- `AuthPageLayout.tsx` - Shared layout for auth pages

## Features

- Email and password authentication
- Social authentication support
- User signup with custom fields
- Protected route handling
- Authentication state management
- Password reset functionality

## Usage

### Authentication Components

```typescript
import { LoginForm } from 'wasp/client/auth'
import { SignupForm } from 'wasp/client/auth'

// Use built-in auth components
<LoginForm />
<SignupForm />
```

### Custom Hooks

```typescript
import { useAuth } from './hooks'

// Use auth hooks in components
const { data: user, isLoading } = useAuth()
```

## User Signup Fields

Custom signup fields are defined in `userSignupFields.ts`:

```typescript
export const signupFields = {
  username: {
    type: 'string',
    required: true,
    validate: (username) => {...}
  },
  // ... other fields
}
```

## Development Guidelines

1. Use Wasp's built-in auth components when possible
2. Implement proper validation for custom fields
3. Handle authentication errors gracefully
4. Use TypeScript types from 'wasp/auth'
5. Follow security best practices
6. Test authentication flows thoroughly

## Authentication Flow

1. User enters credentials
2. Validation occurs
3. Authentication request is processed
4. JWT token is generated
5. User is redirected to appropriate page
6. Session is maintained

## Security Best Practices

- Implement proper password hashing
- Use secure session management
- Enable CSRF protection
- Implement rate limiting
- Log security events
- Handle session timeout
- Implement 2FA when needed

## Environment Variables

Required environment variables:

```
JWT_SECRET=your_jwt_secret
AUTH_COOKIE_NAME=your_cookie_name
```

For social auth:
```
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Styling

Auth pages use Tailwind CSS with custom styling defined in `AuthPageLayout.tsx`.

## Error Handling

- Form validation errors
- Authentication failures
- Network errors
- Session expiration
- Invalid credentials

For more detailed documentation about specific authentication features, please refer to the individual file documentation. 