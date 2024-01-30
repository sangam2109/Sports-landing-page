import { useState, useEffect } from "react";

const Time: React.FC = () => {
  const [countdown, setCountdown] = useState<Date | null>(
    new Date("2024-05-05T00:00:00")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdown!.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setCountdown(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  if (!countdown) {
    return (
      <div className="text-center text-3xl mt-8 ">
        <p>Countdown finished!</p>
        <p>Our website has launched successfully 🎉</p>
        <a href="https://vansh1190.github.io/about" className="text-blue-500">
          Go to Website
        </a>
      </div>
    );
  }

  const days = Math.floor(countdown.getTime() / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countdown.getTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (countdown.getTime() % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((countdown.getTime() % (1000 * 60)) / 1000);

  return (
    <div className="w-full ">
      <div className="text-center text-2xl mt-8 ">
        <h1>Registration Starts After</h1>
        <div className="flex justify-center mt-4">
          <div className="mx-2">
            <div className="text-3xl">{formatTime(days)}</div>
            <div className="text-xl">Days</div>
          </div>
          <div className="mx-2">
            <div className="text-3xl">{formatTime(hours)}</div>
            <div className="text-xl">Hours</div>
          </div>
          <div className="mx-2">
            <div className="text-3xl">{formatTime(minutes)}</div>
            <div className="text-xl">Minutes</div>
          </div>
          <div className="mx-2">
            <div className="text-3xl">{formatTime(seconds)}</div>
            <div className="text-xl">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
