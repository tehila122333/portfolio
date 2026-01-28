'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#ask', label: 'Ask My Portfolio' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const navbarHeight = 80;

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Section is considered active if its top is at or above the navbar
          if (rect.top <= navbarHeight + 50) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    // Immediately set active section when clicking
    setActiveSection(targetId);

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-gradient-to-b from-[#09090b] to-[#0f0f12] backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="relative text-xl font-bold text-white hover:text-[var(--accent-primary)] transition-colors duration-300"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                const isAskLink = link.label === 'Ask My Portfolio';

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                      isAskLink
                        ? isActive
                          ? 'text-[var(--accent-secondary)] animate-pulseGlow'
                          : 'text-[var(--accent-secondary)] hover:text-white'
                        : isActive
                        ? 'text-[var(--accent-primary)]'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      {isAskLink && (
                        <span className="inline-flex items-center justify-center w-4 h-4 animate-sparkle">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </span>
                      )}
                      {link.label}
                    </div>
                    {isActive && (
                      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r ${
                        isAskLink
                          ? 'from-[var(--accent-secondary)] to-pink-500'
                          : 'from-[var(--accent-primary)] to-[var(--accent-secondary)]'
                      }`}></span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-400 hover:text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                const isAskLink = link.label === 'Ask My Portfolio';

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2 ${
                      isAskLink
                        ? isActive
                          ? 'text-[var(--accent-secondary)] bg-[var(--accent-secondary-light)]'
                          : 'text-[var(--accent-secondary)] hover:text-white hover:bg-[var(--surface-light)]'
                        : isActive
                        ? 'text-[var(--accent-primary)] bg-[var(--accent-primary-light)]'
                        : 'text-zinc-400 hover:text-white hover:bg-[var(--surface-light)]'
                    }`}
                  >
                    {isAskLink && (
                      <span className="inline-flex items-center justify-center w-4 h-4 animate-sparkle">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                    )}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
