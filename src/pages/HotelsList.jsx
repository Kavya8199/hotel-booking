<<<<<<< HEAD
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





































import React, { useState, useEffect } from "react";

const HotelsList = () => {
  const [city, setCity] = useState("");
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 20;

  

  // 🔹 Random rounded price (₹5000–₹25000)
  const getRandomPrice = () => {
    const price = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
    return `₹${Math.round(price / 100) * 100}`;
  };

  // 🔹 Random rating (1–5)
  const getRandomRating = () =>
    parseFloat((Math.random() * (5 - 1) + 1).toFixed(1));

  // ⭐ Render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center space-x-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-500">★</span>
        ))}
        {halfStar && <span className="text-yellow-500">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
        <span className="ml-1 text-gray-700 text-sm">{rating.toFixed(1)}</span>
      </div>
    );
  };

  // 🔹 Fetch hotels from backend
  const fetchHotels = async () => {
    if (!city.trim()) {
      alert("Please enter a city name or code.");
      return;
    }

    setLoading(true);

    try {
      // ✅ Connects to backend route
      const res = await fetch(`http://localhost:5000/api/hotels?city=${city}`);
      const data = await res.json();

      if (!data.hotels || data.hotels.length === 0) {
        setHotels([]);
        setFilteredHotels([]);
        setLoading(false);
        return;
      }

      // 🔹 Randomize missing data
      const hotelsData = data.hotels.map((hotel) => ({
        name: hotel.name || "Unnamed Hotel",
        address: hotel.address || city.toUpperCase(),
        price: hotel.price || getRandomPrice(),
        rating: hotel.rating === "N/A" ? getRandomRating() : getRandomRating(),
        image:
          hotel.image ||
          `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
            city
          )}`,
      }));

      setHotels(hotelsData);
      setFilteredHotels(hotelsData);
      setCurrentPage(1);
    } catch (error) {
      console.error("❌ Error fetching Hotelbeds data:", error);
      alert("Error fetching hotels from Hotelbeds API");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Apply filters
  useEffect(() => {
    let filtered = [...hotels];
    if (ratingFilter !== "all") {
      const minRating = parseFloat(ratingFilter);
      filtered = filtered.filter((h) => h.rating >= minRating);
    }
    if (priceFilter !== "all") {
      const [min, max] = priceFilter.split("-").map(Number);
      filtered = filtered.filter((h) => {
        const priceVal = Number(h.price.replace(/[^0-9]/g, ""));
        return priceVal >= min && priceVal <= max;
      });
    }
    setFilteredHotels(filtered);
    setCurrentPage(1);
  }, [hotels, ratingFilter, priceFilter]);

  const totalHotels = filteredHotels.length;
  const totalPages = Math.ceil(totalHotels / hotelsPerPage);
  const currentHotels = filteredHotels.slice(
    (currentPage - 1) * hotelsPerPage,
    currentPage * hotelsPerPage
  );

  const handleKeyPress = (e) => e.key === "Enter" && fetchHotels();

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto font-poppins">
      <h2 className="text-3xl font-semibold mb-6 text-primary">
        Welcome to Deccan Stay 🏨 Hotels
      </h2>

      {/* 🔍 Search + Filters */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        <input
          type="text"
          placeholder="Enter city code (e.g., BOM, DEL, HYD)"
          value={city}
          onChange={(e) => setCity(e.target.value.toUpperCase())}
          onKeyDown={handleKeyPress}
          className="flex-1 min-w-[250px] pl-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border rounded-xl px-4 py-2"
        >
          <option value="all">💰 All Prices</option>
          <option value="0-5000">₹0 - ₹5,000</option>
          <option value="5000-10000">₹5,000 - ₹10,000</option>
          <option value="10000-20000">₹10,000 - ₹20,000</option>
          <option value="20000-30000">₹20,000+</option>
        </select>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="border rounded-xl px-4 py-2"
        >
          <option value="all">⭐ All Ratings</option>
          <option value="3">3★ & up</option>
          <option value="4">4★ & up</option>
          <option value="4.5">4.5★ & up</option>
        </select>

        <button
          onClick={fetchHotels}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          🔍 Search
        </button>
      </div>

      {/* 🏨 Results */}
      {loading ? (
        <p>Loading hotels...</p>
      ) : totalHotels === 0 ? (
        <p>No hotels found for "{city}".</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentHotels.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {hotel.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{hotel.address}</p>

                  <div className="flex justify-between items-center">
                    {renderStars(hotel.rating)}
                    <span className="text-blue-600 font-bold">
                      {hotel.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 🔢 Pagination */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`px-5 py-2 rounded-xl ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
            >
              ⬅️ Previous
            </button>

            <span>
              Page <strong>{currentPage}</strong> of{" "}
              <strong>{totalPages}</strong>
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-5 py-2 rounded-xl ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
            >
              Next ➡️
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default HotelsList;
=======



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
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07
