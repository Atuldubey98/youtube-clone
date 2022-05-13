import React from 'react'
import './NavLarge.css'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ExploreIcon from '@mui/icons-material/Explore';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
const NavLarge = () => {
  return (
    <div className='nav-large'>
      <div className="nav-items">
        <div className="nav-item">
          <HomeIcon className='nav-large-icon' />
          <span className="nav-large-title">Home</span>
        </div>
        <div className="nav-item">
          <ExploreIcon className='nav-large-icon' />
          <span className="nav-large-title">Explore</span>
        </div>
        <div className="nav-item">
          <SubscriptionsIcon className='nav-large-icon' />
          <span className='nav-large-title'>Subscritions</span>
        </div>
        <div className="nav-item">
          <SwitchAccessShortcutIcon className='nav-large-icon' />
          <span className='nav-large-title'>Shorts</span>
        </div>
      </div>
    </div>
  )
}

export default NavLarge