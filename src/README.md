# Source Directory Structure

This directory contains the core source code for the SaaS application. Below is an overview of each subdirectory and its purpose.

## Directory Structure

- `admin/` - Admin dashboard components and functionality
- `analytics/` - Analytics tracking and reporting functionality
- `auth/` - Authentication and authorization components
- `client/` - Client-side application components and setup
- `faq/` - FAQ page and content management
- `file-upload/` - File upload functionality and S3 integration
- `landing-page/` - Landing page components and content
- `legal/` - Legal pages (Terms of Service, Privacy Policy, etc.)
- `messages/` - Messaging system components and operations
- `newsletter/` - Newsletter management and sending functionality
- `payment/` - Payment processing and subscription management
- `server/` - Server-side utilities and middleware
- `shared/` - Shared utilities and types
- `user/` - User-related components and functionality

## Key Technologies

- Frontend: React with TypeScript
- Backend: Node.js with Wasp framework
- Database: PostgreSQL with Prisma
- Styling: Tailwind CSS
- Authentication: Built-in Wasp auth
- File Storage: AWS S3
- Analytics: Plausible Analytics

## Development Guidelines

1. Follow the established directory structure for new features
2. Use TypeScript for all new code
3. Import Wasp functions from 'wasp' namespace
4. Follow the project's styling guidelines with Tailwind CSS
5. Implement proper error handling and loading states
6. Write tests for critical functionality
7. Document new features and API changes

## Environment Setup

1. Ensure all required environment variables are set in appropriate .env files
2. Never commit .env files to version control
3. Use .env.example as a template
4. Separate client and server environment variables

For detailed documentation about specific features, please refer to the README files in each subdirectory. 