'use client';

import React from 'react';

const Videos: React.FC = () => {
  const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
    const video = event.currentTarget;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center gap-5 flex-wrap">
      <div className="w-[90%] sm:w-[400px] h-[600px] rounded-md overflow-hidden">
        <video
          src="/assets/videos/vid4.mp4"
          className="w-full h-full object-cover"
          onClick={handleVideoClick}
        ></video>
      </div>

      <div className="w-[90%] sm:w-[400px] h-[600px] rounded-md overflow-hidden">
        <video
          src="/assets/videos/vid1.mp4"
          className="w-full h-full object-cover"
          onClick={handleVideoClick}
        ></video>
      </div>

      <div className="w-[90%] sm:w-[400px] h-[600px] rounded-md overflow-hidden">
        <video
          src="/assets/videos/vid2.mp4"
          className="w-full h-full object-cover"
          onClick={handleVideoClick}
        ></video>
      </div>

      <div className="w-[90%] sm:w-[400px] h-[600px] rounded-md overflow-hidden">
        <video
          src="/assets/videos/vid3.mp4"
          className="w-full h-full object-cover"
          onClick={handleVideoClick}
        ></video>
      </div>
    </section>
  );
};

export default Videos;
