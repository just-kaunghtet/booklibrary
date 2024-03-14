import Header from "./Header"
import { useState,useEffect } from "react"
import Category from "./Category"
import { Outlet } from "react-router-dom"
// import { createClient } from '@supabase/supabase-js';
import catList from './data text files/categoryList.json'
// const supabaseUrl = 'https://wlgjlhrhiqjaxqwfhoyk.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZ2psaHJoaXFqYXhxd2Zob3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1NDA3ODgsImV4cCI6MjAwNDExNjc4OH0.C5IZL4_Fwsl4WT1ojFA0bia-vuWTibH1WoeqCRCmCQ0';
// const supabase = createClient(supabaseUrl, supabaseKey);
// const tableName = 'categories';

export default function Home()
{
    const [darkMode, setDarkMode]= useState(false)
    const [categories1,setCategories1]=useState([])
    function toggleDarkMode()
    {
        setDarkMode(prevMode => !prevMode)
    }
    useEffect(()=>
    {
        setCategories1(catList)
    },[])
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