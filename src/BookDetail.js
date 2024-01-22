import { useEffect, useState } from "react"
import allbooksText from './data text files/allbooks.txt'
import { Link, useParams } from 'react-router-dom';

export default function BookDetail(props)
{
   const [allbooks, setAllBooks] =useState([])
   const [book, setBook] = useState([])
   const [books, setBooks] = useState([])
   const {id} = useParams();
   useEffect(() => {
   fetch(allbooksText)
   .then(r => r.text())
   .then(allbooksText => setAllBooks(JSON.parse(allbooksText)))
   },[])   
   useEffect(() => {
      const bookObjects = [];
      const updateBooks = async () => {
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
      const bookObject = allbooks.find(book => book.dataId === id)
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
      if(book.tags ? book.tags.map(tag=>(allbooks[i].tags.toString().includes(tag))) && book.dataId!==allbooks[i].dataId : "Error")
      {
        bookObjects.push(allbooks[i])
      }
      if (bookObjects.length===6) 
      {
       setBooks(bookObjects)
        break;
      }
      }
   }
      recommendBooks();
   }, [allbooks,id,book])
   return(
    <div className="book-container">
        {(book)? (
        <div className="book-detail" key={book.dataId}>
        <img className="book-cover" src={book.coverImage} alt={book.title}></img>
        <div className="book-info-detail">
         <div className="book-info-items title">{book.title}</div>
         <div className="book-info-items author">{`By: ${book.author}`}</div>
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
      {books.map(book=>(
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