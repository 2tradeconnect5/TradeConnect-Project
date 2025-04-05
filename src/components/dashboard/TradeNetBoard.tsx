import { useState } from 'react';
import { TradeType, Job, Match, Trade } from '@/types';

interface TradeNetBoardProps {
  posts: Array<{
    id: string;
    author: string;
    content: string;
    date: string;
    likes: number;
    comments: number;
    tradeType?: TradeType;
  }>;
  onCreatePost?: (content: string, tradeType?: TradeType) => Promise<void>;
  onLikePost?: (postId: string) => Promise<void>;
  onCommentPost?: (postId: string, comment: string) => Promise<void>;
}

export default function TradeNetBoard({
  posts = [],
  onCreatePost,
  onLikePost,
  onCommentPost
}: TradeNetBoardProps) {
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedTradeType, setSelectedTradeType] = useState<TradeType | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState<string | null>(null);
  const [commentContent, setCommentContent] = useState('');

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;
    
    setIsSubmitting(true);
    try {
      if (onCreatePost) {
        await onCreatePost(
          newPostContent, 
          selectedTradeType as TradeType || undefined
        );
      }
      setNewPostContent('');
      setSelectedTradeType('');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLikePost = async (postId: string) => {
    try {
      if (onLikePost) {
        await onLikePost(postId);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const handleCommentSubmit = async (postId: string) => {
    if (!commentContent.trim()) return;
    
    try {
      if (onCommentPost) {
        await onCommentPost(postId, commentContent);
      }
      setCommentContent('');
      setShowCommentForm(null);
    } catch (error) {
      console.error('Error commenting on post:', error);
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
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy-blue mb-2">TradeNet Community Board</h2>
        <p className="text-gray-600">
          Connect with other trades, share advice, and discuss industry topics.
        </p>
      </div>

      {/* Create Post Form */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="text-lg font-semibold mb-3">Create a Post</h3>
        <div className="space-y-4">
          <textarea
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="Share your thoughts, ask for advice, or post a job opportunity..."
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
            rows={4}
            disabled={isSubmitting}
          ></textarea>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <select
              value={selectedTradeType}
              onChange={(e) => setSelectedTradeType(e.target.value as TradeType | '')}
              className="p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
              disabled={isSubmitting}
            >
              <option value="">All Trades</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="carpenter">Carpenter</option>
              <option value="painter">Painter</option>
              <option value="roofer">Roofer</option>
              <option value="landscaper">Landscaper</option>
              <option value="other">Other</option>
            </select>
            
            <button
              onClick={handleCreatePost}
              disabled={!newPostContent.trim() || isSubmitting}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Posting...' : 'Post to TradeNet'}
            </button>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {posts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600">No posts yet. Be the first to share something with the community!</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold">{post.author}</h4>
                  <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
                </div>
                {post.tradeType && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    {post.tradeType.charAt(0).toUpperCase() + post.tradeType.slice(1)}
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 mb-4">{post.content}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <button 
                  onClick={() => handleLikePost(post.id)}
                  className="flex items-center hover:text-emerald-600"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                  {post.likes} {post.likes === 1 ? 'Like' : 'Likes'}
                </button>
                
                <button 
                  onClick={() => setShowCommentForm(showCommentForm === post.id ? null : post.id)}
                  className="flex items-center hover:text-emerald-600"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {post.comments} {post.comments === 1 ? 'Comment' : 'Comments'}
                </button>
              </div>
              
              {showCommentForm === post.id && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <textarea
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    rows={2}
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => handleCommentSubmit(post.id)}
                      disabled={!commentContent.trim()}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-md text-sm font-medium transition duration-200 disabled:opacity-50"
                    >
                      Post Comment
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
