/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@nextui-org/react";
import { FaApple } from "react-icons/fa";
import ALogo from "../../assets/android-logo.png";

export const Footer = ({setSelectedCard}:any) => {
  return (
    <footer className="bg-[#212121]">
      <section className="bg-[#212121] w-full  text-white flex flex-col justify-between items-center md:flex-row p-8">
        <div className="left">
          <h1 className="text-xl text-center text-white md:text-start font-bold">
            GNDEC ATHLETIX
          </h1>
          <p className="text-center opacity-80 md:text-start">
            Your All in one Athletic Meet Registration App
          </p>
          <ul className="flex flex-wrap  items-center justify-center lg:justify-start gap-6 mt-8 font-normal">
            <a href="#Home">
              <li>Home</li>
            </a>
            <a
            onClick={()=>{
                setSelectedCard(1);document.getElementById('EventListCont')?.scrollIntoView({behavior:'smooth', block:'center'})
            }}
            href="#howToRegister">
              <li>How to Register</li>
            </a>
            <a
            onClick={()=>{
                setSelectedCard(2);document.getElementById('EventListCont')?.scrollIntoView({behavior:'smooth', block:'center'})
            }}
             
            href="#EventDetails">
              <li>Events</li>
            </a>
            <a href="#DevTeam">
              <li>Dev Team</li>
            </a>
            <a href="https://docs.google.com/forms/d/1_Iwr8IrmGebCCm94TL-mWa3H4MjsUPdswBs5sGd-KZ0/edit">
            <li>Contact Us</li>
            </a>
          </ul>
        </div>

        <div className="right flex flex-col items-center gap-2 mt-8">
          <h3 className="font-bold mr-auto">Get the app</h3>
            <Button
              className="text-white w-[80vw] max-w-[240px]"
              variant="bordered"
              // onClick={()=>{document.getElementById('body')?.scrollIntoView({behavior:'smooth', block:'center'})}}
              onClick={()=>{window.open("https://github.com/sangam2109/Sports-landing-page/releases/download/app/GNDEC.Athletix.apk")}}
            >
              <img width={45} src={ALogo} alt="" />
              Android
            </Button>

            <Button
              className="w-[80vw] max-w-[240px]"
              variant="shadow"
              color="primary"
              onClick={()=>{window.open("https://www.gndecathletix.games")}}
              // onClick={()=>{document.getElementById('body')?.scrollIntoView({behavior:'smooth', block:'center'})}}
            >
              <FaApple size={21} />
              IOS
            </Button>
        </div>
      </section>
      <hr className="w-[80vw] m-auto bg-white opacity-60" />
      <section className="bg-[#212121] w-full text-white flex flex-col  items-center p-4">
        <div className="">
          {/* <h1 className="text-xl text-center font-bold">GNDEC ATHLETIX</h1> */}
          <p
            className="text-center opacity-60"
            onClick={() => {
              window.open("https://info.gndecathletix.games");
            }}
          >
            © 2024 gndecathletix.games
          </p>
          {/* <ul className="flex  items-center justify-center gap-6 mt-14 font-normal">
                        <li>Home</li>
                        <li>Events</li>
                        <li>Contact Us</li>
                    </ul> */}
        </div>
      </section>
    </footer>
  );
};
