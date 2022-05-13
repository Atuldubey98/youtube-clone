import React from 'react'
import Categories from './Categories'
import './Home.css'
import VideoCard from './VideoCard'
const Home = ({ nav }) => {
  const videoCards = [
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    },
    {
      videoTitle: "Highlights Real Madrid vs Levante UD (6- 0)",
      uploader: "Laliga Santander",
      hours: "6 Hours ago",
      views: "6K views",
    }
  ]
  return (
    <div className={nav ? 'home home-withnav' : 'home home-normal'}>
      <Categories />
      <div className="home-videocards">
        {
          videoCards.map((video, i) => <VideoCard key={i} video={video} />)
        }
      </div>
    </div>
  )
}

export default Home