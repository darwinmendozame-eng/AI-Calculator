# AI-Calculator

A modern calculator application built with React and TypeScript, using Clean Architecture and VIPER architecture patterns.

## Table of Contents

1. [Architecture](#architecture)
2. [VIPER Architecture](#viper-architecture)
3. [Project Structure](#project-structure)
4. [Data Flow](#data-flow)
5. [Getting Started](#getting-started)

---

## Architecture

This project follows **Clean Architecture** principles, implementing the **VIPER** pattern. These architectures are **framework-agnostic** — they can be applied to any framework or library (React, Angular, Vue, iOS, Android, etc.) because they define patterns for organizing code based on separation of concerns, not specific framework features.

### Why VIPER?

- **Separation of concerns** — Each component has a single responsibility
- **Testability** — Easy to unit test each layer independently
- **Scalability** — New features can be added without breaking existing code
- **Maintainability** — Code is organized in a predictable way

---

## VIPER Architecture

VIPER is a Clean Architecture implementation with 5 layers:

### V - View
- UI components only
- No business logic
- Communicates with Presenter
- Handles user events

```typescript
// Example: calculator.view.tsx
export const CalculatorView: React.FC<ICalculatorViewProps> = ({ presenter }) => {
  const [display, setDisplay] = useState('0');

  const handleDigit = (digit: string) => {
    presenter.onDigit(digit);
  };

  return (/* JSX */);
};
```

### I - Interactor
- Pure business logic
- No UI knowledge
- Handles use cases
- API consumption only

```typescript
// Example: calculator.interactor.ts
export class CalculatorInteractor implements ICalculatorInteractor {
  public evaluate(expression: string): number {
    // Pure calculation logic
    return evaluateExpression(expression);
  }
}
```

### P - Presenter
- Coordinates View and Interactor
- Prepares data for the view
- Handles UI events
- Contains presentation logic

```typescript
// Example: calculator.presenter.ts
export class CalculatorPresenter implements ICalculatorPresenter {
  public onDigit(digit: string): void {
    // Update display logic
    this.view.setDisplay(this.view.display + digit);
  }
}
```

### E - Entity
- Data models
- Domain objects

```typescript
// Example: calculator.types.ts
export interface CalculationResult {
  expression: string;
  result: number;
  timestamp: Date;
}
```

### R - Router
- Navigation between screens
- Handles transitions and parameters

---

## Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Root component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
│
├── domain/                       # Domain layer (Entities)
│   ├── entities/                 # Core data models
│   │   └── calculation.entity.ts
│   └── types/                    # Type definitions
│
├── application/                  # Application layer
│   ├── interfaces/               # Contracts
│   │   └── calculator.interface.ts
│   └── services/                 # API services
│
├── core/                         # Core functionality
│   ├── constants/                # App constants
│   ├── utils/                    # Utility functions
│   └── pipes/                    # Custom pipes
│
├── presentation/                 # UI layer (VIPER)
│   ├── calculator/               # Calculator module
│   │   ├── view/                 # V - View components
│   │   ├── interactor/           # I - Business logic
│   │   ├── presenter/            # P - Coordinator
│   │   ├── entity/               # E - Models
│   │   └── router/               # R - Navigation
│   └── shared/                   # Shared UI components
│
└── common/                       # Common utilities
    └── utils/                    # Helper functions
```

---

## Data Flow

### 1. User Input
```
User Click → View → Presenter.onDigit() → Interactor.evaluate()
```

### 2. Display Update
```
Interactor Result → Presenter → View.setDisplay()
```

### 3. Error Handling
```
Error → Interactor → Presenter.handleError() → View.showError()
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Tech Stack

- **React** — UI Library
- **TypeScript** — Language
- **Vite** — Build tool
- **VIPER** — Architecture pattern
- **Clean Architecture** — Design principles
