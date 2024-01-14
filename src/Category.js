import catText from './data text files/categoryList.txt'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
export default function Category(props)
{
    const [categories,setCategories]=useState([])
    useEffect(() => {   
    fetch(catText)
    .then(res => res.text())
    .then(cattext => setCategories(JSON.parse(cattext)))
    }, [])
   return(
        <div className={`book-categories ${props.darkMode ? "dark": ""}`}>
        {categories.map(category=>(
        <Link className="cat-attr" to={`/book/category/${category.catTitle}`} key={category.catUrl}>
            <img className="cat-img" src={category.catImage} alt={category.catTitle} title={category.catTitle}/>
            <p className="cat-title">{category.catTitle}</p>
        </Link>
        ))}
      </div>
   )
}