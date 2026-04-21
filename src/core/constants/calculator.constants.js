export const DARK_THEME = {
  background: 'bg-[#1a1a1a]',
  buttonDark: 'bg-[#2d2d2d]',
  buttonLight: 'bg-[#4a4a4a]',
  buttonOrange: 'bg-[#FF6B35]',
  textWhite: 'text-white',
  textOrange: 'text-[#FF6B35]',
  textDark: 'text-[#1a1a1a]',
  bodyBg: 'bg-[#0d0d0d]',
  shadow: 'shadow-[0_25px_50px_-12px_rgba(255,107,53,0.5)]',
  border: 'border-[#FF6B35]/20',
  toggleBg: 'bg-[#2d2d2d]',
};

export const LIGHT_THEME = {
  background: 'bg-[#f5f5f5]',
  buttonDark: 'bg-[#d1d1d1]',
  buttonLight: 'bg-[#e0e0e0]',
  buttonOrange: 'bg-[#FF6B35]',
  textWhite: 'text-[#1a1a1a]',
  textOrange: 'text-[#FF6B35]',
  textDark: 'text-[#1a1a1a]',
  bodyBg: 'bg-[#e8e8e8]',
  shadow: 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)]',
  border: 'border-[#FF6B35]/30',
  toggleBg: 'bg-[#d1d1d1]',
};

export const BUTTONS = {
  TOP_ROW: [
    { label: 'AC', type: 'function' },
    { label: '+/-', type: 'function' },
    { label: '%', type: 'operator' },
  ],
  MAIN_GRID: [
    [
      { label: '7', type: 'number' },
      { label: '8', type: 'number' },
      { label: '9', type: 'operator' },
      { label: '÷', type: 'operator' },
    ],
    [
      { label: '4', type: 'number' },
      { label: '5', type: 'number' },
      { label: '6', type: 'operator' },
      { label: '×', type: 'operator' },
    ],
    [
      { label: '1', type: 'number' },
      { label: '2', type: 'number' },
      { label: '3', type: 'operator' },
      { label: '−', type: 'operator' },
    ],
    [
      { label: '0', type: 'number', wide: true },
      { label: '.', type: 'number' },
      { label: '=', type: 'equals' },
      { label: '+', type: 'operator' },
    ],
  ],
};

export const OPERATORS = ['÷', '×', '−', '+'];
export const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
