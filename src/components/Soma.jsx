import React, { useState } from 'react';

function Soma () {
  const [num1, Num1] = useState(3);
  const [num2, Num2] = useState(4);
  const [resultado, setResultado] = useState(0);

  const calcularSoma = () => {
    setResultado(num1 + num2);
  };

  return (
    <div>
      <p>Número 1: {num1}</p>
      <p>Número 2: {num2}</p>
      <button onClick={calcularSoma}>Calcular Soma</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Soma;