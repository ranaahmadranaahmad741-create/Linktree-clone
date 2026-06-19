'use client'; 
import React from 'react';
import Landingpage from "../../components/Landingpage";
import Customlinktree from "../../components/Customlinktreepage";
import Shareyourlinktreepage from "../../components/Shareyourlinktreepage";
import Analyzepage from "../../components/Analyzepage";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Landingpage />
      <Customlinktree />
      <Shareyourlinktreepage />
      <Analyzepage />
    </main>
  );
}