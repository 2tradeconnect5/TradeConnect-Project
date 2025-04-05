import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TradeType } from '@/types';

// Define the valid trade types as a constant array
const TRADE_TYPES = [
  'plumber',
  'electrician',
  'carpenter',
  'painter',
  'roofer',
  'landscaper',
  'hvac',
  'general'
] as const;

// Form validation schema without using z.enum for tradeTypes
const tradeRegistrationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  companyAddress: z.string().min(5, 'Company address is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Valid phone number is required'),
  whatsappNumber: z.string().min(10, 'Valid WhatsApp number is required'),
  website: z.string().url('Invalid URL').optional().or(z.literal('')),
  facebookPage: z.string().optional(),
  instagramHandle: z.string().optional(),
  vatRegistered: z.boolean(),
  croNumber: z.string().optional(),
  photoId: z.any().optional(),
  tradeTypes: z.array(z.string()).min(1, 'Select at least one trade type'),
  termsAccepted: z.boolean()
});

// Add the refinement separately to avoid type issues
const validatedSchema = tradeRegistrationSchema.refine(
  (data) => data.termsAccepted === true,
  {
    message: 'You must accept the terms and conditions',
    path: ['termsAccepted'],
  }
);

type TradeRegistrationFormData = z.infer<typeof tradeRegistrationSchema>;

interface TradeRegistrationFormProps {
  onSubmit: (data: TradeRegistrationFormData) => void;
  isSubmitting?: boolean;
}

export default function TradeRegistrationForm({ onSubmit, isSubmitting = false }: TradeRegistrationFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedTradeTypes, setSelectedTradeTypes] = useState<string[]>([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TradeRegistrationFormData>({
    resolver: zodResolver(validatedSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      companyAddress: '',
      email: '',
      phoneNumber: '',
      whatsappNumber: '',
      website: '',
      facebookPage: '',
      instagramHandle: '',
      vatRegistered: false,
      croNumber: '',
      tradeTypes: [],
      termsAccepted: false
    }
  });

  const handleFormSubmit = (data: TradeRegistrationFormData) => {
    onSubmit(data);
    setFormSubmitted(true);
    reset();
    setSelectedTradeTypes([]);
  };

  const handleTradeTypeToggle = (tradeType: string) => {
    setSelectedTradeTypes(prev => {
      const newSelection = prev.includes(tradeType)
        ? prev.filter(t => t !== tradeType)
        : [...prev, tradeType];
      
      setValue('tradeTypes', newSelection);
      return newSelection;
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Register as a Trade</h2>
      <p className="mb-6">Join TradeConnect to receive quality job leads directly matched to your skills and location. Start with a 30-day free trial and only pay for leads you accept.</p>
      
      {formSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
          <h3 className="font-bold">Thank you for registering!</h3>
          <p>Your application has been submitted and is pending verification. We'll be in touch soon.</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            className={`w-full p-3 border rounded-md ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            className={`w-full p-3 border rounded-md ${errors.companyName ? 'border-red-500' : 'border-gray-300'}`}
            {...register('companyName')}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">
            Company Address *
          </label>
          <textarea
            id="companyAddress"
            rows={3}
            className={`w-full p-3 border rounded-md ${errors.companyAddress ? 'border-red-500' : 'border-gray-300'}`}
            {...register('companyAddress')}
          ></textarea>
          {errors.companyAddress && (
            <p className="text-red-500 text-sm">{errors.companyAddress.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className={`w-full p-3 border rounded-md ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700">
            WhatsApp Number *
          </label>
          <input
            type="tel"
            id="whatsappNumber"
            className={`w-full p-3 border rounded-md ${errors.whatsappNumber ? 'border-red-500' : 'border-gray-300'}`}
            {...register('whatsappNumber')}
          />
          {errors.whatsappNumber && (
            <p className="text-red-500 text-sm">{errors.whatsappNumber.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="website" className="block text-sm font-medium text-gray-700">
            Website
          </label>
          <input
            type="url"
            id="website"
            placeholder="https://..."
            className={`w-full p-3 border rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
            {...register('website')}
          />
          {errors.website && (
            <p className="text-red-500 text-sm">{errors.website.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="facebookPage" className="block text-sm font-medium text-gray-700">
            Facebook Page
          </label>
          <input
            type="text"
            id="facebookPage"
            className="w-full p-3 border border-gray-300 rounded-md"
            {...register('facebookPage')}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="instagramHandle" className="block text-sm font-medium text-gray-700">
            Instagram Handle
          </label>
          <input
            type="text"
            id="instagramHandle"
            placeholder="@username"
            className="w-full p-3 border border-gray-300 rounded-md"
            {...register('instagramHandle')}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="vatRegistered"
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              {...register('vatRegistered')}
            />
            <label htmlFor="vatRegistered" className="ml-2 block text-sm text-gray-700">
              VAT Registered
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="croNumber" className="block text-sm font-medium text-gray-700">
            CRO Number (optional)
          </label>
          <input
            type="text"
            id="croNumber"
            className="w-full p-3 border border-gray-300 rounded-md"
            {...register('croNumber')}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Trade Types *
          </label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {TRADE_TYPES.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  id={`trade-${type}`}
                  checked={selectedTradeTypes.includes(type)}
                  onChange={() => handleTradeTypeToggle(type)}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor={`trade-${type}`} className="ml-2 block text-sm text-gray-700 capitalize">
                  {type.toLowerCase()}
                </label>
              </div>
            ))}
          </div>
          {errors.tradeTypes && (
            <p className="text-red-500 text-sm">{errors.tradeTypes.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="photoId" className="block text-sm font-medium text-gray-700">
            Photo ID *
          </label>
          <input
            type="file"
            id="photoId"
            accept="image/*,.pdf"
            className={`w-full p-3 border rounded-md ${errors.photoId ? 'border-red-500' : 'border-gray-300'}`}
            {...register('photoId')}
          />
          <p className="text-sm text-gray-500">Upload a photo ID for verification purposes (not visible to clients)</p>
          {errors.photoId && (
            <p className="text-red-500 text-sm">{errors.photoId.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAccepted"
              className={`h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded ${errors.termsAccepted ? 'border-red-500' : ''}`}
              {...register('termsAccepted')}
            />
            <label htmlFor="termsAccepted" className="ml-2 block text-sm text-gray-700">
              I agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          {errors.termsAccepted && (
            <p className="text-red-500 text-sm">{errors.termsAccepted.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Registering...' : 'Register as a Trade'}
        </button>
      </form>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-bold text-lg mb-2">After registration, you'll receive:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>A 30-day free trial with full access to all leads</li>
          <li>After the trial, billing activates at €59/month + €3 per accepted lead</li>
        </ul>
      </div>
    </div>
  );
}
