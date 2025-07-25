"use client"
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import ViewCounter from "@/components/ViewCounter"; 


export default function page() {
  return (
    <div className="main w-full fl flex-col !justify-start">
      <div id="home" className="w-full mt-20 my-20 p-6">
        <Home />
      </div>

      <div id="project" className="w-full fl !justify-start my-20">
        <Projects />
      </div>

      <div id="about" className="w-full fl my-20 p-6">
        <About />
      </div>

      <div id="contact" className="w-full fl flex-col my-20 p-6">
        <Contact />

        <div className="mt-6 text-center text-gray-600">
          <ViewCounter slug="home" />
        </div>
      </div>
    </div>
  );
}
