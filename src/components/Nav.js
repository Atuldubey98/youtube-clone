import './Nav.css'
import React from 'react'
import NavLarge from './NavLarge'
import NavSmall from './NavSmall'

const Nav = ({nav}) => {  
    return nav ?(
    <NavLarge/>
  ) : 
  <NavSmall/>
}

export default Nav