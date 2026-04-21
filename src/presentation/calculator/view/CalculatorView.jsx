import React from 'react';
import { Display } from './Display';
import { ButtonGrid } from './ButtonGrid';
import { Header } from './Header';

interface CalculatorViewProps {
  expression: string;
  result: string;
  onButtonClick: (value: string) => void;
  theme: any;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const CalculatorView: React.FC<CalculatorViewProps> = ({
  expression,
  result,
  onButtonClick,
  theme,
  isDark,
  onToggleTheme,
}) => {
  return (
    <div className={`w-80 rounded-3xl overflow-hidden ${theme.shadow} ${theme.border} border`}>
      <Header theme={theme} isDark={isDark} onToggleTheme={onToggleTheme} />
      <Display expression={expression} result={result} theme={theme} />
      <ButtonGrid onButtonClick={onButtonClick} theme={theme} />
    </div>
  );
};
