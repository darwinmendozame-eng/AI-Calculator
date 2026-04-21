export class CalculatorInteractor {
  calculate(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '−':
        return a - b;
      case '×':
        return a * b;
      case '÷':
        if (b === 0) {
          return 'Error';
        }
        return a / b;
      default:
        return b;
    }
  }
}
