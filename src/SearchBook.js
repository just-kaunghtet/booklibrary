import { useEffect, useState } from "react"
import allbooksText from './data text files/allbooks.txt'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import { Pagination } from "@mui/material"
export default function SearchBook(props)
{
   const [allbooks, setAllBooks] =useState([])
   const [books, setBooks] = useState([])
   const {title} = useParams();
   const [currentPage, setCurrentPage] = useState(1)
   const [showbook,setShowBook]=useState([])
   const booksPerPage=15
   useEffect(() => {
   fetch(allbooksText)
   .then(r => r.text())
   .then(allbooksText => setAllBooks(JSON.parse(allbooksText)))
   },[])  
   useEffect(()=>{
    const bookObjects = [];
    const searchBook = async () => {
        window.scrollTo({
           top: 0,
           left: 0,
           behavior: "smooth",
         });
         
        for (let i = 0; i < allbooks.length; i++) 
        {
        if(allbooks[i].title.toString().includes(title))
        {
            bookObjects.push({...allbooks[i]});
        }
        }
         setBooks(bookObjects)
        }  
    searchBook(); 
   },[title,allbooks])
   
    useEffect(() => {
    setShowBook(books.slice((currentPage-1) * booksPerPage, currentPage * booksPerPage))
  }, [currentPage,books])
   return(
   <div className={`book-container ${props.darkMode ? "dark": "light"}`}>
   <div className='book-navSection'><h1>BOOK LIST</h1>
   <div><Pagination count={Math.ceil(books.length / booksPerPage)} shape="rounded" siblingCount={0} boundaryCount={2} page={currentPage} onChange={(e,val) => setCurrentPage(val)}/></div>
   </div>
   <main>
   {showbook.map(book=>(
   <Link className='book-info' to={`/book/${book.dataId}`} key={book.dataId}> 
     <img className="book-cover" src={book.coverImage} alt={book.dataId}></img>
     <div className="book-info-detail">
      <div className="book-info-items title">{book.title}</div>
      <div className="info-bar">
      <div className= "book-info-items year">Published {book.publishAdt}</div>
      <div className= "book-info-items year">{book.fileSize}</div>
      </div>
     </div>
   </Link>
   ))}
</main>
</div>)
}