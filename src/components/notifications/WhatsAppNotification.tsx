import { useState } from 'react';

interface WhatsAppNotificationProps {
  phoneNumber: string;
  message: string;
  onSend: (phoneNumber: string, message: string) => Promise<boolean>;
}

export default function WhatsAppNotification({
  phoneNumber,
  message,
  onSend
}: WhatsAppNotificationProps) {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notificationMessage, setNotificationMessage] = useState(message);

  const handleSend = async () => {
    if (!phoneNumber || !notificationMessage) {
      setError('Phone number and message are required');
      return;
    }

    setIsSending(true);
    setError(null);

    try {
      const success = await onSend(phoneNumber, notificationMessage);
      if (success) {
        setIsSent(true);
      } else {
        setError('Failed to send WhatsApp notification');
      }
    } catch (err) {
      setError('An error occurred while sending the notification');
      console.error('WhatsApp notification error:', err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-3">WhatsApp Notification</h3>
      
      {isSent ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-3 mb-4">
          <p className="text-sm">Notification sent successfully!</p>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-3 mb-4">
          <p className="text-sm">{error}</p>
        </div>
      ) : null}
      
      <div className="space-y-4">
        <div>
          <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="phone-number"
            value={phoneNumber}
            readOnly
            className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={notificationMessage}
            onChange={(e) => setNotificationMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            disabled={isSending || isSent}
          ></textarea>
        </div>
        
        <button
          onClick={handleSend}
          disabled={isSending || isSent}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200 disabled:opacity-50 w-full"
        >
          {isSending ? 'Sending...' : isSent ? 'Sent' : 'Send WhatsApp Notification'}
        </button>
      </div>
    </div>
  );
}
