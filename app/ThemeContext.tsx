'use client'

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [isDark, setIsDark] = useState(true);

  const [Modal, setModal] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  };

  const abreModal = () => {
    setModal(prev => !prev)
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, Modal, abreModal  }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);