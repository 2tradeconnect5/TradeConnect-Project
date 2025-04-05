import { supabase } from '@/lib/supabase/client';

// WhatsApp Business API integration
interface WhatsAppMessage {
  to: string;
  template?: {
    name: string;
    language: {
      code: string;
    };
    components?: Array<{
      type: string;
      parameters: Array<{
        type: string;
        text?: string;
        currency?: {
          code: string;
          amount_1000: number;
        };
        date_time?: {
          fallback_value: string;
        };
      }>;
    }>;
  };
  text?: {
    body: string;
  };
}

// WhatsApp API service
export async function sendWhatsAppNotification(
  phoneNumber: string,
  message: string,
  templateName?: string
): Promise<boolean> {
  try {
    // Format phone number (ensure it has country code)
    const formattedNumber = formatPhoneNumber(phoneNumber);
    
    // Check if we're using a template or free-form message
    const messagePayload: WhatsAppMessage = {
      to: formattedNumber,
    };
    
    if (templateName) {
      // Using a template (required for first contact with users)
      messagePayload.template = {
        name: templateName,
        language: {
          code: 'en'
        },
        components: [
          {
            type: 'body',
            parameters: [
              {
                type: 'text',
                text: message
              }
            ]
          }
        ]
      };
    } else {
      // Using a free-form message (only for users who have opted in)
      messagePayload.text = {
        body: message
      };
    }
    
    // In a real implementation, this would call the WhatsApp Business API
    // For now, we'll simulate the API call and log the message
    console.log('Sending WhatsApp message:', messagePayload);
    
    // Store the notification in Supabase for tracking
    const { error } = await supabase.from('whatsapp_notifications').insert({
      phone_number: formattedNumber,
      message: message,
      template_name: templateName || null,
      status: 'sent',
      sent_at: new Date().toISOString()
    });
    
    if (error) {
      console.error('Error storing WhatsApp notification:', error);
      return false;
    }
    
    // Simulate API success
    return true;
  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
    return false;
  }
}

// Helper function to format phone numbers
function formatPhoneNumber(phoneNumber: string): string {
  // Remove any non-digit characters
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  
  // Ensure it has the country code (add +353 for Ireland if not present)
  if (!digitsOnly.startsWith('353') && !digitsOnly.startsWith('1')) {
    return `353${digitsOnly}`;
  }
  
  return digitsOnly;
}

// Template names for different notification types
export const WHATSAPP_TEMPLATES = {
  NEW_LEAD: 'new_lead_notification',
  LEAD_ACCEPTED: 'lead_accepted_notification',
  PAYMENT_CONFIRMATION: 'payment_confirmation',
  SUBSCRIPTION_RENEWAL: 'subscription_renewal',
  WELCOME: 'welcome_message',
  TRADE_OF_WEEK: 'trade_of_week_announcement'
};

// Function to send a new lead notification to a trade
export async function sendNewLeadNotification(
  tradePhoneNumber: string,
  jobType: string,
  location: string
): Promise<boolean> {
  const message = `New ${jobType} job available in ${location}. Log in to TradeConnect to view details and accept this lead.`;
  return sendWhatsAppNotification(tradePhoneNumber, message, WHATSAPP_TEMPLATES.NEW_LEAD);
}

// Function to send a lead accepted notification to a client
export async function sendLeadAcceptedNotification(
  clientPhoneNumber: string,
  tradeName: string,
  jobType: string
): Promise<boolean> {
  const message = `Good news! ${tradeName} has accepted your ${jobType} job. They will contact you shortly to discuss details.`;
  return sendWhatsAppNotification(clientPhoneNumber, message, WHATSAPP_TEMPLATES.LEAD_ACCEPTED);
}

// Function to send a welcome message to a new trade
export async function sendTradeWelcomeMessage(
  tradePhoneNumber: string,
  tradeName: string
): Promise<boolean> {
  const message = `Welcome to TradeConnect, ${tradeName}! Your 30-day free trial has begun. You'll receive notifications about new job leads matching your skills.`;
  return sendWhatsAppNotification(tradePhoneNumber, message, WHATSAPP_TEMPLATES.WELCOME);
}

// Function to send a Trade of the Week announcement
export async function sendTradeOfWeekAnnouncement(
  tradePhoneNumber: string,
  tradeName: string
): Promise<boolean> {
  const message = `Congratulations ${tradeName}! You've been selected as Trade of the Week. You'll receive 3 free leads and featured placement for the next 7 days.`;
  return sendWhatsAppNotification(tradePhoneNumber, message, WHATSAPP_TEMPLATES.TRADE_OF_WEEK);
}
