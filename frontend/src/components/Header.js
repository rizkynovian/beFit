import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
        <div className="headerContainer">
            <div className="left">
                <div className="img">
                    <img src="" alt="" />
                </div>
                <h2>BeFit</h2>
            </div>
            <div className="right">
                <nav>
                    <ul>
                        <li>
                            <Link className='navItem'>Home</Link>
                        </li>
                        <li>
                            <Link className='navItem'>Food</Link>
                        </li>
                        <li>
                            <Link className='navItem'>Workout</Link>
                        </li>
                        <li>
                            <Link className='navItem'>Bookmark</Link>
                        </li>
                        <li>
                            <Link className='navItem'>Article</Link>
                        </li>
                    </ul>
                </nav>
                <Link className="headerToLogin">Login</Link>
            </div>
        </div>
    </header>
  )
}

export default Header