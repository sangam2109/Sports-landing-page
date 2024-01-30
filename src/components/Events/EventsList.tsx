import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import background from "../../assets/background.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  // Link,
  // Image,
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
import { FemaleEvents, MaleEvents, RegisterSteps } from "../../contanst";

export default function Events() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
      }}
    >
      <Carousel showArrows={true} showThumbs={false}>
        <div className="max-w-[400vh] m-8">
          <div className="text-2xl text-black">
            <h2>
              Welcome to the <br /> Annual Athletic Meet-2024
            </h2>
          </div>
          <div className="text-lg text-black m-6 p-2">
            <p>
              We are excited to have you join the GNDEC Athletic Meet-2024,
              where we celebrate sports. teamwork and fun!{" "}
            </p>
          </div>
        </div>
        <div className="m-4">
          <Card className="max-w-[400px] ">
            <CardHeader className="flex gap-3">
              {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              /> */}
              <div className="flex flex-col">
                <h2 className="text-lg">How to Register</h2>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                We've got the GNDEC ATHLETIX app just for you. It's an easy way
                to sign up and be part of the Athletic Meet 2024.
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
                className="m-2 bg-gray-900"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 text-white">
                        Steps to Register
                      </ModalHeader>
                      <ModalBody>
                        <ol className="text-white">
                          {RegisterSteps.StepsToRegister.map((steps) => {
                            return (
                              <li className="mt-1 pt-1 text-sm" key={steps.key}>
                                {steps.key}. {steps.content}
                              </li>
                            );
                          })}
                        </ol>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onPress={onClose}>
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
                className="m-2 bg-gray-900"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 text-white">
                        <h1>Lists of Events</h1>
                        <div className="pt-8 pb-4 flex items-center justify-between">
                          <div className="flex items-center justify-center space-x-2 w-1/2">
                            {/* <Image width={50} src={MaleIcon} /> */}
                            <span>Male</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2 w-1/2">
                            {/* <FemaleIcon/> */}
                            {/* <Image width={50} src={FemaleIcon} /> */}
                            <span>Female</span>
                          </div>
                        </div>
                      </ModalHeader>
                      
                      <ModalBody>
                        <div className="flex items-start justify-between space-x-4 text-sm text-white">
                          <div className="border-r-2 w-1/2">
                            <ul>
                              {MaleEvents.events.map((item: string) => {
                                return (
                                  <li className="text-center text-base">
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                          <div className="w-1/2">
                            <ul>
                              {FemaleEvents.events.map((item: string) => {
                                return (
                                  <li className="text-center text-base">
                                    {item}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onPress={onClose}>
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
      <div className=" ">
        
      </div>
    </div>
  );
}
