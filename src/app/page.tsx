export default function Home() {
  const styles = {
    main: {
      fontFamily: "'Inter', Arial, sans-serif",
      margin: 0,
      padding: 0,
      color: '#171717',
      lineHeight: 1.5,
    },
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
      borderBottom: '1px solid #e5e7eb',
    },
    logo: {
      height: '40px',
    },
    nav: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
    },
    navLink: {
      color: '#374151',
      textDecoration: 'none',
      fontWeight: 500,
    },
    btnProfessional: {
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      textDecoration: 'none',
      fontWeight: 500,
    },
    hero: {
      padding: '4rem 0',
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1rem',
      color: '#111827',
    },
    heroDescription: {
      fontSize: '1.125rem',
      color: '#4b5563',
      marginBottom: '2rem',
    },
    projectForm: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      flexWrap: 'wrap',
    },
    projectSelect: {
      padding: '0.75rem 1rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.25rem',
      fontSize: '1rem',
      flexGrow: 1,
      maxWidth: '300px',
    },
    btnStart: {
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '0.25rem',
      fontSize: '1rem',
      fontWeight: 500,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    freeMessage: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#4b5563',
    },
    howItWorks: {
      padding: '4rem 0',
      backgroundColor: '#f3f4f6',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '2rem',
      textAlign: 'center',
      color: '#111827',
    },
    steps: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
    },
    step: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    stepNumber: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '3rem',
      height: '3rem',
      backgroundColor: '#16a34a',
      color: 'white',
      borderRadius: '9999px',
      fontWeight: 700,
      fontSize: '1.25rem',
      marginBottom: '1rem',
    },
    stepTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: '#111827',
    },
    stepDescription: {
      color: '#4b5563',
    },
    benefits: {
      padding: '4rem 0',
    },
    benefitsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    benefitCard: {
      backgroundColor: 'white',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      padding: '1.5rem',
    },
    benefitTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: '#111827',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    benefitDescription: {
      color: '#4b5563',
    },
    professionalSection: {
      padding: '4rem 0',
      backgroundColor: '#eff6ff',
    },
    professionalContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '2rem',
      alignItems: 'center',
    },
    professionalText: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    benefitsList: {
      marginBottom: '1.5rem',
    },
    benefitItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
      marginBottom: '0.75rem',
    },
    btnRegister: {
      backgroundColor: '#16a34a',
      color: 'white',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '0.25rem',
      fontSize: '1rem',
      fontWeight: 500,
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      width: 'fit-content',
    },
    footer: {
      padding: '4rem 0',
      backgroundColor: '#111827',
      color: 'white',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
    },
    footerColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    footerTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: 'white',
    },
    footerLinks: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    footerLink: {
      color: '#9ca3af',
      textDecoration: 'none',
    },
    footerBottom: {
      marginTop: '2rem',
      paddingTop: '2rem',
      borderTop: '1px solid #374151',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    footerCopyright: {
      color: '#9ca3af',
    },
    footerSocial: {
      display: 'flex',
      gap: '1rem',
    },
    socialIcon: {
      color: '#9ca3af',
    },
    // Media queries handled with conditional rendering
    mobileOnly: {
      display: 'none',
    },
  };

  // Simple responsive handling
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div style={styles.main}>
      {/* Header */}
      <header style={{...styles.header, ...styles.container}}>
        <div style={{fontWeight: 'bold', fontSize: '1.5rem'}}>TradeConnect</div>
        <nav style={styles.nav}>
          <a href="#how-it-works" style={styles.navLink}>How It Works</a>
          <a href="#about" style={styles.navLink}>About Us</a>
          <a href="/professional" style={styles.btnProfessional}>Are you a professional?</a>
          <a href="/login" style={styles.navLink}>Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{...styles.hero, ...styles.container}}>
        <h1 style={styles.heroTitle}>Find the best professional for in and around your house</h1>
        <p style={styles.heroDescription}>Get in touch and compare quotes from the best professionals in your area.</p>
        
        <div style={styles.projectForm}>
          <select style={styles.projectSelect}>
            <option>Choose your project</option>
            <option>Plumbing</option>
            <option>Electrical</option>
            <option>Carpentry</option>
            <option>Painting</option>
            <option>Roofing</option>
            <option>Landscaping</option>
          </select>
          <button style={styles.btnStart}>
            Start your project
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
        
        <div style={styles.freeMessage}>
          <svg style={{color: '#16a34a'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          <span>Try for free, with no obligations</span>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" style={styles.howItWorks}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>How does it work?</h2>
          <div style={styles.steps}>
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <h3 style={styles.stepTitle}>Describe your project</h3>
              <p style={styles.stepDescription}>Tell us what you're looking for. What are your wishes?</p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <h3 style={styles.stepTitle}>Compare professionals</h3>
              <p style={styles.stepDescription}>Get in touch and compare quotes from the best professionals.</p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <h3 style={styles.stepTitle}>Choose your professional</h3>
              <p style={styles.stepDescription}>Pick the professional that best suits your project.</p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNumber}>4</div>
              <h3 style={styles.stepTitle}>Enjoy the result</h3>
              <p style={styles.stepDescription}>Share it with others, and leave a review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{...styles.benefits, ...styles.container}}>
        <h2 style={styles.sectionTitle}>Why TradeConnect?</h2>
        <div style={styles.benefitsGrid}>
          <div style={styles.benefitCard}>
            <h3 style={styles.benefitTitle}>
              <svg style={{color: '#16a34a'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              Verified Professionals
            </h3>
            <p style={styles.benefitDescription}>All professionals are verified and reviewed by our team and other customers.</p>
          </div>
          <div style={styles.benefitCard}>
            <h3 style={styles.benefitTitle}>
              <svg style={{color: '#16a34a'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              Save Time
            </h3>
            <p style={styles.benefitDescription}>Quickly find the right professional without spending hours searching.</p>
          </div>
          <div style={styles.benefitCard}>
            <h3 style={styles.benefitTitle}>
              <svg style={{color: '#16a34a'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M12 16v.01"/>
                <path d="M8 12h8"/>
                <path d="M8 8h8"/>
              </svg>
              Compare Quotes
            </h3>
            <p style={styles.benefitDescription}>Receive and compare multiple quotes to find the best value for your project.</p>
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section style={styles.professionalSection}>
        <div style={styles.container}>
          <div style={{...styles.professionalContent, gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr'}}>
            <div>
              <svg width="100%" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="#eff6ff"/>
                <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 9h1M9 13h6M9 17h6" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={styles.professionalText}>
              <h2 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: '#111827'}}>Are you a trade professional?</h2>
              <p style={{color: '#4b5563', marginBottom: '1.5rem'}}>Join our network of trusted professionals and connect with customers looking for your services.</p>
              <div style={styles.benefitsList}>
                <div style={styles.benefitItem}>
                  <svg style={{color: '#16a34a', flexShrink: 0, marginTop: '0.25rem'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Receive job leads directly to your inbox</span>
                </div>
                <div style={styles.benefitItem}>
                  <svg style={{color: '#16a34a', flexShrink: 0, marginTop: '0.25rem'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Build your online reputation with customer reviews</span>
                </div>
                <div style={styles.benefitItem}>
                  <svg style={{color: '#16a34a', flexShrink: 0, marginTop: '0.25rem'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span>Grow your business with our marketing tools</span>
                </div>
              </div>
              <a href="/register" style={styles.btnRegister}>Register as a Professional</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>TradeConnect</h3>
              <ul style={styles.footerLinks}>
                <li><a href="/about" style={styles.footerLink}>About Us</a></li>
                <li><a href="/how-it-works" style={styles.footerLink}>How It Works</a></li>
                <li><a href="/careers" style={styles.footerLink}>Careers</a></li>
                <li><a href="/press" style={styles.footerLink}>Press</a></li>
              </ul>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>For Homeowners</h3>
              <ul style={styles.footerLinks}>
                <li><a href="/post-job" style={styles.footerLink}>Post a Job</a></li>
                <li><a href="/find-professionals" style={styles.footerLink}>Find Professionals</a></li>
                <li><a href="/pricing" style={styles.footerLink}>Pricing</a></li>
                <li><a href="/homeowner-resources" style={styles.footerLink}>Resources</a></li>
              </ul>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>For Professionals</h3>
              <ul style={styles.footerLinks}>
                <li><a href="/join" style={styles.footerLink}>Join as a Pro</a></li>
                <li><a href="/pro-resources" style={styles.footerLink}>Pro Resources</a></li>
                <li><a href="/success-stories" style={styles.footerLink}>Success Stories</a></li>
                <li><a href="/pro-app" style={styles.footerLink}>Pro App</a></li>
              </ul>
            </div>
            <div style={styles.footerColumn}>
              <h3 style={styles.footerTitle}>Support</h3>
              <ul style={styles.footerLinks}>
                <li><a href="/help" style={styles.footerLink}>Help Center</a></li>
                <li><a href="/contact" style={styles.footerLink}>Contact Us</a></li>
                <li><a href="/privacy" style={styles.footerLink}>Privacy Policy</a></li>
                <li><a href="/terms" style={styles.footerLink}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div style={styles.footerBottom}>
            <div style={styles.footerCopyright}>
              © {new Date() .getFullYear()} TradeConnect. All rights reserved.
            </div>
            <div style={styles.footerSocial}>
              <a href="https://facebook.com" style={styles.socialIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com" style={styles.socialIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" style={styles.socialIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  ) ;
}

