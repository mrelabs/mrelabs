"use client";

import { useEffect, useState } from "react";


const phrases = [
  "MRE LABS",
  "Building intelligent systems for tomorrow."
];


export default function TypingLogo() {

  const [phrase, setPhrase] = useState(0);
  const [text, setText] = useState("");
  const [mode, setMode] = useState<
    "typing" | "waiting" | "deleting"
  >("typing");


  useEffect(() => {

    const current = phrases[phrase];


    const timer = setTimeout(() => {


      if (mode === "typing") {


        if (text.length < current.length) {


          setText(
            current.slice(0, text.length + 1)
          );


        } else {


          setMode("waiting");


        }


      }


      else if (mode === "waiting") {


        setMode("deleting");


      }


      else if (mode === "deleting") {


        if (text.length > 0) {


          setText(
            current.slice(0, text.length - 1)
          );


        } else {


          setPhrase(
            (phrase + 1) % phrases.length
          );


          setMode("typing");

        }

      }


    },


    mode === "waiting"
      ? 1800
      : mode === "deleting"
      ? 70
      : 120


    );


    return () => clearTimeout(timer);


  }, [text, mode, phrase]);



  return (

    <div
      className={`
        max-w-5xl
        text-3xl
        sm:text-5xl
        md:text-7xl
        font-semibold
        tracking-tight

        transition-all
        duration-300

        ${
          phrase === 0
            ? `
              text-zinc-400
              drop-shadow-[0_0_18px_rgba(161,161,170,0.25)]
            `
            : `
              bg-gradient-to-r
              from-white
              via-zinc-200
              to-zinc-500
              bg-clip-text
              text-transparent

              drop-shadow-[0_10px_25px_rgba(255,255,255,0.12)]
            `
        }
      `}
    >

      {text}

      <span
        className="
          animate-pulse
          text-zinc-400
        "
      >
        |
      </span>


    </div>

  );

}