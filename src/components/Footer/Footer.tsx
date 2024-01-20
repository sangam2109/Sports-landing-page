import { Button } from "@nextui-org/react"

export const Footer = () => {

    return (
        <footer className="bg-[#212121]">
            <section className="bg-[#212121] w-full text-white flex flex-col justify-between items-center p-8" >
                <div className="left">
                    <h1 className="text-xl text-center font-bold">GNDEC ATHLETIX</h1>
                    <p className="text-center mt-4">all in one sports meet registration app</p>
                    <ul className="flex  items-center justify-center gap-6 mt-14 font-normal">
                        <li>Home</li>
                        <li>Events</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="right flex flex-col items-center gap-2 mt-24" >
                    <h3 className="font-bold mr-auto">Get the app</h3>
                    <Button className="bg-white w-[80vw]">
                        <img width={20} src="https://demos.creative-tim.com/nextjs-tailwind-app-presentation-page/logos/logo-google.png" alt="" />
                        Android
                    </Button >
                    <Button className="bg-white w-[80vw] ">
                        IOS
                    </Button>
                </div>
            </section>
            <hr className="w-[80vw] m-auto bg-white" />
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