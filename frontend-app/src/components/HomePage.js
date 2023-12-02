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
    <section className="w-screen h-screen flex items-center">
      <Navbar />
      <div className="w-full h-full">
        <img className="w-full h-full object-cover" src="/image/landingpage.png" alt="image description" />
      </div>
    </section>
    </>
  );
}

export default HomePage;
