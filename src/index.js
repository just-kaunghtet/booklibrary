import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom"
  import Book from './Book'
  import BookDetail from './BookDetail';
  import FilteredBooks from './FilteredBooks';
  import SearchBook from './SearchBook';
  function Render() {
    return (
        <RouterProvider router={
          createBrowserRouter(createRoutesFromElements(
            <Route path="" element={<App/>}>
                <Route index element={<Book/>}/>
                <Route path="/book/:id" element={<BookDetail/>}/> 
                <Route path="/book/category/:category" element={<FilteredBooks />}/> 
                <Route path="/book/title/:title" element={<SearchBook />}/> 
            </Route>
            ))
        } />
    );
  }
ReactDOM.createRoot(document.getElementById('root')).render(
    <Render />
);

