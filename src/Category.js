import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
export default function Category({catList})
{
    const [categories,setCategories]=useState([])
    useEffect(() => {   
    if(catList)
    {
        setCategories(catList);
    }
    }, [catList])
   return(
        <div className="book-categories">
        {categories.map(category=>(
        <Link className="cat-attr" to={`/book/category/${encodeURIComponent(category.catTitle)}`} key={category.catUrl}>
            <img className="cat-img" src={category.catImage} alt={category.catTitle} title={category.catTitle}/>
            <p className="cat-title">{category.catTitle}</p>
        </Link>
        ))}
      </div>
   )
}