import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Soma from './Soma';

  test('deve renderizar o componente corretamente', () => {
    const { getByText } = render(<Soma />);
  
    expect(getByText('Número 1: 3')).toBeInTheDocument();
    expect(getByText('Número 2: 4')).toBeInTheDocument();
    expect(getByText('Calcular Soma')).toBeInTheDocument();
    expect(getByText('Resultado: 0')).toBeInTheDocument(); 
  });

  test('deve calcular a soma corretamente', () => {
    const { getByText } = render(<Soma />);
  
    fireEvent.click(getByText('Calcular Soma'));
  
    expect(getByText('Resultado: 7')).toBeInTheDocument();
  });