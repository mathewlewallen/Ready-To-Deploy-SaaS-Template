# Analytics Directory

This directory contains the analytics tracking and reporting functionality for the application.

## Directory Structure

- `providers/` - Analytics provider implementations
- `operations.ts` - Analytics-related operations and queries
- `stats.ts` - Statistics calculation and processing logic

## Features

- User activity tracking
- Usage statistics
- Performance metrics
- Custom event tracking
- Analytics dashboard data

## Usage

### Tracking Events

```typescript
import { trackEvent } from './operations'

// Track a custom event
await trackEvent({
  name: 'feature_used',
  properties: {
    featureId: 'example',
    userId: user.id
  }
})
```

### Querying Statistics

```typescript
import { getDailyStats } from 'wasp/client/operations'

// Get daily statistics
const { data: stats } = useQuery(getDailyStats)
```

## Analytics Provider

The application uses Plausible Analytics for tracking. Key features:

- Privacy-focused analytics
- GDPR compliant
- No cookie banner required
- Lightweight script
- Real-time data

## Development Guidelines

1. Use the provided tracking functions from `operations.ts`
2. Document all custom events
3. Handle tracking errors gracefully
4. Respect user privacy settings
5. Follow data retention policies
6. Test tracking functionality

## Event Types

Common events to track:

- Page views
- Feature usage
- Error occurrences
- User actions
- Performance metrics
- Business metrics

## Data Processing

- Raw data processing in `stats.ts`
- Aggregation functions
- Data transformation utilities
- Caching mechanisms

## Security & Privacy

- No PII (Personally Identifiable Information) in events
- Data anonymization where required
- Proper error handling
- Rate limiting
- Access control for analytics data

## Environment Variables

Required environment variables:

```
PLAUSIBLE_API_KEY=your_api_key
PLAUSIBLE_DOMAIN=your_domain
```

For more detailed documentation about specific analytics features or implementing custom tracking, refer to the individual file documentation. 