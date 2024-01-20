import { Button } from "@nextui-org/react"

export const Footer = () => {

    return (
        <footer className="bg-[#212121]">
            <section className="bg-[#212121] w-full  text-white flex flex-col justify-between items-center md:flex-row p-8" >
                <div className="left">
                    <h1 className="text-xl text-center md:text-start font-bold">GNDEC ATHLETIX</h1>
                    <p className="text-center opacity-80 md:text-start">Your All in one Athletic Meet Registration App</p>
                    <ul className="flex  items-center justify-center lg:justify-start gap-6 mt-14 font-normal">
                        <li>Home</li>
                        <li>Events</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="right flex flex-col items-center gap-2 mt-24" >
                    <h3 className="font-bold mr-auto">Get the app</h3>
                    <Button className="bg-white w-[80vw] max-w-[240px]">
                        <img width={20} src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/logos/logo-google.png" alt="" />
                        Android
                    </Button >
                    <Button className="bg-white w-[80vw] max-w-[240px]">
                        IOS
                    </Button>
                </div>
            </section>
            <hr className="w-[80vw] m-auto bg-white opacity-60" />
            <section className="bg-[#212121] w-full text-white flex flex-col justify-between items-center p-8" >
                <div className="left">
                    {/* <h1 className="text-xl text-center font-bold">GNDEC ATHLETIX</h1> */}
                    <p className="text-center mt-4 opacity-60">© 2024 gndecathletix.games</p>
                    {/* <ul className="flex  items-center justify-center gap-6 mt-14 font-normal">
                        <li>Home</li>
                        <li>Events</li>
                        <li>Contact Us</li>
                    </ul> */}
                </div>
            </section>
        </footer>
    )
}