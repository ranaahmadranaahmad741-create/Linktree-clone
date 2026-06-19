import React from "react";

const Customlinktree = () => {
  return (
    <section className="bg-blue-600 h-[85vh] md:h-auto md:py-20">
      <div className="item-center justify-center flex flex-col lg:flex-row mt-12 md:mt-32 gap-8 px-4 md:px-8">
        <div className="item-center justify-center w-full lg:w-[45%] flex justify-center">
          <video className="w-[500px] h-[500px] object-cover -mt-6 rounded-[10%] snap-center max-w-full" autoPlay loop muted>
            <source src="/Link in bio tool- Everything you are, in one simple link - Linktree.webm" type="video/webm" />
          </video>
        </div>

        <div className="w-full lg:w-[47%] text-center lg:text-left px-4">
          <p className="font-LinkSans text-[#D2E823] font-extrabold text-4xl md:text-5xl">Create and customize your Linktree in minutes</p>
          <p className="text-white text-base md:text-lg font-LinkSans font-medium mt-6 md:mt-10">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
          <button className="bg-[#D2E823] text-black text-bold font-LinkSans mt-7 md:mt-10 py-4 px-12 rounded-4xl w-full sm:w-auto">Get started for free</button>
        </div>
      </div>    
    </section>
  );
};

export default Customlinktree;