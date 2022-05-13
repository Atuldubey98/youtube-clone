import './VideoCard.css'
import React from 'react'

const VideoCard = ({video}) => {
    const {videoTitle, uploader, views, hours} = video;
    return (
        <div className='videocard'>
            <img src="image/hq720.webp" alt="id123" className='video-img' />
            <div className="video-data">
                <img src="image/hq720.webp" alt="video-ahsd" className='video-uploader' />
                <div className="title-img">
                    <div className="title">
                        <p className='video-title'>{videoTitle}</p>
                        <p className="title-uploader">{uploader}</p>
                    </div>
                    <div className="subheading">
                        <span className="title-subheading">{views} . </span>
                        <span className="title-subheading">{hours}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard