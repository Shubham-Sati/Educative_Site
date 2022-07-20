import React from 'react'
import "./Navbar.css"; 
// import SearchIcon from '@mui/icons-material/Search';


function Navbar() {
  return (
        <div className='navbar'>
            <div className='navbar-container'> 
                <div>
                    <h3>Online Course Educator</h3>
                </div>
            </div>
            <div className='navbar-container'>
            <div className='search-div'>
                    Search
                </div>
            </div>
            <div className='navbar-container'>
                <div className='login-signin-div'>
                    <div className='login-signin'>   <p>LogIn / Sign In </p>    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar