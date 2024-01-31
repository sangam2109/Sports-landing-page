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
  import {  RegisterSteps } from "../../contanst";

export default function Register(){
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return(
        <Card className="max-w-[400px] ">
            <CardHeader className="flex gap-3">
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
    )
}
