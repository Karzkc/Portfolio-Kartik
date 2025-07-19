import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <section
      className="about-section py-16 px-4 md:px-8"
      style={{
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '15px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white dark:text-gray-200">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Link href="https://github.com/karzkc">

              <Image
                alt="Kartik's Profile"
                src={"/pfp.jpg"}
                height={136}
                width={136}
                className="w-34 h-34 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-400" />               
            </Link>
          </div>

          <div className="flex-grow text-lg leading-relaxed text-white dark:text-gray-200 text-center md:text-left">
            <p className="mb-4">
              I am currently in my <b>2nd year</b> of pursuing a Bachelor of Computer Applications (BCA) at <b>Symbiosis Institute of Computer Studies and Research (SICSR)</b> in Pune, Maharashtra. This program is providing me with a strong foundation in computer science principles and modern development practices.
            </p>
            <p className="mb-4">
              Originally from <b>Jodhpur, Rajasthan</b>, I completed my schooling at <b>Kendriya Vidyalaya BSF Jodhpur</b>. The vibrant culture and experiences from my hometown have shaped my perspective and problem-solving approach.
            </p>
            <p>
              I am constantly exploring new technologies, with a current deep dive into <b>Next.js</b>. Though I am eager for my first professional experience, I bring a strong drive to learn, adapt, and contribute to innovative web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;