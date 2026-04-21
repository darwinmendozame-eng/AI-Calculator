import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  theme: any;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, isDark, onToggleTheme }) => {
  return (
    <div className={`w-full ${theme.background} px-6 py-4 flex justify-end`}>
      <ThemeToggle isDark={isDark} onToggle={onToggleTheme} theme={theme} />
    </div>
  );
};
