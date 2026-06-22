import { Award, Compass, ShieldCheck, Gem } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section 
      id="why-choose-us" 
      style={{
        padding: '60px 20px',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', padding: 0 }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
          <p 
            style={{ 
              color: 'var(--accent-color)', 
              textTransform: 'uppercase', 
              fontSize: '0.8rem', 
              letterSpacing: '0.15rem',
              fontWeight: 500,
              marginBottom: '1rem',
            }}
          >
            Why Us
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-serif)' }}>
            Why Choose <span style={{ fontStyle: 'italic', fontWeight: 300 }}>JKhan Firm</span>
          </h2>
        </div>

        {/* Asymmetrical 3-Column Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
          className="why-grid"
        >
          {/* Column 1 & 2 Left side, top row */}
          {/* Card 1: End-to-End Solutions */}
          <div 
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '24px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              border: '1px solid rgba(142,122,99,0.05)',
              boxShadow: 'var(--shadow-sm)',
            }}
            className="why-card"
          >
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.75rem', color: 'var(--text-dark)' }}>
                End-to-End Solutions
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                We manage every aspect of your architecture, approvals, and construction, saving you time and avoiding layout coordination stress.
              </p>
            </div>
            <div style={{ alignSelf: 'flex-start', marginTop: '1rem', color: 'var(--accent-color)' }}>
              <Compass size={28} strokeWidth={1.2} />
            </div>
          </div>

          {/* Card 2: Climate-Responsive Design */}
          <div 
            style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '24px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '220px',
              border: '1px solid rgba(142,122,99,0.05)',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="why-card"
          >
            {/* Blurry orb effect matching the second card in the reference */}
            <div 
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: 'rgba(142, 122, 99, 0.18)',
                filter: 'blur(25px)',
              }}
            />

            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '0.75rem', color: 'var(--text-dark)', position: 'relative', zIndex: 2 }}>
                Punjab Climate Focus
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.5, position: 'relative', zIndex: 2 }}>
                Our architectural drafts integrate insulation, sun shading, and ventilation engineered specifically for hot summers and mild winters in Punjab.
              </p>
            </div>
            <div style={{ alignSelf: 'flex-start', marginTop: '1rem', color: 'var(--accent-color)', position: 'relative', zIndex: 2 }}>
              <Award size={28} strokeWidth={1.2} />
            </div>
          </div>

          {/* Card 3: Premium Sourcing (Tall Right Card spanning Row 1 & 2 on desktop) */}
          <div 
            style={{
              background: 'linear-gradient(145deg, #3E2F23 0%, #241B15 100%)',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              gridRow: 'span 1',
              boxShadow: 'var(--shadow-md)',
            }}
            className="why-card-tall"
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 400, fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: '#ffffff' }}>
                Uncompromised Structural Quality
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#EFECE6', opacity: 0.85, lineHeight: 1.6 }}>
                We partner with high-end steel, cement, and wood vendors, ensuring every square foot is built to code with premium luxury detailing.
              </p>
            </div>
            <div style={{ alignSelf: 'flex-start', marginTop: '2rem', color: 'var(--bg-primary)' }}>
              <ShieldCheck size={32} strokeWidth={1} />
            </div>
          </div>

          {/* Row 2: Card 4 (Spans 2 columns on desktop) */}
          <div 
            style={{
              gridColumn: 'span 2',
              backgroundImage: `linear-gradient(to right, rgba(36,27,21,0.95) 40%, rgba(36,27,21,0.2) 100%), url('/images/interior.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              padding: '3rem',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '260px',
              boxShadow: 'var(--shadow-md)',
            }}
            className="why-card-wide"
          >
            <div style={{ maxWidth: '420px' }}>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: '0.75rem', color: '#ffffff' }}>
                Bespoke Interior Carpentry
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#EFECE6', opacity: 0.85, lineHeight: 1.5, marginBottom: '0' }}>
                We engineer bespoke furniture, custom ceiling designs, and marble floor layouts, blending artistic luxury with local craft aesthetics.
              </p>
            </div>
          </div>

          {/* Card 5: Dedicated Aftercare (Row 2, Column 3 on desktop) */}
          <div 
            style={{
              background: 'linear-gradient(135deg, #2E251E 0%, #1A130E 100%)',
              borderRadius: '24px',
              padding: '2.5rem',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '260px',
              boxShadow: 'var(--shadow-md)',
            }}
            className="why-card"
          >
            <div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 400, marginBottom: '0.75rem', color: '#ffffff' }}>
                Structured Aftercare
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#EFECE6', opacity: 0.8, lineHeight: 1.5 }}>
                Our post-delivery checks guarantee complete safety. We conduct thorough walkthroughs to verify structural finishes and operational maintenance.
              </p>
            </div>
            <div style={{ alignSelf: 'flex-start', marginTop: '1rem', color: 'var(--accent-color)' }}>
              <Gem size={28} strokeWidth={1.2} />
            </div>
          </div>

        </div>
      </div>

      {/* Embedded CSS for responsive changes */}
      <style>{`
        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .why-card-wide {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
          .why-card-wide {
            grid-column: span 1 !important;
            padding: 2.5rem 2rem !important;
          }
          .why-card-tall {
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
