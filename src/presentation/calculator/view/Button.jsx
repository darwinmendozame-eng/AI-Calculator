import React from 'react';

interface ButtonProps {
  label: string;
  type: 'number' | 'operator' | 'function' | 'equals';
  wide?: boolean;
  onClick: (value: string) => void;
  theme: any;
}

export const Button: React.FC<ButtonProps> = ({ label, type, wide, onClick, theme }) => {
  const getButtonStyles = () => {
    const base = `h-14 rounded-2xl font-semibold text-xl transition-all duration-150 active:scale-95 flex-1`;

    switch (type) {
      case 'number':
        return `${base} ${theme.buttonLight} ${theme.textWhite}`;
      case 'operator':
        return `${base} ${theme.buttonOrange} ${theme.textWhite}`;
      case 'function':
        return `${base} ${theme.buttonDark} ${theme.textWhite}`;
      case 'equals':
        return `${base} ${theme.buttonOrange} ${theme.textWhite}`;
      default:
        return base;
    }
  };

  return (
    <button
      className={getButtonStyles()}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};
