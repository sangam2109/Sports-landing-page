/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
// import { Chip } from "@nextui-org/react";
import "./Time.css";

// FlipCardAnim
const Time = () => {
  // const [countdown, setCountdown] = useState(false);
  useEffect(() => {
    const FlipCardAnim = (i: any, flipCard: any) => {
      const c = flipCard.children;
      const topHalf = c[0];
      const bottom = c[1];
      const topFlip: any = document.createElement("div");
      const BottomFlip = document.createElement("div");
      topFlip.classList.add("top-flip");
      BottomFlip.classList.add("bottom-flip");
      let tempI = i;
      if (i - 1 === -2) {
        tempI = 59;
      }
      topHalf.textContent = tempI - 1 < 9 ? `0${tempI}` : tempI;
      bottom.textContent = tempI < 9 ? `0${tempI}` : tempI;
      topFlip.textContent = tempI - 1 < 9 ? `0${tempI}` : tempI - 1;
      BottomFlip.textContent = tempI < 9 ? `0${tempI}` : i;
      topFlip.addEventListener("animationstart", () => {
        topHalf.textContent = tempI - 1 < 9 ? `0${tempI}` : tempI - 1;
      });
      topFlip.addEventListener("animationend", () => {
        topFlip.remove();
      });
      BottomFlip.addEventListener("animationend", () => {
        bottom.textContent = tempI - 1 < 9 ? `0${tempI}` : tempI - 1;
        BottomFlip.remove();
      });
      flipCard.appendChild(topFlip);
      flipCard.appendChild(BottomFlip);
    };

    if (localStorage.key(0) !== "February 16, 2024 15:00:00") {
      localStorage.setItem("Date", "February 16, 2024 15:00:00");
    }
    // const Countdown = () => {
    //   if (!countdown) {
    //     return (
    //       <div className="text-center text-3xl mt-8 ">
    //         <p>Registrations has been started🎉</p>
    //         <br />
    //         <Chip className="text-3xl bg-brown pt-6 pb-6 pl-8 pr-8 rounded-2xl ">
    //           Register Now !
    //         </Chip>
    //       </div>
    //     );
    //   }
    // };

    const LaunchDate = new Date(
      localStorage.getItem("Date") as string
    ).getTime();

    const SecCARD = document.getElementById("flipCardSec");
    const MinCARD = document.getElementById("flipCardMin");
    const HrCARD = document.getElementById("flipCardHour");
    const DayCARD = document.getElementById("flipCardDay");

    const loop = setInterval(() => {
      const date = new Date().getTime();
      const distance = LaunchDate - date;
      let days:any = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours:any = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes: any = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
        // setCountdown(true);
        clearInterval(loop);
        return;
      }

      if (minutes !== 0 && seconds === 59) {
        FlipCardAnim(minutes + 1, MinCARD);
      }
      if (hours !== 0 && minutes === 59 && seconds === 59) {
        FlipCardAnim(hours + 1, HrCARD);
      }
      if (days !== 0 && hours === 59 && minutes === 59 && seconds === 59) {
        FlipCardAnim(days + 1, DayCARD);
      }

      if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        setTimeout(() => {
          (document.getElementById("timer") as HTMLElement).style.display =
            "none";
          (document.getElementById("first") as HTMLElement).style.display =
            "none";
        }, 100);
        (document.getElementById("launced") as HTMLElement).style.display =
          "block";
        (document.getElementById("second") as HTMLElement).innerHTML = "00";
      }

      if (days < 10) {
        days = `0${days}`;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      (document.getElementById("secTop") as HTMLElement).innerHTML =
        seconds.toString();
      (document.getElementById("secBottom") as HTMLElement).innerHTML =
        seconds.toString();
      FlipCardAnim(seconds, SecCARD);
      (document.getElementById("minBottom") as HTMLElement).innerHTML =
        minutes.toString();
      (document.getElementById("minTop") as HTMLElement).innerHTML =
        minutes.toString();
      (document.getElementById("hourTop") as HTMLElement).innerHTML =
        hours.toString();
      (document.getElementById("hourBottom") as HTMLElement).innerHTML =
        hours.toString();
      (document.getElementById("dayTop") as HTMLElement).innerHTML =
        days.toString();
      (document.getElementById("dayBottom") as HTMLElement).innerHTML =
        days.toString();
    }, 1000);

    return () => clearInterval(loop);
  }, []);

  return (
    <div className="Timerbody" id="body">
      <div className="flex hidden flex-col text-lightB items-center text-3xl font-bold mb-8 md:text-7xl ">
        Registration Starts After
      </div>
      <main className="center hidden" id="timer">
        <div className="flipCard" id="flipCardDay">
          <div className="top" id="dayTop">
            1
          </div>
          <div className="bottom" id="dayBottom">
            1
          </div>
          <div className="circle"></div>
          <div className="circle-2"></div>
        </div>
        <div className="flipCard" id="flipCardHour">
          <div className="top" id="hourTop">
            1
          </div>
          <div className="bottom" id="hourBottom">
            1
          </div>
          <div className="circle"></div>
          <div className="circle-2"></div>
        </div>

        <div className="flipCard" id="flipCardMin">
          <div className="top" id="minTop">
            1
          </div>
          <div className="bottom" id="minBottom">
            1
          </div>
          <div className="circle"></div>
          <div className="circle-2"></div>
        </div>

        <div className="flipCard" id="flipCardSec">
          <div className="top" id="secTop">
            1
          </div>
          <div className="bottom" id="secBottom">
            1
          </div>
          <div className="circle"></div>
          <div className="circle-2"></div>
        </div>
      </main>
      <main id="titleTimer" className=" font-bold mb-8 hidden">
        <h1>Day</h1>
        <h1>Hour</h1>
        <h1>Min</h1>
        <h1>Sec</h1>
      </main>
      {/* {countdownFinished && (
        <div className="text-center text-3xl mt-8">
          <p>Registrations have started🎉</p>
          <br />
          <Chip
            className="text-3xl bg-brown pt-6 pb-6 pl-8 pr-8 rounded-2xl"
          >
            Register Now!
          </Chip>
        </div>
      )} */}
    </div>
  );
};

export default Time;
