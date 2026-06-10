import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FadeUp, SectionHeader, SmallTag, Btn, EL } from '../UI';
import { TUTORIALS } from '../../data/content';

function TutorialCard({ item, index }: { item: typeof TUTORIALS[0]; index: number }) {
  const t = useContext(ThemeContext);
  const [hov, setHov] = useState(false);
  return (
    <FadeUp delay={index * 0.07}>
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
            border: `1px solid ${t.border}`,
            boxShadow: hov ? t.shadowHover : t.shadow,
            transform: hov ? 'translateY(-4px)' : 'none',
            transition: 'all 0.28s ease',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              aspectRatio: '16/9',
              position: 'relative',
              overflow: 'hidden',
              background: item.gradient,
            }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.3s ease',
                transform: hov ? 'scale(1.04)' : 'scale(1)',
              }}
            />
            {/* Play button overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: hov ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.2)',
                transition: 'background 0.25s ease',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: hov ? 'scale(1.12)' : 'scale(1)',
                  transition: 'transform 0.25s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#111">
                  <polygon points="6,3 20,12 6,21" />
                </svg>
              </div>
            </div>
          </div>
          <div style={{ padding: '16px 18px 18px' }}>
            <p
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: t.text,
                lineHeight: 1.45,
                margin: '0 0 12px',
                letterSpacing: '-0.01em',
              }}
            >
              {item.title}
            </p>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
              {item.tags.map((tag) => (
                <SmallTag key={tag}>{tag}</SmallTag>
              ))}
            </div>
          </div>
        </div>
      </a>
    </FadeUp>
  );
}

export function TutorialsSection() {
  const t = useContext(ThemeContext);
  return (
    <section id="tutorials" style={{ background: t.bgAlt, padding: '100px 0' }}>
      <div className="container">
        <SectionHeader
          label="Tutorials"
          title="YouTube Tutorials"
          subtitle="Deep-dive videos on building GenAI and agentic AI systems — from foundations to production."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {TUTORIALS.map((item, i) => (
            <TutorialCard key={item.title} item={item} index={i} />
          ))}
        </div>
        <FadeUp delay={0.3}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Btn href="https://youtube.com/@aayushostwal" variant="ghost">
              View All Tutorials <EL />
            </Btn>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
