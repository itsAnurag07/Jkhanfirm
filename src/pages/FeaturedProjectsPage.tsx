import { useState } from 'react';
import { ArrowUpRight, ArrowLeft, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { projects, Project } from '../data/projects';
import { interiorImagesMap } from '../data/interiorProjectsImages';


export default function FeaturedProjectsPage() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [activeHeroImg, setActiveHeroImg] = useState<number>(0);
  const [heroFading, setHeroFading] = useState<boolean>(false);

  const filters = ['All', 'Construction', 'Architecture', 'Interior Design'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) =>
        p.scope.toLowerCase().includes(activeFilter.toLowerCase())
      );

  const featured = filteredProjects.find((p) => p.featured) ?? filteredProjects[0];
  const rest = filteredProjects.filter((p) => p.id !== featured?.id);

  const allImages = (p: Project) => {
    if (activeFilter === 'Interior Design' && interiorImagesMap[p.id]) {
      const map = interiorImagesMap[p.id];
      return [map.mainImage, ...map.galleryImages];
    }
    return [p.mainImage, ...p.galleryImages];
  };

  const getProjectMainImage = (p: Project) => {
    if (activeFilter === 'Interior Design' && interiorImagesMap[p.id]) {
      return interiorImagesMap[p.id].mainImage;
    }
    return p.mainImage;
  };

  const getProjectTitle = (p: Project) => {
    if (activeFilter === 'Interior Design' && interiorImagesMap[p.id]) {
      return interiorImagesMap[p.id].interiorTitle;
    }
    return p.title;
  };

  const switchHeroImg = (index: number) => {
    if (index === activeHeroImg) return;
    setHeroFading(true);
    setTimeout(() => {
      setActiveHeroImg(index);
      setHeroFading(false);
    }, 220);
  };



  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          backgroundColor: 'var(--bg-primary)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {/* ── Page Header Bar ── */}
        <header className="fp-page-header">
          <div className="fp-page-header-inner">
            <button onClick={() => navigate('/')} className="fp-back-btn">
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
            <div className="fp-page-logo">
              <img src="/images/logo_black.png" alt="JKhan Firm" />
              <span>JKhan Firm</span>
            </div>
            <a href="/#contact-cta" className="fp-contact-btn">
              <span>Start a Project</span> <ArrowUpRight size={14} />
            </a>
          </div>
        </header>

        {/* ── Hero Banner ── */}
        <div className="fp-page-hero">
          <div className="fp-page-hero-inner">
            <p className="fp-page-eyebrow">Our Complete Portfolio</p>
            <h1 className="fp-page-h1">
              Featured Architectural Estate
            </h1>
            <p className="fp-page-intro">
              A showcase of JKhan Firm's expertise across residential, commercial, and interior projects.


            </p>
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="fp-filter-bar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`fp-filter-btn${activeFilter === f ? ' active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="fp-page-body">

          {/* ── Featured Hero Card ── */}
          {featured && (
            <div className="fp-hero-card">
              <div
                className="fp-hero-img-wrap"
                onClick={() => navigate(`/project/${featured.id}?fromTab=${activeFilter}`)}
                style={{ cursor: 'pointer' }}
              >
                {featured.heroVideo && activeFilter !== 'Interior Design' ? (
                  <video
                    key={featured.heroVideo}
                    className="fp-hero-img"
                    src={featured.heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                ) : (
                  <img
                    src={allImages(featured)[activeHeroImg]}
                    alt={featured.title}
                    className={`fp-hero-img${heroFading ? ' fp-hero-img--fading' : ''}`}
                  />
                )}
                <div className="fp-hero-overlay">

                  <div className="fp-hero-bottom">
                    <div>
                      <p className="fp-location-label">
                        <MapPin size={12} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }} />
                        {featured.location}
                      </p>
                      <h2 className="fp-hero-title">{featured.title}</h2>
                      <p className="fp-hero-desc">{featured.description}</p>
                    </div>
                    <div className="fp-hero-gallery-strip">
                      {/* Main image thumb (index 0) */}
                      <img
                        src={getProjectMainImage(featured)}
                        alt={`${featured.title} main`}
                        className={`fp-thumb${activeHeroImg === 0 ? ' fp-thumb--active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); switchHeroImg(0); }}
                      />
                      {/* Gallery image thumbs */}
                      {allImages(featured).slice(1, 4).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`${featured.title} view ${i + 2}`}
                          className={`fp-thumb${activeHeroImg === i + 1 ? ' fp-thumb--active' : ''}`}
                          onClick={(e) => { e.stopPropagation(); switchHeroImg(i + 1); }}
                        />
                      ))}
                      <button
                        className="fp-view-all-btn"
                        onClick={(e) => { e.stopPropagation(); navigate(`/project/${featured.id}?fromTab=${activeFilter}`); }}
                      >
                        <ArrowUpRight size={14} />
                        View Project Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Meta strip */}
              <div className="fp-meta-strip">
                {[
                  { label: 'Project', val: featured.title },
                  { label: 'Year', val: featured.year },
                  { label: 'Scope', val: featured.scope },
                  { label: 'Area', val: featured.size },
                ].map(({ label, val }) => (
                  <div key={label} className="fp-meta-cell">
                    <span className="fp-meta-label">{label}</span>
                    <span className="fp-meta-value">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Projects Grid ── */}
          <div className="fp-grid">
            {rest.map((project) => (
              <div key={project.id} className="fp-card" onClick={() => navigate(`/project/${project.id}?fromTab=${activeFilter}`)}>
                <div className="fp-card-img-wrap">
                  {project.portrait ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', background: '#1c140e' }}>
                      {/* Blurred background filling the frame / side bars */}
                      <img
                        src={getProjectMainImage(project)}
                        alt=""
                        className="fp-card-img-portrait-bg"
                      />
                      {/* Centered crisp image fitted without cropping */}
                      <img
                        src={getProjectMainImage(project)}
                        alt={project.title}
                        className="fp-card-img-portrait"
                      />
                    </div>
                  ) : (
                    <img src={getProjectMainImage(project)} alt={project.title} className="fp-card-img" />
                  )}

                  <button
                    className="fp-card-gallery-btn"
                    onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}?fromTab=${activeFilter}`); }}
                  >
                    <ArrowUpRight size={13} />
                    View Details
                  </button>
                  <div className="fp-card-dim" />
                </div>
                <div className="fp-card-body">
                  <div className="fp-card-top">
                    <h3 className="fp-card-title">{getProjectTitle(project)}</h3>
                    <span className="fp-card-arrow"><ArrowUpRight size={20} /></span>
                  </div>
                  <p className="fp-card-location">
                    <MapPin size={11} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                    {project.location} · {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="fp-bottom-cta">
            <p className="fp-bottom-eyebrow">Ready to build your vision?</p>
            <h2 className="fp-bottom-heading">Let's Create Something Extraordinary</h2>
            <p className="fp-bottom-sub">
              We bring your architectural and styling dreams to life with precision.
            </p>
            <a href="/#contact-cta" className="fp-bottom-btn">
              Start Your Project <ArrowUpRight size={16} style={{ marginLeft: '6px', display: 'inline', verticalAlign: 'middle' }} />
            </a>
          </div>

        </div>
      </div>


      {/* ── Page Styles ── */}
      <style>{`
        /* Header */
        .fp-page-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(251, 249, 244, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(142, 122, 99, 0.1);
          padding: 0 2rem;
        }
        .fp-page-header-inner {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }
        .fp-back-btn {
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
        .fp-back-btn:hover {
          background: var(--bg-card);
          border-color: var(--accent-color);
        }
        .fp-page-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .fp-page-logo img {
          height: 40px;
          width: auto;
          object-fit: contain;
        }
        .fp-contact-btn {
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
        }
        .fp-contact-btn:hover {
          background: var(--accent-color);
          transform: translateY(-1px);
        }

        /* Hero Banner */
        .fp-page-hero {
          background: linear-gradient(135deg, var(--accent-dark) 0%, #2c1f15 100%);
          padding: 80px 2rem 70px;
          position: relative;
          overflow: hidden;
        }
        .fp-page-hero::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: rgba(142, 122, 99, 0.1);
        }
        .fp-page-hero::after {
          content: '';
          position: absolute;
          bottom: -150px;
          left: -80px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: rgba(142, 122, 99, 0.07);
        }
        .fp-page-hero-inner {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .fp-page-eyebrow {
          color: var(--accent-color);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.2rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
        }
        .fp-page-h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.6rem, 5vw, 4rem);
          color: #fff;
          margin: 0 0 1.5rem;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .fp-page-h1 em {
          font-weight: 300;
          font-style: italic;
        }
        .fp-page-intro {
          color: rgba(251, 249, 244, 0.7);
          font-size: 1rem;
          line-height: 1.7;
          max-width: 620px;
          margin: 0 auto;
          font-weight: 300;
        }

        /* Filter */
        .fp-filter-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 2.5rem 2rem 0;
          flex-wrap: wrap;
        }
        .fp-filter-btn {
          background: var(--bg-card);
          border: 1px solid rgba(142, 122, 99, 0.15);
          border-radius: 50px;
          color: var(--text-muted);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          padding: 0.5rem 1.3rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .fp-filter-btn:hover,
        .fp-filter-btn.active {
          background: var(--accent-dark);
          color: #fff;
          border-color: var(--accent-dark);
        }

        /* Body */
        .fp-page-body {
          max-width: 1300px;
          margin: 0 auto;
          padding: 3rem 2rem 6rem;
        }

        /* Tags */
        .fp-tag {
          display: inline-block;
          padding: 0.32rem 0.9rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          backdrop-filter: blur(8px);
        }
        .fp-tag-light {
          background: rgba(251, 249, 244, 0.88);
          color: var(--text-dark);
          border: 1px solid rgba(142, 122, 99, 0.15);
        }
        .fp-tag-dark {
          background: rgba(36, 27, 21, 0.78);
          color: #fff;
        }

        /* Hero Card */
        .fp-hero-card {
          border-radius: 36px;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(36, 27, 21, 0.12);
          margin-bottom: 2.5rem;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .fp-hero-card:hover { transform: translateY(-4px); box-shadow: 0 36px 90px rgba(36, 27, 21, 0.16); }
        .fp-hero-img-wrap {
          position: relative;
          width: 100%;
          height: 380px;
          overflow: hidden;
        }
        .fp-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease;
        }
        .fp-hero-img--fading { opacity: 0; }
        .fp-hero-card:hover .fp-hero-img:not(.fp-hero-img--fading) { transform: scale(1.03); }
        .fp-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(36, 27, 21, 0.88) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px 36px;
        }
        .fp-hero-tags { display: flex; gap: 10px; }
        .fp-hero-bottom {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
        }
        .fp-location-label {
          color: rgba(251, 249, 244, 0.7);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        }
        .fp-hero-title {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: #fff;
          margin: 0 0 0.7rem;
          line-height: 1.15;
        }
        .fp-hero-desc {
          color: rgba(251, 249, 244, 0.75);
          font-size: 0.93rem;
          line-height: 1.65;
          max-width: 500px;
          font-weight: 300;
          margin: 0;
        }
        .fp-hero-gallery-strip {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
          flex-shrink: 0;
        }
        .fp-thumb {
          width: 90px;
          height: 60px;
          object-fit: cover;
          border-radius: 12px;
          border: 2px solid rgba(251, 249, 244, 0.2);
          cursor: pointer;
          transition: var(--transition-smooth);
          flex-shrink: 0;
        }
        .fp-thumb:hover { border-color: rgba(251, 249, 244, 0.7); transform: scale(1.05); }
        .fp-thumb--active {
          border: 2.5px solid var(--accent-color);
          box-shadow: 0 0 0 2px rgba(142, 122, 99, 0.5);
          transform: scale(1.06);
          opacity: 1;
        }
        .fp-view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(251, 249, 244, 0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 249, 244, 0.25);
          color: #fff;
          border-radius: 50px;
          padding: 0.4rem 1rem;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: var(--transition-smooth);
          white-space: nowrap;
        }
        .fp-view-all-btn:hover { background: rgba(251, 249, 244, 0.22); }

        /* Meta Strip */
        .fp-meta-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: var(--bg-card);
          padding: 1.5rem 2.5rem;
          gap: 1rem;
        }
        .fp-meta-cell { display: flex; flex-direction: column; gap: 4px; }
        .fp-meta-label {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent-color);
        }
        .fp-meta-value {
          font-size: 0.93rem;
          font-weight: 500;
          color: var(--text-dark);
          font-family: var(--font-serif);
        }

        /* Grid */
        .fp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
        }

        /* Card */
        .fp-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          border-radius: 28px;
          overflow: hidden;
          background: var(--bg-card);
          box-shadow: 0 8px 30px rgba(36, 27, 21, 0.05);
          transition: var(--transition-smooth);
        }
        .fp-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(36, 27, 21, 0.12); }
        .fp-card-img-wrap {
          position: relative;
          width: 100%;
          height: auto;
          aspect-ratio: 1.4;
          overflow: hidden;
        }
        .fp-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fp-card:hover .fp-card-img { transform: scale(1.05); }
        .fp-card-img-portrait-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(8px) brightness(0.6);
          transform: scale(1.12);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fp-card:hover .fp-card-img-portrait-bg {
          transform: scale(1.2);
        }
        .fp-card-img-portrait {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
          display: block;
          transform: scale(1.06);
          transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fp-card:hover .fp-card-img-portrait {
          transform: scale(1.12);
        }
        .fp-card-dim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(36,27,21,0.3) 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .fp-card:hover .fp-card-dim { opacity: 1; }
        .fp-card-tags { position: absolute; top: 18px; left: 18px; display: flex; gap: 7px; flex-wrap: wrap; }
        .fp-card-gallery-btn {
          position: absolute;
          bottom: 14px;
          right: 14px;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(36, 27, 21, 0.72);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(251, 249, 244, 0.15);
          color: #fff;
          border-radius: 50px;
          padding: 0.32rem 0.8rem;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          z-index: 2;
          transition: var(--transition-smooth);
        }
        .fp-card-gallery-btn:hover { background: rgba(36, 27, 21, 0.9); }
        .fp-card-body {
          padding: 1.1rem 1.5rem 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .fp-card-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .fp-card-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--text-dark);
          margin: 0;
          line-height: 1.2;
        }
        .fp-card-arrow {
          color: var(--accent-color);
          flex-shrink: 0;
          margin-top: 4px;
          transition: var(--transition-smooth);
        }
        .fp-card:hover .fp-card-arrow { transform: translate(3px, -3px); color: var(--accent-dark); }
        .fp-card-location {
          font-size: 0.75rem;
          color: var(--accent-color);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin: 0;
        }
        .fp-card-desc { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0; font-weight: 300; }
        .fp-card-thumbs {
          display: flex;
          gap: 8px;
          margin-top: 0.5rem;
        }
        .fp-card-thumb {
          width: 68px;
          height: 46px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          border: 1px solid rgba(142, 122, 99, 0.15);
          transition: var(--transition-smooth);
        }
        .fp-card-thumb:hover { transform: scale(1.06); border-color: var(--accent-color); }

        /* Bottom CTA */
        .fp-bottom-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 4rem 2rem;
          background: var(--accent-dark);
          border-radius: 32px;
          position: relative;
          overflow: hidden;
        }
        .fp-bottom-cta::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(142, 122, 99, 0.12);
        }
        .fp-bottom-cta::after {
          content: '';
          position: absolute;
          bottom: -100px; left: -60px;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: rgba(142, 122, 99, 0.08);
        }
        .fp-bottom-eyebrow {
          font-size: 0.72rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--accent-color); margin: 0;
          position: relative; z-index: 1;
        }
        .fp-bottom-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: #fff; margin: 0; line-height: 1.2;
          position: relative; z-index: 1;
        }
        .fp-bottom-sub {
          color: rgba(251, 249, 244, 0.65);
          font-size: 0.95rem; max-width: 480px; line-height: 1.65;
          margin: 0; font-weight: 300; position: relative; z-index: 1;
        }
        .fp-bottom-btn {
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
        .fp-bottom-btn:hover {
          background: rgba(251, 249, 244, 0.2);
          transform: translateY(-2px);
        }

        /* Lightbox */
        .fp-lightbox {
          position: fixed; inset: 0;
          background: rgba(20, 14, 10, 0.96);
          z-index: 9999;
          display: flex; align-items: center; justify-content: center;
          cursor: zoom-out;
        }
        .fp-lb-img {
          max-width: 90vw; max-height: 88vh;
          object-fit: contain; border-radius: 16px;
          cursor: default;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }
        .fp-lb-close {
          position: absolute; top: 20px; right: 24px;
          background: rgba(251, 249, 244, 0.1);
          border: 1px solid rgba(251, 249, 244, 0.2);
          color: #fff; border-radius: 50%;
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: var(--transition-smooth);
        }
        .fp-lb-close:hover { background: rgba(251, 249, 244, 0.2); }
        .fp-lb-prev, .fp-lb-next {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(251, 249, 244, 0.1);
          border: 1px solid rgba(251, 249, 244, 0.2);
          color: #fff; border-radius: 50%;
          width: 52px; height: 52px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; cursor: pointer;
          transition: var(--transition-smooth);
        }
        .fp-lb-prev { left: 24px; }
        .fp-lb-next { right: 24px; }
        .fp-lb-prev:hover, .fp-lb-next:hover { background: rgba(251, 249, 244, 0.2); }
        .fp-lb-caption {
          position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
          background: rgba(251, 249, 244, 0.1); backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 249, 244, 0.15);
          color: #fff; padding: 0.5rem 1.5rem;
          border-radius: 50px; font-size: 0.82rem;
          white-space: nowrap; cursor: default;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .fp-hero-img-wrap { height: 400px; }
        }
        @media (max-width: 768px) {
          .fp-page-header {
            padding: 0 1rem !important;
          }
          .fp-page-logo span { display: none; }
          .fp-page-hero { padding: 60px 1.5rem 50px; }
          .fp-grid { grid-template-columns: 1fr; }
          .fp-page-body { padding: 2rem 1.25rem 4rem; }
          .fp-lb-prev { left: 8px; }
          .fp-lb-next { right: 8px; }
          .fp-hero-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          .fp-hero-gallery-strip {
            align-items: flex-start !important;
            width: 100% !important;
          }
          .fp-back-btn span, .fp-contact-btn span {
            display: none !important;
          }
          .fp-back-btn, .fp-contact-btn {
            width: 38px !important;
            height: 38px !important;
            padding: 0 !important;
            border-radius: 50% !important;
            justify-content: center !important;
            gap: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .fp-hero-overlay { padding: 18px 20px; }
          .fp-hero-tags { flex-wrap: wrap; }
          .fp-hero-img-wrap { height: 260px; }
          .fp-card-thumbs { display: none; }
        }
      `}</style>
    </>
  );
}
