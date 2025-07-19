import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section
      className="contact-section py-16 px-4 md:px-8"
      style={{
        background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        borderRadius: '15px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white dark:text-gray-200">Get in Touch</h2>

        <p className="text-lg leading-relaxed mb-12 text-white dark:text-gray-200">
          Feel free to connect with me across various platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link href="https://www.instagram.com/kartikk_0803/" target="_blank" rel="noopener noreferrer">
            <img
              className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
              src="https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white"
              alt="Instagram"
            />
          </Link>

          <Link href="https://www.linkedin.com/in/kartik-khiriya-483a81319/" target="_blank" rel="noopener noreferrer">
            <img
              className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
              src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white"
              alt="LinkedIn"
            />
          </Link>

          <Link href="https://reddit.com/user/Karzkc08" target="_blank" rel="noopener noreferrer">
            <img
              className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
              src="https://img.shields.io/badge/Reddit-%23FF4500.svg?logo=Reddit&logoColor=white"
              alt="Reddit"
            />
          </Link>

          <Link href="https://x.com/@karzkc0803" target="_blank" rel="noopener noreferrer">
            <img
              className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
              src="https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white"
              alt="X (formerly Twitter)"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;