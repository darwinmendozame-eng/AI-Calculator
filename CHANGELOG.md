# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-04-21

### Added

#### Funcionalidad de Calculadora

Implementación de la lógica de cálculos en la calculadora.

### Lógica Implementada

**CalculatorInteractor** - Operaciones matemáticas:
- Suma (+)
- Resta (−)
- Multiplicación (×)
- División (÷)
- Manejo de división por cero → retorna "Error"

**CalculatorPresenter** - Coordinación y estado:
- `onDigit()`: Manejo de números, limita a 9 dígitos, evita ceros repetidos
- `onOperator()`: Encadenamiento de operaciones, cálculos parciales
- `onFunction()`: AC (limpia todo), +/- (cambio de signo), % (porcentaje)
- `onEquals()`: Ejecución de cálculo final

### Componentes Actualizados

- **App.js**: Usa `useMemo` para mantener presenter estable entre renders
- Flujo de datos: View → App → Presenter → Interactor → Presenter → View

---

## [1.0.0] - 2026-04-21

### Added

#### Maquetación de Calculadora Básica

Estructura inicial del proyecto AI-Calculator con enfoque en la maquetación visual siguiendo arquitectura VIPER.

### Herramientas y Librerías

| Librería | Versión | Propósito |
|----------|---------|-----------|
| React | ^18.x | Librería principal para UI |
| react-scripts | ^5.x | Configuración y build de CRA |
| tailwindcss | ^3.x | Framework de estilos CSS |
| postcss | ^8.x | Procesador de CSS |
| autoprefixer | ^10.x | Prefijos CSS automáticos |

### Estructura VIPER Creada

```
src/
├── presentation/calculator/
│   ├── view/
│   │   ├── CalculatorView.jsx    # Componente principal
│   │   ├── Display.jsx           # Display de resultado
│   │   ├── Button.jsx           # Botón individual
│   │   ├── ButtonGrid.jsx       # Grid de botones
│   │   ├── ThemeToggle.jsx      # Toggle tema claro/oscuro
│   │   └── Header.jsx           # Encabezado con toggle
│   ├── interactor/
│   │   └── CalculatorInteractor.js  # Lógica de cálculos
│   └── presenter/
│       └── CalculatorPresenter.js    # Coordinación View-Interactor
├── core/constants/
│   └── calculator.constants.js   # Colores, botones, operadores, temas
└── domain/entities/
    └── calculation.entity.js    # Modelos de datos
```

### Componentes UI

- **CalculatorView**: Contenedor principal con sombra y borde
- **Display**: Muestra expresión y resultado
- **ButtonGrid**: Distribución de botones 4x4
- **Button**: Botón individual con estilos según tipo
- **ThemeToggle**: Iconos sol/luna para cambiar tema
- **Header**: Encabezado con toggle de tema

### Estilos (Tailwind CSS)

**Tema Oscuro:**
- Fondo body: `#0d0d0d`
- Fondo calculadora: `#1a1a1a`
- Botones números: `#4a4a4a`
- Botones operadores/equals: `#FF6B35` (naranja)
- Botones función: `#2d2d2d`
- Sombra con acentos naranjas

**Tema Claro:**
- Fondo body: `#e8e8e8`
- Fondo calculadora: `#f5f5f5`
- Botones números: `#e0e0e0`
- Botones operadores/equals: `#FF6B35`
- Botones función: `#d1d1d1`

### Patrón Arquitectónico

**VIPER** (View, Interactor, Presenter, Entity, Router):
- Separación clara de responsabilidades
- View solo maneja presentación
- Interactor contiene lógica de negocio
- Presenter coordina flujo de datos
- Entities definen modelos de dominio

### Notas

- Responsive: Diseño fijo en 320px de ancho
- Tipo de datos: JavaScript
