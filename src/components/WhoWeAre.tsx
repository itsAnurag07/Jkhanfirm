import hamiltonTower from '../assets/images/Hamilton -Portfolio.png';

export default function WhoWeAre() {
  return (
    <>
      <section className="fp-who-section">
        <div className="fp-who-inner">

          {/* ─ Left: golden stat card ─ */}
          <div className="fp-who-golden-card">
            <p className="fp-who-eyebrow">OUR COMPANY<br />IN NUMBERS</p>
            {/* Architectural building sketch — top right */}
            <div className="fp-who-swirl">
              <svg viewBox="15 20 90 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="240" height="213">
                {/* Drafting grid & guidelines */}
                <line x1="10" y1="100" x2="110" y2="100" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" strokeDasharray="2 2" />
                <line x1="20" y1="20" x2="20" y2="110" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="100" y1="20" x2="100" y2="110" stroke="rgba(255,255,255,0.12)" strokeWidth="0.8" strokeDasharray="3 3" />
                <circle cx="60" cy="60" r="45" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" strokeDasharray="4 4" />

                {/* Building structure lines */}
                <line x1="15" y1="95" x2="105" y2="95" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />
                
                {/* Left block */}
                <rect x="25" y="55" width="35" height="40" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
                <line x1="42.5" y1="55" x2="42.5" y2="95" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
                <line x1="25" y1="75" x2="60" y2="75" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
                
                {/* Right elevated block */}
                <rect x="55" y="40" width="40" height="35" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
                <line x1="65" y1="75" x2="65" y2="95" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
                <line x1="85" y1="75" x2="85" y2="95" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
                <line x1="75" y1="40" x2="75" y2="75" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
                <line x1="55" y1="57.5" x2="95" y2="57.5" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />

                {/* Penthouse/loft box */}
                <rect x="35" y="30" width="25" height="25" stroke="rgba(255,255,255,0.38)" strokeWidth="1" />
                <line x1="47.5" y1="30" x2="47.5" y2="55" stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />

                {/* Extension drafting lines for artistic sketch effect */}
                <line x1="20" y1="55" x2="65" y2="55" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" />
                <line x1="55" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" />
                <line x1="55" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6" />
                <line x1="25" y1="95" x2="25" y2="25" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
                <line x1="95" y1="95" x2="95" y2="25" stroke="rgba(255,255,255,0.15)" strokeWidth="0.6" />
              </svg>
            </div>
            {/* Stats at bottom */}
            <div className="fp-who-stats-row">
              <div className="fp-who-stat-item">
                <span className="fp-who-num">1000+</span>
                <span className="fp-who-lbl">Projects Delivered</span>
              </div>
              <div className="fp-who-stat-item">
                <span className="fp-who-num fp-who-num--sm">32+</span>
                <span className="fp-who-lbl">Years of Industry<br />Experience</span>
              </div>
            </div>
          </div>

          {/* ─ Right: cream info panel ─ */}
          <div className="fp-who-cream-panel">
            <div className="fp-who-panel-text">
              <h2 className="fp-who-h2">
                Who <span className="fp-who-accent">We</span> Are
              </h2>
              <p className="fp-who-p">
                At JKhan Firm, we understand the challenges of creating
                exceptional spaces that blend elegance, quality, and functionality.
              </p>
              <p className="fp-who-p">
                As Punjab's premier architectural firm, we've made it our mission
                to simplify the design process, ensuring that every project is
                executed flawlessly from initial consultation to final installation.
              </p>
            </div>
            <div className="fp-who-circle-img">
              <img src={hamiltonTower} alt="JKhan Firm team at work" className="fp-who-circle-photo" />
            </div>
          </div>

        </div>
      </section>

      <style>{`
        /* ===== Who We Are Section ===== */
        .fp-who-section {
          padding: 3rem 2rem;
          background: var(--bg-primary, #fbf9f4);
        }
        .fp-who-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          gap: 1.2rem;
          align-items: stretch;
        }

        /* ─ Left golden card ─ */
        .fp-who-golden-card {
          flex: 0 0 300px;
          background: linear-gradient(140deg, #c5a476 0%, #9a7248 55%, #7a5535 100%);
          border-radius: 22px;
          padding: 1.4rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          height: 280px;
          box-shadow: 0 8px 30px rgba(100,60,20,0.2);
        }
        .fp-who-eyebrow {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin: 0;
          line-height: 1.5;
          position: relative;
          z-index: 2;
        }
        .fp-who-swirl {
          position: absolute;
          top: -25px;
          right: -25px;
          opacity: 0.85;
          z-index: 1;
          pointer-events: none;
        }
        .fp-who-stats-row {
          display: flex;
          align-items: flex-end;
          gap: 1.5rem;
          position: relative;
          z-index: 2;
        }
        .fp-who-stat-item {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .fp-who-num {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .fp-who-num--sm {
          font-size: 1.5rem;
        }
        .fp-who-lbl {
          font-size: 0.62rem;
          color: rgba(255,255,255,0.65);
          font-weight: 400;
          line-height: 1.4;
          max-width: 80px;
        }

        /* ─ Right cream panel ─ */
        .fp-who-cream-panel {
          flex: 1;
          background: #f0ece3;
          border-radius: 22px;
          display: flex;
          align-items: center; /* Center child vertically */
          overflow: hidden; /* Clips the image top/bottom/right */
          position: relative;
          height: 280px;
        }
        .fp-who-panel-text {
          flex: 1;
          padding: 2.5rem 2.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; /* Center text horizontally */
          text-align: center; /* Center text lines */
          gap: 0.8rem;
          z-index: 1;
        }
        .fp-who-h2 {
          font-family: var(--font-serif);
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          color: #1a1410;
          margin: 0 0 0.1rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .fp-who-accent {
          color: #9a7248;
        }
        .fp-who-p {
          font-size: 0.85rem;
          color: #6b5d4f;
          line-height: 1.75;
          margin: 0;
          font-weight: 300;
          max-width: 400px;
        }
        /* ─ Circular left curve via clipped semi-circle container ─ */
        .fp-who-circle-img {
          flex-shrink: 0;
          width: 380px; /* Wider to cover the right side fully */
          height: 340px; /* Keep vertical height of circle diameter */
          border-radius: 170px 0 0 170px; /* Perfect circular arc on the left, straight on the right */
          overflow: hidden;
          margin-right: 0; /* Align flush with the right edge */
          position: relative;
          z-index: 2;
        }
        .fp-who-circle-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .fp-who-circle-img:hover .fp-who-circle-photo { transform: scale(1.07); }

        @media (max-width: 900px) {
          .fp-who-inner { flex-direction: column; }
          .fp-who-golden-card { flex: none; height: auto; min-height: 220px; }
          .fp-who-cream-panel { height: auto; min-height: 220px; }
          .fp-who-circle-img {
            width: 100%;
            height: 220px;
            border-radius: 0 0 22px 22px;
            margin-right: 0;
          }
        }
        @media (max-width: 600px) {
          .fp-who-cream-panel { flex-direction: column; }
          .fp-who-circle-img {
            width: 100%;
            height: 180px;
            border-radius: 0 0 22px 22px;
            margin-right: 0;
          }
        }
      `}</style>
    </>
  );
}
