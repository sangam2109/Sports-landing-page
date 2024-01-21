// components/Hero.tsx

import React from "react";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Android from "../../assets/Device Android FS (1).png";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16 px-4 h-[-webkit-fill-available]">
      <div className="container mx-auto flex flex-col-reverse items-center md:flex-row  ">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Gndec Athletix
          </h1>
          <p className="text-gray-300 mb-4">
            Elevate your athletic experience with the Gndec Athletix App. Track
            your progress, set goals, and stay connected with the community.
          </p>
          {/* <div className="flex flex-col md:flex-row md:space-x-4"> */}
                    <h3 className="font-bold  text-white opacity-90 mt-8">Get the app</h3>
          <div className="flex flex-col justify-center items-center  md:flex-row gap-2 mt-2" >
                    <Button className="w-[80vw] md:w-fit px-8 text-white max-w-[240px]" variant="bordered">
                        <img width={20} src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/logos/logo-google.png" alt="" />
                        Android
                    </Button>
                    <Button className="w-[80vw] md:w-fit px-8 text-white max-w-[240px] " color='primary' variant="shadow">
                        <img width={20} src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/logos/logo-google.png" alt="" />
                        IOS
                    </Button>
          </div>
          {/* </div> */}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          {/* First Image */}
          {/* <div className="p-4 mx-auto max-w-md mb-4">
            {/* <Image
              isBlurred
              isZoomed
              src={Android}
              alt="App UI"
              width={200}
              height={200}
              className="rounded"
            /> */}
          {/* </div>  */}

          {/* Second Image */}
          <div className="p-4 mx-auto max-w-md">
            <Image
              isBlurred
              isZoomed
              src={Android}
              alt="App UI"
              width={200}
              height={200}
              className="rounded m-auto block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
