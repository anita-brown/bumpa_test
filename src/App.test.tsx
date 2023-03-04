import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = screen.getByText(/Where in the world/i);
  expect(linkElement).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText(/Where in the world/i)).toBeInTheDocument();
  });
});

test('renders toggle the color scheme between light and dark mode', async () => {
  render(<App />);
  const linkElement = screen.getByText('Light Mode');
  expect(linkElement).toBeInTheDocument();
  await waitFor(() => {
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
  });
});

test('displays the list of countries correctly', async () => {
  const mockData = [
    { name: 'Population', population: 1000000 },
    { name: 'Population', population: 2000000 }
  ];
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData)
    } as Response)
  );

  render(<App />);
});

test('Search for a country using an input field ', async () => {
  const mockData = [
    { name: 'Population', population: 1000000 },
    { name: 'Population', population: 2000000 }
  ];
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData)
    } as Response)
  );
});

test('clicking on a countries from the list navigates to its detail page', async () => {
  const mockData = [
    { name: 'Country', population: 1000000, alpha3Code: 'ABC' },
    { name: 'Country', population: 2000000, alpha3Code: 'DEF' }
  ];
  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData)
    } as Response)
  );

  render(<App />);
});

// write test cases for the app
