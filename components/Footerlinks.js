import React from "react";

const Footerlinks = () => {
  return (
     <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 bg-white w-full py-6">
            
            {/* Left: Action Buttons */}
            <div className="flex items-center gap-3">
                <button className="bg-[#EFF0EC] text-black font-bold text-[15px] px-6 py-4 rounded-xl hover:bg-[#E2E3DF] transition-colors whitespace-nowrap tracking-tight">
                Log in
                </button>
                <button className="bg-[#D2E823] text-black font-bold text-[15px] px-7 py-4 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap tracking-tight">
                Get started for free
                </button>
            </div>

            {/* Right: App Stores & Social Icons (No shared container background) */}
            <div className="flex flex-wrap items-center gap-2">
                
                 <div className="flex flex-row justify-center gap-3">
                {/* App Stores */}
                <a href="#" className="bg-black rounded-full py-4 w-[10vw] flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src="/apple-logo.png" alt="Apple" className="h-6 ml-2 invert" />
                    <div className="text-white text-left leading-tight mr-2">
                    <p className="text-[7px]">DOWNLOAD ON THE</p>
                    <p className="text-sm font-semibold ">App Store</p>
                    </div>
                </a>
                <a href="#" className="bg-black rounded-full py-4 w-[12vw] flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src="/playstore.png" alt="Google Play" className="h-6 ml-4" />
                    <div className="text-white text-left leading-tight">
                    <p className="text-[8px]">GET IT ON</p>
                    <p className="text-sm font-semibold ">Google Play</p>
                    </div>
                </a>
                </div>


                {/* Linktree Logo Icon */}
                <button className="w-[52px] h-[52px] bg-[#13171D] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <img className="w-6 h-6 object-contain brightness-0 invert" src="/logo_2-removebg-preview.png" alt="Linktree Logo" />
                </button>

                {/* Threads Icon */}
                <button className="w-[52px] h-[52px] bg-[#13171D] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <img className="w-[100px] h-[100px] object-contain brightness-0 invert" src="/image_15894658-removebg-preview.png" alt="Threads" />
                </button>

                {/* TikTok Icon */}
                <button className="w-[52px] h-[52px] bg-[#13171D] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <img className="w-[150px] h-[150px] object-contain brightness-0 invert" src="/image_2a04194f-removebg-preview.png" alt="TikTok" />
                </button>

                {/* Instagram Icon */}
                <button className="w-[52px] h-[52px] bg-[#13171D] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <img className="w-full h-full object-contain brightness-0 invert" src="/image_fa631125-removebg-preview.png" alt="Instagram" />
                </button>

                {/* Discord Icon */}
                <button className="w-[52px] h-[52px] bg-[#13171D] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <img className="w-full h-full object-contain brightness-0 invert" src="/image_77da05eb_1_-removebg-preview.png" alt="Discord" />
                </button>
                
            </div>
            </div>
  );
};

export default Footerlinks;


