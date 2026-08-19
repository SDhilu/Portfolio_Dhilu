import React from 'react';
import { Mail, MapPin, Phone, Globe, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function HeaderSection({ personal, stats }) {
  return (
    <section className="section-wrapper animate-fade-in" style={{ marginTop: '1rem' }}>
      <div className="cv-card" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Subtle decorative background gradient */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'var(--accent-gradient)',
            opacity: 0.12,
            filter: 'blur(40px)',
            pointerEvents: 'none'
          }}
        />

        {/* Top Info Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {/* Status Badge */}
          {personal.openToWork && (
            <div>
              <span className="badge badge-success" style={{ gap: '0.4rem' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 8px #10b981'
                  }}
                />
                {personal.statusText || 'Open to Work'}
              </span>
            </div>
          )}

          {/* Name & Title */}
          <div>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15
              }}
            >
              {personal.name}
            </h1>
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                marginTop: '0.35rem',
                letterSpacing: '-0.01em'
              }}
            >
              {personal.title}
            </h2>
          </div>

          {/* Professional Bio */}
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: '850px',
              lineHeight: 1.65
            }}
          >
            {personal.bio}
          </p>

          {/* Contact Details Grid */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem 1.5rem',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--border-color)',
              marginTop: '0.5rem'
            }}
          >
            {personal.location && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <MapPin size={16} color="var(--accent-primary)" />
                <span>{personal.location}</span>
              </div>
            )}

            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'var(--transition-fast)' }}
                className="hover-accent"
              >
                <Mail size={16} color="var(--accent-primary)" />
                <span>{personal.email}</span>
              </a>
            )}

            {personal.phone && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <Phone size={16} color="var(--accent-primary)" />
                <span>{personal.phone}</span>
              </div>
            )}

            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}
              >
                <LinkedinIcon size={16} color="var(--accent-primary)" />
                <span>LinkedIn</span>
              </a>
            )}

            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}
              >
                <GithubIcon size={16} color="var(--accent-primary)" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          {/* Quick CTA & Action Buttons */}
          <div className="no-print" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
            <a href="#contact" className="btn btn-primary btn-sm">
              <Mail size={16} />
              <span>Contact Candidate</span>
            </a>
            <a href={personal.pdfCvUrl || "/Dhilushan_CV.pdf"} download="Dhilushan_CV.pdf" className="btn btn-secondary btn-sm">
              <Download size={16} />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
              gap: '1rem',
              marginTop: '1.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px dashed var(--border-color)'
            }}
            className="stats-grid"
          >
            {stats.map((item, idx) => (
              <div key={idx} style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
