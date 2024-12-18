import React from 'react'

function Cards() {
  return (
    <div className="w-screen">
      {/* Japan's Food Culture */}
      <div className="flex flex-row m-4 p-4 rounded-lg justify-center">
        <div className="w-1/2 pr-4">
          <h1 className="text-xl font-bold mb-2">Japan's Food Culture</h1>
          <p className="text-sm text-gray-700">
            Embark on a culinary adventure in Japan, where every meal tells a story.
            From the iconic sushi and sashimi to comforting bowls of ramen, Japan's 
            cuisine is a feast for the senses. Don't miss street food delights like takoyaki
            in Osaka or the savory okonomiyaki. For a more refined experience, try kaiseki,
            a multi-course meal that showcases seasonal ingredients and traditional techniques.
            Whether you're dining in a Michelin-starred restaurant or enjoying a meal at a
            local izakaya, Japan's food scene is sure to leave you craving more.
          </p>
        </div>
        <img className="w-1/5 h-72 object-fit rounded-lg" src="images/ramen.webp" alt="Ramen" />
      </div>

      {/* Discover Tokyo */}
      <div className="flex flex-row m-4 p-4 rounded-lg justify-center">
      <img className="w-1/5 h-72 object-fit rounded-lg" src="images/tokyo.webp" alt="Tokyo" />
        <div className="w-1/2 pr-4 ml-6">
          <h1 className="text-xl font-bold mb-2">Discover Tokyo</h1>
          <p className="text-sm text-gray-700">
            Tokyo, Japan's bustling capital, is a city of contrasts, blending the ultramodern with the deeply traditional. 
            Wander through historic districts like Asakusa, home to the iconic Senso-ji Temple, and marvel at the towering skyscrapers of Shinjuku and Shibuya. 
            Experience the vibrant nightlife, unique shopping in Harajuku, and serene parks like Ueno. Whether you're a fan of cutting-edge technology, anime culture, 
            or tranquil tea ceremonies, Tokyo offers something for everyone.
          </p>
        </div>
        
      </div>

      {/* The Beauty of Mount Fuji */}
      <div className="flex flex-row m-4 p-4 rounded-lg justify-center">
        <div className="w-1/2 pr-4">
          <h1 className="text-xl font-bold mb-2">The Beauty of Mount Fuji</h1>
          <p className="text-sm text-gray-700">
            Mount Fuji, or "Fuji-san," is Japan's tallest peak and a symbol of beauty and resilience. 
            Located near Tokyo, this majestic mountain attracts adventurers and nature lovers from around the world. 
            Hiking enthusiasts can tackle the trails during the summer climbing season, while others can enjoy its breathtaking views from nearby spots like Lake Kawaguchi. 
            With its snow-capped peak and cultural significance, Mount Fuji is a must-visit destination.
          </p>
        </div>
        <img className="w-1/5 h-72 object-fit rounded-lg" src="images/fuji.webp" alt="Mount Fuji" />
      </div>

      {/* Japan's Artistic Heritage: Kabuki Theater */}
      <div className="flex flex-row m-4 p-4 rounded-lg justify-center">
        <img className="w-1/5 h-72 object-fit rounded-lg" src="images/kabuki.webp" alt="Kabuki Theater" />
        <div className="w-1/2 pr-4 ml-6">
          <h1 className="text-xl font-bold mb-2">Japan's Artistic Heritage: Kabuki Theater</h1>
          <p className="text-sm text-gray-700">
            Dive into the captivating world of Kabuki, Japan's traditional theatrical art form. 
            Known for its dramatic storytelling, elaborate costumes, and striking makeup, Kabuki has been entertaining audiences since the Edo period. 
            Performances often blend music, dance, and drama to depict historical tales and moral lessons. 
            Witnessing a live show in Tokyo's Kabuki-za Theater is an unforgettable cultural experience that provides insight into Japan's artistic soul.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default Cards
