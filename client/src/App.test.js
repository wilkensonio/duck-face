import 'whatwg-fetch';

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders header, footer, and quack feed', async () => {
    render(<App />);

    expect(screen.getByText(/DuckFace/i)).toBeInTheDocument();
    expect(screen.getByText(/Copyright 2025/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test('fetches and displays quacks', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { _id: '1', content: 'Test Quack', author: 'Test Author' },
          ]),
      })
    );

    render(<App />);

    await waitFor(() =>
      expect(screen.getByText(/Test Quack/i)).toBeInTheDocument()
    );
  });
});
