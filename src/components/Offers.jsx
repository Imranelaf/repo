import { useState } from "react";
import offers from "../data/data";
import ReactParallaxTilt from "react-parallax-tilt";

function Offers() {
  const [offerList, setOfferList] = useState(offers);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Travel Offers</h1>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {offerList.map((offer, index) => (
          <ReactParallaxTilt
            key={index}
            style={{ width: "20rem" }}
            className="flex"
          >
            <div
              className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {offer.duration} Offer
              </h2>
              <p className="mb-2">
                <span className="font-medium">Meals:</span> {offer.meals}
              </p>
              <div className="mb-2">
                <span className="font-medium">Destinations:</span>
                <ul className="list-disc list-inside text-gray-700">
                  <li
                    className={
                      offer.destinations.tokyo == "Included" ? "text-green-500" : "text-red-500"
                    }
                  >
                    Tokyo: {offer.destinations.tokyo}
                  </li>
                  <li
                    className={
                      offer.destinations.mountFuji == "Included" ? "text-green-500" : "text-red-500"
                    }
                  >
                    Mount Fuji: {offer.destinations.mountFuji}
                  </li>
                  <li
                    className={
                      offer.destinations.theater == "Included" ? "text-green-500" : "text-red-500"
                    }
                  >
                  Theater: {offer.destinations.theater}
                  </li>
                </ul>
              </div>
              <div className="mb-2">
                <span className="font-medium">Accommodation:</span>
                <ul className="list-disc list-inside text-gray-700">
                  
                  <p>
                    {offer.accommodation.description}
                  </p>
                  <p>
                    Rating: {offer.accommodation.rating}
                  </p>
                </ul>
              </div>
              <p className="mb-4">
                <span className="font-medium">Price:</span> {offer.price}
              </p>
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                Book Now
              </button>
            </div>
          </ReactParallaxTilt>
        ))}
      </div>
    </div>
  );
}

export default Offers;
