import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.slice(1);
    
    gsap.set(cards, {
      yPercent: 200
    });

    const animation = gsap.to(cards, {
      yPercent: 0,
      duration: 3.5,
      stagger: 2.5
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=300%",
      pin: rightPanelRef.current,
      animation: animation,
      //markers: true,
      scrub: 4,
      anticipatePin: 1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="min-h-[400vh] w-full relative">
      <div ref={rightPanelRef} className="sticky top-0 w-full flex justify-center py-10">
        <div className="relative w-[60vw] h-[80vh] overflow-hidden">
          {/* FOOD */}
          <div 
            ref={addToRefs}
            className="absolute w-full h-full flex flex-row items-center p-6 bg-red-400 rounded-lg shadow-md"
          >
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mb-4 w-full text-center">Japan's Food Culture</h1>
              <p className="text-md">
                Discover the heart of Japan's culinary heritage with an unforgettable journey through its iconic flavors. Experience the art of sushi-making with a hands-on workshop led by expert chefs, then savor the vibrant atmosphere of bustling street food markets, tasting takoyaki and okonomiyaki. Indulge in a cozy ramen experience at a hidden local spot and enjoy the elegance of a kaiseki meal, a true feast for the senses. Let us take you on a gastronomic adventure where every bite tells a story.
              </p>
            </div>
            <img 
              className="w-1/2 h-96 object-cover m-4 rounded-lg" 
              src="images/ramen.webp" 
              alt="Ramen"
            />
          </div>

          {/* TOKYO */}
          <div 
            ref={addToRefs}
            className="absolute w-full h-full flex flex-row items-center p-6 bg-blue-400 rounded-lg shadow-md"
          >
             <img 
              className="w-1/2 h-96 object-cover m-4 rounded-lg" 
              src="images/tokyo.webp" 
              alt="Tokyo"
            />
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mb-4 w-full text-center">Discover Tokyo</h1>
              <p className="text-md">
                Step into the dazzling world of Tokyo, where ancient traditions seamlessly blend with cutting-edge innovation. Explore the serene Senso-ji Temple in the morning, then dive into the electric atmosphere of Akihabara's gaming districts. Experience the precision of the Tsukiji Outer Market's sushi masters, and marvel at the city's skyline from the Tokyo Skytree. From peaceful garden ceremonies to the organized chaos of Shibuya Crossing, Tokyo offers an unforgettable urban adventure that captivates all your senses.
              </p>
            </div>
           
          </div>

          {/* FUJI */}
          <div 
            ref={addToRefs}
            className="absolute w-full h-full flex flex-row items-center p-6 bg-green-400 rounded-lg shadow-md"
          >
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mb-4 w-full text-center">The Beauty of Mount Fuji</h1>
              <p className="text-md">
                Experience the majestic presence of Japan's most iconic natural wonder, Mount Fuji. Rising gracefully to 3,776 meters, this sacred mountain has inspired artists and pilgrims for centuries. Discover the perfect harmony of nature as you explore the Five Lakes region, each offering unique reflections of Fuji-san's perfect cone. Trek through ancient forests, relax in natural hot springs with mountain views, and witness breathtaking sunrises that paint the sky in brilliant hues. Let Mount Fuji's timeless beauty create memories that will last a lifetime.
              </p>
            </div>
            <img 
              className="w-1/2 h-96 object-cover m-4 rounded-lg" 
              src="images/fuji.webp" 
              alt="Mount Fuji"
            />
          </div>

          {/* THEATER */}
          <div 
            ref={addToRefs}
            className="absolute w-full h-full flex flex-row items-center p-6 bg-purple-400 rounded-lg shadow-md"
          >
            <img 
              className="w-1/2 h-96 object-fit m-4 rounded-lg" 
              src="images/kabuki.webp" 
              alt="Kabuki"
            />
            <div className="w-1/2">
              <h1 className="text-2xl font-bold mb-4 w-full text-center">Kabuki Theater</h1>
              <p className="text-md">
                Immerse yourself in the dramatic world of Kabuki, where centuries-old theatrical traditions come alive through spectacular performances. Witness the intricate face paintings, elaborate costumes, and stylized movements that tell stories of ancient Japan. Experience the unique blend of dance, drama, and music in a historic theater where master performers transform into legendary characters. From the thunderous stamps of the actors to the haunting sounds of the shamisen, every moment in a Kabuki performance is carefully crafted to transport you to another world.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;