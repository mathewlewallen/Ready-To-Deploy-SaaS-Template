# Payment Directory

This directory contains the payment processing and subscription management functionality for the application.

## Directory Structure

- `plans.ts` - Subscription plans configuration
- `webhook.ts` - Payment webhook handlers
- `operations.ts` - Payment operations and queries
- `paymentProcessor.ts` - Payment processing utilities
- `lemonSqueezy/` - LemonSqueezy integration
- `CheckoutPage.tsx` - Checkout page component
- `PricingPage.tsx` - Pricing page component

## Features

- Subscription management
- Payment processing
- Plan management
- Webhook handling
- Checkout flow
- Invoice generation

## Usage

### Payment Components

```typescript
import { CheckoutPage } from './CheckoutPage'
import { PricingPage } from './PricingPage'

// Use payment components
<PricingPage plans={subscriptionPlans} />
<CheckoutPage planId={selectedPlan.id} />
```

### Payment Operations

```typescript
import { createSubscription, cancelSubscription } from './operations'

// Create a subscription
const subscription = await createSubscription({
  planId: plan.id,
  userId: user.id
})

// Cancel a subscription
await cancelSubscription(subscriptionId)
```

## Development Guidelines

1. Implement secure payment processing
2. Handle webhooks properly
3. Validate all transactions
4. Maintain audit logs
5. Handle errors gracefully
6. Test payment flows

## Subscription Plans

Defined in `plans.ts`:
```typescript
export const subscriptionPlans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 9.99,
    features: ['Feature 1', 'Feature 2']
  },
  // ... other plans
]
```

## Payment Processing

- Credit card processing
- Subscription handling
- Payment validation
- Error handling
- Refund processing
- Invoice generation

## Webhook Handling

- Payment success
- Payment failure
- Subscription updates
- Refund events
- Dispute handling
- Account updates

## Security

- PCI compliance
- Data encryption
- Access control
- Audit logging
- Error handling
- Fraud prevention

## Environment Variables

Required environment variables:
```
LEMON_SQUEEZY_API_KEY=your_api_key
LEMON_SQUEEZY_WEBHOOK_SECRET=your_webhook_secret
LEMON_SQUEEZY_STORE_ID=your_store_id
```

## Error Handling

- Payment failures
- Validation errors
- Network errors
- Webhook errors
- Processing errors
- Timeout handling

## Testing

- Payment flows
- Webhook handling
- Error scenarios
- Subscription lifecycle
- Refund process
- Integration tests

## Subscription Features

- Plan management
- Usage tracking
- Billing cycles
- Payment history
- Invoice access
- Account status

## UI Components

- Pricing tables
- Checkout forms
- Payment methods
- Subscription status
- Invoice viewer
- Account settings

For more detailed documentation about payment features or subscription management, please refer to the individual file documentation. 