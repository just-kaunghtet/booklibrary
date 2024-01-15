
import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react"
import Category from "./Category"
export default function App() {
  const [darkMode, setDarkMode]= useState(true)
    function toggleDarkMode()
    {
        setDarkMode(prevMode => !prevMode)
    }
    return (
      <div className="App">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <div className="web-body">
            <Category darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Outlet darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div> 
    )
}