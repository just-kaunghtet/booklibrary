import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';

export default function BookDetail({books,propId})
{
   const [allbooks, setAllBooks] =useState([])
   const [book, setBook] = useState({})
   const [moreBooks, setmoreBooks] = useState([])
   const { id } = useParams();
   const searchId= propId || id;
   useEffect(() => {
    if(books)
      {
      setAllBooks(books)
      }
   },[books])   
   useEffect(() => {
      const bookObjects = [];
      const updateBooks = async () => {
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
      const bookObject = allbooks.find(book => book.dataId === searchId)
      if (bookObject) 
      {
        setBook(bookObject)
      }
      }
      updateBooks();
      const recommendBooks= async()=>
      {
      for (let i = 0; i < allbooks.length; i++) 
      {
        console.log(book.tags)
      if(book.tags ? book.tags.map(tag=>(allbooks[i].tags.toString().includes(tag))) && book.dataId!==allbooks[i].dataId : "Error")
      {
        bookObjects.push(allbooks[i])
      }
      if (bookObjects.length===6) 
      {
       setmoreBooks(bookObjects)
        break;
      }
      }
   }
      recommendBooks();
   }, [allbooks,searchId,book])
   return(
    <div className="book-container">
        {(book)? (
        <div className="book-detail" key={book.dataId}>
        <img className="book-cover" src={book.coverImage} alt={book.title}></img>
        <div className="book-info-detail" data-testid="detail">
         <div className="book-info-items title">{book.title}</div>
         <div className="book-info-items ID">{`ID: ${book.dataId}`}</div>
         <div className="book-info-items pages">{`${book.pageCount? book.pageCount: "Unknown pages" }`}</div>
         <div className="book-info-items ID">{`Publish Year: ${book.publishAdt}`}</div>
         <div className="book-info-items tags"> { book.tags ? book.tags.map(tag=>(<Link to={`/book/category/${tag}`} className="tag">{tag}</Link>)): "Loading tags"} </div>
         <a className="book-info-items search-button" href={book.link}>Download</a>
        </div>
      </div>
       ): 
       (<div>Loading</div>
        )
       }
      <div className="recommend-section">Books of same category</div>
      <main>
      {moreBooks.map(book=>(
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
   </div>
   )
}