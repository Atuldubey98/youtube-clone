import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Nav from '../components/Nav'
import './HomePage.css'
const HomePage = ({navToggle, nav}) => {
  return (
    <div className='homepage'>
        <Header navToggle={navToggle}/>
        <div className="home-div">
            <Nav nav={nav}/>
            <Home nav={nav}/>
        </div>
    </div>
  )
}

export default HomePage