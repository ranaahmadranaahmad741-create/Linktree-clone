'use client';
import React from "react";
import { useRouter } from 'next/navigation';
import VideoScrollAnimation from './VideoScrollAnimation';

const Landingpage = () => {
  const router = useRouter();

  return (
    <section className="bg-[#D2E823] min-h-screen flex flex-col items-center justify-center w-full">
      <div className="w-full h-full flex items-center justify-center px-8">
        <div className="flex flex-row w-full max-w-7xl gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center w-1/2">
            <p className="text-7xl font-black font-LinkSans text-green-900">
              A link in bio built for you.
            </p>
            <p className="font-medium font-LinkSans text-green-900 mt-4">
              Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.push('/linktree');
              }}
              className="flex flex-col sm:flex-row items-center"
            >
              <input
                type="text"
                placeholder="linktr.ee/ "
                className="bg-white placeholder:text-gray-600 placeholder:font-LinkSans border border-gray-300 rounded-sm mt-8 py-4 px-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-800 font-medium font-LinkSans text-white mx-2 px-12 py-5 mt-8 rounded-full"
              >
                Get started for free
              </button>
            </form>
          </div>

          {/* Right Column */}
          <VideoScrollAnimation />
        </div>
      </div>
    </section>
  );
};

export default Landingpage;