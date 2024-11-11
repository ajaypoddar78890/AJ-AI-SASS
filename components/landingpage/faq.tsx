"use client";
import { useState, useRef } from "react";
import Link from "next/link";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [height, setHeight] = useState(0);
  const contentRefs = useRef([]);

  // Toggle FAQ answer visibility
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setHeight(0);
    } else {
      setActiveIndex(index);
      setHeight(contentRefs.current[index].scrollHeight); // Set the height to match the content
    }
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days for a full refund.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to selected countries.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You will receive an email with a tracking link once your order has shipped.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, PayPal, and other secure payment options.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary depending on your location, but most orders arrive within 5-7 business days.",
    },
  ];

  return (
    <section className="py-8 md:py-20 px-4  bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
        {/* Left Column - Title, Description, CTA */}
        <div className="space-y-6">
          <h2 className="text-3xl  md:text-6xl font-normal md:font-semibold text-gray-800">
            Freely ask us for more information
          </h2>
          <p className="text-gray-600 text-md md:text-xl font-medium">
            Our AI SaaS solutions can be quickly deployed, enabling users to
            start benefiting from AI capabilities without lengthy setup and
            development times in fast-paced industries.
          </p>
          <Link
            href="/sign-up"
            className="relative  whitespace-nowrap inline-flex items-center justify-center px-10 py-3 border border-black rounded-full shadow-lg text-base font-semibold text-white bg-black overflow-hidden group hover:text-white transform transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-red-700 transform -translate-y-full transition-all duration-500 group-hover:translate-y-0" />
            <span className="relative z-10">FAQ</span>
          </Link>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-400">
              <button
                className="w-full text-left text-md font-medium py-3 flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="text-orange-700 font-semibold">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>

              {/* Accordion content with smooth transition */}
              <div
                ref={(el) => (contentRefs.current[index] = el)} // Capture ref for height calculations
                className="overflow-hidden transition-all duration-300"
                style={{
                  height: activeIndex === index ? `${height}px` : "0",
                }}
              >
                <div className="py-2 text-gray-600 ">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
