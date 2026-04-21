export interface CalculationResult {
  expression: string;
  result: number;
  timestamp: Date;
}

export interface CalculatorState {
  display: string;
  expression: string;
  result: number | null;
  waitingForOperand: boolean;
}
