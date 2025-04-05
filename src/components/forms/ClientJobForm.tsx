import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { TradeType, JobUrgency, ContactMethod } from '@/types';

// Define the ClientJobFormData interface explicitly
interface ClientJobFormData {
  tradeType: 'plumber' | 'electrician' | 'carpenter' | 'painter' | 'roofer' | 'landscaper' | 'hvac' | 'general' | 'mason' | 'tiler';
  jobDescription: string;
  jobUrgency: 'emergency' | 'urgent' | 'standard' | 'flexible';
  contactMethod: 'phone' | 'email' | 'whatsapp';
  location: string;
  budget?: string;
}

// Form validation schema
const clientJobSchema = z.object({
  tradeType: z.enum(['plumber', 'electrician', 'carpenter', 'painter', 'roofer', 'landscaper', 'hvac', 'general', 'mason', 'tiler'], {
    errorMap: () => ({ message: 'Please select a trade type' }),
  }),
  jobDescription: z.string().min(20, 'Job description must be at least 20 characters'),
  jobUrgency: z.enum(['emergency', 'urgent', 'standard', 'flexible'], {
    errorMap: () => ({ message: 'Please select job urgency' }),
  }),
  
  contactMethod: z.enum(['phone', 'email', 'whatsapp'], {
    errorMap: () => ({ message: 'Please select preferred contact method' }),
  }),
  
  location: z.string().min(3, 'Please enter a valid location'),
  budget: z.string().optional(),
});

// Use the explicit interface instead of inferring from schema
// type ClientJobFormData = z.infer<typeof clientJobSchema>;

interface ClientJobFormProps {
  onSubmit: (data: ClientJobFormData) => void;
  isSubmitting?: boolean;
}

export default function ClientJobForm({ onSubmit, isSubmitting = false }: ClientJobFormProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ClientJobFormData>({
    resolver: zodResolver(clientJobSchema),
  });

  const handleFormSubmit = (data: ClientJobFormData) => {
    onSubmit(data);
    setFormSubmitted(true);
    reset();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Post a Job</h2>
      <p className="mb-6">Fill out the form below with details about your project. We&apos;ll match you with the best local tradesmen for the job.</p>
      
      {formSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
          <h3 className="font-bold">Thank you for submitting your job!</h3>
          <p>We&apos;re matching you with the best trades in your area. You&apos;ll be notified soon.</p>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="tradeType" className="block text-sm font-medium text-gray-700">
            Trade Type
          </label>
          <select
            id="tradeType"
            className={`w-full p-3 border rounded-md ${errors.tradeType ? 'border-red-500' : 'border-gray-300'}`}
            {...register('tradeType')}
          >
            <option value="">Select trade type</option>
            <option value="plumber">Plumber</option>
            <option value="electrician">Electrician</option>
            <option value="carpenter">Carpenter</option>
            <option value="painter">Painter</option>
            <option value="roofer">Roofer</option>
            <option value="landscaper">Landscaper</option>
            <option value="hvac">HVAC</option>
            <option value="mason">Mason</option>
            <option value="tiler">Tiler</option>
            <option value="general">General Contractor</option>
          </select>
          {errors.tradeType && (
            <p className="text-red-500 text-sm">{errors.tradeType.message?.toString()}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            rows={4}
            className={`w-full p-3 border rounded-md ${errors.jobDescription ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Describe what you need done..."
            {...register('jobDescription')}
          ></textarea>
          {errors.jobDescription && (
            <p className="text-red-500 text-sm">{errors.jobDescription.message?.toString()}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="jobUrgency" className="block text-sm font-medium text-gray-700">
            Urgency
          </label>
          <select
            id="jobUrgency"
            className={`w-full p-3 border rounded-md ${errors.jobUrgency ? 'border-red-500' : 'border-gray-300'}`}
            {...register('jobUrgency')}
          >
            <option value="">Select urgency level</option>
            <option value="emergency">Emergency (24h)</option>
            <option value="urgent">Urgent (2-3 days)</option>
            <option value="standard">Standard (1 week)</option>
            <option value="flexible">Flexible (2+ weeks)</option>
          </select>
          {errors.jobUrgency && (
            <p className="text-red-500 text-sm">{errors.jobUrgency.message?.toString()}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700">
            Preferred Contact Method
          </label>
          <select
            id="contactMethod"
            className={`w-full p-3 border rounded-md ${errors.contactMethod ? 'border-red-500' : 'border-gray-300'}`}
            {...register('contactMethod')}
          >
            <option value="">Select contact method</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
          {errors.contactMethod && (
            <p className="text-red-500 text-sm">{errors.contactMethod.message?.toString()}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            className={`w-full p-3 border rounded-md ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your city or postal code"
            {...register('location')}
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message?.toString()}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
            Budget (Optional)
          </label>
          <input
            type="text"
            id="budget"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Your estimated budget"
            {...register('budget')}
          />
          <p className="text-sm text-gray-500">This will not be shown to tradesmen</p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Job'}
        </button>
      </form>
    </div>
  );
}
