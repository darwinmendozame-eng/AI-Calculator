export class CalculatorPresenter {
  constructor(interactor) {
    this.interactor = interactor;
    this.display = '0';
    this.expression = '';
    this.previousValue = null;
    this.currentOperator = null;
    this.waitingForOperand = false;
    this.hasDecimal = false;
  }

  onDigit(digit) {
    if (this.waitingForOperand) {
      this.display = digit;
      this.waitingForOperand = false;
      this.hasDecimal = false;
    } else if (digit === '0' && this.display === '0') {
      return;
    } else if (this.display.replace('-', '').length >= 9) {
      return;
    } else {
      this.display = this.display === '0' ? digit : this.display + digit;
    }
  }

  onOperator(operator) {
    const currentValue = parseFloat(this.display);

    if (this.previousValue === null) {
      this.previousValue = currentValue;
    } else if (this.currentOperator && !this.waitingForOperand) {
      const result = this.interactor.calculate(this.previousValue, currentValue, this.currentOperator);
      if (result === 'Error') {
        this.display = 'Error';
        this.expression = '';
        this.previousValue = null;
        this.currentOperator = null;
        this.waitingForOperand = false;
        return;
      }
      this.display = String(result);
      this.previousValue = result;
    }

    this.expression = `${this.previousValue} ${operator}`;
    this.currentOperator = operator;
    this.waitingForOperand = true;
    this.hasDecimal = false;
  }

  onFunction(func) {
    switch (func) {
      case 'AC':
        this.display = '0';
        this.expression = '';
        this.previousValue = null;
        this.currentOperator = null;
        this.waitingForOperand = false;
        this.hasDecimal = false;
        break;
      case '+/-':
        if (this.display !== '0') {
          if (this.display.startsWith('-')) {
            this.display = this.display.substring(1);
          } else {
            this.display = '-' + this.display;
          }
        }
        break;
      case '%':
        const value = parseFloat(this.display);
        this.display = String(value / 100);
        this.hasDecimal = this.display.includes('.');
        break;
    }
  }

  onEquals() {
    if (this.currentOperator && this.previousValue !== null) {
      const currentValue = parseFloat(this.display);
      const result = this.interactor.calculate(this.previousValue, currentValue, this.currentOperator);

      if (result === 'Error') {
        this.display = 'Error';
        this.expression = '';
        this.previousValue = null;
        this.currentOperator = null;
        this.waitingForOperand = false;
        return;
      }

      this.expression = `${this.previousValue} ${this.currentOperator} ${currentValue} =`;
      this.display = String(result);
      this.previousValue = null;
      this.currentOperator = null;
      this.waitingForOperand = true;
      this.hasDecimal = false;
    }
  }

  getDisplay() {
    return this.display;
  }

  getExpression() {
    return this.expression;
  }
}
