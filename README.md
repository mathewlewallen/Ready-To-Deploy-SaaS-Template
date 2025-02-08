# Cloud Context SaaS Template

Built with [Wasp](https://wasp-lang.dev), based on the [Open Saas](https://opensaas.sh) template.

This is being shared to help you have a working product that is fully built and functional to start building your own SaaS with. Wasp is a great framework and Open Saas is a great template and they have a thriving community on [Discord](https://discord.gg/xSybmwAT) and [Github](https://github.com/wasp-lang).

Here is what is built in the SaaS:
- Wasp v0.16.0
- React
- Node.js
- TailwindCSS
- Prisma
- PostgreSQL
- Lemonsqueezy
- AWS S3
- Plausible
- NameCheap
- Railway
- Private Email Service (SMTP via NameCheap)
- Auth via Email/Password, Google, Github, Discord

## 🎯 Who is this for??
- Entrepreneurs launching a SaaS startup 🚀
- Developers who want a production-ready SaaS template 🏗️
- Indie Hackers looking for a quick MVP solution 💡

## Overview
Cloud Context is a modern web application that helps developers understand and manage their codebase. The template is the core code for the SaaS portion of Cloud Context. 

## Features
- 🔐 Authentication & Authorization
- 💳 Stripe Integration
- 📊 Dashboard Interface
- 👥 Team Management
- 🌐 Multi-tenant Architecture

## Technology Stack
- **Framework**: [Wasp](https://wasp-lang.dev)
- **Frontend**: React + TypeScript
- **Backend**: Node.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Email/Password + Social Auth
- **Payment Processing**: Lemonsqueezy
- **Storage**: AWS S3
- **Analytics**: Plausible
- **Email**: Private Email Service (NameCheap)
- **Hosting**: Railway
- **Domain**: NameCheap

## Development

### Prerequisites
- Node.js (v18+)
- [Wasp CLI](https://wasp-lang.dev/docs/quick-start)
- PostgreSQL
- Docker (Desktop Preferred)

### Accounts
- Lemonsqueezy Account (for payment features)
- AWS Account (for storage features)
- Plausible Account (for analytics features)
- NameCheap Account (for domain features)
- Railway Account (for hosting features)
- Private Email Service Account (for email features)
- Github Account (for social auth features)
- Discord Account (for social auth features)
- Google Account (for social auth features)

### Environment Setup
1. Clone the repository
2. Copy `.env.example` to create both `.env.client` and `.env.server`
3. Fill in the environment variables with your values

### Running locally
[Open Saas Getting Started](https://docs.opensaas.sh/start/getting-started/)
First Time Setup:
1. Install Wasp CLI
- Linux/Mac:
   ```bash
    curl -sSL https://get.wasp-lang.dev/installer.sh | sh
    ```
- Windows: follow [Open Saas Getting Started](https://docs.opensaas.sh/start/getting-started/)

2. Make sure you have the `.env.client` and `.env.server` files with correct dev values in the root of the project
3. Start the database:
   ```bash
   wasp start db
   ```
4. Start the development server:
   ```bash
   wasp start
   ```
5. [OPTIONAL] If this is the first time starting the app, or you've made changes to your entities/prisma schema:
   ```bash
   wasp db migrate-dev
   ```

### Project Structure
```
/
├── main.wasp                 # Main Wasp configuration file
├── src/
│   ├── client/              # Frontend React components and logic
│   │   ├── app/             # Core application components
│   │   ├── auth/            # Authentication related components
│   │   ├── components/      # Reusable UI components
│   │   ├── dashboard/       # Dashboard views and components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── icons/          # SVG icons and icon components
│   │   ├── layout/         # Layout components and templates
│   │   └── utils/          # Frontend utility functions
│   │
│   ├── server/             # Backend business logic and API routes
│   │   ├── actions/        # Server actions (API endpoints)
│   │   ├── queries/        # Data fetching logic
│   │   ├── auth/           # Authentication logic
│   │   ├── webhooks/       # Webhook handlers
│   │   └── utils/          # Server utility functions
│   │
│   ├── shared/             # Shared types and utilities
│   ├── admin/              # Admin dashboard features
│   │   ├── dashboards/     # Various admin dashboards
│   │   ├── elements/       # UI elements and components
│   │   └── layout/         # Admin-specific layouts
│   │
│   ├── analytics/          # Analytics related code
│   ├── payment/            # Payment processing logic
│   └── email/              # Email templates and sending logic
│
├── public/                 # Static assets
│   ├── fonts/             # Font files
│   └── images/            # Image assets
│
└── migrations/            # Database migrations
```

This structure organizes the application into logical modules:
- **Client**: All frontend React code, organized by feature
- **Server**: Backend logic, including API endpoints and data processing
- **Shared**: Code shared between client and server
- **Admin**: Administrative interface components and logic
- **Analytics**: User activity tracking and reporting
- **Payment**: Subscription and payment processing
- **Email**: Communication templates and delivery

## Contributing
Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 💖 Support This Project
If you find this project useful, consider supporting my work:
- ⭐ [Sponsor Me on GitHub](https://github.com/sponsors/mathewlewallen)
- ☕ [Buy Me a Coffee](https://buymeacoffee.com/mathewlewallen)

## License

This project is licensed under the MIT License.

It is based on [OpenSaaS.sh](https://github.com/wasp-lang/OpenSaaS) by Wasp, which is also licensed under the MIT License. All modifications and additions are © 2025 cloudcontext.


