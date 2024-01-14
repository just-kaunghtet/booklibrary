import {TextField} from '@mui/material'
import { Link } from 'react-router-dom'
export default function Header(props)
{
    return(
      <nav className="">
        <Link className='header-title' to="/">BOOK LIBRARY</Link>
        <div className='search-bar'>
          <TextField fullWidth id="outlined-small" label="Enter Book Name Here" variant="outlined" size="small" defaultValue="" sx={{margin:3}}/>
          <input type='button' value="Search" className='search-button'/>
        </div>
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