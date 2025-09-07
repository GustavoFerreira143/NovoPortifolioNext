'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  Modal: boolean;
  abreModal: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(true);
  const [Modal, setModal] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);
  const abreModal = () => setModal(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, Modal, abreModal }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme deve ser usado dentro de ThemeProvider");
  return context;
};
