import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Android from "../../assets/iphones.png";
import ALogo from "../../assets/android-logo.png";
import { FaApple } from "react-icons/fa";

const TARGET_DATE = new Date("2025-02-07T12:00:00").getTime();

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(TARGET_DATE - new Date().getTime());
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const remaining = TARGET_DATE - now;
      setTimeLeft(remaining);

      if (remaining <= 0) {
        setIsAvailable(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms: number) => {
    if (ms <= 0) return "00:00:00";

    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="bg-dark px-4 pb h-[-webkit-fill-available]">
      <div className="container mx-auto flex flex-col-reverse items-center md:flex-row">
        {/* Left Section */}
        <div className="w-full pt-8 mt-8 md:w-1/2 flex justify-center items-center">
          <div className="mx-auto max-w-md">
            <Image filter-blur-sm src={Android} alt="App UI" width={200} height={200} className="rounded m-auto block" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-col items-center ">
          <h3 className="font-bold text-4xl text-white text-xl opacity-90 mt-12">Download the app</h3>

          {!isAvailable ? (
            <p className="text-white text-lg mt-2">Available After: {formatTime(timeLeft)}</p>
          ) : null}

          <div className="flex flex-col justify-center items-center md:flex-row gap-2 mt-4">
            <Button
              className="w-[80vw] md:w-fit px-8 text-white max-w-[240px]"
              variant="bordered"
              disabled={!isAvailable}
              onClick={() => window.open("https://github.com/sangam2109/Sports-landing-page/releases/download/app/GNDEC.Athletix.apk")}
            >
              <img width={40} src={ALogo} alt="" className="text-white" />
              Android
            </Button>

            <Button
              className="w-[80vw] md:w-fit px-8 text-white max-w-[240px]"
              color="primary"
              variant="shadow"
              disabled={!isAvailable}
              onClick={() => window.open("https://www.gndecathletix.games")}
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
