import Header from "./Header"
import { useState } from "react"
import Category from "./Category"
import { Outlet } from "react-router-dom"
export default function Home()
{
    const [darkMode, setDarkMode]= useState(true)
    function toggleDarkMode()
    {
        setDarkMode(prevMode => !prevMode)
    }
    return(
            <div className="Home">
             <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                 <div className={`web-body ${darkMode ? "dark": ""}`}>
                     <Category  />
                     <Outlet />
                 </div> 
             </div> 
            )
}