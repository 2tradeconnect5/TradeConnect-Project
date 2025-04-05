import Image from "next/image";
import Link from "next/link";

// Try one of these import statements (uncomment the one that matches your project structure):
// import { ClientJobForm } from "@/components/forms/ClientJobForm";
// import { ClientJobForm } from "../../components/forms/ClientJobForm";
// import { ClientJobForm } from "../components/forms/ClientJobForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 py-4">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="TradeConnect Logo" 
              width={240} 
              height={80} 
              className="h-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/how-it-works" className="text-navy-800 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/about" className="text-navy-800 hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="/login" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">Login</Link>
          </nav>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {/* Left Column - Client Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">Need a Trade Professional?</h2>
            <p className="mb-6">Fill out this form to get matched with qualified trades in your area.</p>
            
            {/* Temporarily comment out the ClientJobForm component until we fix the import */}
            {/* <ClientJobForm /> */}
            <div className="p-4 border border-gray-300 rounded-md">
              <p className="text-center text-gray-500">Client Job Form will appear here</p>
            </div>
          </div>

          {/* Right Column - Trade Sign Up */}
          <div className="flex flex-col justify-center">
            <div className="bg-navy-800 text-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Are You a Trade Professional?</h2>
              <p className="mb-6">Join TradeConnect to find new clients and grow your business.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get matched with relevant jobs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build your online reputation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Manage your schedule efficiently</span>
                </li>
              </ul>
              <Link href="/trade-register" className="block w-full py-3 bg-green-600 text-white text-center rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Sign Up as a Trade Professional
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 py-6 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} TradeConnect. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
