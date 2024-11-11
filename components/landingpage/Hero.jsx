import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-section w-full  bg-custom-bg flex lg:text-center">
      <div className="container mx-auto px-4">
        <div className="content flex flex-col justify-center   md:max-w-5xl mx-auto pt-5   md:mb-20 mb-5">
          <h3 className="text-focus-in text-4xl font-semibold mb-3 md:text-8xl md:mt-20 md:font-bold">
            Simplify your SaaS solution with AI
          </h3>
          <p className="text-focus-in2 text-md md:text-lg md:font-semibold font-medium  leading-7 md:my-8">
            Our AI SAAS tool is a cloud-based software delivery model. It helps
            businesses forecast demand for products and services and optimize
            inventory management and supply chain operations.
          </p>

          <div className=" buttonanimation flex md:mx-auto md:flex-row items-start  mt-5 gap-5 md:gap-5">
            <button className="relative  bg-black border border-black rounded-[50px] text-white py-4 px-4 md:py-5 md:px-12 overflow-hidden group font-semibold text-sm md:text-base">
              <span className="absolute inset-0 bg-red-700 transform -translate-y-full transition-all duration-500 group-hover:translate-y-0" />
              <span className="relative z-10">Get Started for free</span>
            </button>
            <button className="relative  py-4 px-4  md:py-5 md:px-12 border border-black rounded-[50px] text-black font-semibold overflow-hidden group text-sm md:text-base">
              <span className="absolute inset-0 bg-red-700 transform -translate-y-full transition-all duration-500 group-hover:translate-y-0" />
              <span className="relative z-10">Learn More</span>
            </button>
          </div>
        </div>
        <div className="buttonanimation hero-dashboard relative mx-auto h-[40vh]   md:h-[80vh] max-w-8xl mb-10 md:mb-16  border-b ">
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
