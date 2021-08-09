import React from "react"
import './videoStyle.css'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="videoWrapper">
        {/* <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    /> */}

        <iframe 
        width="560" 
        height="415" 
        src={videoSrcURL}
        title={videoTitle}
        // src="https://www.youtube.com/embed/ES2YNCM5HPk" 
        // title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
    </div>
)

export default Video