/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { FaApple } from "react-icons/fa";
import ALogo from "../../assets/android-logo.png";

const TARGET_DATE = new Date("2025-02-07T12:00:00").getTime();

export const Footer = ({ setSelectedCard }: any) => {
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
    <footer className="bg-[#212121]">
      <section className="bg-[#212121] w-full text-white flex flex-col justify-between items-center md:flex-row p-8">
        <div className="left">
          <h1 className="text-xl text-center text-white md:text-start font-bold">GNDEC ATHLETIX</h1>
          <p className="text-center opacity-80 md:text-start">
            Your All-in-One Athletic Meet Registration App
          </p>
          <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 font-normal">
            <a href="#Home">
              <li>Home</li>
            </a>
            <a
              onClick={() => {
                setSelectedCard(1);
                document.getElementById("EventListCont")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              href="#howToRegister"
            >
              <li>How to Register</li>
            </a>
            <a
              onClick={() => {
                setSelectedCard(2);
                document.getElementById("EventListCont")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              href="#EventDetails"
            >
              <li>Events</li>
            </a>
            <a href="#DevTeam">
              <li>Dev Team</li>
            </a>
            <a href="https://docs.google.com/forms/d/1_Iwr8IrmGebCCm94TL-mWa3H4MjsUPdswBs5sGd-KZ0/edit">
              <li>Contact Us</li>
            </a>
            <a href="https://gallery.gndecathletix.games">
              <li>Gallery</li>
            </a>
          </ul>
        </div>

        <div className="right flex flex-col items-center gap-2 mt-8">
          <h3 className="font-bold mr-auto">Get the app</h3>

          {!isAvailable ? (
            <p className="text-white text-lg mt-2">Available After: {formatTime(timeLeft)}</p>
          ) : null}

          <Button
            className="text-white w-[80vw] max-w-[240px]"
            variant="bordered"
            disabled={!isAvailable}
            onClick={() => {
              window.open(
                "https://github.com/sangam2109/Sports-landing-page/releases/download/app/GNDEC.Athletix.apk"
              );
            }}
          >
            <img width={45} src={ALogo} alt="Android Logo" />
            Android
          </Button>

          <Button
            className="w-[80vw] max-w-[240px]"
            variant="shadow"
            color="primary"
            disabled={!isAvailable}
            onClick={() => {
              window.open("https://www.gndecathletix.games");
            }}
          >
            <FaApple size={21} />
            IOS
          </Button>
        </div>
      </section>

      <hr className="w-[80vw] m-auto bg-white opacity-60" />
      <section className="bg-[#212121] w-full text-white flex flex-col items-center p-4">
        <div>
          <p
            className="text-center opacity-60"
            onClick={() => {
              window.open("https://info.gndecathletix.games");
            }}
          >
            © 2025 gndecathletix.games
          </p>
        </div>
      </section>
    </footer>
  );
};
