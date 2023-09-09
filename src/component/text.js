import React from "react";
import ReactPlayer from 'react-player';
import ".//css/laptopframe.css"
function LaptopFrame(){
    return (
        <div className="app">
          <div className="laptop-frame">
            {/* Replace 'laptop-frame.png' with your actual laptop frame image */}
            <img src="/static/images/laptop.png" alt="Laptop Frame" />
            <div className="video-container">
              {<ReactPlayer url="https://player.vimeo.com/video/137857207" controls playing /> }
            </div>
          </div>
        </div>
      );
}
export default LaptopFrame