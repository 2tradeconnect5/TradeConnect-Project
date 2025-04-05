import { useState } from 'react';
import Image from 'next/image';

interface AdComponentProps {
  position: 'sidebar' | 'banner' | 'inline';
  tradeType?: string;
  location?: string;
  size?: 'small' | 'medium' | 'large';
  onAdClick?: (adId: string) => void;
}

export default function AdComponent({
  position = 'sidebar',
  tradeType,
  location,
  size = 'medium',
  onAdClick
}: AdComponentProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Mock ad data - in a real implementation, this would come from an ad server
  // based on the context (trade type, location, etc.)
  const mockAds = [
    {
      id: 'ad-1',
      title: 'Premium Tools for Professionals',
      description: 'Get 15% off your first order with code TRADECONNECT',
      imageUrl: 'https://via.placeholder.com/300x200?text=Premium+Tools',
      targetUrl: 'https://example.com/tools',
      sponsor: 'ToolMaster Pro'
    },
    {
      id: 'ad-2',
      title: 'Trade Insurance You Can Trust',
      description: 'Specialized coverage for trades at competitive rates',
      imageUrl: 'https://via.placeholder.com/300x200?text=Trade+Insurance',
      targetUrl: 'https://example.com/insurance',
      sponsor: 'SecureTrade Insurance'
    },
    {
      id: 'ad-3',
      title: 'Trade Vehicles - Special Offers',
      description: 'Exclusive deals for TradeConnect members',
      imageUrl: 'https://via.placeholder.com/300x200?text=Trade+Vehicles',
      targetUrl: 'https://example.com/vehicles',
      sponsor: 'CommercialVans.ie'
    }
  ];
  
  // Select an ad based on context
  // In a real implementation, this would use more sophisticated targeting
  const getContextualAd = () => {
    if (tradeType === 'plumber') {
      return mockAds[0]; // Tools ad for plumbers
    } else if (tradeType === 'electrician') {
      return mockAds[1]; // Insurance ad for electricians
    } else {
      // Default or random ad for other cases
      return mockAds[Math.floor(Math.random() * mockAds.length)];
    }
  };
  
  const selectedAd = getContextualAd();
  
  const handleAdClick = () => {
    // Track the click
    console.log(`Ad clicked: ${selectedAd.id}, position: ${position}`);
    
    // Call the callback if provided
    if (onAdClick) {
      onAdClick(selectedAd.id);
    }
    
    // In a real implementation, you might also:
    // - Send analytics data to your ad tracking system
    // - Open the target URL in a new tab
    // - Show a modal with more information
  };
  
  // Determine size classes based on position and size prop
  const getSizeClasses = () => {
    switch (position) {
      case 'banner':
        return 'w-full h-24 md:h-32';
      case 'sidebar':
        return size === 'small' ? 'w-full max-w-xs h-48' : 'w-full max-w-xs h-64';
      case 'inline':
        return size === 'small' ? 'w-full h-16' : 'w-full h-24';
      default:
        return 'w-full max-w-xs h-64';
    }
  };
  
  return (
    <div 
      className={`relative overflow-hidden rounded-lg shadow-md bg-white ${getSizeClasses()}`}
      onClick={handleAdClick}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
      )}
      
      <div className="relative w-full h-full">
        {/* Use Next.js Image component for better performance */}
        <Image
          src={selectedAd.imageUrl}
          alt={selectedAd.title}
          fill
          style={{ objectFit: 'cover' }}
          onLoad={() => setIsLoaded(true)}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
          <h3 className="text-white font-semibold text-sm md:text-base">{selectedAd.title}</h3>
          {(position === 'sidebar' || position === 'banner') && (
            <p className="text-white/90 text-xs mt-1">{selectedAd.description}</p>
          )}
          <div className="flex justify-between items-center mt-2">
            <span className="text-white/80 text-xs">Sponsored by {selectedAd.sponsor}</span>
            <span className="bg-yellow-400 text-navy-blue text-xs px-2 py-0.5 rounded-full">Ad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
