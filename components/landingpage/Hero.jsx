import React from "react";

const Hero = () => {
  return (
    <div className="hero-section w-full h-screen bg-custom-bg flex">
      <div className="container mx-auto px-4">
        <div className="content flex flex-col justify-center items-center max-w-6xl mx-auto pt-5 text-center">
          <h3 className="text-3xl font-semibold mb-3 md:text-8xl md:mt-20 md:font-bold">
            Simplify your SaaS solution with AI
          </h3>
          <p className="text-md md:text-lg leading-7 mb-8">
            Our AI SaaS tool is a cloud-based software delivery model. It helps
            businesses forecast demand for products and services and optimize
            inventory management and supply chain operations.
          </p>

          <div className="flex flex-col md:flex-row  gap-2 md:gap-5">
            <button className="relative bg-black border border-black rounded-[50px] text-white py-5 px-10 md:py-5 md:px-12 overflow-hidden group font-semibold text-sm md:text-base">
              <span className="absolute inset-0 bg-red-700 transform -translate-y-full transition-all duration-500 group-hover:translate-y-0" />
              <span className="relative z-10">Get Started for free</span>
            </button>
            <button className="relative py-5 px-10 md:py-5 md:px-12 border border-black rounded-[50px] text-black font-semibold overflow-hidden group text-sm md:text-base">
              <span className="absolute inset-0 bg-red-700 transform -translate-y-full transition-all duration-500 group-hover:translate-y-0" />
              <span className="relative z-10">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
