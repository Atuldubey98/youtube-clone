import React from 'react'
import './Header.css'
const Header = ({navToggle}) => {
  return (
    <div className='header'>
      <div className="header-title">
        <div onClick={navToggle} className="header-menu">
          <i className="header-icon fa-solid fa-bars"></i>
        </div>
        <img className='youtube-img' src="image/you" alt="youtube-icon" />
      </div>
      <div className="header-search">
          <input type="text" name='search'/>
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className='search-mic'>
            <i className="search-phone fa-solid fa-microphone"></i>
          </div>
      </div>
      <div className="header-icons">
        <i className="header-icon fa-solid fa-video"></i>
        <i className="header-icon fa-solid fa-bell"></i>
      </div>
    </div>
  )
}

export default Header