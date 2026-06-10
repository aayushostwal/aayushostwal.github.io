import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FadeUp, SectionHeader, SmallTag } from '../UI';
import { CAREER, EDUCATION } from '../../data/content';

export function CareerSection() {
  const t = useContext(ThemeContext);
  return (
    <section id="career" style={{ background: t.bgAlt, padding: '100px 0' }}>
      <div className="container">
        <SectionHeader
          label="Career"
          title="Work History"
          subtitle="From data science to building the infrastructure that powers production AI at scale."
        />
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
          {/* Vertical timeline line */}
          <div
            style={{
              position: 'absolute',
              left: 19,
              top: 24,
              bottom: 0,
              width: 1,
              background: `linear-gradient(to bottom, ${t.accent}, ${t.border})`,
              opacity: 0.3,
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {CAREER.map((item, i) => (
              <FadeUp key={item.role + item.company} delay={i * 0.1}>
                <div
                  style={{
                    display: 'flex',
                    gap: 28,
                    paddingBottom: i < CAREER.length - 1 ? 48 : 0,
                  }}
                >
                  {/* Dot */}
                  <div style={{ flexShrink: 0, paddingTop: 4 }}>
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: '50%',
                        background: item.color,
                        border: `2px solid ${item.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                        position: 'relative',
                        boxShadow: `0 0 0 4px ${item.color}22`,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                      </svg>
                    </div>
                  </div>
                  {/* Content */}
                  <div
                    style={{
                      background: t.cardBg,
                      borderRadius: 14,
                      padding: '22px 26px 24px',
                      border: `1px solid ${t.border}`,
                      borderLeft: `3px solid ${item.color}`,
                      boxShadow: t.shadow,
                      flex: 1,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: 8,
                        marginBottom: 8,
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: t.text,
                            margin: '0 0 2px',
                            letterSpacing: '-0.015em',
                          }}
                        >
                          {item.role}
                        </h3>
                        <p style={{ fontSize: 13, color: item.color, fontWeight: 500, margin: 0 }}>
                          {item.company}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '3px 10px',
                            borderRadius: 6,
                            fontSize: 13,
                            fontWeight: 500,
                            color: t.textMuted,
                            background: t.bgAlt,
                            border: `1px solid ${t.border}`,
                          }}
                        >
                          {item.period}
                        </span>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: t.textMuted,
                        lineHeight: 1.7,
                        margin: '12px 0 16px',
                      }}
                    >
                      {item.desc}
                    </p>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {item.tags.map((tag) => (
                        <SmallTag key={tag}>{tag}</SmallTag>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Education */}
        <FadeUp delay={0.4} style={{ maxWidth: 760, margin: '48px auto 0' }}>
          <div
            style={{
              background: t.cardBg,
              borderRadius: 14,
              padding: '22px 26px',
              border: `1px solid ${t.border}`,
              boxShadow: t.shadow,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: t.accent,
                  fontWeight: 700,
                  marginBottom: 4,
                }}
              >
                Education
              </div>
              <h3
                style={{ fontSize: 13, fontWeight: 600, color: t.text, margin: '0 0 2px' }}
              >
                {EDUCATION.degree}
              </h3>
              <p style={{ fontSize: 13, color: t.accent, margin: 0 }}>{EDUCATION.institution}</p>
              <p style={{ fontSize: 13, color: t.textMuted, marginTop: 4 }}>{EDUCATION.details}</p>
            </div>
            <span
              style={{
                padding: '3px 10px',
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                color: t.textMuted,
                background: t.bgAlt,
                border: `1px solid ${t.border}`,
              }}
            >
              {EDUCATION.year}
            </span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
