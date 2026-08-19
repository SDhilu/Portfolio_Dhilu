import React, { useState, useEffect } from 'react';
import { Moon, Sun, Printer, Download, Menu, X, Briefcase, Code, FolderGit2, GraduationCap, Mail } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`navbar-wrapper no-print`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'var(--transition-normal)'
      }}
    >
      <div
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#"
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            letterSpacing: '-0.02em'
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-primary)',
              display: 'inline-block',
              boxShadow: 'var(--shadow-glow)'
            }}
          />
          <span>Dhilushan Sivakumar</span>
          {/* <span className="badge" style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', marginLeft: '0.25rem' }}>
            CV Mode
          </span> */}
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'var(--transition-fast)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <Icon size={15} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Download CV button */}
          <a
            href="/Dhilushan_CV.pdf"
            download="Dhilushan_CV.pdf"
            className="btn btn-secondary btn-sm"
            title="Download Dhilushan_CV.pdf"
            style={{ gap: '0.4rem' }}
          >
            <Download size={15} />
            <span className="print-btn-text">Download CV</span>
          </a>

          {/* Print CV button */}
          {/* <button
            onClick={handlePrint}
            className="btn btn-secondary btn-sm"
            title="Print or Save CV as PDF"
            style={{ gap: '0.4rem', padding: '0.5rem' }}
          >
            <Printer size={15} />
          </button> */}

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-fast)'
            }}
          >
            {theme === 'dark' ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#6366f1" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              padding: '0.5rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: '1rem 1.5rem',
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                padding: '0.5rem 0',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <link.icon size={16} color="var(--accent-primary)" />
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .print-btn-text { display: none; }
        }
      `}</style>
    </header>
  );
}
