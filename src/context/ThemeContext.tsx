import React, { createContext, useState } from 'react';
import { THEMES, Theme, ThemeName } from '../theme';

export const ThemeContext = createContext<Theme>(THEMES.dark);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName] = useState<ThemeName>('dark');
  return (
    <ThemeContext.Provider value={THEMES[themeName]}>
      {children}
    </ThemeContext.Provider>
  );
}
