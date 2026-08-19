import React, { useState } from 'react';
import { Code, Search, Layers, Cpu, Database, Wrench } from 'lucide-react';

export default function SkillsSection({ skills }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!skills || skills.length === 0) return null;

  const categoryIcons = {
    'Frontend Engineering': Code,
    'Backend & Cloud Services': Database,
    'DevOps & Tools': Wrench,
    'Architecture & Machine Learning': Cpu,
  };

  return (
    <section id="skills" className="section-wrapper">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '2rem'
        }}
      >
        <div className="section-header" style={{ marginBottom: 0 }}>
          <div className="section-title-icon">
            <Code size={24} />
          </div>
          <div>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">Programming languages, frameworks, backend infrastructure, and developer tooling</p>
          </div>
        </div>

        {/* Skill Search Input */}
        <div className="no-print" style={{ position: 'relative', width: '100%', maxWidth: '240px' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem 0.75rem 0.5rem 2.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '0.875rem',
              outline: 'none',
              transition: 'var(--transition-fast)'
            }}
          />
        </div>
      </div>

      <div className="grid-2">
        {skills.map((group, idx) => {
          const IconComponent = categoryIcons[group.category] || Layers;
          const filteredSkills = group.skills.filter(s =>
            s.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (searchTerm && filteredSkills.length === 0) return null;

          return (
            <div key={idx} className="cv-card animate-fade-in">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid var(--border-color)'
                }}
              >
                <IconComponent size={18} color="var(--accent-primary)" />
                <span>{group.category}</span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {filteredSkills.map((item, skillIdx) => (
                  <div
                    key={skillIdx}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.875rem',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                      {item.name}
                    </span>
                    {item.level && (
                      <span
                        style={{
                          fontSize: '0.7rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                          backgroundColor: 'var(--bg-primary)',
                          padding: '0.1rem 0.4rem',
                          borderRadius: '4px'
                        }}
                      >
                        {item.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
