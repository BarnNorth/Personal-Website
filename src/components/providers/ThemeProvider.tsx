import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Simple Theme Provider - light mode only
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>;
}
