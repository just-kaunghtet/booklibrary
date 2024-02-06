import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import allbooksList from '../data text files/allbooks.json'
import { BrowserRouter } from 'react-router-dom';
import FilteredBooks from '../FilteredBooks';
import categoryList from '../data text files/categoryList.json'
const mockedBooks=allbooksList;
const mockedCats=categoryList;
const randomNumber = Math.floor(Math.random() * 16);
test('renders the filtered books', async () => {
  render(<BrowserRouter>
            <FilteredBooks allbooks1={mockedBooks} propCat={mockedCats[randomNumber].catTitle} />
        </BrowserRouter>);
    const filterBooks= await screen.findAllByRole("link");
    expect(filterBooks.length).toBeGreaterThanOrEqual(0);
});
test('clickable filtered books',async()=>{
  render(<BrowserRouter>
    <FilteredBooks allbooks1={mockedBooks} propCat={mockedCats[randomNumber].catTitle} />
</BrowserRouter>);
const filterBooks= await screen.findAllByRole("link");
filterBooks.forEach((link, index) => {
  fireEvent.click(link);
  const filLink=link.getAttribute("href")
  expect(window.location.pathname).toBe(`${filLink}`);
});
})

