/* eslint-disable @typescript-eslint/no-explicit-any */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Register from "./Register";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FemaleEvents, MaleEvents } from "../../contanst";
import Time from "../Timer/Time";

const Events = ({SelectedCARD}:any) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-[#1f2937] pt-12 EventListCont" >
      <Carousel  showArrows= {true}  selectedItem={SelectedCARD}>  
        <div className="max-w-[400vh] m-8" id="EventListCont">
          <div className="text-3xl  text-yellow font-bold md:text-6xl">
            <h2>
              Welcome to the GNDEC Annual Athletic Meet-2024
            </h2>
          </div>
          <div className="text-xl text-lightY m-4 p-4 md:text-5xl">
            <p>
              We are excited to have you join the GNDEC Athletic Meet-2024,
              where we celebrate sports. teamwork and fun!
            </p>
          </div>
        </div>
        <div className="p-4 flex justify-center">
          <Register />
        </div>
        <div className="p-4 flex justify-center" id="Event">
          <Card className="max-w-[400px] bg-lightY">
            <CardHeader className="flex gap-3 justify-center">
              <div className="flex flex-col ">
                <h2 className="text-xl">Events</h2>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className=" text-lg p-4 md:p-12  ">
              <p>
                A diverse array of events awaits participants of all interests
                and abilities.
              </p>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-end">
              <Button onPress={onOpen} color="primary" className="bg-yellow">
                All Events
              </Button>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="m-2 bg-dark"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 text-white">
                        <h1 className="text-white">Lists of Events</h1>
                        <div className="pt-4  flex items-center justify-between">
                          <div className="flex items-center justify-center space-x-1 w-1/2">
                            <span>Male</span>
                          </div>
                          <div className="flex items-center justify-center space-x-1 w-1/2">
                            <span>Female</span>
                          </div>
                        </div>
                      </ModalHeader>

                      <ModalBody>
                        <div className="flex items-start justify-between space-x-2 text-sm text-white">
                          <div className="border-r-1 w-1/2">
                            <ul>
                              {MaleEvents.events.map((item: string) => {
                                return (
                                  <li className="text-center text-sm">
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className=" w-1/2">
                            <ul>
                              {FemaleEvents.events.map((item: string) => {
                                return (
                                  <li className="text-center text-sm">
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button className="bg-brown" onPress={onClose}>
                          OK!, I understand
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </CardFooter>
          </Card>
        </div>
      </Carousel>
      <div className="bg-dark">
        <Time />
      </div>
    </div>
  );
};
export default Events;
