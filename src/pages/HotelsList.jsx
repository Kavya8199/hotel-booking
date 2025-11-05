// import React from "react";
// import MostPicked from "../components/MostPicked";
// import HouseWithBackyard from "../components/HouseWithBackyard";
// import HotelsLivingRoom from "../components/HotelsLivingRoom";

// const HotelsList = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-primary mb-10 text-center">
//         Available Hotels
//       </h1>

//       <p className="text-center text-gray-600 mb-14">
//         Here you can explore and book the best hotels with <span className="font-semibold text-secondary">Deccan Stay</span>.
//       </p>

//       {/* Hotel Sections */}
//       <MostPicked />
//       <HouseWithBackyard />
//       <HotelsLivingRoom />
//     </div>
//   );
// };

// export default HotelsList;





































import React, { useState, useEffect, useCallback } from "react";

const HotelList = () => {
  const [city, setCity] = useState("Hyderabad");
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

  // 🧠 Fetch hotel data (using dummy data for now, can connect API later)
  const fetchHotels = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      // Simulated hotel data (you can plug in Amadeus or RapidAPI later)
      const hotelList = [
        { id: 1, name: "Taj Hotel", location: city, rating: 4.7, price: 8500 },
        { id: 2, name: "Oberoi Grand", location: city, rating: 4.5, price: 7200 },
        { id: 3, name: "ITC Kakatiya", location: city, rating: 4.3, price: 6400 },
        { id: 4, name: "Hyatt Regency", location: city, rating: 4.2, price: 5800 },
        { id: 5, name: "Marriott", location: city, rating: 4.8, price: 9500 },
      ];

      // Fetch Unsplash image for each hotel
      const hotelsWithImages = await Promise.all(
        hotelList.map(async (hotel) => {
          try {
            const res = await fetch(
              `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                hotel.name + " hotel"
              )}&client_id=${UNSPLASH_KEY}&per_page=1`
            );
            const data = await res.json();
            const imageUrl =
              data.results?.[0]?.urls?.regular ||
              "https://placehold.co/400x300?text=No+Image";
            return { ...hotel, image: imageUrl };
          } catch {
            return { ...hotel, image: "https://placehold.co/400x300?text=No+Image" };
          }
        })
      );

      setHotels(hotelsWithImages);
      setFilteredHotels(hotelsWithImages);
    } catch (err) {
      console.error("❌ Error fetching hotels:", err);
      setError("Failed to load hotels.");
    } finally {
      setLoading(false);
    }
  }, [city, UNSPLASH_KEY]);

  // 🔍 Apply filters
  useEffect(() => {
    const filtered = hotels.filter(
      (h) => h.rating >= minRating && h.price <= maxPrice
    );
    setFilteredHotels(filtered);
  }, [hotels, minRating, maxPrice]);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-primary">Find Hotels</h1>

      {/* 🔍 Search bar */}
      <div className="flex flex-col sm:flex-row mb-6 gap-3">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={fetchHotels}
          className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary/90"
        >
          Search
        </button>
      </div>

      {/* 🧩 Filter controls */}
      <div className="flex flex-col sm:flex-row gap-6 mb-6 items-center">
        <div>
          <label className="block text-sm font-medium mb-1">
            Minimum Rating: {minRating}⭐
          </label>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={minRating}
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
            className="w-48"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Max Price: ₹{maxPrice}
          </label>
          <input
            type="range"
            min="1000"
            max="10000"
            step="500"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
            className="w-48"
          />
        </div>
      </div>

      {loading && <p className="text-gray-500">Loading hotels...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* 🏨 Hotel cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg">{hotel.name}</h2>
                <p className="text-gray-500 text-sm">{hotel.location}</p>
                <p className="text-yellow-500 mt-1">⭐ {hotel.rating}</p>
                <p className="text-primary font-bold mt-2">
                  ₹{hotel.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))
        ) : (
          !loading &&
          !error && (
            <p className="text-gray-500 col-span-full text-center">
              No hotels found for this search.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default HotelList;
