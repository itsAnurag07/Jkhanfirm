import { ArrowUpRight } from 'lucide-react';
import heroVideo from '../assets/Videos/Junaid Hero d2.mp4';

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-cta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      style={{
        padding: '48px 20px 20px 20px',
        backgroundColor: 'var(--bg-primary)',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Outer rounded container wrapper */}
      <div 
        style={{
          flexGrow: 1,
          minHeight: '82vh',
          borderRadius: '40px',
          position: 'relative',
          padding: '4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '0 25px 50px -12px rgba(36, 27, 21, 0.15)',
          overflow: 'hidden',
          backgroundColor: '#15100c',
        }}
        className="hero-container"
      >
        {/* Background video layer */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(36, 27, 21, 0.25), rgba(36, 27, 21, 0.7))',
            zIndex: 1,
          }}
        />

        {/* Top Layout Row: Headline */}
        <div 
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 2,
            marginTop: '3.5rem',
          }}
          className="hero-top-row"
        >
          <div style={{ maxWidth: '650px' }} className="hero-left">
            <h1 
              style={{
                color: '#ffffff',
                fontSize: '3.6rem',
                fontFamily: 'var(--font-serif)',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                textShadow: '0 2px 10px rgba(0,0,0,0.15)',
              }}
              className="hero-title"
            >
              Bringing <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Simplicity</span> <br />
              In The Architecture & Construction Market
            </h1>
          </div>
        </div>

        {/* Bottom Layout Row: Floating Card */}
        <div 
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
          className="hero-bottom-row"
        >
          <div 
            style={{
              maxWidth: '380px',
              backgroundColor: 'rgba(36, 27, 21, 0.45)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: '2rem',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            }}
            className="hero-right-card"
          >
            {/* Full description — shown on desktop */}
            <p 
              style={{ 
                color: '#EFECE6', 
                fontSize: '0.88rem', 
                lineHeight: 1.45,
                fontWeight: 300,
              }}
              className="hero-desc-long"
            >
              JKhan Firm simplifies the complex process of designing, planning, and building high-end custom residences and commercial interior spaces across Punjab.
            </p>

            {/* Mobile-only card content */}
            <div className="hero-mobile-card-content" style={{ display: 'none', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{ 
                color: 'rgb(239, 236, 230)', 
                fontSize: '0.99rem', 
                lineHeight: 1.9,
                fontWeight: 500,
                margin: '1px',
              }}>
                JKhan Firm simplifies the complex process of designing, planning, and building high-end custom residences and commercial interior spaces across Punjab.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }} className="hero-card-buttons">
              <button
                onClick={scrollToContact}
                style={{
                  backgroundColor: '#ffffff',
                  color: 'var(--text-dark)',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'var(--transition-smooth)',
                }}
                className="hero-btn-primary"
              >
                Start Design Journey
                <ArrowUpRight size={14} />
              </button>
              <button
                onClick={scrollToProjects}
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.4)',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                }}
                className="hero-btn-secondary"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded responsive classes */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-container {
            padding: 3rem !important;
          }
          .hero-title {
            font-size: 3.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .hero-container {
            padding: 2rem 1.5rem 2.5rem 1.5rem !important;
            min-height: 88vh !important;
            justify-content: center !important;
            gap: 8rem !important;
          }
          .hero-top-row {
            margin-top: 0 !important;
          }
          .hero-title {
            font-size: 2rem !important;
            line-height: 1.25 !important;
          }
          .hero-bottom-row {
            margin-bottom: 1.5rem !important;
          }
          .hero-right-card {
            max-width: 100% !important;
            width: 100% !important;
            padding: 1.25rem !important;
            gap: 1rem !important;
            background-color: rgba(36, 27, 21, 0.22) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            backdrop-filter: blur(0px) !important;
            -webkit-backdrop-filter: blur(0px) !important;
          }
          .hero-desc-long {
            display: none !important;
          }
          .hero-mobile-card-content {
            display: flex !important;
          }
          .hero-card-buttons {
            padding-top: 0.5rem !important;
          }
        }
        .hero-btn-primary:hover {
          background-color: var(--accent-color) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
        }
        .hero-btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: #ffffff !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
