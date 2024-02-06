import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
const dark=false
const mockToggleDarkMode = jest.fn();
const title="How to"
test('renders Header component with search bar', () => {
  render(
    <Router>
      <Header darkMode={dark} toggleDarkMode={mockToggleDarkMode}/>
    </Router>
  );
  screen.debug();  
  const headerTitle = screen.getByText('BOOK LIBRARY');
  expect(headerTitle).toBeInTheDocument();

  const searchInput = screen.getByLabelText('Enter a book name');
  expect(searchInput).toBeInTheDocument();

  const searchButton = screen.getByText('Search');
  expect(searchButton).toBeInTheDocument();
  fireEvent.change(searchInput, { target: { value: title } });
  fireEvent.click(searchButton);
  expect(window.location.pathname).toBe(`/book/title/${encodeURIComponent(title)}`);

  const toggleSlider = screen.getByTestId('toggle-slider');
  fireEvent.click(toggleSlider);
  expect(mockToggleDarkMode).toHaveBeenCalled();
});
