import React from "react";

const HeroSection = () => {
  return (
    <>
    <div className="bg-gray-900 text-white py-20 h-[85vh]">

      <div className="text-center mt-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Find Your Dream Job Today!
        </h1>
        <p className="text-gray-300 mt-4">
          Connecting Talent with Opportunity: Your Gateway to Career Success
        </p>

        {/* Search Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-center max-w-[900px] mx-auto">
          <input
            type="text"
            placeholder="Job Title or Company"
            className="w-full md:w-1/4 px-4 py-6 text-gray-900 border border-gray-300 md:rounded-l-xl"
          />
          <select
            className="w-full md:w-1/4 px-4 py-3 text-gray-900 border border-gray-300"
          >
            <option>Select Location</option>
            <option>New York</option>
            <option>San Francisco</option>
          </select>
          <select
            className="w-full md:w-1/4 px-4 py-3 text-gray-900 border border-gray-300"
          >
            <option>Select Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
          </select>
          <button className="bg-[#31c4ae] px-6 py-3 text-white hover:bg-green-600 md:rounded-r-md">
            Search Job
          </button>
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-16">
          <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#31c4ae] text-white rounded-full">
              <i className="fas fa-briefcase text-sm sm:text-lg"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">25,850</h2>
              <p className="text-gray-300 text-sm sm:text-base">Jobs</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#31c4ae] text-white rounded-full">
              <i className="fas fa-user text-sm sm:text-lg"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">10,250</h2>
              <p className="text-gray-300 text-sm sm:text-base">Candidates</p>
            </div>
          </div>

         <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#31c4ae] text-white rounded-full">
              <i className="fas fa-building text-sm sm:text-lg"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">18,400</h2>
              <p className="text-gray-300 text-sm sm:text-base">Companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex bg-black  text-white justify-center space-x-36  p-10">
        <img src="/spotify.png" alt="Spotify" className="w-20" />
        <img src="/slack.png" alt="Slack" className="w-20" />
        <img src="/adobe.png" alt="Adobe" className="w-20" />
        <img src="/asana.png" alt="Asana" className="w-20" />
        <img src="/linear.png" alt="Linear" className="w-20" />
      </div>
    </>
  );
};

export default HeroSection;
