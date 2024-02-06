import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { Pagination } from "@mui/material";
export default function FilteredBooks({allbooks1,propCat})
{
  const booksPerPage=15
   const [allbooks, setAllBooks] =useState([])
   const [books, setBooks] = useState([])
   const {category} = useParams();
   const [showbook,setShowBook]=useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const selectedCat= propCat || category
   useEffect(() => {
      setAllBooks(allbooks1)
   },[allbooks1]) 
   useEffect(() => {
    const updateBooks = async () => {
      const bookObjects = [];
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      for (let i = 0; i < allbooks.length; i++) {
        if (allbooks[i].tags.toString().includes(selectedCat)) {
          bookObjects.push({...allbooks[i]});
        }
      }
      setBooks(bookObjects);
    }
    updateBooks();
 }, [allbooks, selectedCat])
  const pageNum=Math.ceil(books.length / booksPerPage);
  useEffect(() => {
  setShowBook(books.slice((currentPage-1) * booksPerPage, currentPage * booksPerPage))
}, [currentPage,books])
   return(
    <div className="book-container">
      <div className='book-navSection'><h1>BOOK LIST</h1>
      <div><Pagination count={pageNum} shape="rounded" siblingCount={0} boundaryCount={2} page={currentPage} onChange={(e,val) => setCurrentPage(val)}/></div>
      </div>
      {showbook.length>0? 
      <main>
        {showbook.map(book=> (
        <Link className="book-info" to={`/book/${book.dataId}`} key={book.dataId}> 
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
      :
      <div className="no-book-display">
        <h1>No Books Found! Back To </h1>
        <Link className='header-title' to="/book">BOOK LIBRARY</Link>
      </div>
      }
    </div>
   )
}