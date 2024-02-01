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

const Events = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      className="bg-[#111827] "
      
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Carousel showArrows={false} >
        <div className="max-w-[400vh] m-8">
          <div className="text-2xl text-lightY font-bold">
            <h2>
              Welcome to the <br /> Annual Athletic Meet-2024
            </h2>
          </div>
          <div className="text-lg text-lightY m-6 p-2">
            <p>
              We are excited to have you join the GNDEC Athletic Meet-2024,
              where we celebrate sports. teamwork and fun!{" "}
            </p>
          </div>
        </div>
        <div className="m-4">
          <Register />
        </div>
        <div className="m-4">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col ">
                <h2 className="text-lg">Events</h2>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="h-[13vh] text-md">
              <p>
                A diverse array of events awaits participants of all interests
                and abilities.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button onPress={onOpen} color="primary">
                Know More !
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
      <div className="">
        <Time />
      </div>
    </div>
  );
};
export default Events;
