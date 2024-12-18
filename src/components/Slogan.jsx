import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Slogan() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const phrase = useRef(null)

  useEffect(() => {
    // Split the text into characters, preserving spaces
    const chars = textRef.current.innerText.split('').map((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char; // non-breaking space for spaces
      span.style.opacity = '1';
      span.style.display = 'inline-block';
      span.className = 'char';
      return span;
    });

    // Clear original text and append the spans
    textRef.current.innerHTML = '';
    chars.forEach((char) => textRef.current.appendChild(char));

    const tl = gsap.timeline();

    // Animate the image with opacity and vertical movement
    tl.fromTo(imageRef.current, {
      opacity: 0,
      x: -100,
      scale:0
    }, {
      opacity: 1,
      x:0,
      scale:1,
      duration: 1.5,
      ease: 'bounce.out',
      delay:.5
    });

    // Animate the text characters
    tl.from('.char', {
      duration: 1.5,
      opacity: 0,
      y: 20,
      stagger: 0.1,
    });

    tl.fromTo(phrase.current, {
      opacity:0
    },
  {
    opacity:1,
    duration:1
  })

  }, []);

  return (
    <div className="flex flex-row justify-center h-screen">
      <div className="cover w-2/5 h-full flex justify-center items-center">
        <img ref={imageRef} src="/cover.png" alt="image" />
      </div>
      <div className="flex flex-col w-2/5 h-full justify-center items-center">
        <h2 className="split text-2xl" ref={textRef}>
          こんにちは日本
        </h2>
        <p ref={phrase} className='p-2 m-2'>
        こんにちは日本 "HELLO JAPAN", is a community dedicated to celebrating and exploring Japanese culture.
        </p>
      </div>
    </div>
  );
}

export default Slogan;
