import { Tabs, Tab, Card, CardBody, Divider, Image } from "@nextui-org/react";
// import {GalleryIcon} from "./GalleryIcon";
// import {MusicIcon} from "./MusicIcon";
// import {VideoIcon} from "./VideoIcon";
import MaleIcon from '../../assets/man.png'
import FemaleIcon from '../../assets/woman.png'
import { FemaleEvents, MaleEvents } from "../../contanst";

export default function App() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color='primary' variant="bordered">
        <Tab
          key="How to Register"
          title={
            <div className="flex items-center space-x-2">
              {/* <GalleryIcon/> */}
              <span>How to Register</span>
            </div>
          }
        >
          <Card className="w-[80vw] md:w-[50vw]"  >
            <CardBody>
              <h1 className="text-2xl font-semibold">Register in Athletic Meet 2024</h1>
              <p className="opacity-80">add text about athletic meet 2024 and mention that you can only register using gndec athletix app</p>
              <Divider className="my-4" />
              <h3 className="text-xl"> Steps to register</h3>
              <ul className="px-4">
                <li>
                  1. Use Only College Email id.<br />
                  2. If you don't have college email id then go to Issue Section and Fill the Form.<br />
                  3. You can select 3 events atmost. It can be either 2 field events and 1 track events or 1 field event.<br />and 2 track events.<br />
                  4. Please choose carefully, as we will not be able to accommodate any changes requested by you in the.future.<br />
                  5. Keep watching Announcements for live updates of sports.<br />
                </li>
              </ul>
              <iframe src="https://www.youtube-nocookie.com/embed/-mgGnx1p3b8?modestbranding=1&rel=0&iv_load_policy=3&color=white&disablekb=1" className="w-full" height="315" title="A YouTube video" frameBorder="0" allowFullScreen></iframe>
            </CardBody>
          </Card>
        </Tab>
        <Tab
          className="w-[80vw] md:w-[50vw]"
          key="music"
          title={
            <div className="flex items-center space-x-2">
              {/* <MusicIcon/> */}
              <span>Events</span>
            </div>
          }
        >
          <Card className="w-[90vw] md:w-[80vw]">
            <CardBody>
              <h1 className="text-2xl font-semibold">List of Events</h1>
              <Tabs aria-label="Options" >
                <Tab
                  className="p-8"
                  key="male"
                  title={
                    <div className="flex items-center space-x-2">
                      <Image width={50} src={MaleIcon} />
                      <span>Male</span>
                    </div>
                  }
                >
                  <div>
                    <ul>
                      {MaleEvents.events.map((item:string) => {
                        return (
                          <li className="">{item}</li>
                          )
                      })}
                    </ul>
                  </div>
                </Tab>
                <Tab
                  key="female"
                  className="p-8"
                  title={
                    <div className="flex items-center space-x-2">
                      {/* <FemaleIcon/> */}
                      <Image width={50} src={FemaleIcon} />
                      <span>Female</span>
                    </div>
                  }
                >

                <div>
                    <ul>
                      {FemaleEvents.events.map((item:string) => {
                        return (
                          <li className="">{item}</li>
                          )
                        })}
                    </ul>
                  </div>
                        </Tab>
              </Tabs>
              <Divider className="my-4" />
            </CardBody>
          </Card>
        </Tab>
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <span>Help</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
