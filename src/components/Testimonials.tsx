import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "JKhan Firm transformed our canal plot into a visual masterpiece. Their end-to-end model was incredibly smooth, saving us massive structural and material coordination stress.",
      author: "Sardar Amjad",
      role: "Homeowner",
      location: "Faisalabad, Punjab",
    },
    {
      quote: "The detailing in our bespoke brick farmhouse is outstanding. They paid attention to thermal shading and ventilation, ensuring the estate remains cool during intense Punjab summers.",
      author: "Dr. Simran Kaur",
      role: "Villa Owner",
      location: "Amritsar, Punjab",
    },
    {
      quote: "Extremely professional execution team. They took care of local code permissions, foundation testing, civil masonry, and final luxury handover on schedule.",
      author: "Mian Tariq",
      role: "Corporate Executive",
      location: "Lahore, Punjab",
    },
  ];

  return (
    <section 
      id="testimonials" 
      style={{
        padding: '60px 20px',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', padding: 0 }}>
        {/* Header */}
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
            Client Reviews
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-serif)', margin: 0 }}>
            What Our <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderRadius: '24px',
                padding: '2.5rem',
                border: '1px solid rgba(142,122,99,0.08)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
              className="testimonial-card"
            >
              {/* Quote Icon */}
              <div style={{ color: 'var(--accent-color)', opacity: 0.25, marginBottom: '1.5rem' }}>
                <Quote size={36} fill="currentColor" stroke="none" />
              </div>

              {/* Quote Text */}
              <p 
                style={{ 
                  fontSize: '0.98rem', 
                  color: 'var(--text-muted)', 
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '2rem',
                }}
              >
                "{t.quote}"
              </p>

              {/* Client Info */}
              <div style={{ borderTop: '1px solid rgba(142,122,99,0.1)', paddingTop: '1.25rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '0.2rem' }}>
                  {t.author}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                  {t.role} • {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        @media (max-width: 992px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
