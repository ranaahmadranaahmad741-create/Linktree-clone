import React from "react";

const Shareyourlinktreepage = () => {
  return (
    <section className="bg-[#6E0B14] h-[85vh] md:h-auto md:py-20">
      <div className="item-center justify-center flex flex-col-reverse lg:flex-row mt-12 md:mt-42 gap-8 px-4 md:px-8">
        <div className="w-full lg:w-[44%] text-center lg:text-left px-4">
          <p className="font-sans text-[#E4B6E9] font-extrabold text-4xl md:text-5xl">Share your Linktree anywhere you like!</p>
          <p className="text-white text-base md:text-lg font-sans text-bold mt-5">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.</p>
          <button className="bg-[#E4B6E9] text-black text-bold font-sans mt-6 md:mt-4 py-4 px-16 rounded-4xl w-full sm:w-auto">Get started for free</button>
        </div>

        <div className="item-center justify-center w-full lg:w-[44%] flex justify-center">
          <video className="w-[480px] h-[480px] object-cover rounded-[10%] snap-center max-w-full" autoPlay loop muted>
            <source src="/4517569f-d243-4e10-bdc5-2b0e792c761e.mp4" type="video/mp4" />
          </video>
        </div>
      </div> 
    </section>
  );
};

export default Shareyourlinktreepage;