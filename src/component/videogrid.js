// VideoGrid.js

import React from 'react';
import './/css/videogrid.css'

function VideoGrid({videos}) {
 return (
    <>
      <div className="video-grid">
       {videos.map((video, index) => (
        <div key={index} className="video-grid-item">
          <iframe width="300" height="200" src={video.source }title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      ))}
    </div>
    </>
    
  );
}

export default VideoGrid;
