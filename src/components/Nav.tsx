import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Btn, MenuIcon, XIcon } from './UI';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'tutorials', label: 'Tutorials' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'resources', label: 'Open Source' },
  { id: 'career', label: 'Career' },
  { id: 'contact', label: 'Contact' },
];

export function Nav({ activeSection }: { activeSection: string }) {
  const t = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: t.navBg,
        borderBottom: scrolled ? `1px solid ${t.navBorder}` : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(1.4)' : 'blur(8px)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? `0 1px 0 ${t.navBorder}` : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 66,
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: t.text,
            letterSpacing: '-0.04em',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: t.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontWeight: 800,
              color: t.accentText,
              letterSpacing: '-0.03em',
              flexShrink: 0,
            }}
          >
            AO
          </div>
        </a>

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', gap: 4, alignItems: 'center' }}
        >
          {NAV_LINKS.map(({ id, label }) => {
            const active = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  padding: '7px 14px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 500,
                  color: active ? t.accent : t.textMuted,
                  background: active ? `${t.accent}10` : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.18s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = t.text;
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLElement).style.color = t.textMuted;
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="desktop-nav">
          <Btn href="#contact" style={{ padding: '9px 20px', fontSize: 13 }}>
            Say Hello
          </Btn>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((o) => !o)}
          style={{
            background: 'none',
            border: `1.5px solid ${t.border}`,
            color: t.text,
            cursor: 'pointer',
            padding: '7px 9px',
            borderRadius: 9,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            background: t.navBg,
            borderTop: `1px solid ${t.border}`,
            padding: '12px 20px 20px',
          }}
        >
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 8px',
                fontSize: 13,
                fontWeight: 500,
                color: activeSection === id ? t.accent : t.text,
                textDecoration: 'none',
                borderBottom: `1px solid ${t.border}`,
              }}
            >
              {label}
            </a>
          ))}
          <div style={{ marginTop: 16 }}>
            <Btn href="#contact" style={{ width: '100%', justifyContent: 'center' }}>
              Say Hello
            </Btn>
          </div>
        </div>
      )}
    </nav>
  );
}
