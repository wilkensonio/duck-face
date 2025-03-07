import React from 'react';
import { render, screen } from '@testing-library/react';
import DuckAd from './DuckAd.test';
import '@testing-library/jest-dom';

describe('Duck Ad', () => {
  test('renders an ad', () => {
    render(<DuckAd text="buy more ducks!" />);
    const duckAdElement = screen.getByText(/buy more ducks!/i);
    expect(duckAdElement).toBeInTheDocument();
  });
});
