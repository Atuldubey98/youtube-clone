import React from 'react'
import './NavSmall.css'
const NavSmall = () => {
    return (
        <div className='nav-small'>
            <div className='nav-icons'>
                <div className="nav-icon">
                    <i className="fa-solid fa-house"></i>
                    <p className='nav-title'>Home</p>
                </div>
                <div className="nav-icon">
                    <i className="fa-brands fa-wpexplorer"></i>
                    <p className='nav-title'>Explore</p>
                </div>
                <div className="nav-icon">
                    <i className="fa-solid fa-hockey-puck"></i>
                    <p className='nav-title'>Shorts</p>
                </div>
                <div className="nav-icon">
                    <i className="fa-solid fa-book-open"></i>
                    <p className='nav-title'>Library</p>
                </div>
            </div>
        </div>
    )
}

export default NavSmall