import { useState } from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Consultation & Visioning',
      description: 'We begin with an in-depth conversation to understand your lifestyle, aesthetic aspirations, budget parameters, and regulatory conditions of your site in Punjab. This creates our architectural brief.',
      image: '/images/blueprint.png',
    },
    {
      number: '02',
      title: 'Architectural & Construction',
      description: 'Our design studio creates tailored layouts, luxury exterior facades, and 3D visual walkthroughs. We detail material palettes, structural details, and electrical/lighting configurations.',
      image: '/images/construction.png',
    },
    {
      number: '03',
      title: 'Master Execution & Interior Design',
      description: 'With seasoned project engineers and master craftsmen, we handle civil works, electrical, plumbing, and bespoke wood detailing. We coordinate all vendor installations under strict quality control.',
      image: '/images/Interior design& planing.png',
    },
    {
      number: '04',
      title: 'Handover & Aftercare',
      description: 'We perform a rigorous walkthrough to finalize the finest details. We hand over the keys to your turn-key luxury estate and remain available for periodic checks, ensuring structural peace of mind.',
      image: '/images/project_farmhouse.png',
    },
  ];

  return (
    <section
      id="our-process"
      style={{
        padding: '40px 20px 60px',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', padding: 0 }}>
        {/* Title */}
        <div style={{ maxWidth: '700px', marginBottom: '4.5rem' }}>
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
            Our Work Flow
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-serif)', lineHeight: 1.2 }}>
            How We <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Simplify</span> Your <br />
            Building Experience
          </h2>
        </div>

        {/* Dynamic Split Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="process-layout"
        >
          {/* Left Side: Step Selectors */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  style={{
                    backgroundColor: isActive ? 'var(--bg-primary)' : 'transparent',
                    border: isActive ? '1px solid rgba(142,122,99,0.1)' : '1px solid transparent',
                    borderRadius: '24px',
                    padding: '2rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                  }}
                  className="process-step-card"
                >
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <span
                      style={{
                        fontSize: '1.8rem',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 300,
                        color: isActive ? 'var(--accent-color)' : 'rgba(36,27,21,0.3)',
                        lineHeight: 1,
                        marginTop: '4px',
                      }}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontSize: '1.4rem',
                          fontFamily: 'var(--font-serif)',
                          color: 'var(--text-dark)',
                          marginBottom: isActive ? '0.75rem' : '0',
                          transition: 'var(--transition-smooth)',
                        }}
                      >
                        {step.title}
                      </h3>
                      {isActive && (
                        <p
                          style={{
                            fontSize: '0.95rem',
                            color: 'var(--text-muted)',
                            lineHeight: 1.6,
                            animation: 'fadeInUp 0.5s ease forwards',
                          }}
                        >
                          {step.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Stacked Image Frame with transitions */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '480px',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              backgroundColor: '#eae3d5',
            }}
            className="process-image-container"
          >
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.number}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(1.06)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      ...(step.image === '/images/construction.png' ? {
                        transform: 'scale(1.3)',
                        transformOrigin: 'left center',
                      } : {})
                    }}
                  />
                  {/* Glass indicator badge overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '24px',
                      right: '24px',
                      backgroundColor: 'rgba(36, 27, 21, 0.45)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      padding: '0.5rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.8rem',
                      letterSpacing: '0.05em',
                      fontWeight: 500,
                      border: '1px solid rgba(255,255,255,0.1)',
                      zIndex: 3,
                    }}
                  >
                    Phase {step.number}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 1024px) {
          .process-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .process-image-container {
            height: 380px !important;
            order: -1; /* Image first on tablet/mobile for flow */
          }
        }
        @media (max-width: 576px) {
          .process-step-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
