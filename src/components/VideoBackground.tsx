import React from 'react';

const VideoBackground = () => (
  <video
    className="fixed left-0 bottom-0 w-screen h-screen object-cover -z-10 pointer-events-none object-bottom"
    src="/videos/bamboo.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
);

export default VideoBackground;
