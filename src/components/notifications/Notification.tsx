import { useState, useEffect } from 'react';
import { NotificationType } from '@/types';

interface NotificationProps {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  onMarkAsRead: (id: string) => void;
  onDismiss: (id: string) => void;
}

export default function Notification({
  id,
  type,
  title,
  message,
  timestamp,
  read,
  onMarkAsRead,
  onDismiss
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isRead, setIsRead] = useState(read);

  useEffect(() => {
    setIsRead(read);
  }, [read]);

  const handleMarkAsRead = () => {
    setIsRead(true);
    onMarkAsRead(id);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss(id);
  };

  // Determine background color based on notification type
  const getBgColor = () => {
    switch (type) {
      case NotificationType.NEW_LEAD:
        return 'bg-emerald-50 border-emerald-200';
      case NotificationType.LEAD_ACCEPTED:
        return 'bg-blue-50 border-blue-200';
      case NotificationType.LEAD_DECLINED:
        return 'bg-gray-50 border-gray-200';
      case NotificationType.PAYMENT_CONFIRMATION:
        return 'bg-green-50 border-green-200';
      case NotificationType.SUBSCRIPTION_RENEWAL:
        return 'bg-purple-50 border-purple-200';
      case NotificationType.REVIEW_REQUEST:
        return 'bg-amber-50 border-amber-200';
      case NotificationType.TRADE_OF_WEEK:
        return 'bg-yellow-50 border-yellow-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  // Determine icon based on notification type
  const getIcon = () => {
    switch (type) {
      case NotificationType.NEW_LEAD:
        return (
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case NotificationType.LEAD_ACCEPTED:
        return (
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case NotificationType.PAYMENT_CONFIRMATION:
        return (
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case NotificationType.TRADE_OF_WEEK:
        return (
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };

  if (!isVisible) return null;

  return (
    <div className={`border rounded-lg p-4 mb-4 ${getBgColor()} ${isRead ? 'opacity-75' : ''}`}>
      <div className="flex items-start">
        {getIcon()}
        <div className="ml-3 flex-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <div className="flex space-x-2">
              {!isRead && (
                <button
                  onClick={handleMarkAsRead}
                  className="text-xs text-gray-500 hover:text-gray-700"
                >
                  Mark as read
                </button>
              )}
              <button
                onClick={handleDismiss}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Dismiss
              </button>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-600">{message}</p>
          <p className="mt-1 text-xs text-gray-500">{timestamp}</p>
        </div>
      </div>
    </div>
  );
}
