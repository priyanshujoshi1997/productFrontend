import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Create and load the YouTube player when the component mounts
    const loadPlayer = () => {
      window.YT.ready(() => {
        new window.YT.Player('youtube-player', {
          videoId: 'VIDEO_ID',
          width: 360,
          height: 240,
          playerVars: {
            autoplay: 1,
          },
        });
      });
    };

    // Load the YouTube Player API script
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
    script.onload = loadPlayer;

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="youtube-player">
      {/* The YouTube player will be inserted here */}
  </div>
     
  );
};

export default VideoPlayer;
