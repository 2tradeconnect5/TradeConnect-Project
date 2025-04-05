import { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import type { StripeElementsOptions } from '@stripe/stripe-js';
import { PaymentType } from '@/types';

// Mock Stripe promise for development
const stripePromise = loadStripe('pk_test_placeholder');

interface PaymentFormProps {
  amount: number;
  paymentType: PaymentType.SUBSCRIPTION | PaymentType.LEAD | PaymentType.CREDIT;
  onSuccess?: (paymentId: string) => void;
  onError?: (error: Error) => void;
}

export default function PaymentForm({
  amount,
  paymentType,
  onSuccess,
  onError
}: PaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  // Options for Stripe Elements
  const options: StripeElementsOptions = {
    mode: 'payment',
    amount: amount * 100, // Stripe uses cents
    currency: 'eur',
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#3CB371', // Emerald Green
      },
    },
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    setIsProcessing(true);
    setPaymentError(null);
    
    try {
      // In a real implementation, this would call the backend to create a payment intent
      // and then confirm the payment with Stripe.js
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful payment
      const mockPaymentId = `pi_${Math.random().toString(36).substring(2, 15)}`;
      
      setPaymentSuccess(true);
      if (onSuccess) {
        onSuccess(mockPaymentId);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentError('Payment failed. Please try again.');
      if (onError && error instanceof Error) {
        onError(error);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const getPaymentTypeLabel = () => {
    switch (paymentType) {
      case PaymentType.SUBSCRIPTION:
        return 'Monthly Subscription';
      case PaymentType.LEAD:
        return 'Lead Payment';
      case PaymentType.CREDIT:
        return 'Credit Purchase';
      default:
        return 'Payment';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">{getPaymentTypeLabel()}</h2>
        
        {paymentSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Payment Successful!</h3>
            <p className="text-gray-600">
              {paymentType === PaymentType.SUBSCRIPTION 
                ? 'Your subscription has been activated.' 
                : paymentType === PaymentType.LEAD 
                ? 'Lead payment has been processed.' 
                : 'Credits have been added to your account.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Amount:</span>
                <span className="text-xl font-bold">€{amount.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <Elements stripe={stripePromise} options={options}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="card-holder" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Holder Name
                      </label>
                      <input
                        type="text"
                        id="card-holder"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="John Doe"
                        disabled={isProcessing}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="card-number"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="4242 4242 4242 4242"
                        disabled={isProcessing}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="MM/YY"
                          disabled={isProcessing}
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="123"
                          disabled={isProcessing}
                        />
                      </div>
                    </div>
                  </div>
                </Elements>
              </div>
            </div>
            
            {paymentError && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                {paymentError}
              </div>
            )}
            
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md font-medium transition duration-200 disabled:opacity-50"
            >
              {isProcessing ? 'Processing...' : `Pay €${amount.toFixed(2)}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
