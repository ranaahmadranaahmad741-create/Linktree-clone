import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=' bg-white w-[92%] right-[4%] top-[5vh] fixed absolute  rounded-full border-2 border-gray-300
     flex shadow-md'>
      
        <a  href="http://localhost:3000/" className='h-18 flex-rounded-full flex items-center justify-center pl-8'>
          <Image 
            className='h-[45%] w-[90%] ' 
            src="https://i.ibb.co/twKG1ShB/logo-removebg-preview.png" 
            alt="logo" 
            width={200}
            height={80}
          />
        </a>
        
        <ul className='flex flex-1 items-center justify-left text-md font-sans gap-8 pl-16'>
          <li className="text-gray-700 px-2 py-2 cursor-default font-medium hover:rounded-sm hover:bg-stone-200  ">Product</li>
          <li className="text-gray-700 px-2 py-2 cursor-default font-medium hover:rounded-sm hover:bg-stone-200  ">Template</li>
          <li className="text-gray-700 px-2 py-2 cursor-default font-medium hover:rounded-sm hover:bg-stone-200  ">Marketplace</li>
          <li className="text-gray-700 px-2 py-2 cursor-default font-medium hover:rounded-sm hover:bg-stone-200  ">Learn</li>
          <li className="text-gray-700 px-2 py-2 cursor-default font-medium hover:rounded-sm hover:bg-stone-200  ">Pricing</li>
        </ul>
        <button className="bg-zinc-100 font-medium font-sans text-black px-8 my-2 rounded-sm hover:bg-gray-200">log in</button>
        <button className="bg-black font-medium font-sans text-white mx-2 px-8 my-2 rounded-full hover:bg-gray-800">Sign up free</button>

    </nav>
  );
};

export default Navbar;
