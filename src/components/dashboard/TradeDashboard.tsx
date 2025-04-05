import { useState } from 'react';
import { Job, Trade } from '@/types';

interface TradeDashboardProps {
  trade?: Trade;
  pendingJobs?: Job[];
  acceptedJobs?: Job[];
  completedJobs?: Job[];
  onAcceptLead: (matchId: string) => Promise<void>;
  onDeclineLead: (matchId: string) => Promise<void>;
}

export default function TradeDashboard({ 
  trade, 
  pendingJobs = [], 
  acceptedJobs = [], 
  completedJobs = [],
  onAcceptLead,
  onDeclineLead
}: TradeDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  // Mock data for demonstration
  const tradeData = trade || {
    id: '1',
    user_id: '1',
    company_name: 'Doe Plumbing Services',
    company_address: '123 Main St, Dublin',
    vat_registered: true,
    bio: 'Professional plumbing services with 15+ years experience',
    services_offered: ['plumber'],
    verified: true,
    response_rate: 95,
    rating: 4.8,
    lead_counter: 42,
    trade_of_week_wins: 2,
    ranking_score: 87
  };

  const handleAcceptLead = async (matchId: string) => {
    setIsProcessing(matchId);
    try {
      await onAcceptLead(matchId);
    } catch (error) {
      console.error('Error accepting lead:', error);
    } finally {
      setIsProcessing(null);
    }
  };

  const handleDeclineLead = async (matchId: string) => {
    setIsProcessing(matchId);
    try {
      await onDeclineLead(matchId);
    } catch (error) {
      console.error('Error declining lead:', error);
    } finally {
      setIsProcessing(null);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Trade Dashboard</h2>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">{tradeData.company_name}</h3>
            <p className="text-gray-600">{tradeData.bio}</p>
          </div>
          <div className="mt-4 md:mt-0 bg-gray-50 p-3 rounded-lg">
            <p className="text-sm">Trial ends in <span className="font-bold">30</span> days</p>
          </div>
        </div>
      </div>

      {/* Dashboard Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === 'overview'
                ? 'border-b-2 border-emerald-500 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === 'jobs'
                ? 'border-b-2 border-emerald-500 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Jobs
          </button>
          <button
            onClick={() => setActiveTab('billing')}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === 'billing'
                ? 'border-b-2 border-emerald-500 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Billing
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === 'profile'
                ? 'border-b-2 border-emerald-500 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Profile
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-lg font-semibold mb-2">Pending Jobs</h4>
                <p className="text-3xl font-bold text-navy-blue">{pendingJobs.length}</p>
                <p className="text-sm text-gray-500">Awaiting your response</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-lg font-semibold mb-2">Accepted Jobs</h4>
                <p className="text-3xl font-bold text-navy-blue">{acceptedJobs.length}</p>
                <p className="text-sm text-gray-500">In progress</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-lg font-semibold mb-2">Completed Jobs</h4>
                <p className="text-3xl font-bold text-navy-blue">{completedJobs.length}</p>
                <p className="text-sm text-gray-500">This month</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            
            {pendingJobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-gray-600">No pending jobs at the moment. Check back soon!</p>
              </div>
            ) : (
              pendingJobs.slice(0, 3).map((job, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <h4 className="text-lg font-semibold mb-2">{job.trade_type} - {job.job_description.substring(0, 50)}...</h4>
                  <p className="mb-2">{job.location} • {new Date(job.created_at).toLocaleDateString()}</p>
                  <div className="mt-4 flex space-x-3">
                    <button
                      onClick={() => handleAcceptLead(`match-${index}`)}
                      disabled={isProcessing === `match-${index}`}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200 disabled:opacity-50"
                    >
                      {isProcessing === `match-${index}` ? 'Processing...' : 'Accept (€3)'}
                    </button>
                    <button
                      onClick={() => handleDeclineLead(`match-${index}`)}
                      disabled={isProcessing === `match-${index}`}
                      className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium transition duration-200 disabled:opacity-50"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'jobs' && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Pending Jobs</h3>
            {pendingJobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center mb-8">
                <p className="text-gray-600">No pending jobs at the moment.</p>
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {pendingJobs.map((job, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold mb-2">{job.trade_type} - {job.job_description.substring(0, 50)}...</h4>
                    <p className="mb-2">{job.location} • {new Date(job.created_at).toLocaleDateString()}</p>
                    <div className="mt-4 flex space-x-3">
                      <button
                        onClick={() => handleAcceptLead(`match-${index}`)}
                        disabled={isProcessing === `match-${index}`}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200 disabled:opacity-50"
                      >
                        {isProcessing === `match-${index}` ? 'Processing...' : 'Accept (€3)'}
                      </button>
                      <button
                        onClick={() => handleDeclineLead(`match-${index}`)}
                        disabled={isProcessing === `match-${index}`}
                        className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium transition duration-200 disabled:opacity-50"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <h3 className="text-xl font-semibold mb-4">Accepted Jobs</h3>
            {acceptedJobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center mb-8">
                <p className="text-gray-600">No accepted jobs at the moment.</p>
              </div>
            ) : (
              <div className="space-y-4 mb-8">
                {acceptedJobs.map((job, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{job.trade_type} - {job.job_description.substring(0, 50)}...</h4>
                        <p className="mb-2">{job.location} • {new Date(job.created_at).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500">Contact via: {job.contact_method}</p>
                      </div>
                      <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">In Progress</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <h3 className="text-xl font-semibold mb-4">Completed Jobs</h3>
            {completedJobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-gray-600">No completed jobs yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {completedJobs.map((job, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{job.trade_type} - {job.job_description.substring(0, 50)}...</h4>
                        <p className="mb-2">{job.location} • {new Date(job.created_at).toLocaleDateString()}</p>
                      </div>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Completed</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'billing' && (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Subscription Details</h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Current Plan:</span> Standard Trade Membership
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Status:</span> <span className="text-emerald-600">Trial (30 days remaining)</span>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Next Billing Date:</span> {new Date(Date.now() + 30*24*60*60*1000).toLocaleDateString()}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-2xl font-bold">€59<span className="text-sm font-normal text-gray-500">/month</span></p>
                  <p className="text-sm text-gray-500">+ €3 per accepted lead</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Payment History</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">
                      No payment history yet. Your first payment will be processed after your trial period.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Company Name:</span> {tradeData.company_name}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Address:</span> {tradeData.company_address}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">VAT Registered:</span> {tradeData.vat_registered ? 'Yes' : 'No'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Verification Status:</span>{' '}
                    {tradeData.verified ? (
                      <span className="text-emerald-600">Verified</span>
                    ) : (
                      <span className="text-amber-600">Pending</span>
                    )}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Response Rate:</span> {tradeData.response_rate}%
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Rating:</span> {tradeData.rating}/5
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200">
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Notification Preferences</h4>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="email-notifications"
                      defaultChecked
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-700">
                      Email Notifications
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="whatsapp-notifications"
                      defaultChecked
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="whatsapp-notifications" className="ml-2 block text-sm text-gray-700">
                      WhatsApp Notifications
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="browser-notifications"
                      defaultChecked
                      className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <label htmlFor="browser-notifications" className="ml-2 block text-sm text-gray-700">
                      Browser Notifications
                    </label>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Password</h4>
                  <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium transition duration-200">
                    Change Password
                  </button>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Account</h4>
                  <button className="bg-white hover:bg-gray-50 text-red-600 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium transition duration-200">
                    Deactivate Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
