import React from 'react'
import Categories from './Categories'
import './Home.css'
const Home = ({nav}) => {
  return (
    <div className={nav ? 'home home-withnav' : 'home home-normal'}>
        <Categories/>
    </div>
  )
}

export default Home