import { useEffect, useRef, useState } from 'react';

/* ── Count-up hook with ease-out cubic ── */
function useCountUp(end: number, duration = 3000, trigger: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration]);
  return count;
}

export default function About() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-cta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ── Count-up state ── */
  const statRowRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (statRowRef.current) observer.observe(statRowRef.current);
    return () => observer.disconnect();
  }, []);

  const count150 = useCountUp(150, 3000, triggered);
  const count32  = useCountUp(32,  3000, triggered);

  return (
    <section
      id="who-we-are"
      style={{
        padding: '70px 20px',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', padding: 0 }}>
        <div className="about-layout">

          {/* ── Left Column: Dual Portrait Photos ── */}
          <div className="about-left">

            {/* Decorative large ring */}
            <div className="about-ring" />

            {/* Back card — Founder (senior man) */}
            <div className="about-card about-card-back">
              <img
                src="/images/founder2.jpg"
                alt="JKhan Firm Founder"
                className="about-portrait"
              />
              <div className="about-name-badge">
                <span className="about-name">Jabbar Khan</span>
                <span className="about-role">Founder & Principal</span>
              </div>
            </div>

            {/* Front card — Director (young man) */}
            <div className="about-card about-card-front">
              <img
                src="/images/founder1.jpg"
                alt="JKhan Firm Director"
                className="about-portrait"
              />
              <div className="about-name-badge">
                <span className="about-name">Junaid Khan</span>
                <span className="about-role">Principal Architect </span>
              </div>
            </div>

            {/* Experience pill floating */}
            <div className="about-exp-badge">
              <span className="about-exp-number">32+</span>
              <span className="about-exp-label">Years of<br />Excellence</span>
            </div>

            {/* Dot grid accent */}
            <div className="about-dots" />
          </div>

          {/* ── Right Column: Content ── */}
          <div className="about-right">

            <p className="about-eyebrow">ABOUT US</p>

            <h2 className="about-headline">
              Building Dreams into Reality with Expert Construction for Your{' '}
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Perfect Space.</span>
            </h2>

            <p className="about-body">
              JKhan Constructions, established in 1993, has been a pioneering force in the
              construction industry, especially recognized for its transformative work in
              Model Town, Jalandhar.
            </p>
            <p className="about-body">
              Known for quality craftsmanship and innovative design, JKhan Constructions
              has earned a stellar reputation as one of Jalandhar's most trusted construction
              firms, continuing to set benchmarks in the city's development landscape.
            </p>

            {/* Stats */}
            <div className="about-stat-row" ref={statRowRef}>
              <div className="about-stat-item">
                <div className="about-stat-box">
                  <span className="about-stat-num" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {count150}+
                  </span>
                </div>
                <p className="about-stat-desc">Luxury Projects<br />Handed Over</p>
              </div>

              <div className="about-stat-divider" />

              <div className="about-stat-item">
                <div className="about-stat-box">
                  <span className="about-stat-num" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {count32}
                  </span>
                </div>
                <p className="about-stat-desc">Years of Design-Build<br />Expertise</p>
              </div>
            </div>

            {/* CTA */}
            <button onClick={scrollToContact} className="about-cta-btn">
              Book a Private Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Layout ── */
        .about-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* ── LEFT ── */
        .about-left {
          position: relative;
          height: 560px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Large decorative ring */
        .about-ring {
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          border: 1.5px solid rgba(142, 122, 99, 0.15);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }
        .about-ring::before {
          content: '';
          position: absolute;
          inset: 30px;
          border-radius: 50%;
          border: 1px dashed rgba(142, 122, 99, 0.1);
        }

        /* Portrait card base */
        .about-card {
          position: absolute;
          border-radius: 200px 200px 20px 20px;
          overflow: hidden;
          box-shadow: 0 30px 70px rgba(30, 22, 14, 0.18);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease;
        }
        .about-card:hover {
          transform: translateY(-8px) scale(1.02) !important;
          box-shadow: 0 45px 90px rgba(30, 22, 14, 0.25) !important;
          z-index: 10 !important;
        }

        /* Back card — offset left, slightly smaller */
        .about-card-back {
          width: 230px;
          height: 340px;
          left: 30px;
          top: 80px;
          z-index: 1;
          background: #e8e0d7;
        }

        /* Front card — main portrait, right side */
        .about-card-front {
          width: 260px;
          height: 380px;
          right: 20px;
          bottom: 60px;
          z-index: 2;
          background: #e8e0d7;
          border: 3px solid rgba(255, 255, 255, 0.9);
        }

        .about-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .about-card:hover .about-portrait {
          transform: scale(1.05);
        }

        /* Name badge overlaid at bottom of each card */
        .about-name-badge {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 10px 14px;
          background: linear-gradient(to top, rgba(20, 14, 8, 0.88) 0%, transparent 100%);
          display: flex;
          flex-direction: column;
        }
        .about-name {
          color: #fff;
          font-family: var(--font-serif);
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.2;
        }
        .about-role {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* Floating experience badge */
        .about-exp-badge {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-primary);
          border: 1.5px solid rgba(142, 122, 99, 0.25);
          border-radius: 50px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 12px 36px rgba(30, 22, 14, 0.1);
          z-index: 5;
          white-space: nowrap;
        }
        .about-exp-number {
          font-family: var(--font-sans);
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-dark);
          line-height: 1;
          letter-spacing: -0.04em;
        }
        .about-exp-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.4;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* Dot grid */
        .about-dots {
          position: absolute;
          top: 20px;
          right: 0;
          width: 100px;
          height: 100px;
          background-image: radial-gradient(circle, rgba(142,122,99,0.35) 1.5px, transparent 1.5px);
          background-size: 13px 13px;
          z-index: 0;
          border-radius: 8px;
        }

        /* ── RIGHT ── */
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .about-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 0.18rem;
          font-weight: 700;
          color: var(--accent-color);
          text-transform: uppercase;
          margin: 0;
        }
        .about-headline {
          font-family: var(--font-serif);
          font-size: 2.6rem;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.2;
          margin: 0;
        }
        .about-body {
          font-size: 0.97rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin: 0;
          max-width: 540px;
        }

        /* Stat row */
        .about-stat-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 0.25rem;
        }
        .about-stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .about-stat-box {
          background: var(--bg-secondary);
          border: 1.5px solid rgba(142, 122, 99, 0.22);
          border-radius: 12px;
          padding: 12px 18px;
          box-shadow: 0 4px 16px rgba(36, 27, 21, 0.05);
        }
        .about-stat-num {
          font-family: var(--font-sans);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--text-dark);
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .about-stat-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 500;
          line-height: 1.5;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .about-stat-divider {
          width: 1px;
          height: 44px;
          background: rgba(142, 122, 99, 0.2);
          margin: 0 6px;
        }

        /* CTA button */
        .about-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 0.25rem;
          padding: 0.9rem 2rem;
          background: var(--accent-dark);
          color: #ffffff;
          border: none;
          border-radius: 50px;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          align-self: flex-start;
        }
        .about-cta-btn:hover {
          background: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(142, 122, 99, 0.3);
        }
        .about-cta-btn svg {
          transition: transform 0.3s ease;
        }
        .about-cta-btn:hover svg {
          transform: translate(3px, -3px);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .about-layout {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .about-left {
            height: 460px !important;
          }
          .about-card-back {
            left: 10% !important;
          }
          .about-card-front {
            right: 10% !important;
          }
        }
        @media (max-width: 640px) {
          .about-headline {
            font-size: 2rem !important;
          }
          .about-left {
            height: 360px !important;
          }
          .about-ring {
            width: 280px !important;
            height: 280px !important;
          }
          .about-ring::before {
            inset: 15px !important;
          }
          .about-card-back {
            width: 140px !important;
            height: 210px !important;
            left: 5% !important;
            top: 40px !important;
          }
          .about-card-front {
            width: 160px !important;
            height: 240px !important;
            right: 5% !important;
            bottom: 30px !important;
          }
          .about-exp-badge {
            padding: 8px 12px !important;
            bottom: 0px !important;
            gap: 8px !important;
          }
          .about-exp-number {
            font-size: 1.4rem !important;
          }
          .about-exp-label {
            font-size: 0.58rem !important;
          }
          .about-dots {
            width: 70px !important;
            height: 70px !important;
            top: 10px !important;
          }
          .about-stat-row {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}
