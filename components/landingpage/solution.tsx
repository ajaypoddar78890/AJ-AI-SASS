import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const Solution = () => {
  return (
    <div className="solution-section py-10 md:py-20 ">
      <div className="container mx-auto px-5  ">
        <div className="grid md:grid-cols-2  md:gap-8">
          {" "}
          <div className="left w-full h-auto">
            <Image
              alt="left image"
              src="/assets/images/content-image-1.webp"
              layout="responsive"
              width={700}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="right w-full h-auto flex flex-col  pt-5 md:pt-10 px-5 md:px-8  ">
            {" "}
            <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-5">
              Accessible to a wider audience
            </h2>
            <p className="text-md font-medium mb-4">
              Advanced AI capabilities accessible to a broader audience,
              including small & medium-sized businesses and individuals who may
              not have the resources or expertise to develop.
            </p>
            <p className="text-md">
              Our platform enables users to leverage cutting-edge AI technology
              to solve complex problems without requiring technical expertise.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 mt-10 md:mt-32">
          <div className="right w-full h-auto flex flex-col    px-6 md:px-12  ">
            {" "}
            <h2 className="text-3xl md:text-6xl   font-bold mb-8 ">
              Providing quick deploy solutions
            </h2>
            <p className="text-md">
              Our AI SaaS solutions can be quickly deployed, enabling users to
              start benefiting from AI capabilities without lengthy setup and
              development times in fast-paced industries.
            </p>
            <ul className="space-y-4 mt-5 font-semibold">
              <li className="flex items-start ">
                <CheckCircle className="text-black w-6 h-6 mr-3" />{" "}
                {/* Check Icon */}
                <span className="text-lg">
                  Fast deployment with minimal configuration.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-black w-6 h-6 mr-3" />{" "}
                {/* Check Icon */}
                <span className="text-lg">
                  Tailored AI solutions for various industries.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-check w-6 h-6 mr-3" />{" "}
                {/* Check Icon */}
                <span className="text-lg">
                  Seamless integration into existing workflows.
                </span>
              </li>
            </ul>
          </div>
          <div className="left w-full h-auto">
            <Image
              alt="left image"
              src="/assets/images/content-image-2.webp"
              layout="responsive"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
