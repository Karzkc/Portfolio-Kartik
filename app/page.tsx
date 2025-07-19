"use client"
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
// import { useEffect, useState } from "react"
// import { Presentation } from "@/components/Presentation";


export default function page() {
  
  return (
    <>
      
      
      <div className="main  w-full fl flex-col !justify-start p-6 ">
        
        <div id="home" className="  w-full mt-20   my-20">
          <Home />
        </div>
        <div id="project" className="  w-full fl !justify-start my-20 ">
          <Projects />
        </div>
        <div id="about" className="  w-full fl   my-20">
          <About />
        </div>
        <div id="contact" className="  w-full fl  my-20">
          <Contact />
        </div>

      </div>
    </>
  );
}
