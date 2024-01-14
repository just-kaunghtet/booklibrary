
import { Outlet } from "react-router-dom"
import Header from "./Header"

import Category from "./Category"
export default function App() {
    return (
      <div className="App">
        <Header/>
        <div className='web-body'>
            <Category/>
            <Outlet/>
        </div>
      </div> 
    )
}