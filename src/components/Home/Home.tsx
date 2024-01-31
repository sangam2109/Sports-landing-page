import React from "react";
import background from "../../assets/background.png";
import { Image } from "@nextui-org/react";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 relative wfull h-auto overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <Image
          src={background}
          alt="Background"
          className="w-[100vh] h-[60vh] md:h-[80vh] w-[320vh] object-cover opacity-25 filter blur-sm brightness-105 contrast-125 "
        />
      </div>
      <div className="absolute inset-0 flex flex-row items-center justify-center text-white text-center md:flex flex-col">
        <div className="w-full h-auto">
          <h1 className="text-6xl m-4 font-bold md:text-8xl"> GNDEC ATHLETIX</h1>
        </div>
        <div className="text-xl m-8 pt-8 md:text-4xl ">
          Elevate your athletic experience with the Gndec Athletix App. Track
          your progress, set goals, and stay connected with the community.
        </div>
      </div>
    </div>
  );
};
export default Home;
