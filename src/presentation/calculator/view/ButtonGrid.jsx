import React from 'react';
import { Button } from './Button';
import { BUTTONS } from '../../../core/constants';

interface ButtonGridProps {
  onButtonClick: (value: string) => void;
  theme: any;
}

export const ButtonGrid: React.FC<ButtonGridProps> = ({ onButtonClick, theme }) => {
  return (
    <div className={`p-4 space-y-4 ${theme.background}`}>
      {/* Top row: AC, +/-, % */}
      <div className="flex gap-4">
        {BUTTONS.TOP_ROW.map((btn) => (
          <Button
            key={btn.label}
            label={btn.label}
            type={btn.type}
            onClick={onButtonClick}
            theme={theme}
          />
        ))}
      </div>

      {/* Main grid */}
      {BUTTONS.MAIN_GRID.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4">
          {row.map((btn) => (
            <Button
              key={btn.label}
              label={btn.label}
              type={btn.type}
              wide={'wide' in btn && btn.wide}
              onClick={onButtonClick}
              theme={theme}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
