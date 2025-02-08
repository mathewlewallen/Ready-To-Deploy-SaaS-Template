import { requireNodeEnvVar } from '../server/utils';

export type SubscriptionStatus = 'past_due' | 'cancelled' | 'active' | 'expired';

export enum PaymentPlanId {
  Basic = 'basic',
  Premium = 'premium',
  Enterprise = 'enterprise',
  Beta = 'beta',
}

export interface PaymentPlan {
  // Returns the id under which this payment plan is identified on your payment processor. 
  // E.g. this might be price id on Stripe, or variant id on LemonSqueezy.
  getPaymentProcessorPlanId: () => string;
  effect: PaymentPlanEffect;
}

export type PaymentPlanEffect = { kind: 'subscription' };

export const paymentPlans: Record<PaymentPlanId, PaymentPlan> = {
  [PaymentPlanId.Enterprise]: {
    getPaymentProcessorPlanId: () => requireNodeEnvVar('PAYMENTS_ENTERPRISE_PLAN_ID'),
    effect: { kind: 'subscription' },
  },
  [PaymentPlanId.Premium]: {
    getPaymentProcessorPlanId: () => requireNodeEnvVar('PAYMENTS_PREMIUM_PLAN_ID'),
    effect: { kind: 'subscription' },
  },
  [PaymentPlanId.Basic]: {
    getPaymentProcessorPlanId: () => requireNodeEnvVar('PAYMENTS_BASIC_PLAN_ID'),
    effect: { kind: 'subscription' },
  },
  [PaymentPlanId.Beta]: {
    getPaymentProcessorPlanId: () => requireNodeEnvVar('PAYMENTS_BETA_PLAN_ID'),
    effect: { kind: 'subscription' },
  },
};

export function prettyPaymentPlanName(planId: PaymentPlanId): string {
  const planToName: Record<PaymentPlanId, string> = {
    [PaymentPlanId.Enterprise]: 'Enterprise',
    [PaymentPlanId.Premium]: 'Premium',
    [PaymentPlanId.Basic]: 'Basic',
    [PaymentPlanId.Beta]: 'Beta',
  };
  return planToName[planId];
}

export function parsePaymentPlanId(planId: string): PaymentPlanId {
  if ((Object.values(PaymentPlanId) as string[]).includes(planId)) {
    return planId as PaymentPlanId;
  } else {
    throw new Error(`Invalid PaymentPlanId: ${planId}`);
  }
}

export function getSubscriptionPaymentPlanIds(): PaymentPlanId[] {
  return Object.values(PaymentPlanId).filter((planId) => paymentPlans[planId].effect.kind === 'subscription');
}
