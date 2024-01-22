import {TextField} from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react';
export default function Header(props)
{
  const [title, setTitle] = useState('');
  function renderSearchbar()
  {
    return(
        <div className='search-bar'>   
        <TextField id="outlined-small" label="Enter a book name" variant='outlined' size="small" sx={{margin:3 , width: 300, backgroundColor: 'white', borderRadius: 1}} onChange={(e) => setTitle(e.target.value)}/>
        <Link className='search-button' to={`/book/title/${title}`}>Search</Link></div>
          )
  }
    return(
      <nav className={props.darkMode ? "dark" : "light"}>
        <Link className='header-title' to="/book">BOOK LIBRARY</Link>
        {renderSearchbar()}
        <div className="toggle">
                <p className="toggle-light">Light</p>
                <div className="toggle-slider" onClick={props.toggleDarkMode}>
                    <div className="slider-circle"></div>
                </div>
                <p className="toggle-dark">Dark</p>
        </div>
      </nav>
    )
}