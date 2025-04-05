import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface SocialMediaIntegrationProps {
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  showShareButtons?: boolean;
  pageTitle?: string;
  pageUrl?: string;
}

export default function SocialMediaIntegration({
  facebookUrl = 'https://facebook.com/tradeconnect',
  twitterUrl = 'https://twitter.com/tradeconnect',
  instagramUrl = 'https://instagram.com/tradeconnect',
  linkedinUrl = 'https://linkedin.com/company/tradeconnect',
  showShareButtons = true,
  pageTitle = 'TradeConnect - Connect with trusted trades in your area',
  pageUrl = 'https://tradeconnect.com'
}: SocialMediaIntegrationProps) {
  const [currentUrl, setCurrentUrl] = useState(pageUrl);
  
  useEffect(() => {
    // Update current URL if we're in a browser environment
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(pageTitle);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
        break;
      default:
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="w-full">
      {/* Social Media Follow Links */}
      <div className="flex items-center space-x-4 mb-4">
        {facebookUrl && (
          <a 
            href={facebookUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-navy-blue hover:text-emerald-600 transition-colors"
            aria-label="Follow us on Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        )}
        
        {twitterUrl && (
          <a 
            href={twitterUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-navy-blue hover:text-emerald-600 transition-colors"
            aria-label="Follow us on Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        )}
        
        {instagramUrl && (
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-navy-blue hover:text-emerald-600 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        )}
        
        {linkedinUrl && (
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-navy-blue hover:text-emerald-600 transition-colors"
            aria-label="Follow us on LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        )}
      </div>
      
      {/* Share Buttons */}
      {showShareButtons && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Share this page:</p>
          <div className="flex space-x-3">
            <button
              onClick={() => handleShare('facebook')}
              className="bg-[#1877F2] text-white p-2 rounded-full hover:bg-opacity-90 transition-opacity"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => handleShare('twitter')}
              className="bg-[#1DA1F2] text-white p-2 rounded-full hover:bg-opacity-90 transition-opacity"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => handleShare('linkedin')}
              className="bg-[#0A66C2] text-white p-2 rounded-full hover:bg-opacity-90 transition-opacity"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
