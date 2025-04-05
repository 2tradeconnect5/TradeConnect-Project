import { useState } from 'react';
import Image from 'next/image';

interface SocialFeedProps {
  platform: 'facebook' | 'twitter' | 'instagram';
  username: string;
  maxPosts?: number;
  showHeader?: boolean;
}

export default function SocialFeed({
  platform,
  username,
  maxPosts = 3,
  showHeader = true
}: SocialFeedProps) {
  const [posts, setPosts] = useState<Array<{
    id: string;
    content: string;
    date: string;
    likes: number;
    comments: number;
    shares: number;
    image: string | null;
  }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Similar to useEffect in the original component
  // This is a simplified version for demonstration
  useState(() => {
    const fetchSocialPosts = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Generate mock posts based on platform
        const mockPosts = Array.from({ length: maxPosts }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - i);
          
          return {
            id: `post-${platform}-${i}`,
            content: `This is a sample ${platform} post #${i + 1} from TradeConnect. Check out our latest updates and features!`,
            date: date.toISOString(),
            likes: Math.floor(Math.random() * 100),
            comments: Math.floor(Math.random() * 20),
            shares: Math.floor(Math.random() * 10),
            image: i % 2 === 0 ? `https://picsum.photos/seed/${platform}${i}/300/200` : null
          };
        });
        
        setPosts(mockPosts);
      } catch (err) {
        console.error(`Error fetching ${platform} posts:`, err);
        setError(`Failed to load ${platform} feed. Please try again later.`);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchSocialPosts();
  });

  const getPlatformIcon = () => {
    switch (platform) {
      case 'facebook':
        return <div className="w-5 h-5 text-[#1877F2]">FB</div>;
      case 'twitter':
        return <div className="w-5 h-5 text-[#1DA1F2]">TW</div>;
      case 'instagram':
        return <div className="w-5 h-5 text-[#E4405F]">IG</div>;
      default:
        return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IE', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      {showHeader && (
        <div className="p-4 border-b border-gray-200 flex items-center">
          {getPlatformIcon()}
          <h3 className="ml-2 text-lg font-semibold capitalize">{platform} Feed</h3>
        </div>
      )}
      
      <div className="p-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 p-4">{error}</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-500 p-4">No posts found</div>
        ) : (
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="border border-gray-200 rounded-md p-3">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    {getPlatformIcon()}
                    <span className="ml-2 text-sm font-medium">@{username}</span>
                  </div>
                  <span className="text-xs text-gray-500">{formatDate(post.date)}</span>
                </div>
                
                <p className="text-sm text-gray-700 mb-3">{post.content}</p>
                
                {post.image && (
                  <div className="mb-3 rounded-md overflow-hidden relative h-40 w-full">
                    <Image 
                      src={post.image} 
                      alt="Post attachment" 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                )}
                
                <div className="flex text-xs text-gray-500 space-x-4">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                  {platform !== 'instagram' && <span>{post.shares} shares</span>}
                </div>
              </div>
            ))}
            
            <div className="text-center mt-4">
              <a 
                href={`https://${platform}.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
              >
                View more on {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
