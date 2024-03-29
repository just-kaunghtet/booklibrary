import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import { Pagination } from "@mui/material"
export default function Book({allbooks1})
{
  const [allbooks, setAllBooks] =useState([])
  const [showbook,setShowBook]=useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const booksPerPage=16
  const pageNum=Math.ceil(allbooks.length / booksPerPage);
  useEffect(() => {
    if(allbooks1){

      setAllBooks(allbooks1)
    }
  },[allbooks1])
      
   useEffect(() => {
    setShowBook(allbooks?.slice((currentPage-1) * booksPerPage, currentPage * booksPerPage))
  }, [currentPage,allbooks])

   return(
      <div className={"book-container"} > 
      <div className='book-navSection'><h1>BOOK LIST</h1>
      <div><Pagination count={pageNum} shape="rounded" siblingCount={0} boundaryCount={2} page={currentPage} onChange={(e,val) => setCurrentPage(val)}/></div>
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
      ))
    }
   </main>
   </div>
   )
}