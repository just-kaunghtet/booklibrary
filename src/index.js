import React, { useEffect, useState } from 'react';
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
  //import { createClient } from '@supabase/supabase-js';
  import allBookList from './data text files/allbooks.json'

// const supabaseUrl = 'https://wlgjlhrhiqjaxqwfhoyk.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZ2psaHJoaXFqYXhxd2Zob3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1NDA3ODgsImV4cCI6MjAwNDExNjc4OH0.C5IZL4_Fwsl4WT1ojFA0bia-vuWTibH1WoeqCRCmCQ0';

// const supabase = createClient(supabaseUrl, supabaseKey);
// const tableName = 'books';

  function Render() {
    const [condition,setCondition]=useState(false)
    const handleLoginResult = (result) => {
      setCondition(result.success)
   };
   console.log(condition)
   const [allbooks1, setAllBooks1] = useState([])
   useEffect(()=>
   {
    setAllBooks1(allBookList)
   },[])
    return (
        <RouterProvider router={
          createBrowserRouter(createRoutesFromElements(
                <Route path="/" element={<App/>}>
                  <Route path="/" element={<Login onLoginResult={handleLoginResult}/>}/>
                  <Route path="/book" element={<Home/>}>
                    <Route path="/book" element={<Book allbooks1={allbooks1} /> }/>
                    <Route path="/book/:id" element={<BookDetail books={allbooks1}/>}/> 
                    <Route path="/book/category/:category" element={<FilteredBooks allbooks1={allbooks1}/>}/> 
                    <Route path="/book/title/:title" element={<SearchBook Abooks={allbooks1}/>}/>  
                  </Route>
                </Route> 
            ))
        } />
    );
  }
ReactDOM.createRoot(document.getElementById('root')).render(
    <Render/>
);

