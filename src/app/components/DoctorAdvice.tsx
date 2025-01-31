// 'use client';

// import React from 'react';

// const DoctorAdvice: React.FC = () => {
//   const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
//     const video = event.currentTarget;
//     if (video.paused) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   };

//   return (
//    <section className='w-full min-h-screen justify-center items-center flex flex-col font-sans gap-9'>
//     <h1 className='text-5xl font-bold'>Doctor's Advice</h1>
//      <div className="flex justify-center items-center gap-5 flex-wrap">
//       <div className="w-[90%] sm:w-[500px] h-[400px] rounded-md overflow-hidden">
//         <video
//           src="/assets/videos/vid4.mp4"
//           className="w-full h-full object-cover"
//           onClick={handleVideoClick}
//         ></video>
//       </div>

//       <div className="w-[90%] sm:w-[500px] h-[400px] rounded-md overflow-hidden">
//         <video
//           src="/assets/videos/vid1.mp4"
//           className="w-full h-full object-cover"
//           onClick={handleVideoClick}
//         ></video>
//       </div>

//       <div className="w-[90%] sm:w-[500px] h-[400px] rounded-md overflow-hidden">
//         <video
//           src="/assets/videos/vid2.mp4"
//           className="w-full h-full object-cover"
//           onClick={handleVideoClick}
//         ></video>
//       </div>
//     </div>
//    </section>
//   );
// };

// export default DoctorAdvice;


"use client";

import React, { useState } from "react";
import Image from "next/image";

type VideoItem = {
  thumbnail: string;
  videoSrc: string;
};

const videos: VideoItem[] = [
  { thumbnail: "/assets/images/img28.jpg", videoSrc: "/assets/videos/vid4.mp4" },
  { thumbnail: "/assets/images/img29.jpg", videoSrc: "/assets/videos/vid1.mp4" },
  { thumbnail: "/assets/images/img30.jpg", videoSrc: "/assets/videos/vid2.mp4" },
];

const DoctorAdvice: React.FC = () => {
  const [playingVideos, setPlayingVideos] = useState<boolean[]>(
    Array(videos.length).fill(false)
  );

  const handleThumbnailClick = (index: number) => {
    setPlayingVideos((prev) => prev.map((playing, i) => (i === index ? true : playing)));
  };

  const handleVideoClick = (index: number) => {
    setPlayingVideos((prev) => prev.map((playing, i) => (i === index ? false : playing)));
  };

  return (
    <section className="w-full min-h-screen justify-center items-center flex flex-col font-sans gap-9">
      <h1 className="text-5xl font-bold">Doctor's Advice</h1>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {videos.map((videoItem, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[600px] h-[400px] rounded-md overflow-hidden cursor-pointer"
          >
            {playingVideos[index] ? (
              <video
                src={videoItem.videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                controls
                onClick={() => handleVideoClick(index)}
              />
            ) : (
              <Image
                src={videoItem.thumbnail}
                alt={`Thumbnail for video ${index + 1}`}
                width={500}
                height={400}
                className="w-full h-full object-cover"
                onClick={() => handleThumbnailClick(index)}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorAdvice;
