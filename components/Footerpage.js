import React from "react";
import Image from "next/image";
import Footerlinks from "./Footerlinks";

const Footer = () => {
  return (
       <div className="bg-[#5B1D78] min-h-screen">
        <div className="w-[70%] mx-auto py-20 text-center">
            
            <div>
             <p className="text-5xl text-[#E4B6E9] font-LinkSans font-extrabold">Jumpstart your corner of the internet today</p>
                <input type="" placeholder="linktr.ee/ " className="bg-white placeholder:text-gray-600 placeholder:font-LinkSans border border-gray-300 rounded-lg mt-8 py-4 px-8 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-[#D2E823] font-semibold font-LinkSans hover:bg-[#D2E820] text-black mx-2 px-8 py-5 mt-8 rounded-full">Claim your linktree</button>
            </div>
            
            {/* <div className="flex flex-row gap-64 justify-center">
                <img className="mr-8 mt-22 " src="/Untitledrdhbdf-removebg-preview-removebg-preview.png" alt="Linktree Logo" />
                <img className=" mt-22 ml-4" src="/firefox_pe0AHqZFpD-removebg-preview.png" alt="Linktree Logo" />
            </div> */}

        </div>

        <div>
            {/* main div */}
           <div className="w-[90%] max-w-7xl mx-auto rounded-3xl bg-white p-12 my-12 shadow-sm font-sans">
      {/* Footer Links Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 px-4">
        {/* Company Column */}
        <div>
          <h3 className="text-[#1A1A1A] font-bold text-xl mb-5 tracking-tight">Company</h3>
          <ul className="space-y-3">
            {["The Linktree Blog", "Engineering Blog", "Marketplace", "What's New", "About", "Press", "Careers", "Link In Bio", "Social Good", "Contact"].map((item) => (
              <li key={item} className="text-[#535A5B] text-[15px] font-normal hover:text-black cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Community Column */}
        <div>
          <h3 className="text-[#1A1A1A] font-bold text-xl mb-5 tracking-tight">Community</h3>
          <ul className="space-y-3">
            {["Linktree for Enterprise", "2023 Creator Report", "2022 Creator Report", "Charities", "Creator Profile Directory", "Explore Templates"].map((item) => (
              <li key={item} className="text-[#535A5B] text-[15px] font-normal hover:text-black cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="text-[#1A1A1A] font-bold text-xl mb-5 tracking-tight">Support</h3>
          <ul className="space-y-3">
            {["Help Topics", "Getting Started", "Linktree Pro", "Features & How-Tos", "FAQs", "Report a Violation"].map((item) => (
              <li key={item} className="text-[#535A5B] text-[15px] font-normal hover:text-black cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Trust & Legal Column */}
        <div>
          <h3 className="text-[#1A1A1A] font-bold text-xl mb-5 tracking-tight">Trust & Legal</h3>
          <ul className="space-y-3">
            {["Terms & Conditions", "Privacy Notice", "Cookie Notice", "Trust Center", "Cookies Preferences", "Transparency Report", "Law Enforcement Access Policy", "Human Rights"].map((item) => (
              <li key={item} className="text-[#535A5B] text-[15px] font-normal hover:text-black cursor-pointer transition-colors">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

          <Footerlinks />

    </div>
        </div>

        <div>

        </div>
       </div>
       
  );
};

export default Footer;
