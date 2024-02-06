import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import allbooksList from '../data text files/allbooks.json'
import { BrowserRouter } from 'react-router-dom';
import SearchBook from '../SearchBook';
const mockedBooks=allbooksList;
const searchTitle="How to";
test('renders the search results', async () => {
  render(<BrowserRouter>
            <SearchBook Abooks={mockedBooks} propsTitle={searchTitle} />
        </BrowserRouter>);
    const searchedBooks= await screen.findAllByRole("link");
    expect(searchedBooks.length).toBeGreaterThanOrEqual(0);
});
test('clickable filtered books',async()=>{
  render(<BrowserRouter>
    <SearchBook Abooks={mockedBooks} propsTitle={searchTitle} />
      </BrowserRouter>);
const filterBooks= await screen.findAllByRole("link");
filterBooks.forEach((link, index) => {
  fireEvent.click(link);
  const filLink=link.getAttribute("href")
  expect(window.location.pathname).toBe(`${filLink}`);
});
})

