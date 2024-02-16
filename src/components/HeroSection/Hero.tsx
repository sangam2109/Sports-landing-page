// components/Hero.tsx

import React from "react";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Android from "../../assets/iphones.png";
import ALogo from "../../assets/android-logo.png";
import { FaApple } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <div className="bg-dark px-4 pb h-[-webkit-fill-available]">
      <div className="container mx-auto flex flex-col-reverse items-center md:flex-row  ">
        {/* Left Section */}
        <div className="w-full pt-8 mt-8 md:w-1/2 flex justify-center items-center">
          {/* Image */}
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
                // onClick={()=>{document.getElementById('body')?.scrollIntoView({behavior:'smooth', block:'center'})}}
                onClick={()=>{window.open("https://github.com/sangam2109/Sports-landing-page/releases/download/app/GNDEC.Athletix.apk")}}
              >
                
                <img width={40} src={ALogo} alt="" className="text-white" />
                Android
              </Button>

              <Button
                className="w-[80vw] md:w-fit px-8 text-white max-w-[240px]  "
                color="primary"
                variant="shadow"
                // onClick={()=>{document.getElementById('body')?.scrollIntoView({behavior:'smooth', block:'center'})}}
                onClick={()=>{window.open("https://www.gndecathletix.games")}}
              >
                <FaApple size={21} />
                IOS
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
