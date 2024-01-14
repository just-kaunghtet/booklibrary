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
  import { useState } from 'react';
  function Render() {
    const [darkMode, setDarkMode]= useState(true)
    function toggleDarkMode()
    {
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <RouterProvider router={
          createBrowserRouter(createRoutesFromElements(
            <Route path="" element={<App/>}>
                <Route index element={<Book darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/>
                <Route path="/book/:id" element={<BookDetail darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/> 
                <Route path="/book/category/:category" element={<FilteredBooks darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/> 
                <Route path="/book/title/:title" element={<SearchBook darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>}/> 
            </Route>
            ))
        } />
    );
  }
ReactDOM.createRoot(document.getElementById('root')).render(
    <Render />
);

