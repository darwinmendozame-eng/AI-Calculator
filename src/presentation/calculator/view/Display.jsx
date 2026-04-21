import React from 'react';

interface DisplayProps {
  expression: string;
  result: string;
  theme: any;
}

export const Display: React.FC<DisplayProps> = ({ expression, result, theme }) => {
  return (
    <div className={`w-full ${theme.background} px-6 py-8 text-right`}>
      <div className={`${theme.textWhite} text-sm h-6 opacity-70`}>
        {expression}
      </div>
      <div className={`${theme.textWhite} text-5xl font-light`}>
        {result}
      </div>
    </div>
  );
};
