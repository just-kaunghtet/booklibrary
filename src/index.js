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
  import allbooksText from './data text files/allbooks.txt'

  function Render() {
    const [condition,setCondition]=useState(false)
    const handleLoginResult = (result) => {
      setCondition(result.success)
   };
   console.log(condition)

   const [allbooks1, setAllBooks1] = useState([])
   

    useEffect(() => {
    fetch(allbooksText)
      .then(r => {
        if (!r.ok) {
          throw new Error(`HTTP error! status: ${r.status}`);
        }
        return r.text();
      })
      .then(allbooksText => {
        try {
          setAllBooks1(JSON.parse(allbooksText));
          // con
        } catch (e) {
          console.error("Could not parse JSON", e);
        }
      })
      .catch(e => console.error("Fetch error", e));
  }, []);

  

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
  <Provider store={store}>
    <Render/>
  </Provider>
    
);

