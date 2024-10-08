import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-section w-full  bg-custom-bg flex">
      <div className="container mx-auto px-4">
        <div className="content flex flex-col justify-center items-center max-w-5xl mx-auto pt-5 text-center mb-20">
          <h3 className="text-3xl font-semibold mb-3 md:text-8xl md:mt-20 md:font-bold">
            Simplify your SaaS solution with AI
          </h3>
          <p className="text-md md:text-lg font-semibold leading-7 my-8">
            Our AI SAAS tool is a cloud-based software delivery model. It helps
            businesses forecast demand for products and services and optimize
            inventory management and supply chain operations.
          </p>

          <div className="flex flex-col md:flex-row  mt-5 gap-2 md:gap-5">
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
        <div className="hero-dashboard relative mx-auto h-[40vh]   md:h-[80vh] max-w-8xl mb-20  border-b ">
          <Image
          
            src="/assets/images/hero-dashboard.webp"
            alt="Hero Dashboard"
            fill // Enables responsive behavior
            className="object-cover rounded-xl" // Ensures the image scales properly within its container
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
