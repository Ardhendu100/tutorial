import Navbar from './home/Navbar';
import React, { useEffect, useState } from 'react';

function HomePage() {
  const [text, setText] = useState('');
  const originalText = "Discover new skills with our step-by-step tutorials";

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setText(originalText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 120); // Adjust the interval to control the typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="banner relative overflow-hidden">
        <video className="w-full h-auto" autoPlay muted loop>
          <source src="/image/gallery.mp4" type="video/mp4" />
        </video>
        <div className="overlay absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
          <h1 className="text-2xl md:text-4xl font-bold text-center p-4">
            {text}
          </h1>
        </div>
      </div>
      </section>
    </>
  );
}

export default HomePage;
