export class CalculatorPresenter {
  constructor(interactor) {
    this.interactor = interactor;
    this.display = '0';
    this.expression = '';
    this.previousValue = null;
    this.currentOperator = null;
    this.waitingForOperand = false;
  }

  onDigit(digit) {
    if (this.waitingForOperand) {
      this.display = digit;
      this.waitingForOperand = false;
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
      this.display = String(result);
      this.previousValue = result;
    }

    this.expression = `${this.previousValue} ${operator}`;
    this.currentOperator = operator;
    this.waitingForOperand = true;
  }

  onFunction(func) {
    switch (func) {
      case 'AC':
        this.display = '0';
        this.expression = '';
        this.previousValue = null;
        this.currentOperator = null;
        this.waitingForOperand = false;
        break;
      case '+/-':
        this.display = String(parseFloat(this.display) * -1);
        break;
      case '%':
        this.display = String(parseFloat(this.display) / 100);
        break;
    }
  }

  onEquals() {
    if (this.currentOperator && this.previousValue !== null) {
      const currentValue = parseFloat(this.display);
      const result = this.interactor.calculate(this.previousValue, currentValue, this.currentOperator);
      this.expression = `${this.previousValue} ${this.currentOperator} ${currentValue} =`;
      this.display = String(result);
      this.previousValue = null;
      this.currentOperator = null;
      this.waitingForOperand = true;
    }
  }

  getDisplay() {
    return this.display;
  }

  getExpression() {
    return this.expression;
  }
}
