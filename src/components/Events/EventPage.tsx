import { Tabs, Tab, Card, CardBody, Divider, Image } from "@nextui-org/react";
// import {GalleryIcon} from "./GalleryIcon";
// import {MusicIcon} from "./MusicIcon";
// import {VideoIcon} from "./VideoIcon";
import MaleIcon from '../../assets/man.png'
import FemaleIcon from '../../assets/woman.png'
import { FemaleEvents, MaleEvents } from "../../contanst";
import './EventPage.css'

export default function App() {
  return (
    <div id="EventSection" className="flex w-full flex-col justify-center">
      <Tabs className="m-auto w-full bg-[#0e0e0e99] text-white" aria-label="Options" color='primary' variant="underlined">
        <Tab
          className=""
          key="How to Register"
          title={
            <div className="flex items-center space-x-2">
              {/* <GalleryIcon/> */}
              <span className="text-lg text-[#e4e4e4] font-semibold">How to Register</span>
            </div>
          }
        >
          <Card className="w-[95vw] md:w-[50vw] m-auto bg-opacity-80"  >
            <CardBody className="">
              <h1 className="text-2xl font-semibold">Welcome to Athletic Meet 2024</h1>
              <p className="opacity-80 pt-2">We're excited to have you join the GNDEC Athletic Meet 2024, where we celebrate sports, teamwork, and fun!</p>
              <p className="font-semibold pt-4">📅 Date: 22nd, 22rd February 2024</p>
              <p className="font-semibold">Venue: Sports Complex, GNDEC</p>
              <Divider className="my-4" />
              <h3 className="text-xl font-semibold"> Steps to Register -</h3>
              <h4 className="opacity-90 text-sm px-4">We've got the GNDEC ATHLETIX app just for you. It's an easy way to sign up and be part of the Athletic Meet 2024.</h4>
              <ul className="px-4 py-2 mb-6">
                <li className="text-black ">
                  1. Download the App <a download className="text-primary underline"
                    href="https://greetings-six.vercel.app/app-debug.apk ">Download now.</a> <br />
                  1. Use Only College Email id.<br />
                  2. If you don't have college email id then go to <a className="text-primary" href="">Help  Section</a> and Fill the Form.<br />
                  4. Follow the simple steps to sign up for the events you want to participate in. <br />
                  3. You can select 3 events atmost. It can be either 2 field events and 1 track events or 1 field event and 2 track events.<br />
                  4. Please choose carefully, as we will not be able to accommodate any changes requested by you in the.future.<br />
                  5. Keep watching Announcements for live updates of Athletic Meet.<br />
                </li>
              </ul>
              <iframe src="https://www.youtube-nocookie.com/embed/-mgGnx1p3b8?modestbranding=1&rel=0&iv_load_policy=3&color=white&disablekb=1" className="w-[95%] m-auto  rounded-2xl" height="315" title="A YouTube video" frameBorder="0" allowFullScreen></iframe>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          className="w-[20vw] md:w-[50vw] "
          key="music"
          title={
            <div className="flex items-center space-x-2">
              {/* <MusicIcon/> */}
              <span className="text-lg text-[#e4e4e4] font-semibold font-semibold ">Events</span>
            </div>
          }
        >
          <Card className="w-[95vw] md:w-[80vw] opacity-80">
            <CardBody>
              <h1 className="text-2xl font-semibold">List of Events</h1>
              <div className="pt-8 pb-4 flex items-center justify-between">
                <div className="flex items-center justify-center space-x-2 w-1/2">
                  <Image width={50} src={MaleIcon} />
                  <span>Male</span>
                </div>
                <div className="flex items-center justify-center space-x-2 w-1/2">
                  {/* <FemaleIcon/> */}
                  <Image width={50} src={FemaleIcon} />
                  <span>Female</span>
                </div>
              </div>

              <Divider className="mb-4" />
              <div className="flex items-start justify-between space-x-4 text-small">

                <div className="border-r-2 w-1/2">
                  <ul>
                    {MaleEvents.events.map((item: string) => {
                      return (
                        <li className="text-center text-base">{item}</li>
                      )
                    })}
                  </ul>
                </div>

                <div className="w-1/2">
                  <ul>
                    {FemaleEvents.events.map((item: string) => {
                      return (
                        <li className="text-center text-base">{item}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>


            </CardBody>
          </Card>
        </Tab>
        <Tab
          className=""
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <span className="text-lg text-[#e4e4e4] font-semibold">Help</span>
            </div>
          }
        >

        <Card className="w-[95vw] md:w-[80vw] opacity-80">
          <CardBody>
            <h1 className="text-2xl font-semibold">Welcome to our Help Section!</h1>
            <p className="p-2">We're here to assist you and ensure you have the best experience with GNDEC ATHLETIX. <br /> 
             If you have any questions, concerns, or need help, you're in the right place. Feel free to explore the resources below or reach out to us directly through the <a className="text-primary" href=""> contact form.</a> Your satisfaction is our priority!</p>
             <h3 className="text-lg mt-4">For quick help, check out our <a href="#FAQ" className="text-primary">FAQs Section!</a> </h3>
          </CardBody>
        </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
