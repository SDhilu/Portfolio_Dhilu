import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WorkExperience({ experiences }) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="section-wrapper">
      <div className="section-header">
        <div className="section-title-icon">
          <Briefcase size={24} />
        </div>
        <div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">Career timeline, key responsibilities, and technical achievements</p>
        </div>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item animate-fade-in">
            {/* Timeline Dot Indicator */}
            <div className="timeline-dot" />

            <div className="cv-card">
              {/* Role Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.75rem'
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.3
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      marginTop: '0.2rem'
                    }}
                  >
                    <span>{exp.company}</span>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="no-print"
                        style={{ display: 'inline-flex', alignItems: 'center' }}
                        title="Visit company website"
                      >
                        <ExternalLink size={14} color="var(--accent-primary)" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Period & Location Badge */}
                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary Description */}
              {exp.summary && (
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '0.75rem', fontStyle: 'italic' }}>
                  {exp.summary}
                </p>
              )}

              {/* Responsibilities Bullet Points */}
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul
                  style={{
                    listStyleType: 'none',
                    paddingLeft: 0,
                    margin: '0.75rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        fontSize: '0.925rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55
                      }}
                    >
                      <span style={{ color: 'var(--accent-primary)', marginTop: '0.25rem', flexShrink: 0 }}>
                        •
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Measurable Achievements */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div
                  style={{
                    marginTop: '0.75rem',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--bg-accent)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '3px solid var(--accent-primary)'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                    Key Highlights & Impact
                  </div>
                  {exp.achievements.map((ach, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-primary)', marginTop: idx > 0 ? '0.25rem' : 0 }}>
                      <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0 }} />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Tags */}
              {exp.techStack && exp.techStack.length > 0 && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginTop: '1rem',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-color)'
                  }}
                >
                  {exp.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
