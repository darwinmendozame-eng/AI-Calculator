import React, { useState, useMemo } from 'react';
import { CalculatorView } from './presentation/calculator/view';
import { CalculatorPresenter } from './presentation/calculator/presenter';
import { CalculatorInteractor } from './presentation/calculator/interactor';
import { OPERATORS, NUMBERS, DARK_THEME, LIGHT_THEME } from './core/constants';

function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? DARK_THEME : LIGHT_THEME;

  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('0');

  const interactor = useMemo(() => new CalculatorInteractor(), []);
  const presenter = useMemo(() => new CalculatorPresenter(interactor), [interactor]);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      presenter.onFunction('AC');
      setExpression('');
      setResult(presenter.getDisplay());
    } else if (value === '+/-') {
      presenter.onFunction('+/-');
      setResult(presenter.getDisplay());
    } else if (value === '%') {
      presenter.onFunction('%');
      setResult(presenter.getDisplay());
    } else if (OPERATORS.includes(value)) {
      presenter.onOperator(value);
      setExpression(presenter.getExpression());
      setResult(presenter.getDisplay());
    } else if (value === '=') {
      presenter.onEquals();
      setExpression(presenter.getExpression());
      setResult(presenter.getDisplay());
    } else if (value === '.') {
      presenter.onDigit('.');
      setResult(presenter.getDisplay());
    } else if (NUMBERS.includes(value)) {
      presenter.onDigit(value);
      setResult(presenter.getDisplay());
    }
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
