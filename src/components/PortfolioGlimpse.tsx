export default function PortfolioGlimpse() {
  const images = [
    {
      title: 'Bespoke Joinery',
      category: 'Interiors',
      src: '/images/PPR_2.png',
      style: { gridRow: 'span 2' },
    },
    {
      title: 'Palm City Estate',
      category: 'Architecture',
      src: '/images/PalmCity.png',
      style: { gridColumn: 'span 2' },
    },
    {
      title: 'Signature Facade',
      category: 'Facade',
      src: '/images/Signature_Latest.png',
      style: {},
    },
    {
      title: 'Hamilton Tower',
      category: 'Commercial',
      src: '/images/HamiltonTower.png',
      style: { gridRow: 'span 2' },
    },
    {
      title: 'Ambient Lighting',
      category: 'Details',
      src: '/images/PalmCity_front.png',
      style: { gridColumn: 'span 2' },
    },
  ];

  return (
    <section
      id="portfolio-glimpse"
      style={{
        padding: '60px 20px',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', padding: 0 }}>
        {/* Title */}
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
            Material Detailing
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-serif)' }}>
            A Glimpse of <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Our Craft</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '260px',
            gap: '20px',
          }}
          className="glimpse-grid"
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                ...img.style
              }}
              className="glimpse-card"
            >
              <img
                src={img.src}
                alt={img.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'var(--transition-smooth)'
                }}
                className="glimpse-img"
              />
              <div className="glimpse-overlay">
                <span className="glimpse-cat">{img.category}</span>
                <h3 className="glimpse-title">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS for overlay styles and responsiveness */}
      <style>{`
        .glimpse-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 2rem;
          background: linear-gradient(to top, rgba(36,27,21,0.85) 0%, rgba(36,27,21,0) 100%);
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          opacity: 0.9;
          transition: var(--transition-smooth);
          z-index: 2;
        }
        .glimpse-cat {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--bg-card);
          opacity: 0.8;
        }
        .glimpse-title {
          font-size: 1.3rem;
          font-family: var(--font-serif);
          color: #ffffff;
          margin: 0;
        }
        .glimpse-card:hover .glimpse-img {
          transform: scale(1.05);
        }
        .glimpse-card:hover .glimpse-overlay {
          padding-bottom: 2.25rem;
          opacity: 1;
        }
        @media (max-width: 1024px) {
          .glimpse-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 240px !important;
          }
          .glimpse-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
        @media (max-width: 768px) {
          .glimpse-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
