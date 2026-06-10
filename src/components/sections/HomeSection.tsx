import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FadeUp, Btn, SocialBtn, GH, LI, MD } from '../UI';
import { STATS, AWARDS, SOCIAL } from '../../data/content';

export function HomeSection() {
  const t = useContext(ThemeContext);
  return (
    <section
      id="home"
      style={{
        background: t.bg,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 66,
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle, ${t.accent}28 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }}
      />
      {/* Right glow orb */}
      <div
        style={{
          position: 'absolute',
          right: '2%',
          top: '0%',
          width: 720,
          height: 720,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${t.accent}14 0%, transparent 62%)`,
          pointerEvents: 'none',
        }}
      />
      {/* Bottom-left glow */}
      <div
        style={{
          position: 'absolute',
          left: '-5%',
          bottom: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${t.accent}08 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          className="home-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '72px',
            alignItems: 'center',
            padding: '40px 0 60px',
          }}
        >
          {/* LEFT: Text */}
          <div>
            <FadeUp>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 28 }}>
                {/* Badge: role */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 14px',
                    borderRadius: 100,
                    background: t.tagBg,
                    border: `1px solid ${t.border}`,
                    fontSize: 13,
                    fontWeight: 700,
                    color: t.accent,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#22C55E',
                      boxShadow: '0 0 8px #22C55E99',
                    }}
                  />
                  Associate Director · Qure.ai
                </div>

                {/* Badge: Nexus */}
                <a
                  href="https://github.com/aayushostwal/nexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 14px',
                    borderRadius: 100,
                    background: t.tagBg,
                    border: `1px solid ${t.border}`,
                    fontSize: 13,
                    fontWeight: 700,
                    color: t.accent,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  Building Nexus
                </a>

                {/* Badge: Medium */}
                <a
                  href="https://medium.com/@aayushostwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '6px 14px',
                    borderRadius: 100,
                    background: t.tagBg,
                    border: `1px solid ${t.border}`,
                    fontSize: 13,
                    fontWeight: 700,
                    color: t.accent,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                  50+ Articles on Medium
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1
                style={{
                  fontSize: 'clamp(46px, 5.5vw, 78px)',
                  fontWeight: 700,
                  color: t.text,
                  lineHeight: 1.0,
                  letterSpacing: '-0.045em',
                  margin: '0 0 22px',
                }}
              >
                Aayush
                <br />
                <span style={{ color: t.accent }}>Ostwal</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p
                style={{
                  fontSize: 'clamp(15px, 1.8vw, 19px)',
                  color: t.textMuted,
                  margin: '0 0 20px',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.45,
                  fontWeight: 500,
                }}
              >
                Building GenAI &amp; Agentic AI Applications
              </p>
            </FadeUp>

            <FadeUp delay={0.26}>
              <p
                style={{
                  fontSize: 13,
                  color: t.textMuted,
                  lineHeight: 1.85,
                  maxWidth: 500,
                  margin: '0 0 36px',
                }}
              >
                I design and build production-ready GenAI systems — from event-driven microservices
                to autonomous agentic workflows — and share deep-dive technical writing on LLMs,
                distributed backends, and AI infrastructure.
              </p>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.34}>
              <div
                style={{
                  display: 'flex',
                  gap: 36,
                  marginBottom: 40,
                  paddingBottom: 36,
                  borderBottom: `1px solid ${t.border}`,
                  flexWrap: 'wrap',
                }}
              >
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        color: t.text,
                        letterSpacing: '-0.04em',
                        lineHeight: 1,
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: t.textMuted,
                        marginTop: 5,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Awards */}
            <FadeUp delay={0.38}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 32 }}>
                {AWARDS.map((a) => (
                  <div
                    key={a.title}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '8px 16px',
                      borderRadius: 10,
                      background: t.tagBg,
                      border: `1px solid ${t.border}`,
                    }}
                  >
                    <span style={{ fontSize: 13 }}>{a.icon}</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: t.text, lineHeight: 1.2 }}>
                        {a.title}
                      </div>
                      <div style={{ fontSize: 13, color: t.accent }}>
                        {a.org} · {a.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.42}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                <Btn href="#blogs">Read Articles</Btn>
                <Btn href="#career" variant="ghost">View Career</Btn>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    padding: '12px 22px',
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    background: 'linear-gradient(135deg, #22C55E, #16A34A)',
                    color: '#fff',
                    boxShadow: '0 2px 12px rgba(34,197,94,0.35)',
                    transition: 'all 0.22s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(34,197,94,0.5)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'none';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(34,197,94,0.35)';
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  Resume
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div style={{ display: 'flex', gap: 10 }}>
                <SocialBtn icon={<GH />} href={SOCIAL.github} label="GitHub" />
                <SocialBtn icon={<LI />} href={SOCIAL.linkedin} label="LinkedIn" />
                <SocialBtn icon={<MD />} href={SOCIAL.medium} label="Medium" />
              </div>
            </FadeUp>
          </div>

          {/* RIGHT: Photo */}
          <FadeUp delay={0.2} style={{ position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              {/* Outer decorative rings */}
              <div
                style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: 40,
                  border: `1px dashed ${t.accent}20`,
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: -40,
                  borderRadius: 52,
                  border: `1px solid ${t.accent}0C`,
                  pointerEvents: 'none',
                }}
              />

              {/* Photo */}
              <div
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                  border: `1.5px solid ${t.accent}35`,
                  boxShadow: `0 28px 80px rgba(0,0,0,0.55), 0 0 0 1px ${t.accent}10, 0 0 70px ${t.accent}12`,
                  aspectRatio: '3/4',
                  position: 'relative',
                  background: t.cardBg,
                }}
              >
                <img
                  src="/profile_photo.png"
                  alt="Aayush Ostwal"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '28%',
                    background: `linear-gradient(to top, ${t.bg}BB, transparent)`,
                    pointerEvents: 'none',
                  }}
                />
              </div>

            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
