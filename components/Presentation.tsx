"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
    {
        title: "X Clone",
        description: "X UI Clone built with Next.js.",
        image: "/X.png",
        url: "https://x-clone-five-gules.vercel.app/",
    },
    {
        title: "Password Manager",
        description: "Manage passwords securely and efficiently.",
        image: "/PW.png",
        url: "https://github.com/Karzkc/Bro-Code---Your-Password-Manager",
    },
    {
        title: "Short-it: An Url Shortner",
        description: "Shorten URLs quickly and easily.",
        image: "/Url.png",
        url: "https://github.com/Karzkc/web-dev/tree/master/javascript/136%20URL%20Shortner/url-shortner",
    },
    {
        title: "Spotify Clone",
        description: "Spotify UI Clone",
        image: "/spotify.png",
        url: "https://karzkc.github.io/Spotify-Clone/",
    },
    {
        title: "Netflix Clone",
        description: "Netflix UI Clone using HTML CSS JS.",
        image: "/Netflix.png",
        url: "https://karzkc.github.io/Netflix-Ui-Clone/",
    },
];

export function Presentation() {
  return (
    <div
      id="projects"
      className="relative z-0 w-full max-w-7xl  mt-24 px-4 "
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0 gap-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={320}
                      height={176}
                      className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="right-10 cursor-pointer" />
        <CarouselNext className="right-[-40px] cursor-pointer" />
      </Carousel>
    </div>
  );
}
