import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '1280px',
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(251, 249, 244, 0.85)' : 'rgba(251, 249, 244, 0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(142, 122, 99, 0.12)',
        borderRadius: '50px',
        padding: '0.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: isScrolled ? '0 10px 30px rgba(36, 27, 21, 0.05)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Logo & Brand Wordmark */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
        }}
      >
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
            fontSize: '1.35rem',
            fontWeight: 600,
            color: 'var(--text-dark)',
            letterSpacing: '-0.02em',
          }}
        >
          JKhan Firm
        </span>
      </a>

      {/* Desktop Navigation */}
      <div
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '2.5rem',
        }}
        className="desktop-menu"
      >
        {['Who We Are', 'Featured Projects', 'Our Process', 'Why Choose Us'].map((item) => {
          const id = item.toLowerCase().replace(/\s+/g, '-');
          const isFeatured = item === 'Featured Projects';
          const linkStyle = {
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            fontWeight: 500,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.08em',
            color: 'var(--text-dark)',
            opacity: 0.8,
            textDecoration: 'none',
          };
          return isFeatured ? (
            <Link
              key={item}
              to="/featured-projects"
              style={linkStyle}
              className="nav-link"
            >
              {item}
            </Link>
          ) : (
            <a
              key={item}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              style={linkStyle}
              className="nav-link"
            >
              {item}
            </a>
          );
        })}
      </div>

      {/* CTA Button */}
      <div style={{ display: 'none', alignItems: 'center' }} className="desktop-menu">
        <button
          onClick={() => scrollToSection('contact-cta')}
          style={{
            backgroundColor: 'var(--accent-dark)',
            color: '#ffffff',
            padding: '0.65rem 1.5rem',
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            border: 'none',
            borderRadius: '50px',
            fontFamily: 'var(--font-sans)',
            cursor: 'pointer',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'var(--transition-smooth)',
          }}
          className="nav-btn"
        >
          Contact us
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Mobile Burger Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-dark)',
          cursor: 'pointer',
          padding: '4px',
          display: 'block',
        }}
        className="mobile-toggle"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '0',
            width: '100%',
            backgroundColor: 'rgba(251, 249, 244, 0.98)',
            border: '1px solid rgba(142, 122, 99, 0.1)',
            borderRadius: '24px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 20px 40px rgba(36, 27, 21, 0.1)',
          }}
        >
          {['Who We Are', 'Featured Projects', 'Our Process', 'Why Choose Us'].map((item) => {
            const id = item.toLowerCase().replace(/\s+/g, '-');
            const isFeatured = item === 'Featured Projects';
            const mobileStyle = {
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              fontWeight: 500,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              color: 'var(--text-dark)',
              display: 'block',
              textDecoration: 'none',
            };
            return isFeatured ? (
              <Link
                key={item}
                to="/featured-projects"
                onClick={() => setIsMobileMenuOpen(false)}
                style={mobileStyle}
              >
                {item}
              </Link>
            ) : (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
                style={mobileStyle}
              >
                {item}
              </a>
            );
          })}
          <button
            onClick={() => scrollToSection('contact-cta')}
            style={{
              backgroundColor: 'var(--accent-dark)',
              color: '#ffffff',
              padding: '0.8rem 1.5rem',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            Book Consultation
            <ArrowUpRight size={14} />
          </button>
        </div>
      )}

      {/* Embedded CSS rules for desktop and mobile menus */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          #navbar {
            padding: 0.5rem 1rem !important;
            width: calc(100% - 24px) !important;
            top: 12px !important;
          }
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--accent-color);
          transition: var(--transition-smooth);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          opacity: 1 !important;
        }
        .nav-btn:hover {
          background-color: var(--accent-color) !important;
          transform: scale(1.03);
        }
      `}</style>
    </nav>
  );
}
