import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { SOCIAL } from '../data/content';

export function Footer() {
  const t = useContext(ThemeContext);
  return (
    <footer
      style={{
        background: t.bg,
        borderTop: `1px solid ${t.border}`,
        padding: '32px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: t.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 13,
              fontWeight: 800,
              color: t.accentText,
              letterSpacing: '-0.02em',
            }}
          >
            AO
          </div>
          <span style={{ fontSize: 13, color: t.textMuted }}>
            © 2025 Aayush Ostwal. All rights reserved.
          </span>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'GitHub', href: SOCIAL.github },
            { label: 'LinkedIn', href: SOCIAL.linkedin },
            { label: 'Medium', href: SOCIAL.medium },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: t.textMuted,
                textDecoration: 'none',
                transition: 'color 0.18s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = t.accent;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = t.textMuted;
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
