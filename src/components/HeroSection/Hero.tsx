// components/Hero.tsx

import React from "react";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Android from "../../assets/iphones.png";
import { FaApple } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-900 px-4 pb h-[-webkit-fill-available]">
      <div className="container mx-auto flex flex-col-reverse items-center md:flex-row  ">
        {/* Left Section */}
        <div className="w-full pt-8 mt-8 md:w-1/2 flex justify-center items-center">
          {/* Second Image */}
          <div className="mx-auto max-w-md">
            <Image
              filter-blur-sm
              src={Android}
              alt="App UI"
              width={200}
              height={200}
              className="rounded m-auto block"
            />
          </div>
        </div>

         {/* Right Section */}
        <div className="flex flex-col md:flex-col items-center ">
          <h3 className="font-bold text-4xl text-white text-xl opacity-90 mt-12">
            Download the app
          </h3>
          <div className="flex flex-col justify-center items-center  md:flex-row gap-2 mt-4">
            <Button
              className="w-[80vw] md:w-fit px-8 text-white max-w-[240px]"
              variant="bordered"
            >
              <img
                width={20}
                src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/logos/logo-google.png"
                alt=""
              />
              Android
            </Button>
            <Button
              className="w-[80vw] md:w-fit px-8 text-white max-w-[240px] "
              color="primary"
              variant="shadow"
            >
              {/* <img width={20} src={FaApple} alt="" /> */}
              <FaApple size={21} />
              IOS
            </Button>
          </div>
          {/* </div> */}
        </div>

       
      </div>
    </div>
  );
};

export default Hero;
