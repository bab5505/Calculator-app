import React, { useState } from 'react';

function Calculator() {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const a = parseFloat(inputA);
    const b = parseFloat(inputB);

    let calculatedResult;
    switch (operation) {
      case '+':
        calculatedResult = a + b;
        break;
      case '-':
        calculatedResult = a - b;
        break;
      case '*':
        calculatedResult = a * b;
        break;
      case '/':
        calculatedResult = b !== 0 ? a / b : "Error: Division by zero!";
        break;
      default:
        calculatedResult = '';
    }

    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={inputA}
        onChange={(e) => setInputA(e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={inputB}
        onChange={(e) => setInputB(e.target.value)}
      />
      <button onClick={handleCalculate}>=</button>
      <div className='result'> {result}</div>
    </div>
  );
}

export default Calculator;
