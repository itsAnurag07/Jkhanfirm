import { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MapPin, Maximize2, X } from 'lucide-react';
import { projects } from '../data/projects';
import { interiorImagesMap } from '../data/interiorProjectsImages';

interface LightboxState {
  index: number;
}

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const fromTab = searchParams.get('fromTab');

  // Find current project
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-dark)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-sans)',
          gap: '1.5rem',
        }}
      >
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem' }}>Project Not Found</h2>
        <p style={{ color: 'var(--text-muted)' }}>The project you are looking for does not exist.</p>
        <button
          onClick={() => navigate('/featured-projects')}
          style={{
            background: 'var(--accent-dark)',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            padding: '0.8rem 2rem',
            cursor: 'pointer',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </button>
      </div>
    );
  }

  const isInteriorTab = fromTab === 'Interior Design';
  const hasMappedImages = isInteriorTab && interiorImagesMap[project.id];
  const mainImg = hasMappedImages ? interiorImagesMap[project.id].mainImage : project.mainImage;
  const galleryImages = hasMappedImages ? interiorImagesMap[project.id].galleryImages : project.galleryImages;

  const allImages = [mainImg, ...galleryImages];

  const openLightbox = (index: number) => {
    setLightbox({ index });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  const shiftLightbox = (dir: 1 | -1) => {
    if (!lightbox) return;
    setLightbox({
      index: (lightbox.index + dir + allImages.length) % allImages.length,
    });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--text-dark)',
      }}
    >
      {/* ── Page Header Bar ── */}
      <header className="pd-page-header">
        <div className="pd-page-header-inner">
          <button onClick={() => navigate('/featured-projects')} className="pd-back-btn">
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </button>
          <div className="pd-page-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src="/images/logo_black.png" alt="JKhan Firm" />
            <span>JKhan Firm</span>
          </div>
          <a href="/#contact-cta" className="pd-contact-btn">
            <span>Start a Project</span> <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* ── Cinematic Hero Banner ── */}
      <div className="pd-hero">
        {project.heroVideo && !hasMappedImages ? (
          <video
            className="pd-hero-media"
            src={project.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        ) : (
          <img src={mainImg} alt={project.title} className="pd-hero-media" />
        )}
        <div className="pd-hero-overlay">
          <div className="pd-hero-content">
            <p className="pd-location">
              <MapPin size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
              {project.location}
            </p>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-scope-eyebrow">{project.scope}</p>
          </div>
        </div>
      </div>

      {/* ── Metadata Strip ── */}
      <div className="pd-meta-strip-wrap">
        <div className="pd-meta-strip">
          {[
            { label: 'Year Completed', val: project.year },
            { label: 'Project Area', val: project.size },
            { label: 'Services Rendered', val: project.scope },
            { label: 'Location', val: project.location },
          ].map(({ label, val }) => (
            <div key={label} className="pd-meta-cell">
              <span className="pd-meta-label">{label}</span>
              <span className="pd-meta-value">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <div className="pd-container">
        {/* ── Image Gallery Section ── */}
        <div className="pd-gallery-section">
          <h2 className="pd-section-title">Visual Gallery</h2>
          <p className="pd-gallery-sub">Click on any image to expand and view details</p>
          
          <div className="pd-gallery-grid">
            {allImages.map((img, i) => (
              <div
                key={i}
                className={`pd-gallery-item${project.portrait ? ' portrait' : ''}`}
                onClick={() => openLightbox(i)}
              >
                {project.portrait ? (
                  <div className="pd-portrait-wrap">
                    {/* Blurred background */}
                    <img src={img} alt="" className="pd-portrait-bg" />
                    {/* Clean fit image */}
                    <img src={img} alt={`${project.title} view ${i + 1}`} className="pd-portrait-img" />
                  </div>
                ) : (
                  <img src={img} alt={`${project.title} view ${i + 1}`} className="pd-gallery-img" />
                )}
                <div className="pd-gallery-overlay">
                  <Maximize2 size={24} />
                  <span>View Full Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pd-content-grid">
          {/* Left: Overview description */}
          <div className="pd-overview">
            <h2 className="pd-section-title">Project Overview</h2>
            <p className="pd-desc">{project.description}</p>
          </div>

          {/* Right: Quick specs */}
          <div className="pd-specs-card">
            <h3 className="pd-specs-title">Technical Specifications</h3>
            <div className="pd-specs-table">
              <div className="pd-specs-row">
                <span>Client Category</span>
                <strong>Private Residential / Corporate</strong>
              </div>
              <div className="pd-specs-row">
                <span>Timeline</span>
                <strong>Completed in {project.year}</strong>
              </div>
              <div className="pd-specs-row">
                <span>Structural Status</span>
                <strong>Occupied & Fully Operational</strong>
              </div>
              <div className="pd-specs-row">
                <span>Execution Scope</span>
                <strong>Design concept through final handover</strong>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="pd-bottom-cta">
          <p className="pd-bottom-eyebrow">Impressed by this project?</p>
          <h2 className="pd-bottom-heading">Let's Create Your Masterpiece</h2>
          <p className="pd-bottom-sub">
            We bring your architectural and styling dreams to life with precision.
          </p>
          <a href="/#contact-cta" className="pd-bottom-btn">
            Start Your Journey <ArrowUpRight size={16} style={{ marginLeft: '6px', display: 'inline', verticalAlign: 'middle' }} />
          </a>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="pd-lightbox" onClick={closeLightbox}>
          <button className="pd-lb-close" onClick={closeLightbox}><X size={22} /></button>
          <button className="pd-lb-prev" onClick={(e) => { e.stopPropagation(); shiftLightbox(-1); }}>&#8592;</button>
          <img
            src={allImages[lightbox.index]}
            alt={project.title}
            className="pd-lb-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="pd-lb-next" onClick={(e) => { e.stopPropagation(); shiftLightbox(1); }}>&#8594;</button>
          <div className="pd-lb-caption" onClick={(e) => e.stopPropagation()}>
            <strong>{project.title}</strong>
            &nbsp;·&nbsp;
            {lightbox.index + 1} / {allImages.length}
          </div>
        </div>
      )}

      {/* ── Page CSS Styles ── */}
      <style>{`
        /* Header */
        .pd-page-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(251, 249, 244, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(142, 122, 99, 0.1);
          padding: 0 2rem;
        }
        .pd-page-header-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .pd-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: none;
          border: 1px solid rgba(142, 122, 99, 0.25);
          border-radius: 50px;
          color: var(--text-dark);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          padding: 0.45rem 1.1rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .pd-back-btn:hover {
          background: var(--bg-card);
          border-color: var(--accent-color);
        }
        .pd-page-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .pd-page-logo img {
          height: 40px;
          width: auto;
          object-fit: contain;
        }
        .pd-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--accent-dark);
          color: #fff;
          border-radius: 50px;
          padding: 0.5rem 1.3rem;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          transition: var(--transition-smooth);
          text-decoration: none;
        }
        .pd-contact-btn:hover {
          background: var(--accent-color);
          transform: translateY(-1px);
        }

        /* Hero */
        .pd-hero {
          height: 65vh;
          position: relative;
          overflow: hidden;
          background: #140d0a;
        }
        .pd-hero-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pd-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(36, 27, 21, 0.15) 0%, rgba(20, 14, 10, 0.88) 100%);
          display: flex;
          align-items: flex-end;
          padding: 4rem 2rem;
        }
        .pd-hero-content {
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
        }
        .pd-location {
          color: var(--accent-color);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .pd-title {
          font-family: var(--font-serif);
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          color: #fff;
          margin: 0 0 1rem;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        .pd-scope-eyebrow {
          color: rgba(251, 249, 244, 0.7);
          font-size: 1.1rem;
          margin: 0;
          font-weight: 300;
          letter-spacing: 0.02em;
        }

        /* Metadata strip */
        .pd-meta-strip-wrap {
          background: var(--bg-card);
          border-bottom: 1px solid rgba(142, 122, 99, 0.1);
          padding: 2rem;
        }
        .pd-meta-strip {
          max-width: 1300px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }
        .pd-meta-cell {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pd-meta-label {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent-color);
        }
        .pd-meta-value {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-dark);
          font-family: var(--font-serif);
        }

        /* Main Container */
        .pd-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 4rem 2rem 6rem;
        }

        /* Overview Grid */
        .pd-content-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 4rem;
          margin-bottom: 5rem;
          align-items: start;
          border-top: 1px solid rgba(142, 122, 99, 0.1);
          padding-top: 4rem;
        }
        .pd-section-title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--text-dark);
          margin: 0 0 1.5rem;
          line-height: 1.2;
        }
        .pd-desc {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-dark);
          margin: 0 0 1.5rem;
          font-weight: 300;
        }

        /* Specifications Card */
        .pd-specs-card {
          background: var(--bg-card);
          border: 1px solid rgba(142, 122, 99, 0.15);
          border-radius: 24px;
          padding: 2.2rem;
          box-shadow: var(--shadow-sm);
        }
        .pd-specs-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin: 0 0 1.5rem;
          color: var(--text-dark);
          border-bottom: 1px solid rgba(142, 122, 99, 0.15);
          padding-bottom: 0.75rem;
        }
        .pd-specs-table {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .pd-specs-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.92rem;
          border-bottom: 1px solid rgba(142, 122, 99, 0.08);
          padding-bottom: 0.75rem;
        }
        .pd-specs-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .pd-specs-row span {
          color: var(--text-muted);
        }
        .pd-specs-row strong {
          color: var(--text-dark);
          font-weight: 500;
          text-align: right;
        }

        /* Gallery Grid */
        .pd-gallery-section {
          margin-bottom: 5rem;
        }
        .pd-gallery-sub {
          color: var(--text-muted);
          margin: -0.75rem 0 2.5rem;
          font-size: 0.95rem;
          font-weight: 300;
        }
        .pd-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .pd-gallery-item {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 1.55;
          cursor: pointer;
          background: #1c140e;
          box-shadow: 0 8px 30px rgba(36, 27, 21, 0.05);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pd-gallery-item:hover {
          transform: translateY(-4px);
        }
        .pd-gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.9s ease;
        }
        .pd-gallery-item:hover .pd-gallery-img {
          transform: scale(1.04);
        }

        /* Gallery Portrait Specific Styling */
        .pd-gallery-item.portrait {
          background: #1c140e;
        }
        .pd-portrait-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .pd-portrait-bg {
          position: absolute;
          inset: -20px;
          width: calc(100% + 40px);
          height: calc(100% + 40px);
          object-fit: cover;
          filter: blur(8px) brightness(0.6);
          transform: scale(1.1);
          transition: transform 0.9s ease;
        }
        .pd-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          zIndex: 1;
          display: block;
          transform: scale(1.05);
          transition: transform 0.9s ease;
        }
        .pd-gallery-item.portrait:hover .pd-portrait-bg {
          transform: scale(1.18);
        }
        .pd-gallery-item.portrait:hover .pd-portrait-img {
          transform: scale(1.1);
        }

        /* Overlay */
        .pd-gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(36, 27, 21, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          opacity: 0;
          transition: opacity 0.4s ease;
          color: #fff;
          z-index: 2;
        }
        .pd-gallery-item:hover .pd-gallery-overlay {
          opacity: 1;
        }
        .pd-gallery-overlay span {
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* CTA at bottom */
        .pd-bottom-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 5rem 2rem;
          background: var(--accent-dark);
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          margin-top: 2rem;
        }
        .pd-bottom-cta::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(142, 122, 99, 0.12);
        }
        .pd-bottom-cta::after {
          content: '';
          position: absolute;
          bottom: -100px; left: -60px;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: rgba(142, 122, 99, 0.08);
        }
        .pd-bottom-eyebrow {
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--accent-color); margin: 0;
          position: relative; z-index: 1;
        }
        .pd-bottom-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: #fff; margin: 0; line-height: 1.2;
          position: relative; z-index: 1;
        }
        .pd-bottom-sub {
          color: rgba(251, 249, 244, 0.65);
          font-size: 0.95rem; max-width: 520px; line-height: 1.65;
          margin: 0; font-weight: 300; position: relative; z-index: 1;
        }
        .pd-bottom-btn {
          display: inline-flex; align-items: center;
          background: rgba(251, 249, 244, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(251, 249, 244, 0.3);
          color: #fff; border-radius: 50px;
          padding: 0.85rem 2.2rem; font-size: 0.82rem;
          font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; text-decoration: none;
          cursor: pointer; transition: var(--transition-smooth);
          position: relative; z-index: 1; margin-top: 0.5rem;
        }
        .pd-bottom-btn:hover {
          background: rgba(251, 249, 244, 0.2);
          transform: translateY(-2px);
        }

        /* Lightbox */
        .pd-lightbox {
          position: fixed; inset: 0;
          background: rgba(20, 14, 10, 0.96);
          z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          cursor: zoom-out;
        }
        .pd-lb-img {
          max-width: 90vw; max-height: 88vh;
          object-fit: contain; border-radius: 16px;
          cursor: default;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }
        .pd-lb-close {
          position: absolute; top: 20px; right: 24px;
          background: rgba(251, 249, 244, 0.1);
          border: 1px solid rgba(251, 249, 244, 0.2);
          color: #fff; border-radius: 50%;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: var(--transition-smooth);
        }
        .pd-lb-close:hover { background: rgba(251, 249, 244, 0.2); }
        .pd-lb-prev, .pd-lb-next {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(251, 249, 244, 0.1);
          border: 1px solid rgba(251, 249, 244, 0.2);
          color: #fff; border-radius: 50%;
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; cursor: pointer;
          transition: var(--transition-smooth);
        }
        .pd-lb-prev { left: 24px; }
        .pd-lb-next { right: 24px; }
        .pd-lb-prev:hover, .pd-lb-next:hover { background: rgba(251, 249, 244, 0.2); }
        .pd-lb-caption {
          position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
          background: rgba(251, 249, 244, 0.1); backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 249, 244, 0.15);
          color: #fff; padding: 0.5rem 1.5rem;
          border-radius: 50px; font-size: 0.82rem;
          white-space: nowrap; cursor: default;
        }

        /* Responsive Layouts */
        @media (max-width: 1024px) {
          .pd-content-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .pd-specs-card {
            max-width: 600px;
          }
        }
        @media (max-width: 768px) {
          .pd-page-header {
            padding: 0 1rem !important;
          }
          .pd-page-logo span { display: none; }
          .pd-hero { height: 45vh; }
          .pd-meta-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .pd-gallery-grid {
            grid-template-columns: 1fr;
          }
          .pd-lb-prev { left: 8px; }
          .pd-lb-next { right: 8px; }
          .pd-container { padding: 2.5rem 1.25rem 4rem; }
          .pd-back-btn span, .pd-contact-btn span {
            display: none !important;
          }
          .pd-back-btn, .pd-contact-btn {
            width: 38px !important;
            height: 38px !important;
            padding: 0 !important;
            border-radius: 50% !important;
            justify-content: center !important;
            gap: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .pd-bottom-cta { padding: 3rem 1.5rem; }
          .pd-specs-row {
            flex-direction: column !important;
            gap: 4px !important;
            align-items: flex-start !important;
          }
          .pd-specs-row strong {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  );
}
