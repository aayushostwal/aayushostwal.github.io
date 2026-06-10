import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

export function FadeUp({
  children,
  delay = 0,
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => setVis(true);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 20 && rect.bottom > 0) {
      const t = setTimeout(show, 60);
      return () => clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : 'translateY(28px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  const t = useContext(ThemeContext);
  return (
    <FadeUp style={{ textAlign: 'center', marginBottom: 60 }}>
      <span
        style={{
          display: 'inline-block',
          fontSize: 13,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: t.accent,
          background: t.tagBg,
          border: `1px solid ${t.border}`,
          padding: '4px 12px',
          borderRadius: 100,
          marginBottom: 16,
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontSize: 'clamp(26px, 3.5vw, 40px)',
          fontWeight: 600,
          color: t.text,
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
          margin: 0,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          width: 36,
          height: 2.5,
          background: t.accent,
          borderRadius: 2,
          margin: '14px auto 0',
          opacity: 0.7,
        }}
      />
      {subtitle && (
        <p
          style={{
            color: t.textMuted,
            marginTop: 14,
            fontSize: 13,
            lineHeight: 1.7,
            maxWidth: 520,
            margin: '14px auto 0',
          }}
        >
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}

export function SmallTag({ children }: { children: React.ReactNode }) {
  const t = useContext(ThemeContext);
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '3px 9px',
        borderRadius: 5,
        fontSize: 13,
        fontWeight: 500,
        color: t.accent,
        background: t.tagBg,
        letterSpacing: '0.01em',
      }}
    >
      {children}
    </span>
  );
}

export function Btn({
  children,
  href,
  onClick,
  variant = 'primary',
  style: extraStyle = {},
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'primary' | 'ghost';
  style?: React.CSSProperties;
}) {
  const t = useContext(ThemeContext);
  const [hov, setHov] = useState(false);
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.22s ease',
    textDecoration: 'none',
    letterSpacing: '0.02em',
    fontFamily: 'inherit',
    outline: 'none',
    whiteSpace: 'nowrap',
    border: 'none',
  };

  const s: React.CSSProperties =
    variant === 'primary'
      ? {
          ...base,
          padding: '12px 28px',
          background: hov ? t.accentHover : t.accent,
          color: t.accentText,
          boxShadow: hov ? `0 6px 20px ${t.accent}44` : `0 2px 8px ${t.accent}22`,
          transform: hov ? 'translateY(-2px)' : 'none',
          ...extraStyle,
        }
      : {
          ...base,
          padding: '11px 24px',
          background: hov ? t.bgAlt : 'transparent',
          color: t.text,
          border: `1.5px solid ${t.border}`,
          transform: hov ? 'translateY(-1px)' : 'none',
          ...extraStyle,
        };

  const ev = {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
  };

  const isAnchor = href?.startsWith('#');

  if (href) {
    return (
      <a
        href={href}
        target={isAnchor ? '_self' : '_blank'}
        rel="noopener noreferrer"
        style={s}
        {...ev}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" style={s} onClick={onClick} {...ev}>
      {children}
    </button>
  );
}

export function SocialBtn({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  const t = useContext(ThemeContext);
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: 10,
        color: hov ? t.accent : t.textMuted,
        border: `1.5px solid ${hov ? t.accent : t.border}`,
        background: t.cardBg,
        transition: 'all 0.2s ease',
        transform: hov ? 'translateY(-2px)' : 'none',
        textDecoration: 'none',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {icon}
    </a>
  );
}

// Icons
export const GH = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export const LI = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const MD = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

export const EL = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const DL = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const Send = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22,2 15,22 11,13 2,9" />
  </svg>
);

export const Check = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

export const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
