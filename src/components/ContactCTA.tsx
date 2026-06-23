import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Luxury Villa',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API lead submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', projectType: 'Luxury Villa', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact-cta"
      style={{
        padding: '60px 20px',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="container" style={{ maxWidth: '1280px', padding: 0 }}>
        {/* Large Rounded Card Wrapper */}
        <div
          style={{
            background: 'linear-gradient(145deg, #3E2F23 0%, #241B15 100%)',
            borderRadius: '40px',
            padding: '4rem',
            color: '#ffffff',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.3fr',
            gap: '60px',
            boxShadow: 'var(--shadow-lg)',
            overflow: 'hidden',
          }}
          className="contact-card"
        >
          {/* Left Side: Contact Information & Pitch */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '3rem' }}>
            <div>
              <p
                style={{
                  color: 'var(--bg-card)',
                  textTransform: 'uppercase',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15rem',
                  fontWeight: 500,
                  marginBottom: '1.5rem',
                }}
              >
                Start Your Journey
              </p>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontFamily: 'var(--font-serif)',
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                  lineHeight: 1.25,
                }}
              >
                Let’s Build Something <br />
                <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Extraordinary</span> Together
              </h2>
              <p style={{ color: 'rgba(239, 236, 230, 0.8)', fontSize: '0.98rem', lineHeight: 1.6, maxWidth: '420px' }}>
                Book a private design consultation or structural walkthrough at our offices in Punjab. Fill out the request form, and our design lead will contact you within 24 hours.
              </p>
            </div>

            {/* Direct Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--bg-card)',
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Call Office</p>
                  <a href="tel:+916283154202" style={{ fontSize: '1.05rem', fontWeight: 500, color: '#ffffff' }}>+91 62831 54202</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--bg-card)',
                  }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Us</p>
                  <a href="mailto:jkhanfirm@gmail.com" style={{ fontSize: '1.05rem', fontWeight: 500, color: '#ffffff' }}>jkhanfirm@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--bg-card)',
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Punjab Headquarters</p>
                  <p style={{ fontSize: '1rem', color: '#ffffff', margin: 0, lineHeight: 1.4 }}>Infinity Tower, 2nd Floor, Opp. Geeta Mandir, Model Town, Jalandhar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Booking Form */}
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '2.5rem',
              backdropFilter: 'blur(8px)',
            }}
            className="contact-form-container"
          >
            {submitted ? (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '3rem 0',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(142, 122, 99, 0.2)',
                    color: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <Send size={28} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', color: '#ffffff', marginBottom: '0.75rem' }}>
                  Booking Request Sent
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.92rem', lineHeight: 1.5, maxWidth: '300px' }}>
                  Thank you for contacting JKhan Firm. Our relationship executive will call you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="name-input" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>Your Name</label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '12px',
                      padding: '0.9rem 1.2rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                    }}
                    placeholder="Enter your full name"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="phone-input" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>Phone Number</label>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '12px',
                        padding: '0.9rem 1.2rem',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none',
                      }}
                      placeholder="e.g. +91 62831 54202"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="email-input" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>Email Address</label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '12px',
                        padding: '0.9rem 1.2rem',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                        outline: 'none',
                      }}
                      placeholder="e.g. name@domain.com"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="project-type" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>Project Category</label>
                  <select
                    id="project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      backgroundColor: 'rgba(36, 27, 21, 0.95)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '12px',
                      padding: '0.9rem 1.2rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Luxury Villa">Luxury Residential Villa</option>
                    <option value="Interior Design">Full-Home Interior Designing</option>
                    <option value="Farmhouse Construction">Modern Farmhouse Construction</option>
                    <option value="Commercial Fitout">Commercial Office / Showroom Fitout</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="message-input" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.6)' }}>Project Description</label>
                  <textarea
                    id="message-input"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '12px',
                      padding: '0.9rem 1.2rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-sans)',
                      outline: 'none',
                      resize: 'none',
                    }}
                    placeholder="Briefly describe your design/build details..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#EFECE6',
                    color: 'var(--text-dark)',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '1rem',
                    fontSize: '0.85rem',
                    letterSpacing: '0.08em',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '0.5rem',
                    transition: 'var(--transition-smooth)',
                  }}
                  className="submit-btn"
                >
                  Book Private Walkthrough
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        @media (max-width: 992px) {
          .contact-card {
            grid-template-columns: 1fr !important;
            padding: 3rem !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 576px) {
          #contact-cta {
            padding: 20px 20px !important;
          }
          .contact-card {
            padding: 1.25rem !important;
            border-radius: 24px !important;
            gap: 1.25rem !important;
          }
          .contact-card h2 {
            font-size: 1.75rem !important;
            line-height: 1.3 !important;
          }
          .contact-form-container {
            padding: 1.25rem !important;
          }
          .contact-form-container input,
          .contact-form-container select,
          .contact-form-container textarea {
            font-size: 16px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        .submit-btn:hover {
          background-color: var(--accent-color) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
