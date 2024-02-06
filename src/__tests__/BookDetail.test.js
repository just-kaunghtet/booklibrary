import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import allbooksList from '../data text files/allbooks.json'
import { BrowserRouter } from 'react-router-dom';
import BookDetail from '../BookDetail';

const mockedBooks=allbooksList;
const randomNumber = Math.floor(Math.random() * 139);
console.log(randomNumber);
test('renders the detail of a book', async () => {
  render(<BrowserRouter>
            <BookDetail books={mockedBooks} propId={mockedBooks[randomNumber].dataId} />
        </BrowserRouter>);
  const  detailBook =await screen.findByTestId("detail")
  expect(detailBook).toBeInTheDocument();

});

 test('displays recommanded books',async()=>{
  render(<BrowserRouter>
    <BookDetail books={mockedBooks} propId={mockedBooks[randomNumber].dataId} />
</BrowserRouter>);
const suggestedBooks=await screen.findAllByRole("link");
expect(suggestedBooks.length).toBeGreaterThan(0);
 })


