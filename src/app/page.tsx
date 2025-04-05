"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ClientJobForm } from "@/components/forms/ClientJobForm";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState("");
  
  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for submitting your job request!');
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <header className="flex justify-between items-center py-4 px-4 md:px-0">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="TradeConnect Logo" 
              width={200} 
              height={60} 
              className="h-auto"
              priority
            />
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/how-it-works" className="hidden md:inline-block text-gray-800 hover:text-green-600 transition-colors">
              How It Works
            </Link>
            <Link href="/about" className="hidden md:inline-block text-gray-800 hover:text-green-600 transition-colors">
              About Us
            </Link>
            <Link href="/trade-register" className="btn-outline">
              Are you a professional?
            </Link>
            <Link href="/login" className="hidden md:inline-block text-green-600 hover:text-green-800 transition-colors">
              Login
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Find the best professional for in and around your house
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get in touch and compare quotes from the best professionals in your area.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-1 flex flex-col md:flex-row">
                <select 
                  className="flex-grow p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 mb-2 md:mb-0 md:mr-2"
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                >
                  <option value="">Choose your project</option>
                  <option value="plumbing">Plumbing</option>
                  <option value="electrical">Electrical</option>
                  <option value="carpentry">Carpentry</option>
                  <option value="painting">Painting</option>
                  <option value="roofing">Roofing</option>
                  <option value="landscaping">Landscaping</option>
                </select>
                <button className="btn-primary flex items-center justify-center">
                  Start your project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-3 flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Try for free, with no obligations
              </p>
            </div>
            <div className="hidden md:block">
              <Image
                src="/home.png"
                alt="Home illustration"
                width={500}
                height={400}
                className="h-auto"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white">
          <h2 className="section-title text-center">How does it work?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="numbered-step mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Describe your project</h3>
              <p className="text-gray-600">Tell us what you're looking for. What are your wishes?</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="numbered-step mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Compare professionals</h3>
              <p className="text-gray-600">Get in touch and compare quotes from the best professionals.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="numbered-step mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Choose your professional</h3>
              <p className="text-gray-600">Pick the professional that best suits your project.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="numbered-step mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Enjoy the result</h3>
              <p className="text-gray-600">Share it with others, and leave a review.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="card">
              <h2 className="section-title">Why TradeConnect?</h2>
              
              <div className="benefit-item">
                <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Save time</h3>
                  <p className="text-gray-600">Create a request within minutes</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Multiple quotes</h3>
                  <p className="text-gray-600">From trusted local companies</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Easy comparison</h3>
                  <p className="text-gray-600">Check out profiles and reviews to help you make a decision</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-300 rounded-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Need a Trade Professional?</h2>
              <p className="mb-6">Fill out this form to get matched with qualified trades in your area.</p>
              
              {/* ClientJobForm component is now properly imported and used */}
              <ClientJobForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </section>

        {/* Professional Section */}
        <section className="professional-section my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Are You a Trade Professional?</h2>
              <p className="text-lg mb-6">We'll easily get you in touch with customers that are actively looking for your services.</p>
              
              <ul className="mb-6 space-y-4">
                <li className="benefit-item">
                  <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Get matched with relevant jobs</span>
                </li>
                <li className="benefit-item">
                  <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Build your online reputation</span>
                </li>
                <li className="benefit-item">
                  <svg className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Manage your schedule efficiently</span>
                </li>
              </ul>
              
              <Link href="/trade-register" className="btn-secondary inline-block">
                Register
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src="/logo.png"
                alt="Professional tradesperson"
                width={400}
                height={300}
                className="h-auto"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Your project</h3>
              <ul className="space-y-2">
                <li><Link href="/start-project" className="text-gray-600 hover:text-green-600 transition-colors">Start your project</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-green-600 transition-colors">Frequently Asked Questions</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">For Professional</h3>
              <ul className="space-y-2">
                <li><Link href="/trade-register" className="text-gray-600 hover:text-green-600 transition-colors">Register</Link></li>
                <li><Link href="/login" className="text-gray-600 hover:text-green-600 transition-colors">Log in</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">About TradeConnect</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">About us</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} TradeConnect. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/disclaimer" className="text-gray-500 hover:text-green-600 transition-colors">Disclaimer</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-green-600 transition-colors">Privacy</Link>
              <Link href="/cookies" className="text-gray-500 hover:text-green-600 transition-colors">Cookies</Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
