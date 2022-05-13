import React from 'react'
import './NavSmall.css'
import ExploreIcon from '@mui/icons-material/Explore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
const NavSmall = () => {
    return (
        <div className='nav-small'>
            <div className='nav-icons'>
                <div className="nav-icon">
                    <i className="fa-solid fa-house"></i>
                    <p className='nav-title'>Home</p>
                </div>
                <div className="nav-icon">
                    <ExploreIcon/>
                    <p className='nav-title'>Explore</p>
                </div>
                <div className="nav-icon">
                    <i className="fa-solid fa-hockey-puck"></i>
                    <p className='nav-title'>Shorts</p>
                </div>
                <div className="nav-icon">
                    <VideoLibraryIcon/>
                    <p className='nav-title'>Library</p>
                </div>
                <div className="nav-icon">
                    <SubscriptionsIcon/>
                    <p className='nav-title'>Subscriptions</p>
                </div>
            </div>
        </div>
    )
}

export default NavSmall