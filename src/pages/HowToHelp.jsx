import React from "react";

const HowToHelp = () => {
  return (
    <section className="bg-gradient-to-b from-orange-300-50 to-orange-300-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold  mb-8">
          How You Can Make a Difference
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Whether it's through donations, volunteering, or spreading awareness, your help matters. Here's how you can get involved and support our cause.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-6">
            <span className=" text-3xl font-bold">1</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Donate</h3>
          <p className="text-gray-600">
            Contribute to our campaigns and help us provide essential resources to those in need.
          </p>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-6">
            <span className=" text-3xl font-bold">2</span>
          </div>
          <h3 className="text-2xl font-semibold  mb-4">Drop-off Goods</h3>
          <p className="text-gray-600">
            Bring your contributions—clothes, food, or other essentials—to our collection points.
          </p>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full mb-6">
            <span className=" text-3xl font-bold">3</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Volunteer</h3>
          <p className="text-gray-600">
            Join us to distribute aid, organize events, and make a direct impact in your community.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <button className="px-6 py-3 bg-orange-300 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition-colors duration-300">
          Donation Now
        </button>
      </div>
    </section>
  );
};

export default HowToHelp;
