import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
//import userEvent from '@testing-library/user-event';
import allbooksList from '../data text files/allbooks.json'
import { BrowserRouter } from 'react-router-dom';
import Book from '../Book';

const mockedBooks=allbooksList;
test('renders books under the main component', async () => {
  render(<BrowserRouter>
            <Book allbooks1={mockedBooks} />
        </BrowserRouter>);
  //screen.debug();
  const  bookList =await screen.findByText(/BOOK LIST/i);
  expect(bookList).toBeInTheDocument();
  const book= await screen.findAllByRole('link');
  expect (book).toHaveLength(15);
});
test('navigates to the detail of the clicked book',async()=>{
    render(<BrowserRouter>
        <Book allbooks1={mockedBooks} />
    </BrowserRouter>);
    const firstBook= await screen.findByAltText(mockedBooks[1].dataId)
    fireEvent.click(firstBook);
    expect(window.location.pathname).toBe(`/book/${mockedBooks[1].dataId}`);
})
test('renders the correct pagination',async()=>{
    render(<BrowserRouter>
        <Book allbooks1={mockedBooks} />
    </BrowserRouter>);
    const pagination=await screen.findByRole("navigation")
    fireEvent.click(pagination);
})


