import React, { useState } from 'react';
import { CalculatorView } from './presentation/calculator/view';
import { CalculatorPresenter } from './presentation/calculator/presenter';
import { CalculatorInteractor } from './presentation/calculator/interactor';
import { OPERATORS, NUMBERS, DARK_THEME, LIGHT_THEME } from './core/constants';

function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? DARK_THEME : LIGHT_THEME;

  const interactor = new CalculatorInteractor();
  const presenter = new CalculatorPresenter(interactor);

  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleButtonClick = (value) => {
    if (value === 'AC' || value === '+/-' || value === '%') {
      presenter.onFunction(value);
    } else if (OPERATORS.includes(value)) {
      presenter.onOperator(value);
      setExpression(presenter.getExpression());
    } else if (value === '=') {
      presenter.onEquals();
      setExpression(presenter.getExpression());
    } else if (NUMBERS.includes(value) || value === '.') {
      if (value === '.') {
        presenter.onDigit('.');
      } else {
        presenter.onDigit(value);
      }
    }

    setResult(presenter.getDisplay());
  };

  return (
    <div className={`min-h-screen ${theme.bodyBg} flex items-center justify-center`}>
      <CalculatorView
        expression={expression}
        result={result}
        onButtonClick={handleButtonClick}
        theme={theme}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />
    </div>
  );
}

export default App;
