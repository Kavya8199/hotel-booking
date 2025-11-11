import React from "react";
import MostPicked from "../components/MostPicked";
import HouseWithBackyard from "../components/HouseWithBackyard";
import HotelsLivingRoom from "../components/HotelsLivingRoom";

const HotelsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-primary mb-10 text-center">
        Explore Our Hotels
      </h1>

      {/* Sections */}
      <MostPicked />
      <HouseWithBackyard />
      <HotelsLivingRoom />
    </div>
  );
};

export default HotelsPage;
