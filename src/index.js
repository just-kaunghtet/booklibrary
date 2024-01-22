import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
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
  import Home from './Home';
  import App from './App';
  import Login from './Login';
  
  function Render() {
    const [condition,setCondition]=useState(false)
    const handleLoginResult = (result) => {
      setCondition(result.success)
   };
   const [darkMode, setDarkMode]= useState(true)
    function toggleDarkMode()
    {
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <RouterProvider router={
          createBrowserRouter(createRoutesFromElements(
                <Route path="/" element={<App/>}>
                  <Route path="/" element={<Login onLoginResult={handleLoginResult} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}/>
                  <Route path="/book" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
                    <Route path="/book" element={<Book darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}/>
                    <Route path="/book/:id" element={<BookDetail/>}/> 
                    <Route path="/book/category/:category" element={<FilteredBooks />}/> 
                    <Route path="/book/title/:title" element={<SearchBook />}/>  
                  </Route>
                </Route> 
            ))
        } />
    );
  }
ReactDOM.createRoot(document.getElementById('root')).render(
    <Render />
);

