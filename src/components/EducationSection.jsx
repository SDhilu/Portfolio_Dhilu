import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

export default function EducationSection({ education, certifications }) {
  return (
    <section id="education" className="section-wrapper">
      <div className="grid-2">
        {/* Education Column */}
        {education && education.length > 0 && (
          <div>
            <div className="section-header">
              <div className="section-title-icon">
                <GraduationCap size={24} />
              </div>
              <div>
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">Academic qualifications and degrees</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {education.map((edu, idx) => (
                <div key={idx} className="cv-card animate-fade-in">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {edu.degree}
                      </h3>
                      <div style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 500, marginTop: '0.15rem' }}>
                        {edu.institution}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textAlign: 'right' }}>
                      <div>{edu.period}</div>
                      {edu.location && <div>{edu.location}</div>}
                    </div>
                  </div>

                  {edu.details && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.5 }}>
                      {edu.details}
                    </p>
                  )}

                  {edu.honors && edu.honors.length > 0 && (
                    <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {edu.honors.map((honor, hIdx) => (
                        <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#10b981' }}>
                          <Award size={14} />
                          <span>{honor}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Column */}
        {certifications && certifications.length > 0 && (
          <div>
            <div className="section-header">
              <div className="section-title-icon">
                <Award size={24} />
              </div>
              <div>
                <h2 className="section-title">Certifications</h2>
                <p className="section-subtitle">Industry credentials & specialization courses</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certifications.map((cert, idx) => (
                <div key={idx} className="cv-card animate-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {cert.title}
                    </h4>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                      {cert.issuer} • <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cert.date}</span>
                    </div>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary btn-sm no-print"
                      title="Verify Certificate"
                    >
                      <ExternalLink size={14} />
                      <span>Verify</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
