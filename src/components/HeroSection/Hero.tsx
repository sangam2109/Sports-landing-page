// components/Hero.tsx

import React from "react";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Android from "../../assets/Device Android FS (1).png";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 h-[-webkit-fill-available]">
      <div className="container mx-auto flex flex-col items-center md:flex-row  ">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Gndec Athletix App
          </h1>
          <p className="text-gray-300 mb-4">
            Elevate your athletic experience with the Gndec Athletix App. Track
            your progress, set goals, and stay connected with the community.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <Button
              color="primary"
              variant="shadow"
              className="w-full md:w-auto mb-4 md:mb-0"
            >
              Android Users
            </Button>
            <Button
              color="secondary"
              variant="shadow"
              className="w-full md:w-auto"
            >
              iOS Users
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* First Image */}
          <div className="p-4 mx-auto max-w-md mb-4">
            <Image
              isBlurred
              isZoomed
              src={Android}
              alt="App UI"
              width={200}
              height={200}
              className="rounded"
            />
          </div>

          {/* Second Image */}
          <div className="p-4 mx-auto max-w-md">
            <Image
              isBlurred
              isZoomed
              src={Android}
              alt="App UI"
              width={200}
              height={200}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
