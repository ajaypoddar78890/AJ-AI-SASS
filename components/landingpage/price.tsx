"use client";

import React, { useState } from "react";

const Price = () => {
  // Toggle state between monthly and yearly subscription
  const [isYearly, setIsYearly] = useState(true);

  // Pricing for monthly and yearly subscriptions
  const pricing = {
    beginner: { monthly: 10, yearly: 100 },
    starter: { monthly: 20, yearly: 200 },
    pro: { monthly: 30, yearly: 300 },
  };

  return (
    <section className="px-6 py-20 bg-custom-bg">
      <div className="container mx-auto text-center mb-8  ">
        <h2 className="  text-3xl md:text-6xl lg:text-7xl font-bold max-w-3xl mx-auto leading-tight">
          Cost-effectively build any software
        </h2>
        {/* <p className="text-gray-500">Select the plan that fits your needs</p> */}
      </div>

      {/* Toggle for Monthly / Yearly pricing */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center px-8 py-4 rounded-full border-2 border-black bg-gradient-to-r from-gray-100 to-gray-200 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
          {/* Monthly Text */}
          <span
            className={`${
              !isYearly
                ? "font-bold text-xl text-gray-800"
                : "text-gray-500 font-normal text-md"
            } transition duration-300`}
          >
            Monthly
          </span>

          {/* Toggle Switch */}
          <label className="mx-4 relative">
            <input
              type="checkbox"
              className="hidden"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="toggle-bg w-16 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-500 ease-in-out">
              <div
                className={`dot w-7 h-7  bg-orange-600 rounded-full shadow-md transform duration-500 ease-in-out ${
                  isYearly ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </div>
          </label>

          {/* Annually Text */}
          <span
            className={`${
              isYearly
                ? "font-bold text-xl text-gray-800"
                : "text-gray-500 font-normal text-md"
            } transition duration-300`}
          >
            Annually
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-7xl mx-auto ">
        {/* Beginner Plan */}
        <div className="relative bg-white py-16 px-8 md:px-10 border rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          {/* Popular badge */}
          <span className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-white bg-black rounded-full">
            Most Popular
          </span>

          {/* Card Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Beginner
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Basic features for personal use
          </p>

          {/* Pricing */}
          <div className="text-5xl font-bold text-gray-800 mb-4">
            ${isYearly ? pricing.beginner.yearly : pricing.beginner.monthly}
            <span className="text-lg font-medium text-gray-500">
              /{isYearly ? "year" : "month"}
            </span>
          </div>
          <p className="text-sm md:text-base text-gray-600 mb-10">
            Perfect for individuals starting their journey.
          </p>

          {/* CTA Button */}
          <button className="w-full py-3 text-lg font-semibold text-white b to-indigo-500 rounded-lg  bg-orange-600 focus:outline-none focus:ring-4  transition duration-300 ease-in-out">
            Get Started
          </button>

          {/* Card Features */}
          <ul className="mt-8 space-y-2 text-left">
            <li className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Access to basic tools</span>
            </li>
            <li className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>24/7 customer support</span>
            </li>
            <li className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Free setup assistance</span>
            </li>
          </ul>
        </div>

        {/* Starter Plan */}
        <div className="relative bg-white py-16 px-8 md:px-10 border rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <span className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-white bg-black rounded-full">
            Best Value
          </span>

          {/* Card Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Starter
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            More features for small teams
          </p>

          {/* Pricing */}
          <div className="text-5xl font-bold text-gray-800 mb-4">
            ${isYearly ? pricing.starter.yearly : pricing.starter.monthly}
            <span className="text-lg font-medium text-gray-500">
              /{isYearly ? "year" : "month"}
            </span>
          </div>
          <p className="text-sm md:text-base text-gray-600 mb-10">
            Ideal for small businesses and growing teams.
          </p>

          {/* CTA Button */}
          <button className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r  rounded-lg bg-orange-600   focus:outline-none focus:ring-4   transition duration-300 ease-in-out">
            Get Started
          </button>

          {/* Card Features */}
          <ul className="mt-8 space-y-2 text-left">
            <li className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Collaboration tools for small teams</span>
            </li>
            <li className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Priority support</span>
            </li>
            <li className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Advanced integrations</span>
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="relative bg-white py-16 px-8 md:px-10 border rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <span className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-white bg-black rounded-full">
            Premium
          </span>

          {/* Card Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Pro
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Advanced features for large teams
          </p>

          {/* Pricing */}
          <div className="text-5xl font-bold text-gray-800 mb-4">
            ${isYearly ? pricing.pro.yearly : pricing.pro.monthly}
            <span className="text-lg font-medium text-gray-500">
              /{isYearly ? "year" : "month"}
            </span>
          </div>
          <p className="text-sm md:text-base text-gray-600 mb-10">
            Perfect for large enterprises and scaling projects.
          </p>

          {/* CTA Button */}
          <button className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r  rounded-lg bg-orange-600   focus:outline-none focus:ring-4   transition duration-300 ease-in-out">
            Get Started
          </button>

          {/* Card Features */}
          <ul className="mt-8 space-y-2 text-left">
            <li className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Unlimited team members</span>
            </li>
            <li className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Advanced reporting</span>
            </li>
            <li className="flex items-center space-x-2 text-sm md:text-base text-gray-700">
              <svg
                className="w-5 h-5 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Dedicated account manager</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Price;
