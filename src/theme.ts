export interface Theme {
  bg: string;
  bgAlt: string;
  text: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  accentText: string;
  border: string;
  cardBg: string;
  navBg: string;
  navBorder: string;
  shadow: string;
  shadowHover: string;
  tagBg: string;
  name: string;
}

export const THEMES: Record<string, Theme> = {
  dark: {
    bg: '#07080F',
    bgAlt: '#0C0F1C',
    text: '#FFFFFF',
    textMuted: '#FFFFFF',
    accent: '#4B96FF',
    accentHover: '#2B78F0',
    accentText: '#FFFFFF',
    border: 'rgba(75,150,255,0.18)',
    cardBg: '#111524',
    navBg: 'rgba(7,8,15,0.96)',
    navBorder: 'rgba(75,150,255,0.14)',
    shadow: '0 2px 20px rgba(0,0,0,0.55)',
    shadowHover: '0 10px 40px rgba(75,150,255,0.2)',
    tagBg: 'rgba(75,150,255,0.1)',
    name: 'Dark',
  },
  ink: {
    bg: '#F9F8F5',
    bgAlt: '#ECEAE5',
    text: '#1A1208',
    textMuted: '#6B6258',
    accent: '#C08A14',
    accentHover: '#9E7010',
    accentText: '#FFFFFF',
    border: 'rgba(192,138,20,0.18)',
    cardBg: '#FFFFFF',
    navBg: 'rgba(249,248,245,0.95)',
    navBorder: 'rgba(192,138,20,0.12)',
    shadow: '0 2px 14px rgba(192,138,20,0.09)',
    shadowHover: '0 10px 32px rgba(192,138,20,0.18)',
    tagBg: 'rgba(192,138,20,0.09)',
    name: 'Ink',
  },
  ember: {
    bg: '#FDF8F6',
    bgAlt: '#FDEEE7',
    text: '#1A0C07',
    textMuted: '#8A5D4C',
    accent: '#E84C1E',
    accentHover: '#C83A10',
    accentText: '#FFFFFF',
    border: 'rgba(232,76,30,0.18)',
    cardBg: '#FFFFFF',
    navBg: 'rgba(253,248,246,0.96)',
    navBorder: 'rgba(232,76,30,0.12)',
    shadow: '0 2px 14px rgba(232,76,30,0.10)',
    shadowHover: '0 10px 32px rgba(232,76,30,0.22)',
    tagBg: 'rgba(232,76,30,0.09)',
    name: 'Ember',
  },
  slate: {
    bg: '#F4F7FF',
    bgAlt: '#E5ECFF',
    text: '#0B1540',
    textMuted: '#5468A0',
    accent: '#2563EB',
    accentHover: '#1A4FD8',
    accentText: '#FFFFFF',
    border: 'rgba(37,99,235,0.16)',
    cardBg: '#FFFFFF',
    navBg: 'rgba(244,247,255,0.96)',
    navBorder: 'rgba(37,99,235,0.12)',
    shadow: '0 2px 14px rgba(37,99,235,0.10)',
    shadowHover: '0 10px 32px rgba(37,99,235,0.22)',
    tagBg: 'rgba(37,99,235,0.09)',
    name: 'Slate',
  },
};

export type ThemeName = keyof typeof THEMES;
