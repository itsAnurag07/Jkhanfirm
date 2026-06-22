export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid rgba(142, 122, 99, 0.1)',
        padding: '80px 20px 40px 20px',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', padding: 0 }}>
        {/* Layout Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '40px',
            marginBottom: '4rem',
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand & Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src="/images/logo_black.png" 
                alt="JKhan Firm Logo" 
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                }}
              />
              <span 
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--text-dark)',
                  letterSpacing: '-0.02em',
                }}
              >
                JKhan Firm
              </span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '280px' }}>
              Designing and building timeless residential and commercial monuments across Punjab. Elegance, safety, and transparency.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--text-dark)' }}>
              Studio
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <a href="#who-we-are" onClick={(e) => { e.preventDefault(); scrollToSection('who-we-are'); }} className="footer-link">Who We Are</a>
              <a href="#featured-projects" onClick={(e) => { e.preventDefault(); scrollToSection('featured-projects'); }} className="footer-link">Estates</a>
              <a href="#our-process" onClick={(e) => { e.preventDefault(); scrollToSection('our-process'); }} className="footer-link">Our Process</a>
              <a href="#why-choose-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose-us'); }} className="footer-link">Why Choose Us</a>
            </div>
          </div>

          {/* Column 3: Contact Locations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--text-dark)' }}>
              Office
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-dark)' }}>Infinity Tower, 2nd Floor</p>
              <p style={{ margin: 0 }}>Opp. Geeta Mandir</p>
              <p style={{ margin: 0 }}>Model Town, Jalandhar</p>
              <p style={{ margin: 0, marginTop: '0.25rem' }}>
                <a href="tel:+916283154202" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>+91 62831 54202</a>
              </p>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--text-dark)' }}>
              Follow Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="footer-link">Pinterest</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-link">Facebook</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div 
          style={{
            borderTop: '1px solid rgba(142, 122, 99, 0.12)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
          }}
        >
          {/* Left side: copyright + Intelloft */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>© {new Date().getFullYear()} JKhan Firm. All rights reserved.</span>
            <span style={{ opacity: 0.4 }}>|</span>
            <span>
              Designed and Developed by{' '}
              <a
                href="https://www.intelloft.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--text-dark)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Intelloft
              </a>
            </span>
          </div>

          {/* Right side: legal links */}
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .footer-link {
          color: var(--text-muted);
          transition: var(--transition-smooth);
        }
        .footer-link:hover {
          color: var(--text-dark);
          transform: translateX(2px);
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
