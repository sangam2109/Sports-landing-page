/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
// import { Chip } from "@nextui-org/react";
import "./Time.css";
// const Time: React.FC = () => {
//   const [countdown, setCountdown] = useState<Date | null>(
//     new Date("2024-01-31T02:15:00+05:30")
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countdown ? countdown.getTime() - now : 0;

//       if (distance <= 0) {
//         clearInterval(interval);
//         setCountdown(null);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [countdown]);

//   const formatTime = (time: number): string => {
//     return time < 10 ? `0${time}` : `${time}`;
//   };

//   const Countdown = () => {
//     if (!countdown) {
//       return (
//         <div className="text-center text-3xl mt-8 ">
//           <p>Registrations has been started🎉</p>
//           <br />
//           <Chip
//             color="primary"
//             className="text-3xl pt-6 pb-6 pl-8 pr-8 rounded-2xl "
//           >
//             Register Now !
//           </Chip>
//         </div>
//       );
//     }

//     const days = Math.floor(countdown.getTime() / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (countdown.getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor(
//       (countdown.getTime() % (1000 * 60 * 60)) / (1000 * 60)
//     );
//     const seconds = Math.floor((countdown.getTime() % (1000 * 60)) / 1000);

//     return (
//       <div className="w-full ">
//         <div className="text-center text-2xl mt-8 ">
//           <h1>Registration Starts After</h1>
//           <div className="flex justify-center mt-4">
//             <div className="mx-2">
//               <div className="text-3xl">{formatTime(days)}</div>
//               <div className="text-xl">Days</div>
//             </div>
//             <div className="mx-2">
//               <div className="text-3xl">{formatTime(hours)}</div>
//               <div className="text-xl">Hours</div>
//             </div>
//             <div className="mx-2">
//               <div className="text-3xl">{formatTime(minutes)}</div>
//               <div className="text-xl">Minutes</div>
//             </div>
//             <div className="mx-2">
//               <div className="text-3xl">{formatTime(seconds)}</div>
//               <div className="text-xl">Seconds</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return <Countdown />;
// };
// FlipCardAnim

const Time = () => {
  useEffect(() => {
    const FlipCardAnim = (i:any, flipCard:any) => {
      const c = flipCard.children;
      const topHalf = c[0];
      const bottom = c[1];
      const topFlip:any = document.createElement("div");
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

    if (localStorage.key(0) !== "May 5, 2024 00:00:00") {
      localStorage.setItem("Date", "February 17, 2024 00:00:00");
    }

    const LaunchDate = new Date(localStorage.getItem("Date") as string).getTime();

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
      let minutes:any = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
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
          (document.getElementById("timer") as HTMLElement).style.display = "none";
          (document.getElementById("first") as HTMLElement).style.display = "none";
        }, 100);
        (document.getElementById("launced") as HTMLElement).style.display = "block";
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
      (document.getElementById("secTop") as HTMLElement).innerHTML = seconds.toString();
      (document.getElementById("secBottom") as HTMLElement).innerHTML = seconds.toString();
      FlipCardAnim(seconds, SecCARD);
      (document.getElementById("minBottom") as HTMLElement).innerHTML = minutes.toString();
      (document.getElementById("minTop") as HTMLElement).innerHTML = minutes.toString();
      (document.getElementById("hourTop") as HTMLElement).innerHTML = hours.toString();
      (document.getElementById("hourBottom") as HTMLElement).innerHTML = hours.toString();
      (document.getElementById("dayTop")as HTMLElement ).innerHTML = days.toString();
      (document.getElementById("dayBottom") as HTMLElement).innerHTML = days.toString();
    }, 1000);

    return () => clearInterval(loop);
  }, []);

  return (
    <div className="" id="body">
      <main className="center" id="timer">
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
      <main id="titleTimer" className="text-3xl text-lightB">
        <h1>Day</h1>
        <h1>Hour</h1>
        <h1>Min</h1>
        <h1>Sec</h1>
      </main>
    </div>
  );
};

export default Time;
