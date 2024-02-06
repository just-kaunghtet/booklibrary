import Header from "./Header"
import { useState,useEffect } from "react"
import Category from "./Category"
import { Outlet } from "react-router-dom"
import catText from './data text files/categoryList.txt'
export default function Home()
{
    const [darkMode, setDarkMode]= useState(false)
    const [categories1,setCategories1]=useState([])
    function toggleDarkMode()
    {
        setDarkMode(prevMode => !prevMode)
    }
    useEffect(() => {   
        fetch(catText)
          .then(res => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.text();
          })
          .then(cattext => {
            try {
              setCategories1(JSON.parse(cattext));
              // con
            } catch (e) {
              console.error("Could not parse JSON", e);
            }
          })
          .catch(e => console.error("Fetch error", e));
        }, [])
    return(
            <div className="Home">
             <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                 <div className={`web-body ${darkMode ? "dark": ""}`}>
                     <Category catList={categories1} />
                     <Outlet />
                 </div> 
             </div> 
            )
}