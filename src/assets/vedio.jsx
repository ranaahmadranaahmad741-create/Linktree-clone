import React from 'react';
import myVideo from './assets/4K Extracted Frames Video Effect.mp4'; 

export default function VideoComponent() {
  return (
    <video className="w-full h-[400px] object-cover rounded-tl-lg rounded-tr-lg" autoPlay loop muted playsInline>
      {/* 2. Use the imported variable name as the source */}
      <source src={myVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}