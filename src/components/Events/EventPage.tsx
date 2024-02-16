import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import MaleIcon from "../../assets/man.png";
// import FemaleIcon from "../../assets/woman.png";
// import { FemaleEvents, MaleEvents } from "../../contanst";
import "./EventPage.css";

export default function App() {
  return (
    <div id="EventSection" className="flex w-full flex-col">
      <div className="bg-[#1f2937] p-4 flex justify-center">
        <h1 className="text-yellow text-3xl font-bold">
          App Registration Guide
        </h1>
      </div>
      <Tabs
        className="m-auto w-full text-white justify-center p-2"
        aria-label="Dynamic tabs"
        color="warning"
      >
        <Tab
          className=""
          key="How to Register"
          title={
            <div className="flex items-center space-x-2">
              {/* <GalleryIcon/> */}
              <span className="text-lg text-[black] font-semibold">
                English
              </span>
            </div>
          }
        >
          <Card className="w-[95vw] md:w-[80vw] max-w-[900px m-auto bg-opacity-80]">
            <CardBody className="p-3">
              <iframe
                height="280"
                src="https://www.youtube.com/embed/Geu4QZLzKp0"
                title="How to Register on GNDEC ATHLETIX App | GNDEC SPORTS"
                className="w-[95%] m-auto  rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          className="w-[20vw] md:w-[50vw] "
          key="music"
          title={
            <div className="flex items-center space-x-2">
              {/* <MusicIcon/> */}
              <span className="text-lg text-[black] font-semibold font-semibold ">
                Punjabi
              </span>
            </div>
          }
        >
          <Card className="w-[95vw] md:w-[80vw] max-w-[900px m-auto  bg-opacity-80]">
            <CardBody className="p-3">
              <iframe
                height="280"
                src="https://www.youtube.com/embed/-W2LIjWljJ0"
                title="How to Register on GNDEC ATHLETIX App | GNDEC SPORTS (In Punjabi)"
                className="w-[95%] m-auto  rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </CardBody>
          </Card>
        </Tab>
        {/* <Tab
          className=""
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <span className="text-lg text-[#e4e4e4] font-semibold">Help</span>
            </div>
          }
        >
          <Card className="w-[95vw] mx-auto md:w-[80vw] opacity-80">
            <CardBody>
              <h1 className="text-2xl font-semibold">
                Welcome to our Help Section!
              </h1>
              <p className="p-2">
                We're here to assist you and ensure you have the best experience
                with GNDEC ATHLETIX. <br />
                If you have any questions, concerns, or need help, you're in the
                right place. Feel free to explore the resources below or reach
                out to us directly through the{" "}
                <a
                  className="text-primary"
                  href="https://forms.gle/qk4VsemLMHnNDH6j9"
                >
                  {" "}
                  contact form.
                </a>{" "}
                Your satisfaction is our priority!
              </p>
              <h3 className="text-lg mt-4">
                For quick help, check out our{" "}
                <a href="#FAQ" className="text-primary">
                  FAQs Section!
                </a>{" "}
              </h3>
            </CardBody>
          </Card>
        </Tab> */}
      </Tabs>
    </div>
  );
}
