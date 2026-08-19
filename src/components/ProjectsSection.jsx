import React, { useState } from 'react';
import { FolderGit2, ExternalLink, ArrowUpRight, Info } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import ProjectModal from './ProjectModal';

export default function ProjectsSection({ projects }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  if (!projects || projects.length === 0) return null;

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-wrapper">
      <div className="section-header">
        <div className="section-title-icon">
          <FolderGit2 size={24} />
        </div>
        <div>
          <h2 className="section-title">Key Projects & Applications</h2>
          <p className="section-subtitle">Showcase of full-stack systems, machine learning modules, and web applications</p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div
        className="filter-tabs no-print"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.5rem'
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 500,
              backgroundColor: activeCategory === cat ? 'var(--accent-primary)' : 'var(--bg-secondary)',
              color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
              border: activeCategory === cat ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
              transition: 'var(--transition-fast)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid-3">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="cv-card animate-fade-in"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              {/* Category & Period */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span className="badge">{proj.category}</span>
                {proj.period && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {proj.period}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                {proj.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginTop: '0.2rem', fontWeight: 500 }}>
                {proj.subtitle}
              </p>

              {/* Description */}
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.6rem', lineHeight: 1.55 }}>
                {proj.description}
              </p>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              {/* Tech Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                {proj.techStack && proj.techStack.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-tag" style={{ fontSize: '0.72rem' }}>
                    {tech}
                  </span>
                ))}
                {proj.techStack && proj.techStack.length > 4 && (
                  <span className="tech-tag" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    +{proj.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Card Actions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-color)'
                }}
              >
                <button
                  onClick={() => setSelectedProject(proj)}
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                  className="no-print"
                >
                  <Info size={14} />
                  <span>Details</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {proj.githubUrl && (
                    <a href={proj.githubUrl} target="_blank" rel="noreferrer" title="GitHub Repository">
                      <GithubIcon size={16} color="var(--text-secondary)" />
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noreferrer" title="Live Preview">
                      <ArrowUpRight size={18} color="var(--accent-primary)" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
