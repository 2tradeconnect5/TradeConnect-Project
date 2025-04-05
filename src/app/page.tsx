import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="header container">
        <Image 
          src="/logo.png" 
          alt="TradeConnect Logo" 
          width={180} 
          height={40} 
          className="logo"
        />
        <nav className="nav">
          <Link href="/#how-it-works" className="nav-link">How It Works</Link>
          <Link href="/#about" className="nav-link">About Us</Link>
          <Link href="/professional" className="btn-professional">Are you a professional?</Link>
          <Link href="/login" className="nav-link">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero container">
        <h1 className="hero-title">Find the best professional for in and around your house</h1>
        <p className="hero-description">Get in touch and compare quotes from the best professionals in your area.</p>
        
        <div className="project-form">
          <select className="project-select">
            <option>Choose your project</option>
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Carpentry</option>
            <option>Painting</option>
            <option>Roofing</option>
            <option>Landscaping</option>
          </select>
          <button className="btn-start">
            Start your project
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        
        <div className="free-message">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          <span>Try for free, with no obligations</span>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How does it work?</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Describe your project</h3>
              <p className="step-description">Tell us what you're looking for. What are your wishes?</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Compare professionals</h3>
              <p className="step-description">Get in touch and compare quotes from the best professionals.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Choose your professional</h3>
              <p className="step-description">Pick the professional that best suits your project.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3 className="step-title">Enjoy the result</h3>
              <p className="step-description">Share it with others, and leave a review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits container">
        <h2 className="section-title">Why TradeConnect?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3 className="benefit-title">
              <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Verified Professionals
            </h3>
            <p className="benefit-description">All professionals are verified and reviewed by our team and other customers.</p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">
              <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Save Time
            </h3>
            <p className="benefit-description">Quickly find the right professional without spending hours searching.</p>
          </div>
          <div className="benefit-card">
            <h3 className="benefit-title">
              <svg className="benefit-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M12 16v.01"/>
                <path d="M8 12h8"/>
                <path d="M8 8h8"/>
              </svg>
              Compare Quotes
            </h3>
            <p className="benefit-description">Receive and compare multiple quotes to find the best value for your project.</p>
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section className="professional-section">
        <div className="container">
          <div className="professional-content">
            <div>
              <Image 
                src="/file.svg" 
                alt="Professional tradesperson" 
                width={500} 
                height={400} 
                className="professional-image"
              />
            </div>
            <div className="professional-text">
              <h2>Are you a trade professional?</h2>
              <p>Join our network of trusted professionals and connect with customers looking for your services.</p>
              <div className="benefits-list">
                <div className="benefit-item">
                  <svg className="benefit-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Receive job leads directly to your inbox</span>
                </div>
                <div className="benefit-item">
                  <svg className="benefit-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Build your online reputation with customer reviews</span>
                </div>
                <div className="benefit-item">
                  <svg className="benefit-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Grow your business with our marketing tools</span>
                </div>
              </div>
              <Link href="/register" className="btn-register">Register as a Professional</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>TradeConnect</h3>
              <ul className="footer-links">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/press">Press</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>For Homeowners</h3>
              <ul className="footer-links">
                <li><Link href="/post-job">Post a Job</Link></li>
                <li><Link href="/find-professionals">Find Professionals</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/homeowner-resources">Resources</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>For Professionals</h3>
              <ul className="footer-links">
                <li><Link href="/join">Join as a Pro</Link></li>
                <li><Link href="/pro-resources">Pro Resources</Link></li>
                <li><Link href="/success-stories">Success Stories</Link></li>
                <li><Link href="/pro-app">Pro App</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Support</h3>
              <ul className="footer-links">
                <li><Link href="/help">Help Center</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              © {new Date().getFullYear()} TradeConnect. All rights reserved.
            </div>
            <div className="footer-social">
              <Link href="https://facebook.com" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

