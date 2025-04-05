import { loadStripe } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';

// Initialize Stripe with public key
// In production, this would be set in your environment
const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || 'pk_test_placeholder';

// Create a singleton Stripe instance
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripePublicKey);
  }
  return stripePromise;
};

// Helper functions for Stripe operations
export async function createPaymentIntent(amount: number, currency: string = 'eur', metadata: Record<string, string> = {}) {
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency,
        metadata
      }),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return { clientSecret: data.clientSecret, error: null };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return { clientSecret: null, error };
  }
}

export async function createSubscription(priceId: string, customerId?: string) {
  try {
    const response = await fetch('/api/create-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        priceId,
        customerId
      }),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return { subscription: data.subscription, error: null };
  } catch (error) {
    console.error('Error creating subscription:', error);
    return { subscription: null, error };
  }
}

export async function processLeadPayment(leadId: string, tradeId: string, amount: number = 3) {
  try {
    const response = await fetch('/api/process-lead-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        leadId,
        tradeId,
        amount
      }),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return { success: data.success, error: null };
  } catch (error) {
    console.error('Error processing lead payment:', error);
    return { success: false, error };
  }
}

export async function purchaseClientCredits(clientId: string, creditAmount: number = 3, amount: number = 5) {
  try {
    const response = await fetch('/api/purchase-credits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clientId,
        creditAmount,
        amount
      }),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return { success: data.success, credits: data.credits, error: null };
  } catch (error) {
    console.error('Error purchasing client credits:', error);
    return { success: false, credits: 0, error };
  }
}
