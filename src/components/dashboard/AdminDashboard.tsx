import { useState } from 'react';
import { Trade, Client, Job, Payment } from '@/types';

interface AdminDashboardProps {
  trades?: Trade[];
  clients?: Client[];
  jobs?: Job[];
  payments?: Payment[];
  stats?: {
    totalTrades: number;
    totalClients: number;
    totalJobs: number;
    totalRevenue: number;
    activeSubscriptions: number;
    trialUsers: number;
  };
}

export default function AdminDashboard({
  trades = [],
  clients = [],
  jobs = [],
  payments = [],
  stats = {
    totalTrades: 0,
    totalClients: 0,
    totalJobs: 0,
    totalRevenue: 0,
    activeSubscriptions: 0,
    trialUsers: 0
  }
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTradeType, setSelectedTradeType] = useState('all');
  const [dateRange, setDateRange] = useState('30');

  // Mock data for demonstration
  const mockStats = {
    totalTrades: trades.length || 25,
    totalClients: clients.length || 48,
    totalJobs: jobs.length || 72,
    totalRevenue: payments.reduce((sum, payment) => sum + payment.amount, 0) || 2850,
    activeSubscriptions: 18,
    trialUsers: 7
  };

  const displayStats = stats.totalTrades === 0 ? mockStats : stats;

  // Chart data (mock)
  const revenueData = [
    { month: 'Jan', amount: 1200 },
    { month: 'Feb', amount: 1800 },
    { month: 'Mar', amount: 2400 },
    { month: 'Apr', amount: 2850 },
  ];

  const jobsByTradeType = [
    { type: 'Plumber', count: 24 },
    { type: 'Electrician', count: 18 },
    { type: 'Carpenter', count: 12 },
    { type: 'Painter', count: 8 },
    { type: 'Other', count: 10 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-navy-blue mb-2">Admin Dashboard</h2>
        <p className="text-gray-600">
          Monitor platform performance, manage users, and analyze trends.
        </p>
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
            onClick={() => setActiveTab('trades')}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === 'trades'
                ? 'border-b-2 border-emerald-500 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Trades
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === 'clients'
                ? 'border-b-2 border-emerald-500 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Clients
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
            onClick={() => setActiveTab('revenue')}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === 'revenue'
                ? 'border-b-2 border-emerald-500 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Revenue
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === 'settings'
                ? 'border-b-2 border-emerald-500 text-emerald-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Settings
          </button>
        </nav>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <select
            value={selectedTradeType}
            onChange={(e) => setSelectedTradeType(e.target.value)}
            className="p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="all">All Trade Types</option>
            <option value="plumber">Plumber</option>
            <option value="electrician">Electrician</option>
            <option value="carpenter">Carpenter</option>
            <option value="painter">Painter</option>
            <option value="other">Other</option>
          </select>
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="365">Last year</option>
            <option value="all">All time</option>
          </select>
        </div>
        <div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200">
            Export Report
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-lg font-semibold mb-2">Total Trades</h4>
                <p className="text-3xl font-bold text-navy-blue">{displayStats.totalTrades}</p>
                <p className="text-sm text-gray-500">
                  <span className="text-emerald-600">+12%</span> from last month
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-lg font-semibold mb-2">Total Clients</h4>
                <p className="text-3xl font-bold text-navy-blue">{displayStats.totalClients}</p>
                <p className="text-sm text-gray-500">
                  <span className="text-emerald-600">+18%</span> from last month
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <h4 className="text-lg font-semibold mb-2">Total Jobs</h4>
                <p className="text-3xl font-bold text-navy-blue">{displayStats.totalJobs}</p>
                <p className="text-sm text-gray-500">
                  <span className="text-emerald-600">+24%</span> from last month
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold mb-4">Revenue Overview</h4>
                <p className="text-3xl font-bold text-navy-blue">€{displayStats.totalRevenue}</p>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="text-emerald-600">+15%</span> from last month
                </p>
                <div className="h-40 w-full bg-gray-50 rounded flex items-end justify-between p-2">
                  {revenueData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-12 bg-emerald-500 rounded-t"
                        style={{ height: `${(item.amount / 3000) * 100}px` }}
                      ></div>
                      <span className="text-xs mt-1">{item.month}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-lg font-semibold mb-4">Jobs by Trade Type</h4>
                <div className="space-y-4">
                  {jobsByTradeType.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{item.type}</span>
                        <span>{item.count} jobs</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-yellow-400 h-2.5 rounded-full" 
                          style={{ width: `${(item.count / jobsByTradeType.reduce((sum, i) => sum + i.count, 0)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-4">Platform Health</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-500 mb-2">Active Subscriptions</h5>
                  <p className="text-2xl font-bold text-navy-blue">{displayStats.activeSubscriptions}</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-500 mb-2">Trial Users</h5>
                  <p className="text-2xl font-bold text-navy-blue">{displayStats.trialUsers}</p>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-500 mb-2">Conversion Rate</h5>
                  <p className="text-2xl font-bold text-navy-blue">72%</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'trades' && (
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Registered Trades</h3>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-md text-sm font-medium transition duration-200">
                  Add New Trade
                </button>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leads</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {trades.length > 0 ? (
                    trades.map((trade, index) => (
                      <tr key={trade.id || index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{trade.company_name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{trade.services_offered.join(', ')}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {trade.verified ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Verified
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Pending
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trade.lead_counter}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trade.rating || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-emerald-600 hover:text-emerald-900 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        No trades found. Add a new trade to get started.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">{displayStats.totalTrades}</span> trades
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Previous</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'clients' && (
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Registered Clients</h3>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-md text-sm font-medium transition duration-200">
                  Export Client Data
                </button>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jobs Posted</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit Balance</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reputation Score</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.length > 0 ? (
                    clients.map((client, index) => (
                      <tr key={client.id || index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">Client #{client.id.substring(0, 8)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {client.jobs_posted_count}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {client.credit_balance} credits
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2 max-w-[100px]">
                              <div 
                                className={`h-2.5 rounded-full ${
                                  client.reputation_score > 70 ? 'bg-green-500' : 
                                  client.reputation_score > 40 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                style={{ width: `${client.reputation_score}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-500">{client.reputation_score}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-emerald-600 hover:text-emerald-900 mr-3">View</button>
                          <button className="text-red-600 hover:text-red-900">Block</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                        No clients found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">{displayStats.totalClients}</span> clients
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Previous</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">Job Listings</h3>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trade Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                      <tr key={job.id || index}>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">{job.job_description.substring(0, 30)}...</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {job.trade_type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {job.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            job.status === 'completed' ? 'bg-green-100 text-green-800' :
                            job.status === 'matched' ? 'bg-blue-100 text-blue-800' :
                            job.status === 'accepted' ? 'bg-emerald-100 text-emerald-800' :
                            job.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(job.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-emerald-600 hover:text-emerald-900 mr-3">View</button>
                          <button className="text-red-600 hover:text-red-900">Remove</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        No jobs found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">{displayStats.totalJobs}</span> jobs
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Previous</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'revenue' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Revenue Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Subscriptions</span>
                      <span>€1,770</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '62%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Lead Fees</span>
                      <span>€864</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Client Credits</span>
                      <span>€216</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '8%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="font-medium">Total Revenue</span>
                    <span className="font-bold">€{displayStats.totalRevenue}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Monthly Trends</h3>
                <div className="h-60 w-full bg-gray-50 rounded flex items-end justify-between p-2">
                  {revenueData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-16 bg-emerald-500 rounded-t"
                        style={{ height: `${(item.amount / 3000) * 150}px` }}
                      ></div>
                      <span className="text-xs mt-1">{item.month}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    Revenue is growing at an average rate of <span className="font-medium text-emerald-600">18%</span> month-over-month.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Payment History</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.length > 0 ? (
                    payments.map((payment, index) => (
                      <tr key={payment.id || index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(payment.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          User #{payment.user_id.substring(0, 8)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {payment.type.charAt(0).toUpperCase() + payment.type.slice(1)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          €{payment.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            payment.status === 'succeeded' ? 'bg-green-100 text-green-800' :
                            payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                        No payment history found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Platform Settings</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Pricing</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="subscription-fee" className="block text-sm text-gray-700 mb-1">
                        Monthly Subscription Fee (€)
                      </label>
                      <input
                        type="number"
                        id="subscription-fee"
                        defaultValue={59}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="lead-fee" className="block text-sm text-gray-700 mb-1">
                        Lead Fee (€)
                      </label>
                      <input
                        type="number"
                        id="lead-fee"
                        defaultValue={3}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="credit-pack-price" className="block text-sm text-gray-700 mb-1">
                        Credit Pack Price (€)
                      </label>
                      <input
                        type="number"
                        id="credit-pack-price"
                        defaultValue={5}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="credit-pack-amount" className="block text-sm text-gray-700 mb-1">
                        Credits Per Pack
                      </label>
                      <input
                        type="number"
                        id="credit-pack-amount"
                        defaultValue={3}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Free Lead Logic</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="quality-control-percentage" className="block text-sm text-gray-700 mb-1">
                        Quality Control Percentage
                      </label>
                      <input
                        type="number"
                        id="quality-control-percentage"
                        defaultValue={10}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Percentage of leads that will be marked as free for quality control
                      </p>
                    </div>
                    <div>
                      <label htmlFor="bonus-threshold" className="block text-sm text-gray-700 mb-1">
                        Bonus Lead Threshold
                      </label>
                      <input
                        type="number"
                        id="bonus-threshold"
                        defaultValue={10}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Number of paid leads before a bonus free lead is awarded
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Trade of the Week</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="totw-bonus-leads" className="block text-sm text-gray-700 mb-1">
                        Bonus Free Leads
                      </label>
                      <input
                        type="number"
                        id="totw-bonus-leads"
                        defaultValue={3}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="totw-featured-days" className="block text-sm text-gray-700 mb-1">
                        Featured Days
                      </label>
                      <input
                        type="number"
                        id="totw-featured-days"
                        defaultValue={7}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Admin Users</h3>
              <div className="mb-4">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded-md text-sm font-medium transition duration-200">
                  Add Admin User
                </button>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Admin User
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      admin@tradeconnect.com
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Super Admin
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date().toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-emerald-600 hover:text-emerald-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Remove</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
