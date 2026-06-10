import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { BLOGS } from '../../data/content';
import { EL, FadeUp, MD, SectionHeader } from '../UI';

function BlogCard({ item, index }: { item: typeof BLOGS[0]; index: number }) {
  const t = useContext(ThemeContext);
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={index * 0.08}>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'block', height: '100%' }}
      >
        <div
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          style={{
            background: t.cardBg,
            borderRadius: 14,
            overflow: 'hidden',
            border: `1px solid ${t.border}`,
            boxShadow: hov ? t.shadowHover : t.shadow,
            transform: hov ? 'translateY(-4px)' : 'none',
            transition: 'all 0.28s ease',
            cursor: 'pointer',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Gradient banner */}
          <div
            style={{
              height: 6,
              background: item.gradient,
              flexShrink: 0,
            }}
          />

          <div style={{ padding: '22px 24px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  background: `${t.accent}15`,
                  color: t.accent,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                <MD />
                {item.platform}
              </span>
              <span
                style={{
                  color: t.textMuted,
                  opacity: hov ? 1 : 0,
                  transition: 'opacity 0.2s ease',
                }}
              >
                <EL />
              </span>
            </div>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: t.text,
                lineHeight: 1.4,
                margin: '0 0 10px',
                letterSpacing: '-0.015em',
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: 13,
                color: t.textMuted,
                lineHeight: 1.65,
                margin: '0 0 18px',
                flex: 1,
              }}
            >
              {item.desc}
            </p>
            <div style={{ display: 'flex', gap: 12, fontSize: 13, color: t.textMuted }}>
              <span>{item.date}</span>
              <span style={{ opacity: 0.4 }}>·</span>
              <span>{item.readTime}</span>
            </div>
          </div>
        </div>
      </a>
    </FadeUp>
  );
}

export function BlogsSection() {
  const t = useContext(ThemeContext);
  return (
    <section id="blogs" style={{ background: t.bg, padding: '100px 0' }}>
      <div className="container">
        <SectionHeader
          label="Writing"
          title="Blogs & Articles"
          subtitle="50+ in-depth technical articles on LLM architecture, AI agents, database optimization, and backend systems."
        />

        {/* Platform links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48, marginTop: -24 }}>
          <a
            href="https://medium.com/@aayushostwal"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 18px', borderRadius: 8,
              background: t.cardBg, border: `1px solid ${t.border}`,
              fontSize: 13, fontWeight: 600, color: t.text,
              textDecoration: 'none', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = t.accent; (e.currentTarget as HTMLElement).style.color = t.accent; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = t.border; (e.currentTarget as HTMLElement).style.color = t.text; }}
          >
            <MD /> Medium
          </a>
          <a
            href="https://substack.com/@aayushostwal2"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 18px', borderRadius: 8,
              background: t.cardBg, border: `1px solid ${t.border}`,
              fontSize: 13, fontWeight: 600, color: t.text,
              textDecoration: 'none', transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = t.accent; (e.currentTarget as HTMLElement).style.color = t.accent; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = t.border; (e.currentTarget as HTMLElement).style.color = t.text; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46L0 5.406h24L22.539 0z" />
            </svg>
            Substack
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {BLOGS.map((item, i) => (
            <BlogCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
