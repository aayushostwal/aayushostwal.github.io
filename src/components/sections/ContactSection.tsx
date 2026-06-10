import { useContext } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ThemeContext } from '../../context/ThemeContext';
import { FadeUp, SectionHeader, SocialBtn, GH, LI, MD, Send, Check } from '../UI';
import { SOCIAL } from '../../data/content';

export function ContactSection() {
  const t = useContext(ThemeContext);
  const [state, handleSubmit] = useForm('mrevlqwv');

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    background: t.cardBg,
    border: `1.5px solid ${t.border}`,
    borderRadius: 10,
    fontSize: 13,
    color: t.text,
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 600,
    color: t.textMuted,
    marginBottom: 7,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
  };

  const errorStyle: React.CSSProperties = {
    fontSize: 12,
    color: '#ef4444',
    marginTop: 5,
    display: 'block',
  };

  return (
    <section id="contact" style={{ background: t.bgAlt, padding: '100px 0' }}>
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Get in Touch"
          subtitle="Have a project in mind, want to collaborate, or just want to say hello? My inbox is open."
        />
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          {state.succeeded ? (
            <FadeUp>
              <div
                style={{
                  textAlign: 'center',
                  padding: '56px 32px',
                  background: t.cardBg,
                  borderRadius: 16,
                  border: `1px solid ${t.border}`,
                  boxShadow: t.shadow,
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: `${t.accent}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: t.accent,
                  }}
                >
                  <Check />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, color: t.text, margin: '0 0 10px' }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: 13, color: t.textMuted, lineHeight: 1.6 }}>
                  Thanks for reaching out. I'll get back to you within 24–48 hours.
                </p>
              </div>
            </FadeUp>
          ) : (
            <FadeUp>
              <form
                onSubmit={handleSubmit}
                style={{
                  background: t.cardBg,
                  borderRadius: 16,
                  padding: '40px',
                  border: `1px solid ${t.border}`,
                  boxShadow: t.shadow,
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = t.accent; }}
                      onBlur={(e) => { e.target.style.borderColor = t.border; }}
                    />
                    <ValidationError field="name" errors={state.errors} style={errorStyle} />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = t.accent; }}
                      onBlur={(e) => { e.target.style.borderColor = t.border; }}
                    />
                    <ValidationError field="email" errors={state.errors} style={errorStyle} />
                  </div>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or question..."
                    required
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 140 }}
                    onFocus={(e) => { e.target.style.borderColor = t.accent; }}
                    onBlur={(e) => { e.target.style.borderColor = t.border; }}
                  />
                  <ValidationError field="message" errors={state.errors} style={errorStyle} />
                </div>

                <ValidationError errors={state.errors} style={{ ...errorStyle, marginBottom: 12, display: 'block', textAlign: 'center' }} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    padding: '13px 28px',
                    borderRadius: 8,
                    border: 'none',
                    background: state.submitting ? `${t.accent}88` : t.accent,
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 600,
                    fontFamily: 'inherit',
                    cursor: state.submitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.22s ease',
                  }}
                >
                  <Send /> {state.submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </FadeUp>
          )}

          <FadeUp delay={0.15}>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 36 }}>
              <SocialBtn icon={<GH />} href={SOCIAL.github} label="GitHub" />
              <SocialBtn icon={<LI />} href={SOCIAL.linkedin} label="LinkedIn" />
              <SocialBtn icon={<MD />} href={SOCIAL.medium} label="Medium" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
