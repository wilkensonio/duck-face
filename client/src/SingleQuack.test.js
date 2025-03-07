import React from 'react';
import { render, screen } from '@testing-library/react';
import SingleQuack from './SingleQuack';
import '@testing-library/jest-dom';

describe('Single Quack Component', () => {
  test('renders a quack', () => {
    render(
      <SingleQuack
        key="1"
        content="This is a test quack"
        author="Test Author"
      />
    );
    const quackElement = screen.getByText(/test quack/i);
    expect(quackElement).toBeInTheDocument();
  });
});
