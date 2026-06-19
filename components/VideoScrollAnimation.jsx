import React from 'react';

export default function VideoScrollAnimation() {
  return (
    // Removed fixed h-screen so it flows naturally in the document layout
      <div className="h-screen overflow-y-clip">
      <div className="flex flex-col gap-12 pl-18 animate-infinite-scroll overflow-y-auto scrollbar-hide">
          {/* Original set */}
          <video className="w-[530px] h-[514px] object-cover rounded-[10%] snap-center" autoPlay loop muted>
            <source src="/4K Extracted Frames Video Effect.mp4" type="video/mp4" />
          </video>
          <video className="w-[530px] h-[514px] object-cover rounded-[10%] snap-center" autoPlay loop muted>
            <source src="/4K Extracted Frames Video Effect_2.mp4" type="video/mp4" />
          </video>
          <video className="w-[530px] h-[514px] object-cover rounded-[10%] snap-center" autoPlay loop muted>
            <source src="/Video & image remover - Vmake AI.mp4" type="video/mp4" />
          </video>
          <video className="w-[530px] h-[514px] object-cover rounded-[10%] snap-center" autoPlay loop muted>
            <source src="/perfect_person_frames_4k_enhanced.webm" type="video/mp4" />
          </video>

          {/* Duplicate for seamless infinite scroll */}
          <video className="w-[530px] h-[514px] object-cover rounded-[10%] snap-center" autoPlay loop muted>
            <source src="/4K Extracted Frames Video Effect.mp4" type="video/mp4" />
          </video>
          <video className="w-[530px] h-[514px] object-cover rounded-[10%] snap-center" autoPlay loop muted>
            <source src="/4K Extracted Frames Video Effect_2.mp4" type="video/mp4" />
          </video>
          <video className="w-[530px] h-[514px] object-cover rounded-[10%] snap-center" autoPlay loop muted>
            <source src="/Video & image remover - Vmake AI.mp4" type="video/mp4" />
          </video>
          <video className="w-[530px] h-[514px] object-cover rounded-[10%] snap-center" autoPlay loop muted>
            <source src="/perfect_person_frames_4k_enhanced.webm" type="video/mp4" />
          </video>
      </div>
    </div>
  );
}
