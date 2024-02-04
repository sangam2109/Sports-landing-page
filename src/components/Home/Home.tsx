import React from "react";
import background from "../../assets/background.png";
import { Image } from "@nextui-org/react";

const Home: React.FC = () => {
  return (
    <div id="Home" className="bg-dark relative w-full h-auto overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <Image
          src={background}
          alt="Background"
          className="w-[100vh] h-[70vh] md:h-[80vh] w-[320vh] object-cover filter blur-sm brightness-150 contrast-125 "
        />
      </div>
      <div className="absolute inset-0 flex flex-row items-center justify-center text-center md:flex flex-col">
        <div className="w-full h-auto ">
          <h1 className="text-6xl text-lightY mt-12 font-bold md:text-8xl">
            GNDEC ATHLETIX
          </h1>
      </div>
      <div className="text-xl m-8 pt-8 text-lightY md:text-4xl ">
        Elevate your athletic experience with the <b>GNDEC ATHLETIX App.</b> Your All in one Athletic Meet Registration App


      </div>
    </div>
    </div >
  );
};
export default Home;
