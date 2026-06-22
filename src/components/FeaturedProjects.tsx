import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  scope: string;
  size: string;
  description: string;
  image: string;
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    {
      id: 'Modern Elevation',
      title: 'The Shopping Mall',
      location: 'Jalandhar, Punjab',
      scope: 'Architecture & Interior Design',
      size: '12,500 Sq. Ft.',
      description: 'A contemporary glass and steel structure featuring double-height spaces, a private infinity pool, and custom indoor water features.',
      image: '/images/Ram.png',
    },
    {
      id: 'farmhouse-ludhiana',
      title: 'The PPR Market Complex',
      location: 'Jalandhar, Punjab',
      scope: 'Turn-key Construction & Styling',
      size: '18,000 Sq. Ft.',
      description: 'Blending local terracotta masonry with raw exposed concrete structural elements, creating massive courtyards that capture Punjab breeze.',
      image: '/images/PPR_2.png',
    },
  ];

  return (
    <section
      id="featured-projects"
      style={{
        padding: '60px 20px 40px',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', padding: 0 }}>
        {/* Section Heading */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4.5rem',
            gap: '2rem',
          }}
          className="projects-header"
        >
          <div style={{ maxWidth: '600px' }}>
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
              Our Portfolio
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-serif)', margin: 0, lineHeight: 1.2 }}>
              Featured Punjab <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Architectural Estates</span>
            </h2>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '380px', lineHeight: 1.6 }}>
              Explore how we translate sketches into monumental concrete, glass, and steel residences throughout the region.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
          }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'pointer',
              }}
              className="project-card-wrapper"
            >
              {/* Image Container */}
              <div
                style={{
                  width: '100%',
                  height: '480px',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="project-img"
                />

                {/* Float tags */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    display: 'flex',
                    gap: '10px',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(251, 249, 244, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: 'var(--text-dark)',
                      padding: '0.4rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                      border: '1px solid rgba(142, 122, 99, 0.1)',
                    }}
                  >
                    {project.scope}
                  </span>
                  <span
                    style={{
                      backgroundColor: 'rgba(36, 27, 21, 0.75)',
                      backdropFilter: 'blur(4px)',
                      color: '#ffffff',
                      padding: '0.4rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {project.size}
                  </span>
                </div>
              </div>

              {/* Text Meta Info */}
              <div style={{ padding: '0 0.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.8rem',
                      fontFamily: 'var(--font-serif)',
                      color: 'var(--text-dark)',
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                  <span style={{ color: 'var(--accent-color)' }}>
                    <ArrowUpRight size={22} className="project-arrow" style={{ transition: 'var(--transition-smooth)' }} />
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent-color)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}
                >
                  {project.location}
                </p>

                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        @media (max-width: 768px) {
          .projects-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
            margin-bottom: 3rem !important;
          }
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .project-card-wrapper img {
            height: 320px !important;
          }
        }
        .project-card-wrapper:hover .project-img {
          transform: scale(1.05);
        }
        .project-card-wrapper:hover .project-arrow {
          transform: translate(3px, -3px);
          color: var(--accent-dark);
        }
      `}</style>
    </section>
  );
}
