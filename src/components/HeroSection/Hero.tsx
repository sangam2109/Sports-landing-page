// components/Hero.tsx

import React from "react";
import { Button } from "@nextui-org/react";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 h-[80vh]">
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
        <div className="w-full md:w-1/2">
          {/* Replace 'your_image_path' with the actual path of your UI images */}
          {/* <Image
            src="/your_image_path.png"
            alt="App UI"
            width={400}
            height={400}
            className="rounded"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
