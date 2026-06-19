import React from "react";

const Analyzepage = () => {
  return (
    <section className="bg-[#EAEFE1] h-[95vh] md:h-auto md:py-20">
      <div className="item-center justify-center flex flex-col lg:flex-row mt-12 md:mt-22 gap-8 px-4 md:px-8">
        <div className="item-center justify-center w-full lg:w-[53%] flex justify-center">
          <img className="w-[500px] h-[500px] object-cover rounded-[10%] snap-center max-w-full" src="/11fef0f1-0866-4156-bf72-3504ecc68e22.png" alt="Linktree Demo" />
        </div>

        <div className="w-full lg:w-[47%] text-center lg:text-left px-4">
          <p className="font-LinkSans text-gray-800 font-extrabold text-4xl md:text-5xl">Analyze your audience and keep them engaged</p>
          <p className="text-gray-800 text-base md:text-lg font-LinkSans mt-6">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
          <button className="bg-[#E5BBEA] text-black hover:bg-[#C29EC6] text-semibold font-LinkSans mt-7 py-4 px-12 rounded-4xl w-full sm:w-auto">Get started for free</button>
        </div>
      </div>    
    </section>
  );
};

export default Analyzepage;