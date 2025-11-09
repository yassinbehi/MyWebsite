'use client'
import { useState, useEffect } from 'react';
import TextType from "./TextType";

export default function TerminalHero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 2000);
  }, []);

  if (!show) return null;

  return (
    <div>
      <div className="h-px w-16 bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 mx-auto mb-8" />
      <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase text-emerald-300">
        Creative Developer
      </h2>
      
      <div className="bg-gray-900/80 backdrop-blur-sm text-emerald-300 font-mono p-6 rounded-lg shadow-lg border border-emerald-900/30 m-8 pointer-events-auto hover:shadow-emerald-900/20 transition-all duration-300">
        <h1>C:\Users\HP&gt;Information technology engineering student</h1>
        <h1>C:\Users\HP&gt;Always learning</h1>
        <span>C:\Users\HP&gt;</span>
        <TextType 
          text={[
            "Full-Stack Development",
            "UI/UX Design",
            "Interactive Experiences"
          ]}
          typingSpeed={205}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="▋"
        />
      </div>
    </div>
  );
}