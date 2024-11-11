"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // For animation

const AIPowered = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const numbersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounters(); // Start the counter animation
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }

    return () => {
      if (numbersRef.current) {
        observer.unobserve(numbersRef.current);
      }
    };
  }, []);

  const startCounters = () => {
    animateCounter(setCount1, 0, Math.floor(0.92 * 100), 2000); // Animate count1 to 92%
    animateCounter(setCount2, 0, Math.floor(0.75 * 100), 2000); // Animate count2 to 75%
  };

  const animateCounter = (setter, start, end, duration) => {
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <div className="aipowered-section px-5 py-10 md:px-10">
      <div className="container mx-auto md:max-w-7xl">
        <div className="grid md:grid-cols-2 md:rounded-3xl rounded-xl overflow-hidden relative   h-full">
          {/* Left Side: Image */}
          <div className="relative h-60 md:h-auto">
            <Image
              alt="ai-powered-image"
              src="/assets/images/aipowerdimg.webp"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.a
                href="https://www.youtube.com/watch?v=YOUR_VIDEO_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent rounded-full p-4 shadow-lg flex items-center justify-center"
                whileHover={{ scale: 1.2 }} // Animation on hover
                whileTap={{ scale: 0.9 }} // Animation on click
                aria-label="Play video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8.053L6.082 5.582c-.533-.274-.982.035-.982.688v3.46c0 .653.449.962.982.688l4.722-2.472c.533-.274.533-.718 0-.992zM8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7zm0 1c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-between bg-black text-white p-6  rounded- md:rounded-l-none">
            <div className="content py-2 md:py-10">
              <h2 className="text-3xl md:text-5xl font-bold my-4">
                AI-powered to streamline tasks
              </h2>
              <p className="text-sm md:text-lg">
                As your business grows or your AI SaaS needs change, you can
                easily adjust your subscription level to match those needs. This
                flexibility ensures that AI remains an asset.
              </p>
            </div>

            {/* Numbers Section */}
            <div
              className="numbers grid grid-cols-2 gap-4 bg-gray-900 rounded-xl p-6  my-5"
              ref={numbersRef}
            >
              <div>
                <h3 className="text-3xl md:text-5xl font-bold text-orange-600">
                  {count1} %
                </h3>
                <p className="text-sm md:text-lg">Customer service inquiries</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-5xl font-bold text-orange-600">
                  {count2} %
                </h3>
                <p className="text-sm md:text-lg">
                  Using financial institutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPowered;
