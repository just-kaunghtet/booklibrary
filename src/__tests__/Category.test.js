import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Category from '../Category';
import catList from '../data text files/categoryList.json';
import '@testing-library/jest-dom/extend-expect';
const mockedCategories=catList;
describe('Category component', () => {
  test('renders category list', async () => {
    render(
      <BrowserRouter>
        <Category  catList={mockedCategories}/>
      </BrowserRouter>
    );
    const categoryLinks = await screen.findAllByRole('link');
    expect(categoryLinks).toHaveLength(16);
  });

  test('navigates to category page', async () => {
    render(
      <BrowserRouter>
        <Category  catList={mockedCategories}/>
      </BrowserRouter>
    );
    const categoryLinks = await screen.findAllByRole('link');
    categoryLinks.forEach((link, index) => {
      fireEvent.click(link);
      expect(window.location.pathname).toBe(`/book/category/${encodeURIComponent(mockedCategories[index].catTitle)}`);
      expect(link).toHaveTextContent(mockedCategories[index].catTitle);
    });
  });
});