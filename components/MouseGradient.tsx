'use client';

import React, { useEffect, useState } from 'react';

export default function MouseGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMouse);

    return () => window.removeEventListener('mousemove', updateMouse);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none transition-all duration-300 ease-out z-[-1]"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(147, 51, 234, 0.15) 0%, 
            rgba(79, 70, 229, 0.1) 25%, 
            rgba(59, 130, 246, 0.05) 50%, 
            transparent 70%)`,
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none transition-all duration-500 ease-out z-[-1]"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(236, 72, 153, 0.08) 0%, 
            rgba(168, 85, 247, 0.04) 40%, 
            transparent 70%)`,
        }}
      />
    </>
  );
}
