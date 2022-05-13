import React from 'react'
import './NavLarge.css'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ExploreIcon from '@mui/icons-material/Explore';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
        <hr className='nav-div'/>
        <div className="nav-item">
          <VideoLibraryIcon className='nav-large-icon' />
          <span className="nav-large-title">Library</span>
        </div>
        <div className="nav-item">
          <HistoryIcon className='nav-large-icon' />
          <span className="nav-large-title">History</span>
        </div>
        <div className="nav-item">
          <WatchLaterIcon className='nav-large-icon' />
          <span className="nav-large-title">Watch later</span>
        </div>
        <div className="nav-item">
          <OndemandVideoIcon className='nav-large-icon' />
          <span className="nav-large-title">Your videos</span>
        </div>
        <div className="nav-item">
          <ThumbUpIcon className='nav-large-icon' />
          <span className="nav-large-title">Liked videos</span>
        </div>
        <div className="nav-item">
          <KeyboardArrowDownIcon className='nav-large-icon' />
          <span className="nav-large-title">Show more</span>
        </div>
      </div>
    </div>
  )
}

export default NavLarge