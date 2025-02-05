/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Chip } from "@nextui-org/react";
import "./Time.css";

const Time = () => {
  const [countdown, setCountdown] = useState(false);

  useEffect(() => {
    const FlipCardAnim = (i: any, flipCard: any) => {
      if (!flipCard) return;
      const c = flipCard.children;
      const topHalf = c[0];
      const bottom = c[1];
      const topFlip = document.createElement("div");
      const bottomFlip = document.createElement("div");

      topFlip.classList.add("top-flip");
      bottomFlip.classList.add("bottom-flip");

      let tempI = i;
      if (i - 1 === -2) tempI = 59;

      topHalf.textContent = tempI - 1 < 10 ? `0${tempI - 1}` : `${tempI - 1}`;
      bottom.textContent = tempI < 10 ? `0${tempI}` : `${tempI}`;
      topFlip.textContent = tempI - 1 < 10 ? `0${tempI - 1}` : `${tempI - 1}`;
      bottomFlip.textContent = tempI < 10 ? `0${tempI}` : `${tempI}`;

      topFlip.addEventListener("animationstart", () => {
        topHalf.textContent = tempI - 1 < 10 ? `0${tempI - 1}` : `${tempI - 1}`;
      });

      topFlip.addEventListener("animationend", () => {
        topFlip.remove();
      });

      bottomFlip.addEventListener("animationend", () => {
        bottom.textContent = tempI - 1 < 10 ? `0${tempI - 1}` : `${tempI - 1}`;
        bottomFlip.remove();
      });

      flipCard.appendChild(topFlip);
      flipCard.appendChild(bottomFlip);
    };

    const launchDate = new Date("2025-02-07T12:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        setCountdown(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const secCard = document.getElementById("flipCardSec");
      const minCard = document.getElementById("flipCardMin");
      const hrCard = document.getElementById("flipCardHour");
      const dayCard = document.getElementById("flipCardDay");

      if (minutes !== 0 && seconds === 59) FlipCardAnim(minutes + 1, minCard);
      if (hours !== 0 && minutes === 59 && seconds === 59) FlipCardAnim(hours + 1, hrCard);
      if (days !== 0 && hours === 59 && minutes === 59 && seconds === 59) FlipCardAnim(days + 1, dayCard);

      document.getElementById("secTop")!.innerHTML = seconds.toString();
      document.getElementById("secBottom")!.innerHTML = seconds.toString();
      FlipCardAnim(seconds, secCard);

      document.getElementById("minTop")!.innerHTML = minutes.toString();
      document.getElementById("minBottom")!.innerHTML = minutes.toString();
      document.getElementById("hourTop")!.innerHTML = hours.toString();
      document.getElementById("hourBottom")!.innerHTML = hours.toString();
      document.getElementById("dayTop")!.innerHTML = days.toString();
      document.getElementById("dayBottom")!.innerHTML = days.toString();
    };

    const loop = setInterval(updateCountdown, 1000);
    return () => clearInterval(loop);
  }, [countdown]);

  return (
    <div className="Timerbody" id="body">
      <div className="flex flex-col text-lightB items-center text-3xl font-bold mb-8 md:text-7xl">
        Registration Starts After
      </div>

      {!countdown ? (
        <main className="center" id="timer">
          <div className="flipCard" id="flipCardDay">
            <div className="top" id="dayTop">00</div>
            <div className="bottom" id="dayBottom">00</div>
            <div className="circle"></div>
            <div className="circle-2"></div>
          </div>
          <div className="flipCard" id="flipCardHour">
            <div className="top" id="hourTop">00</div>
            <div className="bottom" id="hourBottom">00</div>
            <div className="circle"></div>
            <div className="circle-2"></div>
          </div>
          <div className="flipCard" id="flipCardMin">
            <div className="top" id="minTop">00</div>
            <div className="bottom" id="minBottom">00</div>
            <div className="circle"></div>
            <div className="circle-2"></div>
          </div>
          <div className="flipCard" id="flipCardSec">
            <div className="top" id="secTop">00</div>
            <div className="bottom" id="secBottom">00</div>
            <div className="circle"></div>
            <div className="circle-2"></div>
          </div>
        </main>
      ) : (
        <div className="text-center text-3xl mt-8">
          <p>Registrations have started🎉</p>
          <br />
          <Chip className="text-3xl bg-brown pt-6 pb-6 pl-8 pr-8 rounded-2xl">
            Register Now!
          </Chip>
        </div>
      )}
    </div>
  );
};

export default Time;
