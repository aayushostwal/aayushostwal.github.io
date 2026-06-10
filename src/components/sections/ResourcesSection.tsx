import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FadeUp, SectionHeader } from '../UI';
import { RESOURCES } from '../../data/content';


function ResourceCard({ item, index }: { item: typeof RESOURCES[0]; index: number }) {
  const t = useContext(ThemeContext);
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={index * 0.09}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block' }}
      >
        <div
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            background: t.cardBg,
            borderRadius: 14,
            overflow: 'hidden',
            border: `1px solid ${hov ? item.color : t.border}`,
            boxShadow: hov ? `0 10px 40px ${item.color}22` : t.shadow,
            transform: hov ? 'translateY(-4px)' : 'none',
            transition: 'all 0.28s ease',
            cursor: 'pointer',
          }}
        >
          {/* Gradient cover */}
          <div
            style={{
              height: 120,
              background: `linear-gradient(135deg, ${item.color}cc, ${item.color}55)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.9)">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span
              style={{
                position: 'absolute',
                top: 10,
                right: 12,
                padding: '3px 8px',
                borderRadius: 5,
                fontSize: 11,
                fontWeight: 700,
                background: 'rgba(0,0,0,0.35)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                letterSpacing: '0.04em',
              }}
            >
              {item.type}
            </span>
          </div>

          <div style={{ padding: '18px 20px 20px' }}>
            <h3
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: t.text,
                margin: '0 0 8px',
                letterSpacing: '-0.01em',
                fontFamily: 'monospace',
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: t.textMuted,
                lineHeight: 1.65,
                margin: '0 0 16px',
              }}
            >
              {item.desc}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 11, color: t.textMuted }}>{item.meta}</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  fontSize: 12,
                  fontWeight: 600,
                  color: hov ? item.color : t.accent,
                  transition: 'color 0.2s ease',
                }}
              >
                View on GitHub →
              </span>
            </div>
          </div>
        </div>
      </a>
    </FadeUp>
  );
}

export function ResourcesSection() {
  const t = useContext(ThemeContext);
  return (
    <section id="resources" style={{ background: t.bg, padding: '100px 0' }}>
      <div className="container">
        <SectionHeader
          label="Resources"
          title="Open Source Projects"
          subtitle="Repos, tutorials, and tools — free and open for everyone."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {RESOURCES.map((item, i) => (
            <ResourceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
